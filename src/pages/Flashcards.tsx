
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, RotateCcw, ChevronLeft, ChevronRight, BookOpen, Eye, EyeOff } from 'lucide-react';
import { flashcardsData } from '@/data/flashcards';

const Flashcards = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(flashcardsData.map(card => card.category)))];
  
  const filteredCards = selectedCategory === 'all' 
    ? flashcardsData 
    : flashcardsData.filter(card => card.category === selectedCategory);

  const currentCard = filteredCards[currentIndex];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
    setIsFlipped(false);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  if (!currentCard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-4">
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
            <CardContent className="p-8">
              <div className="text-lg text-gray-600 mb-4">
                Nenhum flashcard encontrado para esta categoria.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <Button 
          onClick={() => navigate('/')} 
          variant="outline" 
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao Atlas
        </Button>

        {/* Header */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-3xl text-purple-600 mb-4 text-center">
              📚 Flashcards de Revisão
            </CardTitle>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer hover:bg-purple-100"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category === 'all' ? 'Todos' : category}
                </Badge>
              ))}
            </div>
          </CardHeader>
        </Card>

        {/* Progress */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-gray-600">
                  Flashcards - {selectedCategory === 'all' ? 'Todos' : selectedCategory}
                </span>
              </div>
              <div className="text-sm font-bold text-purple-600">
                {currentIndex + 1} / {filteredCards.length}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / filteredCards.length) * 100}%` }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Flashcard */}
        <div className="flex justify-center mb-6">
          <div 
            className="relative w-full max-w-2xl h-80 cursor-pointer"
            onClick={flipCard}
          >
            <Card className={`absolute w-full h-full transition-all duration-700 transform-gpu ${isFlipped ? 'rotate-y-180' : ''}`}>
              <CardContent className="p-8 h-full flex flex-col justify-center items-center text-center">
                <div className={`${isFlipped ? 'rotate-y-180' : ''}`}>
                  {!isFlipped ? (
                    <>
                      <div className="text-sm text-purple-600 mb-4 flex items-center justify-center">
                        <Eye className="mr-2 h-4 w-4" />
                        Pergunta
                      </div>
                      <div className="text-lg md:text-xl leading-relaxed">
                        {currentCard.front}
                      </div>
                      <div className="text-sm text-gray-500 mt-6">
                        Clique para ver a resposta
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-sm text-green-600 mb-4 flex items-center justify-center">
                        <EyeOff className="mr-2 h-4 w-4" />
                        Resposta
                      </div>
                      <div className="text-lg md:text-xl leading-relaxed">
                        {currentCard.back}
                      </div>
                      <div className="text-sm text-gray-500 mt-6">
                        Clique para ver a pergunta
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Controls */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <Button
                onClick={prevCard}
                variant="outline"
                disabled={filteredCards.length <= 1}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Anterior
              </Button>
              
              <div className="flex space-x-2">
                <Button
                  onClick={flipCard}
                  variant="secondary"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Virar Card
                </Button>
              </div>
              
              <Button
                onClick={nextCard}
                disabled={filteredCards.length <= 1}
              >
                Próximo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Flashcards;
