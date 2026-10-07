/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const childProcess = require('child_process');

function execFile(cmd: string, args: Array<string>): Promise<void> {
  return new Promise((resolve, reject) => {
    childProcess.execFile(cmd, args, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

/**
 * An abstraction over the source control system to make it injectable.
 */
export type SourceControl = {
  addRemove(
    added: $ReadOnlyArray<string>,
    removed: $ReadOnlyArray<string>,
  ): Promise<void>,
  ...
};

const SourceControlMercurial: SourceControl = {
  async addRemove(
    added: $ReadOnlyArray<string>,
    removed: $ReadOnlyArray<string>,
  ): Promise<void> {
    // NOTE: Not using `hg addremove` as that has a bug when deleting a file
    // that was just added, but not yet committed: T10711513
    if (added.length > 0) {
      await execFile('hg', ['add', ...added]);
    }
    if (removed.length > 0) {
      await execFile('hg', ['forget', ...removed]);
    }
  },
};

module.exports = {
  SourceControlMercurial,
};
