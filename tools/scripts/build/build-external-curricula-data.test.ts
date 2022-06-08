import path from 'path';
import fs from 'fs';

import readdirp from 'readdirp';
import { AssertionError } from 'chai';
import envData from '../../../config/env.json';
import { SuperBlocks } from '../../../config/certification-settings';
import { mobileSchemaValidator } from './mobileSchema';
import { superBlockMobileAppOrder } from './build-external-curricula-data';

if (envData.clientLocale == 'english' && !envData.showUpcomingChanges) {
  const VERSION = 'v1';

  describe('mobile curriculum build', () => {
    const mobileStaticPath = path.resolve(__dirname, '../../../client/static');
    const blockIntroPath = path.resolve(
      __dirname,
      '../../../client/i18n/locales/english/intro.json'
    );

    const validateMobileSuperBlock = mobileSchemaValidator();

    test('the mobile curriculum should have a static folder with multiple files', () => {
      expect(
        fs.existsSync(`${mobileStaticPath}/curriculum-data/${VERSION}`)
      ).toBe(true);

      expect(
        fs.readdirSync(`${mobileStaticPath}/curriculum-data/${VERSION}`).length
      ).toBeGreaterThan(0);
    });

    test('the mobile curriculum should have access to the intro.json file', () => {
      expect(fs.existsSync(blockIntroPath)).toBe(true);
    });

    test('the available-superblocks file should have the correct structure', async () => {
      const availableSuperblocks = JSON.parse(
        await fs.promises.readFile(
          `${mobileStaticPath}/curriculum-data/${VERSION}/available-superblocks.json`,
          'utf-8'
        )
      ) as { superblocks: unknown[][] };
      const superblockOrder = availableSuperblocks.superblocks[0];
      const superblockNames = availableSuperblocks.superblocks[1];
      expect(superblockOrder.length).toBe(superblockNames.length);
    });

    test('the files generated should have the correct schema', async () => {
      const fileArray = (
        await readdirp.promise(`${mobileStaticPath}/curriculum-data/${VERSION}`)
      ).map(file => file.path);

      fileArray
        .filter(fileInArray => fileInArray !== 'available-superblocks.json')
        .forEach(fileInArray => {
          const fileContent = fs.readFileSync(
            `${mobileStaticPath}/curriculum-data/${VERSION}/${fileInArray}`,
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
      const dashedNames = superBlockMobileAppOrder.map(
        ({ dashedName }) => dashedName
      );
      // TODO: this is a hack, we should have a single source of truth for the
      // list of superblocks that are available.
      const publicSuperBlockNames = Object.values(SuperBlocks).filter(
        x => x !== '2022/javascript-algorithms-and-data-structures'
      );

      expect(dashedNames).toEqual(
        expect.arrayContaining(publicSuperBlockNames)
      );
      expect(Object.keys(superBlockMobileAppOrder)).toHaveLength(
        publicSuperBlockNames.length
      );
    });
  });
} else {
  describe.skip('Mobile curriculum is not localized', () => {
    test.todo('localized tests');
  });
}
