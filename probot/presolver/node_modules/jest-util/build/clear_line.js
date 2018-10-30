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
/* global stream$Writable */

exports.default = stream => {
  if (process.stdout.isTTY) {
    stream.write('\x1b[999D\x1b[K');
  }
};