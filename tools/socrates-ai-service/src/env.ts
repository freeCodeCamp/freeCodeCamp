import { z } from 'zod';

const envSchema = z.object({
  ANTHROPIC_API_KEY: z.string().min(1, 'ANTHROPIC_API_KEY is required'),
  SOCRATES_API_KEY: z.string().min(1, 'SOCRATES_API_KEY is required'),
  PORT: z.coerce.number().int().positive().default(4000),
  HOST: z.string().default('0.0.0.0'),
  MODEL_ID: z.string().default('claude-haiku-4-5-20251001')
});

export type Env = z.infer<typeof envSchema>;

export const loadEnv = (source: NodeJS.ProcessEnv = process.env): Env => {
  const parsed = envSchema.safeParse(source);
  if (!parsed.success) {
    const issues = parsed.error.issues
      .map(i => `  ${i.path.join('.')}: ${i.message}`)
      .join('\n');
    throw new Error(`Invalid environment:\n${issues}`);
  }
  return parsed.data;
};
