import { Code2, Palette, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern standards"
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating stunning interfaces that blend aesthetics with functionality"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimized solutions that deliver exceptional user experiences"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a keen eye for design and a love for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(47,203,229,0.2)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>


        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto animate-fade-in-up">
          Think your terminal skills are sharp? Try my CLI portfolio. Worst case—you'll learn something. Best case—you'll impress yourself.
          <a href="https://s7g4.github.io/Portfolio2/" target="_blank" className="text-primary font-medium hover:underline">
            Check it out here.
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;

