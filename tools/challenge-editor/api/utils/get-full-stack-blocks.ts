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

type Module = {
  path: string;
};

export const getModules = async (
  superBlock: string,
  chap: string
): Promise<Module[]> => {
  const superBlockDataPath = join(SUPERBLOCK_META_DIR, superBlock + '.json');

  const superBlockMetaFile = await readFile(superBlockDataPath, {
    encoding: 'utf8'
  });
  const superBlockMeta = JSON.parse(superBlockMetaFile) as SuperBlockMeta;

  const chapter = superBlockMeta.chapters!.filter(
    x => x.dashedName === chap
  )[0];

  let modules: Module[] = [];

  modules = await Promise.all(
    chapter.modules!.map(module => {
      const modules = Object.entries(intro['full-stack-developer']['modules']);
      const moduleTrueName = modules.filter(
        x => x[0] === module.dashedName
      )[0][1];
      return { name: moduleTrueName, path: 'modules/' + module.dashedName };
    })
  );

  return modules;
};

export const getBlocks = async (
  superBlock: string,
  chapterName: string,
  moduleName: string
): Promise<Block[]> => {
  const superBlockDataPath = join(SUPERBLOCK_META_DIR, superBlock + '.json');

  const superBlockMetaFile = await readFile(superBlockDataPath, {
    encoding: 'utf8'
  });
  const superBlockMeta = JSON.parse(superBlockMetaFile) as SuperBlockMeta;

  const foundChapter = superBlockMeta.chapters?.filter(
    chapter => chapter.dashedName === chapterName
  )[0];

  const foundModule = foundChapter?.modules.filter(
    module => module.dashedName === moduleName
  )[0];

  let blocks: { name: string; path: string }[] = [];

  blocks = await Promise.all(
    foundModule!.blocks!.map(async block => {
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
  return blocks;
};
