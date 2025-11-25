import { readFile } from 'fs/promises';
import { join } from 'path';
import {
  SUPERBLOCK_META_DIR,
  BLOCK_META_DIR,
  ENGLISH_LANG_DIR
} from '../configs/paths';
import { SuperBlockMeta } from '../interfaces/superblock-meta';
import { PartialMeta } from '../interfaces/partial-meta';
import { Intro } from '../interfaces/intro';

type Block = {
  name: string;
  path: string;
};

type Module = {
  name: string;
  path: string;
};

type BlockLocation = {
  blocks: Block[];
  currentModule: string;
  currentChapter: string;
};

type ModuleLocation = {
  modules: Module[];
  currentChapter: string;
  currentSuperBlock: string;
};

export const getModules = async (
  superBlock: string,
  chap: string
): Promise<ModuleLocation> => {
  const superBlockDataPath = join(SUPERBLOCK_META_DIR, superBlock + '.json');

  const superBlockMetaFile = await readFile(superBlockDataPath, {
    encoding: 'utf8'
  });
  const superBlockMeta = JSON.parse(superBlockMetaFile) as SuperBlockMeta;

  const introDataPath = join(ENGLISH_LANG_DIR, 'intro.json');
  const introFile = await readFile(introDataPath, {
    encoding: 'utf8'
  });
  const introData = JSON.parse(introFile) as Intro;

  const chapters = Object.entries(introData[superBlock]['chapters']!);

  const chapter = superBlockMeta.chapters!.filter(
    x => x.dashedName === chap
  )[0];

  const chapterTrueName = chapters.filter(x => x[0] === chap)[0][1];

  let modules: Module[] = [];

  modules = chapter.modules.map(module => {
    const modules = Object.entries(introData[superBlock]['modules']!);
    const moduleTrueName = modules.filter(
      x => x[0] === module.dashedName
    )[0][1];
    return { name: moduleTrueName, path: 'modules/' + module.dashedName };
  });

  return {
    modules: modules,
    currentChapter: chapterTrueName,
    currentSuperBlock: introData[superBlock].title
  };
};

export const getBlocks = async (
  superBlock: string,
  chapterName: string,
  moduleName: string
): Promise<BlockLocation> => {
  const superBlockDataPath = join(SUPERBLOCK_META_DIR, superBlock + '.json');

  const superBlockMetaFile = await readFile(superBlockDataPath, {
    encoding: 'utf8'
  });
  const superBlockMeta = JSON.parse(superBlockMetaFile) as SuperBlockMeta;

  const introDataPath = join(ENGLISH_LANG_DIR, 'intro.json');
  const introFile = await readFile(introDataPath, {
    encoding: 'utf8'
  });
  const introData = JSON.parse(introFile) as Intro;

  const modules = Object.entries(introData[superBlock]['modules']!);

  const moduleTrueName = modules.filter(x => x[0] === moduleName)[0][1];

  const chapters = Object.entries(introData[superBlock]['chapters']!);

  const chapterTrueName = chapters.filter(x => x[0] === chapterName)[0][1];

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

  return {
    blocks: blocks,
    currentModule: moduleTrueName,
    currentChapter: chapterTrueName
  };
};
