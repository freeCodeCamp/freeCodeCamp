'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Console;

function _load_Console() {
  return _Console = _interopRequireDefault(require('./Console'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NullConsole extends (_Console || _load_Console()).default {
  assert() {}
  debug() {}
  dir() {}
  error() {}
  info() {}
  log() {}
  time() {}
  timeEnd() {}
  trace() {}
  warn() {}
}
exports.default = NullConsole; /**
                                * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                *
                                * This source code is licensed under the MIT license found in the
                                * LICENSE file in the root directory of this source tree.
                                *
                                * 
                                */