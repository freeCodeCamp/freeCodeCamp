import { existsSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { isEmpty } from 'lodash';
import debug from 'debug';

import { parseMD } from '../../tools/challenge-parser/parser';
import { createPoly } from '../../shared-dist/utils/polyvinyl';
import { isAuditedSuperBlock } from '../../shared-dist/utils/is-audited';
import {
  CommentDictionary,
  translateCommentsInChallenge
} from '../../tools/challenge-parser/translation-parser';
import { SuperBlocks } from '../../shared-dist/config/curriculum';
import type { Chapter } from '../../shared-dist/config/chapters';
import { Certification } from '../../shared-dist/config/certification-settings';
import { getSuperOrder } from './super-order.js';
import type {
  BlockStructure,
  Challenge,
  ChallengeFile
} from './file-handler.js';
import { SHOW_UPCOMING_CHANGES } from './config';

const log = debug('fcc:build-superblock');

const duplicates = <T>(xs: T[]) => xs.filter((x, i) => xs.indexOf(x) !== i);

const createValidator = (throwOnError?: boolean) => (fn: () => void) => {
  try {
    fn();
  } catch (error) {
    if (throwOnError) {
      throw error;
    } else {
      console.error((error as Error).message);
    }
  }
};

interface Meta extends BlockStructure {
  order: number;
  superBlock: SuperBlocks;
  superOrder: number;
}

/**
 * Validates challenges against meta.json challengeOrder
 * @param {Array<object>} foundChallenges - Array of challenge objects
 * @param {object} meta - Meta object with challengeOrder array
 * @throws {Error} If validation fails (missing challenges, duplicates, etc.)
 */
export function validateChallenges(
  foundChallenges: Challenge[],
  meta: { challengeOrder: Challenge[]; dashedName: string },
  throwOnError?: boolean
) {
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
export function buildBlock(foundChallenges: Challenge[], meta: Meta) {
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
export function addMetaToChallenge(
  challenge: Partial<Challenge>,
  meta: Meta
): Challenge {
  const challengeOrderIndex = meta.challengeOrder.findIndex(
    ({ id }) => id === challenge.id
  );

  const isLastChallengeInBlock =
    meta.challengeOrder.length - 1 === challengeOrderIndex;

  // Add basic meta properties
  challenge.block = meta.dashedName;
  challenge.blockLabel = meta.blockLabel;
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

  const maybeCert = (
    hasDupe ? hasDupe.certification : meta.superBlock
  ) as Certification;

  challenge.certification = maybeCert;
  // TODO: reimplement after updating the client to expect Certification | null
  // if (isCertification(maybeCert)) {
  //   challenge.certification = maybeCert;
  // } else {
  //   throw Error(
  //     `Superblock ${meta.superBlock} does not map to a certification`
  //   );
  // }

  return challenge as Challenge;
}

/**
 * Converts challenge files to polyvinyl objects with seed property
 * @param {Array<object>} files - Array of challenge file objects
 * @returns {Array<object>} Array of polyvinyl objects with seed property
 */
export function challengeFilesToPolys(files: ChallengeFile[]) {
  return files.reduce((challengeFiles, challengeFile) => {
    return [
      ...challengeFiles,
      {
        ...createPoly(challengeFile),
        seed: challengeFile.contents.slice(0)
      }
    ];
  }, [] as ChallengeFile[]);
}

/**
 * Fixes challenge properties by converting files to polyvinyl objects
 * @param {object} challenge - The challenge object to fix
 * @returns {object} The challenge object with fixed properties
 */
export function fixChallengeProperties(challenge: Challenge) {
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
export function finalizeChallenge(challenge: Challenge, meta: Meta) {
  return addMetaToChallenge(fixChallengeProperties(challenge), meta);
}
export class BlockCreator {
  /**
   * @param {object} options - Options object
   * @param {string} options.blockContentDir - Directory containing block content files
   * @param {string} options.i18nBlockContentDir - Directory containing i18n block content files
   * @param {string} options.lang - Language code for the block content
   * @param {object} options.commentTranslations - Translations for comments in challenges
   * @constructor
   * @description Initializes the BlockCreator with directories for block content and structure.
   * This class is responsible for reading block directories, parsing challenges, and validating them
   * against the meta information.
   */

  blockContentDir: string;
  i18nBlockContentDir: string;
  lang: string;
  commentTranslations: CommentDictionary;
  skipValidation: boolean | undefined;

  constructor({
    blockContentDir,
    i18nBlockContentDir,
    lang,
    commentTranslations,
    skipValidation
  }: {
    blockContentDir: string;
    i18nBlockContentDir: string;
    lang: string;
    commentTranslations: CommentDictionary;
    skipValidation?: boolean;
  }) {
    this.blockContentDir = blockContentDir;
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
    {
      filename,
      block,
      meta,
      isAudited
    }: { filename: string; block: string; meta: Meta; isAudited: boolean },
    parser = parseMD
  ) {
    log(
      `Creating challenge from file: ${filename} in block: ${block}, using lang: ${this.lang}`
    );

    const englishPath = resolve(this.blockContentDir, block, filename);
    const i18nPath = resolve(this.i18nBlockContentDir, block, filename);

    const langUsed = isAudited && existsSync(i18nPath) ? this.lang : 'english';

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
  async readBlockChallenges(block: string, meta: Meta, isAudited: boolean) {
    const blockDir = resolve(this.blockContentDir, block);
    const challengeFiles = readdirSync(blockDir).filter(file =>
      file.endsWith('.md')
    );

    return await Promise.all(
      challengeFiles.map(filename =>
        this.createChallenge({ filename, block, meta, isAudited })
      )
    );
  }

  async processBlock(
    block: BlockStructure,
    { superBlock, order }: { superBlock: SuperBlocks; order: number }
  ) {
    const blockName = block.dashedName;
    log(`Processing block ${blockName} in superblock ${superBlock}`);

    // Check if block directory exists
    const blockContentDir = resolve(this.blockContentDir, blockName);
    if (!existsSync(blockContentDir)) {
      throw Error(`Block directory not found: ${blockContentDir}`);
    }

    if (block.isUpcomingChange && !SHOW_UPCOMING_CHANGES) {
      log(`Ignoring upcoming block ${blockName}`);
      return null;
    }

    const superOrder = getSuperOrder(superBlock);
    if (superOrder === undefined)
      throw Error(`Superblock not found: ${superBlock}`);
    const meta = {
      ...block,
      superOrder,
      superBlock,
      order,
      ...(block.chapter && { chapter: block.chapter }),
      ...(block.module && { module: block.module })
    };
    const isAudited = isAuditedSuperBlock(this.lang, superBlock as SuperBlocks);

    // Read challenges from directory
    const foundChallenges = await this.readBlockChallenges(
      blockName,
      meta,
      isAudited
    );
    log(`Found ${foundChallenges.length} challenge files in directory`);

    // Log found challenges
    foundChallenges.forEach(challenge => {
      log(`Found challenge: ${challenge.title} (${challenge.id})`);
    });

    const throwOnError = this.lang === 'english';
    // Validate challenges against meta
    if (!this.skipValidation)
      validateChallenges(foundChallenges, meta, throwOnError);

    // Build the block object
    const blockResult = buildBlock(foundChallenges, meta);

    log(
      `Completed block "${meta.name}" with ${blockResult.challenges.length} challenges (${blockResult.challenges.filter(c => !c.missing).length} built successfully)`
    );

    return blockResult;
  }
}

export class SuperblockCreator {
  /**
   * @param {object} options - Options object
   * @param {BlockCreator} options.blockCreator - Instance of BlockCreator
   */

  blockCreator: BlockCreator;

  constructor(blockCreator: BlockCreator) {
    this.blockCreator = blockCreator;
  }

  async processSuperblock({
    blocks,
    name
  }: {
    blocks: BlockStructure[];
    name: SuperBlocks;
  }) {
    const superBlock: { blocks: Record<string, unknown> } = { blocks: {} };

    for (let i = 0; i < blocks.length; i++) {
      const block: BlockStructure = blocks[i]!;
      const blockResult = await this.blockCreator.processBlock(block, {
        superBlock: name,
        order: i
      });
      if (blockResult) {
        superBlock.blocks[block.dashedName] = blockResult;
      }
    }

    log(
      `Completed parsing superblock. Total blocks: ${Object.keys(superBlock.blocks).length}`
    );
    return superBlock;
  }
}

export type BlockInfo = {
  dashedName: string;
  chapter?: string;
  module?: string;
};

/**
 * Transforms superblock data to extract blocks array
 * @param {object} superblockData - The superblock data object
 * @returns {object[]} Array of block objects with dashedName, chapter, and module properties
 */
export function transformSuperBlock(
  superblockData: {
    blocks?: string[];
    chapters?: Chapter[];
  },
  { showComingSoon } = { showComingSoon: false }
) {
  let blocks: BlockInfo[] = [];
  const shouldAllowEmptyBlocks =
    !showComingSoon &&
    superblockData.chapters?.every(chapter => chapter.comingSoon);

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

  if (isEmpty(blocks) && !shouldAllowEmptyBlocks) {
    throw Error(`No blocks found in superblock data`);
  }

  const blockNames = blocks.map(block => block.dashedName);
  log(`Found ${blocks.length} blocks: ${blockNames.join(', ')}`);
  return blocks;
}
