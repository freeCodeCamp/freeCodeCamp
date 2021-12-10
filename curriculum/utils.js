const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { curriculum: curriculumLangs } =
  require('../config/i18n/all-langs').availableLangs;

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

// TODO: migrate to TS and use the SuperBlocks enum from
// config/certification-settings.ts

const superBlockToOrder = {
  'responsive-web-design': 0,
  'javascript-algorithms-and-data-structures': 1,
  'front-end-development-libraries': 2,
  'data-visualization': 3,
  'relational-databases': 4,
  'back-end-development-and-apis': 5,
  'quality-assurance': 6,
  'scientific-computing-with-python': 7,
  'data-analysis-with-python': 8,
  'information-security': 9,
  'machine-learning-with-python': 10,
  'coding-interview-prep': 11
};

function getSuperOrder(superblock, { isLegacy } = { isLegacy: false }) {
  if (typeof superblock !== 'string')
    throw Error('superblock must be a string');
  const order = superBlockToOrder[superblock];
  if (typeof order === 'undefined')
    throw Error(`${superblock} is not a valid superblock`);
  return isLegacy ? order + 12 : order;
}

exports.getSuperOrder = getSuperOrder;
