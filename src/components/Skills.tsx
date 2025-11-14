const Skills = () => {
  const skills = [
    { name: "React", level: 60 },
    { name: "TypeScript", level: 75 },
        { name: "Linux", level: 80 },
    { name: "Git", level: 55 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "Rust", level: 70 },
    { name: "Python", level: 70 }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="space-y-2 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between text-sm font-medium">
                <span className="text-foreground">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
