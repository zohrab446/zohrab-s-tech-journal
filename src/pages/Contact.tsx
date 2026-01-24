import { useState } from 'react';
import { Send, CheckCircle, Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Have a question, project idea, or just want to say hello? 
                I'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're looking to collaborate, have a question about my work, 
                  or just want to chat about tech — I'm always open to new conversations.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Email</h3>
                      <a 
                        href="mailto:hello@zohrab.dev" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@zohrab.dev
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Remote / Worldwide
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-medium text-foreground mb-4">Find me on</h3>
                  <div className="flex items-center gap-3">
                    <a 
                      href="https://github.com/zohrab446" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 text-foreground" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/zohrab-khıdırov/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-foreground" />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5 text-foreground" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-secondary border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="bg-secondary border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="bg-secondary border-border focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        required
                        rows={5}
                        className="bg-secondary border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
