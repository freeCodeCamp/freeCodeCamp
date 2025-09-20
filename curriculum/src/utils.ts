import { resolve } from 'path';

import comparison from 'string-similarity';
import { config } from 'dotenv';

import { generateSuperBlockList } from '../../shared-dist/config/curriculum.js';

config({ path: resolve(__dirname, '../../.env') });

import { availableLangs } from '../../shared-dist/config/i18n.js';

const curriculumLangs = availableLangs.curriculum;

// checks that the CURRICULUM_LOCALE exists and is an available language
export function testedLang() {
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
}

export function createSuperOrder(superBlocks: string[]) {
  const superOrder: { [sb: string]: number } = {};

  superBlocks.forEach((superBlock, i) => {
    superOrder[superBlock] = i;
  });

  return superOrder;
}

export function getSuperOrder(
  superblock: string,
  showUpcomingChanges = process.env.SHOW_UPCOMING_CHANGES === 'true'
) {
  const flatSuperBlockMap = generateSuperBlockList({
    showUpcomingChanges
  });

  const superOrder = createSuperOrder(flatSuperBlockMap);
  return superOrder[superblock];
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
export function filterByBlock<T extends { blocks: { dashedName: string }[] }>(
  superblocks: T[],
  { block }: { block?: string } = {}
): T[] {
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
export function filterBySuperblock<T extends { name: string }>(
  superblocks: T[],
  { superBlock }: { superBlock?: string } = {}
): T[] {
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
export function filterByChallengeId<
  T extends { blocks: { challengeOrder: { id: string }[] }[] }
>(superblocks: T[], { challengeId }: { challengeId?: string } = {}): T[] {
  if (!challengeId) {
    return superblocks;
  }

  const findChallengeIndex = (challengeOrder: { id: string }[], id: string) =>
    challengeOrder.findIndex(challenge => challenge.id === id);

  const filterChallengeOrder = (
    challengeOrder: { id: string }[],
    id: string
  ) => {
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

export interface Filter {
  superBlock?: string;
  block?: string;
  challengeId?: string;
}

interface Filterable {
  name: string;
  blocks: {
    challengeOrder: { id: string }[];
    dashedName: string;
  }[];
}

interface GenericFilterFunction {
  <T extends Filterable>(data: T[], filters?: Filter): T[];
}

function createFilterPipeline<T extends Filterable>(
  filterFunctions: GenericFilterFunction[]
): (data: T[], filters?: Filter) => T[] {
  return (data: T[], filters?: Filter) =>
    filterFunctions.reduce((acc, filterFn) => filterFn(acc, filters), data);
}

export const applyFilters: GenericFilterFunction = createFilterPipeline([
  filterBySuperblock,
  filterByBlock,
  filterByChallengeId
]);

export function closestMatch(target: string, xs: string[]): string {
  return comparison.findBestMatch(target.toLowerCase(), xs).bestMatch.target;
}

export function closestFilters(
  superblocks: Filterable[],
  target?: Filter
): Filter | undefined {
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
