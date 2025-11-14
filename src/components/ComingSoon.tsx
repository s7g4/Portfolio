import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-8 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-glow">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          This project is in development and will be live soon. Stay tuned for updates!
        </p>
        <div className="pt-8">
          <Link to="/">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(47,203,229,0.4)] hover:scale-105"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
