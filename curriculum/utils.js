const path = require('path');
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
    throw Error('superblock must be a string');
  const order = superOrder[superblock];
  if (typeof order === 'undefined')
    throw Error(`${superblock} is not a valid superblock`);
  return order;
}

const directoryToSuperblock = {
  '00-certifications': 'certifications', // treating certifications as a superblock for simplicity
  '01-responsive-web-design': 'responsive-web-design',
  '02-javascript-algorithms-and-data-structures':
    'javascript-algorithms-and-data-structures',
  '03-front-end-development-libraries': 'front-end-development-libraries',
  '04-data-visualization': 'data-visualization',
  '05-back-end-development-and-apis': 'back-end-development-and-apis',
  '06-quality-assurance': 'quality-assurance',
  '07-scientific-computing-with-python': 'scientific-computing-with-python',
  '08-data-analysis-with-python': 'data-analysis-with-python',
  '09-information-security': 'information-security',
  '10-coding-interview-prep': 'coding-interview-prep',
  '11-machine-learning-with-python': 'machine-learning-with-python',
  '13-relational-databases': 'relational-database',
  '14-responsive-web-design-22': '2022/responsive-web-design',
  '15-javascript-algorithms-and-data-structures-22':
    'javascript-algorithms-and-data-structures-v8',
  '16-the-odin-project': 'the-odin-project',
  '17-college-algebra-with-python': 'college-algebra-with-python',
  '18-project-euler': 'project-euler',
  '19-foundational-c-sharp-with-microsoft':
    'foundational-c-sharp-with-microsoft',
  '21-a2-english-for-developers': 'a2-english-for-developers',
  '22-rosetta-code': 'rosetta-code',
  '23-python-for-everybody': 'python-for-everybody',
  '24-b1-english-for-developers': 'b1-english-for-developers',
  '25-front-end-development': 'full-stack-developer'
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
  return chapter.dashedName;
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
  return module.dashedName;
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
