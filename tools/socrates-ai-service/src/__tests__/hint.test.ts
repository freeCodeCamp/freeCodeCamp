import { describe, expect, test, vi } from 'vitest';
import { generateHint, PedagogyViolationError } from '../hint.js';
import { SYSTEM_PROMPT, STRICTER_SYSTEM_PROMPT } from '../prompt.js';
import type { HintRequest, StructuredOutput } from '../schemas.js';

const payload: HintRequest = {
  description: 'Make the title element say Cat Photo App.',
  userInput: '<h1>Cat Photo App</h1>',
  seed: '<title>placeholder</title>',
  hints: [
    { text: 'Title should say Cat Photo App.', failed: true },
    { text: 'Page should have an h1.', failed: false }
  ],
  userId: 'u1'
};

const cleanOutput: StructuredOutput = {
  encouragement: 'You named the heading clearly.',
  question: 'What labels the page name in the browser tab?'
};

const violatingOutput: StructuredOutput = {
  encouragement: 'You used `<h1>` correctly.',
  question: '```html\n<title>Cat Photo App</title>\n```'
};

describe('generateHint', () => {
  test('returns concatenated hint when first call is clean', async () => {
    const generate = vi.fn().mockResolvedValueOnce(cleanOutput);
    const hint = await generateHint(payload, { generate });
    expect(hint).toBe(
      'You named the heading clearly. What labels the page name in the browser tab?'
    );
    expect(generate).toHaveBeenCalledTimes(1);
    expect(generate.mock.calls[0]?.[0]?.system).toBe(SYSTEM_PROMPT);
  });

  test('retries with stricter prompt when first call violates', async () => {
    const generate = vi
      .fn()
      .mockResolvedValueOnce(violatingOutput)
      .mockResolvedValueOnce(cleanOutput);

    const hint = await generateHint(payload, { generate });

    expect(hint).toContain('What labels the page name');
    expect(generate).toHaveBeenCalledTimes(2);
    expect(generate.mock.calls[0]?.[0]?.system).toBe(SYSTEM_PROMPT);
    expect(generate.mock.calls[1]?.[0]?.system).toBe(STRICTER_SYSTEM_PROMPT);
  });

  test('throws PedagogyViolationError carrying the violator reason when both calls fail', async () => {
    const generate = vi
      .fn()
      .mockResolvedValueOnce(violatingOutput)
      .mockResolvedValueOnce(violatingOutput);

    await expect(generateHint(payload, { generate })).rejects.toMatchObject({
      name: 'PedagogyViolationError',
      reason: 'code-block'
    });
    expect(generate).toHaveBeenCalledTimes(2);
  });

  test('propagates non-pedagogy errors unchanged', async () => {
    const boom = new Error('upstream-down');
    const generate = vi.fn().mockRejectedValueOnce(boom);
    await expect(generateHint(payload, { generate })).rejects.toBe(boom);
    expect(PedagogyViolationError).toBeDefined();
  });

  test('concat collapses internal whitespace and trims edges', async () => {
    const generate = vi.fn().mockResolvedValueOnce({
      encouragement: '   Nice work.  ',
      question: '   What is missing?  '
    });
    const hint = await generateHint(payload, { generate });
    expect(hint).toBe('Nice work. What is missing?');
  });
});
