import flow from 'lodash/flow';
import { decodeScriptTags } from '../../utils/encode-decode.js';
import * as challengeTypes from './challengeTypes.js';

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
