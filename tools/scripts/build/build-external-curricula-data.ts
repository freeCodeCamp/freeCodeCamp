import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { SuperBlocks } from '../../../config/certification-settings';

type Intro = { [keyValue in SuperBlocks]: IntroProps };
export type Curriculum = { [keyValue in SuperBlocks]: CurriculumProps };

interface IntroProps extends CurriculumProps {
  title: string;
  intro: string[];
}

interface CurriculumProps {
  blocks: Record<string, Block>;
}

interface Block {
  desc: string[];
  intro: string[];
  challenges: Record<string, unknown>;
  meta: Record<string, unknown>;
}

export const orderedSuperBlockInfo = [
  { dashedName: SuperBlocks.RespWebDesignNew, public: false },
  { dashedName: SuperBlocks.RespWebDesign, public: true },
  { dashedName: SuperBlocks.JsAlgoDataStruct, public: true },
  { dashedName: SuperBlocks.FrontEndDevLibs, public: false },
  { dashedName: SuperBlocks.DataVis, public: false },
  { dashedName: SuperBlocks.BackEndDevApis, public: false },
  { dashedName: SuperBlocks.QualityAssurance, public: false },
  { dashedName: SuperBlocks.SciCompPy, public: false },
  { dashedName: SuperBlocks.DataAnalysisPy, public: false },
  { dashedName: SuperBlocks.InfoSec, public: false },
  { dashedName: SuperBlocks.MachineLearningPy, public: false },
  { dashedName: SuperBlocks.CodingInterviewPrep, public: false },
  { dashedName: SuperBlocks.RelationalDb, public: false }
];

const dashedNames = orderedSuperBlockInfo.map(({ dashedName }) => dashedName);

export function buildExtCurriculumData(
  ver: string,
  curriculum: Curriculum
): void {
  const staticFolderPath = resolve(__dirname, '../../../client/static');
  const versionPath = `${staticFolderPath}/curriculum-data/${ver}`;
  const blockIntroPath = resolve(
    __dirname,
    '../../../client/i18n/locales/english/intro.json'
  );

  mkdirSync(versionPath, { recursive: true });

  parseCurriculumData();

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
      const superBlock = <Curriculum>{};
      const blockNames = Object.keys(curriculum[superBlockKey].blocks);

      if (blockNames.length === 0) continue;

      superBlock[superBlockKey] = <CurriculumProps>{};
      superBlock[superBlockKey]['blocks'] = {};

      for (let j = 0; j < blockNames.length; j++) {
        superBlock[superBlockKey]['blocks'][blockNames[j]] = <Block>{};

        superBlock[superBlockKey]['blocks'][blockNames[j]]['desc'] =
          getBlockDescription(superBlockKey, blockNames[j]);

        superBlock[superBlockKey]['blocks'][blockNames[j]]['challenges'] =
          curriculum[superBlockKey]['blocks'][blockNames[j]]['meta'];
      }

      writeToFile(superBlockKey, superBlock);
    }
  }

  function writeToFile(fileName: string, data: Record<string, unknown>): void {
    const filePath = `${versionPath}/${fileName}.json`;
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

  function getSuperBlockTitle(superBlock: SuperBlocks): string {
    const superBlocks = JSON.parse(
      readFileSync(blockIntroPath, 'utf-8')
    ) as Intro;

    return superBlocks[superBlock].title;
  }
}
