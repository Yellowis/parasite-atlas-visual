
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Send, MessageSquare, Shuffle, List } from 'lucide-react';
import { discursiveQuestions } from '@/data/discursive-questions';
import { useToast } from '@/hooks/use-toast';

const DiscursiveQuestions = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [gameMode, setGameMode] = useState<'menu' | 'normal' | 'random'>('menu');
  const [questions, setQuestions] = useState(discursiveQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startGame = (mode: 'normal' | 'random') => {
    if (mode === 'random') {
      setQuestions(shuffleArray(discursiveQuestions));
    } else {
      setQuestions(discursiveQuestions);
    }
    setGameMode(mode);
    setCurrentIndex(0);
    setUserAnswer('');
    setFeedback('');
    setIsFinished(false);
  };

  const handleSubmitAnswer = async () => {
    if (!userAnswer.trim()) {
      toast({
        title: "Atenção",
        description: "Por favor, digite uma resposta antes de enviar.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://huggingface.co/spaces/Yellowis/avaliador-jogo/api/predict/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [userAnswer, currentQuestion.gabarito]
        })
      });

      if (!response.ok) {
        throw new Error('Erro na API');
      }

      const data = await response.json();
      setFeedback(data.data[0]);

      // Após 2 segundos, passar para próxima pergunta
      setTimeout(() => {
        if (currentIndex + 1 < questions.length) {
          setCurrentIndex(currentIndex + 1);
          setUserAnswer('');
          setFeedback('');
        } else {
          setIsFinished(true);
        }
      }, 2000);
    } catch (error) {
      console.error('Erro ao avaliar resposta:', error);
      toast({
        title: "Erro",
        description: "Não foi possível avaliar a resposta. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRestart = () => {
    setGameMode('menu');
    setCurrentIndex(0);
    setUserAnswer('');
    setFeedback('');
    setIsFinished(false);
  };

  // Menu inicial
  if (gameMode === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4">
        <div className="container mx-auto max-w-2xl">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Atlas
          </Button>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl text-green-600 mb-4">
                📝 Perguntas Discursivas
              </CardTitle>
              <div className="text-lg text-gray-600 mb-6">
                Escolha o modo de jogo:
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <Button 
                  onClick={() => startGame('normal')} 
                  className="w-full h-16 text-lg"
                  size="lg"
                >
                  <List className="mr-3 h-6 w-6" />
                  Modo Normal
                  <div className="text-sm opacity-80 ml-2">(Ordem sequencial)</div>
                </Button>
                
                <Button 
                  onClick={() => startGame('random')} 
                  variant="secondary"
                  className="w-full h-16 text-lg"
                  size="lg"
                >
                  <Shuffle className="mr-3 h-6 w-6" />
                  Modo Aleatório
                  <div className="text-sm opacity-80 ml-2">(Ordem embaralhada)</div>
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-blue-700">
                  <strong>Total de perguntas:</strong> {discursiveQuestions.length}
                </div>
                <div className="text-xs text-blue-600 mt-1">
                  Suas respostas serão avaliadas automaticamente por IA
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Tela de finalização
  if (isFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4">
        <div className="container mx-auto max-w-2xl">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Atlas
          </Button>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl text-green-600">
                🎉 Parabéns, você terminou!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-xl text-gray-600">
                Você completou todas as {questions.length} perguntas discursivas no modo {gameMode === 'normal' ? 'Normal' : 'Aleatório'}!
              </div>
              <div className="space-y-2">
                <Button onClick={handleRestart} className="w-full" size="lg">
                  🔄 Escolher Modo Novamente
                </Button>
                <Button 
                  onClick={() => navigate('/')} 
                  variant="outline" 
                  className="w-full"
                  size="lg"
                >
                  📚 Voltar ao Atlas
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Jogo em andamento
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <Button 
          onClick={handleRestart} 
          variant="outline" 
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao Menu
        </Button>

        {/* Header com progresso */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">
                  Perguntas Discursivas - Modo {gameMode === 'normal' ? 'Normal' : 'Aleatório'}
                </span>
              </div>
              <div className="text-sm font-bold text-green-600">
                {currentIndex + 1} / {questions.length}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Pergunta atual */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-center leading-relaxed">
              {currentQuestion.pergunta}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Digite sua resposta detalhada aqui..."
              className="min-h-32 text-base"
              disabled={isLoading || !!feedback}
            />
            
            <Button
              onClick={handleSubmitAnswer}
              disabled={isLoading || !!feedback}
              className="w-full"
              size="lg"
            >
              {isLoading ? (
                "Avaliando..."
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Resposta
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Feedback da IA */}
        {feedback && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg text-blue-600">
                🤖 Avaliação da IA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg">
                {feedback}
              </div>
              <div className="text-sm text-gray-500 mt-2 text-center">
                Próxima pergunta em breve...
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DiscursiveQuestions;
