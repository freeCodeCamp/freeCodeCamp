import { resolve } from 'node:path';
import assert from 'node:assert';
import { config } from 'dotenv';

import { availableLangs } from '@freecodecamp/shared/config/i18n';

config({ path: resolve(__dirname, '../../.env') });

const curriculumLangs = availableLangs.curriculum;

function isAllowedLang(lang: string): lang is (typeof curriculumLangs)[number] {
  return curriculumLangs.includes(lang as (typeof curriculumLangs)[number]);
}

assert.ok(process.env.CURRICULUM_LOCALE);
assert.ok(isAllowedLang(process.env.CURRICULUM_LOCALE));

export const CURRICULUM_LOCALE = process.env.CURRICULUM_LOCALE;

export const SHOW_UPCOMING_CHANGES =
  process.env.SHOW_UPCOMING_CHANGES === 'true';

export const FCC_CHALLENGE_ID = process.env.FCC_CHALLENGE_ID
  ? process.env.FCC_CHALLENGE_ID.trim()
  : undefined;

const FCC_BLOCK = process.env.FCC_BLOCK
  ? process.env.FCC_BLOCK.trim()
  : undefined;
const FCC_SUPERBLOCK = process.env.FCC_SUPERBLOCK
  ? process.env.FCC_SUPERBLOCK.trim()
  : undefined;

export const curriculumFilter = {
  ...(FCC_CHALLENGE_ID && { challengeId: FCC_CHALLENGE_ID }),
  ...(FCC_BLOCK && { block: FCC_BLOCK }),
  ...(FCC_SUPERBLOCK && { superBlock: FCC_SUPERBLOCK })
};
