import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, MessageCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import makeupIcon from "@/assets/makeup-icon.png";

const priceList = [
  { name: "Natural Glow", price: "R450" },
  { name: "Soft Glam", price: "R500" },
  { name: "Full Glam", price: "R600" },
  { name: "Anti-Ageing Glam", price: "R400" },
  { name: "Bridal Glam", price: "R800", note: "Including Hydrating Facial" },
  { name: "Male Glam", price: "R150" },
  { name: "Hydrating Facial", price: "R200" },
];

const MakeupService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 text-primary hover:text-gold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-elevated">
            <img 
              src={makeupIcon} 
              alt="Make Up" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="font-script text-4xl md:text-5xl text-cream">Make Up</h1>
              <div className="w-16 h-1 bg-gold mt-4" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Description */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Look your absolute best for any occasion with our professional makeup services. From subtle everyday looks to dramatic special event glam. Appointment booking required 2 days prior. Late booking acceptable but at a fee. Client can't be late for more than 10 minutes. Lashes are included.
          </p>
          
          <div className="mt-6 p-4 bg-gold/10 rounded-xl flex items-center gap-3 justify-center">
            <Info className="w-5 h-5 text-gold flex-shrink-0" />
            <p className="font-body text-sm text-foreground">
              Appointment Booking 2 days Prior. Late Booking acceptable but at a Fee. Lashes are Included.
            </p>
          </div>
        </div>
      </section>
      
      {/* Price List */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card rounded-2xl shadow-card p-8">
            <h2 className="font-script text-3xl text-primary text-center mb-8">Price List</h2>
            
            <div className="space-y-4">
              {priceList.map((item) => (
                <div 
                  key={item.name}
                  className="flex justify-between items-center py-3 border-b border-border last:border-0"
                >
                  <div>
                    <span className="font-body text-foreground">{item.name}</span>
                    {item.note && (
                      <span className="block text-sm text-muted-foreground">{item.note}</span>
                    )}
                  </div>
                  <span className="font-heading text-xl text-gold font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl text-primary mb-4">Ready to Book?</h2>
          <p className="font-body text-muted-foreground mb-6">
            Contact us via WhatsApp or phone to schedule your Make Up appointment. A 60% deposit is required to secure your booking.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <a href="https://wa.me/27676753126?text=Hi%20Chula%20Beauty%20%26%20Spa!%20%F0%9F%91%8B%20I%27d%20like%20to%20book%20a%20Makeup%20appointment.%20Could%20you%20please%20share%20your%20available%20slots%3F%20Thank%20you!" target="_blank" rel="noopener noreferrer">
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

export default MakeupService;
