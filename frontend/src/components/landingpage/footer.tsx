"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github
} from "lucide-react";

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Flowmint CMS</h3>
            <p className="text-muted-foreground mb-4">
              The modern content management system for creators and businesses.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-muted-foreground hover:text-primary">Features</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
              <li><Link href="/templates" className="text-muted-foreground hover:text-primary">Templates</Link></li>
              <li><Link href="/integrations" className="text-muted-foreground hover:text-primary">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/docs" className="text-muted-foreground hover:text-primary">Documentation</Link></li>
              <li><Link href="/community" className="text-muted-foreground hover:text-primary">Community</Link></li>
              <li><Link href="/webinars" className="text-muted-foreground hover:text-primary">Webinars</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/press" className="text-muted-foreground hover:text-primary">Press</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Flowmint CMS. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}