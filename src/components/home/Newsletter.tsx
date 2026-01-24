import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Send className="w-4 h-4" />
            Newsletter
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Get notified when I publish new articles about development, security, 
            and AI. No spam, unsubscribe anytime.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 p-6 rounded-xl bg-primary/10 border border-primary/20">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-foreground font-medium">Thanks for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 h-12 bg-secondary border-border focus:border-primary"
              />
              <Button type="submit" size="lg" className="h-12 px-6">
                Subscribe
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
