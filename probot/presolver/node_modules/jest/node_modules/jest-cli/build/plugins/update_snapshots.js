'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base_watch_plugin;

function _load_base_watch_plugin() {
  return _base_watch_plugin = _interopRequireDefault(require('../base_watch_plugin'));
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
class UpdateSnapshotsPlugin extends (_base_watch_plugin || _load_base_watch_plugin()).default {
  run(globalConfig, updateConfigAndRun) {
    updateConfigAndRun({ updateSnapshot: 'all' });
    return Promise.resolve(false);
  }

  apply(hooks) {
    hooks.testRunComplete(results => {
      this._hasSnapshotFailure = results.snapshot.failure;
    });
  }

  getUsageInfo(globalConfig) {
    if (this._hasSnapshotFailure) {
      return {
        key: 'u'.codePointAt(0),
        prompt: 'update failing snapshots'
      };
    }

    return null;
  }
}

exports.default = UpdateSnapshotsPlugin;