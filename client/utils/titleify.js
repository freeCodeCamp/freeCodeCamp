const { preFormatted, stopWords } = require('./formatting');

const prototypeRE = /prototype/i;
const prototypesRE = /prototypes/i;

const removeProto = x => x !== 'prototype';

function titleCase(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function prototyper(str) {
  const formatted = str
    .replace(/javascript/i, '')
    .split('-')
    .map(str => {
      if (prototypeRE.test(str)) {
        if (str.length > 9) {
          return prototyper(
            str
              .trim()
              .split('prototype')
              .join('-prototype-')
          );
        }
        return str;
      }
      return titleify(str);
    })
    .join(' ')
    .split(' ');
  const noProto = formatted.filter(removeProto).filter(x => !!x);
  if (noProto.length === 2) {
    const [first, second] = noProto;
    const secondLC = second.toLowerCase();
    const finalSecond = preFormatted[secondLC]
      ? preFormatted[secondLC]
      : secondLC;
    return `${titleify(first)}.prototype.${finalSecond}`;
  }
  if (noProto.length === 1) {
    return prototyper(
      noProto[0]
        .toLowerCase()
        .split('.')
        .join('-')
    );
  }
  return titleify(str, true);
}

function titleify(str, triedPrototyper) {
  if (str.match(prototypeRE) && !triedPrototyper && !prototypesRE.test(str)) {
    return prototyper(str);
  }
  return str
    .toLowerCase()
    .split('-')
    .map((word, i) => {
      if (!word) {
        return '';
      }
      if (stopWords.some(x => x === word) && i !== 0) {
        return word;
      }
      return preFormatted[word] ? preFormatted[word] : titleCase(word);
    })
    .join(' ');
}

module.exports = titleify;
