'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants;

function _load_constants() {
  return _constants = require('../constants');
}

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

class Prompt {

  constructor() {
    this._onResize = this._onResize.bind(this);
  }

  _onResize() {
    this._onChange(this._value);
  }

  enter(onChange, onSuccess, onCancel) {
    this._entering = true;
    this._value = '';
    this._onSuccess = onSuccess;
    this._onCancel = onCancel;
    this._selection = null;
    this._offset = -1;
    this._promptLength = 0;
    this._onChange = () => onChange(this._value, {
      max: 10,
      offset: this._offset
    });

    this._onChange();

    process.stdout.on('resize', this._onResize);
  }

  setPromptLength(length) {
    this._promptLength = length;
  }

  setPromptSelection(selected) {
    this._selection = selected;
  }

  put(key) {
    switch (key) {
      case (_constants || _load_constants()).KEYS.ENTER:
        this._entering = false;
        this._onSuccess(this._selection || this._value);
        this.abort();
        break;
      case (_constants || _load_constants()).KEYS.ESCAPE:
        this._entering = false;
        this._onCancel(this._value);
        this.abort();
        break;
      case (_constants || _load_constants()).KEYS.ARROW_DOWN:
        this._offset = Math.min(this._offset + 1, this._promptLength - 1);
        this._onChange();
        break;
      case (_constants || _load_constants()).KEYS.ARROW_UP:
        this._offset = Math.max(this._offset - 1, -1);
        this._onChange();
        break;
      case (_constants || _load_constants()).KEYS.ARROW_LEFT:
      case (_constants || _load_constants()).KEYS.ARROW_RIGHT:
        break;
      default:
        const char = new Buffer(key, 'hex').toString();

        this._value = key === (_constants || _load_constants()).KEYS.BACKSPACE ? this._value.slice(0, -1) : this._value + char;
        this._offset = -1;
        this._selection = null;
        this._onChange();
        break;
    }
  }

  abort() {
    this._entering = false;
    this._value = '';
    process.stdout.removeListener('resize', this._onResize);
  }

  isEntering() {
    return this._entering;
  }
}
exports.default = Prompt;