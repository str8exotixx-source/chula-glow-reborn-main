import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, MessageCircle, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const packageIncludes = [
  "Full Glam Makeup",
  "Wig Installation",
  "Wig Styling",
  "French Set Manicure",
  "Brow Grooming",
  "Setting Spray",
];

const GlamPackage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-8 text-primary hover:text-gold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-heading text-5xl md:text-6xl text-gold font-bold mb-4">R1500</p>
            <h1 className="font-script text-4xl md:text-5xl text-primary mb-4">Glam Package</h1>
            <p className="font-body text-xl text-muted-foreground mb-8">
              Full Glam, Wig Installation & Styling, French Set Manicure
            </p>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Our most comprehensive package for the ultimate head-to-toe transformation. Perfect for graduations, weddings, and milestone celebrations.
            </p>
          </div>
        </div>
      </section>
      
      {/* Package Includes */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card rounded-2xl shadow-card p-8">
            <h2 className="font-heading text-2xl text-primary text-center mb-8">Package Includes</h2>
            
            <div className="space-y-4">
              {packageIncludes.map((item) => (
                <div 
                  key={item}
                  className="flex items-center gap-3 py-2"
                >
                  <Check className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="font-body text-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-gold/10 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="font-body text-sm text-foreground">
                60% deposit required to secure your booking. Deposits are non-refundable if you cancel or do not proceed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl text-primary mb-4">Book This Package</h2>
          <p className="font-body text-muted-foreground mb-6">
            Ready to treat yourself? Contact us via WhatsApp or phone to schedule your Glam Package experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <a href="https://wa.me/27676753126?text=Hi%20Chula%20Beauty%20%26%20Spa!%20%F0%9F%91%8B%20I%27m%20interested%20in%20the%20Glam%20Package%20(R1500%20-%20Full%20Glam%2C%20Wig%20Installation%20%26%20Styling%2C%20French%20Set%20Manicure).%20Could%20you%20please%20confirm%20availability%20and%20book%20me%20in%3F%20Thank%20you!" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="tel:0676753126">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GlamPackage;
