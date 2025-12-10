import { dirname, resolve } from 'node:path';
import assert from 'node:assert';
import { existsSync, readFileSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import debug from 'debug';

import type { Chapter } from '../../shared-dist/config/chapters.js';
import type { SuperBlocks } from '../../shared-dist/config/curriculum.js';
import type { Certification } from '../../shared-dist/config/certification-settings.js';

const log = debug('fcc:file-handler');

let __dirnameCompat: string;

if (typeof __dirname !== 'undefined') {
  // CJS
  __dirnameCompat = __dirname;
} else {
  // ESM – wrap in Function so CJS parsers don't see it
  const metaUrl = new Function('return import.meta.url')() as string;
  __dirnameCompat = dirname(fileURLToPath(metaUrl));
}

const CURRICULUM_DIR = resolve(__dirnameCompat, '..');
const I18N_CURRICULUM_DIR = resolve(
  CURRICULUM_DIR,
  'i18n-curriculum',
  'curriculum'
);
const STRUCTURE_DIR = resolve(CURRICULUM_DIR, 'structure');
const BLOCK_STRUCTURE_DIR = resolve(STRUCTURE_DIR, 'blocks');

/**
 * Gets language-specific configuration paths for curriculum content
 * @param {string} lang - The language code (e.g., 'english', 'spanish', etc.)
 * @param {Object} [options] - Optional configuration object with directory overrides
 * @param {string} [options.baseDir] - Base directory for curriculum content (defaults to CURRICULUM_DIR)
 * @param {string} [options.i18nBaseDir] - Base directory for i18n content (defaults to I18N_CURRICULUM_DIR)
 * @param {string} [options.structureDir] - Directory for curriculum structure (defaults to STRUCTURE_DIR)
 * @returns {Object} Object containing all relevant directory paths for the language
 * @throws {AssertionError} When required i18n directories don't exist for non-English languages
 */
export function getContentConfig(
  lang: string,
  { baseDir, i18nBaseDir } = {
    baseDir: CURRICULUM_DIR,
    i18nBaseDir: I18N_CURRICULUM_DIR
  }
) {
  const contentDir = resolve(baseDir, 'challenges', 'english');
  const i18nContentDir = resolve(i18nBaseDir, 'challenges', lang);
  const blockContentDir = resolve(contentDir, 'blocks');
  const i18nBlockContentDir = resolve(i18nContentDir, 'blocks');
  const dictionariesDir = resolve(baseDir, 'dictionaries');
  const i18nDictionariesDir = resolve(i18nBaseDir, 'dictionaries');

  if (lang !== 'english') {
    assert(
      existsSync(i18nContentDir),
      `i18n content directory does not exist: ${i18nContentDir}`
    );
    assert(
      existsSync(i18nBlockContentDir),
      `i18n block content directory does not exist: ${i18nBlockContentDir}`
    );
    assert(
      existsSync(i18nDictionariesDir),
      `i18n dictionaries directory does not exist: ${i18nDictionariesDir}`
    );
  }

  log(`Using content directory: ${contentDir}`);
  log(`Using i18n content directory: ${i18nContentDir}`);
  log(`Using block content directory: ${blockContentDir}`);
  log(`Using i18n block content directory: ${i18nBlockContentDir}`);
  log(`Using dictionaries directory: ${dictionariesDir}`);
  log(`Using i18n dictionaries directory: ${i18nDictionariesDir}`);

  return {
    contentDir,
    i18nContentDir,
    blockContentDir,
    i18nBlockContentDir,
    dictionariesDir,
    i18nDictionariesDir
  };
}

/**
 * Gets the appropriate content directory path for a given language
 * @param {string} lang - The language code (e.g., 'english', 'spanish', etc.)
 * @returns {string} Path to the content directory for the specified language
 */
export function getContentDir(lang: string) {
  const { contentDir, i18nContentDir } = getContentConfig(lang);

  return lang === 'english' ? contentDir : i18nContentDir;
}

export function getCurriculumStructure() {
  const curriculumPath = resolve(STRUCTURE_DIR, 'curriculum.json');
  if (!existsSync(curriculumPath)) {
    throw new Error(`Curriculum file not found: ${curriculumPath}`);
  }

  return JSON.parse(readFileSync(curriculumPath, 'utf8')) as {
    superblocks: SuperBlocks[];
    certifications: string[];
  };
}

export function getBlockStructurePath(block: string) {
  return resolve(BLOCK_STRUCTURE_DIR, `${block}.json`);
}

export function getBlockStructureDir() {
  return BLOCK_STRUCTURE_DIR;
}

export type ChallengeFile = {
  contents: string;
  ext: string;
  name: string;
};

export type Challenge = {
  id: string;
  title: string;
  // infer other properties:
  description?: string;
  instructions?: string;
  questions?: string[];
  block?: string;
  blockLabel?: string;
  blockLayout?: string;
  hasEditableBoundaries?: boolean;
  order?: number;
  superBlock?: SuperBlocks;
  superOrder?: number;
  challengeOrder?: number;
  isLastChallengeInBlock?: boolean;
  required?: string[];
  template?: string;
  helpCategory?: string;
  usesMultifileEditor?: boolean;
  disableLoopProtectTests?: boolean;
  disableLoopProtectPreview?: boolean;
  chapter?: string;
  module?: string;
  certification?: Certification;
  translationPending?: boolean;
  missing?: boolean;
  challengeFiles?: ChallengeFile[];
  solutions?: ChallengeFile[][];
};

export interface BlockStructure {
  name: string;
  hasEditableBoundaries?: boolean;
  required?: string[];
  template?: string;
  helpCategory?: string;
  usesMultifileEditor?: boolean;
  disableLoopProtectTests?: boolean;
  disableLoopProtectPreview?: boolean;
  blockLayout: string;
  blockLabel: string;
  challengeOrder: Challenge[];
  dashedName: string;
  isUpcomingChange?: boolean;
  chapter?: string;
  module?: string;
}

export async function createBlockFolder(block: string) {
  const { blockContentDir } = getContentConfig('english') as {
    blockContentDir: string;
  };

  const newBlockDir = resolve(blockContentDir, block);
  await mkdir(newBlockDir, { recursive: true });
  return newBlockDir + '/';
}

export function getBlockStructure(block: string) {
  return JSON.parse(
    readFileSync(getBlockStructurePath(block), 'utf8')
  ) as BlockStructure;
}

export async function writeBlockStructure(block: string, structure: unknown) {
  // dynamically importing prettier because Gatsby build and develop fail when
  // it's required.
  const prettier = await import('prettier');
  const content = await prettier.format(JSON.stringify(structure), {
    parser: 'json'
  });
  await writeFile(getBlockStructurePath(block), content, 'utf8');
}

export async function writeSuperblockStructure(
  superblock: string,
  structure: unknown
) {
  // dynamically importing prettier because Gatsby build and develop fail when
  // it's required.
  const prettier = await import('prettier');
  const content = await prettier.format(JSON.stringify(structure), {
    parser: 'json'
  });
  await writeFile(getSuperblockStructurePath(superblock), content);
}

export function getSuperblockStructure(superblockFilename: string) {
  const superblockPath = getSuperblockStructurePath(superblockFilename);

  if (!existsSync(superblockPath)) {
    throw Error(`Superblock file not found: ${superblockPath}`);
  }

  return JSON.parse(readFileSync(superblockPath, 'utf8')) as {
    blocks?: string[];
    chapters?: Chapter[];
  };
}

export function getSuperblockStructurePath(superblockFilename: string) {
  return resolve(STRUCTURE_DIR, 'superblocks', `${superblockFilename}.json`);
}

/**
 * Gets language-specific configuration paths for curriculum content
 * @param {string} lang - The language code (e.g., 'english', 'spanish', etc.)
 * @param {Object} [options] - Optional configuration object with directory overrides
 * @param {string} [options.baseDir] - Base directory for curriculum content (defaults to CURRICULUM_DIR)
 * @param {string} [options.i18nBaseDir] - Base directory for i18n content (defaults to I18N_CURRICULUM_DIR)
 * @param {string} [options.structureDir] - Directory for curriculum structure (defaults to STRUCTURE_DIR)
 * @returns {Object} Object containing all relevant directory paths for the language
 * @throws {AssertionError} When required i18n directories don't exist for non-English languages
 */
export function getLanguageConfig(
  lang: string,
  { baseDir, i18nBaseDir } = {
    baseDir: CURRICULUM_DIR,
    i18nBaseDir: I18N_CURRICULUM_DIR
  }
) {
  const contentDir = resolve(baseDir, 'challenges', 'english');
  const i18nContentDir = resolve(i18nBaseDir, 'challenges', lang);
  const blockContentDir = resolve(contentDir, 'blocks');
  const i18nBlockContentDir = resolve(i18nContentDir, 'blocks');
  const dictionariesDir = resolve(baseDir, 'dictionaries');
  const i18nDictionariesDir = resolve(i18nBaseDir, 'dictionaries');

  if (lang !== 'english') {
    assert(
      existsSync(i18nContentDir),
      `i18n content directory does not exist: ${i18nContentDir}`
    );
    assert(
      existsSync(i18nBlockContentDir),
      `i18n block content directory does not exist: ${i18nBlockContentDir}`
    );
    assert(
      existsSync(i18nDictionariesDir),
      `i18n dictionaries directory does not exist: ${i18nDictionariesDir}`
    );
  }

  log(`Using content directory: ${contentDir}`);
  log(`Using i18n content directory: ${i18nContentDir}`);
  log(`Using block content directory: ${blockContentDir}`);
  log(`Using i18n block content directory: ${i18nBlockContentDir}`);
  log(`Using dictionaries directory: ${dictionariesDir}`);
  log(`Using i18n dictionaries directory: ${i18nDictionariesDir}`);

  return {
    contentDir,
    i18nContentDir,
    blockContentDir,
    i18nBlockContentDir,
    dictionariesDir,
    i18nDictionariesDir
  };
}
