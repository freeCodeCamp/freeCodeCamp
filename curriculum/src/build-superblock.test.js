import path from 'node:path';
import { describe, it, expect, vi } from 'vitest';

import { isPoly } from '@freecodecamp/shared/utils/polyvinyl';
import {
  validateChallenges,
  buildBlock,
  transformSuperBlock,
  addMetaToChallenge,
  fixChallengeProperties,
  SuperblockCreator,
  finalizeChallenge,
  createCommentMap
} from './build-superblock.js';

const dummyFullStackSuperBlock = {
  chapters: [
    {
      dashedName: 'chapter-1',
      modules: [
        {
          dashedName: 'module-1',
          blocks: ['block-1', 'block-2']
        },
        {
          dashedName: 'module-2',
          blocks: ['block-3', 'block-4']
        }
      ]
    },
    {
      dashedName: 'chapter-2',
      modules: [
        {
          dashedName: 'module-3',
          blocks: ['block-5', 'block-6']
        }
      ]
    }
  ]
};

// Includes "comingSoon" modules and chapters
const dummyUnfinishedSuperBlock = {
  chapters: [
    {
      dashedName: 'chapter-1',
      modules: [
        {
          comingSoon: true,
          dashedName: 'module-1',
          blocks: ['block-1', 'block-2']
        },
        {
          dashedName: 'module-2',
          blocks: ['block-3', 'block-4']
        }
      ]
    },
    {
      dashedName: 'chapter-2',
      comingSoon: true,
      modules: [
        {
          dashedName: 'module-3',
          blocks: ['block-5', 'block-6']
        }
      ]
    }
  ]
};

const dummyBlockMeta = {
  name: 'Test Block',
  blockLayout: 'challenge-list',
  blockLabel: 'workshop',
  isUpcomingChange: false,
  dashedName: 'test-block',
  superBlock: 'responsive-web-design',
  order: 1,
  superOrder: 2,
  usesMultifileEditor: true,
  hasEditableBoundaries: false,
  disableLoopProtectTests: true,
  template: 'html/css',
  required: [
    {
      link: 'https://example.com/style.css',
      raw: false,
      src: 'style.css'
    }
  ],
  challengeOrder: [
    { id: '1', title: 'Challenge 1' },
    { id: '2', title: 'Challenge 2' }
  ],
  helpCategory: 'HTML-CSS'
};

const dummyChallenge = {
  challengeFiles: [
    {
      spuriousProp: '1',
      name: 'file1',
      ext: 'js',
      history: [],
      contents: 'console.log("Hello")',
      // head and tail should not be required, but they currently are
      head: '',
      tail: ''
    },
    {
      spuriousProp: '2',
      name: 'file2',
      ext: 'css',
      history: [],
      contents: 'body { background: red; }',
      head: '',
      tail: ''
    }
  ]
};

const expectedChallengeProperties = {
  id: expect.any(String),
  challengeOrder: expect.any(Number),
  isLastChallengeInBlock: expect.any(Boolean),
  block: dummyBlockMeta.dashedName,
  blockLayout: dummyBlockMeta.blockLayout,
  blockLabel: dummyBlockMeta.blockLabel,
  hasEditableBoundaries: dummyBlockMeta.hasEditableBoundaries,
  order: dummyBlockMeta.order,
  description: '',
  instructions: '',
  questions: [],
  superOrder: dummyBlockMeta.superOrder,
  certification: dummyBlockMeta.superBlock,
  superBlock: dummyBlockMeta.superBlock,
  required: dummyBlockMeta.required,
  template: dummyBlockMeta.template,
  helpCategory: dummyBlockMeta.helpCategory,
  usesMultifileEditor: dummyBlockMeta.usesMultifileEditor,
  disableLoopProtectTests: dummyBlockMeta.disableLoopProtectTests,
  disableLoopProtectPreview: false
};

describe('buildSuperblock pure functions', () => {
  describe('createCommentMap', () => {
    const dictionaryDir = path.resolve(
      import.meta.dirname,
      '..',
      '__fixtures__',
      'dictionaries'
    );
    const incompleteDictDir = path.resolve(
      import.meta.dirname,
      '..',
      '__fixtures__',
      'incomplete-dicts'
    );

    it('returns an object', () => {
      expect(typeof createCommentMap(dictionaryDir, dictionaryDir)).toBe(
        'object'
      );
    });

    it('fallback to the untranslated string', () => {
      expect.assertions(2);
      const commentMap = createCommentMap(incompleteDictDir, incompleteDictDir);
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
      const map = createCommentMap(dictionaryDir, dictionaryDir);
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
      const map = createCommentMap(dictionaryDir, dictionaryDir);
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

  describe('validateChallenges', () => {
    it('should not throw when all challenges match meta', () => {
      const foundChallenges = [
        { id: '1', title: 'Challenge 1' },
        { id: '2', title: 'Challenge 2' }
      ];

      const meta = {
        challengeOrder: [
          { id: '1', title: 'Challenge 1' },
          { id: '2', title: 'Challenge 2' }
        ]
      };

      expect(() =>
        validateChallenges(foundChallenges, meta, true)
      ).not.toThrow();
    });

    it('should throw when challenges are missing from meta', () => {
      const foundChallenges = [
        { id: '1', title: 'Challenge 1' },
        { id: '2', title: 'Challenge 2' },
        { id: '3', title: 'Challenge 3' } // Extra challenge
      ];

      const meta = {
        challengeOrder: [
          { id: '1', title: 'Challenge 1' },
          { id: '2', title: 'Challenge 2' }
        ]
      };

      expect(() => validateChallenges(foundChallenges, meta, true)).toThrow(
        'Challenges found in directory but missing from meta: 3'
      );
    });

    it('should throw when challenge files are missing', () => {
      const foundChallenges = [{ id: '1', title: 'Challenge 1' }];

      const meta = {
        challengeOrder: [
          { id: '1', title: 'Challenge 1' },
          { id: '2', title: 'Challenge 2' } // Missing file
        ]
      };

      expect(() => validateChallenges(foundChallenges, meta, true)).toThrow(
        'Challenges in meta but missing files with id(s): 2'
      );
    });

    it('should throw when multiple challenges are missing from meta', () => {
      const foundChallenges = [
        { id: '1', title: 'Challenge 1' },
        { id: '2', title: 'Challenge 2' },
        { id: '3', title: 'Challenge 3' },
        { id: '4', title: 'Challenge 4' }
      ];

      const meta = {
        challengeOrder: [
          { id: '1', title: 'Challenge 1' },
          { id: '2', title: 'Challenge 2' }
        ]
      };

      expect(() => validateChallenges(foundChallenges, meta, true)).toThrow(
        'Challenges found in directory but missing from meta: 3, 4'
      );
    });

    it('should throw when multiple challenge files are missing', () => {
      const foundChallenges = [{ id: '1', title: 'Challenge 1' }];

      const meta = {
        challengeOrder: [
          { id: '1', title: 'Challenge 1' },
          { id: '2', title: 'Challenge 2' },
          { id: '3', title: 'Challenge 3' }
        ]
      };

      expect(() => validateChallenges(foundChallenges, meta, true)).toThrow(
        'Challenges in meta but missing files with id(s): 2, 3'
      );
    });

    it('should throw if there are duplicate challenges in the meta', () => {
      const foundChallenges = [{ id: '1', title: 'Challenge 1' }];

      const meta = {
        challengeOrder: [
          { id: '1', title: 'Challenge 1' },
          { id: '1', title: 'Challenge 2' }
        ]
      };

      expect(() => validateChallenges(foundChallenges, meta, true)).toThrow(
        'Duplicate challenges found in meta with id(s): 1'
      );
    });

    it('should throw if there are duplicate found challenges', () => {
      const foundChallenges = [
        { id: '1', title: 'Challenge 1' },
        { id: '1', title: 'Challenge 2' }
      ];

      const meta = {
        challengeOrder: [{ id: '1', title: 'Challenge 1' }]
      };

      expect(() => validateChallenges(foundChallenges, meta, true)).toThrow(
        'Duplicate challenges found in found challenges with id(s): 1'
      );
    });

    it('should throw if there are duplicate titles in the meta', () => {
      const foundChallenges = [
        { id: '1', title: 'Challenge 1' },
        { id: '2', title: 'Challenge 2' }
      ];

      const meta = {
        challengeOrder: [
          { id: '1', title: 'Challenge 1' },
          { id: '2', title: 'Challenge 1' } // Duplicate title
        ]
      };

      expect(() => validateChallenges(foundChallenges, meta, true)).toThrow(
        'Duplicate titles found in meta with title(s): Challenge 1'
      );
    });

    it('should throw if there are duplicate titles in the found challenges', () => {
      const foundChallenges = [
        { id: '1', title: 'Challenge 1' },
        { id: '2', title: 'Challenge 1' } // Duplicate title
      ];

      const meta = {
        challengeOrder: [
          { id: '1', title: 'Challenge 1' },
          { id: '2', title: 'Challenge 2' }
        ]
      };

      expect(() => validateChallenges(foundChallenges, meta, true)).toThrow(
        'Duplicate titles found in found challenges with title(s): Challenge 1'
      );
    });

    it('should log errors for duplicate titles in meta if shouldThrow is false', () => {
      vi.spyOn(console, 'error');
      const foundChallenges = [
        { id: '1', title: 'Challenge 1' },
        { id: '2', title: 'Challenge 2' }
      ];

      const meta = {
        challengeOrder: [
          { id: '1', title: 'Challenge 1' },
          { id: '2', title: 'Challenge 1' } // Duplicate title
        ]
      };

      validateChallenges(foundChallenges, meta, false);

      expect(console.error).toHaveBeenCalledWith(
        'Duplicate titles found in meta with title(s): Challenge 1'
      );
    });
  });

  describe('buildBlock', () => {
    it('should build block with ordered challenges', () => {
      const foundChallenges = [
        { id: '2', title: 'Challenge 2' },
        { id: '1', title: 'Challenge 1' }
      ];

      const meta = {
        name: 'Test Block',
        dashedName: 'test-block',
        challengeOrder: [
          { id: '1', title: 'Challenge 1' },
          { id: '2', title: 'Challenge 2' }
        ]
      };

      const result = buildBlock(foundChallenges, meta);

      expect(result.challenges).toHaveLength(2);
      expect(result.challenges[0].id).toBe('1'); // First in order
      expect(result.challenges[1].id).toBe('2'); // Second in order
    });

    it('should throw if challenges are missing', () => {
      const foundChallenges = [{ id: '2', title: 'Challenge 2' }];

      const meta = {
        name: 'Test Block',
        dashedName: 'test-block',
        challengeOrder: [
          { id: '1', title: 'Challenge 1' }, // Missing
          { id: '2', title: 'Challenge 2' }
        ]
      };

      expect(() => buildBlock(foundChallenges, meta)).toThrow(
        'Challenge 1 (Challenge 1) not found in block'
      );
    });

    it('should return the passed in meta', () => {
      const foundChallenges = [{ id: '1', title: 'Challenge 1' }];

      const meta = {
        name: 'Test Block',
        dashedName: 'test-block',
        challengeOrder: [{ id: '1', title: 'Challenge 1' }]
      };

      const result = buildBlock(foundChallenges, meta);

      expect(result.meta).toEqual(meta);
    });
  });

  describe('addMetaToChallenge', () => {
    it('should add meta properties to challenge', () => {
      const challenge = { id: '1' };

      addMetaToChallenge(challenge, dummyBlockMeta);

      expect(challenge).toEqual(expectedChallengeProperties);
    });

    it('should add chapter and module properties when present in meta', () => {
      const challenge = { id: '1' };
      const metaWithChapterAndModule = {
        ...dummyBlockMeta,
        chapter: 'chapter-1',
        module: 'module-1'
      };

      addMetaToChallenge(challenge, metaWithChapterAndModule);

      expect(challenge).toMatchObject({
        ...expectedChallengeProperties,
        chapter: 'chapter-1',
        module: 'module-1'
      });
    });
  });

  describe('finalizeChallenge', () => {
    it('should add meta properties', async () => {
      const challenge = finalizeChallenge(
        {
          id: '1'
        },
        { challengeOrder: [{ id: '1' }] }
      );

      expect(challenge).toMatchObject({
        id: '1',
        isLastChallengeInBlock: true
      });
    });
  });

  describe('fixChallengeProperties', () => {
    it("should ensure all challengeFiles are 'polyvinyls'", () => {
      dummyChallenge.challengeFiles.forEach(file => {
        expect(isPoly(file)).toBe(false);
      });

      const fixedChallenge = fixChallengeProperties(dummyChallenge);
      expect(fixedChallenge.challengeFiles).toHaveLength(2);
      fixedChallenge.challengeFiles.forEach(file =>
        expect(isPoly(file)).toBe(true)
      );

      const seeds = fixedChallenge.challengeFiles.map(file => file.seed);
      expect(seeds[0]).toBe(dummyChallenge.challengeFiles[0].contents);
      expect(seeds[1]).toBe(dummyChallenge.challengeFiles[1].contents);
    });

    it("should ensure all the solutions are arrays of 'polyvinyls'", () => {
      const challengeWithSolutions = {
        ...dummyChallenge,
        solutions: [dummyChallenge.challengeFiles]
      };

      const fixedChallenge = fixChallengeProperties(challengeWithSolutions);
      expect(fixedChallenge.solutions).toHaveLength(1);
      fixedChallenge.solutions.forEach(solution => {
        expect(Array.isArray(solution)).toBe(true);
        solution.forEach(file => expect(isPoly(file)).toBe(true));
      });
    });
  });

  describe('transformSuperBlock', () => {
    it('should return the blocks array when valid superblock data is provided', () => {
      const superblockData = {
        blocks: ['basic-html-and-html5', 'basic-css', 'applied-visual-design']
      };

      const result = transformSuperBlock(superblockData);

      expect(result).toEqual([
        { dashedName: 'basic-html-and-html5' },
        { dashedName: 'basic-css' },
        { dashedName: 'applied-visual-design' }
      ]);
      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(3);
    });

    it('should return single block when superblock has one block', () => {
      const superblockData = {
        blocks: ['basic-html-and-html5']
      };

      const result = transformSuperBlock(superblockData);

      expect(result).toEqual([{ dashedName: 'basic-html-and-html5' }]);
      expect(result).toHaveLength(1);
    });

    it('should throw an error when the blocks array is empty', () => {
      const superblockData = {
        blocks: []
      };

      expect(() => transformSuperBlock(superblockData)).toThrow(
        'No blocks found in superblock data'
      );
    });

    it('should handle superblock data with other properties', () => {
      const superblockData = {
        name: 'Responsive Web Design',
        dashedName: 'responsive-web-design',
        blocks: ['basic-html-and-html5', 'basic-css'],
        otherProperty: 'should be ignored'
      };

      const result = transformSuperBlock(superblockData);

      expect(result).toEqual([
        { dashedName: 'basic-html-and-html5' },
        { dashedName: 'basic-css' }
      ]);
      expect(result).toHaveLength(2);
    });

    it('should transform superblocks with nested chapters and modules', () => {
      const result = transformSuperBlock(dummyFullStackSuperBlock);

      expect(result).toEqual([
        { dashedName: 'block-1', chapter: 'chapter-1', module: 'module-1' },
        { dashedName: 'block-2', chapter: 'chapter-1', module: 'module-1' },
        { dashedName: 'block-3', chapter: 'chapter-1', module: 'module-2' },
        { dashedName: 'block-4', chapter: 'chapter-1', module: 'module-2' },
        { dashedName: 'block-5', chapter: 'chapter-2', module: 'module-3' },
        { dashedName: 'block-6', chapter: 'chapter-2', module: 'module-3' }
      ]);
      expect(result).toHaveLength(6);
    });

    it("should omit 'comingSoon' modules and chapters", () => {
      const result = transformSuperBlock(dummyUnfinishedSuperBlock);

      expect(result).toEqual([
        { dashedName: 'block-3', chapter: 'chapter-1', module: 'module-2' },
        { dashedName: 'block-4', chapter: 'chapter-1', module: 'module-2' }
      ]);
      expect(result).toHaveLength(2);
    });

    it("should NOT omit 'comingSoon' modules and chapters if showComingSoon is true", () => {
      const result = transformSuperBlock(dummyUnfinishedSuperBlock, {
        showComingSoon: true
      });

      expect(result).toEqual([
        { dashedName: 'block-1', chapter: 'chapter-1', module: 'module-1' },
        { dashedName: 'block-2', chapter: 'chapter-1', module: 'module-1' },
        { dashedName: 'block-3', chapter: 'chapter-1', module: 'module-2' },
        { dashedName: 'block-4', chapter: 'chapter-1', module: 'module-2' },
        { dashedName: 'block-5', chapter: 'chapter-2', module: 'module-3' },
        { dashedName: 'block-6', chapter: 'chapter-2', module: 'module-3' }
      ]);
      expect(result).toHaveLength(6);
    });
  });
});

describe('SuperblockCreator class', () => {
  describe('processSuperblock', () => {
    it('should process blocks using the provided processing function', async () => {
      const mockProcessBlockFn = vi
        .fn()
        .mockResolvedValueOnce('Block 1')
        .mockResolvedValueOnce('Block 2')
        .mockResolvedValueOnce(null);

      const mockBlockCreator = {
        processBlock: mockProcessBlockFn
      };

      const blocks = [
        { dashedName: 'block-1' },
        { dashedName: 'block-2' },
        { dashedName: 'block-3' }
      ];

      const parser = new SuperblockCreator(mockBlockCreator);

      const result = await parser.processSuperblock({
        blocks,
        name: 'test-superblock'
      });

      expect(mockProcessBlockFn).toHaveBeenCalledTimes(3);

      expect(result).toEqual({
        blocks: {
          'block-1': 'Block 1',
          'block-2': 'Block 2'
        }
      });
    });
  });
});
