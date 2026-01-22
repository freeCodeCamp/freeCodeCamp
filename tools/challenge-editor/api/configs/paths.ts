import { join } from 'path';

export const SUPERBLOCK_META_DIR = join(
  process.cwd(),
  '..',
  '..',
  '..',
  'curriculum',
  'structure',
  'superblocks'
);

export const BLOCK_META_DIR = join(
  process.cwd(),
  '..',
  '..',
  '..',
  'curriculum',
  'structure',
  'blocks'
);

export const CHALLENGE_DIR = join(
  process.cwd(),
  '..',
  '..',
  '..',
  'curriculum',
  'challenges',
  'english',
  'blocks'
);

export const ENGLISH_LANG_DIR = join(
  process.cwd(),
  '..',
  '..',
  '..',
  'client',
  'i18n',
  'locales',
  'english'
);
