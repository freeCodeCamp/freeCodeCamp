'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
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
const activeFilters = function (globalConfig) {
  let delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '\n';
  const testNamePattern = globalConfig.testNamePattern,
        testPathPattern = globalConfig.testPathPattern;

  if (testNamePattern || testPathPattern) {
    const filters = [testPathPattern ? (_chalk || _load_chalk()).default.dim('filename ') + (_chalk || _load_chalk()).default.yellow('/' + testPathPattern + '/') : null, testNamePattern ? (_chalk || _load_chalk()).default.dim('test name ') + (_chalk || _load_chalk()).default.yellow('/' + testNamePattern + '/') : null].filter(f => f).join(', ');

    const messages = ['\n' + (_chalk || _load_chalk()).default.bold('Active Filters: ') + filters];

    return messages.filter(message => !!message).join(delimiter);
  }

  return '';
};

exports.default = activeFilters;