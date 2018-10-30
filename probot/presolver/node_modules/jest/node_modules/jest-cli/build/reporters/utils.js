'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapAnsiString = exports.getSummary = exports.pluralize = exports.relativePath = exports.formatTestPath = exports.trimAndFormatPath = exports.printDisplayName = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _slash;

function _load_slash() {
  return _slash = _interopRequireDefault(require('slash'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PROGRESS_BAR_WIDTH = 40;

const printDisplayName = exports.printDisplayName = config => {
  const displayName = config.displayName;


  if (displayName) {
    return (_chalk || _load_chalk()).default.supportsColor ? (_chalk || _load_chalk()).default.reset.inverse.white(` ${displayName} `) : displayName;
  }

  return '';
};

const trimAndFormatPath = exports.trimAndFormatPath = (pad, config, testPath, columns) => {
  const maxLength = columns - pad;
  const relative = relativePath(config, testPath);
  const basename = relative.basename;
  let dirname = relative.dirname;

  // length is ok

  if ((dirname + (_path || _load_path()).default.sep + basename).length <= maxLength) {
    return (0, (_slash || _load_slash()).default)((_chalk || _load_chalk()).default.dim(dirname + (_path || _load_path()).default.sep) + (_chalk || _load_chalk()).default.bold(basename));
  }

  // we can fit trimmed dirname and full basename
  const basenameLength = basename.length;
  if (basenameLength + 4 < maxLength) {
    const dirnameLength = maxLength - 4 - basenameLength;
    dirname = '...' + dirname.slice(dirname.length - dirnameLength, dirname.length);
    return (0, (_slash || _load_slash()).default)((_chalk || _load_chalk()).default.dim(dirname + (_path || _load_path()).default.sep) + (_chalk || _load_chalk()).default.bold(basename));
  }

  if (basenameLength + 4 === maxLength) {
    return (0, (_slash || _load_slash()).default)((_chalk || _load_chalk()).default.dim('...' + (_path || _load_path()).default.sep) + (_chalk || _load_chalk()).default.bold(basename));
  }

  // can't fit dirname, but can fit trimmed basename
  return (0, (_slash || _load_slash()).default)((_chalk || _load_chalk()).default.bold('...' + basename.slice(basename.length - maxLength - 4, basename.length)));
};

const formatTestPath = exports.formatTestPath = (config, testPath) => {
  var _relativePath = relativePath(config, testPath);

  const dirname = _relativePath.dirname,
        basename = _relativePath.basename;

  return (_chalk || _load_chalk()).default.dim(dirname + (_path || _load_path()).default.sep) + (_chalk || _load_chalk()).default.bold(basename);
};

const relativePath = exports.relativePath = (config, testPath) => {
  // this function can be called with ProjectConfigs or GlobalConfigs. GlobalConfigs
  // do not have config.cwd, only config.rootDir. Try using config.cwd, fallback
  // to config.rootDir. (Also, some unit just use config.rootDir, which is ok)
  testPath = (_path || _load_path()).default.relative(config.cwd || config.rootDir, testPath);
  const dirname = (_path || _load_path()).default.dirname(testPath);
  const basename = (_path || _load_path()).default.basename(testPath);
  return { basename, dirname };
};

const pluralize = exports.pluralize = (word, count) => `${count} ${word}${count === 1 ? '' : 's'}`;

const getSummary = exports.getSummary = (aggregatedResults, options) => {
  let runTime = (Date.now() - aggregatedResults.startTime) / 1000;
  if (options && options.roundTime) {
    runTime = Math.floor(runTime);
  }

  const estimatedTime = options && options.estimatedTime || 0;
  const snapshotResults = aggregatedResults.snapshot;
  const snapshotsAdded = snapshotResults.added;
  const snapshotsFailed = snapshotResults.unmatched;
  const snapshotsPassed = snapshotResults.matched;
  const snapshotsTotal = snapshotResults.total;
  const snapshotsUpdated = snapshotResults.updated;
  const suitesFailed = aggregatedResults.numFailedTestSuites;
  const suitesPassed = aggregatedResults.numPassedTestSuites;
  const suitesPending = aggregatedResults.numPendingTestSuites;
  const suitesRun = suitesFailed + suitesPassed;
  const suitesTotal = aggregatedResults.numTotalTestSuites;
  const testsFailed = aggregatedResults.numFailedTests;
  const testsPassed = aggregatedResults.numPassedTests;
  const testsPending = aggregatedResults.numPendingTests;
  const testsTotal = aggregatedResults.numTotalTests;
  const width = options && options.width || 0;

  const suites = (_chalk || _load_chalk()).default.bold('Test Suites: ') + (suitesFailed ? (_chalk || _load_chalk()).default.bold.red(`${suitesFailed} failed`) + ', ' : '') + (suitesPending ? (_chalk || _load_chalk()).default.bold.yellow(`${suitesPending} skipped`) + ', ' : '') + (suitesPassed ? (_chalk || _load_chalk()).default.bold.green(`${suitesPassed} passed`) + ', ' : '') + (suitesRun !== suitesTotal ? suitesRun + ' of ' + suitesTotal : suitesTotal) + ` total`;

  const tests = (_chalk || _load_chalk()).default.bold('Tests:       ') + (testsFailed ? (_chalk || _load_chalk()).default.bold.red(`${testsFailed} failed`) + ', ' : '') + (testsPending ? (_chalk || _load_chalk()).default.bold.yellow(`${testsPending} skipped`) + ', ' : '') + (testsPassed ? (_chalk || _load_chalk()).default.bold.green(`${testsPassed} passed`) + ', ' : '') + `${testsTotal} total`;

  const snapshots = (_chalk || _load_chalk()).default.bold('Snapshots:   ') + (snapshotsFailed ? (_chalk || _load_chalk()).default.bold.red(`${snapshotsFailed} failed`) + ', ' : '') + (snapshotsUpdated ? (_chalk || _load_chalk()).default.bold.green(`${snapshotsUpdated} updated`) + ', ' : '') + (snapshotsAdded ? (_chalk || _load_chalk()).default.bold.green(`${snapshotsAdded} added`) + ', ' : '') + (snapshotsPassed ? (_chalk || _load_chalk()).default.bold.green(`${snapshotsPassed} passed`) + ', ' : '') + `${snapshotsTotal} total`;

  const time = renderTime(runTime, estimatedTime, width);
  return [suites, tests, snapshots, time].join('\n');
};

const renderTime = (runTime, estimatedTime, width) => {
  // If we are more than one second over the estimated time, highlight it.
  const renderedTime = estimatedTime && runTime >= estimatedTime + 1 ? (_chalk || _load_chalk()).default.bold.yellow(runTime + 's') : runTime + 's';
  let time = (_chalk || _load_chalk()).default.bold(`Time:`) + `        ${renderedTime}`;
  if (runTime < estimatedTime) {
    time += `, estimated ${estimatedTime}s`;
  }

  // Only show a progress bar if the test run is actually going to take
  // some time.
  if (estimatedTime > 2 && runTime < estimatedTime && width) {
    const availableWidth = Math.min(PROGRESS_BAR_WIDTH, width);
    const length = Math.min(Math.floor(runTime / estimatedTime * availableWidth), availableWidth);
    if (availableWidth >= 2) {
      time += '\n' + (_chalk || _load_chalk()).default.green('█').repeat(length) + (_chalk || _load_chalk()).default.white('█').repeat(availableWidth - length);
    }
  }
  return time;
};

// word-wrap a string that contains ANSI escape sequences.
// ANSI escape sequences do not add to the string length.
const wrapAnsiString = exports.wrapAnsiString = (string, terminalWidth) => {
  if (terminalWidth === 0) {
    // if the terminal width is zero, don't bother word-wrapping
    return string;
  }

  const ANSI_REGEXP = /[\u001b\u009b]\[\d{1,2}m/g;
  const tokens = [];
  let lastIndex = 0;
  let match;

  while (match = ANSI_REGEXP.exec(string)) {
    const ansi = match[0];
    const index = match['index'];
    if (index != lastIndex) {
      tokens.push(['string', string.slice(lastIndex, index)]);
    }
    tokens.push(['ansi', ansi]);
    lastIndex = index + ansi.length;
  }

  if (lastIndex != string.length - 1) {
    tokens.push(['string', string.slice(lastIndex, string.length)]);
  }

  let lastLineLength = 0;

  return tokens.reduce((lines, _ref) => {
    var _ref2 = _slicedToArray(_ref, 2);

    let kind = _ref2[0],
        token = _ref2[1];

    if (kind === 'string') {
      if (lastLineLength + token.length > terminalWidth) {
        while (token.length) {
          const chunk = token.slice(0, terminalWidth - lastLineLength);
          const remaining = token.slice(terminalWidth - lastLineLength, token.length);
          lines[lines.length - 1] += chunk;
          lastLineLength += chunk.length;
          token = remaining;
          if (token.length) {
            lines.push('');
            lastLineLength = 0;
          }
        }
      } else {
        lines[lines.length - 1] += token;
        lastLineLength += token.length;
      }
    } else {
      lines[lines.length - 1] += token;
    }

    return lines;
  }, ['']).join('\n');
};