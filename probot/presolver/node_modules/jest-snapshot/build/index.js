'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jestDiff = require('jest-diff');

var _jestDiff2 = _interopRequireDefault(_jestDiff);

var _jestMatcherUtils = require('jest-matcher-utils');

var _State = require('./State');

var _State2 = _interopRequireDefault(_State);

var _plugins = require('./plugins');

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const fileExists = (filePath, hasteFS) => hasteFS.exists(filePath) || _fs2.default.existsSync(filePath);

const cleanup = (hasteFS, update) => {
  const pattern = '\\.' + utils.SNAPSHOT_EXTENSION + '$';
  const files = hasteFS.matchFiles(pattern);
  const filesRemoved = files.filter(snapshotFile => !fileExists(_path2.default.resolve(_path2.default.dirname(snapshotFile), '..', _path2.default.basename(snapshotFile, '.' + utils.SNAPSHOT_EXTENSION)), hasteFS)).map(snapshotFile => {
    if (update === 'all') {
      _fs2.default.unlinkSync(snapshotFile);
    }
  }).length;

  return {
    filesRemoved
  };
};

const toMatchSnapshot = function (received, testName) {
  this.dontThrow && this.dontThrow();

  const currentTestName = this.currentTestName,
        isNot = this.isNot,
        snapshotState = this.snapshotState;


  if (isNot) {
    throw new Error('Jest: `.not` cannot be used with `.toMatchSnapshot()`.');
  }

  if (!snapshotState) {
    throw new Error('Jest: snapshot state must be initialized.');
  }

  const result = snapshotState.match(testName && currentTestName ? `${currentTestName}: ${testName}` : currentTestName || '', received);
  const count = result.count,
        pass = result.pass;
  let actual = result.actual,
      expected = result.expected;


  let report;
  if (pass) {
    return { message: () => '', pass: true };
  } else if (!expected) {
    report = () => `New snapshot was ${(0, _jestMatcherUtils.RECEIVED_COLOR)('not written')}. The update flag ` + `must be explicitly passed to write a new snapshot.\n\n` + `This is likely because this test is run in a continuous integration ` + `(CI) environment in which snapshots are not written by default.\n\n` + `${(0, _jestMatcherUtils.RECEIVED_COLOR)('Received value')} ` + `${actual}`;
  } else {
    expected = (expected || '').trim();
    actual = (actual || '').trim();
    const diffMessage = (0, _jestDiff2.default)(expected, actual, {
      aAnnotation: 'Snapshot',
      bAnnotation: 'Received',
      expand: snapshotState.expand
    });

    report = () => `${(0, _jestMatcherUtils.RECEIVED_COLOR)('Received value')} does not match ` + `${(0, _jestMatcherUtils.EXPECTED_COLOR)('stored snapshot ' + count)}.\n\n` + (diffMessage || (0, _jestMatcherUtils.EXPECTED_COLOR)('- ' + (expected || '')) + '\n' + (0, _jestMatcherUtils.RECEIVED_COLOR)('+ ' + actual));
  }
  // Passing the the actual and expected objects so that a custom reporter
  // could access them, for example in order to display a custom visual diff,
  // or create a different error message
  return {
    actual,
    expected,
    message: () => (0, _jestMatcherUtils.matcherHint)('.toMatchSnapshot', 'value', '') + '\n\n' + report(),
    name: 'toMatchSnapshot',
    pass: false,
    report
  };
};

const toThrowErrorMatchingSnapshot = function (received, testName, fromPromise) {
  this.dontThrow && this.dontThrow();

  const isNot = this.isNot;


  if (isNot) {
    throw new Error('Jest: `.not` cannot be used with `.toThrowErrorMatchingSnapshot()`.');
  }

  let error;

  if (fromPromise) {
    error = received;
  } else {
    try {
      received();
    } catch (e) {
      error = e;
    }
  }

  if (error === undefined) {
    throw new Error((0, _jestMatcherUtils.matcherHint)('.toThrowErrorMatchingSnapshot', '() => {}', '') + '\n\n' + `Expected the function to throw an error.\n` + `But it didn't throw anything.`);
  }

  return toMatchSnapshot.call(this, error.message, testName);
};

module.exports = {
  EXTENSION: utils.SNAPSHOT_EXTENSION,
  SnapshotState: _State2.default,
  addSerializer: _plugins.addSerializer,
  cleanup,
  getSerializers: _plugins.getSerializers,
  toMatchSnapshot,
  toThrowErrorMatchingSnapshot,
  utils
};