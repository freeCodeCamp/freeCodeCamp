import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { omit } from 'lodash';
import { submitTypes } from '../../../shared-dist/config/challenge-types';
import { type ChallengeNode } from '../../src/redux/prop-types';
import {
  SuperBlocks,
  chapterBasedSuperBlocks
} from '../../../shared-dist/config/curriculum';
import type { Chapter } from '../../../shared-dist/config/chapters';
import { getSuperblockStructure } from '../../../curriculum/src/file-handler';
import { patchBlock } from './patches';

export type CurriculumIntros =
  | BlockBasedCurriculumIntros
  | ChapterBasedCurriculumIntros;

type BlockBasedCurriculumIntros = {
  [keyValue in SuperBlocks]: {
    title: string;
    intro: string[];
    blocks: Record<string, { title: string; intro: string[] }>;
  };
};

export type ChapterBasedCurriculumIntros = {
  [keyValue in SuperBlocks]: {
    title: string;
    intro: string[];
    chapters: Record<string, string>;
    modules: Record<string, string>;
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
  name: string;
  comingSoon?: boolean;
  modules: GeneratedModule[];
  chapterType?: string;
}

interface GeneratedModule {
  dashedName: string;
  name: string;
  comingSoon?: boolean;
  blocks: GeneratedBlock[];
  moduleType?: string;
}

interface GeneratedBlock {
  dashedName: string;
  intro: string;
  meta: Record<string, unknown>;
}

// This enum is based on the `SuperBlockStage` enum in shared/config,
// but with string value instead of number.
enum SuperBlockStage {
  Core = 'core',
  English = 'english',
  Professional = 'professional',
  Extra = 'extra',
  Legacy = 'legacy'
}

export type OrderedSuperBlocks = Record<
  string,
  Array<{ dashedName: SuperBlocks; public: boolean; title: string }>
>;

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

export const orderedSuperBlockInfo: OrderedSuperBlocks = {
  [SuperBlockStage.Core]: [
    {
      dashedName: SuperBlocks.RespWebDesignV9,
      public: false,
      title: intros[SuperBlocks.RespWebDesignV9].title
    },
    {
      dashedName: SuperBlocks.JsV9,
      public: false,
      title: intros[SuperBlocks.JsV9].title
    },
    {
      dashedName: SuperBlocks.FrontEndDevLibsV9,
      public: false,
      title: intros[SuperBlocks.FrontEndDevLibsV9].title
    },
    {
      dashedName: SuperBlocks.PythonV9,
      public: false,
      title: intros[SuperBlocks.PythonV9].title
    },
    {
      dashedName: SuperBlocks.RelationalDbV9,
      public: false,
      title: intros[SuperBlocks.RelationalDbV9].title
    },
    {
      dashedName: SuperBlocks.BackEndDevApisV9,
      public: false,
      title: intros[SuperBlocks.BackEndDevApisV9].title
    },
    {
      dashedName: SuperBlocks.FullStackDeveloperV9,
      public: false,
      title: intros[SuperBlocks.FullStackDeveloperV9].title
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
      if (chapterBasedSuperBlocks.includes(superBlockKey)) {
        buildChapterBasedCurriculum(superBlockKey);
      } else {
        buildBlockBasedCurriculum(superBlockKey);
      }

      buildChallengeFiles(superBlockKey);
    }
  }

  function buildChapterBasedCurriculum(superBlockKey: SuperBlocks) {
    const { chapters } = getSuperblockStructure(superBlockKey) as {
      chapters: Chapter[];
    };
    const blocksWithData = curriculum[superBlockKey].blocks;

    const superBlockIntros = intros[
      superBlockKey
    ] as ChapterBasedCurriculumIntros[SuperBlocks];

    // Skip upcoming chapter/module as the metadata of their blocks
    // is not included in the `curriculum` object.
    const allChapters = chapters.map(chapter => ({
      dashedName: chapter.dashedName,
      name: superBlockIntros.chapters[chapter.dashedName],
      comingSoon: chapter.comingSoon,
      chapterType: chapter.chapterType,
      modules: chapter.comingSoon
        ? []
        : chapter.modules.map(module => ({
            dashedName: module.dashedName,
            name: superBlockIntros.modules[module.dashedName],
            comingSoon: module.comingSoon,
            moduleType: module.moduleType,
            blocks: module.comingSoon
              ? []
              : module.blocks
                  // Upcoming blocks aren't included in blocksWithData
                  // and thus they have no metadata and need to be filtered out.
                  .filter(block => blocksWithData[block])
                  .map(block => {
                    const blockData = blocksWithData[block];
                    return {
                      intro: superBlockIntros.blocks[block].intro,
                      meta: patchBlock(
                        omit(blockData.meta, ['chapter', 'module'])
                      )
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
        meta: patchBlock(blockData.meta)
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
