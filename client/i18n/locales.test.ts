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
  SuperBlocks,
  superBlockStages,
  SuperBlockStage
} from '@freecodecamp/shared/config/curriculum';
import { getCurriculum } from '../tools/get-curriculum';
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
  const catalogSuperBlocks = superBlockStages[SuperBlockStage.Catalog];
  for (const superBlock of superblocks) {
    test(`superBlock ${superBlock} has required properties`, () => {
      expect(typeof typedIntro[superBlock].title).toBe('string');

      // catalog superblocks should have a summary
      if (catalogSuperBlocks.includes(superBlock)) {
        expect(typedIntro[superBlock].summary).toBeInstanceOf(Array);
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

type SuperBlockInfo = {
  blocks: Record<string, unknown>;
};

describe('Curriculum validation', () => {
  const curriculum = getCurriculum() as Record<string, SuperBlockInfo>;
  // certifications are not superblocks, they're just mixed in with them.
  const superblocks = Object.entries(curriculum).filter(
    ([key]) => key !== 'certifications'
  );

  // It's important that we check that each block in the curriculum has a title
  // in the intro, rather than the other way around, because the intro must
  // include upcoming changes. The curriculum only does if SHOW_UPCOMING_CHANGES
  // is true.
  superblocks.forEach(superblock => {
    const [name, superBlockInfo] = superblock;
    const blockObject = superBlockInfo.blocks;
    describe(`${name}`, () => {
      test('should have titles for each block in intro.json', () => {
        const blocks = Object.keys(blockObject);

        blocks.forEach(block => {
          const blockFromIntro = (intro as unknown as Intro)[superblock[0]]
            .blocks[block];
          expect(
            blockFromIntro.title,
            `block ${block} needs a non-empty title`
          ).toBeTruthy();
        });
      });
    });
  });
});
