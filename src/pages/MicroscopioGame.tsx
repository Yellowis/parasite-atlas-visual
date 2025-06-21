
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { phases } from '@/data/microscopio-game';
import PhaseIntro from '@/components/microscopio/PhaseIntro';
import QuestionCard from '@/components/microscopio/QuestionCard';
import PhaseSummary from '@/components/microscopio/PhaseSummary';

type GameState = 'start' | 'intro' | 'playing' | 'summary';

const MicroscopioGame = () => {
  const navigate = useNavigate();
  const { phaseId } = useParams();
  const [currentPhase, setCurrentPhase] = useState(1);
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Atualizar fase baseado na URL
  useEffect(() => {
    if (phaseId) {
      const phase = parseInt(phaseId);
      if (phase >= 1 && phase <= 8) {
        setCurrentPhase(phase);
        setGameState('intro');
      }
    }
  }, [phaseId]);

  // Timer
  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0 && !showFeedback) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showFeedback && gameState === 'playing') {
      handleTimeUp();
    }
  }, [timeLeft, showFeedback, gameState]);

  // Toggle tema
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleTimeUp = () => {
    setSelectedAnswer(-1);
    setShowFeedback(true);
    setStreak(0);
    setTimeout(nextQuestion, 2000);
  };

  const handleAnswer = (answerIndex: number) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    
    const phase = phases[currentPhase - 1];
    const isCorrect = answerIndex === phase.questions[currentQuestion].correct;
    
    if (isCorrect) {
      setScore(prev => prev + 100);
      setCorrectAnswers(prev => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      setMaxStreak(prev => Math.max(prev, newStreak));
      
      // Bônus combo
      if (newStreak === 3) {
        setScore(prev => prev + 50);
        setStreak(0);
      }
    } else {
      setStreak(0);
    }
    
    setTimeout(nextQuestion, 2000);
  };

  const nextQuestion = () => {
    const phase = phases[currentPhase - 1];
    if (currentQuestion + 1 >= phase.questions.length) {
      setGameState('summary');
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setTimeLeft(currentPhase === 8 ? 60 : 30); // Fase 8 tem 60s
    }
  };

  const startPhase = () => {
    setGameState('playing');
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setTimeLeft(currentPhase === 8 ? 60 : 30);
  };

  const nextPhase = () => {
    if (currentPhase < 8) {
      const nextPhaseNum = currentPhase + 1;
      setCurrentPhase(nextPhaseNum);
      navigate(`/jogo-parasitologia/microscopio/fase/${nextPhaseNum}`);
      resetPhase();
      setGameState('intro');
    }
  };

  const restartPhase = () => {
    resetPhase();
    setGameState('intro');
  };

  const resetPhase = () => {
    setCurrentQuestion(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCorrectAnswers(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setTimeLeft(30);
  };

  const goToStart = () => {
    setGameState('start');
    setCurrentPhase(1);
    navigate('/jogo-parasitologia/microscopio');
    resetPhase();
  };

  const phase = phases[currentPhase - 1];

  if (gameState === 'start') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
        <div className="container mx-auto max-w-2xl">
          {/* Header com tema toggle */}
          <div className="flex justify-between items-center mb-6">
            <Button 
              onClick={() => navigate('/jogo-parasitologia')} 
              variant="outline" 
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
            
            <Button
              onClick={() => setDarkMode(!darkMode)}
              variant="outline"
              size="sm"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          <Card>
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">🔬</div>
              <CardTitle className="text-4xl text-purple-600 mb-4">
                Microscópio Maluco
              </CardTitle>
              <div className="text-lg text-gray-600">
                Quiz interativo de parasitologia médica
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-8">
                <div className="text-center text-gray-700">
                  <p className="mb-4">
                    🎯 <strong>8 fases</strong> com 10 perguntas cada<br />
                    ⏱️ <strong>30 segundos</strong> por pergunta (60s na fase final)<br />
                    🏆 <strong>Pontuação</strong> por acertos e combos<br />
                    📚 <strong>Flashcards</strong> para revisão
                  </p>
                </div>
              </div>

              {/* Seleção de fases */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {phases.map((p) => (
                  <Button
                    key={p.id}
                    onClick={() => {
                      setCurrentPhase(p.id);
                      navigate(`/jogo-parasitologia/microscopio/fase/${p.id}`);
                      setGameState('intro');
                    }}
                    variant="outline"
                    className="h-16 text-sm"
                  >
                    <div className="text-center">
                      <div className="text-lg mb-1">
                        {p.name.split(' ')[p.name.split(' ').length - 1]}
                      </div>
                      <div className="text-xs">
                        Fase {p.id}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>

              <Button
                onClick={() => {
                  setCurrentPhase(1);
                  navigate('/jogo-parasitologia/microscopio/fase/1');
                  setGameState('intro');
                }}
                className="w-full"
                size="lg"
              >
                🚀 Iniciar Volume 1
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      {/* Header fixo */}
      <div className="fixed top-4 left-4 right-4 z-10 flex justify-between items-center">
        <Button 
          onClick={goToStart} 
          variant="outline" 
          size="sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Menu
        </Button>
        
        <Button
          onClick={() => setDarkMode(!darkMode)}
          variant="outline"
          size="sm"
        >
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      {/* Conteúdo principal */}
      <div className="pt-16">
        {gameState === 'intro' && (
          <PhaseIntro phase={phase} onStart={startPhase} />
        )}

        {gameState === 'playing' && (
          <QuestionCard
            question={phase.questions[currentQuestion]}
            questionNumber={currentQuestion + 1}
            totalQuestions={phase.questions.length}
            timeLeft={timeLeft}
            score={score}
            streak={streak}
            onAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
            showFeedback={showFeedback}
          />
        )}

        {gameState === 'summary' && (
          <PhaseSummary
            phase={phase}
            score={score}
            correctAnswers={correctAnswers}
            maxStreak={maxStreak}
            onNext={nextPhase}
            onRestart={restartPhase}
            isLastPhase={currentPhase === 8}
          />
        )}
      </div>
    </div>
  );
};

export default MicroscopioGame;
