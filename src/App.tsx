import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import MakeupService from "./pages/services/MakeupService";
import NailsService from "./pages/services/NailsService";
import HairService from "./pages/services/HairService";
import KiddiesHairService from "./pages/services/KiddiesHairService";
import MassagesService from "./pages/services/MassagesService";

// Package Pages
import BestiesCombo from "./pages/packages/BestiesCombo";
import GlamPackage from "./pages/packages/GlamPackage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Routes */}
          <Route path="/services/makeup" element={<MakeupService />} />
          <Route path="/services/nails" element={<NailsService />} />
          <Route path="/services/hair" element={<HairService />} />
          <Route path="/services/kiddies-hair" element={<KiddiesHairService />} />
          <Route path="/services/massages" element={<MassagesService />} />
          
          {/* Package Routes */}
          <Route path="/packages/besties-combo" element={<BestiesCombo />} />
          <Route path="/packages/glam-package" element={<GlamPackage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
