"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = hyphenateStyleName;

var _hyphenate = _interopRequireDefault(require("./hyphenate"));

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;

function hyphenateStyleName(string) {
  return (0, _hyphenate.default)(string).replace(msPattern, '-ms-');
}

module.exports = exports["default"];