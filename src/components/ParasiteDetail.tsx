
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface ParasiteDetailProps {
  parasite: {
    name: string;
    type: string;
    habitat: string;
    infectiousForms: string;
    biologicalCycle: string;
    transmission: string;
    vectors: string;
    morphology: string;
    pathology: string;
    diagnosis: string;
    treatment: string;
    prophylaxis: string;
    symptoms: string[];
  };
  onBack: () => void;
}

const ParasiteDetail = ({ parasite, onBack }: ParasiteDetailProps) => {
  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'nematódeo':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cestódeo':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'protozoário':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const InfoCard = ({ title, content, icon }: { title: string; content: string; icon?: string }) => (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          {icon && <span className="text-xl">{icon}</span>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {content}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 shadow-xl">
        <div className="container mx-auto px-4 py-6">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Atlas
          </Button>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {parasite.name}
              </h1>
              <div className="flex items-center gap-3">
                <Badge className={`${getTypeColor(parasite.type)} font-medium`}>
                  {parasite.type}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Quick Info */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">Informações Básicas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-1">Habitat:</h4>
                <p className="text-gray-600">{parasite.habitat}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-1">Formas Infectantes:</h4>
                <p className="text-gray-600">{parasite.infectiousForms}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <InfoCard
            title="Ciclo Biológico"
            content={parasite.biologicalCycle}
            icon="🔄"
          />
          <InfoCard
            title="Transmissão"
            content={parasite.transmission}
            icon="🦠"
          />
          <InfoCard
            title="Vetores"
            content={parasite.vectors}
            icon="🪰"
          />
          <InfoCard
            title="Morfologia"
            content={parasite.morphology}
            icon="🔬"
          />
        </div>

        {/* Clinical Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <InfoCard
            title="Patogenia e Sintomatologia"
            content={parasite.pathology}
            icon="⚕️"
          />
          <InfoCard
            title="Diagnóstico"
            content={parasite.diagnosis}
            icon="🩺"
          />
        </div>

        {/* Treatment and Prevention */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InfoCard
            title="Tratamento"
            content={parasite.treatment}
            icon="💊"
          />
          <InfoCard
            title="Profilaxia"
            content={parasite.prophylaxis}
            icon="🛡️"
          />
        </div>
      </div>
    </div>
  );
};

export default ParasiteDetail;
