import fs from 'fs';
import { setup } from 'jest-json-schema-extended';
import { availableLangs, LangNames, LangCodes } from '../../shared/config/i18n';
import { SuperBlocks } from '../../shared/config/curriculum';
import intro from './locales/english/intro.json';

setup();

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

const filesThatShouldExist = [
  {
    name: 'translations.json'
  },
  {
    name: 'motivation.json'
  },
  {
    name: 'intro.json'
  },
  {
    name: 'meta-tags.json'
  },
  {
    name: 'links.json'
  }
];

const path = `${__dirname}/locales`;

describe('Locale tests:', () => {
  availableLangs.client.forEach(lang => {
    describe(`-- ${lang} --`, () => {
      filesThatShouldExist.forEach(file => {
        // check that each json file exists
        test(`${file.name} file exists`, () => {
          const exists = fs.existsSync(`${path}/${lang}/${file.name}`);
          expect(exists).toBeTruthy();
        });
      });

      test(`has an entry in the langDisplayNames enum`, () => {
        expect(
          Object.keys(LangNames)
            .map(langCode => langCode.toLowerCase())
            .includes(lang)
        ).toBe(true);
      });

      test(`has an entry in the langCodes enum`, () => {
        expect(
          Object.keys(LangCodes)
            .map(langCode => langCode.toLowerCase())
            .includes(lang)
        ).toBe(true);
      });
    });
  });
});

describe('Intro file structure tests:', () => {
  const typedIntro = intro as unknown as Intro;
  const superblocks = Object.values(SuperBlocks);
  for (const superBlock of superblocks) {
    expect(typeof typedIntro[superBlock].title).toBe('string');
    expect(typedIntro[superBlock].intro).toBeInstanceOf(Array);
    expect(typedIntro[superBlock].blocks).toBeInstanceOf(Object);
    const blocks = Object.keys(typedIntro[superBlock].blocks);
    blocks.forEach(block => {
      expect(typeof typedIntro[superBlock].blocks[block].title).toBe('string');
      expect(typedIntro[superBlock].blocks[block].intro).toBeInstanceOf(Array);
    });
  }
});

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
