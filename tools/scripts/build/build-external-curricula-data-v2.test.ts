import path from 'path';
import fs, { readFileSync } from 'fs';

import readdirp from 'readdirp';

import {
  chapterBasedSuperBlocks,
  SuperBlocks,
  SuperBlockStage,
  superBlockStages
} from '../../../shared/config/curriculum';
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
  orderedSuperBlockInfo
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
    const validateAvailableSuperBlocks = availableSuperBlocksValidator();
    const availableSuperblocks: unknown = JSON.parse(
      await fs.promises.readFile(
        `${clientStaticPath}/curriculum-data/${VERSION}/available-superblocks.json`,
        'utf-8'
      )
    );

    const result = validateAvailableSuperBlocks(availableSuperblocks);

    if (result.error) {
      throw Error(
        `file: available-superblocks.json
${result.error.message}`
      );
    }
  });

  test('the super block files generated should have the correct schema', async () => {
    const fileArray = (
      await readdirp.promise(`${clientStaticPath}/curriculum-data/${VERSION}`, {
        directoryFilter: ['!challenges'],
        fileFilter: entry => {
          // The directory contains super block files and other curriculum-related files.
          // We're only interested in super block ones.
          const superBlocks = Object.values(SuperBlocks);
          return superBlocks.includes(entry.basename);
        }
      })
    ).map(file => file.path);

    fileArray.forEach(fileInArray => {
      const fileContent = fs.readFileSync(
        `${clientStaticPath}/curriculum-data/${VERSION}/${fileInArray}`,
        'utf-8'
      );

      const result = validateSuperBlock(JSON.parse(fileContent));

      if (result.error) {
        throw Error(`file: ${fileInArray}
${result.error.message}`);
      }
    });
  });

  test('block-based super blocks and blocks should have the correct data', async () => {
    const superBlockFiles = (
      await readdirp.promise(`${clientStaticPath}/curriculum-data/${VERSION}`, {
        directoryFilter: ['!challenges'],
        fileFilter: entry => {
          // The directory contains super block files and other curriculum-related files.
          // We're only interested in super block ones.
          const superBlocks = Object.values(SuperBlocks);
          return (
            superBlocks.includes(entry.basename) &&
            !chapterBasedSuperBlocks.includes(entry.basename)
          );
        }
      })
    ).map(file => file.path);

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

      // Randomly pick a block to check its data.
      const blocks = superBlockData.blocks;
      const randomBlockIndex = Math.floor(Math.random() * blocks.length);

      expect(superBlockData.intro).toEqual(intros[superBlock].intro);
      expect(superBlockData.blocks[randomBlockIndex].intro).toEqual(
        intros[superBlock].blocks[randomBlockIndex].intro
      );
      expect(superBlockData.blocks[randomBlockIndex].meta.name).toEqual(
        intros[superBlock].blocks[randomBlockIndex].title
      );
    });
  });

  test('chapter-based super blocks and blocks should have the correct data', async () => {
    const superBlockFiles = (
      await readdirp.promise(`${clientStaticPath}/curriculum-data/${VERSION}`, {
        directoryFilter: ['!challenges'],
        fileFilter: entry => {
          // The directory contains super block files and other curriculum-related files.
          // We're only interested in super block ones.
          const superBlocks = Object.values(SuperBlocks);
          return (
            superBlocks.includes(entry.basename) &&
            chapterBasedSuperBlocks.includes(entry.basename)
          );
        }
      })
    ).map(file => file.path);

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

      // Randomly pick a chapter.
      const chapters = superBlockData.chapters;
      const randomChapterIndex = Math.floor(Math.random() * chapters.length);
      const randomChapter = chapters[randomChapterIndex];

      // Randomly pick a module.
      const modules = randomChapter.modules;
      const randomModuleIndex = Math.floor(Math.random() * modules.length);
      const randomModule = modules[randomModuleIndex];

      // Randomly pick a block.
      const blocks = randomModule.blocks;
      const randomBlockIndex = Math.floor(Math.random() * blocks.length);

      expect(superBlockData.intro).toEqual(intros[superBlock].intro);
      expect(
        superBlockData.chapters[randomChapterIndex].modules[randomModuleIndex]
          .blocks[randomBlockIndex].intro
      ).toEqual(intros[superBlock].blocks[randomBlockIndex].intro);
      expect(
        superBlockData.chapters[randomChapterIndex].modules[randomModuleIndex]
          .blocks[randomBlockIndex].meta.name
      ).toEqual(intros[superBlock].blocks[randomBlockIndex].title);
    });
  });

  test('All public SuperBlocks should be present in the SuperBlock object', () => {
    const stages = Object.keys(orderedSuperBlockInfo).map(
      key => Number(key) as SuperBlockStage
    );

    expect(stages).not.toContain(SuperBlockStage.Next);
    expect(stages).not.toContain(SuperBlockStage.Upcoming);

    for (const stage of stages) {
      const superBlockDashedNames = orderedSuperBlockInfo[stage].map(
        superBlock => superBlock.dashedName
      );

      expect(superBlockDashedNames).toEqual(
        expect.arrayContaining(superBlockStages[stage])
      );
      expect(superBlockDashedNames).toHaveLength(
        superBlockStages[stage].length
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
