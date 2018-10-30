'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logDebugMessages;

var _package;

function _load_package() {
  return _package = require('../../package.json');
}

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function logDebugMessages(globalConfig, configs, outputStream) {
  const output = {
    configs,
    globalConfig,
    version: (_package || _load_package()).version
  };
  outputStream.write(JSON.stringify(output, null, '  ') + '\n');
}