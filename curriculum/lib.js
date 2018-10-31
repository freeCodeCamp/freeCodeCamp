const invariant = require('invariant');

const { supportedLangs } = require('./utils');

function validateLang(lang) {
  invariant(lang, 'Please provide a language');
  invariant(
    supportedLangs.includes(lang),
    `${lang} is not supported

  Supported languages: ${JSON.stringify(supportedLangs, null, 2)}

  `
  );
}

function getCurriculum(lang) {
  validateLang(lang);
  const curriculum = require(`./build/curriculum-${lang}.json`);
  return curriculum;
}

exports.getChallengesForLang = getCurriculum;
