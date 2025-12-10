import hairIcon from "@/assets/hair-icon.png";
import nailsIcon from "@/assets/nails-icon.png";
import massageTable from "@/assets/massage-table.png";

const galleryItems = [
  {
    image: hairIcon,
    title: "Hair Braiding",
  },
  {
    image: nailsIcon,
    title: "Nail Artistry",
  },
  {
    image: massageTable,
    title: "Luxury Spa",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl text-primary text-center mb-12">
          Our Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {galleryItems.map((item, index) => (
            <div 
              key={item.title}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-card"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-heading text-xl text-primary-foreground font-semibold text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
