const fs = require('fs');
const path = require('path');
const util = require('util');

const { curriculum: curriculumLangs } =
  require('../shared/config/i18n').availableLangs;
const { buildCurriculum } = require('./build-curriculum');
const {
  assertSuperBlockStructure
} = require('./schema/superblock-structure-schema');

const fullStackSuperBlockStructure = require('./superblock-structure/full-stack.json');

assertSuperBlockStructure(fullStackSuperBlockStructure);

const access = util.promisify(fs.access);

exports.getChallengesForLang = async function getChallengesForLang(lang) {
  const invalidLang = !curriculumLangs.includes(lang);
  if (invalidLang)
    throw Error(`${lang} is not a accepted language.
Accepted languages are ${curriculumLangs.join(', ')}`);

  return buildCurriculum(lang);
};

async function hasEnglishSource(basePath, translationPath) {
  const englishRoot = path.resolve(__dirname, basePath, 'english');
  return await access(
    path.join(englishRoot, translationPath),
    fs.constants.F_OK
  )
    .then(() => true)
    .catch(() => false);
}

exports.hasEnglishSource = hasEnglishSource;
