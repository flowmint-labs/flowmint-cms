"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function LandingHeader() {
  return (
    <header className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Flowmint CMS: Your Content, Simplified
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
          Create, manage, and publish stunning content with ease. Join thousands of creators using Flowmint CMS.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/register">
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 animate-pulse"
            >
              Start Free Trial
            </Button>
          </Link>
          <Link href="/demo">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </header>
  );
}