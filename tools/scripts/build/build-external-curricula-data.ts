import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { submitTypes } from '../../../config/challenge-types';
import { type ChallengeNode } from '../../../client/src/redux/prop-types';
import {
  SuperBlocks,
  notAuditedSuperBlocks
} from '../../../config/superblocks';
import { Languages } from '../../../config/i18n';

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

interface GeneratedCurriculumProps {
  intro: string[];
  blocks: Record<string, Block<Record<string, unknown>>>;
}

interface Block<T> {
  desc: string[];
  intro: string[];
  challenges: T;
  meta: Record<string, unknown>;
}

type AvailableSuperBlocks = { [value in Languages]: AvailableSuperBlock[] };

interface AvailableSuperBlock {
  dashedName: (typeof SuperBlocks)[keyof typeof SuperBlocks];
  title?: string;
  intro?: string[];
  public: boolean;
}

const availableLanguages = [
  Languages.English,
  Languages.Espanol,
  Languages.Portuguese
];

export const orderedSuperBlockInfo = [
  { dashedName: SuperBlocks.RespWebDesignNew, public: true },
  { dashedName: SuperBlocks.SciCompPy, public: true },
  { dashedName: SuperBlocks.DataAnalysisPy, public: true },
  { dashedName: SuperBlocks.MachineLearningPy, public: true },
  { dashedName: SuperBlocks.RespWebDesign, public: true },
  { dashedName: SuperBlocks.JsAlgoDataStruct, public: false },
  { dashedName: SuperBlocks.FrontEndDevLibs, public: false },
  { dashedName: SuperBlocks.DataVis, public: false },
  { dashedName: SuperBlocks.BackEndDevApis, public: false },
  { dashedName: SuperBlocks.QualityAssurance, public: false },
  { dashedName: SuperBlocks.InfoSec, public: false },
  { dashedName: SuperBlocks.CodingInterviewPrep, public: false },
  { dashedName: SuperBlocks.ProjectEuler, public: false },
  { dashedName: SuperBlocks.RelationalDb, public: false }
];

const dashedNames = orderedSuperBlockInfo.map(({ dashedName }) => dashedName);

export function buildExtCurriculumData(
  ver: string,
  curriculum: Curriculum<CurriculumProps>
): void {
  const staticFolderPath = resolve(__dirname, '../../../client/static');
  const dataPath = `${staticFolderPath}/curriculum-data/`;

  mkdirSync(dataPath, { recursive: true });

  for (const lang of availableLanguages) {
    parseCurriculumData(lang);
  }

  getSubmitTypes();

  function parseCurriculumData(lang: string) {
    const superBlockKeys = Object.values(SuperBlocks).filter(x =>
      dashedNames.includes(x)
    );

    for (const superBlockKey of superBlockKeys) {
      const superBlock = <Curriculum<GeneratedCurriculumProps>>{};
      const blockNames = Object.keys(curriculum[superBlockKey].blocks);

      if (blockNames.length === 0) continue;

      superBlock[superBlockKey] = <GeneratedCurriculumProps>{};
      superBlock[superBlockKey]['intro'] = getSuperBlockDescription(
        superBlockKey,
        lang
      );
      superBlock[superBlockKey]['blocks'] = {};

      for (let j = 0; j < blockNames.length; j++) {
        superBlock[superBlockKey]['blocks'][blockNames[j]] = <
          Block<Record<string, unknown>>
        >{};

        superBlock[superBlockKey]['blocks'][blockNames[j]]['desc'] =
          getBlockDescription(superBlockKey, blockNames[j], lang);

        superBlock[superBlockKey]['blocks'][blockNames[j]]['challenges'] =
          curriculum[superBlockKey]['blocks'][blockNames[j]]['meta'];

        const blockChallenges =
          curriculum[superBlockKey]['blocks'][blockNames[j]]['challenges'];

        for (let k = 0; k < blockChallenges.length; k++) {
          const challenge = blockChallenges[k];
          const challengeId = challenge['id'];
          const challengePath = `challenges/${lang}/${superBlockKey}/${blockNames[j]}/${challengeId}`;

          writeToFile(challengePath, challenge, lang);
        }
      }

      writeToFile(superBlockKey, superBlock, lang);
      getAvailableSuperBlocks();
    }
  }

  function writeToFile(
    fileName: string,
    data: Record<string, unknown>,
    lang = 'english'
  ): void {
    const filePath = `${dataPath}/${ver}/${lang}/${fileName}.json`;
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, JSON.stringify(data, null, 2));
  }

  function returnIntroPath(lang: string) {
    return resolve(
      __dirname,
      `../../../client/i18n/locales/${lang}/intro.json`
    );
  }

  function getBlockDescription(
    superBlockKeys: SuperBlocks,
    blockKey: string,
    lang: string
  ): string[] {
    const intros = JSON.parse(
      readFileSync(returnIntroPath(lang), 'utf-8')
    ) as Intro;

    return intros[superBlockKeys]['blocks'][blockKey]['intro'];
  }

  function getSuperBlockDescription(
    superBlockKey: SuperBlocks,
    lang: string
  ): string[] {
    const superBlockIntro = JSON.parse(
      readFileSync(returnIntroPath(lang), 'utf-8')
    ) as Intro;
    return superBlockIntro[superBlockKey]['intro'];
  }

  function getSuperBlockTitle(superBlock: SuperBlocks, lang: string): string {
    const superBlocks = JSON.parse(
      readFileSync(returnIntroPath(lang), 'utf-8')
    ) as Intro;

    return superBlocks[superBlock].title;
  }

  function getSubmitTypes() {
    writeFileSync(
      `${dataPath}/submit-types.json`,
      JSON.stringify(submitTypes, null, 2)
    );
  }

  function getAvailableSuperBlocks() {
    const availableSuperBlocks = <AvailableSuperBlocks>{};

    for (const language of Object.values(Languages)) {
      if (!availableLanguages.includes(language)) continue;

      availableSuperBlocks[language] = structuredClone(orderedSuperBlockInfo);
    }

    for (const language of Object.values(Languages)) {
      const superBlocks = availableSuperBlocks[language];

      if (!availableLanguages.includes(language)) continue;

      for (let i = 0; i < superBlocks.length; i++) {
        const isNotAudited = notAuditedSuperBlocks[language].includes(
          superBlocks[i].dashedName
        );

        const title = getSuperBlockTitle(superBlocks[i].dashedName, language);

        superBlocks[i].title = title;

        if (isNotAudited) {
          superBlocks[i].public = false;
        }
      }
    }

    const filePath = `${dataPath}/${ver}/available-superblocks.json`;
    writeFileSync(
      filePath,
      JSON.stringify(
        {
          superblocks: availableSuperBlocks
        },
        null,
        2
      )
    );
  }
}
