import _ from 'lodash';

export const arrToString = arr =>
  Array.isArray(arr) ? arr.join('\n') : _.toString(arr);

export function dashify(str) {
  return ('' + str)
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-z0-9\-\.]/gi, '')
    .replace(/\:/g, '');
}

export function nameify(str) {
  return ('' + str)
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .replace(/\:/g, '');
}

export function unDashify(name) {
  return ('' + name)
    // replace dash with space
    .replace(/\-/g, ' ')
    // strip nonalphanumarics chars except whitespace
    .replace(/[^a-zA-Z\d\s]/g, '')
    .trim();
}
