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

var _require = require('./CompilerError'),
    createCompilerError = _require.createCompilerError;

var ID = 'id';
/**
 * @public
 *
 * Determine if an AST node contains a fragment/operation definition.
 */

function isExecutableDefinitionAST(ast) {
  return ast.kind === 'FragmentDefinition' || ast.kind === 'OperationDefinition';
}
/**
 * @public
 *
 * Determine if an AST node contains a schema definition.
 */


function isSchemaDefinitionAST(ast) {
  return ast.kind === 'SchemaDefinition' || ast.kind === 'ScalarTypeDefinition' || ast.kind === 'ObjectTypeDefinition' || ast.kind === 'InterfaceTypeDefinition' || ast.kind === 'UnionTypeDefinition' || ast.kind === 'EnumTypeDefinition' || ast.kind === 'InputObjectTypeDefinition' || ast.kind === 'DirectiveDefinition' || ast.kind === 'ScalarTypeExtension' || ast.kind === 'ObjectTypeExtension' || ast.kind === 'InterfaceTypeExtension' || ast.kind === 'UnionTypeExtension' || ast.kind === 'EnumTypeExtension' || ast.kind === 'InputObjectTypeExtension';
}
/**
 * Generates an id field on the given type.
 */


function generateIDField(schema, type) {
  var idField = schema.getFieldByName(type, 'id');

  if (idField == null) {
    throw new createCompilerError("Expected an 'id' field on type '".concat(schema.getTypeString(type), "'."));
  }

  var idType = schema.assertScalarFieldType(schema.getFieldType(idField));
  return {
    kind: 'ScalarField',
    alias: ID,
    args: [],
    directives: [],
    handles: null,
    loc: {
      kind: 'Generated'
    },
    metadata: null,
    name: ID,
    type: idType
  };
}

function getNullableBooleanInput(schema) {
  return schema.assertInputType(schema.expectBooleanType());
}

function getNonNullBooleanInput(schema) {
  return schema.assertInputType(schema.getNonNullType(schema.expectBooleanType()));
}

function getNullableStringInput(schema) {
  return schema.assertInputType(schema.expectStringType());
}

function getNonNullStringInput(schema) {
  return schema.assertInputType(schema.getNonNullType(schema.expectStringType()));
}

function getNullableIdInput(schema) {
  return schema.assertInputType(schema.expectIdType());
}

function getNonNullIdInput(schema) {
  return schema.assertInputType(schema.getNonNullType(schema.expectIdType()));
}

module.exports = {
  generateIDField: generateIDField,
  isExecutableDefinitionAST: isExecutableDefinitionAST,
  isSchemaDefinitionAST: isSchemaDefinitionAST,
  getNullableBooleanInput: getNullableBooleanInput,
  getNonNullBooleanInput: getNonNullBooleanInput,
  getNullableStringInput: getNullableStringInput,
  getNonNullStringInput: getNonNullStringInput,
  getNullableIdInput: getNullableIdInput,
  getNonNullIdInput: getNonNullIdInput
};