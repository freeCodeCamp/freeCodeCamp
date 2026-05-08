import { describe, expect, test } from 'vitest';
import {
  requestSchema,
  structuredOutputSchema,
  errorResponseSchema,
  successResponseSchema
} from '../schemas.js';
import { loadEnv } from '../env.js';

const validRequest = {
  description: 'Make the title element say Cat Photo App.',
  userInput: '<h1>Cat Photo App</h1>',
  seed: '<!-- code below this line -->',
  hints: [{ text: 'Your h1 should say Cat Photo App.', failed: true }],
  userId: 'user-1'
};

describe('requestSchema', () => {
  test('accepts a fully populated valid payload', () => {
    expect(requestSchema.safeParse(validRequest).success).toBe(true);
  });

  test('rejects empty description', () => {
    const result = requestSchema.safeParse({ ...validRequest, description: '' });
    expect(result.success).toBe(false);
  });

  test('rejects malformed hint items missing text', () => {
    const result = requestSchema.safeParse({
      ...validRequest,
      hints: [{ failed: true }]
    });
    expect(result.success).toBe(false);
  });

  test('userInput is optional but typed when present', () => {
    const { userInput: _ignored, ...withoutInput } = validRequest;
    expect(requestSchema.safeParse(withoutInput).success).toBe(true);
  });
});

describe('structuredOutputSchema', () => {
  test('accepts a clean encouragement+question pair', () => {
    expect(
      structuredOutputSchema.safeParse({
        encouragement: 'You named the heading correctly.',
        question: 'What wraps the page name in the browser tab?'
      }).success
    ).toBe(true);
  });

  test('rejects empty question', () => {
    const result = structuredOutputSchema.safeParse({
      encouragement: 'Nice.',
      question: ''
    });
    expect(result.success).toBe(false);
  });

  test('rejects question longer than 400 chars (≤ 2 sentence cap)', () => {
    const long = 'a'.repeat(401);
    const result = structuredOutputSchema.safeParse({
      encouragement: 'Nice.',
      question: long
    });
    expect(result.success).toBe(false);
  });
});

describe('response schemas', () => {
  test('successResponseSchema accepts a hint string', () => {
    expect(
      successResponseSchema.safeParse({ hint: 'Try again.' }).success
    ).toBe(true);
  });

  test('errorResponseSchema accepts an error string', () => {
    expect(
      errorResponseSchema.safeParse({ error: 'no-attempt' }).success
    ).toBe(true);
  });
});

describe('loadEnv', () => {
  test('parses required keys and applies defaults', () => {
    const env = loadEnv({
      ANTHROPIC_API_KEY: 'k',
      SOCRATES_API_KEY: 'something'
    });
    expect(env.PORT).toBe(4000);
    expect(env.HOST).toBe('0.0.0.0');
    expect(env.MODEL_ID).toBe('claude-haiku-4-5-20251001');
  });

  test('coerces PORT from string', () => {
    const env = loadEnv({
      ANTHROPIC_API_KEY: 'k',
      SOCRATES_API_KEY: 's',
      PORT: '4100'
    });
    expect(env.PORT).toBe(4100);
  });

  test('throws when ANTHROPIC_API_KEY is missing', () => {
    expect(() => loadEnv({ SOCRATES_API_KEY: 'something' })).toThrow(
      /ANTHROPIC_API_KEY/
    );
  });

  test('throws when SOCRATES_API_KEY is missing', () => {
    expect(() => loadEnv({ ANTHROPIC_API_KEY: 'k' })).toThrow(/SOCRATES_API_KEY/);
  });
});
