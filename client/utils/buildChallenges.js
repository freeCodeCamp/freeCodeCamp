const _ = require('lodash');

const {
  getChallengesForLang,
  createChallenge,
  getChallengesDirForLang
} = require('../../curriculum/getChallenges');
const { dasherize, nameify } = require('../../utils/slugs');
const { locale } = require('../config/env.json');
const { blockNameify } = require('../../utils/block-nameify');

const arrToString = arr =>
  Array.isArray(arr) ? arr.join('\n') : _.toString(arr);

exports.localeChallengesRootDir = getChallengesDirForLang(locale);

exports.replaceChallengeNode = locale => {
  return async function replaceChallengeNode(fullFilePath) {
    return prepareChallenge(await createChallenge(fullFilePath, null, locale));
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
    .map(({ challenges }) => challenges.map(prepareChallenge))
    .reduce((accu, current) => accu.concat(current), []);
  return builtChallenges;
};

function prepareChallenge(challenge) {
  challenge.name = nameify(challenge.title);
  if (challenge.files) {
    challenge.files = _.reduce(
      challenge.files,
      (map, file) => {
        map[file.key] = {
          ...file,
          head: arrToString(file.head),
          contents: arrToString(file.contents),
          tail: arrToString(file.tail)
        };
        return map;
      },
      {}
    );
  }
  challenge.block = dasherize(challenge.block);
  challenge.superBlock = blockNameify(challenge.superBlock);
  return challenge;
}
