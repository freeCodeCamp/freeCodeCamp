const path = require('path');

const _ = require('lodash');

const envData = require('../config/env.json');
const { getChallengesForLang } = require('../../curriculum/get-challenges');

const {
  getContentDir,
  getBlockCreator
} = require('../../curriculum/build-curriculum');
<<<<<<< HEAD
const { getBlockStructure } = require('../../curriculum/file-handler');
const { getSuperblocks } = require('../../curriculum/build-curriculum');
=======
>>>>>>> ce8d6ef092 (refactor: top-down curriculum build (#61459))

const { curriculumLocale } = envData;

exports.localeChallengesRootDir = getContentDir(curriculumLocale);
<<<<<<< HEAD

const blockCreator = getBlockCreator(curriculumLocale);

exports.replaceChallengeNodes = () => {
  return async function replaceChallengeNodes(filePath) {
=======

const blockCreator = getBlockCreator(curriculumLocale);

exports.replaceChallengeNode = () => {
  return async function replaceChallengeNode(filePath) {
>>>>>>> ce8d6ef092 (refactor: top-down curriculum build (#61459))
    const parentDir = path.dirname(filePath);
    const block = path.basename(parentDir);
    const filename = path.basename(filePath);

    console.log(`Replacing challenge node for ${filePath}`);
<<<<<<< HEAD
    const meta = getBlockStructure(block);
    const superblocks = getSuperblocks(block);

    const challenge = await blockCreator.createChallenge({
=======
    const meta = blockCreator.getMetaForBlock(block);

    return await blockCreator.createChallenge({
>>>>>>> ce8d6ef092 (refactor: top-down curriculum build (#61459))
      filename,
      block,
      meta,
      isAudited: true
    });
<<<<<<< HEAD

    return superblocks.map(superBlock => ({
      ...challenge,
      superBlock
    }));
=======
>>>>>>> ce8d6ef092 (refactor: top-down curriculum build (#61459))
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
