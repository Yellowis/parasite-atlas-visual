
import { useState } from 'react';
import { Search, Book, Gamepad2, Microscope, Menu, X, MessageSquare, BookOpen, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ParasiteCard from '@/components/ParasiteCard';
import ParasiteDetail from '@/components/ParasiteDetail';
import { parasitesData } from '@/data/parasites';

const Index = () => {
  const [selectedParasite, setSelectedParasite] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const filteredParasites = parasitesData.filter(parasite =>
    parasite.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    parasite.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const menuItems = [
    {
      title: "🎮 Jogos",
      items: [
        {
          title: "Jogo Clicker 🧪",
          description: "Jogo de cliques incrementais",
          path: "/clicker-game",
          icon: Gamepad2
        },
        {
          title: "Microscópio Maluco 🔬",
          description: "Quiz interativo de parasitologia",
          path: "/jogo-parasitologia/microscopio",
          icon: Microscope
        }
      ]
    },
    {
      title: "📚 Estudos",
      items: [
        {
          title: "Atlas de Parasitas 📖",
          description: "Consulte o atlas completo",
          path: "/",
          icon: Book
        },
        {
          title: "Flashcards de Revisão 💡",
          description: "Cartões para memorização",
          path: "/jogo-parasitologia/microscopio",
          icon: BookOpen
        },
        {
          title: "Perguntas Discursivas ✍️",
          description: "Questões com correção por IA",
          path: "/perguntas-discursivas",
          icon: MessageSquare
        },
        {
          title: "Banco de Perguntas ❓",
          description: "Quiz de múltipla escolha",
          path: "/jogo-parasitologia/microscopio",
          icon: HelpCircle
        }
      ]
    }
  ];

  if (selectedParasite) {
    return <ParasiteDetail parasite={selectedParasite} onBack={() => setSelectedParasite(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header with Menu */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 shadow-xl">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Book className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Atlas de Parasitas
              </h1>
            </div>
            
            {/* Menu Button */}
            <div className="relative">
              <Button
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 p-3"
                variant="outline"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
              
              {/* Dropdown Menu */}
              {menuOpen && (
                <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-xl z-50 border max-h-96 overflow-y-auto">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Menu Principal</h3>
                    
                    {menuItems.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="mb-4">
                        <h4 className="font-medium text-gray-700 mb-2 text-sm">{section.title}</h4>
                        <div className="space-y-2">
                          {section.items.map((item, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                navigate(item.path);
                                setMenuOpen(false);
                              }}
                              className="w-full text-left p-3 rounded-lg hover:bg-blue-50 transition-colors border border-gray-100"
                            >
                              <div className="flex items-center space-x-3">
                                <item.icon className="h-5 w-5 text-blue-600" />
                                <div>
                                  <div className="font-medium text-gray-800 text-sm">{item.title}</div>
                                  <div className="text-xs text-gray-600">{item.description}</div>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                        {sectionIndex < menuItems.length - 1 && <Separator className="my-3" />}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <p className="text-blue-100 text-center text-lg max-w-2xl mx-auto">
            Guia completo para o estudo de parasitas humanos com informações detalhadas sobre morfologia, ciclo biológico e diagnóstico
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar parasitas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg border-2 border-blue-200 focus:border-blue-500 rounded-xl shadow-sm"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{parasitesData.length}</div>
              <div className="text-blue-100">Parasitas Catalogados</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">
                {new Set(parasitesData.map(p => p.type)).size}
              </div>
              <div className="text-green-100">Tipos Diferentes</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-purple-100">Informações Completas</div>
            </CardContent>
          </Card>
        </div>

        {/* Parasites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredParasites.map((parasite, index) => (
            <ParasiteCard
              key={index}
              parasite={parasite}
              onClick={() => setSelectedParasite(parasite)}
            />
          ))}
        </div>

        {filteredParasites.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">Nenhum parasita encontrado</div>
            <div className="text-gray-500 mt-2">Tente uma busca diferente</div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            Atlas de Parasitas - Material de Estudo para Profissionais de Saúde
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Desenvolvido para fins educacionais
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
