import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, MessageCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import adultHair from "@/assets/adult-hair.png";

const priceList = [
  { name: "Straight Up", price: "R200" },
  { name: "Straight Back", price: "R200" },
  { name: "Essence", price: "R100-R250" },
  { name: "Tribal Braids", price: "R250-R350" },
  { name: "Kneedle Cornrows", price: "R100-R200" },
  { name: "Beads adding", price: "R80" },
  { name: "Pom Pom addings", price: "R80" },
];

const KiddiesHairService = () => {
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
              src={adultHair} 
              alt="Kiddies Hair" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="font-script text-4xl md:text-5xl text-cream">Kiddies Hair</h1>
              <div className="w-16 h-1 bg-gold mt-4" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Description */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Bring your little ones for a fun and gentle hair care experience. Hair wash is included. Kids under the age of 4 must always be accompanied by parent or guardian. Only black hair piece can be added without charge, any colour you wish your child to have, please come with.
          </p>
          
          <div className="mt-6 p-4 bg-gold/10 rounded-xl flex items-center gap-3 justify-center">
            <Info className="w-5 h-5 text-gold flex-shrink-0" />
            <p className="font-body text-sm text-foreground">
              Appointment Booking required. Hair Wash included. Kids under 4 must be accompanied by parent/guardian.
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
                  <span className="font-body text-foreground">{item.name}</span>
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
            Contact us via WhatsApp or phone to schedule your Kiddies Hair appointment. A 60% deposit is required to secure your booking.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <a href="https://wa.me/27676753126?text=Hi%20Chula%20Beauty%20%26%20Spa!%20%F0%9F%91%8B%20I%27m%20looking%20to%20book%20a%20Kiddies%20Hair%20appointment%20for%20my%20child.%20Could%20you%20share%20your%20availability%3F%20Thank%20you!" target="_blank" rel="noopener noreferrer">
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

export default KiddiesHairService;
