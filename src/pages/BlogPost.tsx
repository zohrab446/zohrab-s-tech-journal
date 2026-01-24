import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { getPostById, blogPosts } from '@/lib/blogData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ReadingProgress from '@/components/blog/ReadingProgress';
import ShareButtons from '@/components/blog/ShareButtons';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogCard from '@/components/blog/BlogCard';
import { useMemo } from 'react';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getPostById(id) : undefined;

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter(p => p.id !== post.id && p.category === post.category)
      .slice(0, 2);
  }, [post]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Simple markdown to HTML converter
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let inCodeBlock = false;
    let codeContent = '';
    let codeLanguage = '';

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = line.slice(3);
          codeContent = '';
        } else {
          inCodeBlock = false;
          elements.push(
            <pre key={`code-${index}`} className="rounded-lg p-4 my-6 overflow-x-auto bg-code-bg">
              <code className="text-sm font-mono text-code-foreground">{codeContent}</code>
            </pre>
          );
        }
        return;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        return;
      }

      if (line.startsWith('## ')) {
        const text = line.slice(3);
        const headingId = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        elements.push(
          <h2 key={index} id={headingId} className="text-2xl font-semibold mb-4 mt-10 text-foreground scroll-mt-24">
            {text}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        const text = line.slice(4);
        const headingId = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        elements.push(
          <h3 key={index} id={headingId} className="text-xl font-semibold mb-3 mt-8 text-foreground scroll-mt-24">
            {text}
          </h3>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={index} className="mb-2 text-muted-foreground ml-4">
            {line.slice(2)}
          </li>
        );
      } else if (line.match(/^\d+\./)) {
        elements.push(
          <li key={index} className="mb-2 text-muted-foreground ml-4 list-decimal">
            {line.replace(/^\d+\.\s*/, '')}
          </li>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={index} className="mb-4 font-semibold text-foreground">
            {line.slice(2, -2)}
          </p>
        );
      } else if (line.trim() !== '') {
        // Parse inline code
        const parts = line.split(/(`[^`]+`)/g);
        const content = parts.map((part, i) => {
          if (part.startsWith('`') && part.endsWith('`')) {
            return (
              <code key={i} className="px-1.5 py-0.5 rounded text-sm bg-code-bg text-code-foreground">
                {part.slice(1, -1)}
              </code>
            );
          }
          // Parse bold text
          const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
          return boldParts.map((bp, j) => {
            if (bp.startsWith('**') && bp.endsWith('**')) {
              return <strong key={`${i}-${j}`}>{bp.slice(2, -2)}</strong>;
            }
            return bp;
          });
        });
        
        elements.push(
          <p key={index} className="mb-6 text-muted-foreground leading-7">
            {content}
          </p>
        );
      }
    });

    return elements;
  };

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Layout>
      <ReadingProgress />
      
      <article className="py-12 md:py-20">
        <div className="container mx-auto">
          {/* Back button */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16">
            {/* Main Content */}
            <div>
              {/* Header */}
              <header className="mb-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                    {post.category}
                  </Badge>
                  <span className="text-muted-foreground text-sm flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </span>
                  <span className="text-muted-foreground text-sm flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime} min read
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {post.title}
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-sm px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ShareButtons title={post.title} url={currentUrl} />
                </div>
              </header>

              {/* Content */}
              <div className="prose-custom border-t border-border pt-10">
                {renderContent(post.content)}
              </div>

              {/* Author */}
              <div className="mt-12 p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-gradient">ZK</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Zohrab Khidirov</h4>
                    <p className="text-sm text-muted-foreground">
                      Mid-level developer passionate about building practical tools
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <TableOfContents content={post.content} />
            </aside>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-20 pt-12 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
