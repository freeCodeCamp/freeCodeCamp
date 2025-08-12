const path = require('path');
const {
  generateSuperBlockList,
  SuperBlocks,
  folderToSuperBlockMap
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
    throw Error('superblock must be a string');
  const order = superOrder[superblock];
  if (typeof order === 'undefined')
    throw Error(`${superblock} is not a valid superblock`);
  return order;
}

const directoryToSuperblock = {
  '00-certifications': 'certifications', // treating certifications as a superblock for simplicity
  ...folderToSuperBlockMap
};

function getSuperBlockFromDir(dir) {
  const superBlock = directoryToSuperblock[dir];
  if (!superBlock) throw Error(`${dir} does not map to a superblock`);
  return directoryToSuperblock[dir];
}

function getChapterFromBlock(blockName, superBlockStructure) {
  const chapters = superBlockStructure.chapters;
  const chaptersWithBlocks = chapters.map(chapter => ({
    ...chapter,
    blocks: chapter.modules.flatMap(module => module.blocks)
  }));

  const chapter = chaptersWithBlocks.find(chapter =>
    chapter.blocks.some(b => b.dashedName === blockName)
  );

  if (!chapter) {
    throw Error(
      `There is no chapter corresponding to block "${blockName}". It's possible that the block is missing in the superblock structure.`
    );
  }
  return { dashedName: chapter.dashedName, comingSoon: chapter.comingSoon };
}

function getModuleFromBlock(blockName, superBlockStructure) {
  const modules = superBlockStructure.chapters.flatMap(
    chapter => chapter.modules
  );
  const module = modules.find(module =>
    module.blocks.some(b => b.dashedName === blockName)
  );
  if (!module) {
    throw Error(
      `There is no module corresponding to block "${blockName}". It's possible that the block is missing in the superblock structure.`
    );
  }
  return { dashedName: module.dashedName, comingSoon: module.comingSoon };
}

function getBlockOrder(blockName, superBlockStructure) {
  const blocks = superBlockStructure.chapters
    .flatMap(chapter => chapter.modules)
    .flatMap(module => module.blocks);

  const index = blocks.findIndex(block => block.dashedName === blockName);

  if (index === -1)
    throw Error(
      `The block "${blockName}" does not appear in the superblock structure.`
    );

  return index;
}
exports.createSuperOrder = createSuperOrder;
exports.getSuperOrder = getSuperOrder;
exports.getSuperBlockFromDir = getSuperBlockFromDir;
exports.getChapterFromBlock = getChapterFromBlock;
exports.getModuleFromBlock = getModuleFromBlock;
exports.getBlockOrder = getBlockOrder;
