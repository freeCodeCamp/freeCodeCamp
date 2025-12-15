import { readdirSync, readFileSync, existsSync } from 'fs';
import { resolve, basename } from 'path';

import { isEmpty, isUndefined } from 'lodash';
import debug from 'debug';

import type { CommentDictionary } from '../../tools/challenge-parser/translation-parser/index.js';
import { SuperBlocks } from '../../shared-dist/config/curriculum.js';
import {
  SuperblockCreator,
  BlockCreator,
  transformSuperBlock,
  BlockInfo
} from './build-superblock.js';

import { buildCertification } from './build-certification.js';
import { getSuperOrder } from './super-order.js';
import { applyFilters, closestFilters, type Filter } from './filter.js';
import {
  getContentDir,
  getLanguageConfig,
  getCurriculumStructure,
  getBlockStructure,
  getSuperblockStructure,
  getBlockStructurePath,
  getBlockStructureDir,
  type BlockStructure
} from './file-handler.js';
import { SHOW_UPCOMING_CHANGES } from './config.js';
const log = debug('fcc:build-curriculum');

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
export const getBlockCreator = (
  lang: string,
  skipValidation?: boolean,
  opts?: { baseDir: string; i18nBaseDir: string; structureDir: string }
) => {
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
export function getTranslationEntry(
  dicts: Record<string, Record<string, unknown>>,
  { engId, text }: { engId: string; text: string }
) {
  return Object.keys(dicts).reduce((acc, lang) => {
    const entry = dicts[lang]?.[engId];
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
export function createCommentMap(
  dictionariesDir: string,
  targetDictionariesDir: string
): CommentDictionary {
  log(
    `Creating comment map from ${dictionariesDir} and ${targetDictionariesDir}`
  );
  const languages = readdirSync(targetDictionariesDir);

  const dictionaries = languages.reduce((acc, lang) => {
    const commentsPath = resolve(targetDictionariesDir, lang, 'comments.json');
    const commentsData = JSON.parse(readFileSync(commentsPath, 'utf8'));
    return {
      ...acc,
      [lang]: commentsData
    };
  }, {});

  const COMMENTS_TO_TRANSLATE = JSON.parse(
    readFileSync(resolve(dictionariesDir, 'english', 'comments.json'), 'utf8')
  ) as Record<string, string>;

  const COMMENTS_TO_NOT_TRANSLATE = JSON.parse(
    readFileSync(
      resolve(dictionariesDir, 'english', 'comments-to-not-translate.json'),
      'utf8'
    )
  ) as Record<string, string>;

  // map from english comment text to translations
  const translatedCommentMap = Object.entries(COMMENTS_TO_TRANSLATE).reduce(
    (acc, [id, text]) => {
      return {
        ...acc,
        [text]: getTranslationEntry(dictionaries, { engId: id, text })
      };
    },
    {} as CommentDictionary
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
  }, {} as CommentDictionary);

  const allComments = { ...translatedCommentMap, ...untranslatableCommentMap };

  // the english entries need to be added here, because english is not in
  // languages
  Object.keys(allComments).forEach(comment => {
    allComments[comment]!.english = comment;
  });

  return allComments;
}

// Map of superblock filenames to their SuperBlocks enum values
export const superBlockNames = {
  'responsive-web-design': SuperBlocks.RespWebDesign,
  'javascript-algorithms-and-data-structures': SuperBlocks.JsAlgoDataStruct,
  'front-end-development-libraries': SuperBlocks.FrontEndDevLibs,
  'data-visualization': SuperBlocks.DataVis,
  'back-end-development-and-apis': SuperBlocks.BackEndDevApis,
  'quality-assurance': SuperBlocks.QualityAssurance,
  'scientific-computing-with-python': SuperBlocks.SciCompPy,
  'data-analysis-with-python': SuperBlocks.DataAnalysisPy,
  'information-security': SuperBlocks.InfoSec,
  'coding-interview-prep': SuperBlocks.CodingInterviewPrep,
  'machine-learning-with-python': SuperBlocks.MachineLearningPy,
  'relational-databases': SuperBlocks.RelationalDb,
  'responsive-web-design-22': SuperBlocks.RespWebDesignNew,
  'javascript-algorithms-and-data-structures-22':
    SuperBlocks.JsAlgoDataStructNew,
  'javascript-v9': SuperBlocks.JsV9,
  'the-odin-project': SuperBlocks.TheOdinProject,
  'college-algebra-with-python': SuperBlocks.CollegeAlgebraPy,
  'project-euler': SuperBlocks.ProjectEuler,
  'foundational-c-sharp-with-microsoft': SuperBlocks.FoundationalCSharp,
  'a2-english-for-developers': SuperBlocks.A2English,
  'rosetta-code': SuperBlocks.RosettaCode,
  'python-for-everybody': SuperBlocks.PythonForEverybody,
  'b1-english-for-developers': SuperBlocks.B1English,
  'full-stack-developer': SuperBlocks.FullStackDeveloper,
  'a1-professional-spanish': SuperBlocks.A1Spanish,
  'a2-professional-spanish': SuperBlocks.A2Spanish,
  'a2-professional-chinese': SuperBlocks.A2Chinese,
  'basic-html': SuperBlocks.BasicHtml,
  'semantic-html': SuperBlocks.SemanticHtml,
  'a1-professional-chinese': SuperBlocks.A1Chinese,
  'dev-playground': SuperBlocks.DevPlayground,
  'full-stack-open': SuperBlocks.FullStackOpen,
  'responsive-web-design-v9': SuperBlocks.RespWebDesignV9,
  'front-end-development-libraries-v9': SuperBlocks.FrontEndDevLibsV9,
  'python-v9': SuperBlocks.PythonV9,
  'relational-databases-v9': SuperBlocks.RelationalDbV9,
  'back-end-development-and-apis-v9': SuperBlocks.BackEndDevApisV9,
  'full-stack-developer-v9': SuperBlocks.FullStackDeveloperV9
};

export const superBlockToFilename = Object.entries(superBlockNames).reduce(
  (map, entry) => {
    return { ...map, [entry[1]]: entry[0] };
  },
  {}
);

/**
 * Builds an array of superblock structures from a curriculum object

 * @param {string[]} superBlockFilenames - Array of superblock filename strings
 * @returns {Array<Object>} Array of superblock structure objects with filename, name, and blocks
 * @throws {Error} When a superblock file is not found
 */
export function addSuperblockStructure(
  superBlockFilenames: string[],
  showComingSoon = SHOW_UPCOMING_CHANGES
) {
  log(`Building structure for ${superBlockFilenames.length} superblocks`);

  const superblockStructures = superBlockFilenames.map(filename => {
    const superblockName =
      superBlockNames[filename as keyof typeof superBlockNames];
    if (!superblockName) {
      throw new Error(`Superblock name not found for ${filename}`);
    }

    return {
      name: superblockName,
      blocks: transformSuperBlock(getSuperblockStructure(filename), {
        showComingSoon
      })
    };
  });

  log(
    `Successfully built ${superblockStructures.length} superblock structures`
  );

  return superblockStructures;
}

type ProcessedBlock = BlockInfo & BlockStructure;

export function addBlockStructure(
  superblocks: { name: SuperBlocks; blocks: BlockInfo[] }[],
  _getBlockStructure = getBlockStructure
): { name: SuperBlocks; blocks: ProcessedBlock[] }[] {
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
export function getSuperblocks(
  block: string,
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

function validateBlocks(superblocks: SuperBlocks[], blockStructureDir: string) {
  const withSuperblockStructure = addSuperblockStructure(superblocks, true);
  const blockInSuperblocks = withSuperblockStructure
    .flatMap(({ blocks }) => blocks)
    .map(b => b.dashedName);
  for (const block of blockInSuperblocks) {
    const blockPath = getBlockStructurePath(block);
    if (!existsSync(blockPath)) {
      throw Error(
        `Block "${block}" is in a superblock, but has no block structure file at ${blockPath}`
      );
    }
  }

  const blockStructureFiles = readdirSync(blockStructureDir).map(file =>
    basename(file, '.json')
  );

  for (const block of blockStructureFiles) {
    if (!blockInSuperblocks.includes(block)) {
      throw Error(
        `Block "${block}" has a structure file, ${getBlockStructurePath(block)}, but is not in a superblock`
      );
    }
  }
}

export async function parseCurriculumStructure(filter?: Filter) {
  const curriculum = getCurriculumStructure();
  const blockStructureDir = getBlockStructureDir();
  if (isEmpty(curriculum.superblocks))
    throw Error('No superblocks found in curriculum.json');
  if (isEmpty(curriculum.certifications))
    throw Error('No certifications found in curriculum.json');
  log(`Found ${curriculum.superblocks.length} superblocks to build`);
  log(`Found ${curriculum.certifications.length} certifications to build`);

  validateBlocks(curriculum.superblocks, blockStructureDir);

  const superblockList = addBlockStructure(
    addSuperblockStructure(curriculum.superblocks)
  );
  const refinedFilter = closestFilters(superblockList, filter);
  const fullSuperblockList = applyFilters(superblockList, refinedFilter);
  return {
    fullSuperblockList,
    certifications: curriculum.certifications
  };
}

export async function buildCurriculum(lang: string, filters?: Filter) {
  // Block validation assumes the entire block is being built, if that's not the
  // case, skip validation
  const skipBlockValidation = filters?.challengeId !== undefined;
  const contentDir = getContentDir(lang);

  const builder = new SuperblockCreator(
    getBlockCreator(lang, skipBlockValidation)
  );

  const { fullSuperblockList, certifications } =
    await parseCurriculumStructure(filters);

  const fullCurriculum: {
    [key: string]: unknown;
    certifications: { blocks: { [key: string]: unknown } };
  } = {
    certifications: { blocks: {} }
  };

  const liveSuperblocks = fullSuperblockList.filter(({ name }) => {
    const superOrder = getSuperOrder(name);
    const upcomingSuperOrder = getSuperOrder(name, true);

    if (isUndefined(superOrder) && isUndefined(upcomingSuperOrder)) {
      throw Error(`Invalid superBlock: ${name}`);
    }
    return !isUndefined(superOrder);
  });

  for (const superblock of liveSuperblocks) {
    const processedSuperblock = await builder.processSuperblock(superblock);
    fullCurriculum[superblock.name] = processedSuperblock;
  }

  for (const cert of certifications) {
    const certPath = resolve(contentDir, 'certifications', `${cert}.yml`);
    if (!existsSync(certPath)) {
      throw Error(`Certification file not found: ${certPath}`);
    }
    log(`=== Processing certification ${cert} ===`);
    fullCurriculum.certifications.blocks[cert] = buildCertification(certPath);
  }

  return fullCurriculum;
}
