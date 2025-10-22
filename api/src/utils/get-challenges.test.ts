import { describe, test, expect } from 'vitest';
import { getChallenges } from './get-challenges.js';
import { isObjectID } from './validation.js';

describe('getChallenges', () => {
  test('returns an array of challenges', () => {
    const challenges = getChallenges();
    expect(Array.isArray(challenges)).toBe(true);
    expect(challenges.length).toBeGreaterThan(0);
  });

  test('challenge objects should contain challengeType and id', () => {
    const challenges = getChallenges();

    for (const challenge of challenges) {
      expect(challenge).toHaveProperty('challengeType');
      expect(typeof challenge?.challengeType).toBe('number');

      expect(challenge).toHaveProperty('id');
      expect(isObjectID(challenge?.id)).toBe(true);
    }
  });
});
