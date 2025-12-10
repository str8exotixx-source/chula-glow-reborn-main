import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Chula Beauty & Spa" 
            className="h-14 md:h-16 w-auto"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm"
            className="hidden sm:inline-flex border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="tel:0676753126">
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">Call Now</span>
            </a>
          </Button>
          
          <Button 
            variant="whatsapp" 
            size="sm"
            asChild
          >
            <a href="https://wa.me/27676753126" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
