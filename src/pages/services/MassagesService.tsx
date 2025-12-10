import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, MessageCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import massageTable from "@/assets/massage-table.png";

const priceList = [
  { name: "Back & Neck", price: "R250", duration: "45 min" },
  { name: "Back and Chest", price: "R300", duration: "45 min" },
  { name: "Facial and Indian Head", price: "R200", duration: "45 min" },
  { name: "Lower Limbs", price: "R400", duration: "45 min" },
  { name: "Back, Arms & Shoulder", price: "R350", duration: "45 min" },
  { name: "Aromatherapy Massage", price: "R550", duration: "60 min" },
  { name: "Aromatherapy Massage", price: "R800", duration: "120 min" },
  { name: "Full Body", price: "R500", duration: "60 min" },
  { name: "Full Body", price: "R750", duration: "120 min" },
  { name: "Pregnancy Massage", price: "R350", duration: "45 min" },
  { name: "Pregnancy Massage", price: "R550", duration: "60 min" },
];

const MassagesService = () => {
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
              src={massageTable} 
              alt="Massage" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="font-script text-4xl md:text-5xl text-cream">Massage</h1>
              <div className="w-16 h-1 bg-gold mt-4" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Description */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Escape the stresses of daily life with our therapeutic massage services. Our trained therapists will help you relax, relieve tension, and restore your well-being.
          </p>
          
          <div className="mt-6 p-4 bg-gold/10 rounded-xl flex items-center gap-3 justify-center">
            <Info className="w-5 h-5 text-gold flex-shrink-0" />
            <p className="font-body text-sm text-foreground">
              Appointment Booking required.
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
              {priceList.map((item, index) => (
                <div 
                  key={`${item.name}-${index}`}
                  className="flex justify-between items-center py-3 border-b border-border last:border-0"
                >
                  <div>
                    <span className="font-body text-foreground">{item.name}</span>
                    <span className="text-sm text-muted-foreground ml-2">({item.duration})</span>
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
            Contact us via WhatsApp or phone to schedule your Massage appointment. A 60% deposit is required to secure your booking.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <a href="https://wa.me/27676753126?text=Hi%20Chula%20Beauty%20%26%20Spa!%20%F0%9F%91%8B%20I%27m%20interested%20in%20booking%20a%20Massage%20session.%20Could%20you%20please%20share%20your%20availability%3F%20Thank%20you!" target="_blank" rel="noopener noreferrer">
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

export default MassagesService;
