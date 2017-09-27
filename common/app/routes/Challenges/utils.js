import flow from 'lodash/flow';
import * as challengeTypes from '../../utils/challengeTypes';
import { decodeScriptTags } from '../../../utils/encode-decode';

// determine the component to view for each challenge
export const viewTypes = {
  [ challengeTypes.html ]: 'classic',
  [ challengeTypes.js ]: 'classic',
  [ challengeTypes.bonfire ]: 'classic',
  [ challengeTypes.frontEndProject ]: 'project',
  [ challengeTypes.backEndProject ]: 'project',
  // might not be used anymore
  [ challengeTypes.simpleProject ]: 'project',
  // formally hikes
  [ challengeTypes.video ]: 'video',
  [ challengeTypes.step ]: 'step',
  [ challengeTypes.quiz ]: 'quiz',
  backend: 'backend'
};

// determine the type of submit function to use for the challenge on completion
export const submitTypes = {
  [ challengeTypes.html ]: 'tests',
  [ challengeTypes.js ]: 'tests',
  [ challengeTypes.bonfire ]: 'tests',
  // requires just a button press
  [ challengeTypes.simpleProject ]: 'project.simple',
  // requires just a single url
  // like codepen.com/my-project
  [ challengeTypes.frontEndProject ]: 'project.frontEnd',
  // requires two urls
  // a hosted URL where the app is running live
  // project code url like GitHub
  [ challengeTypes.backEndProject ]: 'project.backEnd',
  // formally hikes
  [ challengeTypes.video ]: 'video',
  [ challengeTypes.step ]: 'step',
  [ challengeTypes.quiz ]: 'quiz',
  backend: 'backend'
};

// determines if a line in a challenge description
// has html that should be rendered
export const descriptionRegex = /\<blockquote|\<ol|\<h4|\<table/;

export function arrayToString(seedData = ['']) {
  seedData = Array.isArray(seedData) ? seedData : [seedData];
  return seedData.reduce((seed, line) => '' + seed + line + '\n', '\n');
}

export function buildSeed({ challengeSeed = [] } = {}) {
  return flow(
    arrayToString,
    decodeScriptTags
  )(challengeSeed);
}

const pathsMap = {
  [ challengeTypes.html ]: 'html',
  [ challengeTypes.js ]: 'js',
  [ challengeTypes.bonfire ]: 'js'
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
    .map(test => {
      if (typeof test === 'string') {
        return {
          text: ('' + test).split('message: ').pop().replace(/\'\);/g, ''),
          testString: test
        };
      }
      return test;
    });
}

function logReplacer(value) {
  if (Array.isArray(value)) {
    const replaced = value.map(logReplacer);
    return '[' + replaced.join(', ') + ']';
  }
  if (typeof value === 'string' && !(/^\/\//).test(value)) {
    return '"' + value + '"';
  }
  if (typeof value === 'number' && isNaN(value)) {
    return value.toString();
  }
  if (typeof value === 'undefined') {
    return 'undefined';
  }
  if (value === null) {
    return 'null';
  }
  if (typeof value === 'function') {
    return value.name;
  }
  if (typeof value === 'object') {
    return JSON.stringify(value, null, 2);
  }

  return value;
}

export function loggerToStr(args) {
  args = Array.isArray(args) ? args : [args];
  return args
    .map(logReplacer)
    .reduce((str, arg) => str + arg + '\n', '');
}

export function getNextChallenge(
  current,
  entities,
  {
    isDev = false,
    skip = 0
  } = {}
) {
  const { challenge: challengeMap, block: blockMap } = entities;
  // find current challenge
  // find current block
  // find next challenge in block
  const currentChallenge = challengeMap[current];
  if (!currentChallenge) {
    return null;
  }
  const block = blockMap[currentChallenge.block];
  const index = block.challenges.indexOf(currentChallenge.dashedName);
  // use next challenge name to find challenge in challenge map
  const nextChallenge = challengeMap[
    // grab next challenge name in current block
    // skip is used to skip isComingSoon challenges
    block.challenges[ index + 1 + skip ]
  ];
  if (
    !isDev &&
    nextChallenge &&
    (nextChallenge.isComingSoon || nextChallenge.isBeta)
  ) {
    // if we find a next challenge and it is a coming soon
    // recur with plus one to skip this challenge
    return getNextChallenge(current, entities, { isDev, skip: skip + 1 });
  }
  return nextChallenge;
}

export function getFirstChallengeOfNextBlock(
  current,
  entities,
  {
    isDev = false,
    skip = 0
  } = {}
) {
  const {
    challenge: challengeMap,
    block: blockMap,
    superBlock: SuperBlockMap
  } = entities;
  const currentChallenge = challengeMap[current];
  if (!currentChallenge) {
    return null;
  }
  const block = blockMap[currentChallenge.block];
  if (!block) {
    return null;
  }
  const superBlock = SuperBlockMap[block.superBlock];
  if (!superBlock) {
    return null;
  }
  // find index of current block
  const index = superBlock.blocks.indexOf(block.dashedName);

  // find next block name
  // and pull block object from block map
  const newBlock = blockMap[
    superBlock.blocks[ index + 1 + skip ]
  ];
  if (!newBlock) {
    return null;
  }
  // grab first challenge from next block
  const nextChallenge = challengeMap[newBlock.challenges[0]];
  if (isDev || !nextChallenge || !nextChallenge.isComingSoon) {
    return nextChallenge;
  }
  // if first challenge is coming soon, find next challenge here
  const nextChallenge2 = getNextChallenge(
    nextChallenge.dashedName,
    entities,
    { isDev }
  );
  if (nextChallenge2) {
    return nextChallenge2;
  }
  // whole block is coming soon
  // skip this block
  return getFirstChallengeOfNextBlock(
    current,
    entities,
    { isDev, skip: skip + 1 }
  );
}

export function getFirstChallengeOfNextSuperBlock(
  current,
  entities,
  superBlocks,
  {
    isDev = false,
    skip = 0
  } = {}
) {
  const {
    challenge: challengeMap,
    block: blockMap,
    superBlock: SuperBlockMap
  } = entities;
  const currentChallenge = challengeMap[current];
  if (!currentChallenge) {
    return null;
  }
  const block = blockMap[currentChallenge.block];
  if (!block) {
    return null;
  }
  const superBlock = SuperBlockMap[block.superBlock];
  if (!superBlock) {
    return null;
  }
  const index = superBlocks.indexOf(superBlock.dashedName);
  const newSuperBlock = SuperBlockMap[superBlocks[ index + 1 + skip]];
  if (!newSuperBlock) {
    return null;
  }
  const newBlock = blockMap[
    newSuperBlock.blocks[ 0 ]
  ];
  if (!newBlock) {
    return null;
  }
  const nextChallenge = challengeMap[newBlock.challenges[0]];
  if (isDev || !nextChallenge || !nextChallenge.isComingSoon) {
    return nextChallenge;
  }
  // coming soon challenge, grab next
  // non coming soon challenge in same block instead
  const nextChallengeInBlock = getNextChallenge(
    nextChallenge.dashedName,
    entities,
    { isDev }
  );
  if (nextChallengeInBlock) {
    return nextChallengeInBlock;
  }
  // whole block is coming soon
  // grab first challenge in next block in newSuperBlock instead
  const challengeInNextBlock = getFirstChallengeOfNextBlock(
    nextChallenge.dashedName,
    entities,
    { isDev }
  );

  if (challengeInNextBlock) {
    return challengeInNextBlock;
  }
  // whole super block is coming soon
  // skip this super block
  return getFirstChallengeOfNextSuperBlock(
    current,
    entities,
    superBlocks,
    { isDev, skip: skip + 1 }
  );
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
