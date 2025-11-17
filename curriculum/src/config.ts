import { resolve } from 'path';
import { config } from 'dotenv';

import { availableLangs } from '../../shared-dist/config/i18n.js';

config({ path: resolve(__dirname, '../../.env') });

const curriculumLangs = availableLangs.curriculum;

// checks that the CURRICULUM_LOCALE exists and is an available language
export function testedLang() {
  if (process.env.CURRICULUM_LOCALE) {
    if (curriculumLangs.includes(process.env.CURRICULUM_LOCALE)) {
      return process.env.CURRICULUM_LOCALE;
    } else {
      throw Error(`${process.env.CURRICULUM_LOCALE} is not a supported language.
      Before the site can be built, this language needs to be manually approved`);
    }
  } else {
    throw Error('LOCALE must be set for testing');
  }
}

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
