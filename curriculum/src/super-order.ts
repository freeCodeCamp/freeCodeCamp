import { generateSuperBlockList } from '@freecodecamp/shared/config/curriculum';

export function createSuperOrder(superBlocks: string[]) {
  const superOrder: { [sb: string]: number } = {};

  superBlocks.forEach((superBlock, i) => {
    superOrder[superBlock] = i;
  });

  return superOrder;
}

export function getSuperOrder(
  superblock: string,
  showUpcomingChanges: boolean
) {
  const flatSuperBlockMap = generateSuperBlockList({
    showUpcomingChanges
  });

  const superOrder = createSuperOrder(flatSuperBlockMap);
  return superOrder[superblock];
}
