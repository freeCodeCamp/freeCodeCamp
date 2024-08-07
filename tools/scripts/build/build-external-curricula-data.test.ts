import path from 'path';
import fs from 'fs';

import readdirp from 'readdirp';
// TODO: remove chai and use jest's assertion errors
import { AssertionError } from 'chai';
import { SuperBlocks } from '../../../shared/config/curriculum';
import {
  superblockSchemaValidator,
  availableSuperBlocksValidator
} from './external-data-schema';
import { orderedSuperBlockInfo } from './build-external-curricula-data';

const VERSION = 'v1';

describe('external curriculum data build', () => {
  const clientStaticPath = path.resolve(__dirname, '../../../client/static');

  const validateSuperBlock = superblockSchemaValidator();

  test("the external curriculum data should be in the client's static directory", () => {
    expect(
      fs.existsSync(`${clientStaticPath}/curriculum-data/${VERSION}`)
    ).toBe(true);

    expect(
      fs.readdirSync(`${clientStaticPath}/curriculum-data/${VERSION}`).length
    ).toBeGreaterThan(0);
  });

  test('there should be an endpoint to request submit types from', () => {
    fs.existsSync(
      `${clientStaticPath}/curriculum-data/${VERSION}/submit-types.json`
    );
  });

  test('the available-superblocks file should have the correct structure', async () => {
    const validateAvailableSuperBlocks = availableSuperBlocksValidator();
    const availableSuperblocks: unknown = JSON.parse(
      await fs.promises.readFile(
        `${clientStaticPath}/curriculum-data/${VERSION}/available-superblocks.json`,
        'utf-8'
      )
    );

    const result = validateAvailableSuperBlocks(availableSuperblocks);

    if (result.error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      throw new AssertionError(
        result.error.message,
        `file: available-superblocks.json`
      );
    }
  });

  test('the files generated should have the correct schema', async () => {
    const fileArray = (
      await readdirp.promise(`${clientStaticPath}/curriculum-data/${VERSION}`, {
        directoryFilter: ['!challenges']
      })
    ).map(file => file.path);

    fileArray
      .filter(fileInArray => fileInArray !== 'available-superblocks.json')
      .forEach(fileInArray => {
        const fileContent = fs.readFileSync(
          `${clientStaticPath}/curriculum-data/${VERSION}/${fileInArray}`,
          'utf-8'
        );

        const result = validateSuperBlock(JSON.parse(fileContent));

        if (result.error) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          throw new AssertionError(
            result.error.message,
            `file: ${fileInArray}`
          );
        }
      });
  });

  test('All public SuperBlocks should be present in the SuperBlock object', () => {
    const dashedNames = orderedSuperBlockInfo.map(
      ({ dashedName }) => dashedName
    );

    const isUpcoming = [
      'b1-english-for-developers',
      'upcoming-python',
      'front-end-development'
    ];

    // TODO: this is a hack, we should have a single source of truth for the
    // list of superblocks that are available.
    const publicSuperBlockNames = Object.values(SuperBlocks).filter(
      x => !isUpcoming.includes(x)
    );

    expect(dashedNames).toEqual(expect.arrayContaining(publicSuperBlockNames));
    expect(Object.keys(orderedSuperBlockInfo)).toHaveLength(
      publicSuperBlockNames.length
    );
  });
});
