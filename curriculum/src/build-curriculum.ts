import { readdirSync, existsSync } from 'node:fs';
import { resolve, basename } from 'node:path';

import { isEmpty, isUndefined } from 'lodash';
import debug from 'debug';

import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import {
  SuperblockCreator,
  transformSuperBlock,
  BlockInfo,
  BlockCreator
} from './build-superblock.js';

import { buildCertification } from './build-certification.js';
import { getSuperOrder } from './super-order.js';
import { applyFilters, closestFilters, type Filter } from './filter.js';
import {
  getContentDir,
  getCurriculumStructure,
  getBlockStructure,
  getSuperblockStructure,
  getBlockStructurePath,
  getBlockStructureDir,
  type BlockStructure
} from './file-handler.js';
import { SHOW_UPCOMING_CHANGES } from './config.js';
const log = debug('fcc:build-curriculum');

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
  'full-stack-developer-v9': SuperBlocks.FullStackDeveloperV9,
  'html-forms-and-tables': SuperBlocks.HtmlFormsAndTables,
  'learn-python-for-beginners': SuperBlocks.LearnPythonForBeginners,
  'lab-survey-form': SuperBlocks.LabSurveyForm,
  'html-and-accessibility': SuperBlocks.HtmlAndAccessibility,
  'computer-basics': SuperBlocks.ComputerBasics,
  'basic-css': SuperBlocks.BasicCss,
  'design-for-developers': SuperBlocks.DesignForDevelopers,
  'absolute-and-relative-units': SuperBlocks.AbsoluteAndRelativeUnits,
  'pseudo-classes-and-elements': SuperBlocks.PseudoClassesAndElements,
  'css-colors': SuperBlocks.CssColors,
  'styling-forms': SuperBlocks.StylingForms,
  'css-box-model': SuperBlocks.CssBoxModel,
  'css-flexbox': SuperBlocks.CssFlexbox,
  'lab-page-of-playing-cards': SuperBlocks.LabPageOfPlayingCards,
  'css-typography': SuperBlocks.CssTypography,
  'css-and-accessibility': SuperBlocks.CssAndAccessibility,
  'css-positioning': SuperBlocks.CssPositioning,
  'attribute-selectors': SuperBlocks.AttributeSelectors,
  'lab-book-inventory-app': SuperBlocks.LabBookInventoryApp,
  'responsive-design': SuperBlocks.ResponsiveDesign,
  'lab-technical-documentation-page': SuperBlocks.LabTechnicalDocumentationPage,
  'css-variables': SuperBlocks.CssVariables,
  'css-grid': SuperBlocks.CssGrid,
  'lab-product-landing-page': SuperBlocks.LabProductLandingPage,
  'css-animations': SuperBlocks.CssAnimations
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
  const skipValidation = filters?.challengeId !== undefined;
  const contentDir = getContentDir(lang);

  const builder = new SuperblockCreator(
    new BlockCreator({ lang, skipValidation })
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
