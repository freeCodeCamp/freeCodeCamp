import { compose } from 'redux';
import { BONFIRE, HTML, JS } from '../../utils/challengeTypes';

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
  [HTML]: 'html',
  [JS]: 'js',
  [BONFIRE]: 'js'
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
      text: test.split('message: ').pop().replace(/\'\);/g, '')
    }));
}
