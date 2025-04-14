// src/app/blog/components/CategoryFilter.tsx
"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { allCategories } from "../lib/constants";

export function CategoryFilter() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={cn(
            "px-4 py-2 rounded-md border transition-colors",
            !currentCategory
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted"
          )}
        >
          All Posts
        </Link>
        
        {allCategories.map((category) => (
          <Link
            key={category}
            href={`/blog?category=${encodeURIComponent(category)}`}
            className={cn(
              "px-4 py-2 rounded-md border transition-colors",
              currentCategory === category
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            )}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}