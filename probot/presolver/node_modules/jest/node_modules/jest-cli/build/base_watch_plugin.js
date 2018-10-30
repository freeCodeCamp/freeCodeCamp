'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


class BaseWatchPlugin {
  constructor(_ref) {
    let stdin = _ref.stdin,
        stdout = _ref.stdout;

    this._stdin = stdin;
    this._stdout = stdout;
  }

  apply(hooks) {}

  getUsageInfo(globalConfig) {
    return null;
  }

  onKey(value) {}

  run(globalConfig, updateConfigAndRun) {
    return Promise.resolve();
  }
} /**
   * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */
exports.default = BaseWatchPlugin;