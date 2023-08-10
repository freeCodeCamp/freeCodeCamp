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
  public: boolean;
}

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

    getAvailableSuperBlocks();

    for (const superBlockKey of superBlockKeys) {
      const superBlock = <Curriculum<GeneratedCurriculumProps>>{};
      const blockNames = Object.keys(curriculum[superBlockKey].blocks);

      if (blockNames.length === 0) continue;

      superBlock[superBlockKey] = <GeneratedCurriculumProps>{};
      superBlock[superBlockKey]['intro'] =
        getSuperBlockDescription(superBlockKey);
      superBlock[superBlockKey]['blocks'] = {};

      for (let j = 0; j < blockNames.length; j++) {
        superBlock[superBlockKey]['blocks'][blockNames[j]] = <
          Block<Record<string, unknown>>
        >{};

        superBlock[superBlockKey]['blocks'][blockNames[j]]['desc'] =
          getBlockDescription(superBlockKey, blockNames[j]);

        superBlock[superBlockKey]['blocks'][blockNames[j]]['challenges'] =
          curriculum[superBlockKey]['blocks'][blockNames[j]]['meta'];

        const blockChallenges =
          curriculum[superBlockKey]['blocks'][blockNames[j]]['challenges'];

        for (let k = 0; k < blockChallenges.length; k++) {
          const challenge = blockChallenges[k];
          const challengeId = challenge['id'];
          const challengePath = `challenges/${superBlockKey}/${blockNames[j]}/${challengeId}`;

          writeToFile(challengePath, challenge);
        }
      }

      writeToFile(superBlockKey, superBlock);
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

  // function getSuperBlockTitle(superBlock: SuperBlocks): string {
  //   const superBlocks = JSON.parse(
  //     readFileSync(blockIntroPath, 'utf-8')
  //   ) as Intro;

  //   return superBlocks[superBlock].title;
  // }

  function getSubmitTypes() {
    writeFileSync(
      `${dataPath}/submit-types.json`,
      JSON.stringify(submitTypes, null, 2)
    );
  }

  function getAvailableSuperBlocks() {
    const availableSuperBlocks = <AvailableSuperBlocks>{};

    for (const language of Object.values(Languages)) {
      availableSuperBlocks[language] = orderedSuperBlockInfo;
    }

    for (const language of Object.values(Languages)) {
      for (let i = 0; i < availableSuperBlocks[language].length; i++) {
        for (let j = 0; j < notAuditedSuperBlocks[language].length; j++) {
          if (
            availableSuperBlocks[language][i].dashedName ===
            notAuditedSuperBlocks[language][j]
          ) {
            availableSuperBlocks[language][i].public = false;
          }
        }
      }
    }

    writeToFile('available-superblocks', {
      superblocks: availableSuperBlocks
    });
  }
}
