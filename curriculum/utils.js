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
    throw Error(`superblock ${JSON.stringify(superblock)} must be a string`);
  const order = superOrder[superblock];
  if (typeof order === 'undefined')
    throw Error(`${superblock} is not a valid superblock`);
  return order;
}

exports.createSuperOrder = createSuperOrder;
exports.getSuperOrder = getSuperOrder;
