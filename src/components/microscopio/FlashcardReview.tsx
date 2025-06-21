
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flashcard } from '@/data/microscopio-game';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface FlashcardReviewProps {
  flashcards: Flashcard[];
  onClose: () => void;
}

const FlashcardReview = ({ flashcards, onClose }: FlashcardReviewProps) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);

  const nextCard = () => {
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
      setShowDefinition(false);
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setShowDefinition(false);
    }
  };

  const flipCard = () => {
    setShowDefinition(!showDefinition);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            📚 Revisão Rápida
          </CardTitle>
          <div className="text-sm text-gray-600">
            Cartão {currentCard + 1} de {flashcards.length}
          </div>
        </CardHeader>
        <CardContent>
          {/* Flashcard */}
          <div 
            className="min-h-[200px] bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-8 flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-lg mb-6"
            onClick={flipCard}
          >
            <div className="text-center">
              {!showDefinition ? (
                <>
                  <div className="text-2xl font-bold text-purple-800 mb-4">
                    {flashcards[currentCard].term}
                  </div>
                  <div className="text-sm text-gray-600">
                    Clique para ver a definição
                  </div>
                </>
              ) : (
                <>
                  <div className="text-lg text-blue-800 leading-relaxed">
                    {flashcards[currentCard].definition}
                  </div>
                  <div className="text-sm text-gray-600 mt-4">
                    Clique para voltar ao termo
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Controles */}
          <div className="flex justify-between items-center mb-6">
            <Button
              onClick={prevCard}
              disabled={currentCard === 0}
              variant="outline"
              size="sm"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Anterior
            </Button>

            <Button
              onClick={flipCard}
              variant="outline"
              size="sm"
            >
              <RotateCcw className="mr-1 h-4 w-4" />
              Virar
            </Button>

            <Button
              onClick={nextCard}
              disabled={currentCard === flashcards.length - 1}
              variant="outline"
              size="sm"
            >
              Próximo
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {/* Progresso */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentCard + 1) / flashcards.length) * 100}%` }}
            />
          </div>

          {/* Botão de fechar */}
          <Button
            onClick={onClose}
            className="w-full"
            size="lg"
          >
            ✅ Concluir Revisão
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FlashcardReview;
