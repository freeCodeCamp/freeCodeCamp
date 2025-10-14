const fs = require('fs');
const path = require('path');

const { isEmpty, isUndefined } = require('lodash');
const debug = require('debug')('fcc:build-curriculum');

const {
  SuperblockCreator,
  BlockCreator,
  transformSuperBlock
} = require('./build-superblock');

const { buildCertification } = require('./build-certification');
const { applyFilters, closestFilters, getSuperOrder } = require('./utils');
const {
  getContentDir,
  getLanguageConfig,
  getCurriculumStructure,
  getBlockStructure,
  getSuperblockStructure,
  getBlockStructurePath,
  getBlockStructureDir
} = require('./file-handler');

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
    i18nBlockContentDir,
    dictionariesDir,
    i18nDictionariesDir
  } = getLanguageConfig(lang, opts);

  const targetDictionariesDir =
    lang === 'english' ? dictionariesDir : i18nDictionariesDir;

  return new BlockCreator({
    lang,
    blockContentDir,
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
  'a1-professional-spanish': 'a1-professional-spanish',
  'a2-professional-spanish': 'a2-professional-spanish',
  'a2-professional-chinese': 'a2-professional-chinese',
  'basic-html': 'basic-html',
  'semantic-html': 'semantic-html',
  'a1-professional-chinese': 'a1-professional-chinese',
  'dev-playground': 'dev-playground',
  'full-stack-open': 'full-stack-open',
  'responsive-web-design-v9': 'responsive-web-design-v9',
  'javascript-v9': 'javascript-v9',
  'front-end-development-libraries-v9': 'front-end-development-libraries-v9',
  'python-v9': 'python-v9',
  'relational-databases-v9': 'relational-databases-v9',
  'back-end-development-and-apis-v9': 'back-end-development-and-apis-v9'
};

const superBlockToFilename = Object.entries(superBlockNames).reduce(
  (map, entry) => {
    return { ...map, [entry[1]]: entry[0] };
  },
  {}
);

/**
 * Builds an array of superblock structures from a curriculum object

 * @param {string[]} superblocks - Array of superblock filename strings
 * @returns {Array<Object>} Array of superblock structure objects with filename, name, and blocks
 * @throws {Error} When a superblock file is not found
 */
function addSuperblockStructure(
  superblocks,
  showComingSoon = process.env.SHOW_UPCOMING_CHANGES === 'true'
) {
  debug(`Building structure for ${superblocks.length} superblocks`);

  const superblockStructures = superblocks.map(superblockFilename => {
    const superblockName = superBlockNames[superblockFilename];
    if (!superblockName) {
      throw new Error(`Superblock name not found for ${superblockFilename}`);
    }

    return {
      name: superblockName,
      blocks: transformSuperBlock(getSuperblockStructure(superblockFilename), {
        showComingSoon
      })
    };
  });

  debug(
    `Successfully built ${superblockStructures.length} superblock structures`
  );

  return superblockStructures;
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

/**
 * Returns a list of all the superblocks that contain the given block
 * @param {string} block
 */
function getSuperblocks(
  block,
  _addSuperblockStructure = addSuperblockStructure
) {
  const { superblocks } = getCurriculumStructure();
  const withStructure = _addSuperblockStructure(superblocks);

  return withStructure
    .filter(({ blocks }) =>
      blocks.some(({ dashedName }) => dashedName === block)
    )
    .map(({ name }) => name);
}

function validateBlocks(superblocks, blockStructureDir) {
  const withSuperblockStructure = addSuperblockStructure(superblocks, true);
  const blockInSuperblocks = withSuperblockStructure
    .flatMap(({ blocks }) => blocks)
    .map(b => b.dashedName);
  for (const block of blockInSuperblocks) {
    const blockPath = getBlockStructurePath(block);
    if (!fs.existsSync(blockPath)) {
      throw Error(
        `Block "${block}" is in a superblock, but has no block structure file at ${blockPath}`
      );
    }
  }

  const blockStructureFiles = fs
    .readdirSync(blockStructureDir)
    .map(file => path.basename(file, '.json'));

  for (const block of blockStructureFiles) {
    if (!blockInSuperblocks.includes(block)) {
      throw Error(
        `Block "${block}" has a structure file, ${getBlockStructurePath(block)}, but is not in a superblock`
      );
    }
  }
}

async function parseCurriculumStructure(filters) {
  const curriculum = getCurriculumStructure();
  const blockStructureDir = getBlockStructureDir();
  if (isEmpty(curriculum.superblocks))
    throw Error('No superblocks found in curriculum.json');
  if (isEmpty(curriculum.certifications))
    throw Error('No certifications found in curriculum.json');
  debug(`Found ${curriculum.superblocks.length} superblocks to build`);
  debug(`Found ${curriculum.certifications.length} certifications to build`);

  validateBlocks(curriculum.superblocks, blockStructureDir);

  const superblockList = addBlockStructure(
    addSuperblockStructure(curriculum.superblocks)
  );
  const refinedFilters = closestFilters(filters, superblockList);
  const fullSuperblockList = applyFilters(superblockList, refinedFilters);
  return {
    fullSuperblockList,
    certifications: curriculum.certifications
  };
}

async function buildCurriculum(lang, filters) {
  const contentDir = getContentDir(lang);

  const builder = new SuperblockCreator({
    blockCreator: getBlockCreator(lang, !isEmpty(filters))
  });

  const { fullSuperblockList, certifications } =
    await parseCurriculumStructure(filters);

  const fullCurriculum = { certifications: { blocks: {} } };

  const liveSuperblocks = fullSuperblockList.filter(({ name }) => {
    const superOrder = getSuperOrder(name);
    const upcomingSuperOrder = getSuperOrder(name, true);

    // If a superblock is not in either order list it should not exist.
    if (isUndefined(superOrder) && isUndefined(upcomingSuperOrder)) {
      throw Error(`Invalid superBlock: ${name}`);
    }
    return !isUndefined(superOrder);
  });

  for (const superblock of liveSuperblocks) {
    fullCurriculum[superblock.name] =
      await builder.processSuperblock(superblock);
  }

  for (const cert of certifications) {
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
  createCommentMap,
  superBlockToFilename,
  getSuperblocks,
  addSuperblockStructure,
  parseCurriculumStructure
};
