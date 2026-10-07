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

const Profiler = require('../core/GraphQLCompilerProfiler');

const crypto = require('crypto');
const invariant = require('invariant');
const path = require('path');

// flowlint nonstrict-import:warn
import type {KeepExtraFileFn} from './CodegenRunner';
import type {SourceControl} from './SourceControl';

type Changes = {|
  +deleted: Array<string>,
  +updated: Array<string>,
  +created: Array<string>,
  +unchanged: Array<string>,
|};

export interface Filesystem {
  existsSync(path: string): boolean;
  mkdirSync(path: string): void;
  readdirSync(path: string): Array<string>;
  readFileSync(path: string, encoding: string): string;
  statSync(path: string): interface {isDirectory(): boolean};
  unlinkSync(path: string): void;
  writeFileSync(filename: string, data: string, options: string): void;
}

/**
 * CodegenDirectory is a helper class for scripts that generate code into one
 * output directory. The purpose is to make it easy to only write files that
 * have changed and delete files that are no longer generated.
 * It gives statistics about added/removed/updated/unchanged in the end.
 * The class also has an option to "validate" which means that no file
 * operations are performed and only the statistics are created for what would
 * have happened. If there's anything but "unchanged", someone probably forgot
 * to run the codegen script.
 *
 * Example:
 *
 *   const dir = new CodegenDirectory('/some/path/generated', {filesystem: require('fs')});
 *   // write files in case content changed (less watchman/mtime changes)
 *   dir.writeFile('OneFile.js', contents);
 *   dir.writeFile('OtherFile.js', contents);
 *
 *   // delete files that are not generated
 *   dir.deleteExtraFiles();
 *
 *   // arrays of file names to print or whatever
 *   dir.changes.created
 *   dir.changes.updated
 *   dir.changes.deleted
 *   dir.changes.unchanged
 */

type Options = {|
  filesystem?: Filesystem,
  onlyValidate: boolean,
  shards?: number,
|};

class CodegenDirectory {
  changes: Changes;
  _filesystem: Filesystem;
  _files: Set<string>;
  _dir: string;
  onlyValidate: boolean;
  _shards: number;

  constructor(dir: string, options: Options) {
    this._filesystem = options.filesystem ?? require('fs');
    this.onlyValidate = options.onlyValidate;
    this._shards = options.shards ?? 1;
    if (this._filesystem.existsSync(dir)) {
      invariant(
        this._filesystem.statSync(dir).isDirectory(),
        'Expected `%s` to be a directory.',
        dir,
      );
    }
    if (!this.onlyValidate) {
      const dirs = [];
      let parent = dir;
      while (!this._filesystem.existsSync(parent)) {
        dirs.unshift(parent);
        parent = path.dirname(parent);
      }
      dirs.forEach(d => this._filesystem.mkdirSync(d));
      if (this._shards > 1) {
        for (let shard = 0; shard < this._shards; shard++) {
          const shardDir = path.join(dir, this._getShardName(shard));
          if (this._filesystem.existsSync(shardDir)) {
            invariant(
              this._filesystem.statSync(dir).isDirectory(),
              'Expected `%s` to be a directory.',
              dir,
            );
          } else {
            this._filesystem.mkdirSync(shardDir);
          }
        }
      }
    }
    this._files = new Set();
    this.changes = {
      deleted: [],
      updated: [],
      created: [],
      unchanged: [],
    };
    this._dir = dir;
  }

  static combineChanges(dirs: Array<CodegenDirectory>): Changes {
    const changes = {
      deleted: [],
      updated: [],
      created: [],
      unchanged: [],
    };
    dirs.forEach(dir => {
      changes.deleted.push(...dir.changes.deleted);
      changes.updated.push(...dir.changes.updated);
      changes.created.push(...dir.changes.created);
      changes.unchanged.push(...dir.changes.unchanged);
    });
    return changes;
  }

  static hasChanges(changes: Changes): boolean {
    return (
      changes.created.length > 0 ||
      changes.updated.length > 0 ||
      changes.deleted.length > 0
    );
  }

  static formatChanges(
    changes: Changes,
    options: {onlyValidate: boolean, ...},
  ): string {
    const output = [];
    function formatFiles(label, files) {
      if (files.length > 0) {
        output.push(label + ':');
        files.forEach(file => {
          output.push(' - ' + file);
        });
      }
    }
    if (options.onlyValidate) {
      formatFiles('Missing', changes.created);
      formatFiles('Out of date', changes.updated);
      formatFiles('Extra', changes.deleted);
    } else {
      formatFiles('Created', changes.created);
      formatFiles('Updated', changes.updated);
      formatFiles('Deleted', changes.deleted);
      output.push(`Unchanged: ${changes.unchanged.length} files`);
    }

    return output.join('\n');
  }

  static printChanges(
    changes: Changes,
    options: {onlyValidate: boolean, ...},
  ): void {
    Profiler.run('CodegenDirectory.printChanges', () => {
      const output = CodegenDirectory.formatChanges(changes, options);

      // eslint-disable-next-line no-console
      console.log(output);
    });
  }

  static getAddedRemovedFiles(
    dirs: $ReadOnlyArray<CodegenDirectory>,
  ): {|
    +added: $ReadOnlyArray<string>,
    +removed: $ReadOnlyArray<string>,
  |} {
    const added = [];
    const removed = [];
    dirs.forEach(dir => {
      dir.changes.created.forEach(name => {
        added.push(dir.getPath(name));
      });
      dir.changes.deleted.forEach(name => {
        removed.push(dir.getPath(name));
      });
    });
    return {
      added,
      removed,
    };
  }

  static async sourceControlAddRemove(
    sourceControl: SourceControl,
    dirs: $ReadOnlyArray<CodegenDirectory>,
  ): Promise<void> {
    const {added, removed} = CodegenDirectory.getAddedRemovedFiles(dirs);
    sourceControl.addRemove(added, removed);
  }

  printChanges(): void {
    CodegenDirectory.printChanges(this.changes, {
      onlyValidate: this.onlyValidate,
    });
  }

  read(filename: string): ?string {
    const filePath = path.join(this._dir, filename);
    if (this._filesystem.existsSync(filePath)) {
      return this._filesystem.readFileSync(filePath, 'utf8');
    }
    return null;
  }

  markUnchanged(filename: string) {
    this._addGenerated(filename);
    this.changes.unchanged.push(filename);
  }

  /**
   * Marks a files as updated or out of date without actually writing the file.
   * This is probably only be useful when doing validation without intention to
   * actually write to disk.
   */
  markUpdated(filename: string) {
    this._addGenerated(filename);
    this.changes.updated.push(filename);
  }

  writeFile(
    filename: string,
    content: string,
    shouldRepersist: boolean = false,
  ): void {
    Profiler.run('CodegenDirectory.writeFile', () => {
      this._addGenerated(filename);
      const filePath = this.getPath(filename);
      if (this._filesystem.existsSync(filePath)) {
        const existingContent = this._filesystem.readFileSync(filePath, 'utf8');
        if (existingContent === content && !shouldRepersist) {
          this.changes.unchanged.push(filename);
        } else {
          this._writeFile(filePath, content);
          this.changes.updated.push(filename);
        }
      } else {
        this._writeFile(filePath, content);
        this.changes.created.push(filename);
      }
    });
  }

  _writeFile(filePath: string, content: string): void {
    if (!this.onlyValidate) {
      this._filesystem.writeFileSync(filePath, content, 'utf8');
    }
  }

  /**
   * Deletes all non-generated files, except for invisible "dot" files (ie.
   * files with names starting with ".").
   */
  deleteExtraFiles(keepExtraFile?: KeepExtraFileFn): void {
    Profiler.run('CodegenDirectory.deleteExtraFiles', () => {
      if (this._shards > 1) {
        this._filesystem.readdirSync(this._dir).forEach(firstLevel => {
          if (firstLevel.startsWith('.')) {
            // allow hidden files on the first level of the codegen directory
            return;
          }
          const firstLevelPath = path.join(this._dir, firstLevel);
          if (!this._filesystem.statSync(firstLevelPath).isDirectory()) {
            // Delete all files on the top level, all files need to be in a
            // shard directory.
            this._filesystem.unlinkSync(firstLevelPath);
            return;
          }
          this._filesystem.readdirSync(firstLevelPath).forEach(actualFile => {
            if (keepExtraFile && keepExtraFile(actualFile)) {
              return;
            }
            if (this._files.has(actualFile)) {
              return;
            }
            if (!this.onlyValidate) {
              try {
                this._filesystem.unlinkSync(
                  path.join(firstLevelPath, actualFile),
                );
              } catch {
                throw new Error(
                  'CodegenDirectory: Failed to delete `' +
                    actualFile +
                    '` in `' +
                    this._dir +
                    '`.',
                );
              }
            }
            this.changes.deleted.push(actualFile);
          });
        });
      } else {
        this._filesystem.readdirSync(this._dir).forEach(actualFile => {
          if (keepExtraFile && keepExtraFile(actualFile)) {
            return;
          }
          if (actualFile.startsWith('.') || this._files.has(actualFile)) {
            return;
          }
          if (!this.onlyValidate) {
            try {
              this._filesystem.unlinkSync(path.join(this._dir, actualFile));
            } catch {
              throw new Error(
                'CodegenDirectory: Failed to delete `' +
                  actualFile +
                  '` in `' +
                  this._dir +
                  '`.',
              );
            }
          }
          this.changes.deleted.push(actualFile);
        });
      }
    });
  }

  getPath(filename: string): string {
    if (this._shards > 1) {
      const hasher = crypto.createHash('md5');
      hasher.update(filename, 'utf8');
      const shard = hasher.digest().readUInt32BE(0) % this._shards;
      return path.join(this._dir, this._getShardName(shard), filename);
    }
    return path.join(this._dir, filename);
  }

  _getShardName(shardNumber: number): string {
    const base16length = Math.ceil(Math.log2(256) / 4);
    return shardNumber.toString(16).padStart(base16length, '0');
  }

  _addGenerated(filename: string): void {
    invariant(
      !this._files.has(filename),
      'CodegenDirectory: Tried to generate `%s` twice in `%s`.',
      filename,
      this._dir,
    );
    this._files.add(filename);
  }
}

module.exports = CodegenDirectory;
