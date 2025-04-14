// src/app/components/landingpage/navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Rocket, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    window.addEventListener('routechange', handleRouteChange);
    return () => window.removeEventListener('routechange', handleRouteChange);
  }, []);

  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Documentation", href: "/docs" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <nav className={cn(
        "fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50 transition-all duration-300",
        isScrolled ? "py-2 shadow-sm" : "py-3"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Flowmint-CMS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
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

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-all duration-300 ease-in-out transform",
        "md:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="container mx-auto px-4 pt-24 pb-8 flex flex-col h-full">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-2xl font-medium py-2 border-b border-muted"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4 pt-8">
            <Link href="/login">
              <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="w-full" onClick={() => setIsOpen(false)}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}