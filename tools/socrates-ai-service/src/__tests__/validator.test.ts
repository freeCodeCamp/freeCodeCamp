import { describe, expect, test } from 'vitest';
import { isPedagogySafe } from '../validator.js';
import type { HintRequest } from '../schemas.js';

const baseRequest: HintRequest = {
  description: 'Add a title element that says Cat Photo App.',
  userInput: '<h1>Cat Photo App</h1>',
  seed: '<title>placeholder</title>',
  hints: [{ text: 'Title should say Cat Photo App.', failed: true }],
  userId: 'u1'
};

describe('isPedagogySafe', () => {
  test('accepts a clean encouragement+question', () => {
    const result = isPedagogySafe(
      {
        encouragement: 'You named the heading clearly.',
        question: 'What element labels the page name in the browser tab?'
      },
      baseRequest
    );
    expect(result).toStrictEqual({ ok: true });
  });

  test('rejects fenced code blocks anywhere in the output', () => {
    const result = isPedagogySafe(
      {
        encouragement: 'You started with `<h1>` correctly.',
        question: 'Try this:\n```html\n<title>Cat Photo App</title>\n```'
      },
      baseRequest
    );
    expect(result).toStrictEqual({ ok: false, reason: 'code-block' });
  });

  test('rejects single-backtick inline code', () => {
    const result = isPedagogySafe(
      {
        encouragement: 'Nice work.',
        question: 'What goes between `<head>` and `</head>`?'
      },
      baseRequest
    );
    expect(result).toStrictEqual({ ok: false, reason: 'code-block' });
  });

  test('rejects 4-space-indented code blocks', () => {
    const result = isPedagogySafe(
      {
        encouragement: 'Nice.',
        question: 'Try:\n    <title>Cat Photo App</title>\nin the head.'
      },
      baseRequest
    );
    expect(result).toStrictEqual({ ok: false, reason: 'code-block' });
  });

  test('rejects multi-tag spans even when only encouragement carries them', () => {
    const result = isPedagogySafe(
      {
        encouragement: 'Mirror the head with <title>Cat Photo App</title>.',
        question: 'What labels the browser tab?'
      },
      baseRequest
    );
    expect(result).toStrictEqual({ ok: false, reason: 'multi-tag' });
  });

  test('rejects literal echo of a missing seed tag', () => {
    const result = isPedagogySafe(
      {
        encouragement: 'Nice h1.',
        question: 'What does <title go inside the head?'
      },
      baseRequest
    );
    expect(result).toStrictEqual({ ok: false, reason: 'answer-echo' });
  });

  test('rejects HTML-entity-encoded echo of a missing seed tag', () => {
    const result = isPedagogySafe(
      {
        encouragement: 'Nice h1.',
        question: 'Did you forget the &lt;title&gt; element?'
      },
      baseRequest
    );
    expect(result.ok).toBe(false);
  });

  test('allows naming a tag the learner already wrote', () => {
    const result = isPedagogySafe(
      {
        encouragement: 'You used h1.',
        question: 'What is your <h1 missing inside its open and close?'
      },
      {
        ...baseRequest,
        userInput: '<h1>Cat Photo App',
        seed: '<h1></h1>'
      }
    );
    expect(result).toStrictEqual({ ok: true });
  });

  test('rejects output with more than 3 sentences total', () => {
    const result = isPedagogySafe(
      {
        encouragement: 'Good start.',
        question: 'A. B. C. D.'
      },
      baseRequest
    );
    expect(result).toStrictEqual({ ok: false, reason: 'too-long' });
  });
});
