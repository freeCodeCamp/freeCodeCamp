const fs = require('fs');
const path = require('path');
const assert = require('assert');

const { isEmpty } = require('lodash');
const debug = require('debug')('fcc:build-curriculum');

const {
  SuperblockCreator,
  BlockCreator,
  transformSuperBlock
} = require('./build-superblock');

const { buildCertification } = require('./build-certification');
const { applyFilters } = require('./utils');

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
 * @param {boolean} [skipValidation=false] - Whether to skip validation of challenges
 * @param {Object} [opts] - Optional configuration object
 * @param {string} [opts.baseDir] - Base directory for curriculum content
 * @param {string} [opts.i18nBaseDir] - Base directory for i18n curriculum content
 * @param {string} [opts.structureDir] - Directory containing curriculum structure
 * @returns {BlockCreator} A configured BlockCreator instance
 */
const getBlockCreator = (lang, skipValidation, opts) => {
  const {
    blockContentDir,
    blockStructureDir,
    i18nBlockContentDir,
    dictionariesDir,
    i18nDictionariesDir
  } = getLanguageConfig(lang, opts);

  const targetDictionariesDir =
    lang === 'english' ? dictionariesDir : i18nDictionariesDir;

  return new BlockCreator({
    lang,
    blockContentDir,
    blockStructureDir,
    i18nBlockContentDir,
    commentTranslations: createCommentMap(
      dictionariesDir,
      targetDictionariesDir
    ),
    skipValidation: skipValidation ?? false
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
 * @param {string} dictionariesDir - Path to the main (english) dictionaries directory
 * @param {string} targetDictionariesDir - Path to the target (i18n or english) dictionaries directory
 * @returns {Object} Object mapping English comment text to translations in all languages
 */
function createCommentMap(dictionariesDir, targetDictionariesDir) {
  debug(
    `Creating comment map from ${dictionariesDir} and ${targetDictionariesDir}`
  );
  const languages = fs.readdirSync(targetDictionariesDir);

  const dictionaries = languages.reduce((acc, lang) => {
    const commentsPath = path.resolve(
      targetDictionariesDir,
      lang,
      'comments.json'
    );
    const commentsData = JSON.parse(fs.readFileSync(commentsPath, 'utf8'));
    return {
      ...acc,
      [lang]: commentsData
    };
  }, {});

  const COMMENTS_TO_TRANSLATE = JSON.parse(
    fs.readFileSync(
      path.resolve(dictionariesDir, 'english', 'comments.json'),
      'utf8'
    )
  );

  const COMMENTS_TO_NOT_TRANSLATE = JSON.parse(
    fs.readFileSync(
      path.resolve(
        dictionariesDir,
        'english',
        'comments-to-not-translate.json'
      ),
      'utf8'
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

// Map of superblock filenames to their SuperBlocks enum values
const superBlockNames = {
  'responsive-web-design': 'responsive-web-design',
  'javascript-algorithms-and-data-structures':
    'javascript-algorithms-and-data-structures',
  'front-end-development-libraries': 'front-end-development-libraries',
  'data-visualization': 'data-visualization',
  'back-end-development-and-apis': 'back-end-development-and-apis',
  'quality-assurance': 'quality-assurance',
  'scientific-computing-with-python': 'scientific-computing-with-python',
  'data-analysis-with-python': 'data-analysis-with-python',
  'information-security': 'information-security',
  'coding-interview-prep': 'coding-interview-prep',
  'machine-learning-with-python': 'machine-learning-with-python',
  'relational-databases': 'relational-database',
  'responsive-web-design-22': '2022/responsive-web-design',
  'javascript-algorithms-and-data-structures-22':
    'javascript-algorithms-and-data-structures-v8',
  'the-odin-project': 'the-odin-project',
  'college-algebra-with-python': 'college-algebra-with-python',
  'project-euler': 'project-euler',
  'foundational-c-sharp-with-microsoft': 'foundational-c-sharp-with-microsoft',
  'a2-english-for-developers': 'a2-english-for-developers',
  'rosetta-code': 'rosetta-code',
  'python-for-everybody': 'python-for-everybody',
  'b1-english-for-developers': 'b1-english-for-developers',
  'full-stack-developer': 'full-stack-developer',
  'a2-professional-spanish': 'a2-professional-spanish',
  'a2-professional-chinese': 'a2-professional-chinese',
  'basic-html': 'basic-html',
  'semantic-html': 'semantic-html',
  'a1-professional-chinese': 'a1-professional-chinese',
  'dev-playground': 'dev-playground'
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

const getCurriculumStructure = () => {
  const curriculumPath = path.resolve(STRUCTURE_DIR, 'curriculum.json');
  if (!fs.existsSync(curriculumPath)) {
    throw new Error(`Curriculum file not found: ${curriculumPath}`);
  }

  return JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
};

/**
 * Builds an array of superblock structures from a curriculum object

 * @param {string[]} superblocks - Array of superblock filename strings
 * @returns {Array<Object>} Array of superblock structure objects with filename, name, and blocks
 * @throws {Error} When a superblock file is not found
 */
function addSuperblockStructure(superblocks) {
  debug(`Building structure for ${superblocks.length} superblocks`);

  const superblockStructures = superblocks.map(superblockFilename => {
    const superblockName = superBlockNames[superblockFilename];
    if (!superblockName) {
      throw new Error(`Superblock name not found for ${superblockFilename}`);
    }

    return {
      name: superblockName,
      blocks: transformSuperBlock(getSuperblockStructure(superblockFilename), {
        showComingSoon: process.env.SHOW_UPCOMING_CHANGES === 'true'
      })
    };
  });

  debug(
    `Successfully built ${superblockStructures.length} superblock structures`
  );

  return superblockStructures;
}

function getSuperblockStructure(superblock) {
  const superblockPath = path.resolve(
    STRUCTURE_DIR,
    'superblocks',
    `${superblock}.json`
  );

  return JSON.parse(fs.readFileSync(superblockPath, 'utf8'));
}

function getBlockStructure(block) {
  const blockPath = path.resolve(STRUCTURE_DIR, 'blocks', `${block}.json`);

  try {
    return JSON.parse(fs.readFileSync(blockPath, 'utf8'));
  } catch {
    console.warn('block missing', block);
  }
}

function addBlockStructure(
  superblocks,
  _getBlockStructure = getBlockStructure
) {
  return superblocks.map(superblock => ({
    ...superblock,
    blocks: superblock.blocks.map((block, index) => ({
      ...block,
      ..._getBlockStructure(block.dashedName),
      order: index,
      superBlock: superblock.name
    }))
  }));
}

async function buildCurriculum(lang, filters) {
  const contentDir = getContentDir(lang);
  const builder = new SuperblockCreator({
    blockCreator: getBlockCreator(lang, !isEmpty(filters))
  });

  const curriculum = getCurriculumStructure();
  if (isEmpty(curriculum.superblocks))
    throw Error('No superblocks found in curriculum.json');
  if (isEmpty(curriculum.certifications))
    throw Error('No certifications found in curriculum.json');
  debug(`Found ${curriculum.superblocks.length} superblocks to build`);
  debug(`Found ${curriculum.certifications.length} certifications to build`);

  const superblockList = addBlockStructure(
    addSuperblockStructure(curriculum.superblocks)
  );
  const fullSuperblockList = applyFilters(superblockList, filters);
  const fullCurriculum = { certifications: { blocks: {} } };

  for (const superblock of fullSuperblockList) {
    fullCurriculum[superblock.name] =
      await builder.processSuperblock(superblock);
  }

  for (const cert of curriculum.certifications) {
    const certPath = path.resolve(contentDir, 'certifications', `${cert}.yml`);
    if (!fs.existsSync(certPath)) {
      throw Error(`Certification file not found: ${certPath}`);
    }
    debug(`=== Processing certification ${cert} ===`);
    fullCurriculum.certifications.blocks[cert] = buildCertification(certPath);
  }

  return fullCurriculum;
}

module.exports = {
  addBlockStructure,
  buildCurriculum,
  getContentDir,
  getBlockCreator,
  getBlockStructure,
  getSuperblockStructure,
  createCommentMap
};
