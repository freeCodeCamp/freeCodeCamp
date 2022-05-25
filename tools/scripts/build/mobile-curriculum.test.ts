import path from 'path';
import fs from 'fs';
import { AssertionError } from 'chai';
import envData from '../../../config/env.json';
import { SuperBlocks } from '../../../config/certification-settings';
import { mobileSchemaValidator } from './mobileSchema';
import { superBlockMobileAppOrder } from './build-external-curricula-data';

if (envData.clientLocale == 'english' && !envData.showUpcomingChanges) {
  const ver = 'v1.0.0';

  describe('mobile curriculum build', () => {
    const mobileStaticPath = path.resolve(__dirname, '../../../client/static');
    const blockIntroPath = path.resolve(
      __dirname,
      '../../../client/i18n/locales/english/intro.json'
    );

    const validateMobileSuperBlock = mobileSchemaValidator();

    test('the mobile curriculum should have a static folder with multiple files', () => {
      expect(fs.existsSync(`${mobileStaticPath}/curriculum-data/${ver}`)).toBe(
        true
      );

      expect(
        fs.readdirSync(`${mobileStaticPath}/curriculum-data/${ver}`).length
      ).toBeGreaterThan(0);
    });

    test('the mobile curriculum should have access to the intro.json file', () => {
      expect(fs.existsSync(blockIntroPath)).toBe(true);
    });

    test('the files generated should have the correct schema', () => {
      const fileArray = fs.readdirSync(
        `${mobileStaticPath}/curriculum-data/${ver}`
      );

      fileArray
        .filter(fileInArray => fileInArray !== 'availableSuperblocks.json')
        .forEach(fileInArray => {
          const fileContent = fs.readFileSync(
            `${mobileStaticPath}/curriculum-data/${ver}/${fileInArray}`,
            'utf-8'
          );

          const result = validateMobileSuperBlock(JSON.parse(fileContent));

          if (result.error) {
            throw new AssertionError(
              result.error.toString(),
              `file: ${fileInArray}`
            );
          }
        });
    });

    test('All SuperBlocks should be present in the mobile SuperBlock object', () => {
      Object.values(SuperBlocks).forEach(superBlockKey =>
        expect(
          Object.keys(superBlockMobileAppOrder).includes(superBlockKey)
        ).toBe(true)
      );
    });
  });
} else {
  describe.skip('Mobile curriculum is not localized', () => {
    test.todo('localized tests');
  });
}
