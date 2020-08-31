/* global expect beforeAll */
const {
  createChallengeCreator,
  hasEnglishSourceCreator
} = require('./getChallenges');

const EXISTING_CHALLENGE_PATH = 'challenge.md';
const MISSING_CHALLENGE_PATH = 'no/challenge.md';

let hasEnglishSource;
let createChallenge;
const basePath = '__fixtures__';

describe('create non-English challenge', () => {
  describe('createChallenge', () => {
    it('throws if lang is an invalid language', async () => {
      createChallenge = createChallengeCreator(basePath, 'notlang');
      await expect(
        createChallenge(EXISTING_CHALLENGE_PATH, {})
      ).rejects.toThrow('notlang is not a accepted language');
    });
    it('throws an error if the source challenge is missing', async () => {
      createChallenge = createChallengeCreator(basePath, 'chinese');
      await expect(createChallenge(MISSING_CHALLENGE_PATH, {})).rejects.toThrow(
        `Missing English challenge for
${MISSING_CHALLENGE_PATH}
It should be in
`
      );
    });
  });
  describe('hasEnglishSource', () => {
    beforeAll(() => {
      hasEnglishSource = hasEnglishSourceCreator(basePath);
    });
    it('returns a boolean', async () => {
      const sourceExists = await hasEnglishSource(EXISTING_CHALLENGE_PATH);
      expect(typeof sourceExists).toBe('boolean');
    });
    it('returns true if the English challenge exists', async () => {
      const sourceExists = await hasEnglishSource(EXISTING_CHALLENGE_PATH);
      expect(sourceExists).toBe(true);
    });
    it('returns false if the English challenge is missing', async () => {
      const sourceExists = await hasEnglishSource(MISSING_CHALLENGE_PATH);
      expect(sourceExists).toBe(false);
    });
  });
});
