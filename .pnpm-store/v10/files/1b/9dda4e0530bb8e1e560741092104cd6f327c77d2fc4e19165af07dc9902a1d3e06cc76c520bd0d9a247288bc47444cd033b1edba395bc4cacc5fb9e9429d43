/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var Profiler = require('../core/GraphQLCompilerProfiler');

var crypto = require('crypto');

var invariant = require('invariant');

var path = require('path'); // flowlint nonstrict-import:warn


var CodegenDirectory = /*#__PURE__*/function () {
  function CodegenDirectory(dir, options) {
    var _this = this;

    var _options$filesystem, _options$shards;

    this._filesystem = (_options$filesystem = options.filesystem) !== null && _options$filesystem !== void 0 ? _options$filesystem : require('fs');
    this.onlyValidate = options.onlyValidate;
    this._shards = (_options$shards = options.shards) !== null && _options$shards !== void 0 ? _options$shards : 1;

    if (this._filesystem.existsSync(dir)) {
      !this._filesystem.statSync(dir).isDirectory() ? process.env.NODE_ENV !== "production" ? invariant(false, 'Expected `%s` to be a directory.', dir) : invariant(false) : void 0;
    }

    if (!this.onlyValidate) {
      var dirs = [];
      var parent = dir;

      while (!this._filesystem.existsSync(parent)) {
        dirs.unshift(parent);
        parent = path.dirname(parent);
      }

      dirs.forEach(function (d) {
        return _this._filesystem.mkdirSync(d);
      });

      if (this._shards > 1) {
        for (var shard = 0; shard < this._shards; shard++) {
          var shardDir = path.join(dir, this._getShardName(shard));

          if (this._filesystem.existsSync(shardDir)) {
            !this._filesystem.statSync(dir).isDirectory() ? process.env.NODE_ENV !== "production" ? invariant(false, 'Expected `%s` to be a directory.', dir) : invariant(false) : void 0;
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
      unchanged: []
    };
    this._dir = dir;
  }

  CodegenDirectory.combineChanges = function combineChanges(dirs) {
    var changes = {
      deleted: [],
      updated: [],
      created: [],
      unchanged: []
    };
    dirs.forEach(function (dir) {
      var _changes$deleted, _changes$updated, _changes$created, _changes$unchanged;

      (_changes$deleted = changes.deleted).push.apply(_changes$deleted, (0, _toConsumableArray2["default"])(dir.changes.deleted));

      (_changes$updated = changes.updated).push.apply(_changes$updated, (0, _toConsumableArray2["default"])(dir.changes.updated));

      (_changes$created = changes.created).push.apply(_changes$created, (0, _toConsumableArray2["default"])(dir.changes.created));

      (_changes$unchanged = changes.unchanged).push.apply(_changes$unchanged, (0, _toConsumableArray2["default"])(dir.changes.unchanged));
    });
    return changes;
  };

  CodegenDirectory.hasChanges = function hasChanges(changes) {
    return changes.created.length > 0 || changes.updated.length > 0 || changes.deleted.length > 0;
  };

  CodegenDirectory.formatChanges = function formatChanges(changes, options) {
    var output = [];

    function formatFiles(label, files) {
      if (files.length > 0) {
        output.push(label + ':');
        files.forEach(function (file) {
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
      output.push("Unchanged: ".concat(changes.unchanged.length, " files"));
    }

    return output.join('\n');
  };

  CodegenDirectory.printChanges = function printChanges(changes, options) {
    Profiler.run('CodegenDirectory.printChanges', function () {
      var output = CodegenDirectory.formatChanges(changes, options); // eslint-disable-next-line no-console

      console.log(output);
    });
  };

  CodegenDirectory.getAddedRemovedFiles = function getAddedRemovedFiles(dirs) {
    var added = [];
    var removed = [];
    dirs.forEach(function (dir) {
      dir.changes.created.forEach(function (name) {
        added.push(dir.getPath(name));
      });
      dir.changes.deleted.forEach(function (name) {
        removed.push(dir.getPath(name));
      });
    });
    return {
      added: added,
      removed: removed
    };
  };

  CodegenDirectory.sourceControlAddRemove = /*#__PURE__*/function () {
    var _sourceControlAddRemove = _asyncToGenerator(function* (sourceControl, dirs) {
      var _CodegenDirectory$get = CodegenDirectory.getAddedRemovedFiles(dirs),
          added = _CodegenDirectory$get.added,
          removed = _CodegenDirectory$get.removed;

      sourceControl.addRemove(added, removed);
    });

    function sourceControlAddRemove(_x, _x2) {
      return _sourceControlAddRemove.apply(this, arguments);
    }

    return sourceControlAddRemove;
  }();

  var _proto = CodegenDirectory.prototype;

  _proto.printChanges = function printChanges() {
    CodegenDirectory.printChanges(this.changes, {
      onlyValidate: this.onlyValidate
    });
  };

  _proto.read = function read(filename) {
    var filePath = path.join(this._dir, filename);

    if (this._filesystem.existsSync(filePath)) {
      return this._filesystem.readFileSync(filePath, 'utf8');
    }

    return null;
  };

  _proto.markUnchanged = function markUnchanged(filename) {
    this._addGenerated(filename);

    this.changes.unchanged.push(filename);
  }
  /**
   * Marks a files as updated or out of date without actually writing the file.
   * This is probably only be useful when doing validation without intention to
   * actually write to disk.
   */
  ;

  _proto.markUpdated = function markUpdated(filename) {
    this._addGenerated(filename);

    this.changes.updated.push(filename);
  };

  _proto.writeFile = function writeFile(filename, content) {
    var _this2 = this;

    var shouldRepersist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    Profiler.run('CodegenDirectory.writeFile', function () {
      _this2._addGenerated(filename);

      var filePath = _this2.getPath(filename);

      if (_this2._filesystem.existsSync(filePath)) {
        var existingContent = _this2._filesystem.readFileSync(filePath, 'utf8');

        if (existingContent === content && !shouldRepersist) {
          _this2.changes.unchanged.push(filename);
        } else {
          _this2._writeFile(filePath, content);

          _this2.changes.updated.push(filename);
        }
      } else {
        _this2._writeFile(filePath, content);

        _this2.changes.created.push(filename);
      }
    });
  };

  _proto._writeFile = function _writeFile(filePath, content) {
    if (!this.onlyValidate) {
      this._filesystem.writeFileSync(filePath, content, 'utf8');
    }
  }
  /**
   * Deletes all non-generated files, except for invisible "dot" files (ie.
   * files with names starting with ".").
   */
  ;

  _proto.deleteExtraFiles = function deleteExtraFiles(keepExtraFile) {
    var _this3 = this;

    Profiler.run('CodegenDirectory.deleteExtraFiles', function () {
      if (_this3._shards > 1) {
        _this3._filesystem.readdirSync(_this3._dir).forEach(function (firstLevel) {
          if (firstLevel.startsWith('.')) {
            // allow hidden files on the first level of the codegen directory
            return;
          }

          var firstLevelPath = path.join(_this3._dir, firstLevel);

          if (!_this3._filesystem.statSync(firstLevelPath).isDirectory()) {
            // Delete all files on the top level, all files need to be in a
            // shard directory.
            _this3._filesystem.unlinkSync(firstLevelPath);

            return;
          }

          _this3._filesystem.readdirSync(firstLevelPath).forEach(function (actualFile) {
            if (keepExtraFile && keepExtraFile(actualFile)) {
              return;
            }

            if (_this3._files.has(actualFile)) {
              return;
            }

            if (!_this3.onlyValidate) {
              try {
                _this3._filesystem.unlinkSync(path.join(firstLevelPath, actualFile));
              } catch (_unused) {
                throw new Error('CodegenDirectory: Failed to delete `' + actualFile + '` in `' + _this3._dir + '`.');
              }
            }

            _this3.changes.deleted.push(actualFile);
          });
        });
      } else {
        _this3._filesystem.readdirSync(_this3._dir).forEach(function (actualFile) {
          if (keepExtraFile && keepExtraFile(actualFile)) {
            return;
          }

          if (actualFile.startsWith('.') || _this3._files.has(actualFile)) {
            return;
          }

          if (!_this3.onlyValidate) {
            try {
              _this3._filesystem.unlinkSync(path.join(_this3._dir, actualFile));
            } catch (_unused2) {
              throw new Error('CodegenDirectory: Failed to delete `' + actualFile + '` in `' + _this3._dir + '`.');
            }
          }

          _this3.changes.deleted.push(actualFile);
        });
      }
    });
  };

  _proto.getPath = function getPath(filename) {
    if (this._shards > 1) {
      var hasher = crypto.createHash('md5');
      hasher.update(filename, 'utf8');

      var shard = hasher.digest().readUInt32BE(0) % this._shards;

      return path.join(this._dir, this._getShardName(shard), filename);
    }

    return path.join(this._dir, filename);
  };

  _proto._getShardName = function _getShardName(shardNumber) {
    var base16length = Math.ceil(Math.log2(256) / 4);
    return shardNumber.toString(16).padStart(base16length, '0');
  };

  _proto._addGenerated = function _addGenerated(filename) {
    !!this._files.has(filename) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CodegenDirectory: Tried to generate `%s` twice in `%s`.', filename, this._dir) : invariant(false) : void 0;

    this._files.add(filename);
  };

  return CodegenDirectory;
}();

module.exports = CodegenDirectory;