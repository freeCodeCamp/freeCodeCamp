import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import { prompt } from 'inquirer';
import { format } from 'prettier';
import ObjectID from 'bson-objectid';

import fullStackData from '../../curriculum/structure/superblocks/full-stack-developer.json';
import { SuperBlocks } from '../../shared/config/curriculum';
import { BlockLayouts, BlockTypes } from '../../shared/config/blocks';
import {
  getContentConfig,
  writeBlockStructure
} from '../../curriculum/file-handler';
import { superBlockToFilename } from '../../curriculum/build-curriculum';
import { createQuizFile, createStepFile, validateBlockName } from './utils';
import { getBaseMeta } from './helpers/get-base-meta';
import { createIntroMD } from './helpers/create-intro';
import {
  updateChapterModuleSuperblockStructure,
  updateSimpleSuperblockStructure
} from './helpers/create-project';

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
  blockType?: string;
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

  if (projectArgs.superBlock === SuperBlocks.FullStackDeveloper) {
    if (!chapter || !module || typeof position == 'undefined') {
      throw Error(
        'Missing one of the following arguments: chapter, module, position'
      );
    }
    void updateChapterModuleSuperblockStructure(
      projectArgs.block,
      { order: position, chapter, module },
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

  if (projectArgs.blockType === BlockTypes.quiz) {
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
      projectArgs.blockType,
      projectArgs.blockLayout
    );
    // TODO: remove once we stop relying on markdown in the client.
  }

  if (
    (projectArgs.superBlock === SuperBlocks.FullStackDeveloper &&
      projectArgs.blockType) == null
  ) {
    throw new Error('Missing argument: blockType when updating intro markdown');
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
  challengeId: ObjectID,
  order?: number,
  blockType?: string,
  blockLayout?: string
) {
  let newMeta;
  if (superBlock === SuperBlocks.FullStackDeveloper) {
    newMeta = getBaseMeta('FullStack');
    newMeta.blockType = blockType;
    newMeta.blockLayout = blockLayout;
  } else {
    newMeta = getBaseMeta('Step');
    newMeta.order = order;
  }
  newMeta.name = title;
  newMeta.dashedName = block;
  newMeta.helpCategory = helpCategory;
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  newMeta.challengeOrder = [{ id: challengeId.toString(), title: 'Step 1' }];

  await writeBlockStructure(block, newMeta);
}

async function createFirstChallenge(block: string): Promise<ObjectID> {
  const { blockContentDir } = getContentConfig('english') as {
    blockContentDir: string;
  };

  const newChallengeDir = path.resolve(blockContentDir, block);
  await fs.mkdir(newChallengeDir, { recursive: true });

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
    projectPath: newChallengeDir + '/',
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
    default: SuperBlocks.FullStackDeveloper,
    type: 'list',
    choices: Object.values(SuperBlocks)
  },
  {
    name: 'block',
    message: 'What is the dashed name (in kebab-case) for this project?',
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
    default: 'HTML-CSS',
    type: 'list',
    choices: helpCategories
  },
  {
    name: 'blockType',
    message: 'Choose a block type',
    default: BlockTypes.lab,
    type: 'list',
    choices: Object.values(BlockTypes),
    when: (answers: CreateProjectArgs) =>
      answers.superBlock === SuperBlocks.FullStackDeveloper
  },
  {
    name: 'blockLayout',
    message: 'Choose a block layout',

    default: (answers: { blockType: BlockTypes }) =>
      answers.blockType == BlockTypes.quiz
        ? BlockLayouts.Link
        : BlockLayouts.ChallengeList,
    type: 'list',
    choices: Object.values(BlockLayouts),
    when: (answers: CreateProjectArgs) =>
      answers.superBlock === SuperBlocks.FullStackDeveloper
  },
  {
    name: 'questionCount',
    message: 'Choose a question count',
    default: 20,
    type: 'list',
    choices: [10, 20],
    when: (answers: CreateProjectArgs) => answers.blockType === BlockTypes.quiz
  },
  {
    name: 'chapter',
    message:
      'What chapter in full-stack.json should this full stack project go in?',
    default: 'html',
    type: 'list',
    choices: fullStackData.chapters.map(x => x.dashedName),
    when: (answers: CreateProjectArgs) =>
      answers.superBlock === SuperBlocks.FullStackDeveloper
  },
  {
    name: 'module',
    message:
      'What module in full-stack.json should this full stack project go in?',
    default: 'html',
    type: 'list',
    choices: (answers: CreateProjectArgs) =>
      fullStackData.chapters
        .find(x => x.dashedName === answers.chapter)
        ?.modules.map(x => x.dashedName),
    when: (answers: CreateProjectArgs) =>
      answers.superBlock === SuperBlocks.FullStackDeveloper
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
      answers.superBlock === SuperBlocks.FullStackDeveloper,
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
      answers.superBlock !== SuperBlocks.FullStackDeveloper,
    filter: (order: string) => {
      return parseInt(order, 10);
    }
  }
])
  .then(
    async ({
      superBlock,
      block,
      title,
      helpCategory,
      blockType,
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
        blockType,
        blockLayout,
        questionCount,
        title,
        chapter,
        module,
        position,
        order
      })
  )
  .then(() =>
    console.log(
      'All set.  Now use pnpm run clean:client in the root and it should be good to go.'
    )
  );
