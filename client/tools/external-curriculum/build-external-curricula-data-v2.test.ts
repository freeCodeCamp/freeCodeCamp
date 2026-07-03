import os from 'os';
import path from 'path';
import fs from 'fs';

import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  test,
  expect,
  vi
} from 'vitest';

import {
  chapterBasedSuperBlocks,
  SuperBlocks,
  SuperBlockStage,
  superBlockStages
} from '@freecodecamp/shared/config/curriculum';
import {
  availableSuperBlocksValidator,
  superblockSchemaValidator
} from './external-data-schema-v2';
import {
  type Curriculum,
  type CurriculumIntros,
  type CurriculumProps,
  type GeneratedBlockBasedCurriculumProps,
  type GeneratedChapterBasedCurriculumProps,
  type OrderedSuperBlocks,
  buildExtCurriculumDataV2,
  orderedSuperBlockInfo,
} from './build-external-curricula-data-v2';
import { getSuperblockStructure } from '@freecodecamp/curriculum/file-handler';

vi.mock('@freecodecamp/curriculum/file-handler');

const VERSION = 'v2';
const BLOCK_BASED_SB = SuperBlocks.CodingInterviewPrep;
const CHAPTER_BASED_SB = SuperBlocks.RespWebDesignV9;

const dummyIntro = Object.values(SuperBlocks)
  .map(s => ({ [s]: { title: s } }))
  .reduce((prev, curr) => ({ ...prev, ...curr }), {}) as CurriculumIntros;

function buildFixtureIntros(): CurriculumIntros {
  const stub: Record<string, unknown> = {};
  for (const sb of Object.values(SuperBlocks)) {
    if (chapterBasedSuperBlocks.includes(sb)) {
      stub[sb] = {
        title: sb,
        intro: ['stub intro'],
        chapters: {},
        modules: {},
        blocks: {}
      };
    } else {
      stub[sb] = { title: sb, intro: ['stub intro'], blocks: {} };
    }
  }

  stub[BLOCK_BASED_SB] = {
    title: 'Coding Interview Prep',
    intro: ['Prepare for coding interviews.'],
    blocks: {
      'test-block': {
        title: 'Test Block Title',
        intro: ['Block intro paragraph.']
      }
    }
  };

  stub[CHAPTER_BASED_SB] = {
    title: 'Responsive Web Design V9',
    intro: ['Learn responsive web design.'],
    chapters: {
      'test-chapter': 'Test Chapter Name',
      'coming-soon-chapter': 'Coming Soon Chapter'
    },
    modules: { 'test-module': 'Test Module Name' },
    blocks: {
      'test-chapter-block': {
        title: 'Chapter Block Title',
        intro: ['Chapter block intro.']
      }
    }
  };

  return stub as CurriculumIntros;
}

function buildFixtureCurriculum(): Curriculum<CurriculumProps> {
  const stub: Record<string, unknown> = {};
  for (const sb of Object.values(SuperBlocks)) {
    stub[sb] = { intro: ['stub'], blocks: {} };
  }

  stub[BLOCK_BASED_SB] = {
    intro: ['unused'],
    blocks: {
      'test-block': {
        desc: ['desc'],
        intro: ['unused'],
        challenges: [{ id: 'challenge-1', title: 'Test Challenge' }],
        meta: {
          name: 'Original Name',
          isUpcomingChange: false,
          dashedName: 'test-block',
          helpCategory: 'JavaScript',
          order: 0,
          superBlock: BLOCK_BASED_SB,
          blockLayout: 'challenge-list',
          challengeOrder: [{ id: 'challenge-1', title: 'Test Challenge' }]
        }
      }
    }
  };

  stub[CHAPTER_BASED_SB] = {
    intro: ['unused'],
    blocks: {
      'test-chapter-block': {
        desc: ['desc'],
        intro: ['unused'],
        challenges: [{ id: 'chapter-challenge-1', title: 'Chapter Challenge' }],
        meta: {
          name: 'Original',
          isUpcomingChange: false,
          dashedName: 'test-chapter-block',
          helpCategory: 'HTML-CSS',
          order: 0,
          superBlock: CHAPTER_BASED_SB,
          blockLayout: 'challenge-list',
          blockLabel: 'lecture',
          chapter: 'test-chapter',
          module: 'test-module',
          challengeOrder: [
            { id: 'chapter-challenge-1', title: 'Chapter Challenge' }
          ]
        }
      }
    }
  };

  return stub as unknown as Curriculum<CurriculumProps>;
}

describe('buildExtCurriculumDataV2', () => {
  let tmpDir: string;

  beforeAll(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ext-curriculum-test-'));

    vi.mocked(getSuperblockStructure).mockImplementation(key => {
      if (key === (CHAPTER_BASED_SB as string)) {
        return {
          chapters: [
            {
              dashedName: 'test-chapter',
              modules: [
                {
                  dashedName: 'test-module',
                  blocks: ['test-chapter-block']
                }
              ]
            },
            {
              dashedName: 'coming-soon-chapter',
              comingSoon: true,
              modules: []
            }
          ]
        };
      }
      return { chapters: [] };
    });

    buildExtCurriculumDataV2(buildFixtureCurriculum(), {
      dataPath: tmpDir,
      intros: buildFixtureIntros()
    });
  });

  afterAll(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
    vi.restoreAllMocks();
  });

  test('available-superblocks.json passes schema validation', () => {
    const filePath = path.join(tmpDir, VERSION, 'available-superblocks.json');
    expect(fs.existsSync(filePath)).toBe(true);

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as {
      superblocks: OrderedSuperBlocks;
    };
    const validate = availableSuperBlocksValidator();
    const result = validate(data);

    expect(result.error).toBeFalsy();
  });

  test('superblock files pass schema validation', () => {
    const validateSuperBlock = superblockSchemaValidator();

    for (const sb of [BLOCK_BASED_SB, CHAPTER_BASED_SB]) {
      const filePath = path.join(tmpDir, VERSION, `${sb}.json`);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Record<
        string,
        unknown
      >;
      const result = validateSuperBlock(data);

      expect(result.error?.details).toBeUndefined();
      expect(result.error).toBeFalsy();
    }
  });

  test('block-based superblock file has correct intro and meta.name', () => {
    const filePath = path.join(tmpDir, VERSION, `${BLOCK_BASED_SB}.json`);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Record<
      string,
      GeneratedBlockBasedCurriculumProps
    >;

    expect(data[BLOCK_BASED_SB]).toMatchObject({
      intro: ['Prepare for coding interviews.'],
      blocks: [
        {
          intro: ['Block intro paragraph.'],
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          meta: expect.objectContaining({
            name: 'Test Block Title',
            dashedName: 'test-block'
          })
        }
      ]
    });
  });

  test('chapter-based superblock file has correct structure with comingSoon filtered', () => {
    const filePath = path.join(tmpDir, VERSION, `${CHAPTER_BASED_SB}.json`);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Record<
      string,
      GeneratedChapterBasedCurriculumProps
    >;

    expect(data[CHAPTER_BASED_SB]).toMatchObject({
      intro: ['Learn responsive web design.'],
      chapters: [
        {
          name: 'Test Chapter Name',
          modules: [
            {
              name: 'Test Module Name',
              blocks: [
                {
                  intro: ['Chapter block intro.'],
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  meta: expect.objectContaining({
                    name: 'Chapter Block Title',
                    dashedName: 'test-chapter-block'
                  })
                }
              ]
            }
          ]
        },
        { comingSoon: true, modules: [] }
      ]
    });

    // chapter and module fields should be omitted from block meta
    const blockMeta =
      data[CHAPTER_BASED_SB].chapters[0].modules[0].blocks[0].meta;
    expect(blockMeta).not.toHaveProperty('chapter');
    expect(blockMeta).not.toHaveProperty('module');
  });

  test('challenge files are written at the correct paths', () => {
    expect(
      fs.existsSync(
        path.join(
          tmpDir,
          VERSION,
          'challenges',
          BLOCK_BASED_SB,
          'test-block',
          'challenge-1.json'
        )
      )
    ).toBe(true);

    expect(
      fs.existsSync(
        path.join(
          tmpDir,
          VERSION,
          'challenges',
          CHAPTER_BASED_SB,
          'test-chapter-block',
          'chapter-challenge-1.json'
        )
      )
    ).toBe(true);
  });

  test('submit-types.json is written', () => {
    expect(fs.existsSync(path.join(tmpDir, VERSION, 'submit-types.json'))).toBe(
      true
    );
  });

  test('scene-assets.json is written', () => {
    expect(fs.existsSync(path.join(tmpDir, VERSION, 'scene-assets.json'))).toBe(
      true
    );
  });
});

describe('orderedSuperBlockInfo', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
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

  test('orderedSuperBlockInfo should use intro argument', () => {
    const info = orderedSuperBlockInfo(dummyIntro);

    expect(info.core[0]).toMatchObject({
      dashedName: SuperBlocks.RespWebDesignV9,
      title: dummyIntro[SuperBlocks.RespWebDesignV9].title
    });
  });
});
