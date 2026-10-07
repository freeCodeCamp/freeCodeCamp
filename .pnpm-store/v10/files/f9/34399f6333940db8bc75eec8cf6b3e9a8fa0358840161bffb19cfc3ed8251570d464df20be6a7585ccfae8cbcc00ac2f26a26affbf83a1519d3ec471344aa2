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

var _require = require('../../core/CompilerError'),
    createUserError = _require.createUserError;

var _require2 = require('./utils'),
    buildFragmentSpread = _require2.buildFragmentSpread,
    buildOperationArgumentDefinitions = _require2.buildOperationArgumentDefinitions;

var VIEWER_TYPE_NAME = 'Viewer';
var VIEWER_FIELD_NAME = 'viewer';

function buildRefetchOperation(schema, fragment, queryName) {
  if (schema.getTypeString(fragment.type) !== VIEWER_TYPE_NAME) {
    return null;
  } // Handle fragments on viewer


  var queryType = schema.expectQueryType();
  var viewerType = schema.getTypeFromString(VIEWER_TYPE_NAME);
  var viewerField = schema.getFieldConfig(schema.expectField(queryType, VIEWER_FIELD_NAME));
  var viewerFieldType = schema.getNullableType(viewerField.type);

  if (!(viewerType && schema.isObject(viewerType) && schema.isObject(viewerFieldType) && schema.areEqualTypes(viewerFieldType, viewerType) && viewerField.args.length === 0 && schema.areEqualTypes(fragment.type, viewerType))) {
    throw createUserError("Invalid use of @refetchable on fragment '".concat(fragment.name, "', check ") + "that your schema defines a 'Viewer' object type and has a " + "'viewer: Viewer' field on the query type.", [fragment.loc]);
  }

  return {
    identifierField: null,
    path: [VIEWER_FIELD_NAME],
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
      selections: [{
        alias: VIEWER_FIELD_NAME,
        args: [],
        connection: false,
        directives: [],
        handles: null,
        kind: 'LinkedField',
        loc: {
          kind: 'Derived',
          source: fragment.loc
        },
        metadata: null,
        name: VIEWER_FIELD_NAME,
        selections: [buildFragmentSpread(fragment)],
        type: schema.assertLinkedFieldType(viewerField.type)
      }],
      type: queryType
    },
    transformedFragment: fragment
  };
}

module.exports = {
  description: 'the Viewer type',
  buildRefetchOperation: buildRefetchOperation
};