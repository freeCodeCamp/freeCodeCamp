import { readFile } from 'fs/promises';
import { join } from 'path';
import { SUPERBLOCK_META_DIR, BLOCK_META_DIR } from '../configs/paths';

import { SuperBlockMeta } from '../interfaces/superblock-meta';
import { PartialMeta } from '../interfaces/partial-meta';

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

  if (sup === 'full-stack-developer') {
    blocks = superBlockMeta.chapters!.map(chapter => {
      return {
        name: chapter.dashedName,
        path: 'chapters/' + chapter.dashedName
      };
    });
    /*
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
    */
  } else {
    blocks = await Promise.all(
      superBlockMeta.blocks!.map(async block => {
        const blockStructurePath = join(BLOCK_META_DIR, block + '.json');
        const blockMetaFile = await readFile(blockStructurePath, {
          encoding: 'utf8'
        });
        const blockMeta = JSON.parse(blockMetaFile) as PartialMeta;
        return {
          name: blockMeta.name,
          path: block
        };
      })
    );
  }

  return blocks;
};
