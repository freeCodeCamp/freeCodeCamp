'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const path = require('path');

let normalizePathSep;
if (path.sep === '/') {
  normalizePathSep = filePath => filePath;
} else {
  normalizePathSep = filePath => filePath.replace(/\//g, path.sep);
}

exports.default = normalizePathSep;