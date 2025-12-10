import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-cream border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <img 
            src={logo} 
            alt="Chula Beauty & Spa" 
            className="h-16 w-auto opacity-80"
          />
          
          <p className="font-body text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Chula Beauty & Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
