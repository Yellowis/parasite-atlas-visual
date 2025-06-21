
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Timer, Trophy, Target, Zap } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  answers: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "🩸 Paciente imunossuprimido com prurido intenso na pele, tosse, diarreia e eosinofilia. Qual o agente mais provável?",
    answers: ["Strongyloides stercoralis", "Taenia solium", "Giardia lamblia", "Leishmania infantum"],
    correct: 0,
    explanation: "Strongyloides causa manifestações cutâneas, pulmonares e intestinais, podendo evoluir para hiperinfecção em imunocomprometidos."
  },
  {
    id: 2,
    question: "🍖 Paciente consome carne suína mal passada e desenvolve crises convulsivas. Qual parasita está associado?",
    answers: ["Plasmodium vivax", "Taenia solium", "Trichuris trichiura", "Enterobius vermicularis"],
    correct: 1,
    explanation: "Neurocisticercose causada por cisticerco de Taenia solium pode causar sintomas neurológicos e convulsões."
  },
  {
    id: 3,
    question: "💧 Paciente com diarreia gordurosa, cólicas e perda de peso após viagem. Qual parasita provável?",
    answers: ["Strongyloides stercoralis", "Giardia lamblia", "Trichuris trichiura", "T. vaginalis"],
    correct: 1,
    explanation: "Giardia lamblia causa diarreia esteatorreica (gordurosa) e má absorção intestinal."
  },
  {
    id: 4,
    question: "🦟 Paciente com febre prolongada, hepatoesplenomegalia e histórico de picada de flebotomíneo. Diagnóstico?",
    answers: ["Malária", "Leishmaniose Visceral", "Dengue", "Febre Amarela"],
    correct: 1,
    explanation: "Leishmaniose Visceral apresenta febre prolongada, hepatoesplenomegalia e é transmitida por flebotomíneos."
  },
  {
    id: 5,
    question: "🪱 Criança com prurido anal noturno intenso e irritabilidade. Qual parasita?",
    answers: ["Trichuris trichiura", "Enterobius vermicularis", "Ascaris lumbricoides", "Strongyloides stercoralis"],
    correct: 1,
    explanation: "Enterobius vermicularis causa prurido anal noturno característico quando as fêmeas fazem oviposição na região perianal."
  },
  {
    id: 6,
    question: "🔬 Paciente com síndrome disentérica crônica e prolapso retal. Suspeita de infecção grave por:",
    answers: ["Giardia lamblia", "Trichuris trichiura", "Entamoeba histolytica", "Cryptosporidium"],
    correct: 1,
    explanation: "Trichuris trichiura em infecções graves causa síndrome disentérica crônica e pode levar ao prolapso retal em crianças."
  },
  {
    id: 7,
    question: "🌡️ Mulher com leucorreia amarelo-esverdeada, odor fétido e prurido vulvovaginal. Agente:",
    answers: ["Candida albicans", "Trichomonas vaginalis", "Gardnerella vaginalis", "Chlamydia trachomatis"],
    correct: 1,
    explanation: "Trichomonas vaginalis causa vaginite com leucorreia característica amarelo-esverdeada e odor fétido."
  },
  {
    id: 8,
    question: "🏥 Método diagnóstico de escolha para Strongyloides stercoralis:",
    answers: ["Exame direto de fezes", "Cultura em placa de ágar", "Sorologia", "Hemograma"],
    correct: 1,
    explanation: "A cultura em placa de ágar é o método diagnóstico de escolha para Strongyloides stercoralis."
  },
  {
    id: 9,
    question: "🥩 Diferenciação entre T. solium e T. saginata pelo escólex:",
    answers: ["T. solium tem rostelo com ganchos", "T. saginata tem rostelo com ganchos", "Ambas têm ganchos", "Nenhuma tem ganchos"],
    correct: 0,
    explanation: "T. solium possui rostelo com ganchos, enquanto T. saginata é inerme (sem ganchos)."
  },
  {
    id: 10,
    question: "💊 Medicamento de escolha para Strongyloides stercoralis:",
    answers: ["Mebendazol", "Ivermectina", "Praziquantel", "Metronidazol"],
    correct: 1,
    explanation: "Ivermectina é considerada a substância de escolha para tratamento de Strongyloides stercoralis."
  }
];

const ParasitologyGame = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [showCombo, setShowCombo] = useState(false);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !showFeedback && !gameEnded) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showFeedback) {
      handleTimeUp();
    }
  }, [timeLeft, showFeedback, gameEnded]);

  const handleTimeUp = () => {
    setSelectedAnswer(-1); // Indica tempo esgotado
    setShowFeedback(true);
    setConsecutiveCorrect(0);
    setTimeout(nextQuestion, 2000);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    
    const isCorrect = answerIndex === questions[currentQuestion].correct;
    
    if (isCorrect) {
      setScore(score + 100);
      const newConsecutive = consecutiveCorrect + 1;
      setConsecutiveCorrect(newConsecutive);
      
      // Combo bonus
      if (newConsecutive === 3) {
        setScore(prev => prev + 50);
        setShowCombo(true);
        setTimeout(() => setShowCombo(false), 2000);
        setConsecutiveCorrect(0);
      }
    } else {
      setConsecutiveCorrect(0);
    }
    
    setTimeout(nextQuestion, 2000);
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 >= questions.length) {
      setGameEnded(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setTimeLeft(30);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(30);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setGameEnded(false);
    setConsecutiveCorrect(0);
    setShowCombo(false);
  };

  const getPerformanceMessage = () => {
    if (score <= 300) return "Continue estudando! 📚";
    if (score <= 600) return "Bom trabalho! 👍";
    return "Parasitologista nato! 🏆";
  };

  if (gameEnded) {
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
            <CardHeader>
              <CardTitle className="text-3xl text-purple-600">
                🎉 Jogo Finalizado!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-6xl font-bold text-purple-600">
                {score}
              </div>
              <div className="text-xl text-gray-600">
                pontos finais
              </div>
              <div className="text-2xl">
                {getPerformanceMessage()}
              </div>
              <div className="space-y-2">
                <Button onClick={restartGame} className="w-full" size="lg">
                  🎮 Jogar Novamente
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

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

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

        {/* Header com pontuação e progresso */}
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
                <span className="text-sm text-gray-600">Progresso</span>
              </div>
              <div className="text-sm font-bold text-blue-600">
                {currentQuestion + 1} / {questions.length}
              </div>
            </CardContent>
          </Card>
        </div>

        <Progress value={progress} className="mb-6" />

        {/* Combo animation */}
        {showCombo && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="bg-yellow-400 text-black px-8 py-4 rounded-full text-2xl font-bold animate-bounce">
              <Zap className="inline mr-2" />
              Combo x3! +50 pontos 🎉
            </div>
          </div>
        )}

        {/* Pergunta principal */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-center leading-relaxed">
              {currentQ.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQ.answers.map((answer, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  variant={
                    showFeedback
                      ? selectedAnswer === index
                        ? index === currentQ.correct
                          ? "default"
                          : "destructive"
                        : index === currentQ.correct
                        ? "default"
                        : "outline"
                      : "outline"
                  }
                  className={`h-auto p-4 text-left whitespace-normal ${
                    showFeedback && index === currentQ.correct
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : showFeedback && selectedAnswer === index && index !== currentQ.correct
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : ""
                  }`}
                >
                  <div className="flex items-center w-full">
                    <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{answer}</span>
                    {showFeedback && index === currentQ.correct && (
                      <span className="ml-2">✔️</span>
                    )}
                    {showFeedback && selectedAnswer === index && index !== currentQ.correct && (
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
                  {selectedAnswer === currentQ.correct ? "✔️ Correto!" : selectedAnswer === -1 ? "⏰ Tempo esgotado!" : "❌ Incorreto!"}
                </div>
                <div className="text-gray-700 leading-relaxed">
                  <strong>Explicação:</strong> {currentQ.explanation}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ParasitologyGame;
