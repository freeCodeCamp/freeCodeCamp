'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setFromArgv;

var _utils;

function _load_utils() {
  return _utils = require('./utils');
}

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const specialArgs = ['_', '$0', 'h', 'help', 'config'];
function setFromArgv(options, argv) {
  // $FlowFixMe: Seems like flow doesn't approve of string values
  const argvToOptions = Object.keys(argv).filter(key => argv[key] !== undefined && specialArgs.indexOf(key) === -1).reduce((options, key) => {
    switch (key) {
      case 'coverage':
        options.collectCoverage = argv[key];
        break;
      case 'json':
        options.useStderr = argv[key];
        break;
      case 'watchAll':
        options.watch = false;
        options.watchAll = argv[key];
        break;
      case 'env':
        options.testEnvironment = argv[key];
        break;
      case 'config':
        break;
      case 'coverageThreshold':
      case 'globals':
      case 'moduleNameMapper':
      case 'transform':
      case 'haste':
        if ((0, (_utils || _load_utils()).isJSONString)(argv[key])) {
          options[key] = JSON.parse(argv[key]);
        }
        break;
      default:
        options[key] = argv[key];
    }
    return options;
  }, {});

  return Object.assign({}, options, (0, (_utils || _load_utils()).isJSONString)(argv.config) ? JSON.parse(argv.config) : null, argvToOptions);
}