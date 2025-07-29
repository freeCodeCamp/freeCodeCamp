const path = require('path');

const _ = require('lodash');

const envData = require('../config/env.json');
const {
  getChallengesForLang,
  BLOCK_STRUCTURE_DIR,
  // I18N_CHALLENGES_DIR,
  getChallengesDirForLang
} = require('../../curriculum/get-challenges');

const { BlockCreator } = require('../../parse-superblock');

const { curriculumLocale } = envData;

exports.localeChallengesRootDir = getChallengesDirForLang(curriculumLocale);
const blockContentDir = path.resolve(exports.localeChallengesRootDir, 'blocks');

exports.replaceChallengeNode = () => {
  const blockCreator = new BlockCreator({
    blockContentDir,
    blockStructureDir: BLOCK_STRUCTURE_DIR
  });
  return async function replaceChallengeNode(filePath) {
    const parentDir = path.dirname(filePath);
    const blockName = path.basename(parentDir);
    const filename = path.basename(filePath);

    const blockStructurePath = path.resolve(
      BLOCK_STRUCTURE_DIR,
      `${blockName}.json`
    );
    console.log(
      `Replacing challenge node for ${filePath} with structure from ${blockStructurePath}`
    );
    delete require.cache[require.resolve(blockStructurePath)];
    const meta = require(blockStructurePath);

    return await blockCreator.createChallenge(filename, blockName, meta);
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
