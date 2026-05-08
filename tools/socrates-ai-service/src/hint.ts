import type { ZodType } from 'zod';
import { buildUserPrompt, SYSTEM_PROMPT, STRICTER_SYSTEM_PROMPT } from './prompt.js';
import { isPedagogySafe, type Violation } from './validator.js';
import { structuredOutputSchema } from './schemas.js';
import type { HintRequest, StructuredOutput } from './schemas.js';

export class PedagogyViolationError extends Error {
  readonly reason: Violation;
  constructor(reason: Violation) {
    super(`pedagogy violation: ${reason}`);
    this.name = 'PedagogyViolationError';
    this.reason = reason;
  }
}

type GenerateArgs = {
  readonly system: string;
  readonly prompt: string;
  readonly schema: ZodType<StructuredOutput>;
};

export type GenerateFn = (args: GenerateArgs) => Promise<StructuredOutput>;

export type HintDeps = {
  readonly generate: GenerateFn;
};

const concat = (s: StructuredOutput): string =>
  `${s.encouragement.trim()} ${s.question.trim()}`.replace(/\s+/g, ' ').trim();

export const generateHint = async (
  payload: HintRequest,
  deps: HintDeps
): Promise<string> => {
  const userPrompt = buildUserPrompt(payload);

  const first = await deps.generate({
    system: SYSTEM_PROMPT,
    prompt: userPrompt,
    schema: structuredOutputSchema
  });
  const firstCheck = isPedagogySafe(first, payload);
  if (firstCheck.ok) return concat(first);

  const second = await deps.generate({
    system: STRICTER_SYSTEM_PROMPT,
    prompt: userPrompt,
    schema: structuredOutputSchema
  });
  const secondCheck = isPedagogySafe(second, payload);
  if (secondCheck.ok) return concat(second);

  throw new PedagogyViolationError(secondCheck.reason);
};
