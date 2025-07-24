#!/usr/bin/env node

const fs = require('fs');
const { inspect } = require('util');
const path = require('path');
const { parseSuperblock } = require('./parse-superblock');

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
async function main() {
  console.log('Reading curriculum.json...');

  // Read the curriculum.json file
  const curriculumPath = path.resolve(
    __dirname,
    'curriculum/challenges/curriculum.json'
  );
  if (!fs.existsSync(curriculumPath)) {
    throw new Error(`Curriculum file not found: ${curriculumPath}`);
  }

  const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
  const superblocks = curriculum.superblocks;

  console.log(`Found ${superblocks.length} superblocks to parse`);

  const parsedCurriculum = {};

  // Parse each superblock
  for (const superblockFolder of superblocks) {
    console.log(`\n=== Processing ${superblockFolder} ===`);

    const superBlockName = superBlockNames[superblockFolder];

    const superblockPath = path.resolve(
      __dirname,
      'curriculum/challenges/superblocks',
      `${superblockFolder}.json`
    );

    if (!fs.existsSync(superblockPath)) {
      throw Error(`Superblock file not found: ${superblockPath}`);
    }

    // Parse the superblock
    const parsedSuperblock = await parseSuperblock(
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

  return parsedCurriculum;
}

// Run if called directly
if (require.main === module) {
  main()
    .catch(console.error)
    .then(x => console.log(inspect(x, { depth: null })));
}

module.exports = { main };
