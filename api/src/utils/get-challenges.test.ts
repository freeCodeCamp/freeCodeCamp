import { getChallenges } from './get-challenges';

describe('getChallenges', () => {
  test('returns an array of challenges', () => {
    const challenges = getChallenges();
    expect(Array.isArray(challenges)).toBe(true);
    expect(challenges.length).toBeGreaterThan(0);
  });
});
