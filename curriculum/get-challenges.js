const fs = require('fs');
const path = require('path');
const util = require('util');

const { curriculum: curriculumLangs } =
  require('../shared/config/i18n').availableLangs;
const { parseCurriculum } = require('../parse-curriculum');
const {
  assertSuperBlockStructure
} = require('./schema/superblock-structure-schema');

const fullStackSuperBlockStructure = require('./superblock-structure/full-stack.json');

assertSuperBlockStructure(fullStackSuperBlockStructure);

const access = util.promisify(fs.access);

const ENGLISH_CHALLENGES_DIR = path.resolve(__dirname, 'challenges');
const META_DIR = path.resolve(ENGLISH_CHALLENGES_DIR, '_meta');
const BLOCKS_DIR = path.resolve(ENGLISH_CHALLENGES_DIR, 'blocks');
const BLOCK_STRUCTURE_DIR = path.resolve(__dirname, 'structure', 'blocks');

// This is to allow English to build without having to download the i18n files.
// It fails when trying to resolve the i18n-curriculum path if they don't exist.
const curriculumLocale = process.env.CURRICULUM_LOCALE ?? 'english';
const I18N_CURRICULUM_DIR = path.resolve(
  __dirname,
  curriculumLocale === 'english' ? '.' : 'i18n-curriculum/curriculum'
);

const I18N_CHALLENGES_DIR = path.resolve(I18N_CURRICULUM_DIR, 'challenges');

exports.ENGLISH_CHALLENGES_DIR = ENGLISH_CHALLENGES_DIR;
exports.META_DIR = META_DIR;
exports.BLOCKS_DIR = BLOCKS_DIR;
exports.I18N_CHALLENGES_DIR = I18N_CHALLENGES_DIR;
exports.BLOCK_STRUCTURE_DIR = BLOCK_STRUCTURE_DIR;

function getChallengesDirForLang(lang) {
  if (lang === 'english') {
    return path.resolve(ENGLISH_CHALLENGES_DIR, `${lang}`);
  } else {
    return path.resolve(I18N_CHALLENGES_DIR, `${lang}`);
  }
}

function getMetaForBlock(block) {
  return JSON.parse(
    fs.readFileSync(path.resolve(META_DIR, `${block}/meta.json`), 'utf8')
  );
}

exports.getChallengesDirForLang = getChallengesDirForLang;
exports.getMetaForBlock = getMetaForBlock;

exports.getChallengesForLang = async function getChallengesForLang(lang) {
  const invalidLang = !curriculumLangs.includes(lang);
  if (invalidLang)
    throw Error(`${lang} is not a accepted language.
Accepted languages are ${curriculumLangs.join(', ')}`);

  const curriculum = await parseCurriculum(
    __dirname,
    I18N_CURRICULUM_DIR,
    lang
  );

  return curriculum;
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
