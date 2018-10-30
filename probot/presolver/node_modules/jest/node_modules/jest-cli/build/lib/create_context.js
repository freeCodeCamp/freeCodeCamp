'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jestRuntime;

function _load_jestRuntime() {
  return _jestRuntime = _interopRequireDefault(require('jest-runtime'));
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

exports.default = (config, _ref) => {
  let hasteFS = _ref.hasteFS,
      moduleMap = _ref.moduleMap;
  return {
    config,
    hasteFS,
    moduleMap,
    resolver: (_jestRuntime || _load_jestRuntime()).default.createResolver(config, moduleMap)
  };
};