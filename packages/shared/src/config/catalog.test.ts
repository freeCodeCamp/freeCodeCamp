import { describe, it, expect } from 'vitest';
import { catalog } from './catalog';
import { superBlockStages, SuperBlockStage } from './curriculum';

describe('catalog', () => {
  it('should have exactly one entry for each superblock in SuperBlockStage.Catalog', () => {
    const catalogSuperBlocks = superBlockStages[SuperBlockStage.Catalog];

    expect(catalog.map(course => course.superBlock.toString()).sort()).toEqual(
      catalogSuperBlocks.map(sb => sb.toString()).sort()
    );
  });
});
