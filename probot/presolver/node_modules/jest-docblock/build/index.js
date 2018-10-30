'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extract = extract;
exports.strip = strip;
exports.parse = parse;
exports.parseWithComments = parseWithComments;
exports.print = print;

var _detectNewline;

function _load_detectNewline() {
  return _detectNewline = _interopRequireDefault(require('detect-newline'));
}

var _os;

function _load_os() {
  return _os = require('os');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const commentEndRe = /\*\/$/;
const commentStartRe = /^\/\*\*/;
const docblockRe = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/;
const lineCommentRe = /(^|\s+)\/\/([^\r\n]*)/g;
const ltrimNewlineRe = /^(\r?\n)+/;
const multilineRe = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g;
const propertyRe = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g;
const stringStartRe = /(\r?\n|^) *\* ?/g;

function extract(contents) {
  const match = contents.match(docblockRe);
  return match ? match[0].trimLeft() : '';
}

function strip(contents) {
  const match = contents.match(docblockRe);
  return match && match[0] ? contents.substring(match[0].length) : contents;
}

function parse(docblock) {
  return parseWithComments(docblock).pragmas;
}

function parseWithComments(docblock) {
  const line = (0, (_detectNewline || _load_detectNewline()).default)(docblock) || (_os || _load_os()).EOL;

  docblock = docblock.replace(commentStartRe, '').replace(commentEndRe, '').replace(stringStartRe, '$1');

  // Normalize multi-line directives
  let prev = '';
  while (prev !== docblock) {
    prev = docblock;
    docblock = docblock.replace(multilineRe, `${line}$1 $2${line}`);
  }
  docblock = docblock.replace(ltrimNewlineRe, '').trimRight();

  const result = Object.create(null);
  const comments = docblock.replace(propertyRe, '').replace(ltrimNewlineRe, '').trimRight();

  let match;
  while (match = propertyRe.exec(docblock)) {
    // strip linecomments from pragmas
    const nextPragma = match[2].replace(lineCommentRe, '');
    if (typeof result[match[1]] === 'string' || Array.isArray(result[match[1]])) {
      result[match[1]] = [].concat(result[match[1]], nextPragma);
    } else {
      result[match[1]] = nextPragma;
    }
  }
  return { comments, pragmas: result };
}

function print(_ref) {
  var _ref$comments = _ref.comments;
  let comments = _ref$comments === undefined ? '' : _ref$comments;
  var _ref$pragmas = _ref.pragmas;
  let pragmas = _ref$pragmas === undefined ? {} : _ref$pragmas;

  const line = (0, (_detectNewline || _load_detectNewline()).default)(comments) || (_os || _load_os()).EOL;
  const head = '/**';
  const start = ' *';
  const tail = ' */';

  const keys = Object.keys(pragmas);

  const printedObject = keys.map(key => printKeyValues(key, pragmas[key])).reduce((arr, next) => arr.concat(next), []).map(keyValue => start + ' ' + keyValue + line).join('');

  if (!comments) {
    if (keys.length === 0) {
      return '';
    }
    if (keys.length === 1 && !Array.isArray(pragmas[keys[0]])) {
      const value = pragmas[keys[0]];
      return `${head} ${printKeyValues(keys[0], value)[0]}${tail}`;
    }
  }

  const printedComments = comments.split(line).map(textLine => `${start} ${textLine}`).join(line) + line;

  return head + line + (comments ? printedComments : '') + (comments && keys.length ? start + line : '') + printedObject + tail;
}

function printKeyValues(key, valueOrArray) {
  return [].concat(valueOrArray).map(value => `@${key} ${value}`.trim());
}