import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { submitTypes } from '../../../shared/config/challenge-types';
import { type ChallengeNode } from '../../../client/src/redux/prop-types';
import {
  SuperBlocks,
  SuperBlockStage
} from '../../../shared/config/curriculum';
import fullStackSuperBlockStructure from '../../../curriculum/superblock-structure/full-stack.json';
import type { Chapter } from '../../../shared/config/chapters';

export type CurriculumIntros = {
  [keyValue in SuperBlocks]: {
    title: string;
    intro: string[];
    blocks: Record<string, { title: string; intro: string[] }>;
  };
};

export type Curriculum<T> = {
  [keyValue in SuperBlocks]: T extends CurriculumProps
    ? CurriculumProps
    : GeneratedCurriculumProps;
};

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

export type GeneratedCurriculumProps =
  | GeneratedBlockBasedCurriculumProps
  | GeneratedChapterBasedCurriculumProps;

export interface GeneratedBlockBasedCurriculumProps {
  intro: string[];
  blocks: GeneratedBlock[];
}

export interface GeneratedChapterBasedCurriculumProps {
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

const ver = 'v2';

const staticFolderPath = resolve(__dirname, '../../../client/static');
const dataPath = `${staticFolderPath}/curriculum-data/`;
const blockIntroPath = resolve(
  __dirname,
  '../../../client/i18n/locales/english/intro.json'
);
const intros = JSON.parse(
  readFileSync(blockIntroPath, 'utf-8')
) as CurriculumIntros;

export const orderedSuperBlockInfo: Record<
  string,
  Array<{ dashedName: SuperBlocks; public: boolean; title: string }>
> = {
  [SuperBlockStage.Core]: [
    {
      dashedName: SuperBlocks.FullStackDeveloper,
      public: false,
      title: intros[SuperBlocks.FullStackDeveloper].title
    }
  ],

  [SuperBlockStage.English]: [
    {
      dashedName: SuperBlocks.A2English,
      public: true,
      title: intros[SuperBlocks.A2English].title
    },
    {
      dashedName: SuperBlocks.B1English,
      public: true,
      title: intros[SuperBlocks.B1English].title
    }
  ],

  [SuperBlockStage.Extra]: [
    {
      dashedName: SuperBlocks.TheOdinProject,
      public: true,
      title: intros[SuperBlocks.TheOdinProject].title
    },
    {
      dashedName: SuperBlocks.CodingInterviewPrep,
      public: false,
      title: intros[SuperBlocks.CodingInterviewPrep].title
    },
    {
      dashedName: SuperBlocks.ProjectEuler,
      public: false,
      title: intros[SuperBlocks.ProjectEuler].title
    },
    {
      dashedName: SuperBlocks.RosettaCode,
      public: false,
      title: intros[SuperBlocks.RosettaCode].title
    }
  ],

  [SuperBlockStage.Legacy]: [
    {
      dashedName: SuperBlocks.RespWebDesignNew,
      public: true,
      title: intros[SuperBlocks.RespWebDesignNew].title
    },
    {
      dashedName: SuperBlocks.JsAlgoDataStructNew,
      public: false,
      title: intros[SuperBlocks.JsAlgoDataStructNew].title
    },
    {
      dashedName: SuperBlocks.FrontEndDevLibs,
      public: false,
      title: intros[SuperBlocks.FrontEndDevLibs].title
    },
    {
      dashedName: SuperBlocks.DataVis,
      public: false,
      title: intros[SuperBlocks.DataVis].title
    },
    {
      dashedName: SuperBlocks.RelationalDb,
      public: false,
      title: intros[SuperBlocks.RelationalDb].title
    },
    {
      dashedName: SuperBlocks.BackEndDevApis,
      public: false,
      title: intros[SuperBlocks.BackEndDevApis].title
    },
    {
      dashedName: SuperBlocks.QualityAssurance,
      public: false,
      title: intros[SuperBlocks.QualityAssurance].title
    },
    {
      dashedName: SuperBlocks.SciCompPy,
      public: false,
      title: intros[SuperBlocks.SciCompPy].title
    },
    {
      dashedName: SuperBlocks.DataAnalysisPy,
      public: true,
      title: intros[SuperBlocks.DataAnalysisPy].title
    },
    {
      dashedName: SuperBlocks.InfoSec,
      public: false,
      title: intros[SuperBlocks.InfoSec].title
    },
    {
      dashedName: SuperBlocks.MachineLearningPy,
      public: true,
      title: intros[SuperBlocks.MachineLearningPy].title
    },
    {
      dashedName: SuperBlocks.CollegeAlgebraPy,
      public: true,
      title: intros[SuperBlocks.CollegeAlgebraPy].title
    },
    {
      dashedName: SuperBlocks.RespWebDesign,
      public: true,
      title: intros[SuperBlocks.RespWebDesign].title
    },
    {
      dashedName: SuperBlocks.JsAlgoDataStruct,
      public: false,
      title: intros[SuperBlocks.JsAlgoDataStruct].title
    },
    {
      dashedName: SuperBlocks.PythonForEverybody,
      public: true,
      title: intros[SuperBlocks.PythonForEverybody].title
    }
  ],

  [SuperBlockStage.Professional]: [
    {
      dashedName: SuperBlocks.FoundationalCSharp,
      public: false,
      title: intros[SuperBlocks.FoundationalCSharp].title
    }
  ]
};

export const superBlockDashedNames = Object.keys(orderedSuperBlockInfo).reduce(
  (acc, superBlockStage) => {
    const dashedNames = orderedSuperBlockInfo[superBlockStage].map(
      superBlock => superBlock.dashedName
    );
    acc.push(...dashedNames);

    return acc;
  },
  [] as SuperBlocks[]
);

export function buildExtCurriculumDataV2(
  curriculum: Curriculum<CurriculumProps>
): void {
  mkdirSync(dataPath, { recursive: true });

  parseCurriculumData();
  getSubmitTypes();

  function parseCurriculumData() {
    const superBlockKeys = Object.values(SuperBlocks).filter(x =>
      superBlockDashedNames.includes(x)
    );

    writeToFile('available-superblocks', {
      superblocks: orderedSuperBlockInfo
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
                    intro: intros[superBlockKey].blocks[block.dashedName].intro,
                    meta: blockData.meta
                  };
                })
          }))
    }));

    const superBlock = {
      [superBlockKey]: {
        intro: intros[superBlockKey].intro,
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
        intro: intros[superBlockKey].blocks[blockName].intro,
        meta: blockData.meta
      };
    });

    const superBlock = {
      [superBlockKey]: {
        intro: intros[superBlockKey].intro,
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

  function getSubmitTypes() {
    writeFileSync(
      `${dataPath}/${ver}/submit-types.json`,
      JSON.stringify(submitTypes, null, 2)
    );
  }
}
