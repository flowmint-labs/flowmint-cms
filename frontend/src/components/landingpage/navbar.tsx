// src/app/components/landingpage/navbar.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Rocket } from "lucide-react";

export function LandingNavbar() {
  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Flowmint-CMS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/docs" className="text-sm font-medium hover:text-primary transition-colors">
            Documentation
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">
              Get Started
            </Button>
          </Link>

          {/* Mobile menu button (you'll need to implement the mobile menu functionality) */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}