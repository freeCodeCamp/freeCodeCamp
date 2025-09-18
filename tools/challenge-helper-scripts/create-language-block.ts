import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { prompt } from 'inquirer';
import { format } from 'prettier';
import ObjectID from 'bson-objectid';

import {
  SuperBlocks,
  languageSuperBlocks,
  chapterBasedSuperBlocks
} from '../../shared/config/curriculum';
import { BlockLayouts, BlockTypes } from '../../shared/config/blocks';
import {
  getContentConfig,
  writeBlockStructure,
  getSuperblockStructure
} from '../../curriculum/file-handler';
import { superBlockToFilename } from '../../curriculum/build-curriculum';
import { getBaseMeta } from './helpers/get-base-meta';
import { createIntroMD } from './helpers/create-intro';
import { createDialogueFile, createQuizFile, validateBlockName } from './utils';
import {
  updateSimpleSuperblockStructure,
  updateChapterModuleSuperblockStructure
} from './helpers/create-project';

const helpCategories = ['English'] as const;

type BlockInfo = {
  title: string;
  intro: string[];
};

type SuperBlockInfo = {
  blocks: Record<string, BlockInfo>;
};

type IntroJson = Record<SuperBlocks, SuperBlockInfo>;

interface CreateBlockArgs {
  superBlock: SuperBlocks;
  block: string;
  helpCategory: string;
  title?: string;
  chapter?: string;
  module?: string;
  position?: number;
  blockType?: string;
  blockLayout?: string;
  questionCount?: number;
}

async function createLanguageBlock(
  superBlock: SuperBlocks,
  block: string,
  helpCategory: string,
  title?: string,
  chapter?: string,
  module?: string,
  position?: number,
  blockType?: string,
  blockLayout?: string,
  questionCount?: number
) {
  if (!title) {
    title = block;
  }
  await updateIntroJson(superBlock, block, title);

  let challengeId: ObjectID;

  if (blockType === BlockTypes.quiz) {
    challengeId = await createQuizChallenge(block, title, questionCount!);
    blockLayout = BlockLayouts.Link;
  } else {
    challengeId = await createDialogueChallenge(superBlock, block);
  }

  await createMetaJson(
    block,
    title,
    helpCategory,
    challengeId,
    blockType,
    blockLayout
  );

  const superblockFilename = (
    superBlockToFilename as Record<SuperBlocks, string>
  )[superBlock];

  if (chapterBasedSuperBlocks.includes(superBlock)) {
    if (!chapter || !module || typeof position === 'undefined') {
      throw Error(
        'Missing one of the following arguments: chapter, module, position'
      );
    }

    void updateChapterModuleSuperblockStructure(
      block,
      // Convert human-friendly (1-based) position to 0-based index for insertion.
      { order: position - 1, chapter, module },
      superblockFilename
    );
  } else {
    void updateSimpleSuperblockStructure(block, {}, superblockFilename);
  }

  // TODO: remove once we stop relying on markdown in the client.
  await createIntroMD(superBlock, block, title);
}

async function updateIntroJson(
  superBlock: SuperBlocks,
  block: string,
  title: string
) {
  const introJsonPath = path.resolve(
    __dirname,
    '../../client/i18n/locales/english/intro.json'
  );
  const newIntro = await parseJson<IntroJson>(introJsonPath);
  newIntro[superBlock].blocks[block] = {
    title,
    intro: ['', '']
  };
  void withTrace(
    fs.writeFile,
    introJsonPath,
    await format(JSON.stringify(newIntro), { parser: 'json' })
  );
}

async function createMetaJson(
  block: string,
  title: string,
  helpCategory: string,
  challengeId: ObjectID,
  blockType?: string,
  blockLayout?: string
) {
  const newMeta = getBaseMeta('Language');
  newMeta.name = title;
  newMeta.dashedName = block;
  newMeta.helpCategory = helpCategory;

  if (blockType) {
    newMeta.blockType = blockType;
  }
  if (blockLayout) {
    newMeta.blockLayout = blockLayout;
  }

  const challengeTitle =
    blockType === BlockTypes.quiz ? title : "Dialogue 1: I'm Tom";

  newMeta.challengeOrder = [
    {
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      id: challengeId.toString(),
      title: challengeTitle
    }
  ];

  await writeBlockStructure(block, newMeta);
}

async function createDialogueChallenge(
  superBlock: SuperBlocks,
  block: string
): Promise<ObjectID> {
  const { blockContentDir } = getContentConfig('english') as {
    blockContentDir: string;
  };

  const newChallengeDir = path.resolve(blockContentDir, block);
  await fs.mkdir(newChallengeDir, { recursive: true });

  return createDialogueFile({
    projectPath: newChallengeDir + '/'
  });
}

async function createQuizChallenge(
  block: string,
  title: string,
  questionCount: number
): Promise<ObjectID> {
  const newChallengeDir = path.resolve(
    __dirname,
    `../../curriculum/challenges/english/${block}`
  );
  if (!existsSync(newChallengeDir)) {
    await withTrace(fs.mkdir, newChallengeDir);
  }
  return createQuizFile({
    projectPath: newChallengeDir + '/',
    title: title,
    dashedName: block,
    questionCount: questionCount
  });
}

function parseJson<JsonSchema>(filePath: string) {
  return withTrace(fs.readFile, filePath, 'utf8').then(
    // unfortunately, withTrace does not correctly infer that the third argument
    // is a string, so it uses the (path, options?) overload and we have to cast
    // result to string.
    result => JSON.parse(result as string) as JsonSchema
  );
}

// fs Promise functions return errors, but no stack trace.  This adds back in
// the stack trace.
function withTrace<Args extends unknown[], Result>(
  fn: (...x: Args) => Promise<Result>,
  ...args: Args
): Promise<Result> {
  return fn(...args).catch((reason: Error) => {
    throw Error(reason.message);
  });
}

void prompt([
  {
    name: 'superBlock',
    message: 'Which certification does this belong to?',
    default: SuperBlocks.A2English,
    type: 'list',
    choices: Object.values(languageSuperBlocks)
  },
  {
    name: 'block',
    message: 'What is the dashed name (in kebab-case) for this block?',
    validate: validateBlockName,
    filter: (block: string) => {
      return block.toLowerCase().trim();
    }
  },
  {
    name: 'title',
    default: ({ block }: { block: string }) => block
  },
  {
    name: 'helpCategory',
    message: 'Choose a help category',
    default: 'English',
    type: 'list',
    choices: helpCategories
  },
  {
    name: 'blockType',
    message: 'Choose a block type',
    default: BlockTypes.learn,
    type: 'list',
    choices: Object.values(BlockTypes),
    when: (answers: CreateBlockArgs) =>
      chapterBasedSuperBlocks.includes(answers.superBlock)
  },
  {
    name: 'blockLayout',
    message: 'Choose a block layout',
    default: BlockLayouts.DialogueGrid,
    type: 'list',
    choices: Object.values(BlockLayouts),
    when: (answers: CreateBlockArgs) =>
      chapterBasedSuperBlocks.includes(answers.superBlock) &&
      answers.blockType !== BlockTypes.quiz
  },
  {
    name: 'questionCount',
    message: 'Choose a question count',
    default: 20,
    type: 'list',
    choices: [10, 20],
    when: (answers: CreateBlockArgs) => answers.blockType === BlockTypes.quiz
  },
  {
    name: 'chapter',
    message: 'What chapter should this language block go in?',
    type: 'list',
    choices: (answers: CreateBlockArgs) => {
      const superblockFilename = (
        superBlockToFilename as Record<SuperBlocks, string>
      )[answers.superBlock];
      const structure = getSuperblockStructure(superblockFilename) as {
        chapters: {
          dashedName: string;
          modules: { dashedName: string; blocks: string[] }[];
        }[];
      };
      return structure.chapters.map(chapter => chapter.dashedName);
    },
    when: (answers: CreateBlockArgs) =>
      chapterBasedSuperBlocks.includes(answers.superBlock)
  },
  {
    name: 'module',
    message: 'What module should this language block go in?',
    type: 'list',
    choices: (answers: CreateBlockArgs) => {
      const superblockFilename = (
        superBlockToFilename as Record<SuperBlocks, string>
      )[answers.superBlock];
      const structure = getSuperblockStructure(superblockFilename) as {
        chapters: {
          dashedName: string;
          modules: { dashedName: string; blocks: string[] }[];
        }[];
      };
      return (
        structure.chapters
          .find(chapter => chapter.dashedName === answers.chapter)
          ?.modules.map(module => module.dashedName) ?? []
      );
    },
    when: (answers: CreateBlockArgs) =>
      chapterBasedSuperBlocks.includes(answers.superBlock)
  },
  {
    name: 'position',
    message: 'At which position does this appear in the module?',
    default: 1,
    validate: (position: string) => {
      return parseInt(position, 10) > 0
        ? true
        : 'Position must be an number greater than zero.';
    },
    when: (answers: CreateBlockArgs) =>
      chapterBasedSuperBlocks.includes(answers.superBlock),
    filter: (position: string) => {
      return parseInt(position, 10);
    }
  }
])
  .then(
    async ({
      superBlock,
      block,
      helpCategory,
      title,
      chapter,
      module,
      position,
      blockType,
      blockLayout,
      questionCount
    }: CreateBlockArgs) =>
      await createLanguageBlock(
        superBlock,
        block,
        helpCategory,
        title,
        chapter,
        module,
        position,
        blockType,
        blockLayout,
        questionCount
      )
  )
  .then(() =>
    console.log(
      'All set.  Now use pnpm run clean:client in the root and it should be good to go.'
    )
  );
