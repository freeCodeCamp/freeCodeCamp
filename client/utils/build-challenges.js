const path = require('path');

const _ = require('lodash');

const {
  getBlockCreator,
  getSuperblocks,
  superBlockToFilename
} = require('@freecodecamp/curriculum/build-curriculum');
const {
  getContentDir,
  getBlockStructure,
  getSuperblockStructure,
  CURRICULUM_DIR
} = require('@freecodecamp/curriculum/file-handler');
const {
  transformSuperBlock
} = require('@freecodecamp/curriculum/build-superblock');
const { getSuperOrder } = require('@freecodecamp/curriculum/super-order');
const { readFile } = require('fs/promises');

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
  const curriculum = JSON.parse(
    await readFile(
      path.resolve(CURRICULUM_DIR, 'generated', 'curriculum.json'),
      'utf-8'
    )
  );
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
