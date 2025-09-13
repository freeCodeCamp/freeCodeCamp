import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import { input, select } from '@inquirer/prompts';
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
  const challengeSeeds = {
    indexhtml: {
      contents: '',
      ext: 'html',
      editableRegionBoundaries: [0, 2]
    }
  };
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

void (async () => {
  try {
    const answers: CreateProjectArgs = {
      superBlock: await select({
        message: 'Which certification does this belong to?',
        choices: Object.values(SuperBlocks),
        default: SuperBlocks.FullStackDeveloper
      }),
      block: await input({
        message: 'What is the dashed name (in kebab-case) for this project?',
        validate: validateBlockName,
        transformer: (b: string) => b.toLowerCase().trim()
      }),
      title: undefined, // set after block is known
      helpCategory: await select({
        message: 'Choose a help category',
        choices: helpCategories,
        default: 'HTML-CSS'
      }),
      blockType: undefined,
      blockLayout: undefined,
      questionCount: undefined,
      chapter: undefined,
      module: undefined,
      position: undefined,
      order: undefined
    };

    // Set title after block is known
    answers.title = await input({
      message: 'What is the title of the block?',
      default: answers.block
    });

    if (answers.superBlock === SuperBlocks.FullStackDeveloper) {
      answers.blockType = await select({
        message: 'Choose a block type',
        choices: Object.values(BlockTypes),
        default: BlockTypes.lab
      });

      answers.blockLayout = await select({
        message: 'Choose a block layout',
        choices: Object.values(BlockLayouts),
        default:
          answers.blockType === BlockTypes.quiz
            ? BlockLayouts.Link
            : BlockLayouts.ChallengeList
      });

      if (answers.blockType === BlockTypes.quiz) {
        answers.questionCount = await select({
          message: 'Choose a question count',
          choices: [
            { name: '10', value: 10 },
            { name: '20', value: 20 }
          ],
          default: 20
        });
      }

      answers.chapter = await select({
        message:
          'What chapter in full-stack.json should this full stack project go in?',
        choices: fullStackData.chapters.map(x => x.dashedName),
        default: 'html'
      });

      answers.module = await select({
        message:
          'What module in full-stack.json should this full stack project go in?',
        choices:
          fullStackData.chapters
            .find(x => x.dashedName === answers.chapter)
            ?.modules.map(x => x.dashedName) || [],
        default: 'html'
      });

      answers.position = parseInt(
        await input({
          message: 'At which position does this appear in the module?',
          default: '1',
          validate: (pos: string) =>
            parseInt(pos, 10) > 0 ? true : 'Position must be greater than zero.'
        }),
        10
      );
    } else {
      answers.order = parseInt(
        await input({
          message: 'Which position does this appear in the certificate?',
          default: '42',
          validate: (ord: string) =>
            parseInt(ord, 10) > 0 ? true : 'Order must be greater than zero.'
        }),
        10
      );
    }

    await createProject(answers);

    console.log(
      'All set. Now use pnpm run clean:client in the root and it should be good to go.'
    );
  } catch (err) {
    console.error('Error creating project:', err);
  }
})();
