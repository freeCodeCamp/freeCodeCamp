'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separateMessageFromStack = exports.formatResultsErrors = exports.formatStackTrace = exports.formatExecError = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _micromatch = require('micromatch');

var _micromatch2 = _interopRequireDefault(_micromatch);

var _slash = require('slash');

var _slash2 = _interopRequireDefault(_slash);

var _codeFrame = require('@babel/code-frame');

var _stackUtils = require('stack-utils');

var _stackUtils2 = _interopRequireDefault(_stackUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// stack utils tries to create pretty stack by making paths relative.
const stackUtils = new _stackUtils2.default({
  cwd: 'something which does not exist'
}); /**
     * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

let nodeInternals = [];

try {
  nodeInternals = _stackUtils2.default.nodeInternals()
  // this is to have the tests be the same in node 4 and node 6.
  // TODO: Remove when we drop support for node 4
  .concat(new RegExp('internal/process/next_tick.js'));
} catch (e) {
  // `StackUtils.nodeInternals()` fails in browsers. We don't need to remove
  // node internals in the browser though, so no issue.
}

const PATH_NODE_MODULES = `${_path2.default.sep}node_modules${_path2.default.sep}`;
const PATH_EXPECT_BUILD = `${_path2.default.sep}expect${_path2.default.sep}build${_path2.default.sep}`;

// filter for noisy stack trace lines
const JASMINE_IGNORE = /^\s+at(?:(?:.*?vendor\/|jasmine\-)|\s+jasmine\.buildExpectationResult)/;
const JEST_INTERNALS_IGNORE = /^\s+at.*?jest(-.*?)?(\/|\\)(build|node_modules|packages)(\/|\\)/;
const ANONYMOUS_FN_IGNORE = /^\s+at <anonymous>.*$/;
const ANONYMOUS_PROMISE_IGNORE = /^\s+at (new )?Promise \(<anonymous>\).*$/;
const ANONYMOUS_GENERATOR_IGNORE = /^\s+at Generator.next \(<anonymous>\).*$/;
const NATIVE_NEXT_IGNORE = /^\s+at next \(native\).*$/;
const TITLE_INDENT = '  ';
const MESSAGE_INDENT = '    ';
const STACK_INDENT = '      ';
const ANCESTRY_SEPARATOR = ' \u203A ';
const TITLE_BULLET = _chalk2.default.bold('\u25cf ');
const STACK_TRACE_COLOR = _chalk2.default.dim;
const STACK_PATH_REGEXP = /\s*at.*\(?(\:\d*\:\d*|native)\)?/;
const EXEC_ERROR_MESSAGE = 'Test suite failed to run';
const ERROR_TEXT = 'Error: ';

const trim = string => (string || '').trim();

// Some errors contain not only line numbers in stack traces
// e.g. SyntaxErrors can contain snippets of code, and we don't
// want to trim those, because they may have pointers to the column/character
// which will get misaligned.
const trimPaths = string => string.match(STACK_PATH_REGEXP) ? trim(string) : string;

const getRenderedCallsite = (fileContent, line) => {
  let renderedCallsite = (0, _codeFrame.codeFrameColumns)(fileContent, { start: { line } }, { highlightCode: true });

  renderedCallsite = renderedCallsite.split('\n').map(line => MESSAGE_INDENT + line).join('\n');

  renderedCallsite = `\n${renderedCallsite}\n`;
  return renderedCallsite;
};

// ExecError is an error thrown outside of the test suite (not inside an `it` or
// `before/after each` hooks). If it's thrown, none of the tests in the file
// are executed.
const formatExecError = exports.formatExecError = (testResult, config, options, testPath) => {
  let error = testResult.testExecError;
  if (!error || typeof error === 'number') {
    error = new Error(`Expected an Error, but "${String(error)}" was thrown`);
    error.stack = '';
  }

  var _error = error;
  let message = _error.message,
      stack = _error.stack;


  if (typeof error === 'string' || !error) {
    error || (error = 'EMPTY ERROR');
    message = '';
    stack = error;
  }

  const separated = separateMessageFromStack(stack || '');
  stack = separated.stack;

  if (separated.message.indexOf(trim(message)) !== -1) {
    // Often stack trace already contains the duplicate of the message
    message = separated.message;
  }

  message = message.split(/\n/).map(line => MESSAGE_INDENT + line).join('\n');
  stack = stack && !options.noStackTrace ? '\n' + formatStackTrace(stack, config, options, testPath) : '';

  if (message.match(/^\s*$/) && stack.match(/^\s*$/)) {
    // this can happen if an empty object is thrown.
    message = MESSAGE_INDENT + 'Error: No message was provided';
  }

  return TITLE_INDENT + TITLE_BULLET + EXEC_ERROR_MESSAGE + '\n\n' + message + stack + '\n';
};

const removeInternalStackEntries = (lines, options) => {
  let pathCounter = 0;

  return lines.filter(line => {
    if (ANONYMOUS_FN_IGNORE.test(line)) {
      return false;
    }

    if (ANONYMOUS_PROMISE_IGNORE.test(line)) {
      return false;
    }

    if (ANONYMOUS_GENERATOR_IGNORE.test(line)) {
      return false;
    }

    if (NATIVE_NEXT_IGNORE.test(line)) {
      return false;
    }

    if (nodeInternals.some(internal => internal.test(line))) {
      return false;
    }

    if (!STACK_PATH_REGEXP.test(line)) {
      return true;
    }

    if (JASMINE_IGNORE.test(line)) {
      return false;
    }

    if (++pathCounter === 1) {
      return true; // always keep the first line even if it's from Jest
    }

    if (options.noStackTrace) {
      return false;
    }

    if (JEST_INTERNALS_IGNORE.test(line)) {
      return false;
    }

    return true;
  });
};

const formatPaths = (config, options, relativeTestPath, line) => {
  // Extract the file path from the trace line.
  const match = line.match(/(^\s*at .*?\(?)([^()]+)(:[0-9]+:[0-9]+\)?.*$)/);
  if (!match) {
    return line;
  }

  let filePath = (0, _slash2.default)(_path2.default.relative(config.rootDir, match[2]));
  // highlight paths from the current test file
  if (config.testMatch && config.testMatch.length && (0, _micromatch2.default)(filePath, config.testMatch) || filePath === relativeTestPath) {
    filePath = _chalk2.default.reset.cyan(filePath);
  }
  return STACK_TRACE_COLOR(match[1]) + filePath + STACK_TRACE_COLOR(match[3]);
};

const getTopFrame = lines => {
  for (const line of lines) {
    if (line.includes(PATH_NODE_MODULES) || line.includes(PATH_EXPECT_BUILD)) {
      continue;
    }

    const parsedFrame = stackUtils.parseLine(line.trim());

    if (parsedFrame && parsedFrame.file) {
      return parsedFrame;
    }
  }

  return null;
};

const formatStackTrace = exports.formatStackTrace = (stack, config, options, testPath) => {
  let lines = stack.split(/\n/);
  let renderedCallsite = '';
  const relativeTestPath = testPath ? (0, _slash2.default)(_path2.default.relative(config.rootDir, testPath)) : null;
  lines = removeInternalStackEntries(lines, options);

  const topFrame = getTopFrame(lines);

  if (topFrame) {
    const filename = topFrame.file;

    if (_path2.default.isAbsolute(filename)) {
      let fileContent;
      try {
        // TODO: check & read HasteFS instead of reading the filesystem:
        // see: https://github.com/facebook/jest/pull/5405#discussion_r164281696
        fileContent = _fs2.default.readFileSync(filename, 'utf8');
        renderedCallsite = getRenderedCallsite(fileContent, topFrame.line);
      } catch (e) {
        // the file does not exist or is inaccessible, we ignore
      }
    }
  }

  const stacktrace = lines.map(line => STACK_INDENT + formatPaths(config, options, relativeTestPath, trimPaths(line))).join('\n');

  return renderedCallsite + stacktrace;
};

const formatResultsErrors = exports.formatResultsErrors = (testResults, config, options, testPath) => {
  const failedResults = testResults.reduce((errors, result) => {
    result.failureMessages.forEach(content => errors.push({ content, result }));
    return errors;
  }, []);

  if (!failedResults.length) {
    return null;
  }

  return failedResults.map((_ref) => {
    let result = _ref.result,
        content = _ref.content;

    var _separateMessageFromS = separateMessageFromStack(content);

    let message = _separateMessageFromS.message,
        stack = _separateMessageFromS.stack;

    stack = options.noStackTrace ? '' : STACK_TRACE_COLOR(formatStackTrace(stack, config, options, testPath)) + '\n';

    message = message.split(/\n/).map(line => MESSAGE_INDENT + line).join('\n');

    const title = _chalk2.default.bold.red(TITLE_INDENT + TITLE_BULLET + result.ancestorTitles.join(ANCESTRY_SEPARATOR) + (result.ancestorTitles.length ? ANCESTRY_SEPARATOR : '') + result.title) + '\n';

    return title + '\n' + message + '\n' + stack;
  }).join('\n');
};

// jasmine and worker farm sometimes don't give us access to the actual
// Error object, so we have to regexp out the message from the stack string
// to format it.
const separateMessageFromStack = exports.separateMessageFromStack = content => {
  if (!content) {
    return { message: '', stack: '' };
  }

  const messageMatch = content.match(/(^(.|\n)*?(?=\n\s*at\s.*\:\d*\:\d*))/);
  let message = messageMatch ? messageMatch[0] : 'Error';
  const stack = messageMatch ? content.slice(message.length) : content;
  // If the error is a plain error instead of a SyntaxError or TypeError
  // we remove it from the message because it is generally not useful.
  if (message.startsWith(ERROR_TEXT)) {
    message = message.substr(ERROR_TEXT.length);
  }
  return { message, stack };
};