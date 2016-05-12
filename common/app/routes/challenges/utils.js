import { compose } from 'redux';
import { HTML, JS } from '../../utils/challengeTypes';

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

export function arrayToNewLineString(seedData = []) {
  seedData = Array.isArray(seedData) ? seedData : [seedData];
  return seedData.reduce((seed, line) => '' + seed + line + '\n', '\n');
}

export function buildSeed({ challengeSeed = [] } = {}) {
  return compose(
    decodeSafeTags,
    arrayToNewLineString
  )(challengeSeed);
}

const pathsMap = {
  [HTML]: 'main.html',
  [JS]: 'main.js'
};

export function getPath({ challengeType }) {
  return pathsMap[challengeType] || 'main';
}

