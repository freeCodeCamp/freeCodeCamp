import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { submitTypes } from '../../../shared/config/challenge-types';
import { type ChallengeNode } from '../../../client/src/redux/prop-types';
import { SuperBlocks } from '../../../shared/config/curriculum';

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

export interface GeneratedCurriculumProps {
  intro: string[];
  blocks: Record<string, Block<Record<string, unknown>>>;
}

interface Block<T> {
  desc: string[];
  intro: string[];
  challenges: T;
  meta: Record<string, unknown>;
}

const ver = 'v1';

export const orderedSuperBlockInfo = [
  { dashedName: SuperBlocks.RespWebDesignNew, public: true },
  { dashedName: SuperBlocks.DataAnalysisPy, public: true },
  { dashedName: SuperBlocks.MachineLearningPy, public: true },
  { dashedName: SuperBlocks.CollegeAlgebraPy, public: true },
  { dashedName: SuperBlocks.A2English, public: true },
  { dashedName: SuperBlocks.B1English, public: true },
  { dashedName: SuperBlocks.A2Spanish, public: false },
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

export function buildExtCurriculumDataV1(
  curriculum: Curriculum<CurriculumProps>
): void {
  const staticFolderPath = resolve(__dirname, '../../../client/static');
  const dataPath = `${staticFolderPath}/curriculum-data/`;
  const blockIntroPath = resolve(
    __dirname,
    '../../../client/i18n/locales/english/intro.json'
  );
  const intros = JSON.parse(
    readFileSync(blockIntroPath, 'utf-8')
  ) as CurriculumIntros;

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
        title: intros[x.dashedName].title
      }))
    });

    for (const superBlockKey of superBlockKeys) {
      const superBlock = <Curriculum<GeneratedCurriculumProps>>{};
      const blockNames = Object.keys(curriculum[superBlockKey].blocks);

      if (blockNames.length === 0) continue;

      superBlock[superBlockKey] = <GeneratedCurriculumProps>{};
      superBlock[superBlockKey].intro = intros[superBlockKey]['intro'];
      superBlock[superBlockKey].blocks = {};

      for (const blockName of blockNames) {
        superBlock[superBlockKey]['blocks'][blockName] = <
          Block<Record<string, unknown>>
        >{};

        superBlock[superBlockKey]['blocks'][blockName]['desc'] =
          intros[superBlockKey]['blocks'][blockName]['intro'];

        superBlock[superBlockKey]['blocks'][blockName]['challenges'] =
          curriculum[superBlockKey]['blocks'][blockName]['meta'];

        const blockChallenges =
          curriculum[superBlockKey]['blocks'][blockName]['challenges'];

        for (const challenge of blockChallenges) {
          const challengeId = challenge.id;
          const challengePath = `challenges/${superBlockKey}/${blockName}/${challengeId}`;

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

  function getSubmitTypes() {
    writeFileSync(
      `${dataPath}/submit-types.json`,
      JSON.stringify(submitTypes, null, 2)
    );
  }
}
