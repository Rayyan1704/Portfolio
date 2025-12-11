'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Github, Linkedin, Instagram, Mail, Send, MapPin, Loader2 } from 'lucide-react';
import Link from 'next/link';

import { PageTransition } from '@/components/page-transition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { socialLinks } from '@/lib/data';
import { submitContactForm } from './actions';
import { cn } from '@/lib/utils';

const socialIcons = [
  { href: socialLinks.github, icon: <Github />, label: 'GitHub' },
  { href: socialLinks.linkedin, icon: <Linkedin />, label: 'LinkedIn' },
  { href: socialLinks.instagram, icon: <Instagram />, label: 'Instagram' },
  { href: socialLinks.email, icon: <Mail />, label: 'Email' },
];

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: 'Thank you for reaching out. I will get back to you shortly.',
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Something went wrong.',
          description: result.error || 'Could not send the message. Please try again.',
        });
      }
    });
  };

  const inputClass = "bg-muted/50 focus:bg-background transition-all duration-300 focus:shadow-[0_0_15px_1px_hsl(var(--primary))] focus:border-primary/50";

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
                <Button key={social.label} variant="outline" className="w-full justify-start gap-4 p-6 text-lg" asChild>
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <span className="text-primary">{social.icon}</span>
                    <span>{social.label}</span>
                  </Link>
                </Button>
              ))}
              <div className="flex items-center gap-4 rounded-lg border border-border/50 p-6 text-lg">
                <span className="text-primary">
                  <MapPin />
                </span>
                <span>Calicut, Kerala, India</span>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className={inputClass} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} className={inputClass} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." rows={5} {...field} className={inputClass} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending} className="group w-full p-6 text-lg">
                {isPending ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </PageTransition>
  );
}
