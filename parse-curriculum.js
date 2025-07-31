#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const { isEmpty } = require('lodash');
const debug = require('debug')('fcc:parse-curriculum');

const { SuperblockCreator, BlockCreator } = require('./parse-superblock');

const { parseCertification } = require('./parse-certification');

const CURRICULUM_DIR = path.resolve(__dirname, 'curriculum');
const I18N_CURRICULUM_DIR = path.resolve(
  CURRICULUM_DIR,
  'i18n-curriculum',
  'curriculum'
);
const STRUCTURE_DIR = path.resolve(__dirname, 'curriculum', 'structure');

const getBlockCreator = (lang, opts) => {
  const {
    blockContentDir,
    blockStructureDir,
    i18nBlockContentDir,
    dictionariesDir,
    i18nDictionariesDir
  } = getLanguageConfig(lang, opts);

  const secondDictionaryDir =
    lang === 'english' ? dictionariesDir : i18nDictionariesDir;

  return new BlockCreator({
    lang,
    blockContentDir,
    blockStructureDir,
    i18nBlockContentDir,
    commentTranslations: createCommentMap(dictionariesDir, secondDictionaryDir)
  });
};

function getTranslationEntry(dicts, { engId, text }) {
  return Object.keys(dicts).reduce((acc, lang) => {
    const entry = dicts[lang][engId];
    if (entry) {
      return { ...acc, [lang]: entry };
    } else {
      // default to english
      return { ...acc, [lang]: text };
    }
  }, {});
}

function createCommentMap(dictionariesDir, englishDictionariesDir) {
  debug(
    `Creating comment map from ${dictionariesDir} and ${englishDictionariesDir}`
  );
  const languages = fs.readdirSync(dictionariesDir);

  // get all their dictionaries
  const dictionaries = languages.reduce(
    (acc, lang) => ({
      ...acc,
      [lang]: require(path.resolve(dictionariesDir, lang, 'comments.json'))
    }),
    {}
  );

  // get the english dicts
  const COMMENTS_TO_TRANSLATE = require(
    path.resolve(englishDictionariesDir, 'english', 'comments.json')
  );

  const COMMENTS_TO_NOT_TRANSLATE = require(
    path.resolve(
      englishDictionariesDir,
      'english',
      'comments-to-not-translate.json'
    )
  );

  // map from english comment text to translations
  const translatedCommentMap = Object.entries(COMMENTS_TO_TRANSLATE).reduce(
    (acc, [id, text]) => {
      return {
        ...acc,
        [text]: getTranslationEntry(dictionaries, { engId: id, text })
      };
    },
    {}
  );

  // map from english comment text to itself
  const untranslatableCommentMap = Object.values(
    COMMENTS_TO_NOT_TRANSLATE
  ).reduce((acc, text) => {
    const englishEntry = languages.reduce(
      (acc, lang) => ({
        ...acc,
        [lang]: text
      }),
      {}
    );
    return {
      ...acc,
      [text]: englishEntry
    };
  }, {});

  const allComments = { ...translatedCommentMap, ...untranslatableCommentMap };

  // the english entries need to be added here, because english is not in
  // languages
  Object.keys(allComments).forEach(comment => {
    allComments[comment].english = comment;
  });

  return allComments;
}

// Map of superblock folder names to their SuperBlocks enum values
const superBlockNames = {
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
    'javascript-algorithms-and-data-structures-v8',
  '16-the-odin-project': 'the-odin-project',
  '17-college-algebra-with-python': 'college-algebra-with-python',
  '18-project-euler': 'project-euler',
  '19-foundational-c-sharp-with-microsoft':
    'foundational-c-sharp-with-microsoft',
  '21-a2-english-for-developers': 'a2-english-for-developers',
  '22-rosetta-code': 'rosetta-code',
  '23-python-for-everybody': 'python-for-everybody',
  '24-b1-english-for-developers': 'b1-english-for-developers',
  '25-full-stack-developer': 'full-stack-developer',
  '26-a2-professional-spanish': 'a2-professional-spanish',
  '27-a2-professional-chinese': 'a2-professional-chinese',
  '28-basic-html': 'basic-html',
  '29-semantic-html': 'semantic-html',
  '99-dev-playground': 'dev-playground'
};

function getLanguageConfig(
  lang,
  { baseDir, i18nBaseDir, structureDir } = {
    baseDir: CURRICULUM_DIR,
    i18nBaseDir: I18N_CURRICULUM_DIR,
    structureDir: STRUCTURE_DIR
  }
) {
  const contentDir = path.resolve(baseDir, 'challenges', 'english');
  const i18nContentDir = path.resolve(i18nBaseDir, 'challenges', lang);
  const blockContentDir = path.resolve(contentDir, 'blocks');
  const i18nBlockContentDir = path.resolve(i18nContentDir, 'blocks');
  const blockStructureDir = path.resolve(structureDir, 'blocks');
  const dictionariesDir = path.resolve(baseDir, 'dictionaries');
  const i18nDictionariesDir = path.resolve(i18nBaseDir, 'dictionaries');

  if (lang !== 'english') {
    assert(
      fs.existsSync(i18nContentDir),
      `i18n content directory does not exist: ${i18nContentDir}`
    );
    assert(
      fs.existsSync(i18nBlockContentDir),
      `i18n block content directory does not exist: ${i18nBlockContentDir}`
    );
    assert(
      fs.existsSync(i18nDictionariesDir),
      `i18n dictionaries directory does not exist: ${i18nDictionariesDir}`
    );
  }

  debug(`Using content directory: ${contentDir}`);
  debug(`Using i18n content directory: ${i18nContentDir}`);
  debug(`Using block content directory: ${blockContentDir}`);
  debug(`Using i18n block content directory: ${i18nBlockContentDir}`);
  debug(`Using dictionaries directory: ${dictionariesDir}`);
  debug(`Using i18n dictionaries directory: ${i18nDictionariesDir}`);

  return {
    contentDir,
    i18nContentDir,
    blockContentDir,
    i18nBlockContentDir,
    blockStructureDir,
    dictionariesDir,
    i18nDictionariesDir
  };
}

function getContentDir(lang) {
  const { contentDir, i18nContentDir } = getLanguageConfig(lang);

  return lang === 'english' ? contentDir : i18nContentDir;
}
/**
 * Main function to parse all superblocks and create parsed-curriculum.json
 */
async function parseCurriculum(lang) {
  const contentDir = getContentDir(lang);
  const parser = new SuperblockCreator({
    blockCreator: getBlockCreator(lang)
  });
  console.log('Reading curriculum.json...');

  // Read the curriculum.json file
  const curriculumPath = path.resolve(STRUCTURE_DIR, 'curriculum.json');
  if (!fs.existsSync(curriculumPath)) {
    throw new Error(`Curriculum file not found: ${curriculumPath}`);
  }

  const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
  const { superblocks, certifications } = curriculum;
  if (isEmpty(superblocks))
    throw Error('No superblocks found in curriculum.json');
  if (isEmpty(certifications))
    throw Error('No certifications found in curriculum.json');

  console.log(`Found ${superblocks.length} superblocks to parse`);

  const parsedCurriculum = { certifications: { blocks: {} } };

  // Parse each superblock
  for (const superblockFolder of superblocks) {
    console.log(`\n=== Processing ${superblockFolder} ===`);

    const superBlockName = superBlockNames[superblockFolder];

    const superblockPath = path.resolve(
      STRUCTURE_DIR,
      'superblocks',
      `${superblockFolder}.json`
    );

    if (!fs.existsSync(superblockPath)) {
      throw Error(`Superblock file not found: ${superblockPath}`);
    }

    // Parse the superblock
    const parsedSuperblock = await parser.parseSuperblock(
      superblockPath,
      superBlockName
    );

    // Use the display name as the key, or fall back to the folder name

    parsedCurriculum[superBlockName] = parsedSuperblock;

    console.log(`✅ Successfully parsed ${superBlockName}`);
  }

  console.log(
    `Total superblocks parsed: ${Object.keys(parsedCurriculum).length}`
  );

  // Parse certifications
  for (const cert of certifications) {
    const certPath = path.resolve(contentDir, 'certifications', `${cert}.yml`);

    if (!fs.existsSync(certPath)) {
      throw Error(`Certification file not found: ${certPath}`);
    }

    console.log(`\n=== Processing certification ${cert} ===`);

    const parsedCert = parseCertification(certPath);

    parsedCurriculum.certifications.blocks[cert] = { challenges: [parsedCert] };

    console.log(`✅ Successfully parsed certification ${cert}`);
  }

  return parsedCurriculum;
}

module.exports = {
  parseCurriculum,
  getContentDir,
  getBlockCreator,
  createCommentMap
};
