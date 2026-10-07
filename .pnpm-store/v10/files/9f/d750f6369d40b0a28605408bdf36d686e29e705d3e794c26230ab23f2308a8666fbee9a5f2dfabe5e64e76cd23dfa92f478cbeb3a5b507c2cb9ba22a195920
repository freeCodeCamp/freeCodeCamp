/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const fs = require('fs');
const invariant = require('invariant');

import type {Filesystem} from '../codegen/CodegenDirectory';
import type {SourceControl} from '../codegen/SourceControl';

/**
 * A filesystem wrapper that buffers file reads and writes until `commit()` is
 * called.
 */
class BufferedFilesystem implements Filesystem {
  buffer: Map<string, ?string> = new Map();
  committed: boolean = false;

  _assertNotComitted() {
    invariant(
      !this.committed,
      'BufferedFilesystem: no operations allowed after commit().',
    );
  }

  async commit(sourceControl: ?SourceControl) {
    this._assertNotComitted();
    this.committed = true;

    const removed = [];
    const added = [];
    for (const [path, data] of this.buffer) {
      if (data == null) {
        removed.push(path);
        fs.unlinkSync(path);
      } else {
        const fileExisits = fs.existsSync(path);
        const currentData = fileExisits ? fs.readFileSync(path, 'utf8') : null;
        if (currentData !== data) {
          added.push(path);
          fs.writeFileSync(path, data, 'utf8');
        }
      }
    }
    if (sourceControl) {
      await sourceControl.addRemove(added, removed);
    }
  }

  hasChanges(): boolean {
    this._assertNotComitted();
    return this.buffer.size > 0;
  }

  getChangesSummary(): string {
    this._assertNotComitted();
    const added = [];
    const updated = [];
    const removed = [];
    for (const [path, data] of this.buffer) {
      if (data == null) {
        removed.push(path);
      } else {
        if (!fs.existsSync(path)) {
          added.push(path);
        } else {
          updated.push(path);
        }
      }
    }
    return [
      added.length > 0 ? `Added:\n${added.map(formatFilepath).join('')}` : '',
      updated.length > 0
        ? `Updated:\n${updated.map(formatFilepath).join('')}`
        : '',
      removed.length > 0
        ? `Removed:\n${removed.map(formatFilepath).join('')}`
        : '',
    ]
      .filter(Boolean)
      .join('\n');
  }

  getAddedRemovedFiles(): {|
    +added: $ReadOnlyArray<string>,
    +removed: $ReadOnlyArray<string>,
  |} {
    this._assertNotComitted();
    const added = [];
    const removed = [];
    for (const [path, data] of this.buffer) {
      if (data == null) {
        removed.push(path);
      } else {
        if (!fs.existsSync(path)) {
          added.push(path);
        }
      }
    }
    return {
      added,
      removed,
    };
  }

  existsSync(path: string): boolean {
    this._assertNotComitted();
    return this.buffer.has(path)
      ? Boolean(this.buffer.get(path))
      : fs.existsSync(path);
  }

  mkdirSync(path: string): void {
    this._assertNotComitted();
    fs.mkdirSync(path);
  }

  readdirSync(path: string): Array<string> {
    this._assertNotComitted();
    throw new Error('BufferedFilesystem: readdirSync is not implemented.');
  }

  readFileSync(path: string, encoding: string): string {
    this._assertNotComitted();
    if (this.buffer.has(path)) {
      const data = this.buffer.get(path);
      invariant(
        data != null,
        'BufferedFilesystem: trying to read deleted file.',
      );
      return data;
    }
    return fs.readFileSync(path, encoding);
  }

  statSync(path: string): interface {isDirectory(): boolean} {
    this._assertNotComitted();
    return fs.statSync(path);
  }

  unlinkSync(path: string): void {
    this._assertNotComitted();
    this.buffer.set(path, null);
  }

  writeFileSync(filename: string, data: string, encoding: string): void {
    this._assertNotComitted();
    this.buffer.set(filename, data);
  }

  changedFilesToJSON(): {|
    +changed: $ReadOnlyArray<{|
      +path: string,
      +data: string,
    |}>,
    +removed: $ReadOnlyArray<{|
      +path: string,
    |}>,
  |} {
    this._assertNotComitted();
    const changed = [];
    const removed = [];
    for (const [path, data] of this.buffer) {
      if (data == null) {
        removed.push({path});
      } else {
        changed.push({path, data});
      }
    }
    return {
      removed,
      changed,
    };
  }
}

function formatFilepath(filepath: string): string {
  const startIndex = filepath.length - 80;
  const prefix = startIndex > 0 ? `\t - ${filepath.substr(0, 8)}...` : '\t - ';
  return prefix + filepath.substr(startIndex, filepath.length) + '\n';
}

module.exports = BufferedFilesystem;
