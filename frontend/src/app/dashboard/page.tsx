"use client";
import { useQuery } from "@tanstack/react-query";
import { getContents } from "@/lib/api";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["contents"],
    queryFn: getContents,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Link href="/content/new">
          <Button>Create Content</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((content: any) => (
            <TableRow key={content._id}>
              <TableCell>{content.title}</TableCell>
              <TableCell>{content.author}</TableCell>
              <TableCell>{content.status}</TableCell>
              <TableCell>
                <Link href={`/content/${content._id}`}>
                  <Button variant="outline" size="sm">Edit</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}