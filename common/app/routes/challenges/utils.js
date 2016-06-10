import { compose } from 'redux';
import { bonfire, html, js } from '../../utils/challengeTypes';

export function encodeScriptTags(value) {
  return value
    .replace(/<script>/gi, 'fccss')
    .replace(/<\/script>/gi, 'fcces');
}

export function decodeSafeTags(value) {
  return value
    .replace(/fccss/gi, '<script>')
    .replace(/fcces/gi, '</script>');
}

export function encodeFormAction(value) {
  return value.replace(
    /<form[^>]*>/,
    val => val.replace(/action(\s*?)=/, 'fccfaa$1=')
  );
}

export function decodeFccfaaAttr(value) {
  return value.replace(
    /<form[^>]*>/,
    val => val.replace(/fccfaa(\s*?)=/, 'action$1=')
  );
}

export function arrayToString(seedData = ['']) {
  seedData = Array.isArray(seedData) ? seedData : [seedData];
  return seedData.reduce((seed, line) => '' + seed + line + '\n', '\n');
}

export function buildSeed({ challengeSeed = [] } = {}) {
  return compose(
    decodeSafeTags,
    arrayToString
  )(challengeSeed);
}

const pathsMap = {
  [html]: 'html',
  [js]: 'js',
  [bonfire]: 'js'
};

export function getPreFile({ challengeType }) {
  return {
    name: 'index',
    ext: pathsMap[challengeType] || 'html',
    key: getFileKey({ challengeType })
  };
}

export function getFileKey({ challengeType }) {
  return 'index' + (pathsMap[challengeType] || 'html');
}

export function createTests({ tests = [] }) {
  return tests
    .map(test => ({
      text: ('' + test).split('message: ').pop().replace(/\'\);/g, ''),
      testString: test
    }));
}

export function loggerToStr(args) {
  args = Array.isArray(args) ? args : [args];
  return args
    .map(arg => typeof arg === 'undefined' ? 'undefined' : arg)
    .map(arg => {
      if (typeof arg !== 'string') {
        return JSON.stringify(arg);
      }
      return arg;
    })
    .reduce((str, arg) => str + arg + '\n', '');
}

export function getFirstChallenge(
  { superBlock, block, challenge },
  result
) {
  return challenge[
    block[
      superBlock[
        result[0]
      ].blocks[0]
    ].challenges[0]
  ];
}

export function getNextChallenge(current, entites) {
  const { challenge: challengeMap, block: blockMap } = entites;
  // find current challenge
  // find current block
  // find next challenge in block
  const currentChallenge = challengeMap[current];
  if (!currentChallenge) {
    return null;
  }
  const block = blockMap[currentChallenge.block];
  const index = block.challenges.indexOf(currentChallenge.dashedName);
  return challengeMap[block.challenges[index + 1]];
}

export function getFirstChallengeOfNextBlock(current, entites) {
  const {
    challenge: challengeMap,
    block: blockMap,
    superBlock: SuperBlockMap
  } = entites;
  const currentChallenge = challengeMap[current];
  if (!currentChallenge) {
    return null;
  }
  const block = blockMap[currentChallenge.block];
  if (!block) {
    return null;
  }
  const superBlock = SuperBlockMap[block.superBlock];
  const index = superBlock.blocks.indexOf(block.dashedName);
  const newBlock = superBlock.blocks[ index + 1 ];
  if (!newBlock) {
    return null;
  }
  return challengeMap[newBlock.challenges[0]];
}

export function getFirstChallengeOfNextSuperBlock(
  current,
  entites,
  superBlocks
) {
  const {
    challenge: challengeMap,
    block: blockMap,
    superBlock: SuperBlockMap
  } = entites;
  const currentChallenge = challengeMap[current];
  if (!currentChallenge) {
    return null;
  }
  const block = blockMap[currentChallenge.block];
  if (!block) {
    return null;
  }
  const superBlock = SuperBlockMap[block.superBlock];
  const index = superBlocks.indexOf(superBlock.dashedName);
  const newSuperBlock = SuperBlockMap[superBlocks[ index + 1]];
  if (!newSuperBlock) {
    return null;
  }
  const newBlock = blockMap[newSuperBlock.blocks[0]];
  return challengeMap[newBlock.challenges[0]];
}

export function getCurrentBlockName(current, entities) {
  const { challenge: challengeMap } = entities;
  const challenge = challengeMap[current];
  return challenge.block;
}

export function getCurrentSuperBlockName(current, entities) {
  const { challenge: challengeMap, block: blockMap } = entities;
  const challenge = challengeMap[current];
  const block = blockMap[challenge.block];
  return block.superBlock;
}
