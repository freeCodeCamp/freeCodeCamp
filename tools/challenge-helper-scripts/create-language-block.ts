import fs from 'fs/promises';
import path from 'path';
import { input, select } from '@inquirer/prompts';
import { format } from 'prettier';
import ObjectID from 'bson-objectid';

import {
  SuperBlocks,
  languageSuperBlocks
} from '../../shared/config/curriculum';
import {
  getContentConfig,
  writeBlockStructure
} from '../../curriculum/file-handler';
import { superBlockToFilename } from '../../curriculum/build-curriculum';
import { getBaseMeta } from './helpers/get-base-meta';
import { createIntroMD } from './helpers/create-intro';
import { createDialogueFile, validateBlockName } from './utils';
import { updateSimpleSuperblockStructure } from './helpers/create-project';

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
}

async function createLanguageBlock(
  superBlock: SuperBlocks,
  block: string,
  helpCategory: string,
  title?: string
) {
  if (!title) {
    title = block;
  }
  await updateIntroJson(superBlock, block, title);

  const challengeId = await createDialogueChallenge(superBlock, block);
  await createMetaJson(block, title, helpCategory, challengeId);
  const superblockFilename = (
    superBlockToFilename as Record<SuperBlocks, string>
  )[superBlock];
  void updateSimpleSuperblockStructure(block, { order: 0 }, superblockFilename);
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
  challengeId: ObjectID
) {
  const newMeta = getBaseMeta('Language');
  newMeta.name = title;
  newMeta.dashedName = block;
  newMeta.helpCategory = helpCategory;
  newMeta.challengeOrder = [
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    { id: challengeId.toString(), title: "Dialogue 1: I'm Tom" }
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
    const answers: CreateBlockArgs = {
      superBlock: await select({
        message: 'Which certification does this belong to?',
        choices: Object.values(languageSuperBlocks),
        default: SuperBlocks.A2English
      }),

      block: await input({
        message: 'What is the dashed name (in kebab-case) for this block?',
        validate: validateBlockName,
        transformer: (b: string) => b.toLowerCase().trim()
      }),

      title: undefined, // will set below
      helpCategory: await select({
        message: 'Choose a help category',
        choices: helpCategories,
        default: 'English'
      })
    };

    // Set title after block is known
    answers.title = await input({
      message: 'What is the title of the block?',
      default: answers.block
    });

    await createLanguageBlock(
      answers.superBlock,
      answers.block,
      answers.helpCategory,
      answers.title
    );

    console.log(
      'All set. Now use pnpm run clean:client in the root and it should be good to go.'
    );
  } catch (err) {
    console.error('Error creating language block:', err);
  }
})();
