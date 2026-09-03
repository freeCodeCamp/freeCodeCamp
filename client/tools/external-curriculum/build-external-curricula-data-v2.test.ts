import path from 'path';
import fs from 'fs';

import readdirp from 'readdirp';
import { afterEach, describe, test, expect, vi } from 'vitest';

import {
  chapterBasedSuperBlocks,
  SuperBlocks,
  SuperBlockStage,
  superBlockStages
} from '@freecodecamp/shared/config/curriculum';
import { catalog } from '@freecodecamp/shared/config/catalog';
import {
  superblockSchemaValidator,
  availableSuperBlocksValidator,
  catalogValidator
} from './external-data-schema-v2';
import {
  type Curriculum,
  type GeneratedCurriculumProps,
  type GeneratedBlockBasedCurriculumProps,
  type GeneratedChapterBasedCurriculumProps,
  type ChapterBasedCurriculumIntros,
  type CatalogCourse,
  orderedSuperBlockInfo,
  OrderedSuperBlocks,
  catalogCourses,
  readCurriculumIntros,
  getCurriculumLocale,
  CurriculumIntros,
  fillIntrosFromEnglish,
  type SuperBlockIntro
} from './build-external-curricula-data-v2';

const VERSION = 'v2';
const intros = readCurriculumIntros(getCurriculumLocale());

const dummyIntro = Object.values(SuperBlocks)
  .map(s => ({ [s]: { title: s } }))
  .reduce((prev, curr) => ({ ...prev, ...curr }), {}) as CurriculumIntros;

describe('external curriculum data build', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });
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

  test('the catalog file should have the correct structure and data', async () => {
    const validateCatalog = catalogValidator();
    const catalogFile = JSON.parse(
      await fs.promises.readFile(
        `${clientStaticPath}/curriculum-data/${VERSION}/catalog.json`,
        'utf-8'
      )
    ) as { catalog: CatalogCourse[] };

    const result = validateCatalog(catalogFile);

    expect(result.error?.details).toBeUndefined();
    expect(result.error).toBeFalsy();

    expect(catalogFile.catalog).toHaveLength(catalog.length);

    catalogFile.catalog.forEach((course, index) => {
      const { superBlock, level, hours, topic } = catalog[index];

      expect(course).toEqual({
        dashedName: superBlock,
        title: intros[superBlock].title,
        summary: intros[superBlock].summary,
        level,
        hours,
        topic
      });
    });
  });

  test('every catalog course should have its blocks and challenges generated', () => {
    catalog.forEach(({ superBlock }) => {
      const superBlockPath = `${clientStaticPath}/curriculum-data/${VERSION}/${superBlock}.json`;

      expect(fs.existsSync(superBlockPath)).toBe(true);

      const fileContent = JSON.parse(
        fs.readFileSync(superBlockPath, 'utf-8')
      ) as Curriculum<GeneratedCurriculumProps>;
      const superBlockData = fileContent[superBlock];

      const blocks = chapterBasedSuperBlocks.includes(superBlock)
        ? (
            superBlockData as GeneratedChapterBasedCurriculumProps
          ).chapters.flatMap(chapter =>
            chapter.modules.flatMap(module => module.blocks)
          )
        : (superBlockData as GeneratedBlockBasedCurriculumProps).blocks;

      blocks.forEach(block => {
        const challengeOrder = block.meta.challengeOrder as { id: string }[];

        challengeOrder.forEach(({ id }) => {
          expect(
            fs.existsSync(
              `${clientStaticPath}/curriculum-data/${VERSION}/challenges/${superBlock}/${block.meta.dashedName as string}/${id}.json`
            )
          ).toBe(true);
        });
      });
    });
  });

  test('catalogCourses should use intro argument', () => {
    const courses = catalogCourses(dummyIntro);

    expect(courses[0]).toMatchObject({
      dashedName: catalog[0].superBlock,
      title: dummyIntro[catalog[0].superBlock].title,
      summary: []
    });
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

      expect(superBlockData.intro).toEqual(intros[superBlock].intro);
      const blocks = superBlockData.blocks;

      for (const block of blocks) {
        expect(block.intro).toEqual(
          intros[superBlock].blocks[block.meta.dashedName as string].intro
        );
        expect(block.meta.name).toEqual(
          intros[superBlock].blocks[block.meta.dashedName as string].title
        );
      }
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

      for (const chapter of superBlockData.chapters) {
        if (chapter.comingSoon) continue;

        for (const module of chapter.modules) {
          if (module.comingSoon) continue;

          for (const block of module.blocks) {
            expect(block.intro).toEqual(
              superBlockIntros.blocks[block.meta.dashedName as string].intro
            );
            expect(block.meta.name).toEqual(
              superBlockIntros.blocks[block.meta.dashedName as string].title
            );
          }
        }
      }
    });
  });

  test('All public SuperBlocks should be present in the SuperBlock object', () => {
    // Create a mapping from string to shared/config SuperBlockStage enum value
    // so we can look up the enum value by string.
    const superBlockStageStringMap: Record<string, SuperBlockStage> = {
      core: SuperBlockStage.Core,
      english: SuperBlockStage.English,
      spanish: SuperBlockStage.Spanish,
      chinese: SuperBlockStage.Chinese,
      professional: SuperBlockStage.Professional,
      extra: SuperBlockStage.Extra,
      legacy: SuperBlockStage.Legacy,
      upcoming: SuperBlockStage.Upcoming,
      next: SuperBlockStage.Next
    };

    const info = orderedSuperBlockInfo();
    const stages = Object.keys(info);

    expect(stages).not.toContain('next');
    expect(stages).not.toContain('upcoming');

    for (const stage of stages) {
      const superBlockDashedNames = info[stage]?.map(
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

  test('orderedSuperBlockInfo should use intro argument', () => {
    const info = orderedSuperBlockInfo(dummyIntro);

    expect(info.core[0]).toMatchObject({
      dashedName: SuperBlocks.RespWebDesignV9,
      title: dummyIntro[SuperBlocks.RespWebDesignV9].title
    });
  });
});

describe('fillIntrosFromEnglish', () => {
  const english = {
    [SuperBlocks.PythonV9]: {
      title: 'Python',
      intro: ['English superblock intro'],
      chapters: { 'python-basics': 'Python Basics' },
      modules: { 'python-recursion': 'Recursion' },
      blocks: {
        'quiz-recursion-python': {
          title: 'Recursion Quiz',
          intro: ['English quiz intro']
        },
        'review-recursion-python': {
          title: 'Review Recursion',
          intro: ['English review intro']
        }
      }
    },
    [SuperBlocks.RosettaCode]: {
      title: 'Rosetta Code',
      intro: ['English superblock intro'],
      blocks: {
        'rosetta-code': { title: 'Rosetta Code', intro: ['English'] }
      }
    },
    [SuperBlocks.ProjectEuler]: {
      title: 'Project Euler',
      intro: ['English superblock intro'],
      blocks: {
        'project-euler': { title: 'Project Euler', intro: ['English'] }
      }
    }
  } as unknown as Record<SuperBlocks, SuperBlockIntro>;

  const localised = {
    [SuperBlocks.PythonV9]: {
      title: 'Python (translated)',
      intro: ['Translated superblock intro'],
      chapters: { 'python-basics': 'Python Basics (translated)' },
      modules: {},
      blocks: {
        'quiz-recursion-python': { title: 'Recursion Quiz (translated)' }
      }
    },
    [SuperBlocks.RosettaCode]: {
      title: 'Rosetta Code (translated)',
      intro: ['Translated superblock intro'],
      blocks: {}
    }
  } as unknown as Record<SuperBlocks, SuperBlockIntro>;

  test('fills blocks and modules that only exist in english', () => {
    const filled = fillIntrosFromEnglish(localised, english);

    expect(
      filled[SuperBlocks.PythonV9].blocks['review-recursion-python']
    ).toEqual(english[SuperBlocks.PythonV9].blocks['review-recursion-python']);
    expect(filled[SuperBlocks.PythonV9].modules).toEqual({
      'python-recursion': 'Recursion'
    });
  });

  test('keeps the english intro when only the block title is translated', () => {
    const filled = fillIntrosFromEnglish(localised, english);

    expect(
      filled[SuperBlocks.PythonV9].blocks['quiz-recursion-python']
    ).toEqual({
      title: 'Recursion Quiz (translated)',
      intro: ['English quiz intro']
    });
  });

  test('keeps the translation when one exists', () => {
    const filled = fillIntrosFromEnglish(localised, english);

    expect(filled[SuperBlocks.PythonV9].title).toBe('Python (translated)');
    expect(filled[SuperBlocks.PythonV9].chapters).toEqual({
      'python-basics': 'Python Basics (translated)'
    });
  });

  test('falls back to english for an untranslated superblock', () => {
    const filled = fillIntrosFromEnglish(localised, english);

    expect(filled[SuperBlocks.ProjectEuler]).toEqual(
      english[SuperBlocks.ProjectEuler]
    );
  });

  test('does not add chapter records to block based superblocks', () => {
    const filled = fillIntrosFromEnglish(localised, english);

    expect(filled[SuperBlocks.RosettaCode].title).toBe(
      'Rosetta Code (translated)'
    );
    expect(filled[SuperBlocks.RosettaCode]).not.toHaveProperty('chapters');
    expect(filled[SuperBlocks.RosettaCode]).not.toHaveProperty('modules');
  });
});
