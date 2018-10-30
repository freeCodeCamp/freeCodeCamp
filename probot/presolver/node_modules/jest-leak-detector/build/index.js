/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
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

var _prettyFormat;

function _load_prettyFormat() {
  return _prettyFormat = _interopRequireDefault(require('pretty-format'));
}

var _v;

function _load_v() {
  return _v = _interopRequireDefault(require('v8'));
}

var _vm;

function _load_vm() {
  return _vm = _interopRequireDefault(require('vm'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PRIMITIVE_TYPES = new Set(['undefined', 'boolean', 'number', 'string', 'symbol']);

exports.default = class {

  constructor(value) {
    if (this._isPrimitive(value)) {
      throw new TypeError(['Primitives cannot leak memory.', 'You passed a ' + typeof value + ': <' + (0, (_prettyFormat || _load_prettyFormat()).default)(value) + '>'].join(' '));
    }

    let weak;

    try {
      // eslint-disable-next-line import/no-extraneous-dependencies
      weak = require('weak');
    } catch (err) {
      if (!err || err.code !== 'MODULE_NOT_FOUND') {
        throw err;
      }

      throw new Error('The leaking detection mechanism requires the "weak" package to be installed and work. ' + 'Please install it as a dependency on your main project');
    }

    weak(value, () => this._isReferenceBeingHeld = false);
    this._isReferenceBeingHeld = true;

    // Ensure value is not leaked by the closure created by the "weak" callback.
    value = null;
  }

  isLeaking() {
    this._runGarbageCollector();

    return this._isReferenceBeingHeld;
  }

  _runGarbageCollector() {
    const isGarbageCollectorHidden = !global.gc;

    // GC is usually hidden, so we have to expose it before running.
    (_v || _load_v()).default.setFlagsFromString('--expose-gc');
    (_vm || _load_vm()).default.runInNewContext('gc')();

    // The GC was not initially exposed, so let's hide it again.
    if (isGarbageCollectorHidden) {
      (_v || _load_v()).default.setFlagsFromString('--no-expose-gc');
    }
  }

  _isPrimitive(value) {
    return value === null || PRIMITIVE_TYPES.has(typeof value);
  }
};