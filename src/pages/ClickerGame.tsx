
import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, Microscope, BookOpen, UserPlus, Beaker } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import QuizModal from '@/components/QuizModal';
import { parasitesData } from '@/data/parasites';

interface Upgrade {
  id: string;
  name: string;
  icon: string;
  cost: number;
  effect: string;
  pointsPerClick?: number;
  autoPoints?: number;
  purchased: boolean;
}

interface RandomEvent {
  message: string;
  points: number;
  type: 'bonus' | 'penalty';
}

const ClickerGame = () => {
  const navigate = useNavigate();
  
  // Game state
  const [points, setPoints] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [pointsPerClick, setPointsPerClick] = useState(1);
  const [autoPointsPerSecond, setAutoPointsPerSecond] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('clicker-high-score') || '0');
  });
  
  // Log and events
  const [analysisLog, setAnalysisLog] = useState<string[]>([]);
  const [showFloatingPoints, setShowFloatingPoints] = useState(false);
  const [randomEvent, setRandomEvent] = useState<RandomEvent | null>(null);
  const [clicksWithoutEvent, setClicksWithoutEvent] = useState(0);
  
  // Quiz system
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizUnlocked, setQuizUnlocked] = useState(false);
  
  // Upgrades
  const [upgrades, setUpgrades] = useState<Upgrade[]>([
    {
      id: 'microscope',
      name: '🔬 Microscópio de Bancada',
      icon: '🔬',
      cost: 50,
      effect: '+1 ponto por clique',
      pointsPerClick: 1,
      purchased: false
    },
    {
      id: 'stain',
      name: '🧪 Corante de Gram',
      icon: '🧪',
      cost: 200,
      effect: '+3 pontos por clique',
      pointsPerClick: 3,
      purchased: false
    },
    {
      id: 'assistant',
      name: '👨‍🔬 Estagiário de Diagnóstico',
      icon: '👨‍🔬',
      cost: 500,
      effect: '+1 ponto a cada 3 segundos',
      autoPoints: 1,
      purchased: false
    },
    {
      id: 'book',
      name: '📚 Livro de Parasitologia Avançada',
      icon: '📚',
      cost: 1000,
      effect: 'Libera miniquiz-relâmpago',
      purchased: false
    }
  ]);

  // Auto-clicker effect
  useEffect(() => {
    if (autoPointsPerSecond > 0) {
      const interval = setInterval(() => {
        setPoints(prev => prev + autoPointsPerSecond);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoPointsPerSecond]);

  // Update high score
  useEffect(() => {
    if (points > highScore) {
      setHighScore(points);
      localStorage.setItem('clicker-high-score', points.toString());
    }
  }, [points, highScore]);

  // Check for quiz triggers
  useEffect(() => {
    if (quizUnlocked && points > 0 && points % 1000 === 0 && points > (Math.floor(points / 1000) - 1) * 1000) {
      setShowQuiz(true);
    }
  }, [points, quizUnlocked]);

  const getRandomParasite = useCallback(() => {
    return parasitesData[Math.floor(Math.random() * parasitesData.length)];
  }, []);

  const handleClick = () => {
    const newPoints = pointsPerClick;
    setPoints(prev => prev + newPoints);
    setTotalClicks(prev => prev + 1);
    setClicksWithoutEvent(prev => prev + 1);
    
    // Add parasite to log
    const parasite = getRandomParasite();
    setAnalysisLog(prev => [`🔬 Analisado: ${parasite.name}`, ...prev.slice(0, 9)]);
    
    // Floating points animation
    setShowFloatingPoints(true);
    setTimeout(() => setShowFloatingPoints(false), 1000);
    
    // Random events every 50 clicks
    if (clicksWithoutEvent >= 50 && Math.random() < 0.1) {
      triggerRandomEvent();
      setClicksWithoutEvent(0);
    }
  };

  const triggerRandomEvent = () => {
    const events: RandomEvent[] = [
      {
        message: "⚡ Você encontrou um ovo raro de Schistosoma! +200 pontos!",
        points: 200,
        type: 'bonus'
      },
      {
        message: "🎲 Contaminação acidental! Perdeu 10 segundos sem gerar pontos!",
        points: 0,
        type: 'penalty'
      },
      {
        message: "🔍 Descoberta importante! Parasita mutante encontrado! +150 pontos!",
        points: 150,
        type: 'bonus'
      }
    ];
    
    const event = events[Math.floor(Math.random() * events.length)];
    setRandomEvent(event);
    
    if (event.type === 'bonus') {
      setPoints(prev => prev + event.points);
    }
    
    setTimeout(() => setRandomEvent(null), 3000);
  };

  const purchaseUpgrade = (upgradeId: string) => {
    const upgrade = upgrades.find(u => u.id === upgradeId);
    if (!upgrade || upgrade.purchased || points < upgrade.cost) return;
    
    setPoints(prev => prev - upgrade.cost);
    setUpgrades(prev => prev.map(u => 
      u.id === upgradeId ? { ...u, purchased: true } : u
    ));
    
    if (upgrade.pointsPerClick) {
      setPointsPerClick(prev => prev + upgrade.pointsPerClick!);
    }
    
    if (upgrade.autoPoints) {
      setAutoPointsPerSecond(prev => prev + upgrade.autoPoints!);
    }
    
    if (upgrade.id === 'book') {
      setQuizUnlocked(true);
    }
  };

  const handleQuizComplete = (correct: boolean) => {
    if (correct) {
      setPoints(prev => prev + 500);
      setAnalysisLog(prev => [`🎉 Quiz correto! +500 pontos bônus!`, ...prev.slice(0, 9)]);
    } else {
      setAnalysisLog(prev => [`❌ Quiz incorreto. Continue estudando!`, ...prev.slice(0, 9)]);
    }
    setShowQuiz(false);
  };

  const nextUpgrade = upgrades.find(u => !u.purchased);
  const progressToNext = nextUpgrade ? (points / nextUpgrade.cost) * 100 : 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 shadow-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Atlas
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              🦠 Atlas Clicker Parasitológico
            </h1>
            <div className="text-white text-right">
              <div className="text-lg font-semibold">Record: {highScore}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Game Area */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Score Display */}
            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">⭐ {points}</div>
                <div className="text-blue-100">Pontos de Pesquisa</div>
                <div className="text-sm text-blue-200 mt-2">
                  {totalClicks} amostras analisadas • {pointsPerClick} pontos/clique
                </div>
              </CardContent>
            </Card>

            {/* Main Click Button */}
            <div className="text-center relative">
              <Button
                onClick={handleClick}
                className="w-64 h-64 rounded-full text-6xl bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-2xl relative overflow-hidden"
              >
                🧪
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
              </Button>
              <p className="text-xl font-semibold mt-4 text-gray-700">Analisar Amostra</p>
              
              {showFloatingPoints && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-green-500 font-bold text-2xl animate-bounce">
                  +{pointsPerClick}
                </div>
              )}
            </div>

            {/* Random Event Display */}
            {randomEvent && (
              <Card className={`border-2 ${randomEvent.type === 'bonus' ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
                <CardContent className="p-4 text-center">
                  <div className="text-lg font-semibold">{randomEvent.message}</div>
                </CardContent>
              </Card>
            )}

            {/* Analysis Log */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Beaker className="mr-2 h-5 w-5" />
                  Log de Análises
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-40 overflow-y-auto space-y-1">
                  {analysisLog.map((log, index) => (
                    <div key={index} className="text-sm p-2 bg-gray-50 rounded">
                      {log}
                    </div>
                  ))}
                  {analysisLog.length === 0 && (
                    <div className="text-gray-500 text-center py-8">
                      Comece a analisar amostras para ver o histórico!
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Progress to Next Upgrade */}
            {nextUpgrade && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Próximo Upgrade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{nextUpgrade.name}</span>
                      <span>{points}/{nextUpgrade.cost}</span>
                    </div>
                    <Progress value={Math.min(progressToNext, 100)} />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Upgrades */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Microscope className="mr-2 h-5 w-5" />
                  Equipamentos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upgrades.map((upgrade) => (
                    <div
                      key={upgrade.id}
                      className={`p-3 rounded-lg border ${
                        upgrade.purchased 
                          ? 'bg-green-50 border-green-200' 
                          : points >= upgrade.cost
                          ? 'bg-blue-50 border-blue-200 hover:bg-blue-100 cursor-pointer'
                          : 'bg-gray-50 border-gray-200 opacity-50'
                      }`}
                      onClick={() => !upgrade.purchased && purchaseUpgrade(upgrade.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-sm">{upgrade.name}</span>
                        {upgrade.purchased ? (
                          <Badge variant="outline" className="bg-green-100 text-green-800">
                            ✓ Ativo
                          </Badge>
                        ) : (
                          <Badge variant="outline">
                            {upgrade.cost} pts
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-gray-600">{upgrade.effect}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Game Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Estatísticas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total de Cliques:</span>
                    <span className="font-semibold">{totalClicks}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pontos por Clique:</span>
                    <span className="font-semibold">{pointsPerClick}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pontos Automáticos:</span>
                    <span className="font-semibold">{autoPointsPerSecond}/3s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Record Pessoal:</span>
                    <span className="font-semibold text-yellow-600">{highScore}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Quiz Modal */}
      {showQuiz && (
        <QuizModal
          parasites={parasitesData}
          onComplete={handleQuizComplete}
        />
      )}
    </div>
  );
};

export default ClickerGame;
