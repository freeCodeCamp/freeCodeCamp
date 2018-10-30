'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jestRegexUtil;

function _load_jestRegexUtil() {
  return _jestRegexUtil = require('jest-regex-util');
}

var _constants;

function _load_constants() {
  return _constants = require('./constants');
}

const NODE_MODULES_REGEXP = (0, (_jestRegexUtil || _load_jestRegexUtil()).replacePathSepForRegex)((_constants || _load_constants()).NODE_MODULES); /**
                                                                                                                                                    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                    *
                                                                                                                                                    * This source code is licensed under the MIT license found in the
                                                                                                                                                    * LICENSE file in the root directory of this source tree.
                                                                                                                                                    *
                                                                                                                                                    * 
                                                                                                                                                    */

exports.default = {
  automock: false,
  bail: false,
  browser: false,
  cache: true,
  cacheDirectory: '/tmp/user/jest',
  changedFilesWithAncestor: false,
  changedSince: '',
  clearMocks: false,
  collectCoverage: true,
  collectCoverageFrom: ['src', '!public'],
  collectCoverageOnlyFrom: {
    '<rootDir>/this-directory-is-covered/Covered.js': true
  },
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [NODE_MODULES_REGEXP],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  coverageThreshold: {
    global: {
      branches: 50
    }
  },
  displayName: 'project-name',
  expand: false,
  forceCoverageMatch: ['**/*.t.js'],
  forceExit: false,
  globalSetup: 'setup.js',
  globalTeardown: 'teardown.js',
  globals: {},
  haste: {
    providesModuleNodeModules: ['react', 'react-native']
  },
  json: false,
  lastCommit: false,
  logHeapUsage: true,
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  moduleLoader: '<rootDir>',
  moduleNameMapper: {
    '^React$': '<rootDir>/node_modules/react'
  },
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  modulePaths: ['/shared/vendor/modules'],
  name: 'string',
  noStackTrace: false,
  notify: false,
  notifyMode: 'always',
  onlyChanged: false,
  preset: 'react-native',
  projects: ['project-a', 'project-b/'],
  reporters: ['default', 'custom-reporter-1', ['custom-reporter-2', { configValue: true }]],
  resetMocks: false,
  resetModules: false,
  resolver: '<rootDir>/resolver.js',
  restoreMocks: false,
  rootDir: '/',
  roots: ['<rootDir>'],
  runTestsByPath: false,
  runner: 'jest-runner',
  setupFiles: ['<rootDir>/setup.js'],
  setupTestFrameworkScriptFile: '<rootDir>/testSetupFile.js',
  silent: true,
  skipNodeResolution: false,
  snapshotSerializers: ['my-serializer-module'],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {},
  testFailureExitCode: 1,
  testLocationInResults: false,
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)'],
  testNamePattern: 'test signature',
  testPathIgnorePatterns: [NODE_MODULES_REGEXP],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
  testResultsProcessor: 'processor-node-module',
  testRunner: 'jasmine2',
  testURL: 'about:blank',
  timers: 'real',
  transform: {
    '^.+\\.js$': '<rootDir>/preprocessor.js'
  },
  transformIgnorePatterns: [NODE_MODULES_REGEXP],
  unmockedModulePathPatterns: ['mock'],
  updateSnapshot: true,
  useStderr: false,
  verbose: false,
  watch: false,
  watchPathIgnorePatterns: [],
  watchPlugins: [],
  watchman: true
};