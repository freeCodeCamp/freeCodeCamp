import { describe, it, expect, vi } from 'vitest';

import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { addBlockStructure, superBlockNames } from './build-curriculum.js';

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

describe('superBlockNames', () => {
  it('should have mappings for each SuperBlock', () => {
    const superBlocks = Object.values(SuperBlocks).sort(); // sorting to make comparison clearer
    const names = Object.values(superBlockNames).sort();

    expect(names).toHaveLength(superBlocks.length);
    expect(names).toEqual(expect.arrayContaining(superBlocks));
  });
});
