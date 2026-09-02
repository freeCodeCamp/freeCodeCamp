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
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import {
  createBlockFolder,
  writeBlockStructure
} from '@freecodecamp/curriculum/file-handler';
import { superBlockToFilename } from '@freecodecamp/curriculum/build-curriculum';
import {
  createQuizFile,
  createLabFile,
  createReviewFile,
  createStepFile,
  validateBlockName,
  getAllBlocks
} from './utils.js';
import { parseIntroJson } from './helpers/parse-json.js';
import {
  ChapterModuleSuperblockStructure,
  updateChapterModuleSuperblockStructure,
  updateSimpleSuperblockStructure
} from './helpers/create-project.js';
import { withTrace } from './helpers/utils.js';
import {
  buildProjectMeta,
  getDefaultBlockLayout
} from './helpers/project-type.js';
import {
  getProjectChallengeType,
  getProjectSeedFiles,
  isProjectContentType,
  projectContentTypeChoices,
  type ProjectContentType
} from './helpers/project-content-type.js';

const helpCategories = [
  'HTML-CSS',
  'JavaScript',
  'Backend Development',
  'Python',
  'English',
  'Odin',
  'Euler',
  'Rosetta',
  'General'
] as const;

interface CreateProjectArgs {
  superBlock: SuperBlocks;
  block: string;
  helpCategory: string;
  blockLabel?: BlockLabel;
  blockLayout?: BlockLayouts;
  projectContentType?: ProjectContentType;
  questionCount?: number;
  order?: number;
  chapter?: string;
  position?: number;
  module?: string;
  title?: string;
}

async function createProject(projectArgs: CreateProjectArgs) {
  const title = projectArgs.title ?? projectArgs.block;
  const order = projectArgs.order;
  const chapter = projectArgs.chapter;
  const module = projectArgs.module;
  const position = projectArgs.position;
  const questionCount = projectArgs.questionCount;
  const projectContentType = projectArgs.projectContentType;
  const isChapterBased = chapterBasedSuperBlocks.includes(
    projectArgs.superBlock
  );

  if (isChapterBased && (!projectArgs.blockLabel || !projectArgs.blockLayout)) {
    throw new Error(
      'Missing one of the following arguments: blockLabel, blockLayout'
    );
  }

  const createChallenge = (() => {
    switch (projectArgs.blockLabel) {
      case BlockLabel.quiz: {
        if (questionCount == null) {
          throw new Error(
            'Property `questionCount` is null when creating new Quiz Challenge'
          );
        }
        return (challengeId: ObjectId) =>
          createQuizChallenge({
            challengeId,
            block: projectArgs.block,
            title,
            questionCount
          });
      }
      case BlockLabel.lab: {
        if (!isProjectContentType(projectContentType)) {
          throw new Error(
            'Property `projectContentType` is invalid when creating new Lab Challenge'
          );
        }
        return (challengeId: ObjectId) =>
          createLabChallenge({
            challengeId,
            block: projectArgs.block,
            title,
            challengeType: getProjectChallengeType(
              BlockLabel.lab,
              projectContentType
            ),
            contentType: projectContentType
          });
      }
      case BlockLabel.workshop: {
        if (!isProjectContentType(projectContentType)) {
          throw new Error(
            'Property `projectContentType` is invalid when creating new Workshop Challenge'
          );
        }
        return (challengeId: ObjectId) =>
          createFirstChallenge({
            block: projectArgs.block,
            challengeId,
            title,
            challengeType: getProjectChallengeType(
              BlockLabel.workshop,
              projectContentType
            ),
            contentType: projectContentType
          });
      }
      case BlockLabel.review:
        return (challengeId: ObjectId) =>
          createReviewChallenge({
            challengeId,
            block: projectArgs.block,
            title
          });
      default:
        return (challengeId: ObjectId) =>
          createFirstChallenge({
            block: projectArgs.block,
            challengeId,
            title,
            challengeType: challengeTypes.html,
            contentType: 'html'
          });
    }
  })();

  const superblockFilename = (
    superBlockToFilename as Record<SuperBlocks, string>
  )[projectArgs.superBlock];

  if (isChapterBased) {
    if (!chapter || !module || typeof position == 'undefined') {
      throw Error(
        'Missing one of the following arguments: chapter, module, position'
      );
    }
    await updateChapterModuleSuperblockStructure(
      projectArgs.block,
      // Convert human-friendly (1-based) position to 0-based index for insertion.
      { order: position - 1, chapter, module },
      superblockFilename
    );
  } else {
    if (typeof order == 'undefined') {
      throw Error('Missing argument: order');
    }
    await updateSimpleSuperblockStructure(
      projectArgs.block,
      { order },
      superblockFilename
    );
  }

  await updateIntroJson(projectArgs.superBlock, projectArgs.block, title);

  const challengeId = new ObjectId();
  const createMetaJsonArgs = {
    ...projectArgs,
    title,
    challengeId
  };

  await createMetaJson(createMetaJsonArgs);
  await createChallenge(challengeId);
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
  const newIntro = await parseIntroJson(introJsonPath);
  newIntro[superBlock].blocks[block] = {
    title,
    intro: [title, '']
  };
  await withTrace(
    fs.writeFile,
    introJsonPath,
    await format(JSON.stringify(newIntro), { parser: 'json' })
  );
}

type CreateMetaJsonArgs = CreateProjectArgs & {
  title: string;
  challengeId: ObjectId;
};

async function createMetaJson({
  superBlock,
  block,
  title,
  helpCategory,
  challengeId,
  order,
  blockLabel,
  blockLayout
}: CreateMetaJsonArgs) {
  const newMeta = buildProjectMeta({
    isChapterBased: chapterBasedSuperBlocks.includes(superBlock),
    block,
    title,
    helpCategory,
    challengeId: challengeId.toString(),
    order,
    blockLabel,
    blockLayout
  });

  await writeBlockStructure(block, newMeta);
}

async function createFirstChallenge({
  block,
  challengeId,
  title,
  challengeType,
  contentType
}: {
  block: string;
  challengeId: ObjectId;
  title: string;
  challengeType: number;
  contentType: ProjectContentType;
}) {
  const challengeSeeds = getProjectSeedFiles(contentType, title).map(
    ({ contents, ext, editableRegionBoundaries }) => ({
      contents,
      ext,
      editableRegionBoundaries: editableRegionBoundaries ?? []
    })
  );
  // including trailing slash for compatibility with createStepFile
  createStepFile({
    challengeId,
    projectPath: await createBlockFolder(block),
    stepNum: 1,
    challengeType,
    challengeSeeds,
    isFirstChallenge: challengeType === challengeTypes.html
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

async function createLabChallenge({
  challengeId,
  block,
  title,
  challengeType,
  contentType
}: {
  challengeId: ObjectId;
  block: string;
  title: string;
  challengeType: number;
  contentType: ProjectContentType;
}): Promise<ObjectId> {
  return createLabFile({
    challengeId,
    projectPath: await createBlockFolder(block),
    title,
    dashedName: block,
    challengeType,
    contentType
  });
}

async function createReviewChallenge({
  challengeId,
  block,
  title
}: {
  challengeId: ObjectId;
  block: string;
  title: string;
}): Promise<ObjectId> {
  return createReviewFile({
    challengeId,
    projectPath: await createBlockFolder(block),
    title,
    dashedName: block
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
    let projectContentType: ProjectContentType | undefined;
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
        default: getDefaultBlockLayout(blockLabel),
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

      if (blockLabel === BlockLabel.lab || blockLabel === BlockLabel.workshop) {
        projectContentType = await select<ProjectContentType>({
          message: 'Choose a project content type',
          default: 'html',
          choices: projectContentTypeChoices
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
      projectContentType,
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
