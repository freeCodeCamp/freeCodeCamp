/* global expect */
import {
  availableLangs,
  i18nextCodes,
  langDisplayNames,
  langCodes
} from '../../config/i18n/all-langs';

const fs = require('fs');
const { setup } = require('jest-json-schema-extended');

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
  }
];

const path = `${process.cwd()}/i18n/locales`;

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

      test(`has a two character entry in the i18nextCodes variable`, () => {
        expect(i18nextCodes[lang].length).toBe(2);
      });

      test(`has an entry in the langDisplayNames variable`, () => {
        expect(langDisplayNames[lang].length).toBeGreaterThan(0);
      });

      test(`has an entry in the langCodes variable`, () => {
        expect(langCodes[lang].length).toBeGreaterThan(0);
      });
    });
  });
});
