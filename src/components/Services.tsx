import { Link } from "react-router-dom";
import makeupIcon from "@/assets/makeup-icon.png";
import nailsIcon from "@/assets/nails-icon.png";
import hairIcon from "@/assets/hair-icon.png";
import adultHair from "@/assets/adult-hair.png";
import massageTable from "@/assets/massage-table.png";

const services = [
  {
    title: "Make Up",
    description: "Professional makeup artistry for any occasion",
    image: makeupIcon,
    link: "/services/makeup",
  },
  {
    title: "Nails",
    description: "Acrylic, gel, manicure & pedicure services",
    image: nailsIcon,
    link: "/services/nails",
  },
  {
    title: "Hair",
    description: "Braiding, styling & wig services",
    image: adultHair,
    link: "/services/hair",
  },
  {
    title: "Kiddies Hair",
    description: "Gentle care for your little ones",
    image: hairIcon,
    link: "/services/kiddies-hair",
  },
  {
    title: "Massage",
    description: "Relax and rejuvenate your body",
    image: massageTable,
    link: "/services/massages",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl text-primary text-center mb-12">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Link 
              key={service.title}
              to={service.link}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all duration-500 bg-card block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Always visible gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              
              {/* Hover enhanced overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                <h3 className="font-heading text-xl text-primary-foreground font-semibold mb-1">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-primary-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {service.description}
                </p>
                <span className="inline-block mt-3 font-body text-sm text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  View & Book →
                </span>
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
