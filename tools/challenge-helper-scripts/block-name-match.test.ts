import fs from 'fs';
import intro from '../../client/i18n/locales/english/intro.json';
import { SuperBlocks } from '../../shared/config/curriculum';

interface Intro {
  [key: string]: {
    title: string;
    intro: string[];
    blocks: {
      [block: string]: {
        title: string;
        intro: string[];
      };
    };
  };
}

interface ChallengeMeta {
  name: string;
}

describe('Intro file name test:', () => {
  const typedIntro = intro as unknown as Intro;
  test('Every block listed in intro.json has a challenge meta file', () => {
    const superblocks = Object.values(SuperBlocks);
    for (const superBlock of superblocks) {
      const blocks = Object.keys(typedIntro[superBlock].blocks);
      blocks.forEach(block => {
        if (typedIntro[superBlock].blocks[block].intro.length > 0) {
          const exists = fs.existsSync(
            `${__dirname}/../../curriculum/challenges/_meta/${block}/meta.json`
          );
          expect(exists).toBeTruthy();
        }
      });
    }
  });

  test('Every block name matches in the meta.json and intro.json', () => {
    const typedIntro = intro as unknown as Intro;
    const superblocks = Object.values(SuperBlocks);
    for (const superBlock of superblocks) {
      const blocks = Object.keys(typedIntro[superBlock].blocks);
      blocks.forEach(block => {
        if (typedIntro[superBlock].blocks[block].intro.length > 0) {
          const metaContent = fs.readFileSync(
            `${__dirname}/../../curriculum/challenges/_meta/${block}/meta.json`,
            { encoding: 'utf-8' }
          );
          const metaJSON = JSON.parse(metaContent) as ChallengeMeta;
          expect(metaJSON.name).toBe(
            typedIntro[superBlock].blocks[block].title
          );
        }
      });
    }
  });
});
