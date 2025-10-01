const path = require('node:path');
const assert = require('node:assert');
const fs = require('node:fs');
const fsP = require('node:fs/promises');

const debug = require('debug')('fcc:file-handler');

const CURRICULUM_DIR = __dirname;
const I18N_CURRICULUM_DIR = path.resolve(
  CURRICULUM_DIR,
  'i18n-curriculum',
  'curriculum'
);
const STRUCTURE_DIR = path.resolve(CURRICULUM_DIR, 'structure');
const BLOCK_STRUCTURE_DIR = path.resolve(STRUCTURE_DIR, 'blocks');

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
function getContentConfig(
  lang,
  { baseDir, i18nBaseDir } = {
    baseDir: CURRICULUM_DIR,
    i18nBaseDir: I18N_CURRICULUM_DIR
  }
) {
  const contentDir = path.resolve(baseDir, 'challenges', 'english');
  const i18nContentDir = path.resolve(i18nBaseDir, 'challenges', lang);
  const blockContentDir = path.resolve(contentDir, 'blocks');
  const i18nBlockContentDir = path.resolve(i18nContentDir, 'blocks');
  const dictionariesDir = path.resolve(baseDir, 'dictionaries');
  const i18nDictionariesDir = path.resolve(i18nBaseDir, 'dictionaries');

  if (lang !== 'english') {
    assert(
      fs.existsSync(i18nContentDir),
      `i18n content directory does not exist: ${i18nContentDir}`
    );
    assert(
      fs.existsSync(i18nBlockContentDir),
      `i18n block content directory does not exist: ${i18nBlockContentDir}`
    );
    assert(
      fs.existsSync(i18nDictionariesDir),
      `i18n dictionaries directory does not exist: ${i18nDictionariesDir}`
    );
  }

  debug(`Using content directory: ${contentDir}`);
  debug(`Using i18n content directory: ${i18nContentDir}`);
  debug(`Using block content directory: ${blockContentDir}`);
  debug(`Using i18n block content directory: ${i18nBlockContentDir}`);
  debug(`Using dictionaries directory: ${dictionariesDir}`);
  debug(`Using i18n dictionaries directory: ${i18nDictionariesDir}`);

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
function getContentDir(lang) {
  const { contentDir, i18nContentDir } = getContentConfig(lang);

  return lang === 'english' ? contentDir : i18nContentDir;
}

function getCurriculumStructure() {
  const curriculumPath = path.resolve(STRUCTURE_DIR, 'curriculum.json');
  if (!fs.existsSync(curriculumPath)) {
    throw new Error(`Curriculum file not found: ${curriculumPath}`);
  }

  return JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
}

function getBlockStructurePath(block) {
  return path.resolve(BLOCK_STRUCTURE_DIR, `${block}.json`);
}

function getBlockStructureDir() {
  return BLOCK_STRUCTURE_DIR;
}

function getBlockStructure(block) {
  return JSON.parse(fs.readFileSync(getBlockStructurePath(block), 'utf8'));
}

async function writeBlockStructure(block, structure) {
  // dynamically importing prettier because Gatsby build and develop fail when
  // it's required.
  const prettier = await import('prettier');
  const content = await prettier.format(JSON.stringify(structure), {
    parser: 'json'
  });
  await fsP.writeFile(getBlockStructurePath(block), content, 'utf8');
}

async function writeSuperblockStructure(superblock, structure) {
  // dynamically importing prettier because Gatsby build and develop fail when
  // it's required.
  const prettier = await import('prettier');
  const content = await prettier.format(JSON.stringify(structure), {
    parser: 'json'
  });
  await fsP.writeFile(getSuperblockStructurePath(superblock), content);
}

function getSuperblockStructure(superblockFilename) {
  const superblockPath = getSuperblockStructurePath(superblockFilename);

  if (!fs.existsSync(superblockPath)) {
    throw Error(`Superblock file not found: ${superblockPath}`);
  }

  return JSON.parse(fs.readFileSync(superblockPath, 'utf8'));
}

function getSuperblockStructurePath(superblockFilename) {
  return path.resolve(
    STRUCTURE_DIR,
    'superblocks',
    `${superblockFilename}.json`
  );
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
function getLanguageConfig(
  lang,
  { baseDir, i18nBaseDir } = {
    baseDir: CURRICULUM_DIR,
    i18nBaseDir: I18N_CURRICULUM_DIR
  }
) {
  const contentDir = path.resolve(baseDir, 'challenges', 'english');
  const i18nContentDir = path.resolve(i18nBaseDir, 'challenges', lang);
  const blockContentDir = path.resolve(contentDir, 'blocks');
  const i18nBlockContentDir = path.resolve(i18nContentDir, 'blocks');
  const dictionariesDir = path.resolve(baseDir, 'dictionaries');
  const i18nDictionariesDir = path.resolve(i18nBaseDir, 'dictionaries');

  if (lang !== 'english') {
    assert(
      fs.existsSync(i18nContentDir),
      `i18n content directory does not exist: ${i18nContentDir}`
    );
    assert(
      fs.existsSync(i18nBlockContentDir),
      `i18n block content directory does not exist: ${i18nBlockContentDir}`
    );
    assert(
      fs.existsSync(i18nDictionariesDir),
      `i18n dictionaries directory does not exist: ${i18nDictionariesDir}`
    );
  }

  debug(`Using content directory: ${contentDir}`);
  debug(`Using i18n content directory: ${i18nContentDir}`);
  debug(`Using i18n block content directory: ${i18nBlockContentDir}`);
  debug(`Using dictionaries directory: ${dictionariesDir}`);
  debug(`Using i18n dictionaries directory: ${i18nDictionariesDir}`);

  return {
    contentDir,
    i18nContentDir,
    blockContentDir,
    i18nBlockContentDir,
    dictionariesDir,
    i18nDictionariesDir
  };
}

exports.getContentConfig = getContentConfig;
exports.getContentDir = getContentDir;
exports.getBlockStructureDir = getBlockStructureDir;
exports.getBlockStructure = getBlockStructure;
exports.getBlockStructurePath = getBlockStructurePath;
exports.getSuperblockStructure = getSuperblockStructure;
exports.getCurriculumStructure = getCurriculumStructure;
exports.writeBlockStructure = writeBlockStructure;
exports.writeSuperblockStructure = writeSuperblockStructure;
exports.getLanguageConfig = getLanguageConfig;
