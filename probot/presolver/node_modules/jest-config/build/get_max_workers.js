'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMaxWorkers;

var _os;

function _load_os() {
  return _os = _interopRequireDefault(require('os'));
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

function getMaxWorkers(argv) {
  if (argv.runInBand) {
    return 1;
  } else if (argv.maxWorkers) {
    return parseInt(argv.maxWorkers, 10);
  } else {
    const cpus = (_os || _load_os()).default.cpus().length;
    return Math.max(argv.watch ? Math.floor(cpus / 2) : cpus - 1, 1);
  }
}