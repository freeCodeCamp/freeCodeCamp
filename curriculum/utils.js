const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const supportedLangs = ['chinese', 'english'];

exports.testedLang = function testedLang() {
  if (process.env.LOCALE) {
    if (supportedLangs.includes(process.env.LOCALE)) {
      return process.env.LOCALE;
    } else {
      throw Error(`${process.env.LOCALE} is not a supported language.
      Before the site can be built, this language needs to be manually approved`);
    }
  } else {
    throw Error('LOCALE must be set for testing');
  }
};

exports.supportedLangs = supportedLangs;
