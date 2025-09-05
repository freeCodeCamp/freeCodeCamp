const path = require('path');

const _ = require('lodash');

const { getChallengesForLang } = require('../../curriculum/get-challenges');

const {
  getContentDir,
  getBlockCreator,
  getSuperblocks
} = require('../../curriculum/build-curriculum');
const {
  getBlockStructure,
  getSuperblockStructure
} = require('../../curriculum/file-handler');
const { transformSuperBlock } = require('../../curriculum/build-superblock');
const { getSuperOrder } = require('../../curriculum/utils');

const curriculumLocale = process.env.CURRICULUM_LOCALE || 'english';

exports.localeChallengesRootDir = getContentDir(curriculumLocale);

const blockCreator = getBlockCreator(curriculumLocale);

// Map of superblock filenames to their SuperBlocks enum values
const superBlockNames = {
  'responsive-web-design': 'responsive-web-design',
  'javascript-algorithms-and-data-structures':
    'javascript-algorithms-and-data-structures',
  'front-end-development-libraries': 'front-end-development-libraries',
  'data-visualization': 'data-visualization',
  'back-end-development-and-apis': 'back-end-development-and-apis',
  'quality-assurance': 'quality-assurance',
  'scientific-computing-with-python': 'scientific-computing-with-python',
  'data-analysis-with-python': 'data-analysis-with-python',
  'information-security': 'information-security',
  'coding-interview-prep': 'coding-interview-prep',
  'machine-learning-with-python': 'machine-learning-with-python',
  'relational-databases': 'relational-database',
  'responsive-web-design-22': '2022/responsive-web-design',
  'javascript-algorithms-and-data-structures-22':
    'javascript-algorithms-and-data-structures-v8',
  'the-odin-project': 'the-odin-project',
  'college-algebra-with-python': 'college-algebra-with-python',
  'project-euler': 'project-euler',
  'foundational-c-sharp-with-microsoft': 'foundational-c-sharp-with-microsoft',
  'a2-english-for-developers': 'a2-english-for-developers',
  'rosetta-code': 'rosetta-code',
  'python-for-everybody': 'python-for-everybody',
  'b1-english-for-developers': 'b1-english-for-developers',
  'full-stack-developer': 'full-stack-developer',
  'a2-professional-spanish': 'a2-professional-spanish',
  'a2-professional-chinese': 'a2-professional-chinese',
  'basic-html': 'basic-html',
  'semantic-html': 'semantic-html',
  'a1-professional-chinese': 'a1-professional-chinese',
  'dev-playground': 'dev-playground',
  'full-stack-open': 'full-stack-open'
};

const superBlockToFilename = Object.entries(superBlockNames).reduce(
  (map, [filename, superBlock]) => ({ ...map, [superBlock]: filename }),
  {}
);

function getBlockMetadata(block) {
  // Find the first superblock containing this block and compute metadata
  const superblocks = getSuperblocks(block);
  if (superblocks.length === 0) {
    throw new Error(`Block ${block} not found in any superblock`);
  }

  const superBlock = superblocks[0]; // Use first superblock for metadata
  const sbFilename = superBlockToFilename[superBlock];
  const sbData = getSuperblockStructure(sbFilename);
  const blocks = transformSuperBlock(sbData, {
    showComingSoon: process.env.SHOW_UPCOMING_CHANGES === 'true'
  });

  const order = blocks.findIndex(b => b.dashedName === block);
  const superOrder = getSuperOrder(superBlock);

  if (order === -1) {
    throw new Error(`Block ${block} not found in superblock ${superBlock}`);
  }

  return { superBlock, order, superOrder };
}

exports.replaceChallengeNode = () => {
  return async function replaceChallengeNode(filePath) {
    const parentDir = path.dirname(filePath);
    const block = path.basename(parentDir);
    const filename = path.basename(filePath);

    console.log(`Replacing challenge node for ${filePath}`);
    const meta = getBlockStructure(block);
    const { superBlock, order, superOrder } = getBlockMetadata(block);

    return await blockCreator.createChallenge({
      filename,
      block,
      meta: { ...meta, superBlock, order, superOrder },
      isAudited: true
    });
  };
};

exports.buildChallenges = async function buildChallenges() {
  const curriculum = await getChallengesForLang(curriculumLocale);
  const superBlocks = Object.keys(curriculum);
  const blocks = superBlocks
    .map(superBlock => curriculum[superBlock].blocks)
    .reduce((blocks, superBlock) => {
      const currentBlocks = Object.keys(superBlock).map(key => superBlock[key]);
      return blocks.concat(_.flatten(currentBlocks));
    }, []);

  const builtChallenges = blocks
    .map(({ challenges }) => challenges)
    .reduce((accu, current) => accu.concat(current), []);
  return builtChallenges;
};
