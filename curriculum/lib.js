const invariant = require('invariant');

const { getChallengesForLang } = require('./getChallenges');
const { supportedLangs } = require('./utils');

const promises = supportedLangs.map(lang => getChallengesForLang(lang));
const curricula = Promise.all(promises).then(allLangCurriculum =>
  allLangCurriculum.reduce(
    (map, current, i) => ({ ...map, [supportedLangs[i]]: current }),
    {}
  )
);

function validateLang(lang) {
  invariant(lang, 'Please provide a language');
  invariant(
    supportedLangs.includes(lang),
    `${lang} is not supported

  Supported languages: ${JSON.stringify(supportedLangs, null, 2)}

  `
  );
}

async function getCurriculum(lang) {
  validateLang(lang);
  const allCurriculum = await curricula;
  const requested = allCurriculum[lang];
  return requested;
}

exports.getChallengesForLang = getCurriculum;
