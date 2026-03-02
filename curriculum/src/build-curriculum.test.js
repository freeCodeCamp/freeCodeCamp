import path from 'node:path';
import { describe, it, expect, vi } from 'vitest';

import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import {
  createCommentMap,
  addBlockStructure,
  getSuperblocks,
  superBlockNames
} from './build-curriculum.js';
import { getCurriculumStructure } from './file-handler.js';

vi.mock('./file-handler');

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

describe('addBlockStructure', () => {
  it('should override the order and superblock coming from getBlockStructure', () => {
    const mockGetBlockStructure = () => ({
      order: 5,
      superBlock: 'no'
    });

    const result = addBlockStructure(
      [{ name: 'yes', blocks: [{ a: 1 }, { b: 1 }] }],
      mockGetBlockStructure
    );

    expect(result).toEqual([
      {
        name: 'yes',
        blocks: [
          { a: 1, order: 0, superBlock: 'yes' },
          { b: 1, order: 1, superBlock: 'yes' }
        ]
      }
    ]);
  });
});

describe('getSuperblocks', () => {
  it('returns an empty array if no superblocks contain the given block', () => {
    getCurriculumStructure.mockReturnValue({
      superblocks: ['superblock-1'] // doesn't matter what this is, but must be defined
    });
    const mockAddSuperblockStructure = () => [
      {
        blocks: [{ dashedName: 'block-1' }],
        name: 'superblock-1'
      }
    ];

    expect(
      getSuperblocks('nonexistent-block', mockAddSuperblockStructure)
    ).toEqual([]);
  });

  it('returns an array with one superblock if one superblock contains the given block', () => {
    getCurriculumStructure.mockReturnValue({
      superblocks: ['superblock-1'] // doesn't matter what this is, but must be defined
    });
    const mockAddSuperblockStructure = () => [
      {
        blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }],
        name: 'superblock-1'
      }
    ];

    expect(getSuperblocks('block-1', mockAddSuperblockStructure)).toEqual([
      'superblock-1'
    ]);
  });

  it('returns an array with multiple superblocks if multiple superblocks contain the given block', () => {
    getCurriculumStructure.mockReturnValue({
      superblocks: ['superblock-1'] // doesn't matter what this is, but must be defined
    });
    const mockAddSuperblockStructure = () => [
      {
        blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }],
        name: 'superblock-1'
      },
      {
        blocks: [{ dashedName: 'block-3' }, { dashedName: 'block-1' }],
        name: 'superblock-2'
      }
    ];

    expect(getSuperblocks('block-1', mockAddSuperblockStructure)).toEqual([
      'superblock-1',
      'superblock-2'
    ]);
  });
});

describe('superBlockNames', () => {
  it('should have mappings for each SuperBlock', () => {
    const superBlocks = Object.values(SuperBlocks).sort(); // sorting to make comparison clearer
    const names = Object.values(superBlockNames).sort();

    expect(names).toHaveLength(superBlocks.length);
    expect(names).toEqual(expect.arrayContaining(superBlocks));
  });
});
