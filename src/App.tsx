import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Index from "./pages/Index";
import Points from "./pages/Points";
import Work from "./pages/Work";
import Report from "./pages/Report";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import Mobile from "./pages/Mobile";

const App = () => {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/points" element={<Points />} />
              <Route path="/work" element={<Work />} />
              <Route path="/report" element={<Report />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/mobile" element={<Mobile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
