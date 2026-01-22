import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { describe, test, expect } from 'vitest';

import {
  availableLangs,
  LangNames,
  LangCodes
} from '@freecodecamp/shared/config/i18n';
import {
  catalogSuperBlocks,
  SuperBlocks
} from '@freecodecamp/shared/config/curriculum';
import intro from './locales/english/intro.json';

interface Intro {
  [key: string]: {
    title: string;
    summary?: string[];
    intro: string[];
    blocks: {
      [block: string]: {
        title: string;
        intro: string[];
      };
    };
  };
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

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
    test(`superBlock ${superBlock} has required properties`, () => {
      expect(typeof typedIntro[superBlock].title).toBe('string');

      // catalog superblocks should have a summary
      if (catalogSuperBlocks.includes(superBlock)) {
        expect(typedIntro[superBlock].intro).toBeInstanceOf(Array);
      }

      expect(typedIntro[superBlock].intro).toBeInstanceOf(Array);
      expect(typedIntro[superBlock].blocks).toBeInstanceOf(Object);
      const blocks = Object.keys(typedIntro[superBlock].blocks);
      blocks.forEach(block => {
        expect(typeof typedIntro[superBlock].blocks[block].title).toBe(
          'string'
        );
        expect(typedIntro[superBlock].blocks[block].intro).toBeInstanceOf(
          Array
        );
      });
    });
  }
});
