'use strict';

const defaultAlphabetIndexMap = [];

function isNumberCode(code) {
  return code >= 48/* '0' */ && code <= 57/* '9' */;
}

function naturalCompare(a, b, opts) {
  if (typeof a !== 'string') {
    throw new TypeError(`The first argument must be a string. Received type '${typeof a}'`);
  }
  if (typeof b !== 'string') {
    throw new TypeError(`The second argument must be a string. Received type '${typeof b}'`);
  }

  const lengthA = a.length;
  const lengthB = b.length;
  let indexA = 0;
  let indexB = 0;
  let alphabetIndexMap = defaultAlphabetIndexMap;
  let firstDifferenceInLeadingZeros = 0;

  if (opts) {
    if (opts.caseInsensitive) {
      a = a.toLowerCase();
      b = b.toLowerCase();
    }

    if (opts.alphabet) {
      alphabetIndexMap = buildAlphabetIndexMap(opts.alphabet);
    }
  }

  while (indexA < lengthA && indexB < lengthB) {
    let charCodeA = a.charCodeAt(indexA);
    let charCodeB = b.charCodeAt(indexB);

    if (isNumberCode(charCodeA)) {
      if (!isNumberCode(charCodeB)) {
        return charCodeA - charCodeB;
      }

      let numStartA = indexA;
      let numStartB = indexB;

      while (charCodeA === 48/* '0' */ && ++numStartA < lengthA) {
        charCodeA = a.charCodeAt(numStartA);
      }
      while (charCodeB === 48/* '0' */ && ++numStartB < lengthB) {
        charCodeB = b.charCodeAt(numStartB);
      }

      if (numStartA !== numStartB && firstDifferenceInLeadingZeros === 0) {
        firstDifferenceInLeadingZeros = numStartA - numStartB;
      }

      let numEndA = numStartA;
      let numEndB = numStartB;

      while (numEndA < lengthA && isNumberCode(a.charCodeAt(numEndA))) {
        ++numEndA;
      }
      while (numEndB < lengthB && isNumberCode(b.charCodeAt(numEndB))) {
        ++numEndB;
      }

      let difference = numEndA - numStartA - numEndB + numStartB; // numA length - numB length
      if (difference !== 0) {
        return difference;
      }

      while (numStartA < numEndA) {
        difference = a.charCodeAt(numStartA++) - b.charCodeAt(numStartB++);
        if (difference !== 0) {
          return difference;
        }
      }

      indexA = numEndA;
      indexB = numEndB;
      continue;
    }

    if (charCodeA !== charCodeB) {
      if (
        charCodeA < alphabetIndexMap.length &&
        charCodeB < alphabetIndexMap.length &&
        alphabetIndexMap[charCodeA] !== -1 &&
        alphabetIndexMap[charCodeB] !== -1
      ) {
        return alphabetIndexMap[charCodeA] - alphabetIndexMap[charCodeB];
      }

      return charCodeA - charCodeB;
    }

    ++indexA;
    ++indexB;
  }

  if (indexA < lengthA) { // `b` is a substring of `a`
    return 1;
  }

  if (indexB < lengthB) { // `a` is a substring of `b`
    return -1;
  }

  return firstDifferenceInLeadingZeros;
}

const alphabetIndexMapCache = {};

function buildAlphabetIndexMap(alphabet) {
  const existingMap = alphabetIndexMapCache[alphabet];
  if (existingMap !== undefined) {
    return existingMap;
  }

  const indexMap = [];
  const maxCharCode = alphabet.split('').reduce((maxCode, char) => {
    return Math.max(maxCode, char.charCodeAt(0));
  }, 0);

  for (let i = 0; i <= maxCharCode; i++) {
    indexMap.push(-1);
  }

  for (let i = 0; i < alphabet.length; i++) {
    indexMap[alphabet.charCodeAt(i)] = i;
  }

  alphabetIndexMapCache[alphabet] = indexMap;

  return indexMap;
}

module.exports = naturalCompare;
