'use client';

import { PageTransition } from '@/components/page-transition';
import { skillsData, softSkills, researchSkills } from '@/lib/data';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartHandshake, BrainCircuit, CheckCircle } from 'lucide-react';


const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-center font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Technical Skills
        </h1>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          The tools and technologies I use to build intelligent applications.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {Object.entries(skillsData).map(([category, skills], i) => (
            <motion.div
              key={category}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="h-full border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-6">
                    {skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-base font-medium">{skill.name}</span>
                          <span className="text-sm font-medium text-skill-percentage">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
            <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Core Competencies</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                 <Card className="border-border/50 bg-card/50">
                    <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <HeartHandshake className="h-6 w-6 text-primary" />
                        <span className="font-headline text-2xl">Soft Skills</span>
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <ul className="space-y-4">
                        {softSkills.map((skill, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <div>
                                <h4 className="font-semibold">{skill.title}</h4>
                                <p className="text-muted-foreground text-sm">{skill.description}</p>
                            </div>
                        </li>
                        ))}
                    </ul>
                    </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/50">
                    <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <BrainCircuit className="h-6 w-6 text-primary" />
                        <span className="font-headline text-2xl">Research Skills</span>
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <ul className="space-y-4">
                        {researchSkills.map((skill, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <div>
                                <h4 className="font-semibold">{skill.title}</h4>
                                <p className="text-muted-foreground text-sm">{skill.description}</p>
                            </div>
                        </li>
                        ))}
                    </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </PageTransition>
  );
}
