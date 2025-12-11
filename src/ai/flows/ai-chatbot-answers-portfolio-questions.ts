'use server';
/**
 * @fileOverview An AI chatbot that answers questions about the portfolio.
 *
 * - aiChatbotAnswersPortfolioQuestions - A function that handles the chatbot answering questions about the portfolio.
 * - AiChatbotAnswersPortfolioQuestionsInput - The input type for the aiChatbotAnswersPortfolioQuestions function.
 * - AiChatbotAnswersPortfolioQuestionsOutput - The return type for the aiChatbotAnswersPortfolioQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiChatbotAnswersPortfolioQuestionsInputSchema = z.object({
  question: z.string().describe('The question to answer about the portfolio.'),
  portfolioSummary: z.string().describe('A summary of the portfolio content.'),
});
export type AiChatbotAnswersPortfolioQuestionsInput = z.infer<typeof AiChatbotAnswersPortfolioQuestionsInputSchema>;

const AiChatbotAnswersPortfolioQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about the portfolio.'),
});
export type AiChatbotAnswersPortfolioQuestionsOutput = z.infer<typeof AiChatbotAnswersPortfolioQuestionsOutputSchema>;

export async function aiChatbotAnswersPortfolioQuestions(input: AiChatbotAnswersPortfolioQuestionsInput): Promise<AiChatbotAnswersPortfolioQuestionsOutput> {
  return aiChatbotAnswersPortfolioQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatbotAnswersPortfolioQuestionsPrompt',
  input: {schema: AiChatbotAnswersPortfolioQuestionsInputSchema},
  output: {schema: AiChatbotAnswersPortfolioQuestionsOutputSchema},
  prompt: `You are an AI chatbot that answers questions about a portfolio. Use the following information about the portfolio to answer the question.\n\nPortfolio Summary: {{{portfolioSummary}}}\n\nQuestion: {{{question}}}`,
});

const aiChatbotAnswersPortfolioQuestionsFlow = ai.defineFlow(
  {
    name: 'aiChatbotAnswersPortfolioQuestionsFlow',
    inputSchema: AiChatbotAnswersPortfolioQuestionsInputSchema,
    outputSchema: AiChatbotAnswersPortfolioQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
