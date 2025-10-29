'use client';

import { PageTransition } from '@/components/page-transition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Instagram, Mail, Send, MapPin } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import Link from 'next/link';

const socialIcons = [
  { href: socialLinks.github, icon: <Github />, label: "GitHub" },
  { href: socialLinks.linkedin, icon: <Linkedin />, label: "LinkedIn" },
  { href: socialLinks.instagram, icon: <Instagram />, label: "Instagram" },
  { href: socialLinks.email, icon: <Mail />, label: "Email" },
];

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    alert("Thank you for your message! This is a demo form.");
  };

  return (
    <PageTransition>
      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-center font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          Have a question or want to work together? Let's connect.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-headline text-2xl font-semibold">Connect with me</h2>
            <div className="space-y-4">
              {socialIcons.map((social) => (
                <Button key={social.label} variant="outline" className="w-full justify-start gap-4 text-lg p-6" asChild>
                   <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <span className="text-primary">{social.icon}</span>
                    <span>{social.label}</span>
                  </Link>
                </Button>
              ))}
               <div className="flex items-center gap-4 text-lg p-6 border border-border/50 rounded-lg">
                  <span className="text-primary"><MapPin /></span>
                  <span>Calicut, Kerala, India</span>
                </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-muted-foreground">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" required className="bg-muted/50 focus:bg-background transition-all duration-300 focus:shadow-[0_0_15px_1px_hsl(var(--primary))] focus:border-primary/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-muted-foreground">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" required className="bg-muted/50 focus:bg-background transition-all duration-300 focus:shadow-[0_0_15px_1px_hsl(var(--primary))] focus:border-primary/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-muted-foreground">Message</Label>
              <Textarea id="message" placeholder="Your message..." required rows={5} className="bg-muted/50 focus:bg-background transition-all duration-300 focus:shadow-[0_0_15px_1px_hsl(var(--primary))] focus:border-primary/50" />
            </div>
            <Button type="submit" className="w-full text-lg p-6 group">
              Send Message <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}
