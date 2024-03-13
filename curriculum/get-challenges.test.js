const path = require('path');
const { omit } = require('lodash');

const {
  generateChallengeCreator,
  hasEnglishSource,
  createCommentMap,
  replaceSourceCode,
  warnIfCodeTranslated
} = require('./get-challenges');

const {
  sourceChallenge,
  targetChallenge
} = require('./__fixtures__/challenges');

const EXISTING_CHALLENGE_PATH = 'challenge.md';
const MISSING_CHALLENGE_PATH = 'no/challenge.md';

const basePath = '__fixtures__';

describe('create non-English challenge', () => {
  describe('generateChallengeCreator', () => {
    describe('createChallenge', () => {
      it('throws if lang is an invalid language', async () => {
        const createChallenge = generateChallengeCreator(basePath, 'notlang');
        await expect(
          createChallenge(EXISTING_CHALLENGE_PATH, {})
        ).rejects.toThrow('notlang is not a accepted language');
      });
      it('throws an error if the source challenge is missing', async () => {
        const createChallenge = generateChallengeCreator(basePath, 'chinese');
        await expect(
          createChallenge(MISSING_CHALLENGE_PATH, {})
        ).rejects.toThrow(
          `Missing English challenge for
${MISSING_CHALLENGE_PATH}
It should be in
`
        );
      });
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

  describe('replaceSourceCode', () => {
    it('should add the source testStrings to the target challenge', () => {
      const replaced = replaceSourceCode(targetChallenge, sourceChallenge);

      const expected = [
        {
          text: 'italian text one',
          testString: 'original code'
        },
        {
          text: 'italian text two',
          testString: 'more original code'
        }
      ];

      expect(replaced.tests).toEqual(expected);
    });

    it('should not modify the original source', () => {
      const clone = JSON.parse(JSON.stringify(sourceChallenge));

      replaceSourceCode(targetChallenge, sourceChallenge);

      expect(sourceChallenge).toEqual(clone);
    });

    it('should add the source solutions to the target challenge', () => {
      const replaced = replaceSourceCode(targetChallenge, sourceChallenge);

      expect(replaced.solutions).toEqual(sourceChallenge.solutions);
    });

    it('should add the source challengeFiles to the target challenge', () => {
      const replaced = replaceSourceCode(targetChallenge, sourceChallenge);

      expect(replaced.challengeFiles).toEqual(sourceChallenge.challengeFiles);
    });

    it('should not add tests if the source challenge has no tests', () => {
      const { tests: _ignore, ...sourceWithoutTests } = sourceChallenge;
      const { tests: _alsoIgnore, ...targetWithoutTests } = targetChallenge;

      const replaced = replaceSourceCode(
        targetWithoutTests,
        sourceWithoutTests
      );

      expect(replaced).not.toHaveProperty('tests');
    });

    it('should not add solutions if the source challenge has no solutions', () => {
      const { solutions: _ignore, ...sourceWithoutSolutions } = sourceChallenge;
      const { solutions: _alsoIgnore, ...targetWithoutSolutions } =
        targetChallenge;

      const replaced = replaceSourceCode(
        targetWithoutSolutions,
        sourceWithoutSolutions
      );

      expect(replaced).not.toHaveProperty('solutions');
    });

    it('should not add challengeFiles if the source challenge has no challengeFiles', () => {
      const { challengeFiles: _ignore, ...sourceWithoutChallengeFiles } =
        sourceChallenge;
      const { challengeFiles: _alsoIgnore, ...targetWithoutChallengeFiles } =
        targetChallenge;

      const replaced = replaceSourceCode(
        targetWithoutChallengeFiles,
        sourceWithoutChallengeFiles
      );

      expect(replaced).not.toHaveProperty('challengeFiles');
    });
  });

  describe('warnIfCodeTranslated', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should warn if the testStrings differ between challenges', () => {
      const consoleWarn = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      warnIfCodeTranslated(targetChallenge, sourceChallenge);
      expect(consoleWarn).toHaveBeenNthCalledWith(
        1,
        `testStrings in challenge abc123 (title: "Italian Title") do not match the English.
If the curriculum has been synced with Crowdin, it is possible that the testStrings have been translated.`
      );
    });

    it('should warn if the solutions differ between challenges', () => {
      const consoleWarn = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      warnIfCodeTranslated(targetChallenge, sourceChallenge);
      expect(consoleWarn).toHaveBeenNthCalledWith(
        2,
        `solutions in challenge abc123 (title: "Italian Title") do not match the English.
If the curriculum has been synced with Crowdin, it is possible that the solutions have been translated.`
      );
    });

    it('should warn if the challengeFiles differ between challenges', () => {
      const consoleWarn = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      warnIfCodeTranslated(targetChallenge, sourceChallenge);
      expect(consoleWarn).toHaveBeenNthCalledWith(
        3,
        `challengeFiles in challenge abc123 (title: "Italian Title") do not match the English.
If the curriculum has been synced with Crowdin, it is possible that the seed has been translated.`
      );
    });

    it('should not warn if the challenges are the same', () => {
      const consoleWarn = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      warnIfCodeTranslated(targetChallenge, targetChallenge);
      expect(consoleWarn).not.toHaveBeenCalled();
    });

    it('should handle missing tests, solutions, and challengeFiles', () => {
      const consoleWarn = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      const simplerTarget = omit(targetChallenge, [
        'tests',
        'solutions',
        'challengeFiles'
      ]);
      const simplerSource = omit(sourceChallenge, [
        'tests',
        'solutions',
        'challengeFiles'
      ]);

      warnIfCodeTranslated(simplerTarget, simplerSource);
      expect(consoleWarn).not.toHaveBeenCalled();
    });
  });
});
