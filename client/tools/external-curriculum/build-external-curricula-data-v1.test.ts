import path from 'path';
import fs from 'fs';

import readdirp from 'readdirp';
import { describe, test, expect } from 'vitest';

import intros from '../../i18n/locales/english/intro.json';
import {
  SuperBlocks,
  SuperBlockStage,
  superBlockStages
} from '../../../shared-dist/config/curriculum';
import {
  superblockSchemaValidator,
  availableSuperBlocksValidator
} from './external-data-schema-v1';
import {
  type Curriculum,
  type GeneratedCurriculumProps,
  orderedSuperBlockInfo
} from './build-external-curricula-data-v1';

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
    expect(
      fs.existsSync(`${clientStaticPath}/curriculum-data/submit-types.json`)
    ).toBeTruthy();
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

    expect(result.error?.details).toBeUndefined();
    expect(result.error).toBeFalsy();
  });

  test('the super block files generated should have the correct schema', async () => {
    const fileArray = (
      await readdirp.promise(`${clientStaticPath}/curriculum-data/${VERSION}`, {
        directoryFilter: ['!challenges'],
        fileFilter: entry => {
          // path without extension:
          const filePath = entry.path.replace(/\.json$/, '');
          // The directory contains super block files and other curriculum-related files.
          // We're only interested in super block ones.
          const superBlocks = Object.values(SuperBlocks);
          return superBlocks.includes(filePath);
        }
      })
    ).map(file => file.path);

    expect(fileArray.length).toBeGreaterThan(0);

    fileArray.forEach(fileInArray => {
      const fileContent = fs.readFileSync(
        `${clientStaticPath}/curriculum-data/${VERSION}/${fileInArray}`,
        'utf-8'
      );

      const result = validateSuperBlock(JSON.parse(fileContent));

      expect(result.error?.details).toBeUndefined();
      expect(result.error).toBeFalsy();
    });
  });

  test('super blocks and blocks should have the correct data', async () => {
    const superBlockFiles = (
      await readdirp.promise(`${clientStaticPath}/curriculum-data/${VERSION}`, {
        directoryFilter: ['!challenges'],
        fileFilter: entry => {
          // path without extension:
          const filePath = entry.path.replace(/\.json$/, '');
          // The directory contains super block files and other curriculum-related files.
          // We're only interested in super block ones.
          const superBlocks = Object.values(SuperBlocks);
          return superBlocks.includes(filePath);
        }
      })
    ).map(file => file.path);

    expect(superBlockFiles.length).toBeGreaterThan(0);

    superBlockFiles.forEach(file => {
      const fileContentJson = fs.readFileSync(
        `${clientStaticPath}/curriculum-data/${VERSION}/${file}`,
        'utf-8'
      );

      const fileContent = JSON.parse(
        fileContentJson
      ) as Curriculum<GeneratedCurriculumProps>;

      const superBlock = Object.keys(fileContent)[0] as SuperBlocks;

      // Randomly pick a block to check its data.
      const blocks = Object.keys(fileContent[superBlock].blocks);
      const randomBlockIndex = Math.floor(Math.random() * blocks.length);
      const randomBlock = blocks[randomBlockIndex];

      expect(fileContent[superBlock].intro).toEqual(intros[superBlock].intro);
      expect(fileContent[superBlock].blocks[randomBlock]?.desc).toEqual(
        (
          intros[superBlock].blocks as unknown as Record<
            string,
            { intro: unknown }
          >
        )[randomBlock].intro
      );
    });
  });

  test('All public SuperBlocks should be present in the SuperBlock object', () => {
    const dashedNames = orderedSuperBlockInfo.map(
      ({ dashedName }) => dashedName
    );

    const publicSuperBlockNames = Object.entries(superBlockStages)
      .filter(([key]) => {
        const stage = Number(key) as SuperBlockStage;
        return (
          stage !== SuperBlockStage.Next &&
          stage !== SuperBlockStage.Upcoming &&
          stage !== SuperBlockStage.Catalog &&
          stage !== SuperBlockStage.Core
        );
      })
      .flatMap(([, superBlocks]) => superBlocks);

    expect(dashedNames).toEqual(expect.arrayContaining(publicSuperBlockNames));
    expect(Object.keys(orderedSuperBlockInfo)).toHaveLength(
      publicSuperBlockNames.length
    );
  });

  test('challenge files should be created and in the correct directory', () => {
    expect(
      fs.existsSync(`${clientStaticPath}/curriculum-data/${VERSION}/challenges`)
    ).toBe(true);

    expect(
      fs.readdirSync(
        `${clientStaticPath}/curriculum-data/${VERSION}/challenges`
      ).length
    ).toBeGreaterThan(0);
  });
});
