import path from 'path';
import fs, { readFileSync } from 'fs';

import readdirp from 'readdirp';
import { describe, test, expect } from 'vitest';

import {
  chapterBasedSuperBlocks,
  SuperBlocks,
  SuperBlockStage,
  superBlockStages
} from '../../../shared-dist/config/curriculum';
import {
  superblockSchemaValidator,
  availableSuperBlocksValidator
} from './external-data-schema-v2';
import {
  type CurriculumIntros,
  type Curriculum,
  type GeneratedCurriculumProps,
  type GeneratedBlockBasedCurriculumProps,
  type GeneratedChapterBasedCurriculumProps,
  type ChapterBasedCurriculumIntros,
  orderedSuperBlockInfo,
  OrderedSuperBlocks
} from './build-external-curricula-data-v2';

const VERSION = 'v2';
const intros = JSON.parse(
  readFileSync(
    path.resolve(__dirname, '../../../client/i18n/locales/english/intro.json'),
    'utf-8'
  )
) as CurriculumIntros;

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
      fs.existsSync(
        `${clientStaticPath}/curriculum-data/${VERSION}/submit-types.json`
      )
    ).toBe(true);
  });

  test('the available-superblocks file should have the correct structure', async () => {
    const filteredSuperBlockStages: string[] = Object.keys(SuperBlockStage)
      .filter(key => isNaN(Number(key))) // Filter out numeric keys to get only the names
      .filter(
        name => name !== 'Upcoming' && name !== 'Next' && name !== 'Catalog'
      ) // Filter out 'Upcoming', 'Next', and 'Catalog'
      .map(name => name.toLowerCase());

    const validateAvailableSuperBlocks = availableSuperBlocksValidator();
    const availableSuperblocks = JSON.parse(
      await fs.promises.readFile(
        `${clientStaticPath}/curriculum-data/${VERSION}/available-superblocks.json`,
        'utf-8'
      )
    ) as { superblocks: OrderedSuperBlocks };

    const result = validateAvailableSuperBlocks(availableSuperblocks);

    expect(Object.keys(availableSuperblocks.superblocks)).toHaveLength(
      filteredSuperBlockStages.length
    );

    expect(Object.keys(availableSuperblocks.superblocks)).toEqual(
      expect.arrayContaining(filteredSuperBlockStages)
    );

    expect(result.error?.details).toBeUndefined();
    expect(result.error).toBeFalsy();
  });

  test('the super block files generated should have the correct schema', async () => {
    const superBlocks = Object.values(SuperBlocks);

    const fileArray = (
      await readdirp.promise(`${clientStaticPath}/curriculum-data/${VERSION}`, {
        directoryFilter: ['!challenges'],
        fileFilter: entry => {
          // The directory contains super block files and other curriculum-related files.
          // We're only interested in super block ones.
          const isSuperBlock = superBlocks.some(superBlock =>
            entry.basename.includes(superBlock)
          );

          return isSuperBlock;
        }
      })
    ).map(file => file.path);

    expect(fileArray.length).toBeGreaterThan(0);

    fileArray.forEach(fileInArray => {
      const fileContent = fs.readFileSync(
        `${clientStaticPath}/curriculum-data/${VERSION}/${fileInArray}`,
        'utf-8'
      );

      const result = validateSuperBlock(
        JSON.parse(fileContent) as Record<string, unknown>
      );

      expect(result.error?.details).toBeUndefined();
      expect(result.error).toBeFalsy();
    });
  });

  test('block-based super blocks and blocks should have the correct data', async () => {
    const superBlocks = Object.values(SuperBlocks);

    const superBlockFiles = (
      await readdirp.promise(`${clientStaticPath}/curriculum-data/${VERSION}`, {
        directoryFilter: ['!challenges'],
        fileFilter: entry => {
          // The directory contains super block files and other curriculum-related files.
          // We're only interested in super block ones.
          const isSuperBlock = superBlocks.some(superBlock =>
            entry.basename.includes(superBlock)
          );

          const isChapterBasedSuperBlock = chapterBasedSuperBlocks.some(
            chapterBasedSuperBlock =>
              entry.basename.includes(chapterBasedSuperBlock)
          );

          return isSuperBlock && !isChapterBasedSuperBlock;
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
      const superBlockData = fileContent[
        superBlock
      ] as GeneratedBlockBasedCurriculumProps;

      // Temporary skip these checks to keep CI stable.
      // TODO: uncomment these once https://github.com/freeCodeCamp/freeCodeCamp/issues/60660 is completed.

      // Randomly pick a block to check its data.
      // const blocks = superBlockData.blocks;
      // const randomBlockIndex = Math.floor(Math.random() * blocks.length);
      // const randomBlock = blocks[randomBlockIndex];

      expect(superBlockData.intro).toEqual(intros[superBlock].intro);
      // expect(superBlockData.blocks[randomBlockIndex].intro).toEqual(
      //   intros[superBlock].blocks[randomBlock.meta.dashedName as string].intro
      // );
      // expect(superBlockData.blocks[randomBlockIndex].meta.name).toEqual(
      //   intros[superBlock].blocks[randomBlock.meta.dashedName as string].title
      // );
    });
  });

  test('chapter-based super blocks and blocks should have the correct data', async () => {
    const superBlocks = Object.values(SuperBlocks);

    const superBlockFiles = (
      await readdirp.promise(`${clientStaticPath}/curriculum-data/${VERSION}`, {
        directoryFilter: ['!challenges'],
        fileFilter: entry => {
          // The directory contains super block files and other curriculum-related files.
          // We're only interested in super block ones.
          const isSuperBlock = superBlocks.some(superBlock =>
            entry.basename.includes(superBlock)
          );

          const isChapterBasedSuperBlock = chapterBasedSuperBlocks.some(
            chapterBasedSuperBlock =>
              entry.basename.includes(chapterBasedSuperBlock)
          );

          return isSuperBlock && isChapterBasedSuperBlock;
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
      const superBlockData = fileContent[
        superBlock
      ] as GeneratedChapterBasedCurriculumProps;

      const superBlockIntros = intros[
        superBlock
      ] as ChapterBasedCurriculumIntros[SuperBlocks];

      // Check super block data
      expect(superBlockData.intro).toEqual(superBlockIntros.intro);

      // Loop through all chapters
      superBlockData.chapters
        .filter(({ comingSoon }) => !comingSoon)
        .forEach(chapter => {
          expect(chapter.name).toEqual(
            superBlockIntros.chapters[chapter.dashedName]
          );

          // Loop through all modules in the chapter
          chapter.modules
            .filter(({ comingSoon }) => !comingSoon)
            .forEach(module => {
              expect(module.name).toEqual(
                superBlockIntros.modules[module.dashedName]
              );
            });
        });

      // Temporary skip these checks to keep CI stable.
      // TODO: uncomment these once https://github.com/freeCodeCamp/freeCodeCamp/issues/60660 is completed.

      // Check block data
      // expect(
      //   superBlockData.chapters[randomChapterIndex].modules[randomModuleIndex]
      //     .blocks[randomBlockIndex].intro
      // ).toEqual(
      //   superBlockIntros.blocks[randomBlock.meta.dashedName as string].intro
      // );
      // expect(
      //   superBlockData.chapters[randomChapterIndex].modules[randomModuleIndex]
      //     .blocks[randomBlockIndex].meta.name
      // ).toEqual(
      //   superBlockIntros.blocks[randomBlock.meta.dashedName as string].title
      // );
    });
  });

  test('All public SuperBlocks should be present in the SuperBlock object', () => {
    // Create a mapping from string to shared/config SuperBlockStage enum value
    // so we can look up the enum value by string.
    const superBlockStageStringMap: Record<string, SuperBlockStage> = {
      core: SuperBlockStage.Core,
      english: SuperBlockStage.English,
      professional: SuperBlockStage.Professional,
      extra: SuperBlockStage.Extra,
      legacy: SuperBlockStage.Legacy,
      upcoming: SuperBlockStage.Upcoming,
      next: SuperBlockStage.Next
    };

    const stages = Object.keys(orderedSuperBlockInfo);

    expect(stages).not.toContain('next');
    expect(stages).not.toContain('upcoming');

    for (const stage of stages) {
      const superBlockDashedNames = orderedSuperBlockInfo[stage]?.map(
        superBlock => superBlock.dashedName
      );

      const stageValueInNum = superBlockStageStringMap[stage];

      expect(superBlockDashedNames).toEqual(
        expect.arrayContaining(superBlockStages[stageValueInNum])
      );
      expect(superBlockDashedNames).toHaveLength(
        superBlockStages[stageValueInNum].length
      );
    }
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
