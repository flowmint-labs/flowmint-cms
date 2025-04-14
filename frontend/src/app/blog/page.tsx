'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BlogCard from './components/BlogCard';
import FeaturedPost from './components/FeaturedPost';
import { TagsCloud } from './components/TagsCloud';
import { allBlogPosts, allCategories } from './lib/constants';
import { useSearchParams } from 'next/navigation';
import { CategoryFilter } from './components/CategoryFilter';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';


import { LandingNavbar } from "@/components/landingpage/navbar";
import LandingHeader from "@/components/landingpage/header";

export default function BlogPage() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
  const currentTag = searchParams.get('tag');
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Filter posts by category, tag, and search query
  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter((post) => {
      const categoryMatch = !currentCategory || post.category === currentCategory;
      const tagMatch = !currentTag || post.tags.includes(currentTag);
      const searchMatch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && tagMatch && searchMatch;
    });
  }, [currentCategory, currentTag, searchQuery]);

  const featuredPost = useMemo(() => filteredPosts.find((post) => post.featured), [filteredPosts]);
  const regularPosts = useMemo(() => filteredPosts.filter((post) => !post.featured), [filteredPosts]);

  // Handle scroll for "Scroll to Top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
        <LandingNavbar />
      <div className="container mx-auto px-4 py-12">

        {/* Header Section */}
        <motion.div
          className="text-center mb-16 mt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Flowmint Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and news about content management and web development
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md mx-auto"
            aria-label="Search blog posts"
          />
        </div>

        {/* Category Filter */}
        <CategoryFilter />

        {/* Featured Post */}
        <AnimatePresence>
          {featuredPost && (
            <motion.div
              key={featuredPost.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <FeaturedPost post={featuredPost} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {regularPosts.length > 0 ? (
            regularPosts.map((post) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-muted-foreground">
              No posts found. Try adjusting your filters or search.
            </p>
          )}
        </motion.div>

        {/* Tags Cloud */}
        <div className="mt-16">
          <TagsCloud />
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-16">
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}