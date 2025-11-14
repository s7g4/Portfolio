import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          Portfolio
        </button>
        
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
