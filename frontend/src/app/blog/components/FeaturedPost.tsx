import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <div className="border rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-square bg-muted/50 relative overflow-hidden">
            {post.image && (
                <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full"
                />
            )}
            </div>
            <div className="p-8 flex flex-col justify-center">
                <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                        {post.category}
                    </span>
                </div>
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm bg-primary text-primary-foreground rounded-full">
                    Featured
                    </span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors">
                    {post.title}
                    </h2>
                </Link>
                <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                <div>
                    <Button asChild>
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}