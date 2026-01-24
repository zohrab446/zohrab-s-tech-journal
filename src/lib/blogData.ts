export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Frontend' | 'Cybersecurity' | 'AI' | 'Career';
  date: string;
  readTime: number;
  featured: boolean;
  image?: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'building-ai-powered-cv-analyzer',
    title: 'Building an AI-Powered CV Analyzer with Modern Web Tech',
    excerpt: 'A deep dive into creating a practical tool that uses AI to parse and analyze resumes, helping developers understand their career progression.',
    content: `
## Introduction

In this article, I'll walk you through building an AI-powered CV analyzer from scratch. This project combines modern web technologies with AI capabilities to create something genuinely useful.

## The Problem

Reviewing CVs manually is time-consuming. What if we could automate the analysis while providing meaningful insights?

## Tech Stack

For this project, I chose:

- **React** with TypeScript for the frontend
- **Node.js** for the backend API
- **OpenAI API** for natural language processing
- **PostgreSQL** for data persistence

## Implementation

\`\`\`typescript
const analyzeCV = async (content: string) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "Analyze this CV and extract key information..."
      },
      { role: "user", content }
    ]
  });
  
  return parseAnalysis(response.choices[0].message.content);
};
\`\`\`

## Key Learnings

1. **Prompt Engineering** is crucial for consistent results
2. **Error handling** needs to account for API rate limits
3. **User experience** matters more than raw AI capabilities

## Conclusion

Building AI-powered tools is more accessible than ever. The key is focusing on solving real problems.
    `,
    category: 'AI',
    date: '2024-01-15',
    readTime: 8,
    featured: true,
    tags: ['AI', 'React', 'TypeScript', 'OpenAI']
  },
  {
    id: 'secure-authentication-patterns',
    title: 'Secure Authentication Patterns for Modern Web Apps',
    excerpt: 'Exploring best practices for implementing authentication that balances security with user experience.',
    content: `
## Why Authentication Security Matters

Every data breach story starts with compromised credentials. Let's explore how to do authentication right.

## Modern Approaches

### JWT with Refresh Tokens

\`\`\`typescript
interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

const refreshTokens = async (refreshToken: string): Promise<AuthTokens> => {
  // Validate refresh token
  const decoded = verifyRefreshToken(refreshToken);
  
  // Generate new tokens
  return generateTokenPair(decoded.userId);
};
\`\`\`

### Session Management

Store sessions server-side for better security control.

## Common Pitfalls

- Storing tokens in localStorage
- Not implementing token rotation
- Ignoring CSRF protection

## Recommendations

1. Use HttpOnly cookies for tokens
2. Implement proper CORS policies
3. Add rate limiting to auth endpoints
    `,
    category: 'Cybersecurity',
    date: '2024-01-10',
    readTime: 6,
    featured: true,
    tags: ['Security', 'Authentication', 'JWT', 'Best Practices']
  },
  {
    id: 'react-performance-optimization',
    title: 'React Performance Optimization: Beyond the Basics',
    excerpt: 'Advanced techniques for optimizing React applications, from code splitting to virtualization.',
    content: `
## Beyond React.memo

Everyone knows about React.memo, but there's so much more to performance.

## Virtualization

For long lists, virtualization is essential:

\`\`\`tsx
import { FixedSizeList } from 'react-window';

const VirtualList = ({ items }) => (
  <FixedSizeList
    height={400}
    itemCount={items.length}
    itemSize={50}
  >
    {({ index, style }) => (
      <div style={style}>{items[index]}</div>
    )}
  </FixedSizeList>
);
\`\`\`

## Code Splitting

Strategic lazy loading improves initial load:

\`\`\`tsx
const Dashboard = lazy(() => import('./Dashboard'));
\`\`\`

## Bundle Analysis

Always analyze your bundle to find optimization opportunities.
    `,
    category: 'Frontend',
    date: '2024-01-05',
    readTime: 7,
    featured: false,
    tags: ['React', 'Performance', 'Optimization', 'JavaScript']
  },
  {
    id: 'my-journey-to-mid-level',
    title: 'From Junior to Mid-Level: Lessons Learned',
    excerpt: 'Reflecting on the skills, mindset shifts, and habits that helped me grow as a developer.',
    content: `
## The Path Forward

Becoming a mid-level developer isn't just about technical skills—it's about how you approach problems.

## Key Mindset Shifts

1. **Owning your learning** - No one will hand you growth
2. **Embracing complexity** - Simple problems don't build skills
3. **Teaching others** - The best way to solidify knowledge

## Technical Growth Areas

- System design thinking
- Code review skills
- Testing strategies
- Documentation practices

## What Actually Helped

- Building side projects
- Contributing to open source
- Writing about what I learned
- Seeking feedback actively

## Looking Ahead

The journey continues. Senior level requires even broader thinking.
    `,
    category: 'Career',
    date: '2024-01-01',
    readTime: 5,
    featured: true,
    tags: ['Career', 'Growth', 'Learning', 'Development']
  },
  {
    id: 'understanding-web-vulnerabilities',
    title: 'Common Web Vulnerabilities Every Developer Should Know',
    excerpt: 'A practical guide to understanding and preventing XSS, CSRF, SQL Injection, and more.',
    content: `
## Security is Everyone's Responsibility

As developers, we're the first line of defense against attacks.

## XSS (Cross-Site Scripting)

\`\`\`typescript
// BAD: Directly inserting user input
element.innerHTML = userInput;

// GOOD: Sanitize or use textContent
element.textContent = userInput;
\`\`\`

## SQL Injection

Always use parameterized queries:

\`\`\`sql
-- BAD
SELECT * FROM users WHERE id = '\${userId}';

-- GOOD
SELECT * FROM users WHERE id = $1;
\`\`\`

## CSRF Protection

Implement anti-CSRF tokens for state-changing requests.

## Key Takeaways

- Never trust user input
- Use security headers
- Keep dependencies updated
    `,
    category: 'Cybersecurity',
    date: '2023-12-28',
    readTime: 6,
    featured: false,
    tags: ['Security', 'XSS', 'CSRF', 'Web Development']
  },
  {
    id: 'building-with-typescript',
    title: 'TypeScript Patterns That Changed How I Code',
    excerpt: 'Practical TypeScript patterns that improve code quality and developer experience.',
    content: `
## Type Safety That Works

TypeScript isn't about adding types—it's about designing better APIs.

## Discriminated Unions

\`\`\`typescript
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

const handleResult = <T>(result: Result<T>) => {
  if (result.success) {
    console.log(result.data); // TypeScript knows data exists
  } else {
    console.error(result.error); // TypeScript knows error exists
  }
};
\`\`\`

## Branded Types

\`\`\`typescript
type UserId = string & { readonly brand: unique symbol };

const createUserId = (id: string): UserId => id as UserId;
\`\`\`

## Generic Constraints

Design flexible, type-safe utilities.
    `,
    category: 'Frontend',
    date: '2023-12-20',
    readTime: 7,
    featured: false,
    tags: ['TypeScript', 'JavaScript', 'Patterns', 'Best Practices']
  }
];

export const categories = ['Frontend', 'Cybersecurity', 'AI', 'Career'] as const;

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'All') return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
