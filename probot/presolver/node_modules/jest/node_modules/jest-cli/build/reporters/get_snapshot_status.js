'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


const chalk = require('chalk'); /**
                                 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                 *
                                 * This source code is licensed under the MIT license found in the
                                 * LICENSE file in the root directory of this source tree.
                                 *
                                 * 
                                 */

var _require = require('./utils');

const pluralize = _require.pluralize;


const ARROW = ' \u203A ';
const FAIL_COLOR = chalk.bold.red;
const SNAPSHOT_ADDED = chalk.bold.green;
const SNAPSHOT_REMOVED = chalk.bold.red;
const SNAPSHOT_UPDATED = chalk.bold.green;

exports.default = (snapshot, afterUpdate) => {
  const statuses = [];

  if (snapshot.added) {
    statuses.push(SNAPSHOT_ADDED(ARROW + pluralize('snapshot', snapshot.added)) + ' written.');
  }

  if (snapshot.updated) {
    statuses.push(SNAPSHOT_UPDATED(ARROW + pluralize('snapshot', snapshot.updated)) + ` updated.`);
  }

  if (snapshot.unchecked) {
    statuses.push(FAIL_COLOR(ARROW + pluralize('obsolete snapshot', snapshot.unchecked)) + (afterUpdate ? ' removed' : ' found') + '.');

    snapshot.uncheckedKeys.forEach(key => {
      statuses.push(FAIL_COLOR(`  - ${key}`));
    });
  }

  if (snapshot.fileDeleted) {
    statuses.push(SNAPSHOT_REMOVED(ARROW + 'Obsolete snapshot file') + ` removed.`);
  }

  if (snapshot.unmatched) {
    statuses.push(FAIL_COLOR(ARROW + pluralize('snapshot test', snapshot.unmatched)) + ' failed.');
  }
  return statuses;
};