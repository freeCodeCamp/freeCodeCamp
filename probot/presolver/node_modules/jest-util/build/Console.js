'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assert;

function _load_assert() {
  return _assert = _interopRequireDefault(require('assert'));
}

var _util;

function _load_util() {
  return _util = require('util');
}

var _console;

function _load_console() {
  return _console = require('console');
}

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _clear_line;

function _load_clear_line() {
  return _clear_line = _interopRequireDefault(require('./clear_line'));
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
/* global stream$Writable */

class CustomConsole extends (_console || _load_console()).Console {

  constructor(stdout, stderr, formatBuffer) {
    super(stdout, stderr);
    this._formatBuffer = formatBuffer || ((type, message) => message);
    this._counters = {};
    this._timers = {};
    this._groupDepth = 0;
  }

  _logToParentConsole(message) {
    super.log(message);
  }

  _log(type, message) {
    (0, (_clear_line || _load_clear_line()).default)(this._stdout);
    this._logToParentConsole(this._formatBuffer(type, '  '.repeat(this._groupDepth) + message));
  }

  assert() {
    try {
      (_assert || _load_assert()).default.apply(undefined, arguments);
    } catch (error) {
      this._log('assert', error.toString());
    }
  }

  count() {
    let label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

    if (!this._counters[label]) {
      this._counters[label] = 0;
    }

    this._log('count', (0, (_util || _load_util()).format)(`${label}: ${++this._counters[label]}`));
  }

  countReset() {
    let label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

    this._counters[label] = 0;
  }

  debug() {
    this._log('debug', (_util || _load_util()).format.apply(undefined, arguments));
  }

  dir() {
    this._log('dir', (_util || _load_util()).format.apply(undefined, arguments));
  }

  dirxml() {
    this._log('dirxml', (_util || _load_util()).format.apply(undefined, arguments));
  }

  error() {
    this._log('error', (_util || _load_util()).format.apply(undefined, arguments));
  }

  group() {
    this._groupDepth++;

    if (arguments.length > 0) {
      this._log('group', (_chalk || _load_chalk()).default.bold((_util || _load_util()).format.apply(undefined, arguments)));
    }
  }

  groupCollapsed() {
    this._groupDepth++;

    if (arguments.length > 0) {
      this._log('groupCollapsed', (_chalk || _load_chalk()).default.bold((_util || _load_util()).format.apply(undefined, arguments)));
    }
  }

  groupEnd() {
    if (this._groupDepth > 0) {
      this._groupDepth--;
    }
  }

  info() {
    this._log('info', (_util || _load_util()).format.apply(undefined, arguments));
  }

  log() {
    this._log('log', (_util || _load_util()).format.apply(undefined, arguments));
  }

  time() {
    let label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

    if (this._timers[label]) {
      return;
    }

    this._timers[label] = new Date();
  }

  timeEnd() {
    let label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

    const startTime = this._timers[label];

    if (startTime) {
      const endTime = new Date();
      const time = (endTime - startTime) / 1000;
      this._log('time', (0, (_util || _load_util()).format)(`${label}: ${time}ms`));
      delete this._timers[label];
    }
  }

  warn() {
    this._log('warn', (_util || _load_util()).format.apply(undefined, arguments));
  }

  getBuffer() {
    return null;
  }
}
exports.default = CustomConsole;