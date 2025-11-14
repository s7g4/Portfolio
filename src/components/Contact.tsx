import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter, Instagram, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    emailjs.init('Qo45eTmyXIOK8eecT');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send('service_vgzikig', 'template_g984wjw', formData)
      .then((result) => {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        toast.error("Failed to send message. Please try again.");
      });
  };

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/s7g4" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shaurya-gaur-353a7828a/" },
    { icon: Phone, label: "WhatsApp", href: "https://wa.me/919625944410" },
    { icon: Mail, label: "Email", href: "mailto:shauryagaur07@gmail.com" }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's collaborate on your next project
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border focus:border-primary transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border focus:border-primary transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Message</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border focus:border-primary transition-colors min-h-[150px]"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(47,203,229,0.4)]"
            >
              Send Message
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-center gap-6">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(47,203,229,0.3)]"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
