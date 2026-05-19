import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { omit } from 'lodash';
import { submitTypes } from '@freecodecamp/shared/config/challenge-types';
import { type ChallengeNode } from '../../src/redux/prop-types';
import {
  SuperBlocks,
  chapterBasedSuperBlocks
} from '@freecodecamp/shared/config/curriculum';
import type { Chapter } from '@freecodecamp/shared/config/chapters';
import { getSuperblockStructure } from '@freecodecamp/curriculum/file-handler';
import {
  availableBackgrounds,
  availableAudios
} from '../../../curriculum/schema/scene-assets.js';
import {
  characterAssets,
  sounds,
  backgrounds,
  domain
} from '../../src/templates/Challenges/components/scene/scene-assets.js';
import {
  getOrderedSuperBlockInfoWithTitles,
  superBlockDashedNames,
  type OrderedSuperBlocks
} from './ordered-superblock-info';

export type { OrderedSuperBlocks } from './ordered-superblock-info';

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

export const orderedSuperBlockInfo: OrderedSuperBlocks =
  getOrderedSuperBlockInfoWithTitles(intros);

export function buildExtCurriculumDataV2(
  curriculum: Curriculum<CurriculumProps>
): void {
  mkdirSync(dataPath, { recursive: true });

  parseCurriculumData();
  getSubmitTypes();
  getSceneAssets();

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
                    const blockIntro = superBlockIntros.blocks[block];
                    return {
                      intro: blockIntro.intro,
                      // Keep `meta.name` for backward compatibility with
                      // consumers that have not migrated to intro-based titles.
                      meta: {
                        ...omit(blockData.meta, ['chapter', 'module']),
                        name: blockIntro.title
                      }
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
      const blockIntro = intros[superBlockKey].blocks[blockName];

      return {
        intro: blockIntro.intro,
        // Keep `meta.name` for backward compatibility with
        // consumers that have not migrated to intro-based titles.
        meta: { ...blockData.meta, name: blockIntro.title }
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

  function getSceneAssets() {
    const sceneAssets = {
      domain,
      backgrounds,
      sounds,
      availableBackgrounds,
      availableAudios,
      characterAssets
    };

    writeFileSync(
      `${dataPath}/${ver}/scene-assets.json`,
      JSON.stringify(sceneAssets, null, 2)
    );
  }
}
