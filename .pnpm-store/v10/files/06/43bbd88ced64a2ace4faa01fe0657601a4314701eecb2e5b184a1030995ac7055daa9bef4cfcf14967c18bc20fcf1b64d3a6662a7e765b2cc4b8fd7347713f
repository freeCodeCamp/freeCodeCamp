/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var fs = require('fs');

var invariant = require('invariant');

/**
 * A filesystem wrapper that buffers file reads and writes until `commit()` is
 * called.
 */
var BufferedFilesystem = /*#__PURE__*/function () {
  function BufferedFilesystem() {
    (0, _defineProperty2["default"])(this, "buffer", new Map());
    (0, _defineProperty2["default"])(this, "committed", false);
  }

  var _proto = BufferedFilesystem.prototype;

  _proto._assertNotComitted = function _assertNotComitted() {
    !!this.committed ? process.env.NODE_ENV !== "production" ? invariant(false, 'BufferedFilesystem: no operations allowed after commit().') : invariant(false) : void 0;
  };

  _proto.commit = /*#__PURE__*/function () {
    var _commit = _asyncToGenerator(function* (sourceControl) {
      this._assertNotComitted();

      this.committed = true;
      var removed = [];
      var added = [];

      var _iterator = (0, _createForOfIteratorHelper2["default"])(this.buffer),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _step.value,
              path = _step$value[0],
              data = _step$value[1];

          if (data == null) {
            removed.push(path);
            fs.unlinkSync(path);
          } else {
            var fileExisits = fs.existsSync(path);
            var currentData = fileExisits ? fs.readFileSync(path, 'utf8') : null;

            if (currentData !== data) {
              added.push(path);
              fs.writeFileSync(path, data, 'utf8');
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (sourceControl) {
        yield sourceControl.addRemove(added, removed);
      }
    });

    function commit(_x) {
      return _commit.apply(this, arguments);
    }

    return commit;
  }();

  _proto.hasChanges = function hasChanges() {
    this._assertNotComitted();

    return this.buffer.size > 0;
  };

  _proto.getChangesSummary = function getChangesSummary() {
    this._assertNotComitted();

    var added = [];
    var updated = [];
    var removed = [];

    var _iterator2 = (0, _createForOfIteratorHelper2["default"])(this.buffer),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _step2.value,
            path = _step2$value[0],
            data = _step2$value[1];

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
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return [added.length > 0 ? "Added:\n".concat(added.map(formatFilepath).join('')) : '', updated.length > 0 ? "Updated:\n".concat(updated.map(formatFilepath).join('')) : '', removed.length > 0 ? "Removed:\n".concat(removed.map(formatFilepath).join('')) : ''].filter(Boolean).join('\n');
  };

  _proto.getAddedRemovedFiles = function getAddedRemovedFiles() {
    this._assertNotComitted();

    var added = [];
    var removed = [];

    var _iterator3 = (0, _createForOfIteratorHelper2["default"])(this.buffer),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _step3.value,
            path = _step3$value[0],
            data = _step3$value[1];

        if (data == null) {
          removed.push(path);
        } else {
          if (!fs.existsSync(path)) {
            added.push(path);
          }
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return {
      added: added,
      removed: removed
    };
  };

  _proto.existsSync = function existsSync(path) {
    this._assertNotComitted();

    return this.buffer.has(path) ? Boolean(this.buffer.get(path)) : fs.existsSync(path);
  };

  _proto.mkdirSync = function mkdirSync(path) {
    this._assertNotComitted();

    fs.mkdirSync(path);
  };

  _proto.readdirSync = function readdirSync(path) {
    this._assertNotComitted();

    throw new Error('BufferedFilesystem: readdirSync is not implemented.');
  };

  _proto.readFileSync = function readFileSync(path, encoding) {
    this._assertNotComitted();

    if (this.buffer.has(path)) {
      var data = this.buffer.get(path);
      !(data != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'BufferedFilesystem: trying to read deleted file.') : invariant(false) : void 0;
      return data;
    }

    return fs.readFileSync(path, encoding);
  };

  _proto.statSync = function statSync(path) {
    this._assertNotComitted();

    return fs.statSync(path);
  };

  _proto.unlinkSync = function unlinkSync(path) {
    this._assertNotComitted();

    this.buffer.set(path, null);
  };

  _proto.writeFileSync = function writeFileSync(filename, data, encoding) {
    this._assertNotComitted();

    this.buffer.set(filename, data);
  };

  _proto.changedFilesToJSON = function changedFilesToJSON() {
    this._assertNotComitted();

    var changed = [];
    var removed = [];

    var _iterator4 = (0, _createForOfIteratorHelper2["default"])(this.buffer),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _step4$value = _step4.value,
            path = _step4$value[0],
            data = _step4$value[1];

        if (data == null) {
          removed.push({
            path: path
          });
        } else {
          changed.push({
            path: path,
            data: data
          });
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    return {
      removed: removed,
      changed: changed
    };
  };

  return BufferedFilesystem;
}();

function formatFilepath(filepath) {
  var startIndex = filepath.length - 80;
  var prefix = startIndex > 0 ? "\t - ".concat(filepath.substr(0, 8), "...") : '\t - ';
  return prefix + filepath.substr(startIndex, filepath.length) + '\n';
}

module.exports = BufferedFilesystem;