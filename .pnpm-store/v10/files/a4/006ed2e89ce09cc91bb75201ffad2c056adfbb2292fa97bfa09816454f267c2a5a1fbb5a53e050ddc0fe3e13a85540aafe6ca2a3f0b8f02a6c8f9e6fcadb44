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

const deepFreeze = require('../util/deepFreeze');
const getRequestIdentifier = require('../util/getRequestIdentifier');

const {getOperationVariables} = require('./RelayConcreteVariables');
const {
  createNormalizationSelector,
  createReaderSelector,
} = require('./RelayModernSelector');
const {ROOT_ID} = require('./RelayStoreUtils');

import type {ConcreteRequest} from '../util/RelayConcreteNode';
import type {
  CacheConfig,
  DataID,
  Variables,
  VariablesOf,
  OperationType,
} from '../util/RelayRuntimeTypes';
import type {OperationDescriptor, RequestDescriptor} from './RelayStoreTypes';

/**
 * Creates an instance of the `OperationDescriptor` type defined in
 * `RelayStoreTypes` given an operation and some variables. The input variables
 * are filtered to exclude variables that do not match defined arguments on the
 * operation, and default values are populated for null values.
 */
function createOperationDescriptor<TQuery: OperationType>(
  request: ConcreteRequest,
  variables: VariablesOf<TQuery>,
  cacheConfig?: ?CacheConfig,
  dataID?: DataID = ROOT_ID,
): OperationDescriptor {
  const operation = request.operation;
  const operationVariables = getOperationVariables(operation, variables);
  const requestDescriptor = createRequestDescriptor(
    request,
    operationVariables,
    cacheConfig,
  );
  const operationDescriptor = {
    fragment: createReaderSelector(
      request.fragment,
      dataID,
      operationVariables,
      requestDescriptor,
    ),
    request: requestDescriptor,
    root: createNormalizationSelector(operation, dataID, operationVariables),
  };

  if (__DEV__) {
    // Freezing properties short-circuits a deepFreeze of snapshots that contain
    // an OperationDescriptor via their selector's owner, avoiding stack
    // overflow on larger queries.
    Object.freeze(operationDescriptor.fragment);
    Object.freeze(operationDescriptor.root);
    Object.freeze(operationDescriptor);
  }
  return operationDescriptor;
}

function createRequestDescriptor(
  request: ConcreteRequest,
  variables: Variables,
  cacheConfig?: ?CacheConfig,
): RequestDescriptor {
  const requestDescriptor = {
    identifier: getRequestIdentifier(request.params, variables),
    node: request,
    variables: variables,
    cacheConfig: cacheConfig,
  };
  if (__DEV__) {
    deepFreeze(variables);
    Object.freeze(request);
    Object.freeze(requestDescriptor);
  }
  return requestDescriptor;
}

module.exports = {
  createOperationDescriptor,
  createRequestDescriptor,
};
