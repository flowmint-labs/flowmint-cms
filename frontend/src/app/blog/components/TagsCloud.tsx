// src/app/blog/components/TagsCloud.tsx
"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { allBlogPosts } from "../lib/constants";

export function TagsCloud() {
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag");

  // Get all unique tags from blog posts
  const allTags = Array.from(
    new Set(allBlogPosts.flatMap((post) => post.tags))
  ).sort();

  // Calculate tag weights based on frequency
  const tagCounts: Record<string, number> = {};
  allBlogPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  const maxCount = Math.max(...Object.values(tagCounts));
  const minCount = Math.min(...Object.values(tagCounts));

  // Size classes based on frequency
  const getSizeClass = (tag: string) => {
    const count = tagCounts[tag];
    const range = maxCount - minCount;
    const normalized = (count - minCount) / range;

    if (normalized > 0.7) return "text-xl";
    if (normalized > 0.4) return "text-lg";
    return "text-base";
  };

  return (
    <div className="border rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Browse by Tags</h3>
      <div className="flex flex-wrap gap-3">
        {allTags.map((tag) => (
          <Link
            key={tag}
            href={`/blog?tag=${encodeURIComponent(tag)}`}
            className={cn(
              "px-3 py-1 rounded-full border transition-all hover:bg-primary hover:text-primary-foreground",
              getSizeClass(tag),
              currentTag === tag
                ? "bg-primary text-primary-foreground"
                : "bg-muted/50 hover:shadow-md"
            )}
          >
            {tag}
          </Link>
        ))}
        {currentTag && (
          <Link
            href="/blog"
            className="px-3 py-1 text-sm rounded-full border border-dashed hover:bg-muted"
          >
            Clear filter
          </Link>
        )}
      </div>
    </div>
  );
}