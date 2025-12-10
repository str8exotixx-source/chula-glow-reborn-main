import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const packages = [
  {
    name: "Besties Combo",
    price: "R1200",
    description: "Full Glam + Installation for 2 people",
    link: "/packages/besties-combo",
  },
  {
    name: "Glam Package",
    price: "R1500",
    description: "Full Glam, Wig Installation & Styling, French Set Manicure",
    link: "/packages/glam-package",
  },
];

const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl text-primary text-center mb-12">
          Special Packages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <Link 
              key={pkg.name}
              to={pkg.link}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 border border-gold/20 hover:border-gold/40 overflow-hidden block"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-gold opacity-10 rounded-bl-full" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <h3 className="font-heading text-2xl text-primary font-semibold">
                    {pkg.name}
                  </h3>
                </div>
                
                <p className="font-heading text-3xl text-gold font-bold mb-4">
                  {pkg.price}
                </p>
                
                <p className="font-body text-muted-foreground mb-6">
                  {pkg.description}
                </p>
                
                <span className="inline-block font-body text-sm text-primary font-medium group-hover:text-gold transition-colors duration-300">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
