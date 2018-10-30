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

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _ansiEscapes;

function _load_ansiEscapes() {
  return _ansiEscapes = _interopRequireDefault(require('ansi-escapes'));
}

var _Prompt;

function _load_Prompt() {
  return _Prompt = _interopRequireDefault(require('./lib/Prompt'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usage = entity => `\n${(_chalk || _load_chalk()).default.bold('Pattern Mode Usage')}\n` + ` ${(_chalk || _load_chalk()).default.dim('\u203A Press')} Esc ${(_chalk || _load_chalk()).default.dim('to exit pattern mode.')}\n` + ` ${(_chalk || _load_chalk()).default.dim('\u203A Press')} Enter ` + `${(_chalk || _load_chalk()).default.dim(`to filter by a ${entity} regex pattern.`)}\n` + `\n`;

const usageRows = usage('').split('\n').length;

class PatternPrompt {

  constructor(pipe, prompt) {
    this._pipe = pipe;
    this._prompt = prompt;
    this._currentUsageRows = usageRows;
  }

  run(onSuccess, onCancel, options) {
    this._pipe.write((_ansiEscapes || _load_ansiEscapes()).default.cursorHide);
    this._pipe.write((_ansiEscapes || _load_ansiEscapes()).default.clearScreen);

    if (options && options.header) {
      this._pipe.write(options.header + '\n');
      this._currentUsageRows = usageRows + options.header.split('\n').length;
    } else {
      this._currentUsageRows = usageRows;
    }

    this._pipe.write(usage(this._entityName));
    this._pipe.write((_ansiEscapes || _load_ansiEscapes()).default.cursorShow);

    this._prompt.enter(this._onChange.bind(this), onSuccess, onCancel);
  }

  _onChange(pattern, options) {
    this._pipe.write((_ansiEscapes || _load_ansiEscapes()).default.eraseLine);
    this._pipe.write((_ansiEscapes || _load_ansiEscapes()).default.cursorLeft);
  }
}
exports.default = PatternPrompt;