import fs from 'fs';
import { setup } from 'jest-json-schema-extended';
import {
  availableLangs,
  LangNames,
  LangCodes
} from '../../config/i18n/all-langs';

setup();

const filesThatShouldExist = [
  {
    name: 'translations.json'
  },
  {
    name: 'motivation.json'
  },
  {
    name: 'trending.json'
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

      test(`has an entry in the langDisplayNames variable`, () => {
        expect(Object.keys(LangNames).includes(lang)).toBe(true);
      });

      test(`has an entry in the langCodes variable`, () => {
        expect(Object.keys(LangCodes).includes(lang)).toBe(true);
      });
    });
  });
});
