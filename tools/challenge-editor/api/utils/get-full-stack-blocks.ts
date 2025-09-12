import { readFile } from 'fs/promises';
import { join } from 'path';
import { SUPERBLOCK_META_DIR, CHALLENGE_DIR } from '../configs/paths';
import { SuperBlockMeta } from '../interfaces/superblock-meta';

type Block = {
  name: string;
  path: string;
};

export const getModules = async (chap: string): Promise<string[]> => {
  const superBlockDataPath = join(
    SUPERBLOCK_META_DIR,
    'full-stack-developer' + '.json'
  );

  const superBlockMetaFile = await readFile(superBlockDataPath, {
    encoding: 'utf8'
  });
  const superBlockMeta = JSON.parse(superBlockMetaFile) as SuperBlockMeta;

  const chapter = superBlockMeta.chapters!.filter(
    x => x.dashedName === chap
  )[0];

  return await Promise.all(
    chapter.modules!.map(async module => module.dashedName)
  );
};

export const getBlocks = async (module: string): Promise<Block[]> => {
  const superBlockDataPath = join(
    SUPERBLOCK_META_DIR,
    'full-stack-developer' + '.json'
  );

  const superBlockMetaFile = await readFile(superBlockDataPath, {
    encoding: 'utf8'
  });
  const superBlockMeta = JSON.parse(superBlockMetaFile) as SuperBlockMeta;

  const foundModule = superBlockMeta
    .chapters!.flatMap(x => x.modules)
    .filter(x => x.dashedName === module)[0];

  let blocks: { name: string; path: string }[] = [];

  blocks = await Promise.all(
    foundModule.blocks!.map(async block => {
      const filePath = join(CHALLENGE_DIR, block);
      return {
        name: block,
        path: filePath
      };
    })
  );
  return blocks;
};
