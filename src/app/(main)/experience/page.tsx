import { PageTransition } from "@/components/page-transition";
import { experienceData } from "@/lib/data";
import { Briefcase, CheckCircle } from "lucide-react";

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-center font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Professional Experience
        </h1>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          My journey in the tech industry so far.
        </p>
        <div className="mt-12">
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-border" aria-hidden="true" />
            {experienceData.map((exp, index) => (
              <div key={index} className="relative mb-12">
                <div className="absolute left-6 top-3 -ml-2.5 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                <div className="ml-12">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline text-2xl font-semibold">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <p className="text-md font-medium text-muted-foreground">{exp.company}</p>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
