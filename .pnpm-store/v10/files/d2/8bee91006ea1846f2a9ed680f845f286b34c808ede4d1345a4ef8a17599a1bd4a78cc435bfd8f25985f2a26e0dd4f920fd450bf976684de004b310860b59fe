/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

/**
 * Determine if a given value is an object that implements the `Environment`
 * interface defined in `RelayStoreTypes`.
 *
 * Use a sigil for detection to avoid a realm-specific instanceof check, and to
 * aid in module tree-shaking to avoid requiring all of RelayRuntime just to
 * detect its environment.
 */
function isRelayModernEnvironment(environment: mixed): boolean {
  return Boolean(environment && (environment: any)['@@RelayModernEnvironment']);
}

module.exports = isRelayModernEnvironment;
