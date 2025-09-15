import { resolve, dirname } from 'node:path';
import assert from 'node:assert';
import { existsSync, readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import debug from 'debug';

const log = debug('fcc:file-handler');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const CURRICULUM_DIR = __dirname;
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
  lang,
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
export function getContentDir(lang) {
  const { contentDir, i18nContentDir } = getContentConfig(lang);

  return lang === 'english' ? contentDir : i18nContentDir;
}

export function getCurriculumStructure() {
  const curriculumPath = resolve(STRUCTURE_DIR, 'curriculum.json');
  if (!existsSync(curriculumPath)) {
    throw new Error(`Curriculum file not found: ${curriculumPath}`);
  }

  return JSON.parse(readFileSync(curriculumPath, 'utf8'));
}

export function getBlockStructurePath(block) {
  return resolve(BLOCK_STRUCTURE_DIR, `${block}.json`);
}

export function getBlockStructureDir() {
  return BLOCK_STRUCTURE_DIR;
}

export function getBlockStructure(block) {
  return JSON.parse(readFileSync(getBlockStructurePath(block), 'utf8'));
}

export async function writeBlockStructure(block, structure) {
  // dynamically importing prettier because Gatsby build and develop fail when
  // it's required.
  const prettier = await import('prettier');
  const content = await prettier.format(JSON.stringify(structure), {
    parser: 'json'
  });
  await writeFile(getBlockStructurePath(block), content, 'utf8');
}

export async function writeSuperblockStructure(superblock, structure) {
  // dynamically importing prettier because Gatsby build and develop fail when
  // it's required.
  const prettier = await import('prettier');
  const content = await prettier.format(JSON.stringify(structure), {
    parser: 'json'
  });
  await writeFile(getSuperblockStructurePath(superblock), content);
}

export function getSuperblockStructure(superblockFilename) {
  const superblockPath = getSuperblockStructurePath(superblockFilename);

  if (!existsSync(superblockPath)) {
    throw Error(`Superblock file not found: ${superblockPath}`);
  }

  return JSON.parse(readFileSync(superblockPath, 'utf8'));
}

export function getSuperblockStructurePath(superblockFilename) {
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
  lang,
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
