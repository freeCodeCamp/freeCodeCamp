const path = require('node:path');
const assert = require('node:assert');
const fs = require('node:fs');

const debug = require('debug')('fcc:file-handler');

const CURRICULUM_DIR = __dirname;
const I18N_CURRICULUM_DIR = path.resolve(
  CURRICULUM_DIR,
  'i18n-curriculum',
  'curriculum'
);
const STRUCTURE_DIR = path.resolve(CURRICULUM_DIR, 'structure');

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
  const { contentDir, i18nContentDir } = getLanguageConfig(lang);

  return lang === 'english' ? contentDir : i18nContentDir;
}

function getCurriculumStructure() {
  const curriculumPath = path.resolve(STRUCTURE_DIR, 'curriculum.json');
  if (!fs.existsSync(curriculumPath)) {
    throw new Error(`Curriculum file not found: ${curriculumPath}`);
  }

  return JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
}

function getBlockStructure(block) {
  const blockPath = path.resolve(STRUCTURE_DIR, 'blocks', `${block}.json`);
  if (!fs.existsSync(blockPath))
    throw Error(`Structure file not found for block ${block}: ${blockPath}`);

  return JSON.parse(fs.readFileSync(blockPath, 'utf8'));
}

function getSuperblockStructure(superblockFilename) {
  const superblockPath = path.resolve(
    STRUCTURE_DIR,
    'superblocks',
    `${superblockFilename}.json`
  );

  if (!fs.existsSync(superblockPath)) {
    throw Error(`Superblock file not found: ${superblockPath}`);
  }

  return JSON.parse(fs.readFileSync(superblockPath, 'utf8'));
}

exports.getLanguageConfig = getLanguageConfig;
exports.getContentDir = getContentDir;
exports.getBlockStructure = getBlockStructure;
exports.getSuperblockStructure = getSuperblockStructure;
exports.getCurriculumStructure = getCurriculumStructure;
