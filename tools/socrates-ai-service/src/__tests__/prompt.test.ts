import { describe, expect, test } from 'vitest';
import {
  SYSTEM_PROMPT,
  STRICTER_SYSTEM_PROMPT,
  buildUserPrompt,
  findFirstFailingIndex
} from '../prompt.js';
import type { HintRequest } from '../schemas.js';

const samplePayload: HintRequest = {
  description: 'Make the title element say Cat Photo App.',
  userInput: '<h1>Cat Photo App</h1>',
  seed: '<title>Placeholder</title>\n<!-- learner edits below -->',
  hints: [
    { text: 'You should have an h1 element.', failed: false },
    {
      text: 'Your title element should say Cat Photo App.',
      failed: true
    },
    { text: 'You should not have any extra elements.', failed: false }
  ],
  userId: 'user-1'
};

describe('buildUserPrompt', () => {
  test('renders all four sections', () => {
    const out = buildUserPrompt(samplePayload);
    expect(out).toMatch(/## Challenge description/);
    expect(out).toMatch(/## Seed code/);
    expect(out).toMatch(/## Learner's current code/);
    expect(out).toMatch(/## Tests \(in order\)/);
  });

  test('numbers tests and marks pass/fail', () => {
    const out = buildUserPrompt(samplePayload);
    expect(out).toMatch(/1\. \[✓\] You should have an h1 element\./);
    expect(out).toMatch(/2\. \[✗\] Your title element should say Cat Photo App\./);
  });

  test('identifies the first failing test by 1-based index', () => {
    const out = buildUserPrompt(samplePayload);
    expect(out).toMatch(/FIRST FAILING test is #2/);
  });

  test('renders empty userInput as `(empty)`', () => {
    const { userInput: _ignored, ...rest } = samplePayload;
    const empty: HintRequest = { ...rest, userInput: '   ' };
    const out = buildUserPrompt(empty);
    expect(out).toMatch(/Learner's current code\n\(empty\)/);
  });

  test('handles all-passing tests with a non-teaching note', () => {
    const passing: HintRequest = {
      ...samplePayload,
      hints: samplePayload.hints.map(h => ({ ...h, failed: false }))
    };
    const out = buildUserPrompt(passing);
    expect(out).toMatch(/No failing tests are present/);
  });
});

describe('findFirstFailingIndex', () => {
  test('returns the index of the first failing test', () => {
    expect(findFirstFailingIndex(samplePayload.hints)).toBe(1);
  });

  test('returns -1 when no test is failing', () => {
    expect(
      findFirstFailingIndex(
        samplePayload.hints.map(h => ({ ...h, failed: false }))
      )
    ).toBe(-1);
  });
});

describe('system prompts', () => {
  test('SYSTEM_PROMPT bans corrected code, diffs, and literal answers', () => {
    expect(SYSTEM_PROMPT).toMatch(/NEVER include corrected code/);
    expect(SYSTEM_PROMPT).toMatch(/NEVER name the literal answer/);
  });

  test('STRICTER_SYSTEM_PROMPT escalates beyond the base prompt', () => {
    expect(STRICTER_SYSTEM_PROMPT).toMatch(/CRITICAL OVERRIDE/);
    expect(STRICTER_SYSTEM_PROMPT.length).toBeGreaterThan(SYSTEM_PROMPT.length);
  });
});
