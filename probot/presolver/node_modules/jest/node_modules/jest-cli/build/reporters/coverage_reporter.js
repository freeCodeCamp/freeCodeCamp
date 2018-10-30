'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jestUtil;

function _load_jestUtil() {
  return _jestUtil = require('jest-util');
}

var _istanbulApi;

function _load_istanbulApi() {
  return _istanbulApi = require('istanbul-api');
}

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _istanbulLibCoverage;

function _load_istanbulLibCoverage() {
  return _istanbulLibCoverage = _interopRequireDefault(require('istanbul-lib-coverage'));
}

var _istanbulLibSourceMaps;

function _load_istanbulLibSourceMaps() {
  return _istanbulLibSourceMaps = _interopRequireDefault(require('istanbul-lib-source-maps'));
}

var _jestWorker;

function _load_jestWorker() {
  return _jestWorker = _interopRequireDefault(require('jest-worker'));
}

var _base_reporter;

function _load_base_reporter() {
  return _base_reporter = _interopRequireDefault(require('./base_reporter'));
}

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _glob;

function _load_glob() {
  return _glob = _interopRequireDefault(require('glob'));
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

const FAIL_COLOR = (_chalk || _load_chalk()).default.bold.red;
const RUNNING_TEST_COLOR = (_chalk || _load_chalk()).default.bold.dim;

class CoverageReporter extends (_base_reporter || _load_base_reporter()).default {

  constructor(globalConfig) {
    super();
    this._coverageMap = (_istanbulLibCoverage || _load_istanbulLibCoverage()).default.createCoverageMap({});
    this._globalConfig = globalConfig;
    this._sourceMapStore = (_istanbulLibSourceMaps || _load_istanbulLibSourceMaps()).default.createSourceMapStore();
  }

  onTestResult(test, testResult, aggregatedResults) {
    if (testResult.coverage) {
      this._coverageMap.merge(testResult.coverage);
      // Remove coverage data to free up some memory.
      delete testResult.coverage;

      Object.keys(testResult.sourceMaps).forEach(sourcePath => {
        let inputSourceMap;
        try {
          const coverage = this._coverageMap.fileCoverageFor(sourcePath);

          var _coverage$toJSON = coverage.toJSON();

          inputSourceMap = _coverage$toJSON.inputSourceMap;
        } finally {
          if (inputSourceMap) {
            this._sourceMapStore.registerMap(sourcePath, inputSourceMap);
          } else {
            this._sourceMapStore.registerURL(sourcePath, testResult.sourceMaps[sourcePath]);
          }
        }
      });
    }
  }

  onRunComplete(contexts, aggregatedResults) {
    var _this = this;

    return _asyncToGenerator(function* () {
      yield _this._addUntestedFiles(_this._globalConfig, contexts);

      var _sourceMapStore$trans = _this._sourceMapStore.transformCoverage(_this._coverageMap);

      const map = _sourceMapStore$trans.map,
            sourceFinder = _sourceMapStore$trans.sourceFinder;


      const reporter = (0, (_istanbulApi || _load_istanbulApi()).createReporter)();
      try {
        if (_this._globalConfig.coverageDirectory) {
          reporter.dir = _this._globalConfig.coverageDirectory;
        }

        let coverageReporters = _this._globalConfig.coverageReporters || [];
        if (!_this._globalConfig.useStderr && coverageReporters.length && coverageReporters.indexOf('text') === -1) {
          coverageReporters = coverageReporters.concat(['text-summary']);
        }

        reporter.addAll(coverageReporters);
        reporter.write(map, sourceFinder && { sourceFinder });
        aggregatedResults.coverageMap = map;
      } catch (e) {
        console.error((_chalk || _load_chalk()).default.red(`
        Failed to write coverage reports:
        ERROR: ${e.toString()}
        STACK: ${e.stack}
      `));
      }

      _this._checkThreshold(_this._globalConfig, map);
    })();
  }

  _addUntestedFiles(globalConfig, contexts) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      const files = [];

      contexts.forEach(function (context) {
        const config = context.config;
        if (globalConfig.collectCoverageFrom && globalConfig.collectCoverageFrom.length) {
          context.hasteFS.matchFilesWithGlob(globalConfig.collectCoverageFrom, config.rootDir).forEach(function (filePath) {
            return files.push({
              config,
              path: filePath
            });
          });
        }
      });

      if (!files.length) {
        return;
      }

      if ((_jestUtil || _load_jestUtil()).isInteractive) {
        process.stderr.write(RUNNING_TEST_COLOR('Running coverage on untested files...'));
      }

      let worker;

      if (_this2._globalConfig.maxWorkers <= 1) {
        worker = require('./coverage_worker');
      } else {
        // $FlowFixMe: assignment of a worker with custom properties.
        worker = new (_jestWorker || _load_jestWorker()).default(require.resolve('./coverage_worker'), {
          exposedMethods: ['worker'],
          maxRetries: 2,
          numWorkers: _this2._globalConfig.maxWorkers
        });
      }

      const instrumentation = files.map((() => {
        var _ref = _asyncToGenerator(function* (fileObj) {
          const filename = fileObj.path;
          const config = fileObj.config;

          if (!_this2._coverageMap.data[filename]) {
            try {
              const result = yield worker.worker({
                config,
                globalConfig,
                path: filename
              });

              if (result) {
                _this2._coverageMap.addFileCoverage(result.coverage);

                if (result.sourceMapPath) {
                  _this2._sourceMapStore.registerURL(filename, result.sourceMapPath);
                }
              }
            } catch (error) {
              console.error((_chalk || _load_chalk()).default.red([`Failed to collect coverage from ${filename}`, `ERROR: ${error.message}`, `STACK: ${error.stack}`].join('\n')));
            }
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      })());

      try {
        yield Promise.all(instrumentation);
      } catch (err) {
        // Do nothing; errors were reported earlier to the console.
      }

      if ((_jestUtil || _load_jestUtil()).isInteractive) {
        (0, (_jestUtil || _load_jestUtil()).clearLine)(process.stderr);
      }

      if (worker && typeof worker.end === 'function') {
        worker.end();
      }
    })();
  }

  _checkThreshold(globalConfig, map) {
    if (globalConfig.coverageThreshold) {
      function check(name, thresholds, actuals) {
        return ['statements', 'branches', 'lines', 'functions'].reduce((errors, key) => {
          const actual = actuals[key].pct;
          const actualUncovered = actuals[key].total - actuals[key].covered;
          const threshold = thresholds[key];

          if (threshold != null) {
            if (threshold < 0) {
              if (threshold * -1 < actualUncovered) {
                errors.push(`Jest: Uncovered count for ${key} (${actualUncovered})` + `exceeds ${name} threshold (${-1 * threshold})`);
              }
            } else if (actual < threshold) {
              errors.push(`Jest: "${name}" coverage threshold for ${key} (${threshold}%) not met: ${actual}%`);
            }
          }
          return errors;
        }, []);
      }

      const THRESHOLD_GROUP_TYPES = {
        GLOB: 'glob',
        GLOBAL: 'global',
        PATH: 'path'
      };
      const coveredFiles = map.files();
      const thresholdGroups = Object.keys(globalConfig.coverageThreshold);
      const numThresholdGroups = thresholdGroups.length;
      const groupTypeByThresholdGroup = {};
      const filesByGlob = {};

      const coveredFilesSortedIntoThresholdGroup = coveredFiles.map(file => {
        for (let i = 0; i < numThresholdGroups; i++) {
          const thresholdGroup = thresholdGroups[i];
          const absoluteThresholdGroup = (_path || _load_path()).default.resolve(thresholdGroup);

          // The threshold group might be a path:

          if (file.indexOf(absoluteThresholdGroup) === 0) {
            groupTypeByThresholdGroup[thresholdGroup] = THRESHOLD_GROUP_TYPES.PATH;
            return [file, thresholdGroup];
          }

          // If the threshold group is not a path it might be a glob:

          // Note: glob.sync is slow. By memoizing the files matching each glob
          // (rather than recalculating it for each covered file) we save a tonne
          // of execution time.
          if (filesByGlob[absoluteThresholdGroup] === undefined) {
            filesByGlob[absoluteThresholdGroup] = (_glob || _load_glob()).default.sync(absoluteThresholdGroup).map(filePath => (_path || _load_path()).default.resolve(filePath));
          }

          if (filesByGlob[absoluteThresholdGroup].indexOf(file) > -1) {
            groupTypeByThresholdGroup[thresholdGroup] = THRESHOLD_GROUP_TYPES.GLOB;
            return [file, thresholdGroup];
          }
        }

        // Neither a glob or a path? Toss it in global if there's a global threshold:
        if (thresholdGroups.indexOf(THRESHOLD_GROUP_TYPES.GLOBAL) > -1) {
          groupTypeByThresholdGroup[THRESHOLD_GROUP_TYPES.GLOBAL] = THRESHOLD_GROUP_TYPES.GLOBAL;
          return [file, THRESHOLD_GROUP_TYPES.GLOBAL];
        }

        // A covered file that doesn't have a threshold:
        return [file, undefined];
      });

      const getFilesInThresholdGroup = thresholdGroup => coveredFilesSortedIntoThresholdGroup.filter(fileAndGroup => fileAndGroup[1] === thresholdGroup).map(fileAndGroup => fileAndGroup[0]);

      function combineCoverage(filePaths) {
        return filePaths.map(filePath => map.fileCoverageFor(filePath)).reduce((combinedCoverage, nextFileCoverage) => {
          if (combinedCoverage === undefined || combinedCoverage === null) {
            return nextFileCoverage.toSummary();
          }
          return combinedCoverage.merge(nextFileCoverage.toSummary());
        }, undefined);
      }

      let errors = [];

      thresholdGroups.forEach(thresholdGroup => {
        switch (groupTypeByThresholdGroup[thresholdGroup]) {
          case THRESHOLD_GROUP_TYPES.GLOBAL:
            {
              const coverage = combineCoverage(getFilesInThresholdGroup(THRESHOLD_GROUP_TYPES.GLOBAL));
              if (coverage) {
                errors = errors.concat(check(thresholdGroup, globalConfig.coverageThreshold[thresholdGroup], coverage));
              }
              break;
            }
          case THRESHOLD_GROUP_TYPES.PATH:
            {
              const coverage = combineCoverage(getFilesInThresholdGroup(thresholdGroup));
              if (coverage) {
                errors = errors.concat(check(thresholdGroup, globalConfig.coverageThreshold[thresholdGroup], coverage));
              }
              break;
            }
          case THRESHOLD_GROUP_TYPES.GLOB:
            getFilesInThresholdGroup(thresholdGroup).forEach(fileMatchingGlob => {
              errors = errors.concat(check(fileMatchingGlob, globalConfig.coverageThreshold[thresholdGroup], map.fileCoverageFor(fileMatchingGlob).toSummary()));
            });
            break;
          default:
            errors = errors.concat(`Jest: Coverage data for ${thresholdGroup} was not found.`);
        }
      });

      errors = errors.filter(err => err !== undefined && err !== null && err.length > 0);

      if (errors.length > 0) {
        this.log(`${FAIL_COLOR(errors.join('\n'))}`);
        this._setError(new Error(errors.join('\n')));
      }
    }
  }

  // Only exposed for the internal runner. Should not be used
  getCoverageMap() {
    return this._coverageMap;
  }
}
exports.default = CoverageReporter;