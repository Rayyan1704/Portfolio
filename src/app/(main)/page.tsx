'use client';

import { motion } from 'framer-motion';
import { Chatbot } from '@/components/chatbot';

export default function Home() {
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Mohammed Aaqil Rayyan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-2 font-headline text-2xl font-medium text-primary md:text-3xl"
        >
          AI Engineer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-4 max-w-xl text-lg text-muted-foreground"
        >
          Technology, to me, isn’t about replacing human abilities, it’s about enhancing them and making knowledge easier to reach for everyone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-8 w-full max-w-2xl"
        >
          <Chatbot />
        </motion.div>
      </div>
    </main>
  );
}
