

import Image from "next/image";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { mainProjectsData, miniProjectsData } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-center font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          A selection of my work. See more on my GitHub.
        </p>

        {/* Main Projects */}
        <section className="mt-12">
          <h2 className="font-headline text-3xl font-semibold">Main Projects</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {mainProjectsData.map((project: any) => {
              return (
                <Card key={project.id || project.title} className="group flex flex-col overflow-hidden border-border/50 bg-card/50 transition-all hover:shadow-xl hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="dark:text-white text-primary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button asChild variant="outline">
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                    {project.liveDemo && (
                      <Button asChild>
                        <Link href={project.liveDemo} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Mini Projects */}
        <section className="mt-20">
          <h2 className="font-headline text-3xl font-semibold">Mini Projects</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {miniProjectsData.map((project, index) => (
               <Card key={index} className="group flex flex-col overflow-hidden border-border/50 bg-card/30 transition-all hover:bg-muted hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
