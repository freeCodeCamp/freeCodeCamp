'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _colorize;

function _load_colorize() {
  return _colorize = _interopRequireDefault(require('./colorize'));
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

const DOTS = '...';
const ENTER = '⏎';

exports.default = (testName, pattern, width) => {
  const inlineTestName = testName.replace(/(\r\n|\n|\r)/gm, ENTER);

  let regexp;

  try {
    regexp = new RegExp(pattern, 'i');
  } catch (e) {
    return (_chalk || _load_chalk()).default.dim(inlineTestName);
  }

  const match = inlineTestName.match(regexp);

  if (!match) {
    return (_chalk || _load_chalk()).default.dim(inlineTestName);
  }

  // $FlowFixMe
  const startPatternIndex = Math.max(match.index, 0);
  const endPatternIndex = startPatternIndex + match[0].length;

  if (inlineTestName.length <= width) {
    return (0, (_colorize || _load_colorize()).default)(inlineTestName, startPatternIndex, endPatternIndex);
  }

  const slicedTestName = inlineTestName.slice(0, width - DOTS.length);

  if (startPatternIndex < slicedTestName.length) {
    if (endPatternIndex > slicedTestName.length) {
      return (0, (_colorize || _load_colorize()).default)(slicedTestName + DOTS, startPatternIndex, slicedTestName.length + DOTS.length);
    } else {
      return (0, (_colorize || _load_colorize()).default)(slicedTestName + DOTS, Math.min(startPatternIndex, slicedTestName.length), endPatternIndex);
    }
  }

  return `${(_chalk || _load_chalk()).default.dim(slicedTestName)}${(_chalk || _load_chalk()).default.reset(DOTS)}`;
};