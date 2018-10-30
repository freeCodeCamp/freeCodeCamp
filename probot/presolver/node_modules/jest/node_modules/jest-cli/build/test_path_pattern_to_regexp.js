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

// Because we serialize/deserialize globalConfig when we spawn workers,
// we can't pass regular expression. Using this shared function on both sides
// will ensure that we produce consistent regexp for testPathPattern.
exports.default = testPathPattern => new RegExp(testPathPattern, 'i');