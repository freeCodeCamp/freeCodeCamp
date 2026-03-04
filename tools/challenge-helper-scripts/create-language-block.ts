import fs from 'fs/promises';
import path from 'path';
import { select, input, number } from '@inquirer/prompts';
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
  const challengeId: ObjectId = new ObjectId();

  await createMetaJson(
    block,
    title,
    helpCategory,
    challengeId,
    blockLabel,
    blockLayout
  );

  if (blockLabel === BlockLabel.quiz) {
    await createQuizChallenge(
      challengeId,
      block,
      title,
      questionCount!,
      challengeLang
    );
    blockLayout = BlockLayouts.Link;
  } else {
    await createDialogueChallenge(challengeId, block, challengeLang);
  }

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
  challengeId: ObjectId,
  block: string,
  challengeLang: string
): Promise<ObjectId> {
  const { blockContentDir } = getContentConfig('english') as {
    blockContentDir: string;
  };

  const newChallengeDir = path.resolve(blockContentDir, block);
  await fs.mkdir(newChallengeDir, { recursive: true });

  return createDialogueFile({
    challengeId,
    projectPath: newChallengeDir + '/',
    challengeLang: challengeLang
  });
}

async function createQuizChallenge(
  challengeId: ObjectId,
  block: string,
  title: string,
  questionCount: number,
  challengeLang: string
): Promise<ObjectId> {
  return createQuizFile({
    challengeId,
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
  .then(async existingBlocks => {
    const superBlock = await select<SuperBlocks>({
      message: 'Which certification does it this belong to?',
      default: SuperBlocks.A2English,
      choices: Object.values(languageSuperBlocks).map(value => ({
        name: value,
        value
      }))
    });

    const blockLabel = await select<BlockLabel>({
      message: 'Choose a block label',
      default: BlockLabel.learn,
      choices: Object.values(BlockLabel).map(value => ({
        name: value,
        value
      }))
    });

    const prefix = getBlockPrefix(superBlock, blockLabel);

    const rawBlock = await input({
      message: prefix
        ? `Complete the dashed name after the prefix below.\nPrefix: ${prefix}`
        : 'What is the dashed name (in kebab-case) for this block?',

      validate: (value: string) => {
        if (prefix) {
          const uniquePart = value.slice(prefix.length);

          const blockLabelValues = Object.values(BlockLabel).filter(
            label => label !== BlockLabel.exam
          );

          const endsWithLabel = blockLabelValues.some(label =>
            uniquePart.endsWith(`-${label}`)
          );

          if (endsWithLabel) {
            return `Block name should not end with a block label (e.g., '-${blockLabel}'). The label is already in the prefix.`;
          }
        }

        return validateBlockName(value, existingBlocks);
      }
    });

    const block = prefix
      ? `${prefix}${rawBlock.toLowerCase().trim()}`
      : rawBlock.toLowerCase().trim();

    const title = await input({
      message: 'Enter a title for this block:',
      default: block
    });

    const helpCategory = await select<string>({
      message: 'Choose a help category',
      default: 'English',
      choices: helpCategories.map(value => ({
        name: value,
        value
      }))
    });

    let blockLayout: string | undefined;

    if (
      chapterBasedSuperBlocks.includes(superBlock) &&
      blockLabel !== BlockLabel.quiz
    ) {
      blockLayout = await select<BlockLayouts>({
        message: 'Choose a block layout',
        default: BlockLayouts.DialogueGrid,
        choices: Object.values(BlockLayouts).map(value => ({
          name: value,
          value
        }))
      });
    }

    let questionCount: number | undefined;

    if (blockLabel === BlockLabel.quiz) {
      questionCount = await select<number>({
        message: 'Choose a question count',
        default: 20,
        choices: [
          { value: 10, name: '10' },
          { value: 20, name: '20' }
        ]
      });
    }

    let chapter: string | undefined;

    if (chapterBasedSuperBlocks.includes(superBlock)) {
      const superblockFilename = (
        superBlockToFilename as Record<SuperBlocks, string>
      )[superBlock];

      const structure = getSuperblockStructure(superblockFilename) as {
        chapters: {
          dashedName: string;
          modules: { dashedName: string; blocks: string[] }[];
        }[];
      };

      chapter = await select({
        message: 'What chapter should this language block go in?',
        choices: [
          ...structure.chapters.map(ch => ({
            value: ch.dashedName,
            name: ch.dashedName
          })),
          {
            value: '-- Create new chapter --',
            name: '-- Create new chapter --'
          }
        ]
      });
    }

    let newChapterName: string | undefined;

    if (
      chapterBasedSuperBlocks.includes(superBlock) &&
      chapter === '-- Create new chapter --'
    ) {
      const rawName = await input({
        message: 'Enter the dashed name for the new chapter (in kebab-case):',
        validate: (name: string) => {
          if (!name || name.trim() === '') {
            return 'Chapter name cannot be empty.';
          }

          if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name.trim())) {
            return 'Chapter name must be in kebab-case (e.g., "chapter-one").';
          }

          return true;
        }
      });

      newChapterName = rawName.toLowerCase().trim();
    }

    let newChapterTitle: string | undefined;

    if (
      chapterBasedSuperBlocks.includes(superBlock) &&
      chapter === '-- Create new chapter --'
    ) {
      newChapterTitle = await input({
        message: 'Enter the title for the new chapter:',
        default: newChapterName,
        validate: (title: string) => {
          if (!title || title.trim() === '') {
            return 'Chapter title cannot be empty.';
          }
          return true;
        }
      });
    }

    let module: string | undefined;

    if (chapterBasedSuperBlocks.includes(superBlock)) {
      const superblockFilename = (
        superBlockToFilename as Record<SuperBlocks, string>
      )[superBlock];

      const structure = getSuperblockStructure(superblockFilename) as {
        chapters: {
          dashedName: string;
          modules: { dashedName: string; blocks: string[] }[];
        }[];
      };

      let moduleChoices: { value: string; name: string }[];

      if (chapter === '-- Create new chapter --') {
        moduleChoices = [
          {
            value: '-- Create new module --',
            name: '-- Create new module --'
          }
        ];
      } else {
        const existingModules =
          structure.chapters
            .find(ch => ch.dashedName === chapter)
            ?.modules.map(m => m.dashedName) ?? [];

        moduleChoices = [
          ...existingModules.map(m => ({
            value: m,
            name: m
          })),
          {
            value: '-- Create new module --',
            name: '-- Create new module --'
          }
        ];
      }

      module = await select({
        message: 'What module should this language block go in?',
        choices: moduleChoices
      });
    }

    let newModuleName: string | undefined;

    if (
      chapterBasedSuperBlocks.includes(superBlock) &&
      module === '-- Create new module --'
    ) {
      const rawName = await input({
        message: 'Enter the dashed name for the new module (in kebab-case):',
        validate: (name: string) => {
          if (!name || name.trim() === '') {
            return 'Module name cannot be empty.';
          }

          if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name.trim())) {
            return 'Module name must be in kebab-case (e.g., "module-one").';
          }

          return true;
        }
      });

      newModuleName = rawName.toLowerCase().trim();
    }

    let newModuleTitle: string | undefined;

    if (
      chapterBasedSuperBlocks.includes(superBlock) &&
      module === '-- Create new module --'
    ) {
      newModuleTitle = await input({
        message: 'Enter the title for the new module:',
        default: newModuleName,
        validate: (title: string) => {
          if (!title || title.trim() === '') {
            return 'Module title cannot be empty.';
          }
          return true;
        }
      });
    }

    let position: number | undefined;

    if (chapterBasedSuperBlocks.includes(superBlock)) {
      position = await number({
        message: 'At which position does this new block appear in the module?',
        default: 1,
        validate: (value: number | undefined) => {
          if (!value || value <= 0) {
            return 'Position must be a number greater than zero.';
          }
          return true;
        }
      });
    }

    return {
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
    };
  })
  .then(async (answers: CreateBlockArgs) => {
    const {
      superBlock,
      block,
      helpCategory,
      title,
      chapter,
      module,
      newChapterName,
      newModuleTitle,
      newChapterTitle,
      newModuleName,
      position,
      blockLabel,
      blockLayout,
      questionCount
    } = answers;

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
  })
  .then(() => console.log('All set.  Refresh the page to see the changes.'))
  .catch((err: unknown) =>
    console.error(
      'Error creating language block:',
      err instanceof Error ? err.message : String(err)
    )
  );
