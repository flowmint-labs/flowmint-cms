// src/app/blog/components/ShareButtons.tsx
"use client";

import { Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`;
  const shareText = `Check out this blog post: ${title}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard!");
  };

  const shareLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4" />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`,
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-4 w-4" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-medium">Share this post</h3>
      <div className="flex gap-2">
        {shareLinks.map((link) => (
          <Button
            key={link.name}
            variant="outline"
            size="icon"
            asChild
            className="h-8 w-8"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${link.name}`}
            >
              {link.icon}
            </a>
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={handleCopy}
          aria-label="Copy link"
        >
          <LinkIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}