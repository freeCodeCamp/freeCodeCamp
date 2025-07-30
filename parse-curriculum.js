#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const { isEmpty } = require('lodash');
const debug = require('debug')('fcc:parse-curriculum');

const { SuperblockCreator, BlockCreator } = require('./parse-superblock');

const { parseCertification } = require('./parse-certification');

const STRUCTURE_DIR = path.resolve(__dirname, 'curriculum/structure');

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

/**
 * Main function to parse all superblocks and create parsed-curriculum.json
 */
async function parseCurriculum(baseDir, i18nBaseDir, lang) {
  const contentDir = path.resolve(baseDir, 'challenges', 'english');
  const i18nContentDir = path.resolve(i18nBaseDir, 'challenges', lang);
  const blockContentDir = path.resolve(contentDir, 'blocks');
  const i18nBlockContentDir = path.resolve(i18nContentDir, 'blocks');
  const blockStructureDir = path.resolve(STRUCTURE_DIR, 'blocks');

  if (lang !== 'english') {
    assert(
      fs.existsSync(i18nContentDir),
      `i18n content directory does not exist: ${i18nContentDir}`
    );
    assert(
      fs.existsSync(i18nBlockContentDir),
      `i18n block content directory does not exist: ${i18nBlockContentDir}`
    );
  }

  debug(`Using content directory: ${contentDir}`);
  debug(`Using i18n content directory: ${i18nContentDir}`);
  debug(`Using block content directory: ${blockContentDir}`);
  debug(`Using i18n block content directory: ${i18nBlockContentDir}`);

  const parser = new SuperblockCreator({
    blockCreator: new BlockCreator({
      blockContentDir,
      blockStructureDir,
      i18nBlockContentDir,
      lang
    })
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

module.exports = { parseCurriculum };
