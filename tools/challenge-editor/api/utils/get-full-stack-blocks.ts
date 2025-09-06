import { readFile } from 'fs/promises';
import { join } from 'path';
import { SUPERBLOCK_META_DIR } from '../configs/paths';
import { SuperBlockMeta } from '../interfaces/superblock-meta';

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
      return { name: module.dashedName, path: 'modules/' + module.dashedName };
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
      return {
        name: block,
        path: block
      };
    })
  );
  return blocks;
};
