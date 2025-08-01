#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { isEmpty } = require('lodash');
const debug = require('debug')('fcc:parse-superblock');

const { parseMD } = require('./tools/challenge-parser/parser');
const { getSuperOrder } = require('./curriculum/utils');
const { createPoly } = require('./shared/utils/polyvinyl');
const { isAuditedSuperBlock } = require('./shared/utils/is-audited');
const {
  translateCommentsInChallenge
} = require('./tools/challenge-parser/translation-parser');

/**
 * Script to parse a superblock file and gather all challenges from blocks
 *
 * Usage: node parse-superblock.js [superblock-file-path]
 *
 * Example: node parse-superblock.js ./curriculum/challenges/superblocks/01-responsive-web-design.json
 */

const duplicates = xs => xs.filter((x, i) => xs.indexOf(x) !== i);

// ===== PURE FUNCTIONS (NO I/O) =====

/**
 * Validates challenges against meta.json challengeOrder
 * @param {Array<object>} foundChallenges - Array of challenge objects
 * @param {object} meta - Meta object with challengeOrder array
 * @returns {object} Validation result with missing challenges info
 */
function validateChallenges(foundChallenges, meta) {
  const metaChallengeIds = new Set(meta.challengeOrder.map(c => c.id));
  const foundChallengeIds = new Set(foundChallenges.map(c => c.id));

  const missingFromMeta = Array.from(foundChallengeIds).filter(
    id => !metaChallengeIds.has(id)
  );
  if (missingFromMeta.length > 0)
    throw Error(
      `Challenges found in directory but missing from meta: ${missingFromMeta.join(', ')}`
    );

  const missingFromFiles = Array.from(metaChallengeIds).filter(
    id => !foundChallengeIds.has(id)
  );
  if (missingFromFiles.length > 0)
    throw Error(
      `Challenges in meta but missing files with id(s): ${missingFromFiles.join(', ')}`
    );

  const duplicateIds = duplicates(foundChallenges.map(c => c.id));
  if (duplicateIds.length > 0)
    throw Error(
      `Duplicate challenges found in found challenges with id(s): ${duplicateIds.join(', ')}`
    );

  const duplicateMetaIds = duplicates(meta.challengeOrder.map(c => c.id));
  if (duplicateMetaIds.length > 0)
    throw Error(
      `Duplicate challenges found in meta with id(s): ${duplicateMetaIds.join(', ')}`
    );

  const duplicateTitles = duplicates(foundChallenges.map(c => c.title));
  if (duplicateTitles.length > 0)
    throw Error(
      `Duplicate titles found in found challenges with title(s): ${duplicateTitles.join(', ')} in block ${meta.dashedName}`
    );

  const duplicateMetaTitles = duplicates(meta.challengeOrder.map(c => c.title));
  if (duplicateMetaTitles.length > 0)
    throw Error(
      `Duplicate titles found in meta with title(s): ${duplicateMetaTitles.join(', ')}`
    );
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
    challenges
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
  challenge.isPrivate = challenge.isPrivate || meta.isPrivate;
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
    commentTranslations
  }) {
    this.blockContentDir = blockContentDir;
    this.blockStructureDir = blockStructureDir;
    this.i18nBlockContentDir = i18nBlockContentDir;
    this.lang = lang;
    this.commentTranslations = commentTranslations;
  }

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
   * Reads and parses all challenges from a block directory
   * @param {string} blockDir - Path to the block directory
   * @param {object} meta - Meta object for the block
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

  /**
   * Processes a single block: reads challenges, validates, and builds block object
   * @param {object} blockInfo - Block info object with dashedName property
   * @param {object} options - Options object with superBlock and order properties
   * @returns {Promise<object|null>} Block object or null if processing failed
   */
  async processBlock(blockInfo, { superBlock, order, chapter, module }) {
    const blockName = blockInfo.dashedName;
    debug(`Processing block ${blockName} in superblock ${superBlock}`);

    // Check if block directory exists
    const blockContentDir = path.resolve(this.blockContentDir, blockName);
    if (!fs.existsSync(blockContentDir)) {
      throw Error(`Block directory not found: ${blockContentDir}`);
    }

    const rawMeta = this.getMetaForBlock(blockName);

    if (
      rawMeta.isUpcomingChange &&
      process.env.SHOW_UPCOMING_CHANGES !== 'true'
    ) {
      debug(`Ignoring upcoming block ${blockName}`);
      return null;
    }

    const superOrder = getSuperOrder(superBlock);
    const meta = {
      ...rawMeta,
      superOrder,
      superBlock,
      order,
      ...(chapter && { chapter }),
      ...(module && { module })
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

    // Validate challenges against meta
    validateChallenges(foundChallenges, meta);

    // Build the block object
    const blockResult = buildBlock(foundChallenges, meta);

    debug(
      `Completed block "${meta.name}" with ${blockResult.challenges.length} challenges (${blockResult.challenges.filter(c => !c.missing).length} parsed successfully)`
    );

    return blockResult;
  }
}

class SuperblockCreator {
  /**
   * @param {BlockCreator} blockCreator - Instance of BlockCreator
   */
  constructor({ blockCreator }) {
    this.blockCreator = blockCreator;
  }

  /**
   * Main parsing function for superblock
   * @param {string} superblockPath - Path to superblock JSON file
   * @param {string} superBlockName - Name of the superblock
   * @returns {Promise<object>} Parsed superblock data
   */
  async parseSuperblock(superblockPath, superBlockName) {
    debug(`Parsing superblock: ${superblockPath}`);

    // Read the superblock file
    const superblockData = JSON.parse(fs.readFileSync(superblockPath, 'utf8'));

    // Transform superblock data to get blocks array
    const blocks = transformSuperBlock(superblockData);

    return this.processSuperblock(blocks, superBlockName);
  }

  /**
   * Processes blocks array and returns result object
   * @param {object[]} blocks - Array of block objects with dashedName property
   * @returns {Promise<object>} Result object with processed blocks
   */
  async processSuperblock(blocks, superBlockName) {
    const superBlock = { blocks: {} };

    // Process each block
    for (let i = 0; i < blocks.length; i++) {
      const blockInfo = blocks[i];
      const blockResult = await this.blockCreator.processBlock(blockInfo, {
        superBlock: superBlockName,
        order: i,
        ...(blockInfo.chapter && { chapter: blockInfo.chapter }),
        ...(blockInfo.module && { module: blockInfo.module })
      });
      if (blockResult) {
        superBlock.blocks[blockInfo.dashedName] = blockResult;
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
function transformSuperBlock(superblockData) {
  let blocks = [];

  // Handle simple blocks array format
  if (superblockData.blocks) {
    blocks = superblockData.blocks.map(blockName => ({
      dashedName: blockName
    }));
  }
  // Handle nested chapters/modules/blocks format
  else if (superblockData.chapters) {
    for (const chapter of superblockData.chapters) {
      // Skip chapters marked as coming soon
      if (chapter.comingSoon) {
        continue;
      }

      if (chapter.modules) {
        for (const module of chapter.modules) {
          // Skip modules marked as coming soon
          if (module.comingSoon) {
            continue;
          }

          if (module.blocks) {
            for (const block of module.blocks) {
              blocks.push({
                dashedName: block.dashedName,
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

// Export both pure functions (for testing) and I/O functions (for CLI usage)
module.exports = {
  SuperblockCreator,
  BlockCreator,
  // Pure functions (no I/O, no dependencies)
  addMetaToChallenge,
  validateChallenges,
  buildBlock,
  finalizeChallenge,
  transformSuperBlock,
  fixChallengeProperties
};
