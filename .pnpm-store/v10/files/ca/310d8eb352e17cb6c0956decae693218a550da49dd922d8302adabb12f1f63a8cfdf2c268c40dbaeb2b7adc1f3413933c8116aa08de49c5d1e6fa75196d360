"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = camelizeStyleName;

var _camelize = _interopRequireDefault(require("./camelize"));

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
 */
var msPattern = /^-ms-/;

function camelizeStyleName(string) {
  return (0, _camelize.default)(string.replace(msPattern, 'ms-'));
}

module.exports = exports["default"];