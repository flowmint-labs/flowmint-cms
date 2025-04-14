import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allBlogPosts } from '@/app/blog/lib/constants'; // Sesuaikan path jika berbeda
import { Button } from '@/components/ui/button';
import { marked } from 'marked';

export default function BlogDetailPage({ params }) {
  const { slug } = params;

  // Cari post berdasarkan slug
  const post = allBlogPosts.find((item) => item.slug === slug);

  if (!post) {
    return notFound(); // 404 jika post tidak ditemukan
  }

  // Render markdown content ke HTML
  const htmlContent = marked.parse(post.content);

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <article>
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-muted-foreground mb-4">
          {post.date} • {post.category} • {post.readingTime} min read
        </p>

        {/* Tags */}
        <div className="flex gap-2 mb-6">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-gray-200 text-sm px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        {/* Gambar jika ada */}
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="rounded-lg shadow mb-6 w-full"
          />
        )}

        {/* Konten Markdown yang di-render sebagai HTML */}
        <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>

      <div className="mt-12">
        <Button asChild variant="outline">
          <Link href="/blog">← Back to Blog</Link>
        </Button>
      </div>
    </div>
  );
}

export function generateMetadata({ params }) {
    const post = allBlogPosts.find((item) => item.slug === params.slug);
  
    if (!post) return {};
  
    return {
      title: post.title,
      description: post.excerpt,
    };
  }
  