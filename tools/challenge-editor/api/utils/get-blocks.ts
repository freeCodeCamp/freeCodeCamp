import { readFile } from 'fs/promises';
import { join } from 'path';
import { SUPERBLOCK_META_DIR, CHALLENGE_DIR } from '../configs/paths';

import { SuperBlockMeta } from '../interfaces/superblock-meta';

type Block = {
  name: string;
  path: string;
};

export const getBlocks = async (sup: string): Promise<Block[]> => {
  const superBlockDataPath = join(SUPERBLOCK_META_DIR, sup + '.json');
  const superBlockMetaFile = await readFile(superBlockDataPath, {
    encoding: 'utf8'
  });
  const superBlockMeta = JSON.parse(superBlockMetaFile) as SuperBlockMeta;
  let blocks: { name: string; path: string }[] = [];

  if (sup.includes('full-stack')) {
    const moduleBlockData = await Promise.all(
      superBlockMeta.chapters!.flatMap(async chapter => {
        return await Promise.all(
          chapter.modules.flatMap(async module => {
            return module.blocks!.flatMap(block => {
              const filePath = join(CHALLENGE_DIR, block);
              return {
                name: block,
                path: filePath
              };
            });
          })
        );
      })
    );
    blocks = moduleBlockData.flat().flat();
  } else {
    blocks = await Promise.all(
      superBlockMeta.blocks!.map(async block => {
        const filePath = join(CHALLENGE_DIR, block);
        return {
          name: block,
          path: filePath
        };
      })
    );
  }

  return blocks;
};
