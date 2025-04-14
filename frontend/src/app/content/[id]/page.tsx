"use client";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getContentById, updateContent } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function EditContentPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const form = useForm();
  const { data, isLoading } = useQuery({
    queryKey: ["content", params.id],
    queryFn: () => getContentById(params.id),
  });
  const mutation = useMutation({
    mutationFn: (data: any) => updateContent(params.id, data),
    onSuccess: () => router.push("/dashboard"),
  });

  if (isLoading) return <div>Loading...</div>;

  const onSubmit = (data: any) => mutation.mutate(data);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Edit Content</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            name="title"
            defaultValue={data?.data.title}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Content Title" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="body"
            defaultValue={data?.data.body}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <ReactQuill theme="snow" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" disabled={mutation.isPending}>
            Update
          </Button>
        </form>
      </Form>
    </div>
  );
}