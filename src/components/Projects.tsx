import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "AI Terminal",
      description:
        "A multi-agent, extensible terminal assistant featuring plugins for emails, job search, context-aware AI actions, and dynamic tool integrations.",
      tech: ["Python", "FastAPI", "Next.js", "AI Agents"],
      gradient: "from-cyan-500 to-blue-600",
      github: "https://github.com/s7g4/ai_terminal",
      demo: "YOUR_LINK"
    },
    {
      title: "QSafe – Quantum-Inspired Secure Communication",
      description:
        "A secure communication system using Rust, AES-GCM, ECDH, and quantum-inspired cryptography foundations to resist future quantum attacks.",
      tech: ["Rust", "AES-GCM", "ECDH", "Tokio", "Axum"],
      gradient: "from-purple-500 to-pink-600",
      github: "https://github.com/s7g4/qsafe",
      demo: "YOUR_LINK"
    },
    {
      title: "RustSat-ESA",
      description:
        "A Rust-based satellite systems toolkit following ESA standards, including protocol parsing, packet structures, and embedded-systems compatibility.",
      tech: ["Rust", "no_std", "Space Protocols", "ESA Compliance"],
      gradient: "from-orange-500 to-red-600",
      github: "https://github.com/s7g4/rustsat-esa",
      demo: "YOUR_LINK"
    },
    {
      title: "CLI-Based Developer Portfolio",
      description:
        "A fully interactive command-line portfolio showcasing my work, skills, and personality — built for developers who appreciate terminals.",
      tech: ["Node.js", "Inquirer", "JavaScript", "CLI Tools"],
      gradient: "from-green-500 to-teal-600",
      github: "https://github.com/s7g4/Portfolio",
      demo: "https://s7g4.github.io/Portfolio/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of what I’ve been building recently
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-xs font-medium rounded-full text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 border-primary/50 hover:bg-primary/10"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </a>
                  {project.demo === "YOUR_LINK" ? (
                    <Link to="/coming-soon">
                      <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    </Link>
                  ) : (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
