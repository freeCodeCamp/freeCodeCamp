import fs from 'fs/promises';
import path from 'path';
import { select, input, number } from '@inquirer/prompts';
import { format } from 'prettier';
import { ObjectId } from 'bson';

import {
  SuperBlocks,
  chapterBasedSuperBlocks
} from '@freecodecamp/shared/config/curriculum';
import { BlockLayouts, BlockLabel } from '@freecodecamp/shared/config/blocks';
import {
  createBlockFolder,
  writeBlockStructure
} from '@freecodecamp/curriculum/file-handler';
import { superBlockToFilename } from '@freecodecamp/curriculum/build-curriculum';
import {
  createQuizFile,
  createStepFile,
  validateBlockName,
  getAllBlocks
} from './utils.js';
import { getBaseMeta } from './helpers/get-base-meta.js';
import { IntroJson, parseJson } from './helpers/parse-json.js';
import {
  ChapterModuleSuperblockStructure,
  updateChapterModuleSuperblockStructure,
  updateSimpleSuperblockStructure
} from './helpers/create-project.js';
import { withTrace } from './helpers/utils.js';

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

  const challengeId = new ObjectId();

  if (projectArgs.blockLabel === BlockLabel.quiz) {
    if (projectArgs.questionCount == null) {
      throw new Error(
        'Property `questionCount` is null when creating new Quiz Challenge'
      );
    }
    await createMetaJson(
      projectArgs.superBlock,
      projectArgs.block,
      projectArgs.title,
      projectArgs.helpCategory,
      challengeId
    );
    await createQuizChallenge({
      challengeId,
      block: projectArgs.block,
      title: projectArgs.title,
      questionCount: projectArgs.questionCount
    });
  } else {
    await createMetaJson(
      projectArgs.superBlock,
      projectArgs.block,
      projectArgs.title,
      projectArgs.helpCategory,
      challengeId,
      projectArgs.order,
      projectArgs.blockLabel,
      projectArgs.blockLayout
    );
    await createFirstChallenge({ block: projectArgs.block, challengeId });
  }

  if (
    (chapterBasedSuperBlocks.includes(projectArgs.superBlock) &&
      projectArgs.blockLabel) == null
  ) {
    throw new Error(
      'Missing argument: blockLabel when updating intro markdown'
    );
  }
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

async function createFirstChallenge({
  block,
  challengeId
}: {
  block: string;
  challengeId: ObjectId;
}) {
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
  createStepFile({
    challengeId,
    projectPath: await createBlockFolder(block),
    stepNum: 1,
    challengeType: 0,
    challengeSeeds,
    isFirstChallenge: true
  });
}

async function createQuizChallenge({
  challengeId,
  block,
  title,
  questionCount
}: {
  challengeId: ObjectId;
  block: string;
  title: string;
  questionCount: number;
}): Promise<ObjectId> {
  return createQuizFile({
    challengeId,
    projectPath: await createBlockFolder(block),
    title: title,
    dashedName: block,
    questionCount: questionCount
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
  .then(async existingBlocks => {
    const superBlock = await select<SuperBlocks>({
      message: 'Which certification does this belong to?',
      default: SuperBlocks.RespWebDesignV9,
      choices: Object.values(SuperBlocks).map(value => ({
        name: value,
        value
      }))
    });

    const rawBlock = await input({
      message: 'What is the dashed name (in kebab-case) for this project?',
      validate: (value: string) => validateBlockName(value, existingBlocks)
    });

    const block = rawBlock.toLowerCase().trim();

    const title = await input({
      message: 'Enter a title for this project:',
      default: block
    });

    const helpCategory = await select<string>({
      message: 'Choose a help category',
      default: 'HTML-CSS',
      choices: helpCategories.map(value => ({
        name: value,
        value
      }))
    });

    let blockLabel: BlockLabel | undefined;
    let blockLayout: BlockLayouts | undefined;
    let questionCount: number | undefined;
    let chapter: string | undefined;
    let module: string | undefined;
    let position: number | undefined;
    let order: number | undefined;

    if (chapterBasedSuperBlocks.includes(superBlock)) {
      blockLabel = await select<BlockLabel>({
        message: 'Choose a block label',
        default: BlockLabel.lab,
        choices: Object.values(BlockLabel).map(value => ({
          name: value,
          value
        }))
      });

      blockLayout = await select<BlockLayouts>({
        message: 'Choose a block layout',
        default:
          blockLabel === BlockLabel.quiz
            ? BlockLayouts.Link
            : BlockLayouts.ChallengeList,
        choices: Object.values(BlockLayouts).map(value => ({
          name: value,
          value
        }))
      });

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

      const chapters = await getChapters(superBlock);
      chapter = await select({
        message: 'What chapter should this project go in?',
        choices: chapters.map(x => ({
          name: x.dashedName,
          value: x.dashedName
        }))
      });

      const modules = await getModules(superBlock, chapter);
      module = await select({
        message: 'What module should this project go in?',
        choices: modules!.map(x => ({
          name: x.dashedName,
          value: x.dashedName
        }))
      });

      position = await number({
        message: 'At which position does this appear in the module?',
        default: 1,
        validate: (value: number | undefined) =>
          value && value > 0
            ? true
            : 'Position must be a number greater than zero.'
      });
    } else {
      order = await number({
        message: 'Which position does this appear in the certificate?',
        default: 42,
        validate: (value: number | undefined) =>
          value && value > 0
            ? true
            : 'Order must be a number greater than zero.'
      });
    }

    return {
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
    };
  })
  .then(async (answers: CreateProjectArgs) => {
    await createProject(answers);
  })
  .then(() => console.log('All set.  Refresh the page to see the changes.'))
  .catch((err: unknown) =>
    console.error(
      'Error creating project:',
      err instanceof Error ? err.message : String(err)
    )
  );
