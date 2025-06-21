
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Question } from '@/data/microscopio-game';
import { Timer, Trophy, Target } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  timeLeft: number;
  score: number;
  streak: number;
  onAnswer: (optionIndex: number) => void;
  selectedAnswer: number | null;
  showFeedback: boolean;
}

const QuestionCard = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  timeLeft, 
  score, 
  streak,
  onAnswer, 
  selectedAnswer, 
  showFeedback 
}: QuestionCardProps) => {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header com informações do jogo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm text-gray-600">Pontuação</span>
            </div>
            <div className="text-2xl font-bold text-purple-600">{score}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Timer className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-sm text-gray-600">Tempo</span>
            </div>
            <div className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-red-500' : 'text-green-600'}`}>
              {timeLeft}s
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-sm text-gray-600">Sequência</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">x{streak}</div>
          </CardContent>
        </Card>
      </div>

      <Progress value={progress} className="mb-6" />

      {/* Pergunta principal */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl text-center leading-relaxed">
            Pergunta {questionNumber} de {totalQuestions}
          </CardTitle>
          <div className="text-2xl text-center mt-4">
            {question.question}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => onAnswer(index)}
                disabled={showFeedback}
                variant={
                  showFeedback
                    ? selectedAnswer === index
                      ? index === question.correct
                        ? "default"
                        : "destructive"
                      : index === question.correct
                      ? "default"
                      : "outline"
                    : "outline"
                }
                className={`h-auto p-4 text-left whitespace-normal ${
                  showFeedback && index === question.correct
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : showFeedback && selectedAnswer === index && index !== question.correct
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : ""
                }`}
              >
                <div className="flex items-center w-full">
                  <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {showFeedback && index === question.correct && (
                    <span className="ml-2">✔️</span>
                  )}
                  {showFeedback && selectedAnswer === index && index !== question.correct && (
                    <span className="ml-2">❌</span>
                  )}
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Feedback */}
      {showFeedback && (
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl mb-2">
                {selectedAnswer === question.correct ? "✔️ Correto!" : selectedAnswer === -1 ? "⏰ Tempo esgotado!" : "❌ Incorreto!"}
              </div>
              <div className="text-gray-700 leading-relaxed">
                <strong>Explicação:</strong> {question.explanation}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QuestionCard;
