
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phase } from '@/data/microscopio-game';

interface PhaseIntroProps {
  phase: Phase;
  onStart: () => void;
}

const PhaseIntro = ({ phase, onStart }: PhaseIntroProps) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl mb-4">
            Fase {phase.id}
          </CardTitle>
          <div className="text-4xl mb-4">
            {phase.name}
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-lg text-center mb-8 leading-relaxed">
            {phase.briefing}
          </div>
          <div className="text-center">
            <Button
              onClick={onStart}
              size="lg"
              className="px-8 py-4 text-xl"
            >
              Iniciar Quiz 🔬
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhaseIntro;
