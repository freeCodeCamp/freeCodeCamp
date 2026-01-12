import { generateSuperBlockList } from '../../shared-dist/config/curriculum.js';
import { SHOW_UPCOMING_CHANGES } from './config.js';

export function createSuperOrder(superBlocks: string[]) {
  const superOrder: { [sb: string]: number } = {};

  superBlocks.forEach((superBlock, i) => {
    superOrder[superBlock] = i;
  });

  return superOrder;
}

export function getSuperOrder(
  superblock: string,
  showUpcomingChanges = SHOW_UPCOMING_CHANGES
) {
  const flatSuperBlockMap = generateSuperBlockList({
    showUpcomingChanges
  });

  const superOrder = createSuperOrder(flatSuperBlockMap);
  return superOrder[superblock];
}
