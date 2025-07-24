const {
  validateChallenges,
  buildBlock,
  transformSuperBlock,
  addMetaToChallenge,
  fixChallengeProperties,
  processSuperblock
} = require('./parse-superblock');
const { isPoly } = require('./shared/utils/polyvinyl');

const dummyFullStackSuperBlock = {
  chapters: [
    {
      dashedName: 'chapter-1',
      modules: [
        {
          dashedName: 'module-1',
          blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }]
        },
        {
          dashedName: 'module-2',
          blocks: [{ dashedName: 'block-3' }, { dashedName: 'block-4' }]
        }
      ]
    },
    {
      dashedName: 'chapter-2',
      modules: [
        {
          dashedName: 'module-3',
          blocks: [{ dashedName: 'block-5' }, { dashedName: 'block-6' }]
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
          blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }]
        },
        {
          dashedName: 'module-2',
          blocks: [{ dashedName: 'block-3' }, { dashedName: 'block-4' }]
        }
      ]
    },
    {
      dashedName: 'chapter-2',
      comingSoon: true,
      modules: [
        {
          dashedName: 'module-3',
          blocks: [{ dashedName: 'block-5' }, { dashedName: 'block-6' }]
        }
      ]
    }
  ]
};

const dummyBlockMeta = {
  name: 'Test Block',
  blockLayout: 'challenge-list',
  blockType: 'workshop',
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
  blockType: dummyBlockMeta.blockType,
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

describe('parseSuperblock pure functions', () => {
  describe('validateChallenges', () => {
    test('should not throw when all challenges match meta', () => {
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

      expect(() => validateChallenges(foundChallenges, meta)).not.toThrow();
    });

    test('should throw when challenges are missing from meta', () => {
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

      expect(() => validateChallenges(foundChallenges, meta)).toThrow(
        'Challenges found in directory but missing from meta: 3'
      );
    });

    test('should throw when challenge files are missing', () => {
      const foundChallenges = [{ id: '1', title: 'Challenge 1' }];

      const meta = {
        challengeOrder: [
          { id: '1', title: 'Challenge 1' },
          { id: '2', title: 'Challenge 2' } // Missing file
        ]
      };

      expect(() => validateChallenges(foundChallenges, meta)).toThrow(
        'Challenges in meta but missing files: 2'
      );
    });

    test('should throw when multiple challenges are missing from meta', () => {
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

      expect(() => validateChallenges(foundChallenges, meta)).toThrow(
        'Challenges found in directory but missing from meta: 3, 4'
      );
    });

    test('should throw when multiple challenge files are missing', () => {
      const foundChallenges = [{ id: '1', title: 'Challenge 1' }];

      const meta = {
        challengeOrder: [
          { id: '1', title: 'Challenge 1' },
          { id: '2', title: 'Challenge 2' },
          { id: '3', title: 'Challenge 3' }
        ]
      };

      expect(() => validateChallenges(foundChallenges, meta)).toThrow(
        'Challenges in meta but missing files: 2, 3'
      );
    });
  });

  describe('buildBlock', () => {
    test('should build block with ordered challenges', () => {
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

      expect(result.name).toBe('Test Block');
      expect(result.dashedName).toBe('test-block');
      expect(result.challenges).toHaveLength(2);
      expect(result.challenges[0].id).toBe('1'); // First in order
      expect(result.challenges[1].id).toBe('2'); // Second in order
    });

    test('should throw if challenges are missing', () => {
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

    test('should add the meta to the challenges when building the block', () => {
      const foundChallenges = [{ id: '1' }, { id: '2' }];

      const { challenges } = buildBlock(foundChallenges, dummyBlockMeta);

      // Verify challenge meta properties. This is not exhaustive, since
      // addMetaToChallenge is tested separately.
      expect(challenges[0]).toMatchObject({
        id: '1',
        challengeOrder: 0,
        isLastChallengeInBlock: false,
        helpCategory: dummyBlockMeta.helpCategory
      });

      expect(challenges[1]).toMatchObject({
        id: '2',
        challengeOrder: 1,
        isLastChallengeInBlock: true,
        helpCategory: dummyBlockMeta.helpCategory
      });
    });
  });

  describe('addMetaToChallenge', () => {
    test('should add meta properties to challenge', () => {
      const challenge = { id: '1' };

      addMetaToChallenge(challenge, dummyBlockMeta);

      expect(challenge).toEqual(expectedChallengeProperties);
    });

    test('should add chapter and module properties when present in meta', () => {
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

  describe('fixChallengeProperties', () => {
    test("should ensure all challengeFiles are 'polyvinyls'", () => {
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

    test("should ensure all the solutions are arrays of 'polyvinyls'", () => {
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
    test('should return the blocks array when valid superblock data is provided', () => {
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

    test('should return single block when superblock has one block', () => {
      const superblockData = {
        blocks: ['basic-html-and-html5']
      };

      const result = transformSuperBlock(superblockData);

      expect(result).toEqual([{ dashedName: 'basic-html-and-html5' }]);
      expect(result).toHaveLength(1);
    });

    test('should throw an error when the blocks array is empty', () => {
      const superblockData = {
        blocks: []
      };

      expect(() => transformSuperBlock(superblockData)).toThrow(
        'No blocks found in superblock data'
      );
    });

    test('should handle superblock data with other properties', () => {
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

    test('should transform superblocks with nested chapters and modules', () => {
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

    test("should omit 'comingSoon' modules and chapters", () => {
      const result = transformSuperBlock(dummyUnfinishedSuperBlock);

      expect(result).toEqual([
        { dashedName: 'block-3', chapter: 'chapter-1', module: 'module-2' },
        { dashedName: 'block-4', chapter: 'chapter-1', module: 'module-2' }
      ]);
      expect(result).toHaveLength(2);
    });
  });

  describe('processSuperblock', () => {
    test('should process blocks using the provided processing function', async () => {
      const mockProcessBlockFn = jest
        .fn()
        .mockResolvedValueOnce('Block 1')
        .mockResolvedValueOnce('Block 2')
        .mockResolvedValueOnce(null);

      const blocks = [
        { dashedName: 'block-1' },
        { dashedName: 'block-2' },
        { dashedName: 'block-3' }
      ];

      const result = await processSuperblock(
        mockProcessBlockFn,
        blocks,
        'test-superblock'
      );

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
