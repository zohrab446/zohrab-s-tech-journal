import { ArrowRight, Github, Linkedin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border p-8 md:p-12">
              <div className="h-full rounded-xl bg-card border border-border flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gradient">ZK</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Zohrab Khidirov</h3>
                  <p className="text-muted-foreground text-sm">Mid-Level Developer</p>
                  <div className="flex items-center justify-center gap-3 mt-6">
                    <a 
                      href="https://github.com/zohrab446" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 text-muted-foreground" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/zohrab-khıdırov/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-muted-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm a mid-level developer with a strong interest in software development, 
                cybersecurity, and AI-powered applications.
              </p>
              <p>
                I enjoy building practical projects that solve real problems, especially around 
                developer tools, CV analysis, and automation. Alongside coding, I actively share 
                my learning process and insights through this blog.
              </p>
              <p>
                This space is where I document what I learn, what I build, and the challenges 
                I face along the way — openly, honestly, and step by step.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="group">
                <Link to="/about">
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">
                  Get in touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
