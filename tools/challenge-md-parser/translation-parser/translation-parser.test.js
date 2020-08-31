/* global expect jest */
const {
  mergeChallenges,
  translateComments,
  translateCommentsInChallenge
} = require('./translation-parser');
const {
  ENGLISH_CERTIFICATE,
  ENGLISH_CHALLENGE,
  ENGLISH_CHALLENGE_NO_FILES,
  ENGLISH_CHALLENGE_TWO_SOLUTIONS,
  ENGLISH_VIDEO_CHALLENGE,
  TRANSLATED_CERTIFICATE,
  TRANSLATED_CHALLENGE,
  TRANSLATED_VIDEO_CHALLENGE
  // WRONG_NUM_TESTS_CHALLENGE
} = require('./__fixtures__/challenge-objects');
const { SIMPLE_TRANSLATION } = require('./__mocks__/mock-comments');

const COMBINED_CHALLENGE = mergeChallenges(
  ENGLISH_CHALLENGE,
  TRANSLATED_CHALLENGE
);

const COMBINED_CHALLENGE_TWO_SOLUTIONS = mergeChallenges(
  ENGLISH_CHALLENGE_TWO_SOLUTIONS,
  TRANSLATED_CHALLENGE
);

const COMBINED_CERTIFICATE = mergeChallenges(
  ENGLISH_CERTIFICATE,
  TRANSLATED_CERTIFICATE
);

const COMBINED_VIDEO_CHALLENGE = mergeChallenges(
  ENGLISH_VIDEO_CHALLENGE,
  TRANSLATED_VIDEO_CHALLENGE
);

let logSpy;

describe('translation parser', () => {
  beforeEach(() => {
    logSpy = jest.spyOn(console, 'warn').mockImplementation();
  });
  afterEach(() => {
    logSpy.mockRestore();
  });
  describe('mergeChallenges', () => {
    it('takes the description from the second challenge', () => {
      expect(COMBINED_CHALLENGE.description).toBe(
        TRANSLATED_CHALLENGE.description
      );
    });
    it('takes the head and tail from the first challenge', () => {
      expect(COMBINED_CHALLENGE.files[0].head).toBe(
        ENGLISH_CHALLENGE.files[0].head
      );
      expect(COMBINED_CHALLENGE.files[0].tail).toBe(
        ENGLISH_CHALLENGE.files[0].tail
      );
    });
    it('takes the instructions from the second challenge', () => {
      expect(COMBINED_CHALLENGE.instructions).toBe(
        TRANSLATED_CHALLENGE.instructions
      );
    });
    it('takes the seed from the first challenge', () => {
      expect(COMBINED_CHALLENGE.files[0].contents).toBe(
        ENGLISH_CHALLENGE.files[0].contents
      );
    });
    it('takes the solution from the first challenge', () => {
      expect(COMBINED_CHALLENGE.solutions[0]).toBe(
        ENGLISH_CHALLENGE.solutions[0]
      );
    });
    it('takes multiple solutions', () => {
      expect(COMBINED_CHALLENGE_TWO_SOLUTIONS.solutions).toEqual(
        ENGLISH_CHALLENGE_TWO_SOLUTIONS.solutions
      );
    });
    it('takes the testStrings from the first challenge', () => {
      const actualStrings = COMBINED_CHALLENGE.tests.map(
        ({ testString }) => testString
      );
      const expectedStrings = ENGLISH_CHALLENGE.tests.map(
        ({ testString }) => testString
      );
      for (let i = 0; i < actualStrings.length; i++) {
        expect(actualStrings[i]).toBe(expectedStrings[i]);
      }
    });
    it('takes the test text from the second challenge', () => {
      const actualStrings = COMBINED_CHALLENGE.tests.map(({ text }) => text);
      const expectedStrings = TRANSLATED_CHALLENGE.tests.map(
        ({ text }) => text
      );
      for (let i = 0; i < actualStrings.length; i++) {
        expect(actualStrings[i]).toBe(expectedStrings[i]);
      }
    });
    it('takes the localTitle from the second challenge', () => {
      expect(COMBINED_CHALLENGE.localeTitle).toBe(
        TRANSLATED_CHALLENGE.localeTitle
      );
    });
    // TODO: reinstate this after alpha testing.
    // it('throws an error if the numbers of tests do not match', () => {
    //   expect(() =>
    //     mergeChallenges(ENGLISH_CHALLENGE, WRONG_NUM_TESTS_CHALLENGE)
    //   ).toThrow();
    // });
    it('takes the forum id from the second challenge', () => {
      expect(COMBINED_CHALLENGE.forumTopicId).toBe(
        TRANSLATED_CHALLENGE.forumTopicId
      );
    });
    it('takes the ids from the first certificate', () => {
      const actualIds = COMBINED_CERTIFICATE.tests.map(({ id }) => id);
      const expectedIds = ENGLISH_CERTIFICATE.tests.map(({ id }) => id);
      for (let i = 0; i < actualIds.length; i++) {
        expect(actualIds[i]).toBe(expectedIds[i]);
      }
    });

    it('takes the titles from the second certificate', () => {
      const actualTitles = COMBINED_CERTIFICATE.tests.map(({ title }) => title);
      const expectedTitles = TRANSLATED_CERTIFICATE.tests.map(
        ({ title }) => title
      );
      for (let i = 0; i < actualTitles.length; i++) {
        expect(actualTitles[i]).toBe(expectedTitles[i]);
      }
    });
    it('certificates do not have a forumTopicId property', () => {
      expect(Object.keys(COMBINED_CERTIFICATE).includes('forumTopicId')).toBe(
        false
      );
    });
    it('takes the question from the second challenge', () => {
      expect(COMBINED_VIDEO_CHALLENGE.question).toBe(
        TRANSLATED_VIDEO_CHALLENGE.question
      );
    });
  });

  describe('translateCommentsInChallenge', () => {
    it('returns a clone of the challenge if there are no comments', () => {
      expect(
        translateCommentsInChallenge(
          ENGLISH_CHALLENGE_NO_FILES,
          'chinese',
          SIMPLE_TRANSLATION
        )
      ).toEqual(ENGLISH_CHALLENGE_NO_FILES);
    });
  });
  describe('translateComments', () => {
    it('replaces single line English comments with their translations', () => {
      const seed = `//  Add your code below this line
         Add your code above this line `;
      const transSeed = `//  (Chinese) Add your code below this line (Chinese)
         Add your code above this line `;
      expect(translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'js')).toBe(
        transSeed
      );
    });

    it('does not translate urls', () => {
      const seed = `http:// Add your code below this line
      Add your code above this line `;
      expect(translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'js')).toBe(
        seed
      );
      const seedS = `https:// Add your code below this line
      Add your code above this line `;
      expect(
        translateComments(seedS, 'chinese', SIMPLE_TRANSLATION, 'js')
      ).toBe(seedS);
    });

    it('replaces inline English comments with their translations', () => {
      const seed = `inline comment //  Add your code below this line
         Add your code above this line `;
      const transSeed = `inline comment //  (Chinese) Add your code below this line (Chinese)
         Add your code above this line `;
      expect(translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'js')).toBe(
        transSeed
      );
    });

    // If a comment follows '"` it could be inside a string, so we should
    // not try and translate it - erring on the side of caution.
    it('should ignore comments if they follow an open quote', () => {
      const seed = `var str = '// Add your code below this line'
      var str2 = '// Add your code above this line`;
      expect(translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'js')).toBe(
        seed
      );
    });
    it('replaces multiple English comments with their translations', () => {
      const seed = `inline comment //  Add your code below this line
         // Add your code below this line `;
      const transSeed = `inline comment //  (Chinese) Add your code below this line (Chinese)
         // (Chinese) Add your code below this line (Chinese) `;
      expect(translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'js')).toBe(
        transSeed
      );
    });

    it('replaces multiline English comments with their translations', () => {
      const seed = `multiline comment /*  Add your code below this line */
         /* Add your code above this line */ change code below this line  `;
      const transSeed = `multiline comment /*  (Chinese) Add your code below this line (Chinese) */
         /* (Chinese) Add your code above this line (Chinese) */ change code below this line  `;
      expect(translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'js')).toBe(
        transSeed
      );
    });

    it('replaces repeated multiline comments with their translations', () => {
      const seed = `multiline comment /*  Add your code below this line */
         /* Add your code below this line */ change code below this line  `;
      const transSeed = `multiline comment /*  (Chinese) Add your code below this line (Chinese) */
         /* (Chinese) Add your code below this line (Chinese) */ change code below this line  `;
      expect(translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'js')).toBe(
        transSeed
      );
    });

    it('only replaces text inside comments, not between them', () => {
      const seed = `multiline comment /*  Add your code below this line */
         /* Add your code above this line */ Add your code below this line /* */  `;
      const transSeed = `multiline comment /*  (Chinese) Add your code below this line (Chinese) */
         /* (Chinese) Add your code above this line (Chinese) */ Add your code below this line /* */  `;
      expect(translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'js')).toBe(
        transSeed
      );

      const seedTwo = `multiline /* */  Add your code below this line /* */  `;
      expect(
        translateComments(seedTwo, 'chinese', SIMPLE_TRANSLATION, 'js')
      ).toBe(seedTwo);
    });

    it('replaces English html comments with their translations', () => {
      const seed = `<div> <!--  Add your code below this line -->
         <!-- Add your code above this line --> <span>change code below this line</span>  `;
      const transSeed = `<div> <!--  (Chinese) Add your code below this line (Chinese) -->
         <!-- (Chinese) Add your code above this line (Chinese) --> <span>change code below this line</span>  `;
      expect(
        translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'html')
      ).toBe(transSeed);
    });

    it('replaces css comments with their translations', () => {
      const seed = `<style>
        /* Add your code below this line */
      </style>`;
      const transSeed = `<style>
        /* (Chinese) Add your code below this line (Chinese) */
      </style>`;
      expect(
        translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'html')
      ).toBe(transSeed);
    });

    it('replaces multiple css comments with their translations', () => {
      const seed = `<style>
        /* Add your code below this line */
        /* Add your code below this line */
      </style>`;
      const transSeed = `<style>
        /* (Chinese) Add your code below this line (Chinese) */
        /* (Chinese) Add your code below this line (Chinese) */
      </style>`;
      expect(
        translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'html')
      ).toBe(transSeed);
    });

    it('ignores css comments outside style tags', () => {
      const seed = `/* Add your code below this line */`;
      expect(
        translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'html')
      ).toBe(seed);
    });

    it('ignores css comments between style tags', () => {
      const seed = `<style>
      </style>
      /* Add your code below this line */
      <style>
      </style>`;
      expect(
        translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'html')
      ).toBe(seed);
    });

    it('only replaces inside English html comments', () => {
      const seed = `<div> <!-- -->  Add your code below this line <!-- -->`;
      expect(
        translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'html')
      ).toBe(seed);
    });

    it('replaces English JSX comments with their translations', () => {
      const seed = `{ /*  Add your code below this line */ }
      { /* Add your code above this line */ } <span>change code below this line</span>  `;
      const transSeed = `{ /*  (Chinese) Add your code below this line (Chinese) */ }
      { /* (Chinese) Add your code above this line (Chinese) */ } <span>change code below this line</span>  `;
      expect(
        translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'jsx')
      ).toBe(transSeed);
    });

    it('ignores html comments inside JavaScript', () => {
      const seed = `<div> <!--  Add your code below this line
         Add your code above this line --> <span>change code below this line</span>  `;
      expect(translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'js')).toBe(
        seed
      );
    });

    it('ignores html comments inside jsx', () => {
      const seed = `<div> <!--  Add your code below this line
         Add your code above this line --> <span>change code below this line</span>  `;
      expect(
        translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'jsx')
      ).toBe(seed);
    });

    it('only replaces exact matches (js)', () => {
      const seedMulti = `/*  Add your code below this line
      Add your code above this line */ <span>change code below this line</span>  `;
      const seedInline = `// Add your code below this line, please`;
      expect(
        translateComments(seedMulti, 'chinese', SIMPLE_TRANSLATION, 'js')
      ).toBe(seedMulti);
      expect(
        translateComments(seedInline, 'chinese', SIMPLE_TRANSLATION, 'js')
      ).toBe(seedInline);
    });

    it('only replaces exact matches (jsx)', () => {
      const seedMulti = `{ /*  Add your code below this line
      Add your code above this line */ } <span>change code below this line</span>  `;
      expect(
        translateComments(seedMulti, 'chinese', SIMPLE_TRANSLATION, 'jsx')
      ).toBe(seedMulti);
    });

    it('only replaces exact matches (html)', () => {
      const seed = `<div> <!--  Add your code below this line
       Add your code above this line --> <span>change code below this line</span>  `;

      expect(
        translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'html')
      ).toBe(seed);
    });

    it('only translates jsx comments once', () => {
      const seed = `{ /*  Add your code below this line */ }`;
      const transSeed = `{ /*  (Chinese) Add your code below this line (Chinese) */ }`;
      expect(
        translateComments(seed, 'chinese', SIMPLE_TRANSLATION, 'jsx')
      ).toBe(transSeed);
    });

    it('warns if the comment is not in the dictionary', () => {
      const seedJSX = `{ /* this is not a comment */ }`;
      const seedInline = `// this is not a comment `;
      const seedMulti = `/* this is not a comment */`;
      const seedCSS = `<style>
      /* this is not a comment */
    </style>`;
      const seedHTML = `<div> <!--  this is not a comment --> `;

      translateComments(seedJSX, 'chinese', SIMPLE_TRANSLATION, 'jsx');
      expect(logSpy).toBeCalledTimes(1);
      translateComments(seedInline, 'chinese', SIMPLE_TRANSLATION, 'js');
      expect(logSpy).toBeCalledTimes(2);
      translateComments(seedMulti, 'chinese', SIMPLE_TRANSLATION, 'js');
      expect(logSpy).toBeCalledTimes(3);
      translateComments(seedCSS, 'chinese', SIMPLE_TRANSLATION, 'html');
      expect(logSpy).toBeCalledTimes(4);
      translateComments(seedHTML, 'chinese', SIMPLE_TRANSLATION, 'html');
      expect(logSpy).toBeCalledTimes(5);
      logSpy.mockRestore();
    });
  });
});
