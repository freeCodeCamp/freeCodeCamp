'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveSnapshotFile = exports.ensureDirectoryExists = exports.unescape = exports.serialize = exports.getSnapshotData = exports.getSnapshotPath = exports.keyToTestName = exports.testNameToKey = exports.SNAPSHOT_VERSION_WARNING = exports.SNAPSHOT_GUIDE_LINK = exports.SNAPSHOT_VERSION = exports.SNAPSHOT_EXTENSION = undefined;

var _plugins = require('./plugins');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _naturalCompare = require('natural-compare');

var _naturalCompare2 = _interopRequireDefault(_naturalCompare);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _prettyFormat = require('pretty-format');

var _prettyFormat2 = _interopRequireDefault(_prettyFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const SNAPSHOT_EXTENSION = exports.SNAPSHOT_EXTENSION = 'snap';
const SNAPSHOT_VERSION = exports.SNAPSHOT_VERSION = '1';
const SNAPSHOT_VERSION_REGEXP = /^\/\/ Jest Snapshot v(.+),/;
const SNAPSHOT_GUIDE_LINK = exports.SNAPSHOT_GUIDE_LINK = 'https://goo.gl/fbAQLP';
const SNAPSHOT_VERSION_WARNING = exports.SNAPSHOT_VERSION_WARNING = _chalk2.default.yellow(`${_chalk2.default.bold('Warning')}: Before you upgrade snapshots, ` + `we recommend that you revert any local changes to tests or other code, ` + `to ensure that you do not store invalid state.`);

const writeSnapshotVersion = () => `// Jest Snapshot v${SNAPSHOT_VERSION}, ${SNAPSHOT_GUIDE_LINK}`;

const validateSnapshotVersion = snapshotContents => {
  const versionTest = SNAPSHOT_VERSION_REGEXP.exec(snapshotContents);
  const version = versionTest && versionTest[1];

  if (!version) {
    return new Error(_chalk2.default.red(`${_chalk2.default.bold('Outdated snapshot')}: No snapshot header found. ` + `Jest 19 introduced versioned snapshots to ensure all developers ` + `on a project are using the same version of Jest. ` + `Please update all snapshots during this upgrade of Jest.\n\n`) + SNAPSHOT_VERSION_WARNING);
  }

  if (version < SNAPSHOT_VERSION) {
    return new Error(_chalk2.default.red(`${_chalk2.default.red.bold('Outdated snapshot')}: The version of the snapshot ` + `file associated with this test is outdated. The snapshot file ` + `version ensures that all developers on a project are using ` + `the same version of Jest. ` + `Please update all snapshots during this upgrade of Jest.\n\n`) + `Expected: v${SNAPSHOT_VERSION}\n` + `Received: v${version}\n\n` + SNAPSHOT_VERSION_WARNING);
  }

  if (version > SNAPSHOT_VERSION) {
    return new Error(_chalk2.default.red(`${_chalk2.default.red.bold('Outdated Jest version')}: The version of this ` + `snapshot file indicates that this project is meant to be used ` + `with a newer version of Jest. The snapshot file version ensures ` + `that all developers on a project are using the same version of ` + `Jest. Please update your version of Jest and re-run the tests.\n\n`) + `Expected: v${SNAPSHOT_VERSION}\n` + `Received: v${version}`);
  }

  return null;
};

const testNameToKey = exports.testNameToKey = (testName, count) => testName + ' ' + count;

const keyToTestName = exports.keyToTestName = key => {
  if (!/ \d+$/.test(key)) {
    throw new Error('Snapshot keys must end with a number.');
  }

  return key.replace(/ \d+$/, '');
};

const getSnapshotPath = exports.getSnapshotPath = testPath => _path2.default.join(_path2.default.join(_path2.default.dirname(testPath), '__snapshots__'), _path2.default.basename(testPath) + '.' + SNAPSHOT_EXTENSION);

const getSnapshotData = exports.getSnapshotData = (snapshotPath, update) => {
  const data = Object.create(null);
  let snapshotContents = '';
  let dirty = false;

  if (_fs2.default.existsSync(snapshotPath)) {
    try {
      snapshotContents = _fs2.default.readFileSync(snapshotPath, 'utf8');
      // eslint-disable-next-line no-new-func
      const populate = new Function('exports', snapshotContents);
      // $FlowFixMe
      populate(data);
    } catch (e) {}
  }

  const validationResult = validateSnapshotVersion(snapshotContents);
  const isInvalid = snapshotContents && validationResult;

  if (update === 'none' && isInvalid) {
    throw validationResult;
  }

  if ((update === 'all' || update === 'new') && isInvalid) {
    dirty = true;
  }

  return { data, dirty };
};

// Extra line breaks at the beginning and at the end of the snapshot are useful
// to make the content of the snapshot easier to read
const addExtraLineBreaks = string => string.includes('\n') ? `\n${string}\n` : string;

const serialize = exports.serialize = data => {
  return addExtraLineBreaks(normalizeNewlines((0, _prettyFormat2.default)(data, {
    escapeRegex: true,
    plugins: (0, _plugins.getSerializers)(),
    printFunctionName: false
  })));
};

// unescape double quotes
const unescape = exports.unescape = data => data.replace(/\\(")/g, '$1');

const printBacktickString = str => {
  return '`' + str.replace(/`|\\|\${/g, '\\$&') + '`';
};

const ensureDirectoryExists = exports.ensureDirectoryExists = filePath => {
  try {
    _mkdirp2.default.sync(_path2.default.join(_path2.default.dirname(filePath)), '777');
  } catch (e) {}
};

const normalizeNewlines = string => string.replace(/\r\n|\r/g, '\n');

const saveSnapshotFile = exports.saveSnapshotFile = (snapshotData, snapshotPath) => {
  const snapshots = Object.keys(snapshotData).sort(_naturalCompare2.default).map(key => 'exports[' + printBacktickString(key) + '] = ' + printBacktickString(normalizeNewlines(snapshotData[key])) + ';');

  ensureDirectoryExists(snapshotPath);
  _fs2.default.writeFileSync(snapshotPath, writeSnapshotVersion() + '\n\n' + snapshots.join('\n\n') + '\n');
};