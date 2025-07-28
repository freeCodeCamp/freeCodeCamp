const path = require('path');

const _ = require('lodash');

const envData = require('../config/env.json');
const {
  getChallengesForLang,
  ENGLISH_CHALLENGES_DIR,
  BLOCKS_DIR,
  // I18N_CHALLENGES_DIR,
  getChallengesDirForLang
} = require('../../curriculum/get-challenges');

const { createChallenge } = require('../../parse-superblock');

const { curriculumLocale } = envData;

exports.localeChallengesRootDir = getChallengesDirForLang(curriculumLocale);

exports.replaceChallengeNode = () => {
  return async function replaceChallengeNode(filePath) {
    const parentDir = path.dirname(filePath);
    const blockName = path.basename(parentDir);

    const metaPath = path.resolve(BLOCKS_DIR, `${blockName}.json`);
    console.log(
      `Replacing challenge node for ${filePath} with meta from ${metaPath}`
    );
    delete require.cache[require.resolve(metaPath)];
    const meta = require(metaPath);
    const englishPath = path.resolve(
      ENGLISH_CHALLENGES_DIR,
      'english',
      filePath
    );
    // const i18nPath = path.resolve(
    //   I18N_CHALLENGES_DIR,
    //   curriculumLocale,
    //   filePath
    // );

    return await createChallenge(englishPath, meta);
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
