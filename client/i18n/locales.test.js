/* global expect */
import { translationsSchema } from './translations-schema';
import { motivationSchema } from './motivation-schema';
import {
  availableLangs,
  i18nextCodes,
  langDisplayNames,
  langCodes
} from './allLangs';

const fs = require('fs');
const { expectToMatchSchema, setup } = require('jest-json-schema-extended');

setup();

const filesThatShouldExist = [
  {
    name: 'translations.json',
    schema: translationsSchema
  },
  {
    name: 'motivation.json',
    schema: motivationSchema
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

        // check that each of the json files match the schema
        test(`${file.name} has correct schema`, async () => {
          const jsonFile = fs.readFileSync(`${path}/${lang}/${file.name}`);
          let json = await JSON.parse(jsonFile);
          expectToMatchSchema(json, file.schema);
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
