import { generateText, Output } from 'ai';
import { createAnthropic } from '@ai-sdk/anthropic';
import type { GenerateFn } from './hint.js';

export type AnthropicConfig = {
  readonly apiKey: string;
  readonly modelId: string;
};

export const createAnthropicGenerator = (config: AnthropicConfig): GenerateFn => {
  const provider = createAnthropic({ apiKey: config.apiKey });
  const model = provider(config.modelId);

  return async ({ system, prompt, schema }) => {
    const result = await generateText({
      model,
      system,
      prompt,
      output: Output.object({ schema })
    });
    return result.output;
  };
};
