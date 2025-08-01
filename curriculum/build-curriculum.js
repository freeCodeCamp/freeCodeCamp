const fs = require('fs');
const path = require('path');
const assert = require('assert');

const { isEmpty } = require('lodash');
const debug = require('debug')('fcc:build-curriculum');

const { SuperblockCreator, BlockCreator } = require('./build-superblock');

const { buildCertification } = require('./build-certification');

const CURRICULUM_DIR = __dirname;
const I18N_CURRICULUM_DIR = path.resolve(
  CURRICULUM_DIR,
  'i18n-curriculum',
  'curriculum'
);
const STRUCTURE_DIR = path.resolve(CURRICULUM_DIR, 'structure');

/**
 * Creates a BlockCreator instance for a specific language with appropriate configuration
 * @param {string} lang - The language code (e.g., 'english', 'spanish', etc.)
 * @param {Object} [opts] - Optional configuration object
 * @param {string} [opts.baseDir] - Base directory for curriculum content
 * @param {string} [opts.i18nBaseDir] - Base directory for i18n curriculum content
 * @param {string} [opts.structureDir] - Directory containing curriculum structure
 * @returns {BlockCreator} A configured BlockCreator instance
 */
const getBlockCreator = (lang, opts) => {
  const {
    blockContentDir,
    blockStructureDir,
    i18nBlockContentDir,
    dictionariesDir,
    i18nDictionariesDir
  } = getLanguageConfig(lang, opts);

  const secondDictionaryDir =
    lang === 'english' ? dictionariesDir : i18nDictionariesDir;

  return new BlockCreator({
    lang,
    blockContentDir,
    blockStructureDir,
    i18nBlockContentDir,
    commentTranslations: createCommentMap(dictionariesDir, secondDictionaryDir)
  });
};

/**
 * Gets a translation entry for a specific English ID and text across all languages
 * @param {Object} dicts - Dictionary object containing translations for each language
 * @param {Object} params - Parameters object
 * @param {string} params.engId - The English ID to look up in dictionaries
 * @param {string} params.text - The fallback English text to use if translation not found
 * @returns {Object} Object mapping language codes to translated text or fallback English text
 */
function getTranslationEntry(dicts, { engId, text }) {
  return Object.keys(dicts).reduce((acc, lang) => {
    const entry = dicts[lang][engId];
    if (entry) {
      return { ...acc, [lang]: entry };
    } else {
      // default to english
      return { ...acc, [lang]: text };
    }
  }, {});
}

/**
 * Creates a mapping of English comments to their translations across all supported languages
 * @param {string} dictionariesDir - Path to the main dictionaries directory
 * @param {string} englishDictionariesDir - Path to the English dictionaries directory
 * @returns {Object} Object mapping English comment text to translations in all languages
 */
function createCommentMap(dictionariesDir, englishDictionariesDir) {
  debug(
    `Creating comment map from ${dictionariesDir} and ${englishDictionariesDir}`
  );
  const languages = fs.readdirSync(dictionariesDir);

  const dictionaries = languages.reduce(
    (acc, lang) => ({
      ...acc,
      [lang]: require(path.resolve(dictionariesDir, lang, 'comments.json'))
    }),
    {}
  );

  const COMMENTS_TO_TRANSLATE = require(
    path.resolve(englishDictionariesDir, 'english', 'comments.json')
  );

  const COMMENTS_TO_NOT_TRANSLATE = require(
    path.resolve(
      englishDictionariesDir,
      'english',
      'comments-to-not-translate.json'
    )
  );

  // map from english comment text to translations
  const translatedCommentMap = Object.entries(COMMENTS_TO_TRANSLATE).reduce(
    (acc, [id, text]) => {
      return {
        ...acc,
        [text]: getTranslationEntry(dictionaries, { engId: id, text })
      };
    },
    {}
  );

  // map from english comment text to itself
  const untranslatableCommentMap = Object.values(
    COMMENTS_TO_NOT_TRANSLATE
  ).reduce((acc, text) => {
    const englishEntry = languages.reduce(
      (acc, lang) => ({
        ...acc,
        [lang]: text
      }),
      {}
    );
    return {
      ...acc,
      [text]: englishEntry
    };
  }, {});

  const allComments = { ...translatedCommentMap, ...untranslatableCommentMap };

  // the english entries need to be added here, because english is not in
  // languages
  Object.keys(allComments).forEach(comment => {
    allComments[comment].english = comment;
  });

  return allComments;
}

// Map of superblock folder names to their SuperBlocks enum values
const superBlockNames = {
  '01-responsive-web-design': 'responsive-web-design',
  '02-javascript-algorithms-and-data-structures':
    'javascript-algorithms-and-data-structures',
  '03-front-end-development-libraries': 'front-end-development-libraries',
  '04-data-visualization': 'data-visualization',
  '05-back-end-development-and-apis': 'back-end-development-and-apis',
  '06-quality-assurance': 'quality-assurance',
  '07-scientific-computing-with-python': 'scientific-computing-with-python',
  '08-data-analysis-with-python': 'data-analysis-with-python',
  '09-information-security': 'information-security',
  '10-coding-interview-prep': 'coding-interview-prep',
  '11-machine-learning-with-python': 'machine-learning-with-python',
  '13-relational-databases': 'relational-database',
  '14-responsive-web-design-22': '2022/responsive-web-design',
  '15-javascript-algorithms-and-data-structures-22':
    'javascript-algorithms-and-data-structures-v8',
  '16-the-odin-project': 'the-odin-project',
  '17-college-algebra-with-python': 'college-algebra-with-python',
  '18-project-euler': 'project-euler',
  '19-foundational-c-sharp-with-microsoft':
    'foundational-c-sharp-with-microsoft',
  '21-a2-english-for-developers': 'a2-english-for-developers',
  '22-rosetta-code': 'rosetta-code',
  '23-python-for-everybody': 'python-for-everybody',
  '24-b1-english-for-developers': 'b1-english-for-developers',
  '25-full-stack-developer': 'full-stack-developer',
  '26-a2-professional-spanish': 'a2-professional-spanish',
  '27-a2-professional-chinese': 'a2-professional-chinese',
  '28-basic-html': 'basic-html',
  '29-semantic-html': 'semantic-html',
  '99-dev-playground': 'dev-playground'
};

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
  { baseDir, i18nBaseDir, structureDir } = {
    baseDir: CURRICULUM_DIR,
    i18nBaseDir: I18N_CURRICULUM_DIR,
    structureDir: STRUCTURE_DIR
  }
) {
  const contentDir = path.resolve(baseDir, 'challenges', 'english');
  const i18nContentDir = path.resolve(i18nBaseDir, 'challenges', lang);
  const blockContentDir = path.resolve(contentDir, 'blocks');
  const i18nBlockContentDir = path.resolve(i18nContentDir, 'blocks');
  const blockStructureDir = path.resolve(structureDir, 'blocks');
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
    blockStructureDir,
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

/**
 * Processes a single superblock by building its structure and content
 * @param {string} superblockFolder - The folder name of the superblock to process
 * @param {SuperblockCreator} builder - The builder instance to use for processing
 * @returns {Promise<Object>} Promise resolving to the built superblock data
 * @throws {Error} When the superblock file is not found
 */
async function processSuperblock(superblockFolder, builder) {
  debug(`\n=== Processing ${superblockFolder} ===`);

  const superBlockName = superBlockNames[superblockFolder];
  const superblockPath = path.resolve(
    STRUCTURE_DIR,
    'superblocks',
    `${superblockFolder}.json`
  );

  if (!fs.existsSync(superblockPath)) {
    throw Error(`Superblock file not found: ${superblockPath}`);
  }

  return builder.buildSuperblock(superblockPath, superBlockName);
}

/**
 * Builds the entire curriculum for a specific language
 * @param {string} lang - The language code (e.g., 'english', 'spanish', etc.)
 * @returns {Promise<Object>} Promise resolving to the complete built curriculum data
 * @throws {Error} When curriculum files are not found or superblocks/certifications are empty
 */
async function buildCurriculum(lang) {
  const contentDir = getContentDir(lang);
  const builder = new SuperblockCreator({
    blockCreator: getBlockCreator(lang)
  });
  debug('Reading curriculum.json...');

  const curriculumPath = path.resolve(STRUCTURE_DIR, 'curriculum.json');
  if (!fs.existsSync(curriculumPath)) {
    throw new Error(`Curriculum file not found: ${curriculumPath}`);
  }

  const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
  const { superblocks, certifications } = curriculum;
  if (isEmpty(superblocks))
    throw Error('No superblocks found in curriculum.json');
  if (isEmpty(certifications))
    throw Error('No certifications found in curriculum.json');

  debug(`Found ${superblocks.length} superblocks to build`);

  const builtCurriculum = { certifications: { blocks: {} } };

  for (const superblockFolder of superblocks) {
    const superblockName = superBlockNames[superblockFolder];
    builtCurriculum[superblockName] = await processSuperblock(
      superblockFolder,
      builder
    );

    debug(`Successfully built ${superblockName}`);
  }

  debug(`Total superblocks built: ${Object.keys(builtCurriculum).length}`);

  // Parse certifications
  for (const cert of certifications) {
    const certPath = path.resolve(contentDir, 'certifications', `${cert}.yml`);
    if (!fs.existsSync(certPath)) {
      throw Error(`Certification file not found: ${certPath}`);
    }

    debug(`\n=== Processing certification ${cert} ===`);

    builtCurriculum.certifications.blocks[cert] = buildCertification(certPath);

    debug(`Successfully built certification ${cert}`);
  }

  return builtCurriculum;
}

module.exports = {
  buildCurriculum,
  getContentDir,
  getBlockCreator,
  createCommentMap
};
