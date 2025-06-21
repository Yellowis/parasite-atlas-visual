
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phase } from '@/data/microscopio-game';
import { Trophy, Star, BookOpen, Target } from 'lucide-react';
import FlashcardReview from './FlashcardReview';

interface PhaseSummaryProps {
  phase: Phase;
  score: number;
  correctAnswers: number;
  maxStreak: number;
  onNext: () => void;
  onRestart: () => void;
  isLastPhase: boolean;
}

const PhaseSummary = ({ 
  phase, 
  score, 
  correctAnswers, 
  maxStreak, 
  onNext, 
  onRestart, 
  isLastPhase 
}: PhaseSummaryProps) => {
  const [showFlashcards, setShowFlashcards] = useState(false);

  const getMedal = () => {
    if (correctAnswers === 10) return { emoji: "🥇", text: "Ouro - Perfeito!" };
    if (correctAnswers >= 8) return { emoji: "🥈", text: "Prata - Excelente!" };
    if (correctAnswers >= 6) return { emoji: "🥉", text: "Bronze - Bom trabalho!" };
    return { emoji: "📚", text: "Continue estudando!" };
  };

  const getMotivationalMessage = () => {
    if (score <= 300) return "Continue estudando! 📚";
    if (score <= 600) return "Bom trabalho! 👍";
    return "Parasitologista nato! 🏆";
  };

  const medal = getMedal();

  if (showFlashcards) {
    return (
      <FlashcardReview 
        flashcards={phase.flashcards}
        onClose={() => setShowFlashcards(false)}
      />
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader className="text-center">
          <div className="text-6xl mb-4">{medal.emoji}</div>
          <CardTitle className="text-3xl text-purple-600">
            Fase {phase.id} Concluída!
          </CardTitle>
          <div className="text-xl text-gray-600 mt-2">
            {medal.text}
          </div>
        </CardHeader>
        <CardContent>
          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-sm text-gray-600">Pontuação</span>
              </div>
              <div className="text-2xl font-bold text-purple-600">{score}</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-600">Acertos</span>
              </div>
              <div className="text-2xl font-bold text-green-600">{correctAnswers}/10</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm text-gray-600">Maior Sequência</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">x{maxStreak}</div>
            </div>
          </div>

          {/* Resumo de aprendizado */}
          <Card className="mb-6 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Resumo de Aprendizado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {phase.flashcards.slice(0, 3).map((card, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>{card.term}:</strong> {card.definition}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mensagem motivacional */}
          <div className="text-center text-xl mb-6">
            {getMotivationalMessage()}
          </div>

          {/* Botões de ação */}
          <div className="space-y-3">
            <Button
              onClick={() => setShowFlashcards(true)}
              variant="outline"
              className="w-full"
              size="lg"
            >
              📚 Revisão Rápida (Flashcards)
            </Button>
            
            {score >= 800 && (
              <div className="text-center p-4 bg-yellow-50 rounded-lg border">
                <div className="text-2xl mb-2">🎁</div>
                <div className="text-sm text-yellow-700">
                  <strong>Caixa Surpresa Desbloqueada!</strong><br />
                  Excelente desempenho! Você dominou este conteúdo.
                </div>
              </div>
            )}
            
            <Button
              onClick={isLastPhase ? onRestart : onNext}
              className="w-full"
              size="lg"
            >
              {isLastPhase ? "🔄 Reiniciar Jogo" : "➡️ Próxima Fase"}
            </Button>
            
            <Button
              onClick={onRestart}
              variant="outline"
              className="w-full"
            >
              🔄 Repetir Esta Fase
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhaseSummary;
