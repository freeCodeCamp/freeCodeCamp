import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';
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

const superBlockMobileAppOrder = {
  'responsive-web-design': { public: true },
  '2022/responsive-web-design': { public: false },
  'javascript-algorithms-and-data-structures': { public: true },
  'front-end-development-libraries': { public: false },
  'data-visualization': { public: false },
  'back-end-development-and-apis': { public: false },
  'quality-assurance': { public: false },
  'scientific-computing-with-python': { public: false },
  'data-analysis-with-python': { public: false },
  'information-security': { public: false },
  'machine-learning-with-python': { public: false },
  'coding-interview-prep': { public: false },
  'relational-database': { public: false }
};

export function buildMobileCurriculum(curriculum: Curriculum): void {
  const mobileStaticPath = resolve(__dirname, '../../../client/static');
  const blockIntroPath = resolve(
    __dirname,
    '../../../client/i18n/locales/english/intro.json'
  );

  mkdirSync(`${mobileStaticPath}/mobile`, { recursive: true });

  parseCurriculumData();

  function parseCurriculumData() {
    const superBlockKeys = Object.values(SuperBlocks);

    writeToFile('availableSuperblocks', {
      superblocks: [
        superBlockMobileAppOrder,
        Object.values(SuperBlocks).map(superblock =>
          getSuperBlockNames(superblock)
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

      writeToFile(superBlockKeys[i].replace(/\//, '-'), superBlock);
    }
  }

  function writeToFile(fileName: string, data: Record<string, unknown>): void {
    mkdirSync(`${mobileStaticPath}/mobile`, { recursive: true });

    const mobilePath = resolve(`${mobileStaticPath}/mobile/${fileName}.json`);

    writeFileSync(mobilePath, JSON.stringify(data, null, 2));
  }

  function getBlockDescription(
    superBlockKeys: SuperBlockValues,
    blockKey: string
  ): string[] {
    const intros = JSON.parse(readFileSync(blockIntroPath, 'utf-8')) as Intro;

    return intros[superBlockKeys]['blocks'][blockKey]['intro'];
  }

  function getSuperBlockNames(superBlockKeys: SuperBlockValues): string {
    const superBlocks = JSON.parse(
      readFileSync(blockIntroPath, 'utf-8')
    ) as Intro;

    return superBlocks[superBlockKeys].title;
  }
}
