import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedPosts } from '@/lib/blogData';
import BlogCard from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/button';

const FeaturedPosts = () => {
  const featuredPosts = getFeaturedPosts().slice(0, 3);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Featured Articles
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Insights on software development, security, and building with AI.
            </p>
          </div>
          <Button asChild variant="ghost" className="group self-start md:self-auto">
            <Link to="/blog">
              View all posts
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="space-y-6">
          {featuredPosts.map((post, index) => (
            <div 
              key={post.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BlogCard post={post} featured />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
