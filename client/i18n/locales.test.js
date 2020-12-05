/* global expect */

const fs = require('fs');

const { availableLangs } = require('./allLangs');

const filesThatShouldExist = ['translation.json', 'motivation.json'];

describe('Locale tests', () => {
  availableLangs.client.forEach(lang => {
    describe(lang, () => {
      filesThatShouldExist.forEach(file => {
        test(`${file} file exists`, () => {
          const exists = fs.existsSync(
            `${process.cwd()}/i18n/locales/${lang}/${file}`
          );
          expect(exists).toBe(true);
        });
      });
    });
  });
});
