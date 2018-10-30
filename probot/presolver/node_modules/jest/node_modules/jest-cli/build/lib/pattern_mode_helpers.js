/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printRestoredPatternCaret = exports.printPatternCaret = undefined;

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _ansiEscapes;

function _load_ansiEscapes() {
  return _ansiEscapes = _interopRequireDefault(require('ansi-escapes'));
}

var _stringLength;

function _load_stringLength() {
  return _stringLength = _interopRequireDefault(require('string-length'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const printPatternCaret = exports.printPatternCaret = (pattern, pipe) => {
  const inputText = `${(_chalk || _load_chalk()).default.dim(' pattern \u203A')} ${pattern}`;

  pipe.write((_ansiEscapes || _load_ansiEscapes()).default.eraseDown);
  pipe.write(inputText);
  pipe.write((_ansiEscapes || _load_ansiEscapes()).default.cursorSavePosition);
};

const printRestoredPatternCaret = exports.printRestoredPatternCaret = (pattern, currentUsageRows, pipe) => {
  const inputText = `${(_chalk || _load_chalk()).default.dim(' pattern \u203A')} ${pattern}`;

  pipe.write((_ansiEscapes || _load_ansiEscapes()).default.cursorTo((0, (_stringLength || _load_stringLength()).default)(inputText), currentUsageRows - 1));
  pipe.write((_ansiEscapes || _load_ansiEscapes()).default.cursorRestorePosition);
};