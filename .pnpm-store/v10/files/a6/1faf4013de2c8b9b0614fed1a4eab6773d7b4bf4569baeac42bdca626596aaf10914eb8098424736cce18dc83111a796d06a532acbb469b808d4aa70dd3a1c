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

function createPrintRequireModuleDependency(): string => string {
  return moduleName => `require('./${moduleName}')`;
}

module.exports = createPrintRequireModuleDependency;
