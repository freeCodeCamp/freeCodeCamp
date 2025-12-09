import fs from 'fs/promises';
import path from 'path';
import { prompt } from 'inquirer';
import { format } from 'prettier';
import { ObjectId } from 'bson';

import {
  SuperBlocks,
  chapterBasedSuperBlocks
} from '../../shared-dist/config/curriculum.js';
import { BlockLayouts, BlockLabel } from '../../shared-dist/config/blocks.js';
import {
  createBlockFolder,
  writeBlockStructure
} from '../../curriculum/src/file-handler.js';
import { superBlockToFilename } from '../../curriculum/src/build-curriculum.js';
import {
  createQuizFile,
  createStepFile,
  validateBlockName,
  getAllBlocks
} from './utils.js';
import { getBaseMeta } from './helpers/get-base-meta.js';
import { createIntroMD } from './helpers/create-intro.js';
import {
  ChapterModuleSuperblockStructure,
  updateChapterModuleSuperblockStructure,
  updateSimpleSuperblockStructure
} from './helpers/create-project.js';

const helpCategories = [
  'HTML-CSS',
  'JavaScript',
  'Backend Development',
  'Python',
  'English',
  'Odin',
  'Euler',
  'Rosetta'
] as const;

type BlockInfo = {
  title: string;
  intro: string[];
};

type SuperBlockInfo = {
  blocks: Record<string, BlockInfo>;
};

type IntroJson = Record<SuperBlocks, SuperBlockInfo>;

interface CreateProjectArgs {
  superBlock: SuperBlocks;
  block: string;
  helpCategory: string;
  blockLabel?: string;
  blockLayout?: string;
  questionCount?: number;
  order?: number;
  chapter?: string;
  position?: number;
  module?: string;
  title?: string;
}

async function createProject(projectArgs: CreateProjectArgs) {
  if (!projectArgs.title) {
    projectArgs.title = projectArgs.block;
  }

  const order = projectArgs.order;
  const chapter = projectArgs.chapter;
  const module = projectArgs.module;
  const position = projectArgs.position;

  const superblockFilename = (
    superBlockToFilename as Record<SuperBlocks, string>
  )[projectArgs.superBlock];

  if (chapterBasedSuperBlocks.includes(projectArgs.superBlock)) {
    if (!chapter || !module || typeof position == 'undefined') {
      throw Error(
        'Missing one of the following arguments: chapter, module, position'
      );
    }
    void updateChapterModuleSuperblockStructure(
      projectArgs.block,
      // Convert human-friendly (1-based) position to 0-based index for insertion.
      { order: position - 1, chapter, module },
      superblockFilename
    );
  } else {
    if (typeof order == 'undefined') {
      throw Error('Missing argument: order');
    }
    void updateSimpleSuperblockStructure(
      projectArgs.block,
      { order },
      superblockFilename
    );
  }

  void updateIntroJson(
    projectArgs.superBlock,
    projectArgs.block,
    projectArgs.title
  );

  if (projectArgs.blockLabel === BlockLabel.quiz) {
    if (projectArgs.questionCount == null) {
      throw new Error(
        'Property `questionCount` is null when creating new Quiz Challenge'
      );
    }
    const challengeId = await createQuizChallenge(
      projectArgs.block,
      projectArgs.title,
      projectArgs.questionCount
    );
    void createMetaJson(
      projectArgs.superBlock,
      projectArgs.block,
      projectArgs.title,
      projectArgs.helpCategory,
      challengeId
    );
  } else {
    const challengeId = await createFirstChallenge(projectArgs.block);
    void createMetaJson(
      projectArgs.superBlock,
      projectArgs.block,
      projectArgs.title,
      projectArgs.helpCategory,
      challengeId,
      projectArgs.order,
      projectArgs.blockLabel,
      projectArgs.blockLayout
    );
    // TODO: remove once we stop relying on markdown in the client.
  }

  if (
    (chapterBasedSuperBlocks.includes(projectArgs.superBlock) &&
      projectArgs.blockLabel) == null
  ) {
    throw new Error(
      'Missing argument: blockLabel when updating intro markdown'
    );
  }

  void createIntroMD(
    projectArgs.superBlock,
    projectArgs.block,
    projectArgs.title
  );
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
    intro: [title, '']
  };
  void withTrace(
    fs.writeFile,
    introJsonPath,
    await format(JSON.stringify(newIntro), { parser: 'json' })
  );
}

async function createMetaJson(
  superBlock: SuperBlocks,
  block: string,
  title: string,
  helpCategory: string,
  challengeId: ObjectId,
  order?: number,
  blockLabel?: string,
  blockLayout?: string
) {
  let newMeta;
  if (chapterBasedSuperBlocks.includes(superBlock)) {
    newMeta = getBaseMeta('FullStack');
    newMeta.blockLabel = blockLabel;
    newMeta.blockLayout = blockLayout;
    if (blockLabel === BlockLabel.workshop) {
      newMeta.hasEditableBoundaries = true;
    }
  } else {
    newMeta = getBaseMeta('Step');
    newMeta.order = order;
  }
  newMeta.name = title;
  newMeta.dashedName = block;
  newMeta.helpCategory = helpCategory;

  newMeta.challengeOrder = [{ id: challengeId.toString(), title: 'Step 1' }];

  await writeBlockStructure(block, newMeta);
}

async function createFirstChallenge(block: string): Promise<ObjectId> {
  // TODO: would be nice if the extension made sense for the challenge, but, at
  // least until react I think they're all going to be html anyway.
  const challengeSeeds = [
    {
      contents: '',
      ext: 'html',
      editableRegionBoundaries: [0, 2]
    }
  ];
  // including trailing slash for compatibility with createStepFile
  return createStepFile({
    projectPath: await createBlockFolder(block),
    stepNum: 1,
    challengeType: 0,
    challengeSeeds,
    isFirstChallenge: true
  });
}

async function createQuizChallenge(
  block: string,
  title: string,
  questionCount: number
): Promise<ObjectId> {
  return createQuizFile({
    projectPath: await createBlockFolder(block),
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

async function getChapters(superBlock: string) {
  const blockMetaFile = await fs.readFile(
    '../../curriculum/structure/superblocks/' + superBlock + '.json',
    { encoding: 'utf8' }
  );
  const blockMetaData = JSON.parse(
    blockMetaFile
  ) as ChapterModuleSuperblockStructure;
  return blockMetaData.chapters;
}

async function getModules(superBlock: string, chapterName: string) {
  const blockMetaFile = await fs.readFile(
    '../../curriculum/structure/superblocks/' + superBlock + '.json',
    { encoding: 'utf8' }
  );
  const blockMetaData = JSON.parse(
    blockMetaFile
  ) as ChapterModuleSuperblockStructure;
  const modifiedChapter = blockMetaData.chapters.find(
    x => x.dashedName === chapterName
  );
  return modifiedChapter?.modules;
}

void getAllBlocks()
  .then(existingBlocks =>
    prompt([
      {
        name: 'superBlock',
        message: 'Which certification does this belong to?',
        default: SuperBlocks.FullStackDeveloper,
        type: 'list',
        choices: Object.values(SuperBlocks)
      },
      {
        name: 'block',
        message: 'What is the dashed name (in kebab-case) for this project?',
        validate: (block: string) => validateBlockName(block, existingBlocks),
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
        default: 'HTML-CSS',
        type: 'list',
        choices: helpCategories
      },
      {
        name: 'blockLabel',
        message: 'Choose a block label',
        default: BlockLabel.lab,
        type: 'list',
        choices: Object.values(BlockLabel),
        when: (answers: CreateProjectArgs) =>
          chapterBasedSuperBlocks.includes(answers.superBlock)
      },
      {
        name: 'blockLayout',
        message: 'Choose a block layout',

        default: (answers: { blockLabel: BlockLabel }) =>
          answers.blockLabel == BlockLabel.quiz
            ? BlockLayouts.Link
            : BlockLayouts.ChallengeList,
        type: 'list',
        choices: Object.values(BlockLayouts),
        when: (answers: CreateProjectArgs) =>
          chapterBasedSuperBlocks.includes(answers.superBlock)
      },
      {
        name: 'questionCount',
        message: 'Choose a question count',
        default: 20,
        type: 'list',
        choices: [10, 20],
        when: (answers: CreateProjectArgs) =>
          answers.blockLabel === BlockLabel.quiz
      },
      {
        name: 'chapter',
        message: 'What chapter should this project go in?',
        default: 'html',
        type: 'list',
        choices: async (answers: CreateProjectArgs) => {
          const chapters = await getChapters(answers.superBlock);
          return chapters.map(x => x.dashedName);
        },
        when: (answers: CreateProjectArgs) =>
          chapterBasedSuperBlocks.includes(answers.superBlock)
      },
      {
        name: 'module',
        message: 'What module should this project go in?',
        default: 'html',
        type: 'list',
        choices: async (answers: CreateProjectArgs) => {
          const modules = await getModules(
            answers.superBlock,
            answers.chapter!
          );
          return modules!.map(x => x.dashedName);
        },
        when: (answers: CreateProjectArgs) =>
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
        when: (answers: CreateProjectArgs) =>
          chapterBasedSuperBlocks.includes(answers.superBlock),
        filter: (position: string) => {
          return parseInt(position, 10);
        }
      },
      {
        name: 'order',
        message: 'Which position does this appear in the certificate?',
        default: 42,
        validate: (order: string) => {
          return parseInt(order, 10) > 0
            ? true
            : 'Order must be an number greater than zero.';
        },
        when: (answers: CreateProjectArgs) =>
          !chapterBasedSuperBlocks.includes(answers.superBlock),
        filter: (order: string) => {
          return parseInt(order, 10);
        }
      }
    ]).then(
      async ({
        superBlock,
        block,
        title,
        helpCategory,
        blockLabel,
        blockLayout,
        questionCount,
        chapter,
        module,
        position,
        order
      }: CreateProjectArgs) =>
        await createProject({
          superBlock,
          block,
          helpCategory,
          blockLabel,
          blockLayout,
          questionCount,
          title,
          chapter,
          module,
          position,
          order
        })
    )
  )
  .then(() =>
    console.log(
      'All set.  Now use pnpm run clean:client in the root and it should be good to go.'
    )
  );
