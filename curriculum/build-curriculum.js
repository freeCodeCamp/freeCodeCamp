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

const readCurriculum = () => {
  const curriculumPath = path.resolve(STRUCTURE_DIR, 'curriculum.json');
  if (!fs.existsSync(curriculumPath)) {
    throw new Error(`Curriculum file not found: ${curriculumPath}`);
  }

  return JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
};

/**
 * Builds an array of superblock structures from a curriculum object
 * @param {Object} curriculum - The curriculum object containing superblocks array
 * @param {string[]} curriculum.superblocks - Array of superblock filename strings
 * @returns {Array<Object>} Array of superblock structure objects with filename, name, and blocks
 * @throws {Error} When a superblock file is not found
 */
function buildSuperblockStructure(curriculum) {
  const { superblocks } = curriculum;

  if (isEmpty(superblocks)) {
    throw new Error('No superblocks found in curriculum object');
  }

  debug(`Building structure for ${superblocks.length} superblocks`);

  const superblockStructures = superblocks.map(superblockFilename => {
    debug(`Reading structure for ${superblockFilename}`);

    const superblockName = superBlockNames[superblockFilename];
    const superblockPath = path.resolve(
      STRUCTURE_DIR,
      'superblocks',
      `${superblockFilename}.json`
    );

    if (!fs.existsSync(superblockPath)) {
      throw Error(`Superblock file not found: ${superblockPath}`);
    }

    const superblockData = JSON.parse(fs.readFileSync(superblockPath, 'utf8'));

    return {
      name: superblockName,
      blocks: transformSuperBlock(superblockData)
    };
  });

  debug(
    `Successfully built ${superblockStructures.length} superblock structures`
  );

  return superblockStructures;
}

function getBlockStructure(block) {
  const blockPath = path.resolve(STRUCTURE_DIR, 'blocks', `${block}.json`);
  if (!fs.existsSync(blockPath))
    throw Error(`Structure file not found for block ${block}: ${blockPath}`);

  return JSON.parse(fs.readFileSync(blockPath, 'utf8'));
}

function addBlockStructure(superblocks) {
  return superblocks.map(superblock => ({
    ...superblock,
    blocks: superblock.blocks.map(block => ({
      ...block,
      ...getBlockStructure(block.dashedName)
    }))
  }));
}

/**
 * Filters challenges in superblocks to only include those matching the given challenge id and their solution challenges (i.e. the next challenge, if it exists)
 * @param {Array<Object>} superblocks - Array of superblock objects with blocks containing challenges
 * @param {Object} [options] - Options object
 * @param {string} [options.challengeId] - The specific challenge id to filter for
 * @returns {Array<Object>} Filtered superblocks containing only the matching challenge
 */
function filterByChallengeId(superblocks, { challengeId } = {}) {
  if (!challengeId) {
    return superblocks;
  }

  const findChallengeIndex = (challengeOrder, id) =>
    challengeOrder.findIndex(challenge => challenge.id === id);

  const filterChallengeOrder = (challengeOrder, id) => {
    const index = findChallengeIndex(challengeOrder, id);
    if (index === -1) return [];

    return challengeOrder.slice(index, index + 2);
  };

  return superblocks
    .map(superblock => ({
      ...superblock,
      blocks: superblock.blocks
        .map(block => ({
          ...block,
          challengeOrder: filterChallengeOrder(
            block.challengeOrder,
            challengeId
          )
        }))
        .filter(
          block => block.challengeOrder && block.challengeOrder.length > 0
        )
    }))
    .filter(superblock => superblock.blocks.length > 0);
}

/**
 * Filters the superblocks array to only include blocks with the specified dashedName (block).
 * If no block is provided, returns the original superblocks array.
 *
 * @param {Array<Object>} superblocks - Array of superblock objects, each containing a blocks array.
 * @param {Object} [options] - Options object
 * @param {string} [options.block] - The dashedName of the block to filter for (in kebab case).
 * @returns {Array<Object>} Filtered array of superblocks containing only the specified block, or the original array if block is not provided.
 */
function filterByBlock(superblocks, { block } = {}) {
  if (!block) return superblocks;

  return superblocks
    .map(superblock => ({
      ...superblock,
      blocks: superblock.blocks.filter(({ dashedName }) => dashedName === block)
    }))
    .filter(superblock => superblock.blocks.length > 0);
}

/**
 * Filters the superblocks array to only include the superblock with the specified name.
 * If no superBlock is provided, returns the original superblocks array.
 *
 * @param {Array<Object>} superblocks - Array of superblock objects.
 * @param {Object} [options] - Options object
 * @param {string} [options.superBlock] - The name of the superblock to filter for.
 * @returns {Array<Object>} Filtered array of superblocks containing only the specified superblock, or the original array if superBlock is not provided.
 */
function filterBySuperblock(superblocks, { superBlock } = {}) {
  if (!superBlock) return superblocks;
  return superblocks.filter(({ name }) => name === superBlock);
}

const createFilterPipeline = filterFunctions => (data, filters) =>
  filterFunctions.reduce((acc, filterFn) => filterFn(acc, filters), data);

const applyFilters = createFilterPipeline([
  filterBySuperblock,
  filterByBlock,
  filterByChallengeId
]);

async function buildCurriculum(lang, filters) {
  const contentDir = getContentDir(lang);
  const builder = new SuperblockCreator({
    blockCreator: getBlockCreator(lang, !isEmpty(filters))
  });

  const curriculum = readCurriculum();
  if (isEmpty(curriculum.superblocks))
    throw Error('No superblocks found in curriculum.json');
  if (isEmpty(curriculum.certifications))
    throw Error('No certifications found in curriculum.json');
  debug(`Found ${curriculum.superblocks.length} superblocks to build`);
  debug(`Found ${curriculum.certifications.length} certifications to build`);

  const superblockList = addBlockStructure(
    buildSuperblockStructure(curriculum)
  );
  const fullSuperblockList = applyFilters(superblockList, filters);
  const fullCurriculum = { certifications: { blocks: {} } };

  for (const superblock of fullSuperblockList) {
    fullCurriculum[superblock.name] =
      await builder.processSuperblockV2(superblock);
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
  buildCurriculum,
  getContentDir,
  getBlockCreator,
  createCommentMap,
  buildSuperblockStructure,
  filterByChallengeId,
  filterByBlock,
  filterBySuperblock
};
