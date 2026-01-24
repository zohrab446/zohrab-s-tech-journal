import { Github, Linkedin, Twitter, Mail, Code2, Shield, Brain, Database, Terminal, Layers } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [
    { name: 'React / TypeScript', icon: Code2, category: 'Frontend' },
    { name: 'Node.js', icon: Terminal, category: 'Backend' },
    { name: 'PostgreSQL', icon: Database, category: 'Database' },
    { name: 'Security Practices', icon: Shield, category: 'Security' },
    { name: 'AI Integration', icon: Brain, category: 'AI' },
    { name: 'System Design', icon: Layers, category: 'Architecture' },
  ];

  const timeline = [
    {
      period: 'Present',
      title: 'Mid-Level Developer',
      description: 'Building practical tools and sharing my learning journey through blogging.'
    },
    {
      period: 'Ongoing',
      title: 'Learning & Building',
      description: 'Focusing on AI integration, cybersecurity fundamentals, and developer tools.'
    },
    {
      period: 'Foundation',
      title: 'Started Coding',
      description: 'Began my journey into software development with web technologies.'
    }
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center">
              <span className="text-5xl font-bold text-gradient">ZK</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A developer who believes in learning out loud and building in public.
            </p>
          </div>

          {/* Story */}
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">My Story</h2>
            <div className="prose-custom">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a mid-level developer with a strong interest in software development, 
                cybersecurity, and AI-powered applications. I enjoy building practical projects 
                that solve real problems, especially around developer tools, CV analysis, and automation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Alongside coding, I actively share my learning process, experiments, and insights 
                through blog posts and social platforms, focusing on clarity and real-world use 
                cases rather than theory alone.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My background includes working with modern web technologies, improving user-focused 
                interfaces, and exploring how AI can be integrated into everyday developer workflows. 
                I also have a growing interest in cybersecurity fundamentals and how secure design 
                impacts modern applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This blog is my personal space to document what I learn, what I build, and the 
                challenges I face along the way — openly, honestly, and step by step.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Skills & Interests</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="p-5 rounded-xl bg-card border border-border hover-lift group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Journey</h2>
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />
              {timeline.map((item, index) => (
                <div 
                  key={item.period}
                  className={`relative pl-8 md:pl-0 mb-10 ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                  }`}
                >
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 mt-1.5" />
                  <div className={`${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                    <span className="text-sm font-medium text-primary">{item.period}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to interesting conversations and opportunities.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <a 
                href="https://github.com/zohrab446" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-foreground" />
              </a>
              <a 
                href="https://www.linkedin.com/in/zohrab-khıdırov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-foreground" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 text-foreground" />
              </a>
              <a 
                href="mailto:hello@zohrab.dev" 
                className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-foreground" />
              </a>
            </div>
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
