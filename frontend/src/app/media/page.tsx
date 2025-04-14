"use client";
import { useMutation } from "@tanstack/react-query";
import { uploadMedia } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

export default function MediaPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mutation = useMutation({
    mutationFn: (formData: FormData) => uploadMedia(formData),
    onSuccess: () => {
      if (fileInputRef.current) fileInputRef.current.value = "";
    },
  });

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      mutation.mutate(formData);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Media</h1>
      <Card>
        <CardContent className="pt-6">
          <Input
            type="file"
            ref={fileInputRef}
            onChange={handleUpload}
            accept="image/*,video/*"
            className="mb-4"
          />
          <Button disabled={mutation.isPending}>Upload</Button>
        </CardContent>
      </Card>
    </div>
  );
}