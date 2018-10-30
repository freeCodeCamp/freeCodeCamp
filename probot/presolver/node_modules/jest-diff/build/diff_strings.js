'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = diffStrings;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _diff = require('diff');

var _constants = require('./constants.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DIFF_CONTEXT_DEFAULT = 5; // removed | added | equal

// Given diff digit, return array which consists of:
// if compared line is removed or added: corresponding original line
// if compared line is equal: original received and expected lines
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

// Given chunk, return diff character.
const getDiffChar = chunk => chunk.removed ? '-' : chunk.added ? '+' : ' ';

// Given diff character in line of hunk or computed from properties of chunk.
const getDiffDigit = char => char === '-' ? -1 : char === '+' ? 1 : 0;

// Color for text of line.
const getColor = (digit, onlyIndentationChanged) => {
  if (digit === -1) {
    return _chalk2.default.green; // removed
  }
  if (digit === 1) {
    return _chalk2.default.red; // added
  }
  return onlyIndentationChanged ? _chalk2.default.cyan : _chalk2.default.dim;
};

// Do NOT color leading or trailing spaces if original lines are equal:

// Background color for leading or trailing spaces.
const getBgColor = (digit, onlyIndentationChanged) => digit === 0 && !onlyIndentationChanged ? _chalk2.default.bgYellow : _chalk2.default.inverse;

// ONLY trailing if expected value is snapshot or multiline string.
const highlightTrailingSpaces = (line, bgColor) => line.replace(/\s+$/, bgColor('$&'));

// BOTH leading AND trailing if expected value is data structure.
const highlightLeadingTrailingSpaces = (line, bgColor
// If line consists of ALL spaces: highlight all of them.
) => highlightTrailingSpaces(line, bgColor).replace(
// If line has an ODD length of leading spaces: highlight only the LAST.
/^(\s\s)*(\s)(?=[^\s])/, '$1' + bgColor('$2'));

const getAnnotation = options => _chalk2.default.green('- ' + (options && options.aAnnotation || 'Expected')) + '\n' + _chalk2.default.red('+ ' + (options && options.bAnnotation || 'Received')) + '\n\n';

// Given string, return array of its lines.
const splitIntoLines = string => {
  const lines = string.split('\n');

  if (lines.length !== 0 && lines[lines.length - 1] === '') {
    lines.pop();
  }

  return lines;
};

// Given diff character and compared line, return original line with colors.
const formatLine = (char, lineCompared, getOriginal) => {
  const digit = getDiffDigit(char);

  if (getOriginal) {
    // Compared without indentation if expected value is data structure.
    const lineArray = getOriginal(digit);
    const lineOriginal = lineArray[0];
    const onlyIndentationChanged = digit === 0 && lineOriginal.length !== lineArray[1].length;

    return getColor(digit, onlyIndentationChanged)(char + ' ' +
    // Prepend indentation spaces from original to compared line.
    lineOriginal.slice(0, lineOriginal.length - lineCompared.length) + highlightLeadingTrailingSpaces(lineCompared, getBgColor(digit, onlyIndentationChanged)));
  }

  // Format compared line when expected is snapshot or multiline string.
  return getColor(digit)(char + ' ' + highlightTrailingSpaces(lineCompared, getBgColor(digit)));
};

// Given original lines, return callback function
// which given diff digit, returns array.
const getterForChunks = original => {
  const linesExpected = splitIntoLines(original.a);
  const linesReceived = splitIntoLines(original.b);

  let iExpected = 0;
  let iReceived = 0;

  return digit => {
    if (digit === -1) {
      return [linesExpected[iExpected++]];
    }
    if (digit === 1) {
      return [linesReceived[iReceived++]];
    }
    // Because compared line is equal: original received and expected lines.
    return [linesReceived[iReceived++], linesExpected[iExpected++]];
  };
};

// jest --expand
const formatChunks = (a, b, original) => {
  const chunks = (0, _diff.diffLines)(a, b);
  if (chunks.every(chunk => !chunk.removed && !chunk.added)) {
    return null;
  }

  const getOriginal = original && getterForChunks(original);
  return chunks.reduce((lines, chunk) => {
    const char = getDiffChar(chunk);

    splitIntoLines(chunk.value).forEach(line => {
      lines.push(formatLine(char, line, getOriginal));
    });

    return lines;
  }, []).join('\n');
};

// Only show patch marks ("@@ ... @@") if the diff is big.
// To determine this, we need to compare either the original string (a) to
// `hunk.oldLines` or a new string to `hunk.newLines`.
// If the `oldLinesCount` is greater than `hunk.oldLines`
// we can be sure that at least 1 line has been "hidden".
const shouldShowPatchMarks = (hunk, oldLinesCount) => oldLinesCount > hunk.oldLines;

const createPatchMark = hunk => {
  const markOld = `-${hunk.oldStart},${hunk.oldLines}`;
  const markNew = `+${hunk.newStart},${hunk.newLines}`;
  return _chalk2.default.yellow(`@@ ${markOld} ${markNew} @@`);
};

// Given original lines, return callback function which given indexes for hunk,
// returns another callback function which given diff digit, returns array.
const getterForHunks = original => {
  const linesExpected = splitIntoLines(original.a);
  const linesReceived = splitIntoLines(original.b);

  return (iExpected, iReceived) => digit => {
    if (digit === -1) {
      return [linesExpected[iExpected++]];
    }
    if (digit === 1) {
      return [linesReceived[iReceived++]];
    }
    // Because compared line is equal: original received and expected lines.
    return [linesReceived[iReceived++], linesExpected[iExpected++]];
  };
};

// jest --no-expand
const formatHunks = (a, b, contextLines, original) => {
  const options = {
    context: typeof contextLines === 'number' && contextLines >= 0 ? contextLines : DIFF_CONTEXT_DEFAULT
  };

  var _structuredPatch = (0, _diff.structuredPatch)('', '', a, b, '', '', options);

  const hunks = _structuredPatch.hunks;

  if (hunks.length === 0) {
    return null;
  }

  const getter = original && getterForHunks(original);
  const oldLinesCount = (a.match(/\n/g) || []).length;
  return hunks.reduce((lines, hunk) => {
    if (shouldShowPatchMarks(hunk, oldLinesCount)) {
      lines.push(createPatchMark(hunk));
    }

    // Hunk properties are one-based but index args are zero-based.
    const getOriginal = getter && getter(hunk.oldStart - 1, hunk.newStart - 1);
    hunk.lines.forEach(line => {
      lines.push(formatLine(line[0], line.slice(1), getOriginal));
    });

    return lines;
  }, []).join('\n');
};

function diffStrings(a, b, options, original) {
  // Because `formatHunks` and `formatChunks` ignore one trailing newline,
  // always append newline to strings:
  a += '\n';
  b += '\n';

  // `diff` uses the Myers LCS diff algorithm which runs in O(n+d^2) time
  // (where "d" is the edit distance) and can get very slow for large edit
  // distances. Mitigate the cost by switching to a lower-resolution diff
  // whenever linebreaks are involved.
  const result = options && options.expand === false ? formatHunks(a, b, options && options.contextLines, original) : formatChunks(a, b, original);

  return result === null ? _constants.NO_DIFF_MESSAGE : getAnnotation(options) + result;
}