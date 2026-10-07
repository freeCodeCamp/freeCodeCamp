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

var _require = require('./utils'),
    buildFragmentSpread = _require.buildFragmentSpread,
    buildOperationArgumentDefinitions = _require.buildOperationArgumentDefinitions;

function buildRefetchOperation(schema, fragment, queryName) {
  var queryType = schema.expectQueryType();

  if (!schema.areEqualTypes(fragment.type, queryType)) {
    return null;
  }

  return {
    identifierField: null,
    path: [],
    node: {
      argumentDefinitions: buildOperationArgumentDefinitions(fragment.argumentDefinitions),
      directives: [],
      kind: 'Root',
      loc: {
        kind: 'Derived',
        source: fragment.loc
      },
      metadata: null,
      name: queryName,
      operation: 'query',
      selections: [buildFragmentSpread(fragment)],
      type: queryType
    },
    transformedFragment: fragment
  };
}

module.exports = {
  description: 'the Query type',
  buildRefetchOperation: buildRefetchOperation
};