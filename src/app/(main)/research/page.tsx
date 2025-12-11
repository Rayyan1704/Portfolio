
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, FileText, Lightbulb, CheckCircle } from "lucide-react";

const researchData = {
  title: "Cross-Lingual Retrieval-Augmented Generation for Arabic Government Services",
  description: "This research investigates multilingual information retrieval for low-resource Arabic government service queries. I developed a bilingual RAG system that achieves 99% category accuracy and 84% source accuracy on formal queries, with strong robustness to dialectal Arabic (90%) and messy user inputs (84%). Through five systematic experiments on 130 test queries, I demonstrated that multilingual embeddings eliminate the need for query translation (saving 0.23s latency), while domain-specific keyword boosting provides +8% accuracy improvement over semantic search alone. The system handles Arabic, English, and dialectal queries across 51 documents in 8 service categories, generating contextual answers in under a second using Google Gemini 2.0 Flash.",
  keyFindings: [
    "Multilingual embeddings achieve 100% accuracy on English queries without translation",
    "Keyword boosting critical for domain-specific terms (+8% accuracy)",
    "Strong robustness: only 15% accuracy drop on messy/dialectal queries",
    "Hybrid retrieval provides marginal improvement (+2%) over semantic-only search",
  ],
  technologies: "Python, FAISS, Sentence Transformers (paraphrase-multilingual-mpnet-base-v2), Google Gemini API, Streamlit",
  links: {
    paper: "/Cross_Lingual_Retrieval_Augmented_Generation_for_Arabic_Government_Services.pdf",
    liveDemo: "https://arabic-gov-assistant-rag.streamlit.app",
    github: "https://github.com/Rayyan1704/arabic-gov-assistant-rag",
  }
}

export default function ResearchPage() {
  return (
    <PageTransition>
      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-center font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Research & Publications
        </h1>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          A summary of my key research contributions in AI.
        </p>
        <div className="mt-12 space-y-8">

          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-start gap-4">
                <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="font-headline text-2xl">{researchData.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">{researchData.description}</p>
              
              <div>
                <h4 className="font-headline text-lg font-semibold mb-3">Key Findings</h4>
                <ul className="space-y-2">
                  {researchData.keyFindings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-headline text-lg font-semibold mb-2">Technologies</h4>
                <p className="text-muted-foreground">{researchData.technologies}</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild>
                    <Link href={researchData.links.paper} target="_blank">
                        <FileText className="mr-2 h-4 w-4" /> Paper
                    </Link>
                </Button>
                 <Button asChild variant="secondary">
                    <Link href={researchData.links.liveDemo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href={researchData.links.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
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

        </div>
      </div>
    </PageTransition>
  );
}
