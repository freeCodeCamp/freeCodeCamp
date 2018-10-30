'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.worker = worker;

var _exit;

function _load_exit() {
  return _exit = _interopRequireDefault(require('exit'));
}

var _fs;

function _load_fs() {
  return _fs = _interopRequireDefault(require('fs'));
}

var _generate_empty_coverage;

function _load_generate_empty_coverage() {
  return _generate_empty_coverage = _interopRequireDefault(require('../generate_empty_coverage'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Make sure uncaught errors are logged before we exit.
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

process.on('uncaughtException', err => {
  console.error(err.stack);
  (0, (_exit || _load_exit()).default)(1);
});

function worker(_ref) {
  let config = _ref.config,
      globalConfig = _ref.globalConfig,
      path = _ref.path;

  return (0, (_generate_empty_coverage || _load_generate_empty_coverage()).default)((_fs || _load_fs()).default.readFileSync(path, 'utf8'), path, globalConfig, config);
}