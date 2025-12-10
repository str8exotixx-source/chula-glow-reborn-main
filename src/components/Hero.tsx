import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import massageTable from "@/assets/massage-table.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${massageTable})` }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream mb-6 drop-shadow-lg">
          Stay Beautiful Always!
        </h1>
        
        <p className="font-body text-lg sm:text-xl md:text-2xl text-cream/90 mb-10 max-w-2xl mx-auto">
          Experience luxury beauty and wellness in the heart of Bloemfontein
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="hero" 
            size="xl"
            asChild
          >
            <a href="https://wa.me/27676753126" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Book on WhatsApp
            </a>
          </Button>
          
          <Button 
            variant="heroOutline" 
            size="xl"
            className="text-cream border-cream/60 hover:bg-cream/10"
            asChild
          >
            <a href="tel:0676753126">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
      
      {/* Bottom Gradient Fade to White/Cream - Smooth multi-step gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none" style={{
        background: 'linear-gradient(to top, hsl(var(--cream)) 0%, hsl(var(--cream) / 0.95) 15%, hsl(var(--cream) / 0.7) 35%, hsl(var(--cream) / 0.4) 55%, hsl(var(--cream) / 0.15) 75%, transparent 100%)'
      }} />
    </section>
  );
};

export default Hero;
