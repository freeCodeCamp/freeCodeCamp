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

var _require = require('../store/RelayModernOperationDescriptor'),
    createOperationDescriptor = _require.createOperationDescriptor;

var _require2 = require('./GraphQLTag'),
    getRequest = _require2.getRequest;

/**
 * A helper function to fetch the results of a query. Note that results for
 * fragment spreads are masked: fields must be explicitly listed in the query in
 * order to be accessible in the result object.
 */
function fetchQuery_DEPRECATED(environment, taggedNode, variables, cacheConfig) {
  var query = getRequest(taggedNode);

  if (query.params.operationKind !== 'query') {
    throw new Error('fetchQuery: Expected query operation');
  }

  var operation = createOperationDescriptor(query, variables, cacheConfig);
  return environment.execute({
    operation: operation
  }).map(function () {
    return environment.lookup(operation.fragment).data;
  }).toPromise();
}

module.exports = fetchQuery_DEPRECATED;