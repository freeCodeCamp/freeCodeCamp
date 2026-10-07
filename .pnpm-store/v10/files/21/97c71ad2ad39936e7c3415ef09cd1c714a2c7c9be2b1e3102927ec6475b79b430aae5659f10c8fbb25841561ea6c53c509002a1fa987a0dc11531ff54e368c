/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const invariant = require('invariant');
const stableCopy = require('./stableCopy');

import type {RequestParameters} from './RelayConcreteNode';
import type {Variables} from './RelayRuntimeTypes';

export type RequestIdentifier = string;

/**
 * Returns a stable identifier for the given pair of `RequestParameters` +
 * variables.
 */
function getRequestIdentifier(
  parameters: RequestParameters,
  variables: Variables,
): RequestIdentifier {
  const requestID =
    parameters.cacheID != null ? parameters.cacheID : parameters.id;
  invariant(
    requestID != null,
    'getRequestIdentifier: Expected request `%s` to have either a ' +
      'valid `id` or `cacheID` property',
    parameters.name,
  );
  return requestID + JSON.stringify(stableCopy(variables));
}

module.exports = getRequestIdentifier;
