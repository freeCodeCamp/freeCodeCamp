const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const {
  availableLangs,
  languagesWithAuditedBetaReleases
} = require('../config/i18n/all-langs');
const curriculumLangs = availableLangs.curriculum;

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
  '2022/responsive-web-design': 0,
  'javascript-algorithms-and-data-structures': 1,
  'front-end-development-libraries': 2,
  'data-visualization': 3,
  'back-end-development-and-apis': 4,
  'quality-assurance': 5,
  'scientific-computing-with-python': 6,
  'data-analysis-with-python': 7,
  'information-security': 8,
  'machine-learning-with-python': 9,
  'coding-interview-prep': 10,
  'responsive-web-design': 11,
  'relational-database': 12
};

/**
 * This order is used for i18n instances where a new certification is released
 * from beta but is not audited, so cannot be reordered (due to the way we
 * split the map)
 */
const superBlockNonAuditedOrder = {
  'responsive-web-design': 0,
  'javascript-algorithms-and-data-structures': 1,
  'front-end-development-libraries': 2,
  'data-visualization': 3,
  'back-end-development-and-apis': 4,
  'quality-assurance': 5,
  'scientific-computing-with-python': 6,
  'data-analysis-with-python': 7,
  'information-security': 8,
  'machine-learning-with-python': 9,
  'coding-interview-prep': 10,
  '2022/responsive-web-design': 11,
  'relational-database': 12
};

const superBlockToNewOrder = {
  ...superBlockToOrder,
  '2022/javascript-algorithms-and-data-structures': 13
};

function getSuperOrder(
  superblock,
  { showNewCurriculum } = { showNewCurriculum: false }
) {
  let orderMap = superBlockToOrder;
  if (showNewCurriculum) {
    orderMap = superBlockToNewOrder;
  }
  if (
    !languagesWithAuditedBetaReleases.includes(process.env.CURRICULUM_LOCALE)
  ) {
    orderMap = superBlockNonAuditedOrder;
  }
  if (typeof superblock !== 'string')
    throw Error('superblock must be a string');
  const order = orderMap[superblock];
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
    '2022/javascript-algorithms-and-data-structures'
};

function getSuperBlockFromDir(dir) {
  const superBlock = directoryToSuperblock[dir];
  if (!superBlock) throw Error(`${dir} does not map to a superblock`);
  return directoryToSuperblock[dir];
}

exports.getSuperOrder = getSuperOrder;
exports.getSuperBlockFromDir = getSuperBlockFromDir;
