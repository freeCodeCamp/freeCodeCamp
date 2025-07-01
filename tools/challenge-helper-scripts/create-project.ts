import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import { prompt } from 'inquirer';
import { format } from 'prettier';
import ObjectID from 'bson-objectid';
import * as fullStackJson from '../../curriculum/superblock-structure/full-stack.json';
import {
  SuperBlocks,
  superBlockToFolderMap
} from '../../shared/config/curriculum';
import { BlockLayouts, BlockTypes } from '../../shared/config/blocks';
import { createQuizFile, createStepFile, validateBlockName } from './utils';
import { getBaseMeta } from './helpers/get-base-meta';

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

interface FullStackBlock {
  dashedName: string;
}

interface FullStackModule {
  dashedName: string;
  blocks: FullStackBlock[];
}

interface FullStackChapter {
  dashedName: string;
  modules: FullStackModule[];
}

interface FullStackData {
  chapters: FullStackChapter[];
}

async function createProject(
  superBlock: SuperBlocks,
  block: string,
  helpCategory: string,
  blockType?: string,
  blockLayout?: string,
  questionCount?: number,
  title?: string,
  chapter?: string,
  module?: string,
  position?: number,
  order?: number
) {
  if (!title) {
    title = block;
  }

  void updateIntroJson(superBlock, block, title);

  if (blockType === BlockTypes.quiz) {
    const challengeId = await createQuizChallenge(
      superBlock,
      block,
      title,
      questionCount!
    );
    void createMetaJson(superBlock, block, title, helpCategory, challengeId);
  } else {
    const challengeId = await createFirstChallenge(superBlock, block);
    void createMetaJson(
      superBlock,
      block,
      title,
      helpCategory,
      challengeId,
      order,
      blockType,
      blockLayout
    );
    // TODO: remove once we stop relying on markdown in the client.
  }
  void createIntroMD(superBlock, block, title, blockType!);
  if (superBlock === SuperBlocks.FullStackDeveloper) {
    await updateFullStackJson(chapter!, module!, block, position!);
  }
}

async function updateFullStackJson(
  chapterName: string,
  moduleName: string,
  block: string,
  position: number
) {
  const fullStackText = await fs.readFile(
    '../../curriculum/superblock-structure/full-stack.json',
    { encoding: 'utf-8' }
  );
  const fullStackData = JSON.parse(fullStackText) as FullStackData;

  const chapterExists =
    fullStackData['chapters'].findIndex(
      (chapter: FullStackChapter) => chapter.dashedName === chapterName
    ) !== -1;
  if (!chapterExists) {
    // Inserts the chapter, module and block if the chapter is missing
    const newChapter = {
      dashedName: chapterName,
      modules: [{ dashedName: moduleName, blocks: [{ dashedName: block }] }]
    };
    fullStackData['chapters'].push(newChapter);
  } else {
    // Chapter is present; is module present
    // Get the index of the correct chapter
    const chapterIndex = fullStackData['chapters'].findIndex(
      (chapter: FullStackChapter) => chapter.dashedName === chapterName
    );
    const moduleExists =
      fullStackData['chapters'][chapterIndex]['modules'].findIndex(
        (module: FullStackModule) => module.dashedName === moduleName
      ) !== -1;

    if (!moduleExists) {
      // Insert the new module and block
      fullStackData['chapters'][chapterIndex]['modules'].push({
        dashedName: moduleName,
        blocks: [{ dashedName: block }]
      });
    } else {
      const moduleIndex = fullStackData['chapters'][chapterIndex][
        'modules'
      ].findIndex(
        (module: FullStackModule) => module.dashedName === moduleName
      );
      fullStackData['chapters'][chapterIndex]['modules'][moduleIndex][
        'blocks'
      ].splice(position - 1, 0, { dashedName: block });
      // Insert the new block into the already present module
    }
    // Write the new changes to the file
    const newData = JSON.stringify(fullStackData, null, 2);
    await fs.writeFile(
      '../../curriculum/superblock-structure/full-stack.json',
      newData
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
  challengeId: ObjectID,
  order?: number,
  blockType?: string,
  blockLayout?: string
) {
  const metaDir = path.resolve(__dirname, '../../curriculum/challenges/_meta');
  let newMeta;
  if (superBlock !== SuperBlocks.FullStackDeveloper) {
    newMeta = getBaseMeta['Step'];
    newMeta.order = order!;
  } else {
    newMeta = getBaseMeta['FullStack'];
    newMeta.blockType = blockType!;
    newMeta.blockLayout = blockLayout!;
  }
  newMeta.name = title;
  newMeta.dashedName = block;
  newMeta.helpCategory = helpCategory;
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

async function createIntroMD(
  superBlock: string,
  block: string,
  title: string,
  blockType: string
) {
  const introMD = `---
title: Introduction to the ${title}
block: ${block}
superBlock: ${superBlock}
---

## Introduction to the ${title}

${blockType === 'quiz' ? 'This page is for the ' + title : 'This is a test for the new project-based curriculum.'}
`;
  const dirPath = path.resolve(
    __dirname,
    `../../client/src/pages/learn/${superBlock}/${block}/`
  );
  const filePath = path.resolve(dirPath, 'index.md');
  if (!existsSync(dirPath)) {
    await withTrace(fs.mkdir, dirPath);
  }
  void withTrace(fs.writeFile, filePath, introMD, { encoding: 'utf8' });
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

async function createQuizChallenge(
  superBlock: SuperBlocks,
  block: string,
  title: string,
  questionCount: number
): Promise<ObjectID> {
  const superBlockSubPath = superBlockToFolderMap[superBlock];
  const newChallengeDir = path.resolve(
    __dirname,
    `../../curriculum/challenges/english/${superBlockSubPath}/${block}`
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

void prompt([
  {
    name: 'superBlock',
    message: 'Which certification does this belong to?',
    default: SuperBlocks.FullStackDeveloper,
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
    name: 'blockType',
    message: 'Choose a block type',
    default: BlockTypes.lab,
    type: 'list',
    choices: Object.values(BlockTypes),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    when: answers => answers.superBlock === SuperBlocks.FullStackDeveloper
  },
  {
    name: 'blockLayout',
    message: 'Choose a block layout',

    default: (answers: { blockType: BlockTypes }) =>
      answers.blockType == BlockTypes.quiz
        ? BlockLayouts.Link
        : BlockLayouts.ChallengeList,
    type: 'list',
    choices: Object.values(BlockLayouts),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    when: answers => answers.superBlock === SuperBlocks.FullStackDeveloper
  },
  {
    name: 'questionCount',
    message: 'Choose a question count',
    default: 20,
    type: 'list',
    choices: [10, 20],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    when: answers => answers.blockType === BlockTypes.quiz
  },
  {
    name: 'chapter',
    message:
      'What chapter in full-stack.json should this full stack project go in?',
    default: 'html',
    type: 'list',
    choices: fullStackJson.chapters.map(x => x.dashedName),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    when: answers => answers.superBlock === SuperBlocks.FullStackDeveloper
  },
  {
    name: 'module',
    message:
      'What module in full-stack.json should this full stack project go in?',
    default: 'html',
    type: 'list',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    choices: answers =>
      fullStackJson.chapters
        .find(x => x.dashedName === answers.chapter)
        ?.modules.map(x => x.dashedName),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    when: answers => answers.superBlock === SuperBlocks.FullStackDeveloper
  },
  {
    name: 'position',
    message: 'Which position in the module does this appear in the module?',
    default: 5,
    validate: (position: string) => {
      return parseInt(position, 10) > 0
        ? true
        : 'Position must be an number greater than zero.';
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    when: answers => answers.superBlock === SuperBlocks.FullStackDeveloper,
    filter: (position: string) => {
      return parseInt(position, 10);
    }
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    when: answers => answers.superBlock !== SuperBlocks.FullStackDeveloper,
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
      blockType,
      blockLayout,
      questionCount,
      chapter,
      module,
      position,
      order
    }: CreateProjectArgs) =>
      await createProject(
        superBlock,
        block,
        helpCategory,
        blockType,
        blockLayout,
        questionCount,
        title,
        chapter,
        module,
        position,
        order
      )
  )
  .then(() =>
    console.log(
      'All set.  Now use pnpm run clean:client in the root and it should be good to go.'
    )
  );
