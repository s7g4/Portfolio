import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-glow">
            SHAURYA GAUR
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Engineering modern web and software solutions that run smoothly—no duct tape required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(47,203,229,0.4)] hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-foreground hover:bg-primary/10 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
