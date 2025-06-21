
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Parasite {
  name: string;
  type: string;
  habitat: string;
  infectiousForms: string;
  transmission: string;
  biologicalCycle: string;
  symptoms: string[];
}

interface QuizModalProps {
  parasites: Parasite[];
  onComplete: (correct: boolean) => void;
}

interface QuizQuestion {
  question: string;
  correctAnswer: string;
  options: string[];
  field: keyof Parasite;
}

const QuizModal = ({ parasites, onComplete }: QuizModalProps) => {
  const [currentQuiz, setCurrentQuiz] = useState<QuizQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    generateQuiz();
  }, [parasites]);

  const generateQuiz = () => {
    const parasite = parasites[Math.floor(Math.random() * parasites.length)];
    
    const questionTypes = [
      {
        question: `Qual a forma infectante de ${parasite.name}?`,
        field: 'infectiousForms' as keyof Parasite,
        correctAnswer: parasite.infectiousForms
      },
      {
        question: `Como é a transmissão de ${parasite.name}?`,
        field: 'transmission' as keyof Parasite,
        correctAnswer: parasite.transmission.split('.')[0] + '.' // Primeira frase apenas
      },
      {
        question: `Qual o ciclo biológico de ${parasite.name}?`,
        field: 'biologicalCycle' as keyof Parasite,
        correctAnswer: parasite.biologicalCycle.split('.')[0] + '.' // Primeira frase apenas
      },
      {
        question: `Qual o tipo de ${parasite.name}?`,
        field: 'type' as keyof Parasite,
        correctAnswer: parasite.type
      }
    ];

    const selectedQuestion = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    
    // Gerar opções incorretas
    const otherParasites = parasites.filter(p => p.name !== parasite.name);
    const wrongOptions = otherParasites
      .map(p => {
        const value = p[selectedQuestion.field];
        if (typeof value === 'string') {
          return selectedQuestion.field === 'transmission' || selectedQuestion.field === 'biologicalCycle' 
            ? value.split('.')[0] + '.'
            : value;
        }
        return '';
      })
      .filter(option => option && option !== selectedQuestion.correctAnswer)
      .slice(0, 2);

    // Misturar as opções
    const allOptions = [selectedQuestion.correctAnswer, ...wrongOptions]
      .sort(() => Math.random() - 0.5);

    setCurrentQuiz({
      ...selectedQuestion,
      options: allOptions
    });
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!currentQuiz || !selectedAnswer) return;
    
    const correct = selectedAnswer === currentQuiz.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    setTimeout(() => {
      onComplete(correct);
    }, 2000);
  };

  if (!currentQuiz) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md mx-auto animate-scale-in">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            ⚡ MiniQuiz Relâmpago!
          </CardTitle>
          <div className="text-lg font-semibold text-blue-600 mt-2">
            {currentQuiz.question.split(' ')[0]} {currentQuiz.question.split(' ').slice(1, 4).join(' ')}
          </div>
          <Badge variant="outline" className="mx-auto mt-2">
            {currentQuiz.question.match(/de (.+?)\?/)?.[1] || 'Parasita'}
          </Badge>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="text-center mb-4">
            <div className="text-sm text-gray-600 mb-2">
              {currentQuiz.question}
            </div>
          </div>

          {!showResult ? (
            <>
              <div className="space-y-2">
                {currentQuiz.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`w-full p-3 text-left rounded-lg border transition-all ${
                      selectedAnswer === option
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-semibold mr-2">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option.length > 50 ? option.substring(0, 50) + '...' : option}
                  </button>
                ))}
              </div>
              
              <Button
                onClick={handleSubmit}
                disabled={!selectedAnswer}
                className="w-full"
              >
                Confirmar Resposta
              </Button>
            </>
          ) : (
            <div className="text-center space-y-4">
              <div className={`text-2xl ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {isCorrect ? '🎉 Correto!' : '❌ Incorreto!'}
              </div>
              <div className="text-lg font-semibold">
                {isCorrect ? '+500 pontos bônus!' : 'Continue estudando!'}
              </div>
              {!isCorrect && (
                <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded">
                  <strong>Resposta correta:</strong><br />
                  {currentQuiz.correctAnswer.length > 80 
                    ? currentQuiz.correctAnswer.substring(0, 80) + '...'
                    : currentQuiz.correctAnswer
                  }
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizModal;
