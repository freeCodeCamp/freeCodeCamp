import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { SuperBlocks } from '../../../config/certification-settings';

type Intro = { [keyValue in SuperBlocks]: IntroProps };
export type Curriculum = { [keyValue in SuperBlocks]: CurriculumProps };
type SuperBlockKeys = keyof typeof SuperBlocks;
type SuperBlockValues = typeof SuperBlocks[SuperBlockKeys];

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

export const superBlockMobileAppOrder = [
  { dashedName: '2022/responsive-web-design', public: false },
  { dashedName: 'responsive-web-design', public: true },
  { dashedName: 'javascript-algorithms-and-data-structures', public: true },
  { dashedName: 'front-end-development-libraries', public: false },
  { dashedName: 'data-visualization', public: false },
  { dashedName: 'back-end-development-and-apis', public: false },
  { dashedName: 'quality-assurance', public: false },
  { dashedName: 'scientific-computing-with-python', public: false },
  { dashedName: 'data-analysis-with-python', public: false },
  { dashedName: 'information-security', public: false },
  { dashedName: 'machine-learning-with-python', public: false },
  { dashedName: 'coding-interview-prep', public: false },
  { dashedName: 'relational-database', public: false }
];

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
    const superBlockKeys = Object.values(SuperBlocks);

    writeToFile('available-superblocks', {
      superblocks: [
        superBlockMobileAppOrder,
        Object.values(SuperBlocks).map(superblock =>
          getSuperBlockName(superblock)
        )
      ]
    });

    for (let i = 0; i < superBlockKeys.length; i++) {
      const superBlock = <Curriculum>{};
      const superBlockKey = Object.values(SuperBlocks)[i];
      const blockNames = Object.keys(curriculum[superBlockKeys[i]].blocks);

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

      writeToFile(superBlockKeys[i], superBlock);
    }
  }

  function writeToFile(fileName: string, data: Record<string, unknown>): void {
    const filePath = `${versionPath}/${fileName}.json`;
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, JSON.stringify(data, null, 2));
  }

  function getBlockDescription(
    superBlockKeys: SuperBlockValues,
    blockKey: string
  ): string[] {
    const intros = JSON.parse(readFileSync(blockIntroPath, 'utf-8')) as Intro;

    return intros[superBlockKeys]['blocks'][blockKey]['intro'];
  }

  function getSuperBlockName(superBlockKeys: SuperBlockValues): string {
    const superBlocks = JSON.parse(
      readFileSync(blockIntroPath, 'utf-8')
    ) as Intro;

    return superBlocks[superBlockKeys].title;
  }
}
