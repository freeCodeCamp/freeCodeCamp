const path = require('path');
const fs = require('fs');
const { AssertionError } = require('chai');
const envData = require('../../../config/env.json');
const { mobileSchemaValidator } = require('./mobileSchema');

if (envData.clientLocale == 'english' && !envData.showUpcomingChanges) {
  describe('mobile curriculum build', () => {
    const mobileStaticPath = path.resolve(__dirname, '../../../client/static');
    const blockIntroPath = path.resolve(
      __dirname,
      '../../../client/i18n/locales/english/intro.json'
    );

    const validateMobileSuperBlock = mobileSchemaValidator();

    test('the mobile curriculum should have a static folder with multiple files', () => {
      expect(fs.existsSync(`${mobileStaticPath}/mobile`)).toBe(true);

      expect(
        fs.readdirSync(`${mobileStaticPath}/mobile`).length
      ).toBeGreaterThan(0);
    });

    test('the mobile curriculum should have access to the intro.json file', () => {
      expect(fs.existsSync(blockIntroPath)).toBe(true);
    });

    test('the files generated should have the correct schema', () => {
      const fileArray = fs.readdirSync(`${mobileStaticPath}/mobile`);

      fileArray
        .filter(fileInArray => fileInArray !== 'availableSuperblocks.json')
        .forEach(fileInArray => {
          const fileContent = fs.readFileSync(
            `${mobileStaticPath}/mobile/${fileInArray}`
          );

          const result = validateMobileSuperBlock(JSON.parse(fileContent));

          if (result.error) {
            throw new AssertionError(result.error, `file: ${fileInArray}`);
          }
        });
    });
  });
} else {
  describe.skip('Mobile curriculum is not localized', () => {
    test.todo('localized tests');
  });
}
