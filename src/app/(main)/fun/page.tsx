"use client";

import { PageTransition } from "@/components/page-transition";
import { funData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Music, Clapperboard, Dribbble, MapPin, List, Tv, Film, ExternalLink } from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Music", icon: <Music className="h-10 w-10" /> },
  { name: "Sports", icon: <Dribbble className="h-10 w-10" /> },
  { name: "Movies, Series & Anime", icon: <Clapperboard className="h-10 w-10" /> },
  { name: "Places", icon: <MapPin className="h-10 w-10" /> },
];

export default function FunPage() {
  return (
    <PageTransition>
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-center font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          For Fun
        </h1>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          A few of my favorite things outside of the world of code.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Dialog key={category.name}>
              <DialogTrigger asChild>
                <Card className="group relative cursor-pointer overflow-hidden border-border/50 bg-card/50 text-center transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2">
                  <CardContent className="flex flex-col items-center justify-center p-6 aspect-[4/3]">
                    <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                      {category.icon}
                    </div>
                    <h3 className="mt-4 font-headline text-xl font-semibold">{category.name}</h3>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-md md:max-w-3xl h-[80vh] flex flex-col">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 font-headline text-2xl">
                    {category.icon} {category.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="flex-grow overflow-y-auto pr-4">
                  {category.name === 'Music' && <MusicContent />}
                  {category.name === 'Sports' && <SportsContent />}
                  {category.name === 'Movies, Series & Anime' && <MoviesContent />}
                  {category.name === 'Places' && <PlacesContent />}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

const MusicContent = () => (
  <ul className="mt-4 space-y-2">
    {funData.songs.map((song, index) => (
      <li key={index}>
        <Link
          href={song.spotifySearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-md bg-muted/50 p-3 transition-colors hover:bg-primary/10"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
            {index + 1}
          </span>
          <span className="flex-grow">{song.name}</span>
          <ExternalLink className="h-4 w-4 text-muted-foreground" />
        </Link>
      </li>
    ))}
  </ul>
);

const SportsContent = () => (
    <div className="space-y-6 mt-4">
        {funData.sports.map(sport => (
            <Card key={sport.name} className="border-border/50 bg-card/50">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{sport.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">{sport.description}</p>
                    <div className="space-y-2">
                        {sport.favorites.map(fav => (
                            <div key={fav.label}>
                                <span className="font-semibold text-primary">{fav.label}:</span>
                                <span className="ml-2 text-muted-foreground">{fav.value}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        ))}
    </div>
);

const MoviesContent = () => (
  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    {Object.entries(funData.movies).map(([category, list]) => (
      <div key={category}>
        <h3 className="font-headline text-xl flex items-center gap-2 mb-4">
            {category === "Movies" && <Film className="h-5 w-5" />}
            {category === "Series/TV Shows" && <Tv className="h-5 w-5" />}
            {category === "Anime/Animated Series" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 11 1-1 1 1 1-1 1 1 1-1 1 1-4 4-4-4Z"/><path d="M3.5 7.5c.31-.03.62-.06.95-.08C6.58 7.15 8.63 8.5 11 11c.85.88 1.63 1.56 2.4 2.11.23.16.48.3.73.43a4.5 4.5 0 0 0 4.97-4.97.02.02 0 0 1 .03-.22c.02-.15.03-.3.03-.45 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .15.01.3.03.45a.02.02 0 0 1 .03.22 4.5 4.5 0 0 0 4.97 4.97c.13-.02.26-.06.39-.1.56-.2.94-.48 1.2-.7.73-1.33 1.07-2.67 1.1-4a11.5 11.5 0 0 0-2.14-7.26C18.59 2.58 17.38 2 16 2a4 4 0 0 0-4 4c0 .74.2 1.42.55 2.02.1.17.22.33.36.48.8.9 1.6 1.5 2.09 1.83.15.1.28.18.39.23a.5.5 0 0 1 .11.05 1 1 0 0 1 .11.05c-1.07.32-2.1.27-3.03-.2-.93-.45-1.78-1.12-2.58-1.9-2.08-2.08-4.2-3.26-6.4-3.55a1 1 0 0 0-.5.92V11c0 2.21 1.79 4 4 4h.53l.47.5V20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5Z"/></svg>}
          {category}
        </h3>
        <ul className="space-y-2">
          {list.map((item, index) => (
             <li key={index} className="flex items-center gap-3 text-muted-foreground text-sm">
               <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary shrink-0">
                 {index + 1}
               </span>
               <span>{item}</span>
             </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const PlacesContent = () => (
    <ul className="mt-4 space-y-2">
      {funData.places.map((item, index) => (
        <li key={index} className="flex items-center gap-3 rounded-md bg-muted/50 p-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
            {index + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
);
