import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock } from 'lucide-react';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-video bg-muted/50 relative overflow-hidden">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </Link>
      <div className="p-6">
        <div className="flex gap-2 mb-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-muted rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
}