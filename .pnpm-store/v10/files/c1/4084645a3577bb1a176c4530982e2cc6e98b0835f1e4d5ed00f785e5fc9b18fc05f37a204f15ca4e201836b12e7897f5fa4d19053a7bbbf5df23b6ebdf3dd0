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

var nullthrows = require('nullthrows');

var _require = require('../../core/CompilerError'),
    createUserError = _require.createUserError;

var _require2 = require('./utils'),
    buildFragmentSpread = _require2.buildFragmentSpread,
    buildOperationArgumentDefinitions = _require2.buildOperationArgumentDefinitions;

var NODE_TYPE_NAME = 'Node';
var NODE_FIELD_NAME = 'node';

function buildRefetchOperation(schema, fragment, queryName) {
  var eligible = schema.getTypeString(fragment.type) === NODE_TYPE_NAME || schema.isObject(fragment.type) && schema.getInterfaces(schema.assertCompositeType(fragment.type)).some(function (interfaceType) {
    return schema.areEqualTypes(interfaceType, schema.expectTypeFromString(NODE_TYPE_NAME));
  }) || schema.isAbstractType(fragment.type) && Array.from(schema.getPossibleTypes(schema.assertAbstractType(fragment.type))).every(function (possibleType) {
    return schema.implementsInterface(schema.assertCompositeType(possibleType), schema.assertInterfaceType(schema.expectTypeFromString(NODE_TYPE_NAME)));
  });

  if (!eligible) {
    return null;
  }

  var queryType = schema.expectQueryType();
  var nodeType = schema.getTypeFromString(NODE_TYPE_NAME);
  var nodeField = schema.getFieldConfig(schema.expectField(queryType, NODE_FIELD_NAME));

  if (!(nodeType && schema.isInterface(nodeType) && schema.isInterface(nodeField.type) && schema.areEqualTypes(nodeField.type, nodeType) && nodeField.args.length === 1 && schema.areEqualTypes(schema.getNullableType(nodeField.args[0].type), schema.expectIdType()) && ( // the fragment must be on Node or on a type that implements Node
  schema.isObject(fragment.type) && schema.getInterfaces(schema.assertCompositeType(fragment.type)).some(function (interfaceType) {
    return schema.areEqualTypes(interfaceType, nodeType);
  }) || schema.isAbstractType(fragment.type) && Array.from(schema.getPossibleTypes(schema.assertAbstractType(fragment.type))).every(function (possibleType) {
    return schema.getInterfaces(schema.assertCompositeType(possibleType)).some(function (interfaceType) {
      return schema.areEqualTypes(interfaceType, nodeType);
    });
  })))) {
    throw createUserError("Invalid use of @refetchable on fragment '".concat(fragment.name, "', check ") + 'that your schema defines a `Node { id: ID }` interface and has a ' + '`node(id: ID): Node` field on the query type (the id argument may ' + 'also be non-null).', [fragment.loc]);
  } // name and type of the node(_: ID) field parameter


  var idArgName = nodeField.args[0].name;
  var idArgType = nodeField.args[0].type; // name and type of the query variable

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
    identifierField: 'id',
    path: [NODE_FIELD_NAME],
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
        alias: NODE_FIELD_NAME,
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
        name: NODE_FIELD_NAME,
        selections: [buildFragmentSpread(fragment)],
        type: schema.assertLinkedFieldType(nodeType)
      }],
      type: queryType
    },
    transformedFragment: enforceIDField(schema, fragment)
  };
}

function enforceIDField(schema, fragment) {
  var idSelection = fragment.selections.find(function (selection) {
    return selection.kind === 'ScalarField' && selection.name === 'id' && selection.alias === 'id' && schema.areEqualTypes(schema.getNullableType(selection.type), schema.expectIdType());
  });

  if (idSelection) {
    return fragment;
  }

  var idField = schema.getFieldByName(fragment.type, 'id');
  var nodeType = schema.assertCompositeType(nullthrows(schema.getTypeFromString(NODE_TYPE_NAME)));
  var generatedIDSelection = idField ? SchemaUtils.generateIDField(schema, fragment.type) : {
    kind: 'InlineFragment',
    directives: [],
    loc: {
      kind: 'Generated'
    },
    metadata: null,
    selections: [SchemaUtils.generateIDField(schema, nodeType)],
    typeCondition: nodeType
  };
  return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, fragment), {}, {
    selections: [].concat((0, _toConsumableArray2["default"])(fragment.selections), [generatedIDSelection])
  });
}

module.exports = {
  description: 'the Node interface or types implementing the Node interface',
  buildRefetchOperation: buildRefetchOperation
};