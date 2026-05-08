import { z } from 'zod';

export const hintSchema = z.object({
  text: z.string().min(1).max(2000),
  failed: z.boolean().optional()
});

export const requestSchema = z.object({
  description: z.string().min(1).max(10_000),
  userInput: z.string().max(50_000).optional(),
  seed: z.string().min(1).max(50_000),
  hints: z.array(hintSchema).max(200),
  userId: z.string().min(1).max(100)
});

export type HintRequest = z.infer<typeof requestSchema>;
export type FailingHint = z.infer<typeof hintSchema>;

export const structuredOutputSchema = z.object({
  encouragement: z
    .string()
    .min(1, 'encouragement is required')
    .max(240, 'encouragement must fit on one line'),
  question: z
    .string()
    .min(1, 'question is required')
    .max(400, 'question must fit in two short sentences')
});

export type StructuredOutput = z.infer<typeof structuredOutputSchema>;

export const successResponseSchema = z.object({
  hint: z.string().min(1)
});

export const errorResponseSchema = z.object({
  error: z.string().min(1)
});

export type SuccessResponse = z.infer<typeof successResponseSchema>;
export type ErrorResponse = z.infer<typeof errorResponseSchema>;
