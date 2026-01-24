import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Calendar } from 'lucide-react';
import { BlogPost } from '@/lib/blogData';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (featured) {
    return (
      <Link 
        to={`/blog/${post.id}`}
        className="group block"
      >
        <article className="relative overflow-hidden rounded-2xl bg-card border border-border hover-lift card-glow p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                  {post.category}
                </Badge>
                {post.featured && (
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Featured
                  </Badge>
                )}
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min read
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.slice(0, 4).map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link 
      to={`/blog/${post.id}`}
      className="group block h-full"
    >
      <article className="h-full flex flex-col overflow-hidden rounded-xl bg-card border border-border hover-lift card-glow p-5">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">
            {post.category}
          </Badge>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime} min
          </span>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
