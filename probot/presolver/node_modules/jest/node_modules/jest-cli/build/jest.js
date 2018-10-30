'use strict';

var _package;

function _load_package() {
  return _package = require('../package.json');
}

var _search_source;

function _load_search_source() {
  return _search_source = _interopRequireDefault(require('./search_source'));
}

var _test_scheduler;

function _load_test_scheduler() {
  return _test_scheduler = _interopRequireDefault(require('./test_scheduler'));
}

var _test_watcher;

function _load_test_watcher() {
  return _test_watcher = _interopRequireDefault(require('./test_watcher'));
}

var _cli;

function _load_cli() {
  return _cli = require('./cli');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  SearchSource: (_search_source || _load_search_source()).default,
  TestScheduler: (_test_scheduler || _load_test_scheduler()).default,
  TestWatcher: (_test_watcher || _load_test_watcher()).default,
  getVersion: () => (_package || _load_package()).version,
  run: (_cli || _load_cli()).run,
  runCLI: (_cli || _load_cli()).runCLI
}; /**
    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * 
    */