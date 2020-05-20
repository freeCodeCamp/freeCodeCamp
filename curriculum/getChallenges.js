const path = require('path');
const { findIndex } = require('lodash');
const readDirP = require('readdirp-walk');
const { parseMarkdown } = require('@freecodecamp/challenge-md-parser');
const fs = require('fs');

const { dasherize } = require('../utils/slugs');

const { challengeSchemaValidator } = require('./schema/challengeSchema');

const challengesDir = path.resolve(__dirname, './challenges');
const metaDir = path.resolve(challengesDir, '_meta');
exports.challengesDir = challengesDir;
exports.metaDir = metaDir;

function getChallengesDirForLang(lang) {
  return path.resolve(challengesDir, `./${lang}`);
}

function getMetaForBlock(block) {
  return JSON.parse(
    fs.readFileSync(path.resolve(metaDir, `./${block}/meta.json`), 'utf8')
  );
}

exports.getChallengesDirForLang = getChallengesDirForLang;
exports.getMetaForBlock = getMetaForBlock;

exports.getChallengesForLang = function getChallengesForLang(lang) {
  let curriculum = {};
  const validate = challengeSchemaValidator(lang);
  return new Promise(resolve => {
    let running = 1;
    function done() {
      if (--running === 0) {
        resolve(curriculum);
      }
    }
    readDirP({ root: getChallengesDirForLang(lang) })
      .on('data', file => {
        running++;
        buildCurriculum(file, curriculum, validate).then(done);
      })
      .on('end', done);
  });
};

async function buildCurriculum(file, curriculum, validate) {
  const { name, depth, path: filePath, fullPath, stat } = file;
  if (depth === 1 && stat.isDirectory()) {
    // extract the superBlock info
    const { order, name: superBlock } = superBlockInfo(name);
    curriculum[superBlock] = { superBlock, order, blocks: {} };
    return;
  }
  if (depth === 2 && stat.isDirectory()) {
    const blockName = getBlockNameFromPath(filePath);
    const metaPath = path.resolve(
      __dirname,
      `./challenges/_meta/${blockName}/meta.json`
    );
    const blockMeta = require(metaPath);
    const { name: superBlock } = superBlockInfoFromPath(filePath);
    const blockInfo = { meta: blockMeta, challenges: [] };
    curriculum[superBlock].blocks[name] = blockInfo;
    return;
  }
  if (name === 'meta.json' || name === '.DS_Store') {
    return;
  }

  const block = getBlockNameFromPath(filePath);
  const { name: superBlock } = superBlockInfoFromPath(filePath);
  let challengeBlock;
  try {
    challengeBlock = curriculum[superBlock].blocks[block];
  } catch (e) {
    console.log(superBlock, block);
    // eslint-disable-next-line no-process-exit
    process.exit(0);
  }
  const { meta } = challengeBlock;

  const challenge = await createChallenge(fullPath, meta);

  const result = validate(challenge);
  if (result.error) {
    console.log(result.value);
    throw new Error(result.error);
  }
  challengeBlock.challenges = [...challengeBlock.challenges, challenge];
}

async function createChallenge(fullPath, maybeMeta) {
  let meta;
  if (maybeMeta) {
    meta = maybeMeta;
  } else {
    const metaPath = path.resolve(
      metaDir,
      `./${getBlockNameFromFullPath(fullPath)}/meta.json`
    );
    meta = require(metaPath);
  }
  const { name: superBlock } = superBlockInfoFromFullPath(fullPath);
  const challenge = await parseMarkdown(fullPath);
  const challengeOrder = findIndex(
    meta.challengeOrder,
    ([id]) => id === challenge.id
  );
  const {
    name: blockName,
    order,
    superOrder,
    isPrivate,
    required = [],
    template,
    time
  } = meta;
  challenge.block = blockName;
  challenge.dashedName = dasherize(challenge.title);
  challenge.order = order;
  challenge.superOrder = superOrder;
  challenge.superBlock = superBlock;
  challenge.challengeOrder = challengeOrder;
  challenge.isPrivate = challenge.isPrivate || isPrivate;
  challenge.required = required.concat(challenge.required || []);
  challenge.template = template;
  challenge.time = time;

  return challenge;
}

exports.createChallenge = createChallenge;

function superBlockInfoFromPath(filePath) {
  const [maybeSuper] = filePath.split(path.sep);
  return superBlockInfo(maybeSuper);
}

function superBlockInfoFromFullPath(fullFilePath) {
  const [, , maybeSuper] = fullFilePath.split(path.sep).reverse();
  return superBlockInfo(maybeSuper);
}

function superBlockInfo(fileName) {
  const [maybeOrder, ...superBlock] = fileName.split('-');
  let order = parseInt(maybeOrder, 10);
  if (isNaN(order)) {
    return { order: 0, name: fileName };
  } else {
    return {
      order: order,
      name: superBlock.join('-')
    };
  }
}

function getBlockNameFromPath(filePath) {
  const [, block] = filePath.split(path.sep);
  return block;
}

function getBlockNameFromFullPath(fullFilePath) {
  const [, block] = fullFilePath.split(path.sep).reverse();
  return block;
}
