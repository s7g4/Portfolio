import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      <ScrollReveal width="100%">
        <About />
      </ScrollReveal>

      <ScrollReveal width="100%">
        <Skills />
      </ScrollReveal>

      <ScrollReveal width="100%">
        <Projects />
      </ScrollReveal>

      <ScrollReveal width="100%">
        <Contact />
      </ScrollReveal>

      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2025 Portfolio. Built by Shaurya Gaur – Software Developer & AI Engineer.</p>
      </footer>
    </div>
  );
};

export default Index;
