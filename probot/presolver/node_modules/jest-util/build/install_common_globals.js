'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (globalObject, globals) {
  globalObject.process = (0, (_create_process_object || _load_create_process_object()).default)();

  // Keep a reference to "Promise", since "jasmine_light.js" needs it.
  globalObject[globalObject.Symbol.for('jest-native-promise')] = Promise;

  // Forward some APIs.
  DTRACE.forEach(dtrace => {
    globalObject[dtrace] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return global[dtrace].apply(this, args);
    };
  });

  // Forward some others (this breaks the sandbox but for now it's OK).
  globalObject.Buffer = global.Buffer;
  globalObject.setImmediate = global.setImmediate;
  globalObject.clearImmediate = global.clearImmediate;

  return Object.assign(globalObject, (0, (_deep_cyclic_copy || _load_deep_cyclic_copy()).default)(globals));
};

var _create_process_object;

function _load_create_process_object() {
  return _create_process_object = _interopRequireDefault(require('./create_process_object'));
}

var _deep_cyclic_copy;

function _load_deep_cyclic_copy() {
  return _deep_cyclic_copy = _interopRequireDefault(require('./deep_cyclic_copy'));
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

const DTRACE = Object.keys(global).filter(key => key.startsWith('DTRACE'));