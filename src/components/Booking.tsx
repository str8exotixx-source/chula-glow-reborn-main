import { MessageCircle, Phone, Clock, MapPin, Mail, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground text-center mb-8">
            Booking Information
          </h2>
          
          <div className="text-center mb-10">
            <p className="font-body text-primary-foreground/90 mb-3">
              Book via WhatsApp, phone, or walk-in
            </p>
            <p className="font-body text-gold font-medium mb-3">
              A 60% deposit is required to secure your booking
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
              <AlertCircle className="w-4 h-4" />
              <p className="font-body text-sm">
                Please note: Deposits are non-refundable if you cancel or do not proceed with your appointment
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              variant="gold" 
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
              className="border-gold/60 text-primary-foreground hover:bg-gold/10"
              asChild
            >
              <a href="tel:0676753126">
                <Phone className="w-5 h-5" />
                0676753126
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Trading Hours */}
            <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-gold" />
                <h3 className="font-heading text-xl text-primary-foreground font-semibold">
                  Trading Hours
                </h3>
              </div>
              
              <div className="space-y-2 font-body text-primary-foreground/90">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="text-gold">08:30 - 17:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gold">By Appointment</span>
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-gold" />
                <h3 className="font-heading text-xl text-primary-foreground font-semibold">
                  Visit Us
                </h3>
              </div>
              
              <div className="space-y-3 font-body text-primary-foreground/90">
                <p>25 Markgraaf Street, Westdene, Bloemfontein, 9301</p>
                
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <a href="tel:0676753126" className="hover:text-gold transition-colors">
                    067 675 3126
                  </a>
                  <span>/</span>
                  <a href="tel:0514499234" className="hover:text-gold transition-colors">
                    051 449 9234
                  </a>
                </div>
                
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold" />
                  <a href="mailto:chulabeautyholdings@gmail.com" className="hover:text-gold transition-colors">
                    chulabeautyholdings@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
