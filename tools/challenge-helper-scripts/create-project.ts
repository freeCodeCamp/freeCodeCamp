import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import { input, select } from '@inquirer/prompts';
import { format } from 'prettier';
import ObjectID from 'bson-objectid';

import {
  SuperBlocks,
  superBlockToFolderMap
} from '../../shared/config/curriculum';
import { createStepFile, validateBlockName } from './utils';
import { getBaseMeta } from './helpers/get-base-meta';
import { createIntroMD } from './helpers/create-intro';

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
  order: number;
  title?: string;
}

async function createProject(
  superBlock: SuperBlocks,
  block: string,
  helpCategory: string,
  order: number,
  title?: string
) {
  if (!title) {
    title = block;
  }
  void updateIntroJson(superBlock, block, title);

  const challengeId = await createFirstChallenge(superBlock, block);
  void createMetaJson(
    superBlock,
    block,
    title,
    helpCategory,
    order,
    challengeId
  );
  // TODO: remove once we stop relying on markdown in the client.
  void createIntroMD(superBlock, block, title);
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
  superBlock: SuperBlocks,
  block: string,
  title: string,
  helpCategory: string,
  order: number,
  challengeId: ObjectID
) {
  const metaDir = path.resolve(__dirname, '../../curriculum/challenges/_meta');
  const newMeta = getBaseMeta('Step');
  newMeta.name = title;
  newMeta.dashedName = block;
  newMeta.helpCategory = helpCategory;
  newMeta.order = order;
  newMeta.superBlock = superBlock;
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  newMeta.challengeOrder = [{ id: challengeId.toString(), title: 'Step 1' }];
  const newMetaDir = path.resolve(metaDir, block);
  if (!existsSync(newMetaDir)) {
    await withTrace(fs.mkdir, newMetaDir);
  }

  void withTrace(
    fs.writeFile,
    path.resolve(metaDir, `${block}/meta.json`),
    await format(JSON.stringify(newMeta), { parser: 'json' })
  );
}

async function createFirstChallenge(
  superBlock: SuperBlocks,
  block: string
): Promise<ObjectID> {
  const superBlockSubPath = superBlockToFolderMap[superBlock];
  const newChallengeDir = path.resolve(
    __dirname,
    `../../curriculum/challenges/english/${superBlockSubPath}/${block}`
  );
  if (!existsSync(newChallengeDir)) {
    await withTrace(fs.mkdir, newChallengeDir);
  }

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
        default: SuperBlocks.RespWebDesign
      }),
      block: await input({
        message: 'What is the dashed name (in kebab-case) for this project?',
        validate: validateBlockName,
        transformer: (b: string) => b.toLowerCase().trim()
      }),
      title: undefined, // will set after block is known
      helpCategory: await select({
        message: 'Choose a help category',
        choices: helpCategories,
        default: 'HTML-CSS'
      }),
      order: 0 // will set below
    };

    // Set title after block is known
    answers.title = await input({
      message: 'What is the title of the block?',
      default: answers.block
    });

    // Prompt order as a string, then parse
    const orderStr = await input({
      message: 'Which position does this appear in the certificate?',
      default: '42',
      validate: (order: string) =>
        parseInt(order, 10) > 0
          ? true
          : 'Order must be a number greater than zero.'
    });
    answers.order = parseInt(orderStr, 10);

    await createProject(
      answers.superBlock,
      answers.block,
      answers.helpCategory,
      answers.order,
      answers.title
    );

    console.log(
      'All set. Now use pnpm run clean:client in the root and it should be good to go.'
    );
  } catch (err) {
    console.error('Error creating project:', err);
  }
})();
