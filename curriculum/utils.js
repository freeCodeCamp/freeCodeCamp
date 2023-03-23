const path = require('path');
const {
  CurriculumMaps,
  superBlockOrder,
  SuperBlockStates,
  TranslationStates,
  orderedSuperBlockStates
} = require('../config/superblock-order');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { availableLangs } = require('../config/i18n');
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

/*
 * creates an object with all the superblocks in
 * 'superBlockOrder[lang][learn]' as keys and gives them
 * a number (superOrder), starting with 0, as the value
 */
function createSuperOrder({
  language = 'english',
  showNewCurriculum = 'false',
  showUpcomingChanges = 'false'
}) {
  if (!Object.prototype.hasOwnProperty.call(superBlockOrder, language)) {
    throw Error(`${language} not found in superblock-order.ts`);
  }

  if (
    !Object.prototype.hasOwnProperty.call(superBlockOrder[language], [
      CurriculumMaps.Learn
    ])
  ) {
    throw Error(
      `${language} does not have a 'learn' key in superblock-order.ts`
    );
  }

  const audited =
    superBlockOrder[language][CurriculumMaps.Learn][TranslationStates.Audited];
  const notAudited =
    superBlockOrder[language][CurriculumMaps.Learn][
      TranslationStates.NotAudited
    ];

  const superOrder = {};
  let i = 0;

  function addToSuperOrder(superBlocks) {
    superBlocks.forEach(key => {
      superOrder[key] = i;
      i++;
    });
  }

  function canAddToSuperOrder(superBlockState) {
    if (superBlockState === SuperBlockStates.New)
      return showNewCurriculum === 'true';
    if (superBlockState === SuperBlockStates.Upcoming)
      return showUpcomingChanges === 'true';
    return true;
  }

  function addSuperBlockStates(translationState) {
    orderedSuperBlockStates.forEach(state => {
      if (canAddToSuperOrder(state)) addToSuperOrder(translationState[state]);
    });
  }

  addSuperBlockStates(audited);
  addSuperBlockStates(notAudited);

  return superOrder;
}

const superOrder = createSuperOrder({
  language: process.env.CURRICULUM_LOCALE,
  showNewCurriculum: process.env.SHOW_NEW_CURRICULUM,
  showUpcomingChanges: process.env.SHOW_UPCOMING_CHANGES
});

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
    '2022/javascript-algorithms-and-data-structures',
  '16-the-odin-project': 'the-odin-project',
  '17-college-algebra-with-python': 'college-algebra-with-python'
};

function getSuperBlockFromDir(dir) {
  const superBlock = directoryToSuperblock[dir];
  if (!superBlock) throw Error(`${dir} does not map to a superblock`);
  return directoryToSuperblock[dir];
}

exports.createSuperOrder = createSuperOrder;
exports.getSuperOrder = getSuperOrder;
exports.getSuperBlockFromDir = getSuperBlockFromDir;
