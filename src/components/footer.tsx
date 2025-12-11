import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

const icons = {
  github: <Github />,
  linkedin: <Linkedin />,
  instagram: <Instagram />,
  email: <Mail />,
};

export function Footer() {
  return (
    <footer className="w-full bg-background/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MAR. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {Object.entries(socialLinks).map(([key, href]) => (
              <Button key={key} variant="ghost" size="icon" asChild>
                <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={key}>
                  {icons[key as keyof typeof icons]}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
