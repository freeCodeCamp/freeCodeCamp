const path = require('node:path');

const {
  createCommentMap,
  filterByChallengeId,
  filterByBlock,
  filterBySuperblock
} = require('./build-curriculum');

describe('createCommentMap', () => {
  const dictionaryDir = path.resolve(__dirname, '__fixtures__', 'dictionaries');
  const incompleteDictDir = path.resolve(
    __dirname,
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

describe('filterByChallengeId', () => {
  it('returns the same superblocks if no challengeId is provided', () => {
    const superblocks = [
      {
        name: 'superblock-1',
        blocks: [{ dashedName: 'block-1', challengeOrder: [{ id: '1' }] }]
      },
      {
        name: 'superblock-2',
        blocks: [{ dashedName: 'block-2', challengeOrder: [{ id: '2' }] }]
      }
    ];
    expect(filterByChallengeId(superblocks)).toEqual(superblocks);
  });

  it('ignores blocks without the specified challengeId', () => {
    const superblocks = [
      {
        name: 'superblock-1',
        blocks: [
          { dashedName: 'block-1', challengeOrder: [{ id: '1' }] },
          { dashedName: 'block-2', challengeOrder: [{ id: '2' }] }
        ]
      }
    ];
    const filtered = filterByChallengeId(superblocks, { challengeId: '2' });
    expect(filtered).toEqual([
      {
        name: 'superblock-1',
        blocks: [{ dashedName: 'block-2', challengeOrder: [{ id: '2' }] }]
      }
    ]);
  });

  it('returns only the specified challenge and its solution challenge', () => {
    const superblocks = [
      {
        name: 'superblock-1',
        blocks: [
          {
            dashedName: 'block-1',
            challengeOrder: [{ id: '1' }, { id: '2' }, { id: '3' }]
          },
          { dashedName: 'block-2', challengeOrder: [{ id: '4' }] }
        ]
      }
    ];
    const filtered = filterByChallengeId(superblocks, { challengeId: '1' });
    expect(filtered).toEqual([
      {
        name: 'superblock-1',
        blocks: [
          { dashedName: 'block-1', challengeOrder: [{ id: '1' }, { id: '2' }] }
        ]
      }
    ]);
  });

  it('returns only superblocks containing the specified challenge', () => {
    const superblocks = [
      {
        name: 'superblock-1',
        blocks: [
          { dashedName: 'block-1', challengeOrder: [{ id: '1' }] },
          { dashedName: 'block-2', challengeOrder: [{ id: '2' }] }
        ]
      },
      {
        name: 'superblock-2',
        blocks: [{ dashedName: 'block-3', challengeOrder: [{ id: '3' }] }]
      }
    ];
    const filtered = filterByChallengeId(superblocks, { challengeId: '2' });
    expect(filtered).toEqual([
      {
        name: 'superblock-1',
        blocks: [{ dashedName: 'block-2', challengeOrder: [{ id: '2' }] }]
      }
    ]);
  });
});

describe('filterByBlock', () => {
  it('returns the same superblocks if no block is provided', () => {
    const superblocks = [
      {
        name: 'superblock-1',
        blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }]
      }
    ];
    expect(filterByBlock(superblocks)).toEqual(superblocks);
  });

  it('returns only the specified block', () => {
    const superblocks = [
      {
        name: 'superblock-1',
        blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }]
      }
    ];
    const filtered = filterByBlock(superblocks, { block: 'block-1' });
    expect(filtered).toEqual([
      {
        name: 'superblock-1',
        blocks: [{ dashedName: 'block-1' }]
      }
    ]);
  });

  it('returns an empty array if no blocks match the specified block', () => {
    const superblocks = [
      {
        name: 'superblock-1',
        blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }]
      }
    ];
    const filtered = filterByBlock(superblocks, { block: 'nonexistent-block' });
    expect(filtered).toEqual([]);
  });
});

describe('filterBySuperblock', () => {
  it('returns the same superblocks if no superBlock is provided', () => {
    const superblocks = [
      {
        name: 'superblock-1',
        blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }]
      }
    ];
    expect(filterBySuperblock(superblocks)).toEqual(superblocks);
  });

  it('returns only the specified superblock', () => {
    const superblocks = [
      {
        name: 'superblock-1',
        blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }]
      },
      {
        name: 'superblock-2',
        blocks: [{ dashedName: 'block-3' }]
      }
    ];
    const filtered = filterBySuperblock(superblocks, {
      superBlock: 'superblock-1'
    });
    expect(filtered).toEqual([
      {
        name: 'superblock-1',
        blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }]
      }
    ]);
  });
});
