const invariant = require('invariant');

const {
  curriculum: curriculumLangs
} = require('../client/i18n/allLangs').availableLangs;

function validateLang(lang) {
  invariant(lang, 'Please provide a language');
  invariant(
    curriculumLangs.includes(lang),
    `${lang} is not supported

  Supported languages: ${JSON.stringify(curriculumLangs, null, 2)}

  `
  );
}

function getCurriculum(lang) {
  validateLang(lang);
  const curriculum = require(`./build/curriculum-${lang}.json`);
  return curriculum;
}

exports.getChallengesForLang = getCurriculum;
