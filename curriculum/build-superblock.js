const fs = require('fs');
const path = require('path');
const { isEmpty } = require('lodash');
const debug = require('debug')('fcc:build-superblock');

const { parseMD } = require('../tools/challenge-parser/parser');
const { createPoly } = require('../shared/utils/polyvinyl');
const { isAuditedSuperBlock } = require('../shared/utils/is-audited');
const {
  translateCommentsInChallenge
} = require('../tools/challenge-parser/translation-parser');
const { getSuperOrder } = require('./utils');

const duplicates = xs => xs.filter((x, i) => xs.indexOf(x) !== i);

const createValidator = throwOnError => fn => {
  try {
    fn();
  } catch (error) {
    if (throwOnError) {
      throw error;
    } else {
      console.error(error.message);
    }
  }
};

/**
 * Validates challenges against meta.json challengeOrder
 * @param {Array<object>} foundChallenges - Array of challenge objects
 * @param {object} meta - Meta object with challengeOrder array
 * @throws {Error} If validation fails (missing challenges, duplicates, etc.)
 */
function validateChallenges(foundChallenges, meta, throwOnError) {
  const metaChallengeIds = new Set(meta.challengeOrder.map(c => c.id));
  const foundChallengeIds = new Set(foundChallenges.map(c => c.id));

  const throwOrLog = createValidator(throwOnError);

  throwOrLog(() => {
    const missingFromMeta = Array.from(foundChallengeIds).filter(
      id => !metaChallengeIds.has(id)
    );
    if (missingFromMeta.length > 0)
      throw Error(
        `Challenges found in directory but missing from meta: ${missingFromMeta.join(', ')}`
      );
  });

  throwOrLog(() => {
    const missingFromFiles = Array.from(metaChallengeIds).filter(
      id => !foundChallengeIds.has(id)
    );
    if (missingFromFiles.length > 0)
      throw Error(
        `Challenges in meta but missing files with id(s): ${missingFromFiles.join(', ')}`
      );
  });

  throwOrLog(() => {
    const duplicateIds = duplicates(foundChallenges.map(c => c.id));
    if (duplicateIds.length > 0)
      throw Error(
        `Duplicate challenges found in found challenges with id(s): ${duplicateIds.join(', ')}`
      );
  });

  throwOrLog(() => {
    const duplicateMetaIds = duplicates(meta.challengeOrder.map(c => c.id));
    if (duplicateMetaIds.length > 0)
      throw Error(
        `Duplicate challenges found in meta with id(s): ${duplicateMetaIds.join(', ')}`
      );
  });

  throwOrLog(() => {
    const duplicateTitles = duplicates(foundChallenges.map(c => c.title));
    if (duplicateTitles.length > 0)
      throw Error(
        `Duplicate titles found in found challenges with title(s): ${duplicateTitles.join(', ')} in block ${meta.dashedName}`
      );
  });

  throwOrLog(() => {
    const duplicateMetaTitles = duplicates(
      meta.challengeOrder.map(c => c.title)
    );
    if (duplicateMetaTitles.length > 0)
      throw Error(
        `Duplicate titles found in meta with title(s): ${duplicateMetaTitles.join(', ')}`
      );
  });
}

/**
 * Builds a block object from challenges and meta data
 * @param {Array<object>} foundChallenges - Array of challenge objects
 * @param {object} meta - Meta object with name, dashedName, and challengeOrder
 * @returns {object} Block object with ordered challenges
 */
function buildBlock(foundChallenges, meta) {
  const challenges = meta.challengeOrder.map(challengeInfo => {
    const challenge = foundChallenges.find(c => c.id === challengeInfo.id);
    if (!challenge) {
      throw Error(
        `Challenge ${challengeInfo.id} (${challengeInfo.title}) not found in block`
      );
    }

    return challenge;
  });

  return {
    challenges,
    meta
  };
}

/**
 * Adds the meta information to a challenge
 * @param {object} challenge - The challenge object
 * @param {object} meta - The meta information object
 * @returns {object} The challenge object with added meta information
 */
function addMetaToChallenge(challenge, meta) {
  const challengeOrderIndex = meta.challengeOrder.findIndex(
    ({ id }) => id === challenge.id
  );

  const isLastChallengeInBlock =
    meta.challengeOrder.length - 1 === challengeOrderIndex;

  // Add basic meta properties
  challenge.block = meta.dashedName;
  challenge.blockType = meta.blockType;
  challenge.blockLayout = meta.blockLayout;
  challenge.hasEditableBoundaries = !!meta.hasEditableBoundaries;
  challenge.order = meta.order;

  // Ensure required properties exist
  if (!challenge.description) challenge.description = '';
  if (!challenge.instructions) challenge.instructions = '';
  if (!challenge.questions) challenge.questions = [];

  // Set superblock-related properties
  challenge.superBlock = meta.superBlock;
  challenge.superOrder = meta.superOrder;
  challenge.challengeOrder = challengeOrderIndex;
  challenge.isLastChallengeInBlock = isLastChallengeInBlock;
  challenge.required = (meta.required || []).concat(challenge.required || []);
  challenge.template = meta.template;
  challenge.helpCategory = challenge.helpCategory || meta.helpCategory;
  challenge.usesMultifileEditor = !!meta.usesMultifileEditor;
  challenge.disableLoopProtectTests = !!meta.disableLoopProtectTests;
  challenge.disableLoopProtectPreview = !!meta.disableLoopProtectPreview;

  // Add chapter and module if present in meta
  if (meta.chapter) challenge.chapter = meta.chapter;
  if (meta.module) challenge.module = meta.module;

  // Handle certification field for legacy support
  const dupeCertifications = [
    {
      certification: 'responsive-web-design',
      dupe: '2022/responsive-web-design'
    }
  ];
  const hasDupe = dupeCertifications.find(
    cert => cert.dupe === meta.superBlock
  );
  challenge.certification = hasDupe ? hasDupe.certification : meta.superBlock;

  return challenge;
}

/**
 * Converts challenge files to polyvinyl objects with seed property
 * @param {Array<object>} files - Array of challenge file objects
 * @returns {Array<object>} Array of polyvinyl objects with seed property
 */
function challengeFilesToPolys(files) {
  return files.reduce((challengeFiles, challengeFile) => {
    return [
      ...challengeFiles,
      {
        ...createPoly(challengeFile),
        seed: challengeFile.contents.slice(0)
      }
    ];
  }, []);
}

/**
 * Fixes challenge properties by converting files to polyvinyl objects
 * @param {object} challenge - The challenge object to fix
 * @returns {object} The challenge object with fixed properties
 */
function fixChallengeProperties(challenge) {
  const fixedChallenge = {
    ...challenge
  };

  if (challenge.challengeFiles) {
    fixedChallenge.challengeFiles = challengeFilesToPolys(
      challenge.challengeFiles
    );
  }
  if (challenge.solutions?.length) {
    // The test runner needs the solutions to be arrays of polyvinyls so it
    // can sort them correctly.
    fixedChallenge.solutions = challenge.solutions.map(challengeFilesToPolys);
  }
  return fixedChallenge;
}

/**
 * Finalizes a challenge by fixing properties and adding meta information
 * @param {object} challenge - The challenge object to finalize
 * @param {object} meta - The meta information object
 * @returns {object} The finalized challenge object
 */
function finalizeChallenge(challenge, meta) {
  return addMetaToChallenge(fixChallengeProperties(challenge), meta);
}
class BlockCreator {
  /**
   * @param {object} options - Options object
   * @param {string} options.blockContentDir - Directory containing block content files
   * @param {string} options.blockStructureDir - Directory containing block structure files (meta
   * .json)
   * @param {string} options.i18nBlockContentDir - Directory containing i18n block content files
   * @param {string} options.lang - Language code for the block content
   * @param {object} options.commentTranslations - Translations for comments in challenges
   * @constructor
   * @description Initializes the BlockCreator with directories for block content and structure.
   * This class is responsible for reading block directories, parsing challenges, and validating them
   * against the meta information.
   */
  constructor({
    blockContentDir,
    blockStructureDir,
    i18nBlockContentDir,
    lang,
    commentTranslations,
    skipValidation
  }) {
    this.blockContentDir = blockContentDir;
    this.blockStructureDir = blockStructureDir;
    this.i18nBlockContentDir = i18nBlockContentDir;
    this.lang = lang;
    this.commentTranslations = commentTranslations;
    this.skipValidation = skipValidation;
  }

  /**
   * Creates a challenge from a markdown file
   * @param {object} options - Options object
   * @param {string} options.filename - Name of the challenge file
   * @param {string} options.block - Name of the block
   * @param {object} options.meta - Meta information for the block
   * @param {boolean} options.isAudited - Whether the block is audited for i18n
   * @param {Function} parser - Parser function to use (defaults to parseMD)
   * @returns {Promise<object>} The finalized challenge object
   */
  async createChallenge(
    { filename, block, meta, isAudited },
    parser = parseMD
  ) {
    debug(
      `Creating challenge from file: ${filename} in block: ${block}, using lang: ${this.lang}`
    );

    const englishPath = path.resolve(this.blockContentDir, block, filename);
    const i18nPath = path.resolve(this.i18nBlockContentDir, block, filename);

    const langUsed =
      isAudited && fs.existsSync(i18nPath) ? this.lang : 'english';

    const challengePath = langUsed === 'english' ? englishPath : i18nPath;

    const challenge = translateCommentsInChallenge(
      await parser(challengePath),
      langUsed,
      this.commentTranslations
    );

    challenge.translationPending = this.lang !== 'english' && !isAudited;

    return finalizeChallenge(challenge, meta);
  }

  /**
   * Reads and builds all challenges from a block directory
   * @param {string} block - Name of the block
   * @param {object} meta - Meta object for the block
   * @param {boolean} isAudited - Whether the block is audited for i18n
   * @returns {Promise<Array<object>>} Array of challenge objects
   */
  async readBlockChallenges(block, meta, isAudited) {
    const blockDir = path.resolve(this.blockContentDir, block);
    const challengeFiles = fs
      .readdirSync(blockDir)
      .filter(file => file.endsWith('.md'));

    return await Promise.all(
      challengeFiles.map(filename =>
        this.createChallenge({ filename, block, meta, isAudited })
      )
    );
  }

  /**
   * Gets meta information for a block from its JSON file
   * @param {string} blockName - Name of the block
   * @returns {object} The meta information object for the block
   * @throws {Error} If meta file is not found
   */
  getMetaForBlock(blockName) {
    // Read meta.json for this block
    const metaPath = path.resolve(this.blockStructureDir, `${blockName}.json`);
    if (!fs.existsSync(metaPath)) {
      throw new Error(
        `Meta file not found for block ${blockName}: ${metaPath}`
      );
    }

    // Not all "meta information" can be found in the meta.json.
    const rawMeta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
    debug(
      `Meta file indicates ${rawMeta.challengeOrder.length} challenges should exist`
    );
    return rawMeta;
  }

  async processBlock(block, { superBlock, order }) {
    const blockName = block.dashedName;
    debug(`Processing block ${blockName} in superblock ${superBlock}`);

    // Check if block directory exists
    const blockContentDir = path.resolve(this.blockContentDir, blockName);
    if (!fs.existsSync(blockContentDir)) {
      throw Error(`Block directory not found: ${blockContentDir}`);
    }

    if (
      block.isUpcomingChange &&
      process.env.SHOW_UPCOMING_CHANGES !== 'true'
    ) {
      debug(`Ignoring upcoming block ${blockName}`);
      return null;
    }

    const superOrder = getSuperOrder(superBlock);
    const meta = {
      ...block,
      superOrder,
      superBlock,
      order,
      ...(block.chapter && { chapter: block.chapter }),
      ...(block.module && { module: block.module })
    };
    const isAudited = isAuditedSuperBlock(this.lang, superBlock);

    // Read challenges from directory
    const foundChallenges = await this.readBlockChallenges(
      blockName,
      meta,
      isAudited
    );
    debug(`Found ${foundChallenges.length} challenge files in directory`);

    // Log found challenges
    foundChallenges.forEach(challenge => {
      debug(`Found challenge: ${challenge.title} (${challenge.id})`);
    });

    const throwOnError = this.lang === 'english';
    // Validate challenges against meta
    if (!this.skipValidation)
      validateChallenges(foundChallenges, meta, throwOnError);

    // Build the block object
    const blockResult = buildBlock(foundChallenges, meta);

    debug(
      `Completed block "${meta.name}" with ${blockResult.challenges.length} challenges (${blockResult.challenges.filter(c => !c.missing).length} built successfully)`
    );

    return blockResult;
  }
}

class SuperblockCreator {
  /**
   * @param {object} options - Options object
   * @param {BlockCreator} options.blockCreator - Instance of BlockCreator
   */
  constructor({ blockCreator }) {
    this.blockCreator = blockCreator;
  }

  async processSuperblock({ blocks, name }) {
    const superBlock = { blocks: {} };

    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      const blockResult = await this.blockCreator.processBlock(block, {
        superBlock: name,
        order: i
      });
      if (blockResult) {
        superBlock.blocks[block.dashedName] = blockResult;
      }
    }

    debug(
      `Completed parsing superblock. Total blocks: ${Object.keys(superBlock.blocks).length}`
    );
    return superBlock;
  }
}

/**
 * Transforms superblock data to extract blocks array
 * @param {object} superblockData - The superblock data object
 * @returns {object[]} Array of block objects with dashedName, chapter, and module properties
 */
function transformSuperBlock(
  superblockData,
  { showComingSoon } = { showComingSoon: false }
) {
  let blocks = [];

  // Handle simple blocks array format
  if (superblockData.blocks) {
    blocks = superblockData.blocks.map(dashedName => ({
      dashedName
    }));
  }
  // Handle nested chapters/modules/blocks format
  else if (superblockData.chapters) {
    for (const chapter of superblockData.chapters) {
      if (chapter.comingSoon && !showComingSoon) {
        continue;
      }

      if (chapter.modules) {
        for (const module of chapter.modules) {
          if (module.comingSoon && !showComingSoon) {
            continue;
          }

          if (module.blocks) {
            for (const block of module.blocks) {
              blocks.push({
                dashedName: block,
                chapter: chapter.dashedName,
                module: module.dashedName
              });
            }
          }
        }
      }
    }
  }

  if (isEmpty(blocks)) {
    throw Error(`No blocks found in superblock data`);
  }

  const blockNames = blocks.map(block => block.dashedName);
  debug(`Found ${blocks.length} blocks: ${blockNames.join(', ')}`);
  return blocks;
}

module.exports = {
  SuperblockCreator,
  BlockCreator,
  addMetaToChallenge,
  validateChallenges,
  buildBlock,
  finalizeChallenge,
  transformSuperBlock,
  fixChallengeProperties
};
