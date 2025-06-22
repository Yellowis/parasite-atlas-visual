import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ClickerGame from "./pages/ClickerGame";
import ParasitologyGame from "./pages/ParasitologyGame";
import MicroscopioGame from "./pages/MicroscopioGame";
import NotFound from "./pages/NotFound";
import DiscursiveQuestions from "./pages/DiscursiveQuestions";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/clicker-game" element={<ClickerGame />} />
            <Route path="/jogo-parasitologia" element={<ParasitologyGame />} />
            <Route path="/jogo-parasitologia/microscopio" element={<MicroscopioGame />} />
            <Route path="/jogo-parasitologia/microscopio/fase/:phaseId" element={<MicroscopioGame />} />
            <Route path="/perguntas-discursivas" element={<DiscursiveQuestions />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
