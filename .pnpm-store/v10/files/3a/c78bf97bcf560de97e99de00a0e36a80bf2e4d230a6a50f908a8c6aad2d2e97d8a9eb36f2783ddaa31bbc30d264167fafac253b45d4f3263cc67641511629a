/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const {createCompilerError} = require('./CompilerError');
const {SchemaMetaFieldDef, TypeMetaFieldDef} = require('graphql');

import type {Schema, TypeID, FieldID} from './Schema';
import type {FieldNode} from 'graphql';

export type GetFieldDefinitionFn = (
  schema: Schema,
  parentType: TypeID,
  fieldName: string,
  fieldAST: FieldNode,
) => ?FieldID;

/**
 * Find the definition of a field of the specified type using strict
 * resolution rules per the GraphQL spec.
 */
function getFieldDefinitionStrict(
  schema: Schema,
  parentType: TypeID,
  fieldName: string,
): ?FieldID {
  const type = schema.getRawType(parentType);
  const queryType = schema.getQueryType();
  const isQueryType =
    queryType != null && schema.areEqualTypes(type, queryType);
  const hasTypeName = schema.isAbstractType(type) || schema.isObject(type);

  let schemaFieldDef;
  if (isQueryType && fieldName === SchemaMetaFieldDef.name) {
    schemaFieldDef =
      queryType != null ? schema.getFieldByName(queryType, '__schema') : null;
  } else if (isQueryType && fieldName === TypeMetaFieldDef.name) {
    schemaFieldDef =
      queryType != null ? schema.getFieldByName(queryType, '__type') : null;
  } else if (hasTypeName && fieldName === '__typename') {
    schemaFieldDef = schema.getFieldByName(
      schema.assertCompositeType(type),
      '__typename',
    );
  } else if (hasTypeName && fieldName === '__id') {
    schemaFieldDef = schema.getFieldByName(
      schema.assertCompositeType(type),
      '__id',
    );
  } else if (schema.isInterface(type) || schema.isObject(type)) {
    const compositeType = schema.assertCompositeType(type);
    if (schema.hasField(compositeType, fieldName)) {
      schemaFieldDef = schema.getFieldByName(compositeType, fieldName);
    } else {
      return null;
    }
  }
  return schemaFieldDef;
}

/**
 * Find the definition of a field of the specified type, first trying
 * the standard spec-compliant resolution process and falling back
 * to legacy mode that supports fat interfaces.
 */
function getFieldDefinitionLegacy(
  schema: Schema,
  parentType: TypeID,
  fieldName: string,
  fieldAST: FieldNode,
): ?FieldID {
  let schemaFieldDef = getFieldDefinitionStrict(schema, parentType, fieldName);

  if (!schemaFieldDef) {
    schemaFieldDef = getFieldDefinitionLegacyImpl(
      schema,
      parentType,
      fieldName,
      fieldAST,
    );
  }
  return schemaFieldDef ?? null;
}

/**
 * @private
 */
function getFieldDefinitionLegacyImpl(
  schema: Schema,
  type: TypeID,
  fieldName: string,
  fieldAST: FieldNode,
): ?FieldID {
  const rawType = schema.getRawType(type);
  if (
    schema.isAbstractType(rawType) &&
    fieldAST &&
    fieldAST.directives &&
    fieldAST.directives.some(
      directive => getName(directive) === 'fixme_fat_interface',
    )
  ) {
    const possibleTypes = schema.getPossibleTypes(
      schema.assertAbstractType(rawType),
    );
    let schemaFieldDef;
    for (const possibleType of possibleTypes) {
      const possibleField = schema.getFieldByName(possibleType, fieldName);
      if (possibleField) {
        // Fat interface fields can have differing arguments. Try to return
        // a field with matching arguments, but still return a field if the
        // arguments do not match.
        schemaFieldDef = possibleField;
        if (fieldAST && fieldAST.arguments) {
          const argumentsAllExist = fieldAST.arguments.every(
            argument =>
              schema.getFieldArgByName(possibleField, getName(argument)) !=
              null,
          );
          if (argumentsAllExist) {
            break;
          }
        }
      }
    }
    return schemaFieldDef;
  }
}

/**
 * @private
 */
function getName(ast): string {
  const name = ast.name ? ast.name.value : null;
  if (typeof name !== 'string') {
    throw createCompilerError("Expected ast node to have a 'name'.", null, [
      ast,
    ]);
  }
  return name;
}

module.exports = {
  getFieldDefinitionLegacy,
  getFieldDefinitionStrict,
};
