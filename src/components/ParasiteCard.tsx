
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ParasiteCardProps {
  parasite: {
    name: string;
    type: string;
    habitat: string;
    transmission: string;
    symptoms: string[];
  };
  onClick: () => void;
}

const ParasiteCard = ({ parasite, onClick }: ParasiteCardProps) => {
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

  return (
    <Card 
      className="hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border-2 hover:border-blue-300 bg-white"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl font-bold text-gray-800 leading-tight">
            {parasite.name}
          </CardTitle>
          <Badge className={`${getTypeColor(parasite.type)} font-medium`}>
            {parasite.type}
          </Badge>
        </div>
        <CardDescription className="text-gray-600">
          <strong>Habitat:</strong> {parasite.habitat}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-700 mb-1">Transmissão:</h4>
            <p className="text-sm text-gray-600 line-clamp-2">
              {parasite.transmission}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Principais Sintomas:</h4>
            <div className="flex flex-wrap gap-1">
              {parasite.symptoms.slice(0, 3).map((symptom, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {symptom}
                </Badge>
              ))}
              {parasite.symptoms.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{parasite.symptoms.length - 3} mais
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="text-blue-600 font-medium text-sm hover:text-blue-700">
            Clique para ver detalhes completos →
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ParasiteCard;
