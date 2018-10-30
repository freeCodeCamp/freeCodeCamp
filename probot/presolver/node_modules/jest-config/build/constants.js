'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JEST_CONFIG = exports.PACKAGE_JSON = exports.DEFAULT_REPORTER_LABEL = exports.DEFAULT_JS_PATTERN = exports.NODE_MODULES = undefined;

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NODE_MODULES = exports.NODE_MODULES = (_path || _load_path()).default.sep + 'node_modules' + (_path || _load_path()).default.sep; /**
                                                                                                                                         * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                         *
                                                                                                                                         * This source code is licensed under the MIT license found in the
                                                                                                                                         * LICENSE file in the root directory of this source tree.
                                                                                                                                         *
                                                                                                                                         * 
                                                                                                                                         */

const DEFAULT_JS_PATTERN = exports.DEFAULT_JS_PATTERN = '^.+\\.jsx?$';
const DEFAULT_REPORTER_LABEL = exports.DEFAULT_REPORTER_LABEL = 'default';
const PACKAGE_JSON = exports.PACKAGE_JSON = 'package.json';
const JEST_CONFIG = exports.JEST_CONFIG = 'jest.config.js';