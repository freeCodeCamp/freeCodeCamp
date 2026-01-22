import { describe, it, expect } from 'vitest';

import { hasEnglishSource, getChallengesForLang } from './get-challenges.js';

const EXISTING_CHALLENGE_PATH = 'challenge.md';
const MISSING_CHALLENGE_PATH = 'no/challenge.md';

const basePath = '../__fixtures__';

describe('create non-English challenge', () => {
  describe('getChallengesForLang', () => {
    it('throws if lang is an invalid language', async () => {
      await expect(() => getChallengesForLang('notlang')).rejects.toThrow(
        'notlang is not an accepted language'
      );
    });
  });
  describe('hasEnglishSource', () => {
    it('returns a boolean', async () => {
      const sourceExists = await hasEnglishSource(
        basePath,
        EXISTING_CHALLENGE_PATH
      );
      expect(typeof sourceExists).toBe('boolean');
    });
    it('returns true if the English challenge exists', async () => {
      const sourceExists = await hasEnglishSource(
        basePath,
        EXISTING_CHALLENGE_PATH
      );
      expect(sourceExists).toBe(true);
    });
    it('returns false if the English challenge is missing', async () => {
      const sourceExists = await hasEnglishSource(
        basePath,
        MISSING_CHALLENGE_PATH
      );
      expect(sourceExists).toBe(false);
    });
  });
});
