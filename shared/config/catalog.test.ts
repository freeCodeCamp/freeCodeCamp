import { catalogSuperBlocks } from './curriculum';
import { catalog } from './catalog';

describe('catalog', () => {
  it('should have exactly one entry for each superblock in SuperBlockStage.Catalog', () => {
    expect(catalog.map(course => course.superBlock.toString()).sort()).toEqual(
      catalogSuperBlocks.map(sb => sb.toString()).sort()
    );
  });
});
