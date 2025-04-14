"use client";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const form = useForm();
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      router.push("/dashboard");
    },
  });

  const onSubmit = (data: any) => mutation.mutate(data);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-96">
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" disabled={mutation.isPending}>
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}