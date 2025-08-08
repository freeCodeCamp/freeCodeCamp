const path = require('node:path');

const {
  createCommentMap,
  filterChallengesById
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

describe('filterChallengesById', () => {
  it('returns the same superblocks if no challengeId is provided', () => {
    const superblocks = [
      {
        name: 'Superblock 1',
        blocks: [{ name: 'Block 1', challengeOrder: [{ id: '1' }] }]
      },
      {
        name: 'Superblock 2',
        blocks: [{ name: 'Block 2', challengeOrder: [{ id: '2' }] }]
      }
    ];
    expect(filterChallengesById(superblocks)).toEqual(superblocks);
  });

  it('ignores blocks without the specified challengeId', () => {
    const superblocks = [
      {
        name: 'Superblock 1',
        blocks: [
          { name: 'Block 1', challengeOrder: [{ id: '1' }] },
          { name: 'Block 2', challengeOrder: [{ id: '2' }] }
        ]
      }
    ];
    const filtered = filterChallengesById(superblocks, '2');
    expect(filtered).toEqual([
      {
        name: 'Superblock 1',
        blocks: [{ name: 'Block 2', challengeOrder: [{ id: '2' }] }]
      }
    ]);
  });

  it('returns only the specified challenge and its solution challenge', () => {
    const superblocks = [
      {
        name: 'Superblock 1',
        blocks: [
          {
            name: 'Block 1',
            challengeOrder: [{ id: '1' }, { id: '2' }, { id: '3' }]
          },
          { name: 'Block 2', challengeOrder: [{ id: '4' }] }
        ]
      }
    ];
    const filtered = filterChallengesById(superblocks, '1');
    expect(filtered).toEqual([
      {
        name: 'Superblock 1',
        blocks: [
          { name: 'Block 1', challengeOrder: [{ id: '1' }, { id: '2' }] }
        ]
      }
    ]);
  });

  it('returns only superblocks containing the specified challenge', () => {
    const superblocks = [
      {
        name: 'Superblock 1',
        blocks: [
          { name: 'Block 1', challengeOrder: [{ id: '1' }] },
          { name: 'Block 2', challengeOrder: [{ id: '2' }] }
        ]
      },
      {
        name: 'Superblock 2',
        blocks: [{ name: 'Block 3', challengeOrder: [{ id: '3' }] }]
      }
    ];
    const filtered = filterChallengesById(superblocks, '2');
    expect(filtered).toEqual([
      {
        name: 'Superblock 1',
        blocks: [{ name: 'Block 2', challengeOrder: [{ id: '2' }] }]
      }
    ]);
  });
});
