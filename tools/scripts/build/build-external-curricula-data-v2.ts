import { mkdirSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { omit } from 'lodash';
import { submitTypes } from '../../../shared-dist/config/challenge-types';
import { type ChallengeNode } from '../../../client/src/redux/prop-types';
import { SuperBlocks } from '../../../shared-dist/config/curriculum';
import type { Chapter } from '../../../shared-dist/config/chapters';
import { getSuperblockStructure } from '../../../curriculum/src/file-handler';
import superBlockIntros from '../../../client/i18n/locales/english/intro.json';
import blockIntros from '../../../client/i18n/locales/english/blocks-intro.json';
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

type ChapterBasedSuperBlock = {
  title: string;
  intro: string[];
  chapters: Record<string, string>;
  modules: Record<string, string>;
};

export type ChapterBasedCurriculumIntros = {
  [keyValue in SuperBlocks]: ChapterBasedSuperBlock;
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

export const orderedSuperBlockInfo: OrderedSuperBlocks = {
  [SuperBlockStage.Core]: [
    {
      dashedName: SuperBlocks.FullStackDeveloper,
      public: false,
      title: superBlockIntros[SuperBlocks.FullStackDeveloper].title
    }
  ],

  [SuperBlockStage.English]: [
    {
      dashedName: SuperBlocks.A2English,
      public: true,
      title: superBlockIntros[SuperBlocks.A2English].title
    },
    {
      dashedName: SuperBlocks.B1English,
      public: true,
      title: superBlockIntros[SuperBlocks.B1English].title
    }
  ],

  [SuperBlockStage.Extra]: [
    {
      dashedName: SuperBlocks.TheOdinProject,
      public: true,
      title: superBlockIntros[SuperBlocks.TheOdinProject].title
    },
    {
      dashedName: SuperBlocks.CodingInterviewPrep,
      public: false,
      title: superBlockIntros[SuperBlocks.CodingInterviewPrep].title
    },
    {
      dashedName: SuperBlocks.ProjectEuler,
      public: false,
      title: superBlockIntros[SuperBlocks.ProjectEuler].title
    },
    {
      dashedName: SuperBlocks.RosettaCode,
      public: false,
      title: superBlockIntros[SuperBlocks.RosettaCode].title
    }
  ],

  [SuperBlockStage.Legacy]: [
    {
      dashedName: SuperBlocks.RespWebDesignNew,
      public: true,
      title: superBlockIntros[SuperBlocks.RespWebDesignNew].title
    },
    {
      dashedName: SuperBlocks.JsAlgoDataStructNew,
      public: false,
      title: superBlockIntros[SuperBlocks.JsAlgoDataStructNew].title
    },
    {
      dashedName: SuperBlocks.FrontEndDevLibs,
      public: false,
      title: superBlockIntros[SuperBlocks.FrontEndDevLibs].title
    },
    {
      dashedName: SuperBlocks.DataVis,
      public: false,
      title: superBlockIntros[SuperBlocks.DataVis].title
    },
    {
      dashedName: SuperBlocks.RelationalDb,
      public: false,
      title: superBlockIntros[SuperBlocks.RelationalDb].title
    },
    {
      dashedName: SuperBlocks.BackEndDevApis,
      public: false,
      title: superBlockIntros[SuperBlocks.BackEndDevApis].title
    },
    {
      dashedName: SuperBlocks.QualityAssurance,
      public: false,
      title: superBlockIntros[SuperBlocks.QualityAssurance].title
    },
    {
      dashedName: SuperBlocks.SciCompPy,
      public: false,
      title: superBlockIntros[SuperBlocks.SciCompPy].title
    },
    {
      dashedName: SuperBlocks.DataAnalysisPy,
      public: true,
      title: superBlockIntros[SuperBlocks.DataAnalysisPy].title
    },
    {
      dashedName: SuperBlocks.InfoSec,
      public: false,
      title: superBlockIntros[SuperBlocks.InfoSec].title
    },
    {
      dashedName: SuperBlocks.MachineLearningPy,
      public: true,
      title: superBlockIntros[SuperBlocks.MachineLearningPy].title
    },
    {
      dashedName: SuperBlocks.CollegeAlgebraPy,
      public: true,
      title: superBlockIntros[SuperBlocks.CollegeAlgebraPy].title
    },
    {
      dashedName: SuperBlocks.RespWebDesign,
      public: true,
      title: superBlockIntros[SuperBlocks.RespWebDesign].title
    },
    {
      dashedName: SuperBlocks.JsAlgoDataStruct,
      public: false,
      title: superBlockIntros[SuperBlocks.JsAlgoDataStruct].title
    },
    {
      dashedName: SuperBlocks.PythonForEverybody,
      public: true,
      title: superBlockIntros[SuperBlocks.PythonForEverybody].title
    }
  ],

  [SuperBlockStage.Professional]: [
    {
      dashedName: SuperBlocks.FoundationalCSharp,
      public: false,
      title: superBlockIntros[SuperBlocks.FoundationalCSharp].title
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

  function buildChapterBasedCurriculum(
    superBlockKey: SuperBlocks.FullStackDeveloper
  ) {
    const { chapters } = getSuperblockStructure('full-stack-developer') as {
      chapters: Chapter[];
    };
    const blocksWithData = curriculum[superBlockKey].blocks;

    const chapterBasedSuperBlock = superBlockIntros[
      superBlockKey
    ] as ChapterBasedSuperBlock;

    // Skip upcoming chapter/module as the metadata of their blocks
    // is not included in the `curriculum` object.
    const allChapters = chapters.map(chapter => ({
      dashedName: chapter.dashedName,
      name: chapterBasedSuperBlock.chapters[chapter.dashedName],
      comingSoon: chapter.comingSoon,
      chapterType: chapter.chapterType,
      modules: chapter.comingSoon
        ? []
        : chapter.modules.map(module => ({
            dashedName: module.dashedName,
            name: chapterBasedSuperBlock.modules[module.dashedName],
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
                    // @ts-expect-error intro seems to be missing for daily-coding-challenges
                    const intros = blockIntros as Record<
                      string,
                      { title: string; intro: string[] }
                    >;
                    return {
                      intro: intros[block].intro,
                      meta: patchBlock(
                        omit(blockData.meta, ['chapter', 'module'])
                      )
                    };
                  })
          }))
    }));

    const superBlock = {
      [superBlockKey]: {
        intro: superBlockIntros[superBlockKey].intro,
        chapters: allChapters
      }
    };

    writeToFile(superBlockKey, superBlock);
  }

  function buildBlockBasedCurriculum(superBlockKey: SuperBlocks) {
    const blockNames = Object.keys(
      curriculum[superBlockKey].blocks
    ) as (keyof typeof blockIntros)[];
    const blocks = blockNames.map(blockName => {
      const blockData = curriculum[superBlockKey].blocks[blockName];
      // @ts-expect-error intro seems to be missing for daily-coding-challenges
      const intros = blockIntros as Record<
        string,
        { title: string; intro: string[] }
      >;
      return {
        intro: intros[blockName].intro,
        meta: patchBlock(blockData.meta)
      };
    });

    const superBlock = {
      [superBlockKey]: {
        intro: superBlockIntros[superBlockKey].intro,
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
