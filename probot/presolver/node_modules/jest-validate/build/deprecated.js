'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecationWarning = undefined;

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

const deprecationMessage = (message, options) => {
  const comment = options.comment;
  const name = options.title && options.title.deprecation || (_utils || _load_utils()).DEPRECATION;

  (0, (_utils || _load_utils()).logValidationWarning)(name, message, comment);
};

const deprecationWarning = exports.deprecationWarning = (config, option, deprecatedOptions, options) => {
  if (option in deprecatedOptions) {
    deprecationMessage(deprecatedOptions[option](config), options);

    return true;
  }

  return false;
};