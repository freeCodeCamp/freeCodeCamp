import { readFile } from 'fs/promises';
import { join } from 'path';
import { SUPERBLOCK_META_DIR, BLOCK_META_DIR } from '../configs/paths';

import { SuperBlockMeta } from '../interfaces/superblock-meta';
import { PartialMeta } from '../interfaces/partial-meta';

import * as intro from '../../../../client/i18n/locales/english/intro.json';

type Block = {
  name: string;
  path: string;
};

const chapterBasedSuperBlocks = ['full-stack-developer'];

export const getBlocks = async (sup: string): Promise<Block[]> => {
  const superBlockDataPath = join(SUPERBLOCK_META_DIR, sup + '.json');
  const superBlockMetaFile = await readFile(superBlockDataPath, {
    encoding: 'utf8'
  });
  const superBlockMeta = JSON.parse(superBlockMetaFile) as SuperBlockMeta;
  let blocks: { name: string; path: string }[] = [];

  if (chapterBasedSuperBlocks.includes(sup)) {
    blocks = superBlockMeta.chapters!.map(chapter => {
      const chapters = Object.entries(
        intro['full-stack-developer']['chapters']
      );
      const chapterTrueName = chapters.filter(
        x => x[0] === chapter.dashedName
      )[0][1];
      return {
        name: chapterTrueName,
        path: 'chapters/' + chapter.dashedName
      };
    });
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
