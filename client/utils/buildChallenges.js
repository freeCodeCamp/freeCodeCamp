const _ = require('lodash');

const {
  getChallengesForLang,
  createChallenge,
  getChallengesDirForLang
} = require('../../curriculum/getChallenges');
const { locale } = require('../config/env.json');

exports.localeChallengesRootDir = getChallengesDirForLang(locale);

exports.replaceChallengeNode = locale => {
  return async function replaceChallengeNode(fullFilePath) {
    return await createChallenge(fullFilePath, null, locale);
  };
};

exports.buildChallenges = async function buildChallenges() {
  const curriculum = await getChallengesForLang(locale);
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
