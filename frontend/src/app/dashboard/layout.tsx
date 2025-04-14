"use client";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuth();
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}