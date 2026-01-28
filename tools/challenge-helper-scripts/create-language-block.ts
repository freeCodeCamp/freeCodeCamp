import fs from 'fs/promises';
import path from 'path';
import { prompt } from 'inquirer';
import { format } from 'prettier';
import { ObjectId } from 'bson';

import {
  SuperBlocks,
  languageSuperBlocks,
  chapterBasedSuperBlocks
} from '@freecodecamp/shared/config/curriculum';

import { BlockLayouts, BlockLabel } from '@freecodecamp/shared/config/blocks';
import {
  getContentConfig,
  writeBlockStructure,
  createBlockFolder,
  getSuperblockStructure
} from '@freecodecamp/curriculum/file-handler';
import { superBlockToFilename } from '@freecodecamp/curriculum/build-curriculum';
import { getBaseMeta } from './helpers/get-base-meta.js';
import { createIntroMD } from './helpers/create-intro.js';
import {
  createDialogueFile,
  createQuizFile,
  getAllBlocks,
  validateBlockName
} from './utils.js';
import {
  updateSimpleSuperblockStructure,
  updateChapterModuleSuperblockStructure
} from './helpers/create-project.js';
import { getLangFromSuperBlock } from './helpers/get-lang-from-superblock.js';

const helpCategories = [
  'English',
  'Chinese Curriculum',
  'Spanish Curriculum'
] as const;

type BlockInfo = {
  title: string;
  intro: string[];
};

type SuperBlockInfo = {
  blocks: Record<string, BlockInfo>;
  chapters?: Record<string, string>;
  modules?: Record<string, string>;
  'module-intros'?: Record<string, { intro: string[]; note: string }>;
};

type IntroJson = Record<SuperBlocks, SuperBlockInfo>;

interface CreateBlockArgs {
  superBlock: SuperBlocks;
  block: string;
  helpCategory: string;
  title?: string;
  chapter?: string;
  module?: string;
  newChapterName?: string;
  newChapterTitle?: string;
  newModuleName?: string;
  newModuleTitle?: string;
  position?: number;
  blockLabel?: BlockLabel;
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
  chapterTitle?: string,
  moduleTitle?: string,
  position?: number,
  blockLabel?: BlockLabel,
  blockLayout?: string,
  questionCount?: number
) {
  if (!title) {
    title = block;
  }
  await updateIntroJson({
    superBlock,
    block,
    title,
    chapter,
    module,
    chapterTitle,
    moduleTitle
  });

  const challengeLang = getLangFromSuperBlock(superBlock);
  let challengeId: ObjectId;

  if (blockLabel === BlockLabel.quiz) {
    challengeId = await createQuizChallenge(
      block,
      title,
      questionCount!,
      challengeLang
    );
    blockLayout = BlockLayouts.Link;
  } else {
    challengeId = await createDialogueChallenge(
      superBlock,
      block,
      challengeLang
    );
  }

  await createMetaJson(
    block,
    title,
    helpCategory,
    challengeId,
    blockLabel,
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

async function updateIntroJson({
  superBlock,
  block,
  title,
  chapter,
  module,
  chapterTitle,
  moduleTitle
}: {
  superBlock: SuperBlocks;
  block: string;
  title: string;
  chapter?: string;
  module?: string;
  chapterTitle?: string;
  moduleTitle?: string;
}) {
  const introJsonPath = path.resolve(
    __dirname,
    '../../client/i18n/locales/english/intro.json'
  );
  const newIntro = await parseJson<IntroJson>(introJsonPath);

  newIntro[superBlock].blocks[block] = {
    title,
    intro: ['', '']
  };

  if (chapter && chapterTitle) {
    if (!newIntro[superBlock].chapters) {
      newIntro[superBlock].chapters = {};
    }
    if (!newIntro[superBlock].chapters[chapter]) {
      newIntro[superBlock].chapters[chapter] = chapterTitle;
    }
  }

  if (module && moduleTitle) {
    if (!newIntro[superBlock].modules) {
      newIntro[superBlock].modules = {};
    }
    if (!newIntro[superBlock].modules[module]) {
      newIntro[superBlock].modules[module] = moduleTitle;
    }

    if (!newIntro[superBlock]['module-intros']) {
      newIntro[superBlock]['module-intros'] = {};
    }
    if (!newIntro[superBlock]['module-intros'][module]) {
      newIntro[superBlock]['module-intros'][module] = {
        note: '',
        intro: ['']
      };
    }
  }

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
  challengeId: ObjectId,
  blockLabel?: BlockLabel,
  blockLayout?: string
) {
  const newMeta = getBaseMeta('Language');
  newMeta.name = title;
  newMeta.dashedName = block;
  newMeta.helpCategory = helpCategory;

  if (blockLabel) {
    newMeta.blockLabel = blockLabel;
  }
  if (blockLayout) {
    newMeta.blockLayout = blockLayout;
  }

  const challengeTitle =
    blockLabel === BlockLabel.quiz ? title : "Dialogue 1: I'm Tom";

  newMeta.challengeOrder = [
    {
      id: challengeId.toString(),
      title: challengeTitle
    }
  ];

  await writeBlockStructure(block, newMeta);
}

async function createDialogueChallenge(
  superBlock: SuperBlocks,
  block: string,
  challengeLang: string
): Promise<ObjectId> {
  const { blockContentDir } = getContentConfig('english') as {
    blockContentDir: string;
  };

  const newChallengeDir = path.resolve(blockContentDir, block);
  await fs.mkdir(newChallengeDir, { recursive: true });

  return createDialogueFile({
    projectPath: newChallengeDir + '/',
    challengeLang: challengeLang
  });
}

async function createQuizChallenge(
  block: string,
  title: string,
  questionCount: number,
  challengeLang: string
): Promise<ObjectId> {
  return createQuizFile({
    projectPath: await createBlockFolder(block),
    title: title,
    dashedName: block,
    questionCount: questionCount,
    challengeLang
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

function getBlockPrefix(
  superBlock: SuperBlocks,
  blockLabel?: BlockLabel
): string | null {
  // Only chapter-based super blocks use blockLabel so prefix only applies to them.
  if (!chapterBasedSuperBlocks.includes(superBlock)) return null;

  let langLevel;

  switch (superBlock) {
    case SuperBlocks.A2English:
      langLevel = 'en-a2';
      break;
    case SuperBlocks.B1English:
      langLevel = 'en-b1';
      break;
    case SuperBlocks.A1Spanish:
      langLevel = 'es-a1';
      break;
    case SuperBlocks.A2Spanish:
      langLevel = 'es-a2';
      break;
    case SuperBlocks.A1Chinese:
      langLevel = 'zh-a1';
      break;
    case SuperBlocks.A2Chinese:
      langLevel = 'zh-a2';
      break;
    default:
      langLevel = superBlock;
  }

  if (blockLabel === BlockLabel.exam) {
    return `${langLevel}-`;
  }

  return `${langLevel}-${blockLabel}-`;
}

void getAllBlocks()
  .then(existingBlocks =>
    prompt([
      {
        name: 'superBlock',
        message: 'Which certification does this belong to?',
        default: SuperBlocks.A2English,
        type: 'list',
        choices: Object.values(languageSuperBlocks)
      },
      {
        name: 'blockLabel',
        message: 'Choose a block label',
        default: BlockLabel.learn,
        type: 'list',
        choices: Object.values(BlockLabel)
      },
      {
        name: 'block',
        message: (answers: CreateBlockArgs) => {
          const prefix = getBlockPrefix(answers.superBlock, answers.blockLabel);
          return prefix
            ? `Complete the dashed name after the prefix below.\nPrefix: ${prefix}`
            : 'What is the dashed name (in kebab-case) for this block?';
        },
        validate: (block: string, answers: CreateBlockArgs) => {
          const prefix = getBlockPrefix(answers.superBlock, answers.blockLabel);

          if (prefix) {
            const uniquePart = block.slice(prefix.length);

            // Check if user accidentally included block label at the end
            if (answers.blockLabel) {
              // Exclude exam as it is an exception
              const blockLabelValues = Object.values(BlockLabel).filter(
                label => label !== BlockLabel.exam
              );

              const endsWithLabel = blockLabelValues.some(label =>
                uniquePart.endsWith(`-${label}`)
              );

              if (endsWithLabel) {
                return `Block name should not end with a block label (e.g., '-${answers.blockLabel}'). The label is already in the prefix.`;
              }
            }
          }

          return validateBlockName(block, existingBlocks);
        },
        filter: (block: string, answers: CreateBlockArgs) => {
          const prefix = getBlockPrefix(answers.superBlock, answers.blockLabel);
          const normalized = block.toLowerCase().trim();

          if (prefix) {
            // Strip prefix if already present (happens on re-validation), then re-add it
            const withoutPrefix = normalized.startsWith(prefix)
              ? normalized.slice(prefix.length)
              : normalized;
            return prefix + withoutPrefix;
          }

          return normalized;
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
        name: 'blockLayout',
        message: 'Choose a block layout',
        default: BlockLayouts.DialogueGrid,
        type: 'list',
        choices: Object.values(BlockLayouts),
        when: (answers: CreateBlockArgs) =>
          chapterBasedSuperBlocks.includes(answers.superBlock) &&
          answers.blockLabel !== BlockLabel.quiz
      },
      {
        name: 'questionCount',
        message: 'Choose a question count',
        default: 20,
        type: 'list',
        choices: [10, 20],
        when: (answers: CreateBlockArgs) =>
          answers.blockLabel === BlockLabel.quiz
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
          return [
            ...structure.chapters.map(chapter => chapter.dashedName),
            '-- Create new chapter --'
          ];
        },
        when: (answers: CreateBlockArgs) =>
          chapterBasedSuperBlocks.includes(answers.superBlock)
      },
      {
        name: 'newChapterName',
        message: 'Enter the dashed name for the new chapter (in kebab-case):',
        validate: (name: string) => {
          if (!name || name.trim() === '') {
            return 'Chapter name cannot be empty.';
          }
          if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name.trim())) {
            return 'Chapter name must be in kebab-case (e.g., "chapter-one").';
          }
          return true;
        },
        filter: (name: string) => name.toLowerCase().trim(),
        when: (answers: CreateBlockArgs) =>
          chapterBasedSuperBlocks.includes(answers.superBlock) &&
          answers.chapter === '-- Create new chapter --'
      },
      {
        name: 'newChapterTitle',
        message: 'Enter the title for the new chapter:',
        default: ({ newChapterName }: { newChapterName: string }) =>
          newChapterName,
        validate: (title: string) => {
          if (!title || title.trim() === '') {
            return 'Chapter title cannot be empty.';
          }
          return true;
        },
        when: (answers: CreateBlockArgs) =>
          chapterBasedSuperBlocks.includes(answers.superBlock) &&
          answers.chapter === '-- Create new chapter --'
      },
      {
        name: 'module',
        message: 'What module should this language block go in?',
        type: 'list',
        choices: (answers: CreateBlockArgs) => {
          if (answers.chapter === '-- Create new chapter --') {
            return ['-- Create new module --'];
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
          const existingModules =
            structure.chapters
              .find(chapter => chapter.dashedName === answers.chapter)
              ?.modules.map(module => module.dashedName) ?? [];
          return [...existingModules, '-- Create new module --'];
        },
        when: (answers: CreateBlockArgs) =>
          chapterBasedSuperBlocks.includes(answers.superBlock)
      },
      {
        name: 'newModuleName',
        message: 'Enter the dashed name for the new module (in kebab-case):',
        validate: (name: string) => {
          if (!name || name.trim() === '') {
            return 'Module name cannot be empty.';
          }
          if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name.trim())) {
            return 'Module name must be in kebab-case (e.g., "module-one").';
          }
          return true;
        },
        filter: (name: string) => name.toLowerCase().trim(),
        when: (answers: CreateBlockArgs) =>
          chapterBasedSuperBlocks.includes(answers.superBlock) &&
          answers.module === '-- Create new module --'
      },
      {
        name: 'newModuleTitle',
        message: 'Enter the title for the new module:',
        default: ({ newModuleName }: { newModuleName: string }) =>
          newModuleName,
        validate: (title: string) => {
          if (!title || title.trim() === '') {
            return 'Module title cannot be empty.';
          }
          return true;
        },
        when: (answers: CreateBlockArgs) =>
          chapterBasedSuperBlocks.includes(answers.superBlock) &&
          answers.module === '-- Create new module --'
      },
      {
        name: 'position',
        message: 'At which position does this new block appear in the module?',
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
  )
  .then(
    async ({
      superBlock,
      block,
      helpCategory,
      title,
      chapter,
      module,
      newChapterName,
      newChapterTitle,
      newModuleName,
      newModuleTitle,
      position,
      blockLabel,
      blockLayout,
      questionCount
    }: CreateBlockArgs) => {
      const resolvedChapter =
        chapter === '-- Create new chapter --' ? newChapterName : chapter;
      const resolvedModule =
        module === '-- Create new module --' ? newModuleName : module;

      // Only pass chapter title if we're creating a new chapter
      const chapterTitle =
        chapter === '-- Create new chapter --' ? newChapterTitle : undefined;
      // Only pass module title if we're creating a new module
      const moduleTitle =
        module === '-- Create new module --' ? newModuleTitle : undefined;

      await createLanguageBlock(
        superBlock,
        block,
        helpCategory,
        title,
        resolvedChapter,
        resolvedModule,
        chapterTitle,
        moduleTitle,
        position,
        blockLabel,
        blockLayout,
        questionCount
      );
    }
  )
  .then(() =>
    console.log(
      'All set.  Now use pnpm run clean:client in the root and it should be good to go.'
    )
  );
