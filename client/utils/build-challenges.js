const path = require('path');

const _ = require('lodash');

const {
  getChallengesForLang
} = require('../../curriculum/dist/get-challenges.js');

const {
  getBlockCreator,
  getSuperblocks,
  superBlockToFilename
} = require('../../curriculum/dist/build-curriculum.js');
const {
  getContentDir,
  getBlockStructure,
  getSuperblockStructure
} = require('../../curriculum/dist/file-handler.js');
const {
  transformSuperBlock
} = require('../../curriculum/dist/build-superblock.js');
const { getSuperOrder } = require('../../curriculum/dist/super-order.js');

const curriculumLocale = process.env.CURRICULUM_LOCALE || 'english';

exports.localeChallengesRootDir = getContentDir(curriculumLocale);

const blockCreator = getBlockCreator(curriculumLocale);

function getBlockMetadata(block, superBlock) {
  // Compute metadata for the given block in the specified superblock
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

  return { order, superOrder };
}

exports.replaceChallengeNodes = () => {
  return async function replaceChallengeNodes(filePath) {
    const parentDir = path.dirname(filePath);
    const block = path.basename(parentDir);
    const filename = path.basename(filePath);

    console.log(`Replacing challenge nodes for ${filePath}`);
    const meta = getBlockStructure(block);
    const superblocks = getSuperblocks(block);

    // Create a challenge for each superblock containing this block
    const challenges = await Promise.all(
      superblocks.map(async superBlock => {
        const { order, superOrder } = getBlockMetadata(block, superBlock);
        return blockCreator.createChallenge({
          filename,
          block,
          meta: { ...meta, superBlock, order, superOrder },
          isAudited: true
        });
      })
    );

    return challenges;
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
