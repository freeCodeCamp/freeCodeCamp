'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assert;

function _load_assert() {
  return _assert = _interopRequireDefault(require('assert'));
}

var _console;

function _load_console() {
  return _console = require('console');
}

var _util;

function _load_util() {
  return _util = require('util');
}

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _get_callsite;

function _load_get_callsite() {
  return _get_callsite = _interopRequireDefault(require('./get_callsite'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BufferedConsole extends (_console || _load_console()).Console {

  constructor(getSourceMaps) {
    const buffer = [];
    super({
      write: message => BufferedConsole.write(buffer, 'log', message, null, getSourceMaps())
    });
    this._getSourceMaps = getSourceMaps;
    this._buffer = buffer;
    this._counters = {};
    this._timers = {};
    this._groupDepth = 0;
  }

  static write(buffer, type, message, level, sourceMaps) {
    const callsite = (0, (_get_callsite || _load_get_callsite()).default)(level != null ? level : 2, sourceMaps);
    const origin = callsite.getFileName() + ':' + callsite.getLineNumber();

    buffer.push({
      message,
      origin,
      type
    });

    return buffer;
  }

  _log(type, message) {
    BufferedConsole.write(this._buffer, type, '  '.repeat(this._groupDepth) + message, 3, this._getSourceMaps());
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
    return this._buffer;
  }
}
exports.default = BufferedConsole; /**
                                    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                    *
                                    * This source code is licensed under the MIT license found in the
                                    * LICENSE file in the root directory of this source tree.
                                    *
                                    * 
                                    */