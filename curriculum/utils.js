const path = require('path');
const {
  createFlatSuperBlockMap,
  SuperBlocks
} = require('../shared/config/superblocks');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { availableLangs } = require('../shared/config/i18n');
const { curriculumLangs } = availableLangs;  // Destructure directly

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

const flatSuperBlockMap = createFlatSuperBlockMap({
  showNewCurriculum: process.env.SHOW_NEW_CURRICULUM === 'true',
  showUpcomingChanges: process.env.SHOW_UPCOMING_CHANGES === 'true'
});
const superOrder = createSuperOrder(flatSuperBlockMap);

function getSuperOrder(superblock) {
  if (typeof superblock !== 'string')
    throw Error('superblock must be a string');
  const order = superOrder[superblock];
  if (typeof order === 'undefined')
    throw Error(`${superblock} is not a valid superblock`);
  return order;
}

const directoryToSuperblock = {
  '00-certifications': 'certifications',
  '01-responsive-web-design': 'responsive-web-design',
  '02-javascript-algorithms-and-data-structures':
    'javascript-algorithms-and-data-structures',
  // ... (rest of the entries unchanged)
};

function getSuperBlockFromDir(dir) {
  const superBlock = directoryToSuperblock[dir];
  if (!superBlock) throw Error(`${dir} does not map to a superblock`);
  return directoryToSuperblock[dir];
}

exports.createSuperOrder = createSuperOrder;
exports.getSuperOrder = getSuperOrder;
exports.getSuperBlockFromDir = getSuperBlockFromDir;
