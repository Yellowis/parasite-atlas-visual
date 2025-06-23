
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ParasitologyGame from "./pages/ParasitologyGame";
import MicroscopioGame from "./pages/MicroscopioGame";
import NotFound from "./pages/NotFound";
import Flashcards from "./pages/Flashcards";
import QuizReview from "./pages/QuizReview";

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
            <Route path="/jogo-parasitologia" element={<ParasitologyGame />} />
            <Route path="/jogo-parasitologia/microscopio" element={<MicroscopioGame />} />
            <Route path="/jogo-parasitologia/microscopio/fase/:phaseId" element={<MicroscopioGame />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/quiz-revisao" element={<QuizReview />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
