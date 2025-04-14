"use client";

import { useQuery } from "@tanstack/react-query";
import { getContents } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { ArrowRight, Calendar, User, Star } from "lucide-react";
import Image from "next/image";

import { LandingNavbar } from "@/components/landingpage/navbar";
import LandingHeader from "@/components/landingpage/header";
import LandingFooter from "@/components/landingpage/footer";

export default function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["popularContents"],
    queryFn: getContents,
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      {/* <header className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Flowmint CMS: Your Content, Simplified
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
            Create, manage, and publish stunning content with ease. Join thousands of creators using Flowmint CMS.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 animate-pulse">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </header> */}
      <LandingNavbar />
      <LandingHeader />

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Why Choose Flowmint CMS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Intuitive Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Streamline your workflow with a clean, user-friendly interface designed for speed and efficiency.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <ArrowRight className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Flexible Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Support for blogs, portfolios, e-commerce, and more—customize to fit any content type.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Star className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Scalable Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From startups to enterprises, Flowmint CMS grows with your business needs seamlessly.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href="/features">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular News Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Trending Content
          </h2>
          {isLoading ? (
            <div className="text-center text-muted-foreground">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data?.data.slice(0, 3).map((content: any) => (
                <Card
                  key={content._id}
                  className="bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src="/placeholder-news.jpg"
                    alt={content.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{content.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      By {content.author || "Flowmint Team"} • {new Date().toLocaleDateString()}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">
                      {content.body.replace(/<[^>]+>/g, "")}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="text-accent hover:text-accent/80">
                      <Link href={`/content/${content._id}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
          <div className="text-center mt-12">
            <Link href="/news">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Jane Doe", role: "CEO", img: "/placeholder-team1.jpg" },
              { name: "John Smith", role: "CTO", img: "/placeholder-team2.jpg" },
              { name: "Emily Brown", role: "Lead Designer", img: "/placeholder-team3.jpg" },
              { name: "Michael Lee", role: "Product Manager", img: "/placeholder-team4.jpg" },
            ].map((member) => (
              <Card key={member.name} className="bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center gap-4">
                    <Link href="#" className="text-accent hover:text-accent/80">
                      LinkedIn
                    </Link>
                    <Link href="#" className="text-accent hover:text-accent/80">
                      Twitter
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Blogger",
                quote: "Flowmint CMS transformed my workflow. I can publish posts in half the time!",
                rating: 5,
              },
              {
                name: "David Kim",
                role: "E-commerce Owner",
                quote: "The flexibility and scalability are unmatched. Highly recommend!",
                rating: 4,
              },
              {
                name: "Lisa Chen",
                role: "Content Manager",
                quote: "Intuitive and powerful. My team loves the dashboard.",
                rating: 5,
              },
            ].map((testimonial) => (
              <Card key={testimonial.name} className="bg-card text-card-foreground">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Flowmint CMS?</AccordionTrigger>
              <AccordionContent>
                Flowmint CMS is a user-friendly platform for creating, managing, and publishing content effortlessly, suitable for blogs, businesses, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is there a free trial?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 14-day free trial with full access to all features. No credit card required!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I integrate with other tools?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Flowmint CMS supports integrations with popular tools like Zapier, Google Analytics, and more.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center mt-12">
            <Link href="/faq">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-primary text-primary-foreground py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join Flowmint CMS today and experience seamless content management. Start your free trial now!
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <LandingFooter />

    </div>
  );
}