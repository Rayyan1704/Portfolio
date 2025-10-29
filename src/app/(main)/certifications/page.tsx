import Image from "next/image";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { certificationsData, microsoftCertificationsData, workshopsData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function CertificationsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-center font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Certifications & Workshops
        </h1>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          My commitment to continuous learning and professional development.
        </p>
        
        <section className="mt-12">
          <h2 className="font-headline text-3xl font-semibold">Professional Certifications</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certificationsData.map((cert) => {
              const logo = PlaceHolderImages.find(p => p.id === cert.logoId);
              return (
                <Link href={cert.link} key={cert.id} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="group h-full relative overflow-hidden border-border/50 bg-card/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      {logo && (
                        <div className="relative h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={logo.imageUrl}
                            alt={logo.description}
                            data-ai-hint={logo.imageHint}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <Badge variant="secondary">{cert.date}</Badge>
                    </CardHeader>
                    <CardContent>
                      <h3 className="font-headline text-xl font-semibold">{cert.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{cert.org}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-headline text-3xl font-semibold">Microsoft Certifications</h2>
           <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {microsoftCertificationsData.map((cert) => {
              const logo = PlaceHolderImages.find(p => p.id === 'logo-microsoft');
              return (
                <Link href={cert.link} key={cert.id} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="group h-full relative overflow-hidden border-border/50 bg-card/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      {logo && (
                        <div className="relative h-10 w-10 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={logo.imageUrl}
                            alt={logo.description}
                            data-ai-hint={logo.imageHint}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <Badge variant="secondary">{cert.date}</Badge>
                    </CardHeader>
                    <CardContent>
                      <h3 className="font-headline text-xl font-semibold">{cert.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{cert.id}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-headline text-3xl font-semibold">Workshops Attended</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {workshopsData.map((workshop, index) => (
              <Card key={index} className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{workshop.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{workshop.org}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {workshop.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
