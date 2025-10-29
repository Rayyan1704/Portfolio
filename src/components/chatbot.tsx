"use client";

import { useState, useTransition } from "react";
import { Sparkles, Bot, User, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { aiChatbotAnswersPortfolioQuestions } from "@/ai/flows/ai-chatbot-answers-portfolio-questions";
import { portfolioSummary } from "@/lib/data";

interface Message {
  role: "user" | "bot";
  text: string;
}

export function Chatbot() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isPending) return;

    const userMessage: Message = { role: "user", text: question };
    setMessages(prev => [...prev, userMessage]);

    startTransition(async () => {
      try {
        const result = await aiChatbotAnswersPortfolioQuestions({
          question,
          portfolioSummary,
        });
        const botMessage: Message = { role: "bot", text: result.answer };
        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        const errorMessage: Message = {
          role: "bot",
          text: "Sorry, I couldn't get an answer. Please try again.",
        };
        setMessages(prev => [...prev, errorMessage]);
        console.error("AI Chatbot Error:", error);
      }
    });

    setQuestion("");
  };

  return (
    <div className="w-full rounded-lg border border-border/50 bg-background/30 p-4 backdrop-blur-lg shadow-2xl shadow-primary/10">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-primary" />
        <p className="font-headline text-lg font-medium text-foreground">Ask me about this portfolio</p>
      </div>

      <AnimatePresence>
        {messages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 space-y-4 max-h-48 overflow-y-auto pr-2"
          >
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-start gap-3 ${
                  message.role === "user" ? "justify-end" : ""
                }`}
              >
                {message.role === "bot" && (
                  <div className="flex-shrink-0 rounded-full bg-primary/20 p-2">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                    message.role === "user"
                      ? "bg-primary/90 text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.text}
                </div>
                 {message.role === "user" && (
                  <div className="flex-shrink-0 rounded-full bg-muted p-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
            {isPending && (
               <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3"
              >
                 <div className="flex-shrink-0 rounded-full bg-primary/20 p-2">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                <div className="bg-muted rounded-lg px-3 py-2 flex items-center gap-2">
                   <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                   <span className="text-sm text-muted-foreground">Thinking...</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <Input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g., What are the main projects?"
          className="flex-grow bg-background/70 dark:bg-background/70 focus:ring-primary"
          disabled={isPending}
        />
        <Button type="submit" disabled={isPending || !question.trim()} className="shrink-0">
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Ask"
          )}
        </Button>
      </form>
    </div>
  );
}
