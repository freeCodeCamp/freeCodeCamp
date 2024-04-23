const path = require('path');

const {
  hasEnglishSource,
  createCommentMap,
  getChallengesForLang
} = require('./get-challenges');

const EXISTING_CHALLENGE_PATH = 'challenge.md';
const MISSING_CHALLENGE_PATH = 'no/challenge.md';

const basePath = '__fixtures__';

describe('create non-English challenge', () => {
  describe('getChallengesForLang', () => {
    it('throws if lang is an invalid language', async () => {
      await expect(() => getChallengesForLang('notlang')).rejects.toThrow(
        'notlang is not a accepted language'
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

  describe('createCommentMap', () => {
    const dictionaryDir = path.resolve(
      __dirname,
      '__fixtures__',
      'dictionaries'
    );
    const incompleteDictDir = path.resolve(
      __dirname,
      '__fixtures__',
      'incomplete-dicts'
    );

    it('returns an object', () => {
      expect(typeof createCommentMap(dictionaryDir)).toBe('object');
    });

    it('fallback to the untranslated string', () => {
      expect.assertions(2);
      const commentMap = createCommentMap(incompleteDictDir);
      expect(commentMap['To be translated one'].spanish).toEqual(
        'Spanish translation one'
      );
      expect(commentMap['To be translated two'].spanish).toEqual(
        'To be translated two'
      );
    });

    it('returns an object with an expected form', () => {
      expect.assertions(4);
      const expectedIds = [
        'To be translated one',
        'To be translated two',
        'Not translated one',
        'Not translated two'
      ];
      const map = createCommentMap(dictionaryDir);
      expect(Object.keys(map)).toEqual(expect.arrayContaining(expectedIds));

      const mapValue = map['To be translated one'];

      expect(Object.keys(mapValue)).toEqual(
        expect.arrayContaining(['chinese', 'spanish'])
      );
      expect(typeof mapValue.chinese).toBe('string');
      expect(typeof mapValue.spanish).toBe('string');
    });

    it('returns an object with expected values', () => {
      expect.assertions(9);
      const expectedIds = [
        'To be translated one',
        'To be translated two',
        'Not translated one',
        'Not translated two'
      ];
      const map = createCommentMap(dictionaryDir);
      expect(Object.keys(map)).toEqual(expect.arrayContaining(expectedIds));

      const translatedOne = map['To be translated one'];

      expect(translatedOne.chinese).toBe('Chinese translation one');
      expect(translatedOne.spanish).toBe('Spanish translation one');

      const translatedTwo = map['To be translated two'];

      expect(translatedTwo.chinese).toBe('Chinese translation two');
      expect(translatedTwo.spanish).toBe('Spanish translation two');

      const untranslatedOne = map['Not translated one'];

      expect(untranslatedOne.chinese).toBe('Not translated one');
      expect(untranslatedOne.spanish).toBe('Not translated one');

      const untranslatedTwo = map['Not translated two'];

      expect(untranslatedTwo.chinese).toBe('Not translated two');
      expect(untranslatedTwo.spanish).toBe('Not translated two');
    });
  });
});
