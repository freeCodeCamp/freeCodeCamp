import { describe, test, expect } from 'vitest';
import { getChallenges, getChallengeIdsByBlock } from './get-challenges.js';
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

describe('getChallengeIdsByBlock', () => {
  test('returns challenge IDs for a valid block', () => {
    const ids = getChallengeIdsByBlock('responsive-web-design-principles');
    expect(ids).toContain('587d78b0367417b2b2512b08');
  });

  test('returns a non-empty array of strings', () => {
    const ids = getChallengeIdsByBlock('responsive-web-design-principles');
    expect(ids.length).toBeGreaterThan(0);
    for (const id of ids) {
      expect(typeof id).toBe('string');
    }
  });

  test('returns empty array for non-existent block', () => {
    const ids = getChallengeIdsByBlock('non-existent-block');
    expect(ids).toEqual([]);
  });

  test('returns empty array for empty string', () => {
    const ids = getChallengeIdsByBlock('');
    expect(ids).toEqual([]);
  });
});
