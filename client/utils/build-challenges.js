const path = require('path');

const _ = require('lodash');

const envData = require('../../config/env.json');
const {
  getChallengesForLang,
  generateChallengeCreator,
  CHALLENGES_DIR,
  META_DIR,
  getChallengesDirForLang
} = require('../../curriculum/get-challenges');

const { curriculumLocale } = envData;

exports.localeChallengesRootDir = getChallengesDirForLang(curriculumLocale);

exports.replaceChallengeNode = () => {
  return async function replaceChallengeNode(filePath) {
    // get the meta so that challengeOrder is accurate
    const blockNameRe = /\d\d-[-\w]+\/([^/]+)\//;
    const posix = path.normalize(filePath).split(path.sep).join(path.posix.sep);
    const blockName = posix.match(blockNameRe)[1];
    const metaPath = path.resolve(META_DIR, `${blockName}/meta.json`);
    delete require.cache[require.resolve(metaPath)];
    const meta = require(metaPath);
    // TODO: reimplement hot-reloading of certifications
    return await createChallenge(filePath, meta);
  };
};

const createChallenge = generateChallengeCreator(
  CHALLENGES_DIR,
  curriculumLocale
);

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
