
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { researchInterestsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Lightbulb, PenTool } from "lucide-react";

export default function ResearchPage() {
  return (
    <PageTransition>
      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-center font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Research Interests
        </h1>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          My key areas of focus and ongoing work in the field of Artificial Intelligence.
        </p>
        <div className="mt-12 space-y-8">
          {researchInterestsData.map((item, index) => (
            <Card key={index} className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                    <span className="font-headline text-2xl">{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
            </Card>
          ))}
          
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                <FileText className="h-6 w-6 text-primary" />
                <span className="font-headline text-2xl">Internship Logbook</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Authored a detailed logbook documenting weekly progress, data analysis processes, and key findings from my data analyst internship.</p>
              <Button asChild className="mt-4">
                <Link href="/logbook.pdf" target="_blank" rel="noopener noreferrer">
                  View Logbook
                </Link>
              </Button>
            </CardContent>
          </Card>

          <div className="text-center">
              <p className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
                <PenTool className="h-5 w-5 text-primary" />
                Currently working on a research paper.
              </p>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
