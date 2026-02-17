import fs from 'fs/promises';
import path from 'path';
import { select, input } from '@inquirer/prompts';
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

const CREATE_NEW_CHAPTER = '-- Create new chapter --';
const CREATE_NEW_MODULE = '-- Create new module --';

void getAllBlocks()
  .then(async existingBlocks => {
    const superBlock = await select<SuperBlocks>({
      message: 'Which certification does this belong to?',
      default: SuperBlocks.A2English,
      choices: Object.values(languageSuperBlocks).map(sb => ({
        name: sb,
        value: sb
      }))
    });

    const blockLabel = await select<BlockLabel>({
      message: 'Choose a block label',
      default: BlockLabel.learn,
      choices: Object.values(BlockLabel).map(bl => ({ name: bl, value: bl }))
    });

    const prefix = getBlockPrefix(superBlock, blockLabel);
    const blockMessage = prefix
      ? `Complete the dashed name after the prefix below.\nPrefix: ${prefix}`
      : 'What is the dashed name (in kebab-case) for this block?';

    const rawBlock = await input({
      message: blockMessage,
      validate: (block: string) => {
        const normalized = block.toLowerCase().trim();
        const fullName = prefix
          ? (normalized.startsWith(prefix)
              ? normalized
              : prefix + normalized)
          : normalized;

        if (prefix) {
          const uniquePart = fullName.slice(prefix.length);

          // Check if user accidentally included block label at the end
          if (blockLabel) {
            // Exclude exam as it is an exception
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
        }

        return validateBlockName(fullName, existingBlocks);
      }
    });
    const normalizedBlock = rawBlock.toLowerCase().trim();
    const block = prefix
      ? (normalizedBlock.startsWith(prefix)
          ? normalizedBlock
          : prefix + normalizedBlock)
      : normalizedBlock;

    const title = await input({
      message: 'What is the title of this block?',
      default: block
    });

    const helpCategory = await select<string>({
      message: 'Choose a help category',
      default: 'English',
      choices: helpCategories.map(hc => ({ name: hc, value: hc }))
    });

    const isChapterBased = chapterBasedSuperBlocks.includes(superBlock);

    let blockLayout: string | undefined;
    let questionCount: number | undefined;
    let chapter: string | undefined;
    let newChapterName: string | undefined;
    let newChapterTitle: string | undefined;
    let module: string | undefined;
    let newModuleName: string | undefined;
    let newModuleTitle: string | undefined;
    let position: number | undefined;

    if (isChapterBased && blockLabel !== BlockLabel.quiz) {
      blockLayout = await select<string>({
        message: 'Choose a block layout',
        default: BlockLayouts.DialogueGrid,
        choices: Object.values(BlockLayouts).map(bl => ({
          name: bl as string,
          value: bl as string
        }))
      });
    }

    if (blockLabel === BlockLabel.quiz) {
      questionCount = await select<number>({
        message: 'Choose a question count',
        default: 20,
        choices: [
          { name: '10', value: 10 },
          { name: '20', value: 20 }
        ]
      });
    }

    if (isChapterBased) {
      const superblockFilename = (
        superBlockToFilename as Record<SuperBlocks, string>
      )[superBlock];
      const structure = getSuperblockStructure(superblockFilename) as {
        chapters: {
          dashedName: string;
          modules: { dashedName: string; blocks: string[] }[];
        }[];
      };

      chapter = await select<string>({
        message: 'What chapter should this language block go in?',
        choices: [
          ...structure.chapters.map(ch => ({
            name: ch.dashedName,
            value: ch.dashedName
          })),
          { name: CREATE_NEW_CHAPTER, value: CREATE_NEW_CHAPTER }
        ]
      });

      if (chapter === CREATE_NEW_CHAPTER) {
        newChapterName = await input({
          message:
            'Enter the dashed name for the new chapter (in kebab-case):',
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
        newChapterName = newChapterName.toLowerCase().trim();

        newChapterTitle = await input({
          message: 'Enter the title for the new chapter:',
          default: newChapterName,
          validate: (t: string) => {
            if (!t || t.trim() === '') {
              return 'Chapter title cannot be empty.';
            }
            return true;
          }
        });
      }

      const resolvedChapter =
        chapter === CREATE_NEW_CHAPTER ? newChapterName! : chapter;

      let moduleChoices: { name: string; value: string }[];
      if (chapter === CREATE_NEW_CHAPTER) {
        moduleChoices = [
          { name: CREATE_NEW_MODULE, value: CREATE_NEW_MODULE }
        ];
      } else {
        const existingModules =
          structure.chapters
            .find(ch => ch.dashedName === chapter)
            ?.modules.map(m => m.dashedName) ?? [];
        moduleChoices = [
          ...existingModules.map(m => ({ name: m, value: m })),
          { name: CREATE_NEW_MODULE, value: CREATE_NEW_MODULE }
        ];
      }

      module = await select<string>({
        message: 'What module should this language block go in?',
        choices: moduleChoices
      });

      if (module === CREATE_NEW_MODULE) {
        newModuleName = await input({
          message:
            'Enter the dashed name for the new module (in kebab-case):',
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
        newModuleName = newModuleName.toLowerCase().trim();

        newModuleTitle = await input({
          message: 'Enter the title for the new module:',
          default: newModuleName,
          validate: (t: string) => {
            if (!t || t.trim() === '') {
              return 'Module title cannot be empty.';
            }
            return true;
          }
        });
      }

      const rawPosition = await input({
        message:
          'At which position does this new block appear in the module?',
        default: '1',
        validate: (pos: string) => {
          return parseInt(pos, 10) > 0
            ? true
            : 'Position must be an number greater than zero.';
        }
      });
      position = parseInt(rawPosition, 10);

      // Resolve the final chapter/module values
      chapter = resolvedChapter;
      module =
        module === CREATE_NEW_MODULE ? newModuleName! : module;
    }

    const chapterTitle =
      chapter !== newChapterName ? undefined : newChapterTitle;
    const moduleTitle =
      module !== newModuleName ? undefined : newModuleTitle;

    await createLanguageBlock(
      superBlock,
      block,
      helpCategory,
      title,
      chapter,
      module,
      chapterTitle,
      moduleTitle,
      position,
      blockLabel,
      blockLayout,
      questionCount
    );
  })
  .then(() =>
    console.log(
      'All set.  Now use pnpm run clean:client in the root and it should be good to go.'
    )
  );
