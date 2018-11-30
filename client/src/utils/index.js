import { findIndex } from 'lodash';

// These regex are not for validation, it is purely to see
// if we are looking at something like what we want to validate
// before we try to validate
export const maybeEmailRE = /.*@.*\.\w\w/;
export const maybeUrlRE = /https?:\/\/.*\..*/;
export const hasProtocolRE = /^http/;

export const getShortIdFromSlug = (slug = '') => {
  const slugToArray = [...slug];
  const endOfUseableSlug = findIndex(
    slugToArray,
    char => char === '?' || char === '#'
  );
  let operableSlug = slug.slice(0);
  if (endOfUseableSlug !== -1) {
    operableSlug = slug.slice(0, endOfUseableSlug);
  }
  const [, maybeShortId = ''] = operableSlug.split('--');
  return maybeShortId.replace(/\/*$/, '');
};

export function commaNumber(num) {
  if (typeof num !== 'number') {
    console.warn(
      'Expected a Number to be passed to `commaNumber`, instead received %s',
      typeof num
    );
    return '';
  }
  const stringNum = String(num).replace(/^-/, '');
  const isNegative = num < 0;
  const commaSpearated = stringNum
    .split('')
    .reverse()
    .reduce((string, current, index, thisArray) => {
      const withComma =
        string.replace(/,/g, '').length % 3 === 0 &&
        index !== 0 &&
        index !== thisArray.length;
      return `${withComma ? `${current},` : current}${string}`;
    }, '');
  return `${isNegative ? '-' : ''}${commaSpearated}`;
}
