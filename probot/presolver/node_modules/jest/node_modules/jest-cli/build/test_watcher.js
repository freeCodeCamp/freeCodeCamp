'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events;

function _load_events() {
  return _events = _interopRequireDefault(require('events'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TestWatcher extends (_events || _load_events()).default {

  constructor(_ref) {
    let isWatchMode = _ref.isWatchMode;

    super();
    this.state = { interrupted: false };
    this._isWatchMode = isWatchMode;
  }

  setState(state) {
    Object.assign(this.state, state);
    this.emit('change', this.state);
  }

  isInterrupted() {
    return this.state.interrupted;
  }

  isWatchMode() {
    return this._isWatchMode;
  }
}
exports.default = TestWatcher; /**
                                * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                *
                                * This source code is licensed under the MIT license found in the
                                * LICENSE file in the root directory of this source tree.
                                *
                                * 
                                */