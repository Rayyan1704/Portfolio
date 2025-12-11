
import Image from "next/image";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { aboutData, educationData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { University, Languages, Code, Download, FileText, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl shadow-primary/20">
              <Image
                src="/profile.jpg"
                alt="A professional portrait of Mohammed Aaqil Rayyan"
                fill
                quality={100}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent" />
            </div>
          </div>
          <div className="lg:col-span-3">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              My Journey
            </h1>
            <div className="mt-6 space-y-6 text-lg text-muted-foreground">
              {aboutData.story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" /> View CV
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" /> Download CV
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Card className="w-full border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <University className="h-8 w-8 text-primary" />
                <span className="font-headline text-3xl">Education</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-headline text-2xl font-semibold">{educationData.degree}</h3>
                <p className="text-lg text-muted-foreground">{educationData.university}</p>
                <p className="text-md font-medium text-primary">{educationData.duration} | CGPA: {educationData.cgpa}</p>
                <p className="text-md text-muted-foreground"><strong>Specialisation:</strong> {educationData.specialization}</p>
              </div>
              
              <div>
                <h4 className="font-headline text-xl font-semibold mb-2">Description</h4>
                <div className="space-y-4 text-muted-foreground">
                    {educationData.description.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
                 <div className="mt-4 space-y-3 text-muted-foreground">
                    <p>Through the degree, I've built a solid foundation in:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                        {educationData.technicalSkills.map((skill, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-headline text-xl font-semibold mb-3">Highlights</h4>
                <ul className="space-y-3">
                  {educationData.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Languages className="h-6 w-6 text-primary" />
                <span className="font-headline text-2xl">Known Languages</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {aboutData.languages.spoken.map((lang, i) => <li key={i}>{lang}</li>)}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                <span className="font-headline text-2xl">Programming Languages</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {aboutData.languages.technical.map((lang, i) => <li key={i}>{lang}</li>)}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
}
