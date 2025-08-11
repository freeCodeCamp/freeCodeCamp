const path = require('path');

const _ = require('lodash');

const envData = require('../config/env.json');
const { getChallengesForLang } = require('../../curriculum/get-challenges');

const {
  getContentDir,
  getBlockCreator
} = require('../../curriculum/build-curriculum');

const { curriculumLocale } = envData;

exports.localeChallengesRootDir = getContentDir(curriculumLocale);

const blockCreator = getBlockCreator(curriculumLocale);

exports.replaceChallengeNode = () => {
  return async function replaceChallengeNode(filePath) {
    const parentDir = path.dirname(filePath);
    const block = path.basename(parentDir);
    const filename = path.basename(filePath);

    console.log(`Replacing challenge node for ${filePath}`);
    const meta = blockCreator.getMetaForBlock(block);

    return await blockCreator.createChallenge({
      filename,
      block,
      meta,
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
    .filter(block => !block.isPrivate)
    .map(({ challenges }) => challenges)
    .reduce((accu, current) => accu.concat(current), []);
  return builtChallenges;
};
