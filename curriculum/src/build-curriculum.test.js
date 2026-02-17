import { describe, it, expect, vi } from 'vitest';

import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import {
  addBlockStructure,
  getSuperblocks,
  superBlockNames
} from './build-curriculum.js';
import { getCurriculumStructure } from './file-handler.js';

vi.mock('./file-handler');

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
