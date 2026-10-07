'use strict';
const { stringify } = require('postcss-value-parser');

/**
 * @param {string[]} list
 * @return {string[]}
 */
function uniqueFontFamilies(list) {
  return list.filter((item, i) => {
    if (item.toLowerCase() === 'monospace') {
      return true;
    }
    return i === list.indexOf(item);
  });
}

const globalKeywords = ['inherit', 'initial', 'unset'];
const genericFontFamilykeywords = new Set([
  'sans-serif',
  'serif',
  'fantasy',
  'cursive',
  'monospace',
  'system-ui',
]);

/**
 * @param {string} value
 * @param {number} length
 * @return {string[]}
 */
function makeArray(value, length) {
  let array = [];
  while (length--) {
    array[length] = value;
  }
  return array;
}

// eslint-disable-next-line no-useless-escape
const regexSimpleEscapeCharacters = /[ !"#$%&'()*+,.\/;<=>?@\[\\\]^`{|}~]/;

/**
 * @param {string} string
 * @param {boolean} escapeForString
 * @return {string}
 */
function escape(string, escapeForString) {
  let counter = 0;
  let character;
  let charCode;
  let value;
  let output = '';

  while (counter < string.length) {
    character = string.charAt(counter++);
    charCode = character.charCodeAt(0);

    // \r is already tokenized away at this point
    // `:` can be escaped as `\:`, but that fails in IE < 8
    if (!escapeForString && /[\t\n\v\f:]/.test(character)) {
      value = '\\' + charCode.toString(16) + ' ';
    } else if (
      !escapeForString &&
      regexSimpleEscapeCharacters.test(character)
    ) {
      value = '\\' + character;
    } else {
      value = character;
    }

    output += value;
  }

  if (!escapeForString) {
    if (/^-[-\d]/.test(output)) {
      output = '\\-' + output.slice(1);
    }

    const firstChar = string.charAt(0);

    if (/\d/.test(firstChar)) {
      output = '\\3' + firstChar + ' ' + output.slice(1);
    }
  }

  return output;
}

const regexKeyword = new RegExp(
  [...genericFontFamilykeywords].concat(globalKeywords).join('|'),
  'i'
);
const regexInvalidIdentifier = /^(-?\d|--)/;
const regexSpaceAtStart = /^\x20/;
const regexWhitespace = /[\t\n\f\r\x20]/g;
const regexIdentifierCharacter = /^[a-zA-Z\d\xa0-\uffff_-]+$/;
const regexConsecutiveSpaces = /(\\(?:[a-fA-F0-9]{1,6}\x20|\x20))?(\x20{2,})/g;
const regexTrailingEscape = /\\[a-fA-F0-9]{0,6}\x20$/;
const regexTrailingSpace = /\x20$/;

/**
 * @param {string} string
 * @return {string}
 */
function escapeIdentifierSequence(string) {
  let identifiers = string.split(regexWhitespace);
  let index = 0;
  /** @type {string[] | string} */
  let result = [];
  let escapeResult;

  while (index < identifiers.length) {
    let subString = identifiers[index++];

    if (subString === '') {
      result.push(subString);
      continue;
    }

    escapeResult = escape(subString, false);

    if (regexIdentifierCharacter.test(subString)) {
      // the font family name part consists of allowed characters exclusively
      if (regexInvalidIdentifier.test(subString)) {
        // the font family name part starts with two hyphens, a digit, or a
        // hyphen followed by a digit
        if (index === 1) {
          // if this is the first item
          result.push(escapeResult);
        } else {
          // if it’s not the first item, we can simply escape the space
          // between the two identifiers to merge them into a single
          // identifier rather than escaping the start characters of the
          // second identifier
          result[index - 2] += '\\';
          result.push(escape(subString, true));
        }
      } else {
        // the font family name part doesn’t start with two hyphens, a digit,
        // or a hyphen followed by a digit
        result.push(escapeResult);
      }
    } else {
      // the font family name part contains invalid identifier characters
      result.push(escapeResult);
    }
  }

  result = result.join(' ').replace(regexConsecutiveSpaces, ($0, $1, $2) => {
    const spaceCount = $2.length;
    const escapesNeeded = Math.floor(spaceCount / 2);
    const array = makeArray('\\ ', escapesNeeded);

    if (spaceCount % 2) {
      array[escapesNeeded - 1] += '\\ ';
    }

    return ($1 || '') + ' ' + array.join(' ');
  });

  // Escape trailing spaces unless they’re already part of an escape
  if (regexTrailingSpace.test(result) && !regexTrailingEscape.test(result)) {
    result = result.replace(regexTrailingSpace, '\\ ');
  }

  if (regexSpaceAtStart.test(result)) {
    result = '\\ ' + result.slice(1);
  }

  return result;
}
/**
 * @param {import('postcss-value-parser').Node[]} nodes
 * @param {import('../index').Options} opts
 * @return {import('postcss-value-parser').WordNode[]}
 */
module.exports = function (nodes, opts) {
  /** @type {import('postcss-value-parser').Node[]} */
  const family = [];
  /** @type {import('postcss-value-parser').WordNode | null} */
  let last = null;
  let i, max;

  nodes.forEach((node, index, arr) => {
    if (node.type === 'string' || node.type === 'function') {
      family.push(node);
    } else if (node.type === 'word') {
      if (!last) {
        last = /** @type {import('postcss-value-parser').WordNode} */ ({
          type: 'word',
          value: '',
        });
        family.push(last);
      }

      last.value += node.value;
    } else if (node.type === 'space') {
      if (last && index !== arr.length - 1) {
        last.value += ' ';
      }
    } else {
      last = null;
    }
  });

  let normalizedFamilies = family.map((node) => {
    if (node.type === 'string') {
      const isKeyword = regexKeyword.test(node.value);

      if (
        !opts.removeQuotes ||
        isKeyword ||
        /[0-9]/.test(node.value.slice(0, 1))
      ) {
        return stringify(node);
      }

      let escaped = escapeIdentifierSequence(node.value);

      if (escaped.length < node.value.length + 2) {
        return escaped;
      }
    }

    return stringify(node);
  });

  if (opts.removeAfterKeyword) {
    for (i = 0, max = normalizedFamilies.length; i < max; i += 1) {
      if (genericFontFamilykeywords.has(normalizedFamilies[i].toLowerCase())) {
        normalizedFamilies = normalizedFamilies.slice(0, i + 1);
        break;
      }
    }
  }

  if (opts.removeDuplicates) {
    normalizedFamilies = uniqueFontFamilies(normalizedFamilies);
  }

  return [
    /** @type {import('postcss-value-parser').WordNode} */ ({
      type: 'word',
      value: normalizedFamilies.join(),
    }),
  ];
};
