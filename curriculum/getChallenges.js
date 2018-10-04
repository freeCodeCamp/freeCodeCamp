const path = require('path');
const { findIndex } = require('lodash');
const readDirP = require('readdirp-walk');

const { parseMarkdown } = require('../tools/challenge-md-parser');

exports.getChallengesForLang = function getChallengesForLang(lang) {
  let curriculum = {};
  return new Promise(resolve =>
    readDirP({ root: path.resolve(__dirname, `./challenges/${lang}`) })
      .on('data', file => buildCurriculum(file, curriculum))
      .on('end', () => resolve(curriculum))
  );
};

async function buildCurriculum(file, curriculum) {
  const { name, depth, path, fullPath, stat } = file;
  if (depth === 1 && stat.isDirectory()) {
    // extract the superBlock info
    const { order, name: superBlock } = superBlockInfo(name);
    curriculum[superBlock] = { superBlock, order, blocks: {} };
    return;
  }
  if (depth === 2 && stat.isDirectory()) {
    const blockMeta = require(`${fullPath}/meta.json`);
    const { name: superBlock } = superBlockInfoFromPath(path);
    const blockInfo = { meta: blockMeta, challenges: [] };
    curriculum[superBlock].blocks[name] = blockInfo;
    return;
  }
  if (name === 'meta.json') {
    return;
  }
  const block = getBlockNameFromPath(path);
  const { name: superBlock } = superBlockInfoFromPath(path);
  const challenge = await parseMarkdown(fullPath);
  const challengeBlock = curriculum[superBlock].blocks[block];
  const { meta } = challengeBlock;
  const challengeOrder = findIndex(
    meta.challengeOrder,
    ([id]) => id === challenge.id
  );
  const { name: blockName, order, superOrder } = meta;
  challenge.block = blockName;
  challenge.order = order;
  challenge.superOrder = superOrder;
  challenge.superBlock = superBlock;
  challenge.challengeOrder = challengeOrder;
  challengeBlock.challenges = [...challengeBlock.challenges, challenge];
}

function superBlockInfoFromPath(filePath) {
  const [maybeSuper] = filePath.split('/');
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
  const [, block] = filePath.split('/');
  return block;
}
