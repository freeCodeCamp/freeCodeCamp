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

declare function isPromise(p: mixed): boolean %checks(p instanceof Promise);

function isPromise(p: $FlowFixMe): boolean {
  return !!p && typeof p.then === 'function';
}

module.exports = isPromise;
