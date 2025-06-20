import { SuperBlockStage, superBlockStages } from './curriculum';
import { catalog } from './catalog';

describe('catalog', () => {
  it('should have exactly one entry for each superblock in SuperBlockStage.Catalog', () => {
    const catalogSuperBlocks = superBlockStages[SuperBlockStage.Catalog]
      .map(sb => sb.toString())
      .sort();
    const catalogSuperBlockKeys = catalog
      .map(course => course.superBlock.toString())
      .sort();

    expect(catalogSuperBlockKeys).toEqual(catalogSuperBlocks);
  });
});
