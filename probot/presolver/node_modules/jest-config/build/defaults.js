'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _os;

function _load_os() {
  return _os = _interopRequireDefault(require('os'));
}

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _jestRegexUtil;

function _load_jestRegexUtil() {
  return _jestRegexUtil = require('jest-regex-util');
}

var _constants;

function _load_constants() {
  return _constants = require('./constants');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NODE_MODULES_REGEXP = (0, (_jestRegexUtil || _load_jestRegexUtil()).replacePathSepForRegex)((_constants || _load_constants()).NODE_MODULES); /**
                                                                                                                                                    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                    *
                                                                                                                                                    * This source code is licensed under the MIT license found in the
                                                                                                                                                    * LICENSE file in the root directory of this source tree.
                                                                                                                                                    *
                                                                                                                                                    * 
                                                                                                                                                    */

const cacheDirectory = (() => {
  var _process = process;
  const getuid = _process.getuid;

  if (getuid == null) {
    return (_path || _load_path()).default.join((_os || _load_os()).default.tmpdir(), 'jest');
  }
  // On some platforms tmpdir() is `/tmp`, causing conflicts between different
  // users and permission issues. Adding an additional subdivision by UID can
  // help.
  return (_path || _load_path()).default.join((_os || _load_os()).default.tmpdir(), 'jest_' + getuid.call(process).toString(36));
})();

exports.default = {
  automock: false,
  bail: false,
  browser: false,
  cache: true,
  cacheDirectory,
  changedFilesWithAncestor: false,
  clearMocks: false,
  coveragePathIgnorePatterns: [NODE_MODULES_REGEXP],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  detectLeaks: false,
  expand: false,
  forceCoverageMatch: [],
  globalSetup: null,
  globalTeardown: null,
  globals: {},
  haste: {
    providesModuleNodeModules: []
  },
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  moduleNameMapper: {},
  modulePathIgnorePatterns: [],
  noStackTrace: false,
  notify: false,
  notifyMode: 'always',
  preset: null,
  resetMocks: false,
  resetModules: false,
  restoreMocks: false,
  runTestsByPath: false,
  runner: 'jest-runner',
  snapshotSerializers: [],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {},
  testFailureExitCode: 1,
  testLocationInResults: false,
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)'],
  testPathIgnorePatterns: [NODE_MODULES_REGEXP],
  testRegex: '',
  testResultsProcessor: null,
  testURL: 'about:blank',
  timers: 'real',
  transformIgnorePatterns: [NODE_MODULES_REGEXP],
  useStderr: false,
  verbose: null,
  watch: false,
  watchPathIgnorePatterns: [],
  watchman: true
};