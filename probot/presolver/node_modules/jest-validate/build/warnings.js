'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unknownOptionWarning = undefined;

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _utils;

function _load_utils() {
  return _utils = require('./utils');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const unknownOptionWarning = exports.unknownOptionWarning = (config, exampleConfig, option, options) => {
  const didYouMean = (0, (_utils || _load_utils()).createDidYouMeanMessage)(option, Object.keys(exampleConfig));
  const message = `  Unknown option ${(_chalk || _load_chalk()).default.bold(`"${option}"`)} with value ${(_chalk || _load_chalk()).default.bold((0, (_utils || _load_utils()).format)(config[option]))} was found.` + (didYouMean && ` ${didYouMean}`) + `\n  This is probably a typing mistake. Fixing it will remove this message.`;

  const comment = options.comment;
  const name = options.title && options.title.warning || (_utils || _load_utils()).WARNING;

  (0, (_utils || _load_utils()).logValidationWarning)(name, message, comment);
}; /**
    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * 
    */