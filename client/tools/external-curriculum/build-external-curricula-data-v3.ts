import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { omit } from 'lodash';
import { submitTypes } from '@freecodecamp/shared/config/challenge-types';
import { availableLangs, Languages } from '@freecodecamp/shared/config/i18n';
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
  type ChapterBasedCurriculumIntros,
  type Curriculum,
  type CurriculumIntros,
  type CurriculumProps
} from './build-external-curricula-data-v2';
import {
  getOrderedSuperBlockInfoWithTitles,
  superBlockDashedNames,
  type OrderedSuperBlocks
} from './ordered-superblock-info';

const ver = 'v3';

const staticFolderPath = resolve(__dirname, '../../../client/static');
const dataPath = `${staticFolderPath}/curriculum-data/`;
const englishIntros = readCurriculumIntros(Languages.English);

type Language = (typeof availableLangs.curriculum)[number];

export async function buildExtCurriculumDataV3(
  englishCurriculum?: Curriculum<CurriculumProps>
): Promise<void> {
  mkdirSync(`${dataPath}/${ver}`, { recursive: true });

  writeGlobalFiles();

  const { getChallengesForLang } =
    await import('@freecodecamp/curriculum/get-challenges');

  for (const lang of availableLangs.curriculum) {
    const curriculum =
      lang === Languages.English && englishCurriculum
        ? englishCurriculum
        : ((await getChallengesForLang(
            lang,
            {}
          )) as unknown as Curriculum<CurriculumProps>);

    buildLanguageData(lang, curriculum);
  }
}

export function buildAvailableSuperBlockInfoForLang(
  lang: Language
): OrderedSuperBlocks {
  const intros = readCurriculumIntros(lang);

  return getOrderedSuperBlockInfoWithTitles(intros, englishIntros);
}

function buildLanguageData(
  lang: Language,
  curriculum: Curriculum<CurriculumProps>
) {
  const intros = readCurriculumIntros(lang);

  writeToFile(`${lang}/available-superblocks`, {
    superblocks: buildAvailableSuperBlockInfoForLang(lang)
  });
  writeToFile(`${lang}/curriculum`, curriculum);

  for (const superBlockKey of superBlockDashedNames) {
    if (chapterBasedSuperBlocks.includes(superBlockKey)) {
      buildChapterBasedCurriculum({
        curriculum,
        intros,
        superBlockKey,
        lang
      });
    } else {
      buildBlockBasedCurriculum({
        curriculum,
        intros,
        superBlockKey,
        lang
      });
    }

    buildChallengeFiles({ curriculum, superBlockKey, lang });
  }
}

function buildChapterBasedCurriculum({
  curriculum,
  intros,
  superBlockKey,
  lang
}: {
  curriculum: Curriculum<CurriculumProps>;
  intros: CurriculumIntros;
  superBlockKey: SuperBlocks;
  lang: Language;
}) {
  const { chapters } = getSuperblockStructure(superBlockKey) as {
    chapters: Chapter[];
  };
  const blocksWithData = curriculum[superBlockKey].blocks;

  const superBlockIntros = getSuperBlockIntros({
    dashedName: superBlockKey,
    intros
  }) as ChapterBasedCurriculumIntros[SuperBlocks];
  const englishSuperBlockIntros = englishIntros[
    superBlockKey
  ] as ChapterBasedCurriculumIntros[SuperBlocks];

  const allChapters = chapters.map(chapter => ({
    dashedName: chapter.dashedName,
    name:
      superBlockIntros.chapters[chapter.dashedName] ??
      englishSuperBlockIntros.chapters[chapter.dashedName] ??
      chapter.dashedName,
    comingSoon: chapter.comingSoon,
    chapterType: chapter.chapterType,
    modules: chapter.comingSoon
      ? []
      : chapter.modules.map(module => ({
          dashedName: module.dashedName,
          name:
            superBlockIntros.modules[module.dashedName] ??
            englishSuperBlockIntros.modules[module.dashedName] ??
            module.dashedName,
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
                  const blockIntro = getBlockIntro({
                    block,
                    intros,
                    superBlockKey
                  });

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
      intro: superBlockIntros.intro,
      chapters: allChapters
    }
  };

  writeToFile(`${lang}/${superBlockKey}`, superBlock);
}

function buildBlockBasedCurriculum({
  curriculum,
  intros,
  superBlockKey,
  lang
}: {
  curriculum: Curriculum<CurriculumProps>;
  intros: CurriculumIntros;
  superBlockKey: SuperBlocks;
  lang: Language;
}) {
  const blockNames = Object.keys(curriculum[superBlockKey].blocks);
  const superBlockIntros = getSuperBlockIntros({
    dashedName: superBlockKey,
    intros
  });
  const blocks = blockNames.map(blockName => {
    const blockData = curriculum[superBlockKey].blocks[blockName];
    const blockIntro = getBlockIntro({
      block: blockName,
      intros,
      superBlockKey
    });

    return {
      intro: blockIntro.intro,
      // Keep `meta.name` for backward compatibility with
      // consumers that have not migrated to intro-based titles.
      meta: { ...blockData.meta, name: blockIntro.title }
    };
  });

  const superBlock = {
    [superBlockKey]: {
      intro: superBlockIntros.intro,
      blocks
    }
  };

  writeToFile(`${lang}/${superBlockKey}`, superBlock);
}

function buildChallengeFiles({
  curriculum,
  superBlockKey,
  lang
}: {
  curriculum: Curriculum<CurriculumProps>;
  superBlockKey: SuperBlocks;
  lang: Language;
}) {
  const blocks = Object.keys(curriculum[superBlockKey].blocks);

  for (const block of blocks) {
    const challenges = curriculum[superBlockKey]['blocks'][block].challenges;

    for (const challenge of challenges) {
      const challengePath = `${lang}/challenges/${superBlockKey}/${block}/${challenge.id}`;

      writeToFile(challengePath, challenge);
    }
  }
}

function readCurriculumIntros(lang: Languages): CurriculumIntros {
  const blockIntroPath = resolve(
    __dirname,
    `../../../client/i18n/locales/${lang}/intro.json`
  );

  return JSON.parse(readFileSync(blockIntroPath, 'utf-8')) as CurriculumIntros;
}

function getSuperBlockIntros({
  dashedName,
  intros
}: {
  dashedName: SuperBlocks;
  intros: CurriculumIntros;
}) {
  return intros[dashedName] ?? englishIntros[dashedName];
}

function getBlockIntro({
  block,
  intros,
  superBlockKey
}: {
  block: string;
  intros: CurriculumIntros;
  superBlockKey: SuperBlocks;
}) {
  return (
    getSuperBlockIntros({ dashedName: superBlockKey, intros }).blocks[block] ??
    englishIntros[superBlockKey].blocks[block]
  );
}

function writeToFile(fileName: string, data: unknown): void {
  const filePath = `${dataPath}/${ver}/${fileName}.json`;
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function writeGlobalFiles() {
  writeToFile('available-languages', {
    languages: availableLangs.curriculum
  });
  writeToFile('submit-types', submitTypes);
  writeToFile('scene-assets', {
    domain,
    backgrounds,
    sounds,
    availableBackgrounds,
    availableAudios,
    characterAssets
  });
}
