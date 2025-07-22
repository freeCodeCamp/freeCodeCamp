const {
  validateChallenges,
  buildBlock,
  transformSuperBlock
} = require('./parse-superblock');

const fullStackSuperBlock = {
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
const unfinishedSuperBlock = {
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

describe('parseSuperblock pure functions', () => {
  describe('validateChallenges', () => {
    test('should not throw when all challenges match meta', () => {
      const foundChallenges = new Map([
        ['1', { id: '1', title: 'Challenge 1' }],
        ['2', { id: '2', title: 'Challenge 2' }]
      ]);

      const meta = {
        challengeOrder: [
          { id: '1', title: 'Challenge 1' },
          { id: '2', title: 'Challenge 2' }
        ]
      };

      expect(() => validateChallenges(foundChallenges, meta)).not.toThrow();
    });

    test('should throw when challenges are missing from meta', () => {
      const foundChallenges = new Map([
        ['1', { id: '1', title: 'Challenge 1' }],
        ['2', { id: '2', title: 'Challenge 2' }],
        ['3', { id: '3', title: 'Challenge 3' }] // Extra challenge
      ]);

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
      const foundChallenges = new Map([
        ['1', { id: '1', title: 'Challenge 1' }]
      ]);

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
      const foundChallenges = new Map([
        ['1', { id: '1', title: 'Challenge 1' }],
        ['2', { id: '2', title: 'Challenge 2' }],
        ['3', { id: '3', title: 'Challenge 3' }],
        ['4', { id: '4', title: 'Challenge 4' }]
      ]);

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
      const foundChallenges = new Map([
        ['1', { id: '1', title: 'Challenge 1' }]
      ]);

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
      const foundChallenges = new Map([
        ['2', { id: '2', title: 'Challenge 2' }],
        ['1', { id: '1', title: 'Challenge 1' }]
      ]);

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
      const foundChallenges = new Map([
        ['2', { id: '2', title: 'Challenge 2' }]
      ]);

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
      const result = transformSuperBlock(fullStackSuperBlock);

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
      const result = transformSuperBlock(unfinishedSuperBlock);

      expect(result).toEqual([
        { dashedName: 'block-3', chapter: 'chapter-1', module: 'module-2' },
        { dashedName: 'block-4', chapter: 'chapter-1', module: 'module-2' }
      ]);
      expect(result).toHaveLength(2);
    });
  });
});
