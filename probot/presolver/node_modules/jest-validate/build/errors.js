'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMessage = undefined;

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _jestGetType;

function _load_jestGetType() {
  return _jestGetType = _interopRequireDefault(require('jest-get-type'));
}

var _utils;

function _load_utils() {
  return _utils = require('./utils');
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

const errorMessage = exports.errorMessage = (option, received, defaultValue, options) => {
  const message = `  Option ${(_chalk || _load_chalk()).default.bold(`"${option}"`)} must be of type:
    ${(_chalk || _load_chalk()).default.bold.green((0, (_jestGetType || _load_jestGetType()).default)(defaultValue))}
  but instead received:
    ${(_chalk || _load_chalk()).default.bold.red((0, (_jestGetType || _load_jestGetType()).default)(received))}

  Example:
  {
    ${(_chalk || _load_chalk()).default.bold(`"${option}"`)}: ${(_chalk || _load_chalk()).default.bold((0, (_utils || _load_utils()).format)(defaultValue))}
  }`;

  const comment = options.comment;
  const name = options.title && options.title.error || (_utils || _load_utils()).ERROR;

  throw new (_utils || _load_utils()).ValidationError(name, message, comment);
};