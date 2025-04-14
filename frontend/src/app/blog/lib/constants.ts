// src/app/blog/lib/constants.ts
export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    featured?: boolean;
    image?: string;
    readingTime: number;
    tags: string[];
    category: string; // Add category field
  }
  
  export const allCategories = [
    "Tutorials",
    "Product Updates",
    "Case Studies",
    "Industry News"
  ] as const;
  
  export const allBlogPosts: BlogPost[] = [
    {
      slug: 'getting-started',
      title: 'Getting Started with Flowmint',
      excerpt: 'Learn the basics of Flowmint CMS',
      content: '# Welcome to Flowmint...',
      date: '2023-10-15',
      category: 'Tutorials',
      tags: ['beginner', 'setup'],
      readingTime: 5,
      featured: true
    },
    {
      slug: 'deep-dive-components',
      title: 'Deep Dive into Flowmint Components',
      excerpt: 'Understand how to customize components in Flowmint',
      content: '# Components in Flowmint...',
      date: '2023-11-01',
      category: 'Tutorials',
      tags: ['components', 'customization'],
      readingTime: 8
    },
    {
      slug: 'q4-2023-updates',
      title: 'What’s New in Flowmint - Q4 2023',
      excerpt: 'Check out the latest features and improvements',
      content: '# Updates in Q4...',
      date: '2023-12-10',
      category: 'Product Updates',
      tags: ['release', 'features'],
      readingTime: 6,
      image: '/images/blog/q4-2023-updates.png'
    },
    {
      slug: 'scaling-content-teams',
      title: 'Scaling Your Content Team with Flowmint',
      excerpt: 'A case study on how Acme Inc. scaled their content operations',
      content: '# Case Study: Acme Inc...',
      date: '2024-01-12',
      category: 'Case Studies',
      tags: ['case study', 'content ops'],
      readingTime: 7,
      featured: true
    },
    {
      slug: 'headless-cms-trends',
      title: 'Trends in Headless CMS for 2024',
      excerpt: 'Industry insights and emerging patterns for CMS architecture',
      content: '# CMS Trends in 2024...',
      date: '2024-02-20',
      category: 'Industry News',
      tags: ['trends', 'cms', '2024'],
      readingTime: 9
    },
    {
      slug: 'accessibility-improvements',
      title: 'Accessibility Improvements in Flowmint',
      excerpt: 'Enhancing accessibility for all users',
      content: '# Making Flowmint Accessible...',
      date: '2024-03-05',
      category: 'Product Updates',
      tags: ['accessibility', 'inclusivity'],
      readingTime: 4
    },
    {
      slug: 'migrating-from-wordpress',
      title: 'Migrating from WordPress to Flowmint',
      excerpt: 'A practical guide for smooth migration',
      content: '# Migrate with Ease...',
      date: '2024-03-22',
      category: 'Tutorials',
      tags: ['wordpress', 'migration'],
      readingTime: 10
    },
    {
      slug: 'content-workflows-ecommerce',
      title: 'Optimizing Content Workflows for E-commerce',
      excerpt: 'How Flowmint supports e-commerce content at scale',
      content: '# E-commerce Workflows...',
      date: '2024-04-01',
      category: 'Case Studies',
      tags: ['ecommerce', 'workflows'],
      readingTime: 7
    }
  ];
  