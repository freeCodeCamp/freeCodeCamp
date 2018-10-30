'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base_watch_plugin;

function _load_base_watch_plugin() {
  return _base_watch_plugin = _interopRequireDefault(require('../base_watch_plugin'));
}

var _jestUtil;

function _load_jestUtil() {
  return _jestUtil = require('jest-util');
}

var _snapshot_interactive_mode;

function _load_snapshot_interactive_mode() {
  return _snapshot_interactive_mode = _interopRequireDefault(require('../snapshot_interactive_mode'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateSnapshotInteractivePlugin extends (_base_watch_plugin || _load_base_watch_plugin()).default {

  constructor(options) {
    super(options);
    this._failedSnapshotTestPaths = [];
    this._snapshotInteractiveMode = new (_snapshot_interactive_mode || _load_snapshot_interactive_mode()).default(this._stdout);
  }

  apply(hooks) {
    hooks.testRunComplete(results => {
      this._failedSnapshotTestPaths = (0, (_jestUtil || _load_jestUtil()).getFailedSnapshotTests)(results);
      if (this._snapshotInteractiveMode.isActive()) {
        this._snapshotInteractiveMode.updateWithResults(results);
      }
    });
  }

  onKey(key) {
    if (this._snapshotInteractiveMode.isActive()) {
      this._snapshotInteractiveMode.put(key);
    }
  }

  run(globalConfig, updateConfigAndRun) {
    if (this._failedSnapshotTestPaths.length) {
      return new Promise(res => {
        this._snapshotInteractiveMode.run(this._failedSnapshotTestPaths, (path, shouldUpdateSnapshot) => {
          updateConfigAndRun({
            testNamePattern: '',
            testPathPattern: path,
            updateSnapshot: shouldUpdateSnapshot ? 'all' : 'none'
          });
          if (!this._snapshotInteractiveMode.isActive()) {
            res();
          }
        });
      });
    } else {
      return Promise.resolve();
    }
  }

  getUsageInfo(globalConfig) {
    if (this._failedSnapshotTestPaths && this._failedSnapshotTestPaths.length > 0) {
      return {
        key: 'i'.codePointAt(0),
        prompt: 'update failing snapshots interactively'
      };
    }

    return null;
  }
} /**
   * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */
exports.default = UpdateSnapshotInteractivePlugin;