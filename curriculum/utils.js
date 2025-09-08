const path = require('path');

const comparison = require('string-similarity');

const {
  generateSuperBlockList,
  SuperBlocks
} = require('../shared/config/curriculum');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { availableLangs } = require('../shared/config/i18n');
const curriculumLangs = availableLangs.curriculum;

// checks that the CURRICULUM_LOCALE exists and is an available language
exports.testedLang = function testedLang() {
  if (process.env.CURRICULUM_LOCALE) {
    if (curriculumLangs.includes(process.env.CURRICULUM_LOCALE)) {
      return process.env.CURRICULUM_LOCALE;
    } else {
      throw Error(`${process.env.CURRICULUM_LOCALE} is not a supported language.
      Before the site can be built, this language needs to be manually approved`);
    }
  } else {
    throw Error('LOCALE must be set for testing');
  }
};

function createSuperOrder(superBlocks) {
  if (!Array.isArray(superBlocks)) {
    throw Error(`superBlocks must be an Array`);
  }
  superBlocks.forEach(superBlock => {
    if (!Object.values(SuperBlocks).includes(superBlock)) {
      throw Error(`Invalid superBlock: ${superBlock}`);
    }
  });

  const superOrder = {};

  superBlocks.forEach((superBlock, i) => {
    superOrder[superBlock] = i;
  });

  return superOrder;
}

const flatSuperBlockMap = generateSuperBlockList({
  showUpcomingChanges: process.env.SHOW_UPCOMING_CHANGES === 'true'
});
const superOrder = createSuperOrder(flatSuperBlockMap);

// gets the superOrder of a superBlock from the object created above
function getSuperOrder(superblock) {
  if (typeof superblock !== 'string')
    throw Error(`superblock ${JSON.stringify(superblock)} must be a string`);
  const order = superOrder[superblock];
  if (typeof order === 'undefined')
    throw Error(`${superblock} is not a valid superblock`);
  return order;
}

/**
 * Filters the superblocks array to include, at most, a single superblock with the specified block.
 * If no block is provided, returns the original superblocks array.
 *
 * @param {Array<Object>} superblocks - Array of superblock objects, each containing a blocks array.
 * @param {Object} [options] - Options object
 * @param {string} [options.block] - The dashedName of the block to filter for (in kebab case).
 * @returns {Array<Object>} Array with one superblock containing the specified block, or the original array if block is not provided.
 */
function filterByBlock(superblocks, { block } = {}) {
  if (!block) return superblocks;

  const superblock = superblocks
    .map(superblock => ({
      ...superblock,
      blocks: superblock.blocks.filter(({ dashedName }) => dashedName === block)
    }))
    .find(superblock => superblock.blocks.length > 0);

  return superblock ? [superblock] : [];
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

const createFilterPipeline = filterFunctions => (data, filters) =>
  filterFunctions.reduce((acc, filterFn) => filterFn(acc, filters), data);

const applyFilters = createFilterPipeline([
  filterBySuperblock,
  filterByBlock,
  filterByChallengeId
]);

function closestMatch(target, xs) {
  return comparison.findBestMatch(target.toLowerCase(), xs).bestMatch.target;
}

function closestFilters(target, superblocks) {
  if (target?.superBlock) {
    const superblockNames = superblocks.map(({ name }) => name);
    return {
      ...target,
      superBlock: closestMatch(target.superBlock, superblockNames)
    };
  }

  if (target?.block) {
    const blocks = superblocks.flatMap(({ blocks }) =>
      blocks.map(({ dashedName }) => dashedName)
    );
    return {
      ...target,
      block: closestMatch(target.block, blocks)
    };
  }

  return target;
}

exports.closestFilters = closestFilters;
exports.closestMatch = closestMatch;
exports.createSuperOrder = createSuperOrder;
exports.filterByBlock = filterByBlock;
exports.filterBySuperblock = filterBySuperblock;
exports.filterByChallengeId = filterByChallengeId;
exports.getSuperOrder = getSuperOrder;
exports.applyFilters = applyFilters;
