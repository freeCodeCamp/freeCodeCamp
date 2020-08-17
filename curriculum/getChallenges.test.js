/* global expect */
const {
  createChallenge,
  getChallengeLang,
  getEnglishPath,
  isEnglishChallenge
} = require('./getChallenges');

/* eslint-disable max-len */
const INVALID_PATH = 'not/challenge/path';
const ENGLISH_PATH =
  'curriculum/challenges/english/01-responsive-web-design/applied-accessibility/add-a-text-alternative-to-images-for-visually-impaired-accessibility.english.md';
const CHINESE_PATH =
  'curriculum/challenges/chinese/01-responsive-web-design/applied-accessibility/add-a-text-alternative-to-images-for-visually-impaired-accessibility.chinese.md';
const NOT_LANGUAGE_PATH =
  'curriculum/challenges/chinese/01-responsive-web-design/applied-accessibility/add-a-text-alternative-to-images-for-visually-impaired-accessibility.notlang.md';
const MISSING_LANGUAGE_PATH =
  'curriculum/challenges/chinese/01-responsive-web-design/applied-accessibility/add-a-text-alternative-to-images-for-visually-impaired-english.md';

/* eslint-enable max-len */

describe('create non-English challenge', () => {
  describe('createChallenge', () => {
    it('throws if the filename includes an invalid language', async () => {
      await expect(createChallenge(NOT_LANGUAGE_PATH)).rejects.toThrow(
        'notlang is not a accepted language'
      );
    });
    it('throws an error if the filename is missing a language', async () => {
      await expect(createChallenge(MISSING_LANGUAGE_PATH)).rejects.toThrow(
        `Missing language extension for
${MISSING_LANGUAGE_PATH}`
      );
    });
  });
  describe('getEnglishPath', () => {
    it('returns the full path of the English version of the challenge', () => {
      expect(getEnglishPath(CHINESE_PATH)).toBe(ENGLISH_PATH);
    });
    it('throws an error if the path has the wrong directory structure', () => {
      expect(() => getEnglishPath(INVALID_PATH)).toThrow();
    });
    it('throws an error if the filename includes an invalid language', () => {
      expect(() => getEnglishPath(NOT_LANGUAGE_PATH)).toThrow();
    });
    it('throws an error if the filename is missing a language', () => {
      expect(() => getEnglishPath(MISSING_LANGUAGE_PATH)).toThrow();
    });
  });

  describe('getChallengeLang', () => {
    it("returns 'english' if the challenge is English", () => {
      expect(getChallengeLang(ENGLISH_PATH)).toBe('english');
    });
    it("returns 'chinese' if the challenge is Chinese", () => {
      expect(getChallengeLang(CHINESE_PATH)).toBe('chinese');
    });
  });

  describe('isEnglishChallenge', () => {
    it('returns true if the challenge is English', () => {
      expect(isEnglishChallenge(ENGLISH_PATH)).toBe(true);
    });
    it('returns false if the challenge is not English', () => {
      expect(isEnglishChallenge(CHINESE_PATH)).toBe(false);
    });
  });
});
