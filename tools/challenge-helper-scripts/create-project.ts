import fs from 'fs/promises';
import path from 'path';
import { prompt } from 'inquirer';
import { format } from 'prettier';
import ObjectID from 'bson-objectid';

import { SuperBlocks } from '../../shared/config/curriculum';
import {
  getContentConfig,
  writeBlockStructure
} from '../../curriculum/file-handler';
import { superBlockToFilename } from '../../curriculum/build-curriculum';
import { createStepFile, validateBlockName } from './utils';
import { getBaseMeta } from './helpers/get-base-meta';
import { createIntroMD } from './helpers/create-intro';
import { updateSimpleSuperblockStructure } from './helpers/create-project';

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
  void createMetaJson(block, title, helpCategory, challengeId);
  const superblockFilename = (
    superBlockToFilename as Record<SuperBlocks, string>
  )[superBlock];
  void updateSimpleSuperblockStructure(block, { order }, superblockFilename);
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
  block: string,
  title: string,
  helpCategory: string,
  challengeId: ObjectID
) {
  const newMeta = getBaseMeta('Step');
  newMeta.name = title;
  newMeta.dashedName = block;
  newMeta.helpCategory = helpCategory;
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  newMeta.challengeOrder = [{ id: challengeId.toString(), title: 'Step 1' }];

  await writeBlockStructure(block, newMeta);
}

async function createFirstChallenge(
  superBlock: SuperBlocks,
  block: string
): Promise<ObjectID> {
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
    default: SuperBlocks.RespWebDesign,
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
    name: 'order',
    message: 'Which position does this appear in the certificate?',
    default: 42,
    validate: (order: string) => {
      return parseInt(order, 10) > 0
        ? true
        : 'Order must be an number greater than zero.';
    },
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
      order
    }: CreateProjectArgs) =>
      await createProject(superBlock, block, helpCategory, order, title)
  )
  .then(() =>
    console.log(
      'All set.  Now use pnpm run clean:client in the root and it should be good to go.'
    )
  );
