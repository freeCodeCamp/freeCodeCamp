'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _micromatch;

function _load_micromatch() {
  return _micromatch = _interopRequireDefault(require('micromatch'));
}

var _jestResolveDependencies;

function _load_jestResolveDependencies() {
  return _jestResolveDependencies = _interopRequireDefault(require('jest-resolve-dependencies'));
}

var _test_path_pattern_to_regexp;

function _load_test_path_pattern_to_regexp() {
  return _test_path_pattern_to_regexp = _interopRequireDefault(require('./test_path_pattern_to_regexp'));
}

var _jestRegexUtil;

function _load_jestRegexUtil() {
  return _jestRegexUtil = require('jest-regex-util');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

const globsToMatcher = globs => {
  if (globs == null || globs.length === 0) {
    return () => true;
  }

  const matchers = globs.map(each => (_micromatch || _load_micromatch()).default.matcher(each, { dot: true }));
  return path => matchers.some(each => each(path));
};

const regexToMatcher = testRegex => {
  if (!testRegex) {
    return () => true;
  }

  const regex = new RegExp(testRegex);
  return path => regex.test(path);
};

const toTests = (context, tests) => tests.map(path => ({
  context,
  duration: undefined,
  path
}));

class SearchSource {

  constructor(context) {
    const config = context.config;

    this._context = context;
    this._rootPattern = new RegExp(config.roots.map(dir => (0, (_jestRegexUtil || _load_jestRegexUtil()).escapePathForRegex)(dir + (_path || _load_path()).default.sep)).join('|'));

    const ignorePattern = config.testPathIgnorePatterns;
    this._testIgnorePattern = ignorePattern.length ? new RegExp(ignorePattern.join('|')) : null;

    this._testPathCases = {
      roots: path => this._rootPattern.test(path),
      testMatch: globsToMatcher(config.testMatch),
      testPathIgnorePatterns: path => !this._testIgnorePattern || !this._testIgnorePattern.test(path),
      testRegex: regexToMatcher(config.testRegex)
    };
  }

  _filterTestPathsWithStats(allPaths, testPathPattern) {
    const data = {
      stats: {},
      tests: [],
      total: allPaths.length
    };

    const testCases = Object.assign({}, this._testPathCases);
    if (testPathPattern) {
      const regex = (0, (_test_path_pattern_to_regexp || _load_test_path_pattern_to_regexp()).default)(testPathPattern);
      testCases.testPathPattern = path => regex.test(path);
    }

    const testCasesKeys = Object.keys(testCases);
    data.tests = allPaths.filter(test => {
      return testCasesKeys.reduce((flag, key) => {
        if (testCases[key](test.path)) {
          data.stats[key] = ++data.stats[key] || 1;
          return flag && true;
        }
        data.stats[key] = data.stats[key] || 0;
        return false;
      }, true);
    });

    return data;
  }

  _getAllTestPaths(testPathPattern) {
    return this._filterTestPathsWithStats(toTests(this._context, this._context.hasteFS.getAllFiles()), testPathPattern);
  }

  isTestFilePath(path) {
    return Object.keys(this._testPathCases).every(key => this._testPathCases[key](path));
  }

  findMatchingTests(testPathPattern) {
    return this._getAllTestPaths(testPathPattern);
  }

  findRelatedTests(allPaths) {
    const dependencyResolver = new (_jestResolveDependencies || _load_jestResolveDependencies()).default(this._context.resolver, this._context.hasteFS);
    return {
      tests: toTests(this._context, dependencyResolver.resolveInverse(allPaths, this.isTestFilePath.bind(this), {
        skipNodeResolution: this._context.config.skipNodeResolution
      }))
    };
  }

  findTestsByPaths(paths) {
    return {
      tests: toTests(this._context, paths.map(p => (_path || _load_path()).default.resolve(process.cwd(), p)).filter(this.isTestFilePath.bind(this)))
    };
  }

  findRelatedTestsFromPattern(paths) {
    if (Array.isArray(paths) && paths.length) {
      const resolvedPaths = paths.map(p => (_path || _load_path()).default.resolve(process.cwd(), p));
      return this.findRelatedTests(new Set(resolvedPaths));
    }
    return { tests: [] };
  }

  findTestRelatedToChangedFiles(changedFilesPromise) {
    var _this = this;

    return _asyncToGenerator(function* () {
      var _ref = yield changedFilesPromise;

      const repos = _ref.repos,
            changedFiles = _ref.changedFiles;

      // no SCM (git/hg/...) is found in any of the roots.

      const noSCM = Object.keys(repos).every(function (scm) {
        return repos[scm].size === 0;
      });
      return noSCM ? { noSCM: true, tests: [] } : _this.findRelatedTests(changedFiles);
    })();
  }

  getTestPaths(globalConfig, changedFilesPromise) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      const paths = globalConfig.nonFlagArgs;
      if (globalConfig.onlyChanged) {
        if (!changedFilesPromise) {
          throw new Error('This promise must be present when running with -o.');
        }

        return _this2.findTestRelatedToChangedFiles(changedFilesPromise);
      } else if (globalConfig.runTestsByPath && paths && paths.length) {
        return Promise.resolve(_this2.findTestsByPaths(paths));
      } else if (globalConfig.findRelatedTests && paths && paths.length) {
        return Promise.resolve(_this2.findRelatedTestsFromPattern(paths));
      } else if (globalConfig.testPathPattern != null) {
        return Promise.resolve(_this2.findMatchingTests(globalConfig.testPathPattern));
      } else {
        return Promise.resolve({ tests: [] });
      }
    })();
  }
}
exports.default = SearchSource;