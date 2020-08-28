/* global expect beforeAll */
const {
  challengesDir,
  createChallengeCreator,
  hasEnglishSourceCreator
} = require('./getChallenges');

/* eslint-disable max-len */
const REAL_PATH =
  '01-responsive-web-design/applied-accessibility/add-a-text-alternative-to-images-for-visually-impaired-accessibility.english.md';
const REAL_MISSING_PATH =
  '01-responsive-web-design/applied-accessibility/add-a-text-alternative-to-images-for-visually-impaired.md';

const EXISTING_CHALLENGE_PATH = 'challenge.md';
const MISSING_CHALLENGE_PATH = 'no/challenge.md';
/* eslint-enable max-len */

let hasEnglishSource;
let createChallenge;
const basePath = '__fixtures__';

describe('create non-English challenge', () => {
  describe('createChallenge', () => {
    it('throws if lang is an invalid language', async () => {
      createChallenge = createChallengeCreator(basePath, 'notlang');
      await expect(createChallenge(REAL_PATH)).rejects.toThrow(
        'notlang is not a accepted language'
      );
    });
    it('throws an error if the source challenge is missing', async () => {
      createChallenge = createChallengeCreator(challengesDir, 'chinese');
      await expect(createChallenge(REAL_MISSING_PATH)).rejects.toThrow(
        `Missing English challenge for
${REAL_MISSING_PATH}
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
