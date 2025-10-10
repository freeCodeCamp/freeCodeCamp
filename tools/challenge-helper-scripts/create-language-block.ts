import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { input, select } from '@inquirer/prompts';
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

    // Set title after block is known
    answers.title = await input({
      message: 'What is the title of the block?',
      default: answers.block
    });

    // Set new fields conditionally
    if (chapterBasedSuperBlocks.includes(answers.superBlock)) {
      answers.blockType = await select({
        message: 'Choose a block type',
        choices: Object.values(BlockTypes),
        default: BlockTypes.learn
      });

      if (answers.blockType !== BlockTypes.quiz) {
        answers.blockLayout = await select({
          message: 'Choose a block layout',
          choices: Object.values(BlockLayouts),
          default: BlockLayouts.DialogueGrid
        });
      }

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

      const superblockFilename = (
        superBlockToFilename as Record<SuperBlocks, string>
      )[answers.superBlock];
      const structure = getSuperblockStructure(superblockFilename) as {
        chapters: {
          dashedName: string;
          modules: { dashedName: string; blocks: string[] }[];
        }[];
      };

      answers.chapter = await select({
        message: 'What chapter should this language block go in?',
        choices: structure.chapters.map(ch => ch.dashedName)
      });

      const chapterData = structure.chapters.find(
        ch => ch.dashedName === answers.chapter
      );
      answers.module = await select({
        message: 'What module should this language block go in?',
        choices: chapterData?.modules.map(m => m.dashedName) ?? []
      });

      answers.position = parseInt(
        await input({
          message: 'At which position does this appear in the module?',
          default: '1',
          validate: (pos: string) =>
            parseInt(pos, 10) > 0
              ? true
              : 'Position must be a number greater than zero.'
        })
      );
    }

    await createLanguageBlock(
      answers.superBlock,
      answers.block,
      answers.helpCategory,
      answers.title,
      answers.chapter,
      answers.module,
      answers.position,
      answers.blockType,
      answers.blockLayout,
      answers.questionCount
    );

    console.log(
      'All set. Now use pnpm run clean:client in the root and it should be good to go.'
    );
  } catch (err) {
    console.error('Error creating language block:', err);
  }
})();
