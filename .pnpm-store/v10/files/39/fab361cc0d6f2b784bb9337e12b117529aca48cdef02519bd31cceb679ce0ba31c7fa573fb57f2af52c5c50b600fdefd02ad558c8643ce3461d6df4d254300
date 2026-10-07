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

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var SchemaUtils = require('../../core/SchemaUtils');

var _require = require('../../core/CompilerError'),
    createUserError = _require.createUserError;

var _require2 = require('./utils'),
    buildFragmentSpread = _require2.buildFragmentSpread,
    buildOperationArgumentDefinitions = _require2.buildOperationArgumentDefinitions;

function buildRefetchOperation(schema, fragment, queryName) {
  var fetchableIdentifierField = null;

  if (schema.isObject(fragment.type)) {
    var objectType = schema.assertObjectType(fragment.type);
    fetchableIdentifierField = schema.getFetchableFieldName(objectType);
  }

  if (fetchableIdentifierField == null) {
    return null;
  }

  var identifierField = schema.getFieldConfig(schema.expectField(fragment.type, fetchableIdentifierField));

  if (!schema.isId(schema.getRawType(identifierField.type))) {
    var typeName = schema.getTypeString(fragment.type);
    throw createUserError("Invalid use of @refetchable on fragment '".concat(fragment.name, "', the type ") + "'".concat(typeName, "' is @fetchable but the identifying field '").concat(fetchableIdentifierField, "' ") + "does not have type 'ID'.", [fragment.loc]);
  }

  var queryType = schema.expectQueryType();
  var fetchFieldName = "fetch__".concat(schema.getTypeString(fragment.type));
  var fetchField = schema.getFieldConfig(schema.expectField(queryType, fetchFieldName));

  if (!(fetchField != null && schema.isObject(fetchField.type) && schema.areEqualTypes(fetchField.type, fragment.type) && schema.areEqualTypes(schema.getNullableType(fetchField.args[0].type), schema.expectIdType()))) {
    var _typeName = schema.getTypeString(fragment.type);

    throw createUserError("Invalid use of @refetchable on fragment '".concat(fragment.name, "', the type ") + "'".concat(_typeName, "' is @fetchable but there is no corresponding '").concat(fetchFieldName, "'") + "field or it is invalid (expected '".concat(fetchFieldName, "(id: ID!): ").concat(_typeName, "')."), [fragment.loc]);
  } // name and type of the node(_: ID) field parameter


  var idArgName = fetchField.args[0].name;
  var idArgType = fetchField.args[0].type; // name and type of the query variable

  var idVariableType = SchemaUtils.getNonNullIdInput(schema);
  var idVariableName = 'id';
  var argumentDefinitions = buildOperationArgumentDefinitions(fragment.argumentDefinitions);
  var idArgument = argumentDefinitions.find(function (argDef) {
    return argDef.name === idVariableName;
  });

  if (idArgument != null) {
    throw createUserError("Invalid use of @refetchable on fragment `".concat(fragment.name, "`, this ") + 'fragment already has an `$id` variable in scope.', [idArgument.loc]);
  }

  var argumentDefinitionsWithId = [].concat((0, _toConsumableArray2["default"])(argumentDefinitions), [{
    defaultValue: null,
    kind: 'LocalArgumentDefinition',
    loc: {
      kind: 'Derived',
      source: fragment.loc
    },
    name: idVariableName,
    type: idVariableType
  }]);
  return {
    identifierField: fetchableIdentifierField,
    path: [fetchFieldName],
    node: {
      argumentDefinitions: argumentDefinitionsWithId,
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
        alias: fetchFieldName,
        args: [{
          kind: 'Argument',
          loc: {
            kind: 'Derived',
            source: fragment.loc
          },
          name: idArgName,
          type: schema.assertInputType(idArgType),
          value: {
            kind: 'Variable',
            loc: {
              kind: 'Derived',
              source: fragment.loc
            },
            variableName: idVariableName,
            type: idVariableType
          }
        }],
        connection: false,
        directives: [],
        handles: null,
        kind: 'LinkedField',
        loc: {
          kind: 'Derived',
          source: fragment.loc
        },
        metadata: null,
        name: fetchFieldName,
        selections: [buildFragmentSpread(fragment)],
        type: fragment.type
      }],
      type: queryType
    },
    transformedFragment: enforceIDField(schema, fragment, fetchableIdentifierField)
  };
}

function enforceIDField(schema, fragment, fetchableIdentifierField) {
  var idSelection = fragment.selections.find(function (selection) {
    return selection.kind === 'ScalarField' && selection.name === fetchableIdentifierField && selection.alias === fetchableIdentifierField && schema.areEqualTypes(schema.getNullableType(selection.type), schema.expectIdType());
  });

  if (idSelection) {
    return fragment;
  }

  var idField = SchemaUtils.generateIDField(schema, fragment.type); // idField is uniquely owned here, safe to mutate

  idField.alias = fetchableIdentifierField; // idField is uniquely owned here, safe to mutate

  idField.name = fetchableIdentifierField;
  return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, fragment), {}, {
    selections: [].concat((0, _toConsumableArray2["default"])(fragment.selections), [idField])
  });
}

module.exports = {
  description: '@fetchable types',
  buildRefetchOperation: buildRefetchOperation
};