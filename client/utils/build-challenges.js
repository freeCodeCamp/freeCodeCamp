const path = require('path');

const _ = require('lodash');

const envData = require('../../config/env.json');
const {
  getChallengesForLang,
  createChallenge,
  challengesDir,
  getChallengesDirForLang
} = require('../../curriculum/getChallenges');

const { curriculumLocale, deploymentEnv } = envData;

exports.localeChallengesRootDir = getChallengesDirForLang(curriculumLocale);

exports.replaceChallengeNode = () => {
  return async function replaceChallengeNode(filePath) {
    // get the meta so that challengeOrder is accurate
    const blockNameRe = /\d\d-[-\w]+\/([^/]+)\//;
    const posix = path.normalize(filePath).split(path.sep).join(path.posix.sep);
    const blockName = posix.match(blockNameRe)[1];
    const metaPath = path.resolve(
      __dirname,
      `../../curriculum/challenges/_meta/${blockName}/meta.json`
    );
    delete require.cache[require.resolve(metaPath)];
    const meta = require(metaPath);
    // TODO: reimplement hot-reloading of certifications
    return await createChallenge(
      challengesDir,
      filePath,
      curriculumLocale,
      meta
    );
  };
};

exports.buildChallenges = async function buildChallenges() {
  const curriculum = await getChallengesForLang(curriculumLocale);

  // temp removal of rdbms from production
  if (deploymentEnv !== 'staging') {
    delete curriculum['13-relational-databases'];
  }

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
