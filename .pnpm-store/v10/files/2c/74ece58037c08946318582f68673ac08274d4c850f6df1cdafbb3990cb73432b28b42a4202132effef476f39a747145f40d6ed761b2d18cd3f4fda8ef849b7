/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const t = require('@babel/types');

module.exports = function validateOutputAst(ast) {
  const seenNodes = new Set();
  t.traverseFast(ast, function enter(node) {
    if (seenNodes.has(node)) {
      throw new Error('Found a duplicate node in the output, which can cause'
        + ' undefined behavior in Babel.');
    }
    seenNodes.add(node);
  })
}
