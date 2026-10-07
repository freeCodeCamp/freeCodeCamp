/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var deepFreeze = require('../util/deepFreeze');

var getRequestIdentifier = require('../util/getRequestIdentifier');

var _require = require('./RelayConcreteVariables'),
    getOperationVariables = _require.getOperationVariables;

var _require2 = require('./RelayModernSelector'),
    createNormalizationSelector = _require2.createNormalizationSelector,
    createReaderSelector = _require2.createReaderSelector;

var _require3 = require('./RelayStoreUtils'),
    ROOT_ID = _require3.ROOT_ID;

/**
 * Creates an instance of the `OperationDescriptor` type defined in
 * `RelayStoreTypes` given an operation and some variables. The input variables
 * are filtered to exclude variables that do not match defined arguments on the
 * operation, and default values are populated for null values.
 */
function createOperationDescriptor(request, variables, cacheConfig) {
  var dataID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ROOT_ID;
  var operation = request.operation;
  var operationVariables = getOperationVariables(operation, variables);
  var requestDescriptor = createRequestDescriptor(request, operationVariables, cacheConfig);
  var operationDescriptor = {
    fragment: createReaderSelector(request.fragment, dataID, operationVariables, requestDescriptor),
    request: requestDescriptor,
    root: createNormalizationSelector(operation, dataID, operationVariables)
  };

  if (process.env.NODE_ENV !== "production") {
    // Freezing properties short-circuits a deepFreeze of snapshots that contain
    // an OperationDescriptor via their selector's owner, avoiding stack
    // overflow on larger queries.
    Object.freeze(operationDescriptor.fragment);
    Object.freeze(operationDescriptor.root);
    Object.freeze(operationDescriptor);
  }

  return operationDescriptor;
}

function createRequestDescriptor(request, variables, cacheConfig) {
  var requestDescriptor = {
    identifier: getRequestIdentifier(request.params, variables),
    node: request,
    variables: variables,
    cacheConfig: cacheConfig
  };

  if (process.env.NODE_ENV !== "production") {
    deepFreeze(variables);
    Object.freeze(request);
    Object.freeze(requestDescriptor);
  }

  return requestDescriptor;
}

module.exports = {
  createOperationDescriptor: createOperationDescriptor,
  createRequestDescriptor: createRequestDescriptor
};