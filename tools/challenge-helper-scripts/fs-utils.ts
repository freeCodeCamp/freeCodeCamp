import {
  SuperBlocks,
  superBlockToFolderMap
} from '../../shared/config/curriculum';

export function getSuperBlockSubPath(superBlock: SuperBlocks): string {
  return superBlockToFolderMap[superBlock];
}
