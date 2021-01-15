const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const {
  curriculum: curriculumLangs
} = require('../config/i18n/all-langs').availableLangs;

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
