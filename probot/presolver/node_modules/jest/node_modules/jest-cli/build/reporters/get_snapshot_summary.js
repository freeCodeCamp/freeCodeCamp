'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _utils;

function _load_utils() {
  return _utils = require('./utils');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ARROW = ' \u203A '; /**
                           * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                           *
                           * This source code is licensed under the MIT license found in the
                           * LICENSE file in the root directory of this source tree.
                           *
                           * 
                           */

const FAIL_COLOR = (_chalk || _load_chalk()).default.bold.red;
const SNAPSHOT_ADDED = (_chalk || _load_chalk()).default.bold.green;
const SNAPSHOT_NOTE = (_chalk || _load_chalk()).default.dim;
const SNAPSHOT_REMOVED = (_chalk || _load_chalk()).default.bold.red;
const SNAPSHOT_SUMMARY = (_chalk || _load_chalk()).default.bold;
const SNAPSHOT_UPDATED = (_chalk || _load_chalk()).default.bold.green;

exports.default = (snapshots, updateCommand) => {
  const summary = [];
  summary.push(SNAPSHOT_SUMMARY('Snapshot Summary'));
  if (snapshots.added) {
    summary.push(SNAPSHOT_ADDED(ARROW + (0, (_utils || _load_utils()).pluralize)('snapshot', snapshots.added)) + ` written in ${(0, (_utils || _load_utils()).pluralize)('test suite', snapshots.filesAdded)}.`);
  }

  if (snapshots.unmatched) {
    summary.push(FAIL_COLOR(ARROW + (0, (_utils || _load_utils()).pluralize)('snapshot test', snapshots.unmatched)) + ` failed in ` + `${(0, (_utils || _load_utils()).pluralize)('test suite', snapshots.filesUnmatched)}. ` + SNAPSHOT_NOTE('Inspect your code changes or ' + updateCommand + ' to update them.'));
  }

  if (snapshots.updated) {
    summary.push(SNAPSHOT_UPDATED(ARROW + (0, (_utils || _load_utils()).pluralize)('snapshot', snapshots.updated)) + ` updated in ${(0, (_utils || _load_utils()).pluralize)('test suite', snapshots.filesUpdated)}.`);
  }

  if (snapshots.filesRemoved) {
    summary.push(SNAPSHOT_REMOVED(ARROW + (0, (_utils || _load_utils()).pluralize)('obsolete snapshot file', snapshots.filesRemoved)) + (snapshots.didUpdate ? ' removed.' : ' found, ' + updateCommand + ' to remove ' + (snapshots.filesRemoved === 1 ? 'it' : 'them.') + '.'));
  }

  if (snapshots.unchecked) {
    summary.push(FAIL_COLOR(ARROW + (0, (_utils || _load_utils()).pluralize)('obsolete snapshot', snapshots.unchecked)) + (snapshots.didUpdate ? ' removed.' : ' found, ' + updateCommand + ' to remove ' + (snapshots.filesRemoved === 1 ? 'it' : 'them') + '.'));
  }

  return summary;
};