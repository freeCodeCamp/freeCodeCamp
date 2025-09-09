// TODO: this belongs in create-project, but we can't test that (since it uses
// prettier) until we migrate to vitest
import {
  getSuperblockStructure,
  writeSuperblockStructure
} from '../../../curriculum/file-handler';
import { insertInto } from './utils';

export async function updateSimpleSuperblockStructure(
  block: string,
  position: { order: number },
  superblockFilename: string
) {
  const existing = getSuperblockStructure(superblockFilename) as {
    blocks: string[];
  };
  const updated = {
    blocks: insertInto(existing.blocks, position.order, block)
  };
  await writeSuperblockStructure(superblockFilename, updated);
}

function createNewChapter(chapter: string, module: string, block: string) {
  return {
    dashedName: chapter,
    modules: [
      {
        dashedName: module,
        blocks: [block]
      }
    ]
  };
}

function createNewModule(module: string, block: string) {
  return {
    dashedName: module,
    blocks: [block]
  };
}

type ChapterModuleSuperblockStructure = {
  chapters: {
    dashedName: string;
    modules: {
      dashedName: string;
      blocks: string[];
    }[];
  }[];
};

export async function updateChapterModuleSuperblockStructure(
  block: string,
  position: { order: number; chapter: string; module: string },
  superblockFilename: string
) {
  const existing = getSuperblockStructure(
    superblockFilename
  ) as ChapterModuleSuperblockStructure;
  const modifiedChapter = existing.chapters.find(
    chapter => chapter.dashedName === position.chapter
  );
  const modifiedModule = modifiedChapter?.modules.find(
    module => module.dashedName === position.module
  );

  const updatedModule = modifiedModule
    ? {
        ...modifiedModule,
        blocks: insertInto(modifiedModule.blocks, position.order, block)
      }
    : createNewModule(position.module, block);

  const updatedChapter = modifiedChapter
    ? {
        ...modifiedChapter,
        modules: modifiedModule
          ? modifiedChapter.modules.map(module =>
              module === modifiedModule ? updatedModule : module
            )
          : [...modifiedChapter.modules, updatedModule]
      }
    : createNewChapter(position.chapter, position.module, block);

  const updated = {
    chapters: modifiedChapter
      ? existing.chapters.map(chapter =>
          chapter === modifiedChapter ? updatedChapter : chapter
        )
      : [...existing.chapters, updatedChapter]
  };

  await writeSuperblockStructure(superblockFilename, updated);
}
