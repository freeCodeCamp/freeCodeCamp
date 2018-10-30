'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replacePathSepForRegex = exports.escapeStrForRegex = exports.escapePathForRegex = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const escapePathForRegex = exports.escapePathForRegex = dir => {
  if (_path2.default.sep === '\\') {
    // Replace "\" with "/" so it's not escaped by escapeStrForRegex.
    // replacePathSepForRegex will convert it back.
    dir = dir.replace(/\\/g, '/');
  }
  return replacePathSepForRegex(escapeStrForRegex(dir));
}; /**
    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * 
    */

const escapeStrForRegex = exports.escapeStrForRegex = string => string.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');

const replacePathSepForRegex = exports.replacePathSepForRegex = string => {
  if (_path2.default.sep === '\\') {
    return string.replace(/(\/|\\(?!\.))/g, '\\\\');
  }
  return string;
};