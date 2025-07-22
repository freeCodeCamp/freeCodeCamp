#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { isEmpty } = require('lodash');
const debug = require('debug')('fcc:parse-superblock');

const { parseMD } = require('./tools/challenge-parser/parser');

/**
 * Script to parse a superblock file and gather all challenges from blocks
 *
 * Usage: node parse-superblock.js [superblock-file-path]
 *
 * Example: node parse-superblock.js ./curriculum/challenges/superblocks/01-responsive-web-design.json
 */

// ===== PURE FUNCTIONS (NO I/O, NO DEPENDENCIES) =====

/**
 * Validates challenges against meta.json challengeOrder
 * @param {Map<string, object>} foundChallenges - Map of challenge ID to challenge data
 * @param {object} meta - Meta object with challengeOrder array
 * @returns {object} Validation result with missing challenges info
 */
function validateChallenges(foundChallenges, meta) {
  const metaChallengeIds = new Set(meta.challengeOrder.map(c => c.id));
  const foundChallengeIds = new Set(foundChallenges.keys());

  const missingFromMeta = Array.from(foundChallengeIds).filter(
    id => !metaChallengeIds.has(id)
  );
  const missingFiles = Array.from(metaChallengeIds).filter(
    id => !foundChallengeIds.has(id)
  );

  if (missingFromMeta.length > 0) {
    throw Error(
      `Challenges found in directory but missing from meta: ${missingFromMeta.join(', ')}`
    );
  }

  if (missingFiles.length > 0) {
    throw Error(
      `Challenges in meta but missing files: ${missingFiles.join(', ')}`
    );
  }
}

/**
 * Builds a block object from challenges and meta data
 * @param {Map<string, object>} foundChallenges - Map of challenge ID to challenge data
 * @param {object} meta - Meta object with name, dashedName, and challengeOrder
 * @returns {object} Block object with ordered challenges
 */
function buildBlock(foundChallenges, meta) {
  const blockResult = {
    name: meta.name,
    dashedName: meta.dashedName,
    challenges: []
  };

  // Add challenges in the order specified by challengeOrder
  for (const challengeInfo of meta.challengeOrder) {
    if (foundChallenges.has(challengeInfo.id)) {
      blockResult.challenges.push(foundChallenges.get(challengeInfo.id));
    } else {
      throw Error(
        `Challenge ${challengeInfo.id} (${challengeInfo.title}) not found in block`
      );
    }
  }

  return blockResult;
}

// ===== I/O FUNCTIONS =====

/**
 * Reads and parses all challenges from a block directory
 * @param {string} blockDir - Path to the block directory
 * @param {function} parser - Parser function (async)
 * @returns {Promise<Map<string, object>>} Map of challenge ID to challenge data
 */
async function readBlockChallenges(blockDir, parser) {
  const challengeFiles = fs
    .readdirSync(blockDir)
    .filter(file => file.endsWith('.md'));

  const foundChallenges = new Map();

  for (const file of challengeFiles) {
    const filePath = path.join(blockDir, file);
    const challenge = await parser(filePath);
    foundChallenges.set(challenge.id, challenge);
  }

  return foundChallenges;
}

/**
 * Processes a single block: reads challenges, validates, and builds block object
 * @param {object} blockInfo - Block info object with dashedName property
 * @param {string} baseDir - Base directory path
 * @returns {Promise<object|null>} Block object or null if processing failed
 */
async function processBlock(blockInfo, baseDir) {
  const blockName = blockInfo.dashedName;
  debug(`Processing block: ${blockName}`);

  // Check if block directory exists
  const blockDir = path.resolve(
    baseDir,
    'curriculum/challenges/english/blocks',
    blockName
  );
  if (!fs.existsSync(blockDir)) {
    throw Error(`Block directory not found: ${blockDir}`);
  }

  // Read challenges from directory
  const foundChallenges = await readBlockChallenges(blockDir, parseMD);
  debug(`Found ${foundChallenges.size} challenge files in directory`);

  // Log found challenges
  foundChallenges.forEach(challenge => {
    debug(`Found challenge: ${challenge.title} (${challenge.id})`);
  });

  // Read meta.json for this block
  const metaPath = path.resolve(
    baseDir,
    'curriculum/challenges/_meta',
    blockName,
    'meta.json'
  );
  if (!fs.existsSync(metaPath)) {
    throw new Error(`Meta file not found for block ${blockName}: ${metaPath}`);
  }

  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  debug(
    `Meta file indicates ${meta.challengeOrder.length} challenges should exist`
  );

  // Validate challenges against meta
  validateChallenges(foundChallenges, meta);

  // Build the block object
  const blockResult = buildBlock(foundChallenges, meta);

  debug(
    `Completed block "${meta.name}" with ${blockResult.challenges.length} challenges (${blockResult.challenges.filter(c => !c.missing).length} parsed successfully)`
  );

  return blockResult;
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

/**
 * Processes blocks array and returns result object
 * @param {function} processBlockFn - Function to process individual blocks
 * @param {object[]} blocks - Array of block objects with dashedName property
 * @returns {Promise<object>} Result object with processed blocks
 */
async function processSuperblock(processBlockFn, blocks) {
  const result = {
    blocks: []
  };

  // Process each block
  for (const blockInfo of blocks) {
    const blockResult = await processBlockFn(blockInfo, __dirname);
    if (blockResult) {
      result.blocks.push(blockResult);
    }
  }

  debug(`Completed parsing superblock. Total blocks: ${result.blocks.length}`);
  return result;
}

/**
 * Main parsing function for superblock
 * @param {string} superblockPath - Path to superblock JSON file
 * @returns {Promise<object>} Parsed superblock data
 */
async function parseSuperblock(superblockPath) {
  debug(`Parsing superblock: ${superblockPath}`);

  // Read the superblock file
  const superblockData = JSON.parse(fs.readFileSync(superblockPath, 'utf8'));

  // Transform superblock data to get blocks array
  const blocks = transformSuperBlock(superblockData);

  // Process the blocks and return result
  return await processSuperblock(processBlock, blocks);
}

// Main execution
async function main() {
  const superblockPath =
    process.argv[2] ||
    './curriculum/challenges/superblocks/01-responsive-web-design.json';

  if (!fs.existsSync(superblockPath)) {
    console.error(`Superblock file not found: ${superblockPath}`);
    process.exit(1);
  }

  try {
    const result = await parseSuperblock(superblockPath);

    debug('Parsed superblock result:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

// Export both pure functions (for testing) and I/O functions (for CLI usage)
module.exports = {
  // Pure functions (no I/O, no dependencies)
  validateChallenges,
  buildBlock,
  transformSuperBlock,
  // I/O functions (for CLI usage)
  parseSuperblock,
  processSuperblock,
  processBlock,
  readBlockChallenges
};
