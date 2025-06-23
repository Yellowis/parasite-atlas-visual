
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Trophy, RotateCcw } from 'lucide-react';
import { quizPhase1, quizPhase2 } from '@/data/quiz-review';

const QuizReview = () => {
  const navigate = useNavigate();
  const [selectedPhase, setSelectedPhase] = useState<'menu' | 'phase1' | 'phase2'>('menu');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const currentQuiz = selectedPhase === 'phase1' ? quizPhase1 : quizPhase2;
  const currentQuestion = currentQuiz[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    if (isCorrect && !answeredQuestions.includes(currentQuestionIndex)) {
      setScore(score + 1);
      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < currentQuiz.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setIsQuizFinished(false);
  };

  const startPhase = (phase: 'phase1' | 'phase2') => {
    setSelectedPhase(phase);
    resetQuiz();
  };

  const backToMenu = () => {
    setSelectedPhase('menu');
    resetQuiz();
  };

  // Menu inicial
  if (selectedPhase === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 p-4">
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
              <CardTitle className="text-3xl text-yellow-600 mb-4">
                🧠 Quiz de Revisão
              </CardTitle>
              <div className="text-lg text-gray-600 mb-6">
                Escolha uma fase do quiz:
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <Button 
                  onClick={() => startPhase('phase1')} 
                  className="w-full h-16 text-lg bg-yellow-500 hover:bg-yellow-600"
                  size="lg"
                >
                  <BookOpen className="mr-3 h-6 w-6" />
                  Fase 1
                  <div className="text-sm opacity-80 ml-2">({quizPhase1.length} perguntas)</div>
                </Button>
                
                <Button 
                  onClick={() => startPhase('phase2')} 
                  className="w-full h-16 text-lg bg-orange-500 hover:bg-orange-600"
                  size="lg"
                >
                  <Trophy className="mr-3 h-6 w-6" />
                  Fase 2
                  <div className="text-sm opacity-80 ml-2">({quizPhase2.length} perguntas)</div>
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <div className="text-sm text-yellow-700">
                  <strong>Total de perguntas:</strong> Fase 1: {quizPhase1.length} | Fase 2: {quizPhase2.length}
                </div>
                <div className="text-xs text-yellow-600 mt-1">
                  Quiz de múltipla escolha para testar seus conhecimentos
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Quiz finalizado
  if (isQuizFinished) {
    const percentage = Math.round((score / currentQuiz.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 p-4">
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
              <CardTitle className="text-3xl text-yellow-600">
                🎉 Quiz Finalizado!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-6xl mb-4">
                {percentage >= 80 ? '🏆' : percentage >= 60 ? '👏' : '📚'}
              </div>
              <div className="text-2xl font-bold text-gray-700">
                Sua pontuação: {score}/{currentQuiz.length}
              </div>
              <div className="text-xl text-gray-600">
                {percentage}% de acertos
              </div>
              <div className="text-lg text-gray-500">
                {percentage >= 80 ? 'Excelente! Você domina o conteúdo!' :
                 percentage >= 60 ? 'Bom trabalho! Continue estudando!' :
                 'Continue praticando para melhorar!'}
              </div>
              <div className="space-y-2">
                <Button onClick={resetQuiz} className="w-full" size="lg">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Refazer Quiz
                </Button>
                <Button 
                  onClick={backToMenu} 
                  variant="outline" 
                  className="w-full"
                  size="lg"
                >
                  📚 Escolher Outra Fase
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Quiz em andamento
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <Button 
          onClick={backToMenu} 
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
                <BookOpen className="h-5 w-5 text-yellow-600" />
                <span className="text-sm text-gray-600">
                  Quiz de Revisão - {selectedPhase === 'phase1' ? 'Fase 1' : 'Fase 2'}
                </span>
              </div>
              <div className="text-sm font-bold text-yellow-600">
                {currentQuestionIndex + 1} / {currentQuiz.length}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-yellow-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / currentQuiz.length) * 100}%` }}
              />
            </div>
            <div className="text-right text-sm text-gray-600 mt-1">
              Pontuação: {score}/{currentQuiz.length}
            </div>
          </CardContent>
        </Card>

        {/* Pergunta atual */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full p-4 text-left rounded-lg border transition-colors ${
                  selectedAnswer === index
                    ? showResult
                      ? index === currentQuestion.correctAnswer
                        ? 'bg-green-100 border-green-500 text-green-800'
                        : 'bg-red-100 border-red-500 text-red-800'
                      : 'bg-yellow-100 border-yellow-500'
                    : showResult && index === currentQuestion.correctAnswer
                    ? 'bg-green-100 border-green-500 text-green-800'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <span className="font-medium mr-3">
                    {String.fromCharCode(65 + index)})
                  </span>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Botões de ação */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-center">
              {!showResult ? (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  size="lg"
                  className="px-8"
                >
                  Confirmar Resposta
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  size="lg"
                  className="px-8"
                >
                  {currentQuestionIndex + 1 < currentQuiz.length ? 'Próxima Pergunta' : 'Finalizar Quiz'}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizReview;
