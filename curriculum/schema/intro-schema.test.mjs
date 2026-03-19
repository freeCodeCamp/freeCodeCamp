import path from 'node:path';
import { readFileSync } from 'node:fs';

import { describe, expect, it } from 'vitest';

import { addSuperblockStructure } from '../src/build-curriculum.js';
import { getCurriculumStructure } from '../src/file-handler.js';
import introSchema from './intro-schema.js';

const { validateIntroSchema } = introSchema;

const introPath = path.resolve(
  import.meta.dirname,
  '../../client/i18n/locales/english/intro.json'
);

const intros = JSON.parse(readFileSync(introPath, 'utf8'));

function getExpectedBlocksBySuperblock() {
  const { superblocks } = getCurriculumStructure();

  return addSuperblockStructure(superblocks, true).reduce(
    (expected, { name, blocks }) => {
      expected[name] = blocks.map(({ dashedName }) => dashedName);
      return expected;
    },
    {}
  );
}

describe('intro schema', () => {
  it('includes block titles for every curriculum block', () => {
    const result = validateIntroSchema(intros, getExpectedBlocksBySuperblock());

    expect(result.error).toBeUndefined();
  });

  it('fails if a block title entry is missing', () => {
    const expectedBlocksBySuperblock = getExpectedBlocksBySuperblock();
    const [superblock, blocks] = Object.entries(expectedBlocksBySuperblock)[0];
    const block = blocks[0];
    const introsWithoutBlock = structuredClone(intros);

    delete introsWithoutBlock[superblock].blocks[block];

    const result = validateIntroSchema(introsWithoutBlock, {
      [superblock]: [block]
    });

    expect(result.error).toBeDefined();
    expect(result.error?.message).toContain(`${superblock}/${block}`);
  });
});
