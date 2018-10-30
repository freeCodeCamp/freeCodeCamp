'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SnapshotState {

  constructor(testPath, options) {
    this._snapshotPath = options.snapshotPath || (0, _utils.getSnapshotPath)(testPath);

    var _getSnapshotData = (0, _utils.getSnapshotData)(this._snapshotPath, options.updateSnapshot);

    const data = _getSnapshotData.data,
          dirty = _getSnapshotData.dirty;

    this._snapshotData = data;
    this._dirty = dirty;
    this._uncheckedKeys = new Set(Object.keys(this._snapshotData));
    this._counters = new Map();
    this._index = 0;
    this.expand = options.expand || false;
    this.added = 0;
    this.matched = 0;
    this.unmatched = 0;
    this._updateSnapshot = options.updateSnapshot;
    this.updated = 0;
  }

  markSnapshotsAsCheckedForTest(testName) {
    this._uncheckedKeys.forEach(uncheckedKey => {
      if ((0, _utils.keyToTestName)(uncheckedKey) === testName) {
        this._uncheckedKeys.delete(uncheckedKey);
      }
    });
  }

  _addSnapshot(key, receivedSerialized) {
    this._dirty = true;
    this._snapshotData[key] = receivedSerialized;
  }

  save() {
    const isEmpty = Object.keys(this._snapshotData).length === 0;
    const status = {
      deleted: false,
      saved: false
    };

    if ((this._dirty || this._uncheckedKeys.size) && !isEmpty) {
      (0, _utils.saveSnapshotFile)(this._snapshotData, this._snapshotPath);
      status.saved = true;
    } else if (isEmpty && _fs2.default.existsSync(this._snapshotPath)) {
      if (this._updateSnapshot === 'all') {
        _fs2.default.unlinkSync(this._snapshotPath);
      }
      status.deleted = true;
    }

    return status;
  }

  getUncheckedCount() {
    return this._uncheckedKeys.size || 0;
  }

  getUncheckedKeys() {
    return Array.from(this._uncheckedKeys);
  }

  removeUncheckedKeys() {
    if (this._updateSnapshot === 'all' && this._uncheckedKeys.size) {
      this._dirty = true;
      this._uncheckedKeys.forEach(key => delete this._snapshotData[key]);
      this._uncheckedKeys.clear();
    }
  }

  match(testName, received, key) {
    this._counters.set(testName, (this._counters.get(testName) || 0) + 1);
    const count = Number(this._counters.get(testName));

    if (!key) {
      key = (0, _utils.testNameToKey)(testName, count);
    }

    this._uncheckedKeys.delete(key);

    const receivedSerialized = (0, _utils.serialize)(received);
    const expected = this._snapshotData[key];
    const pass = expected === receivedSerialized;
    const hasSnapshot = this._snapshotData[key] !== undefined;

    if (pass) {
      // Executing a snapshot file as JavaScript and writing the strings back
      // when other snapshots have changed loses the proper escaping for some
      // characters. Since we check every snapshot in every test, use the newly
      // generated formatted string.
      // Note that this is only relevant when a snapshot is added and the dirty
      // flag is set.
      this._snapshotData[key] = receivedSerialized;
    }

    // These are the conditions on when to write snapshots:
    //  * There's no snapshot file in a non-CI environment.
    //  * There is a snapshot file and we decided to update the snapshot.
    //  * There is a snapshot file, but it doesn't have this snaphsot.
    // These are the conditions on when not to write snapshots:
    //  * The update flag is set to 'none'.
    //  * There's no snapshot file or a file without this snapshot on a CI environment.
    if (hasSnapshot && this._updateSnapshot === 'all' || (!hasSnapshot || !_fs2.default.existsSync(this._snapshotPath)) && (this._updateSnapshot === 'new' || this._updateSnapshot === 'all')) {
      if (this._updateSnapshot === 'all') {
        if (!pass) {
          if (hasSnapshot) {
            this.updated++;
          } else {
            this.added++;
          }
          this._addSnapshot(key, receivedSerialized);
        } else {
          this.matched++;
        }
      } else {
        this._addSnapshot(key, receivedSerialized);
        this.added++;
      }

      return {
        actual: '',
        count,
        expected: '',
        pass: true
      };
    } else {
      if (!pass) {
        this.unmatched++;
        return {
          actual: (0, _utils.unescape)(receivedSerialized),
          count,
          expected: expected ? (0, _utils.unescape)(expected) : null,
          pass: false
        };
      } else {
        this.matched++;
        return {
          actual: '',
          count,
          expected: '',
          pass: true
        };
      }
    }
  }
}
exports.default = SnapshotState; /**
                                  * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                  *
                                  * This source code is licensed under the MIT license found in the
                                  * LICENSE file in the root directory of this source tree.
                                  *
                                  * 
                                  */