import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { submitTypes } from '../../../shared/config/challenge-types';
import { type ChallengeNode } from '../../../client/src/redux/prop-types';
import { SuperBlocks } from '../../../shared/config/curriculum';
import fullStackSuperBlockStructure from '../../../curriculum/superblock-structure/full-stack.json';
import type { Chapter } from './../../../shared/config/chapters';

type Intro = { [keyValue in SuperBlocks]: IntroProps };
export type Curriculum<T> = {
  [keyValue in SuperBlocks]: T extends CurriculumProps
    ? CurriculumProps
    : GeneratedCurriculumProps;
};

interface IntroProps extends CurriculumProps {
  title: string;
  intro: string[];
}

export interface CurriculumProps {
  intro: string[];
  blocks: Record<string, Block<ChallengeNode['challenge'][]>>;
}

interface Block<T> {
  desc: string[];
  intro: string[];
  challenges: T;
  meta: Record<string, unknown>;
}

type GeneratedCurriculumProps =
  | GeneratedBlockBasedCurriculumProps
  | GeneratedChapterBasedCurriculumProps;

interface GeneratedBlockBasedCurriculumProps {
  intro: string[];
  blocks: GeneratedBlock[];
}

interface GeneratedChapterBasedCurriculumProps {
  intro: string[];
  chapters: GeneratedChapter[];
}

interface GeneratedChapter {
  dashedName: string;
  comingSoon?: boolean;
  modules: GeneratedModule[];
  chapterType?: string;
}

interface GeneratedModule {
  dashedName: string;
  comingSoon?: boolean;
  blocks: GeneratedBlock[];
  moduleType?: string;
}

interface GeneratedBlock {
  dashedName: string;
  intro: string;
  meta: Record<string, unknown>;
}

export const orderedSuperBlockInfo = [
  { dashedName: SuperBlocks.RespWebDesignNew, public: true },
  { dashedName: SuperBlocks.DataAnalysisPy, public: true },
  { dashedName: SuperBlocks.MachineLearningPy, public: true },
  { dashedName: SuperBlocks.CollegeAlgebraPy, public: true },
  { dashedName: SuperBlocks.A2English, public: true },
  { dashedName: SuperBlocks.B1English, public: true },
  { dashedName: SuperBlocks.TheOdinProject, public: true },
  { dashedName: SuperBlocks.RespWebDesign, public: true },
  { dashedName: SuperBlocks.PythonForEverybody, public: true },
  { dashedName: SuperBlocks.FullStackDeveloper, public: false },
  { dashedName: SuperBlocks.JsAlgoDataStructNew, public: false },
  { dashedName: SuperBlocks.FrontEndDevLibs, public: false },
  { dashedName: SuperBlocks.DataVis, public: false },
  { dashedName: SuperBlocks.RelationalDb, public: false },
  { dashedName: SuperBlocks.BackEndDevApis, public: false },
  { dashedName: SuperBlocks.QualityAssurance, public: false },
  { dashedName: SuperBlocks.SciCompPy, public: false },
  { dashedName: SuperBlocks.InfoSec, public: false },
  { dashedName: SuperBlocks.FoundationalCSharp, public: false },
  { dashedName: SuperBlocks.CodingInterviewPrep, public: false },
  { dashedName: SuperBlocks.ProjectEuler, public: false },
  { dashedName: SuperBlocks.RosettaCode, public: false },
  { dashedName: SuperBlocks.JsAlgoDataStruct, public: false }
];

const dashedNames = orderedSuperBlockInfo.map(({ dashedName }) => dashedName);

export function buildExtCurriculumData(
  ver: string,
  curriculum: Curriculum<CurriculumProps>
): void {
  const staticFolderPath = resolve(__dirname, '../../../client/static');
  const dataPath = `${staticFolderPath}/curriculum-data/`;
  const blockIntroPath = resolve(
    __dirname,
    '../../../client/i18n/locales/english/intro.json'
  );

  mkdirSync(dataPath, { recursive: true });

  parseCurriculumData();
  getSubmitTypes();

  function parseCurriculumData() {
    const superBlockKeys = Object.values(SuperBlocks).filter(x =>
      dashedNames.includes(x)
    );

    writeToFile('available-superblocks', {
      superblocks: orderedSuperBlockInfo.map(x => ({
        ...x,
        title: getSuperBlockTitle(x.dashedName)
      }))
    });

    for (const superBlockKey of superBlockKeys) {
      if (superBlockKey === SuperBlocks.FullStackDeveloper) {
        buildChapterBasedCurriculum(superBlockKey);
      } else {
        buildBlockBasedCurriculum(superBlockKey);
      }

      buildChallengeFiles(superBlockKey);
    }
  }

  function buildChapterBasedCurriculum(superBlockKey: SuperBlocks) {
    const chapters: Chapter[] = fullStackSuperBlockStructure.chapters;
    const blocksWithData = curriculum[superBlockKey].blocks;

    // Skip upcoming chapter/module as the metadata of their blocks
    // is not included in the `curriculum` object.
    const allChapters = chapters.map(chapter => ({
      dashedName: chapter.dashedName,
      comingSoon: chapter.comingSoon,
      chapterType: chapter.chapterType,
      modules: chapter.comingSoon
        ? []
        : chapter.modules.map(module => ({
            dashedName: module.dashedName,
            comingSoon: module.comingSoon,
            moduleType: module.moduleType,
            blocks: module.comingSoon
              ? []
              : module.blocks.map(block => {
                  const blockData = blocksWithData[block.dashedName];

                  return {
                    intro: getBlockDescription(superBlockKey, block.dashedName),
                    meta: blockData.meta
                  };
                })
          }))
    }));

    const superBlock = {
      [superBlockKey]: {
        intro: getSuperBlockDescription(superBlockKey),
        chapters: allChapters
      }
    };

    writeToFile(superBlockKey, superBlock);
  }

  function buildBlockBasedCurriculum(superBlockKey: SuperBlocks) {
    const blockNames = Object.keys(curriculum[superBlockKey].blocks);
    const blocks = blockNames.map(blockName => {
      const blockData = curriculum[superBlockKey].blocks[blockName];

      return {
        intro: getBlockDescription(superBlockKey, blockName),
        meta: blockData.meta
      };
    });

    const superBlock = {
      [superBlockKey]: {
        intro: getSuperBlockDescription(superBlockKey),
        blocks
      }
    };

    writeToFile(superBlockKey, superBlock);
  }

  function buildChallengeFiles(superBlockKey: SuperBlocks) {
    const blocks = Object.keys(curriculum[superBlockKey].blocks);

    for (const block of blocks) {
      const challenges = curriculum[superBlockKey]['blocks'][block].challenges;

      for (const challenge of challenges) {
        const challengeId = challenge.id;
        const challengePath = `challenges/${superBlockKey}/${block}/${challengeId}`;

        writeToFile(challengePath, challenge);
      }
    }
  }

  function writeToFile(fileName: string, data: Record<string, unknown>): void {
    const filePath = `${dataPath}/${ver}/${fileName}.json`;
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, JSON.stringify(data, null, 2));
  }

  function getBlockDescription(
    superBlockKeys: SuperBlocks,
    blockKey: string
  ): string[] {
    const intros = JSON.parse(readFileSync(blockIntroPath, 'utf-8')) as Intro;

    return intros[superBlockKeys]['blocks'][blockKey]['intro'];
  }

  function getSuperBlockDescription(superBlockKey: SuperBlocks): string[] {
    const superBlockIntro = JSON.parse(
      readFileSync(blockIntroPath, 'utf-8')
    ) as Intro;
    return superBlockIntro[superBlockKey]['intro'];
  }

  function getSuperBlockTitle(superBlock: SuperBlocks): string {
    const superBlocks = JSON.parse(
      readFileSync(blockIntroPath, 'utf-8')
    ) as Intro;

    return superBlocks[superBlock].title;
  }

  function getSubmitTypes() {
    writeFileSync(
      `${dataPath}/${ver}/submit-types.json`,
      JSON.stringify(submitTypes, null, 2)
    );
  }
}
