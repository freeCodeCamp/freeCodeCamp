'use strict';

var _mkdirp;

function _load_mkdirp() {
  return _mkdirp = _interopRequireDefault(require('mkdirp'));
}

var _buffered_console;

function _load_buffered_console() {
  return _buffered_console = _interopRequireDefault(require('./buffered_console'));
}

var _clear_line;

function _load_clear_line() {
  return _clear_line = _interopRequireDefault(require('./clear_line'));
}

var _Console;

function _load_Console() {
  return _Console = _interopRequireDefault(require('./Console'));
}

var _fake_timers;

function _load_fake_timers() {
  return _fake_timers = _interopRequireDefault(require('./fake_timers'));
}

var _format_test_results;

function _load_format_test_results() {
  return _format_test_results = _interopRequireDefault(require('./format_test_results'));
}

var _get_failed_snapshot_tests;

function _load_get_failed_snapshot_tests() {
  return _get_failed_snapshot_tests = _interopRequireDefault(require('./get_failed_snapshot_tests'));
}

var _get_console_output;

function _load_get_console_output() {
  return _get_console_output = _interopRequireDefault(require('./get_console_output'));
}

var _install_common_globals;

function _load_install_common_globals() {
  return _install_common_globals = _interopRequireDefault(require('./install_common_globals'));
}

var _null_console;

function _load_null_console() {
  return _null_console = _interopRequireDefault(require('./null_console'));
}

var _is_interative;

function _load_is_interative() {
  return _is_interative = _interopRequireDefault(require('./is_interative'));
}

var _get_callsite;

function _load_get_callsite() {
  return _get_callsite = _interopRequireDefault(require('./get_callsite'));
}

var _set_global;

function _load_set_global() {
  return _set_global = _interopRequireDefault(require('./set_global'));
}

var _deep_cyclic_copy;

function _load_deep_cyclic_copy() {
  return _deep_cyclic_copy = _interopRequireDefault(require('./deep_cyclic_copy'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const createDirectory = path => {
  try {
    (_mkdirp || _load_mkdirp()).default.sync(path, '777');
  } catch (e) {
    if (e.code !== 'EEXIST') {
      throw e;
    }
  }
};

module.exports = {
  BufferedConsole: (_buffered_console || _load_buffered_console()).default,
  Console: (_Console || _load_Console()).default,
  FakeTimers: (_fake_timers || _load_fake_timers()).default,
  NullConsole: (_null_console || _load_null_console()).default,
  clearLine: (_clear_line || _load_clear_line()).default,
  createDirectory,
  deepCyclicCopy: (_deep_cyclic_copy || _load_deep_cyclic_copy()).default,
  formatTestResults: (_format_test_results || _load_format_test_results()).default,
  getCallsite: (_get_callsite || _load_get_callsite()).default,
  getConsoleOutput: (_get_console_output || _load_get_console_output()).default,
  getFailedSnapshotTests: (_get_failed_snapshot_tests || _load_get_failed_snapshot_tests()).default,
  installCommonGlobals: (_install_common_globals || _load_install_common_globals()).default,
  isInteractive: (_is_interative || _load_is_interative()).default,
  setGlobal: (_set_global || _load_set_global()).default
};