/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

function md5(str: string): string {
  return require('crypto')
    .createHash('md5')
    .update(str, 'utf8')
    .digest('hex');
}

module.exports = md5;
