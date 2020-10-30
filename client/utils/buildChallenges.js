const _ = require('lodash');

const {
  getChallengesForLang,
  createChallengeCreator,
  challengesDir,
  getChallengesDirForLang
} = require('../../curriculum/getChallenges');
const { locale } = require('../config/env.json');

exports.localeChallengesRootDir = getChallengesDirForLang(locale);

const createChallenge = createChallengeCreator(challengesDir, locale);

exports.replaceChallengeNode = () => {
  return async function replaceChallengeNode(filePath) {
    return await createChallenge(filePath);
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
