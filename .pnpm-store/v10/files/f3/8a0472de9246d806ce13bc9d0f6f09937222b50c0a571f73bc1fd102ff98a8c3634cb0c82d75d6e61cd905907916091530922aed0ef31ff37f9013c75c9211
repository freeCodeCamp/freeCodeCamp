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

const t = require('@babel/types');

const {
  exactObjectTypeAnnotation,
  readOnlyArrayOfType,
} = require('./RelayFlowBabelFactories');

import type {Schema, TypeID, EnumTypeID} from '../../core/Schema';

export type BabelTypes = typeof t;
export type ScalarTypeMapping = {
  [type: string]: string | (BabelTypes => BabelNode_DEPRECATED),
  ...,
};

import type {State} from './RelayFlowGenerator';

function getInputObjectTypeIdentifier(schema: Schema, typeID: TypeID): string {
  return schema.getTypeString(typeID);
}

function transformScalarType(
  schema: Schema,
  type: TypeID,
  state: State,
  objectProps?: BabelNode_DEPRECATED,
): BabelNode_DEPRECATED {
  if (schema.isNonNull(type)) {
    return transformNonNullableScalarType(
      schema,
      schema.getNullableType(type),
      state,
      objectProps,
    );
  } else {
    return t.nullableTypeAnnotation(
      transformNonNullableScalarType(schema, type, state, objectProps),
    );
  }
}

function transformNonNullableScalarType(
  schema: Schema,
  type: TypeID,
  state: State,
  objectProps,
): BabelNode_DEPRECATED {
  if (schema.isList(type)) {
    return readOnlyArrayOfType(
      transformScalarType(
        schema,
        schema.getListItemType(type),
        state,
        objectProps,
      ),
    );
  } else if (
    schema.isObject(type) ||
    schema.isUnion(type) ||
    schema.isInterface(type)
  ) {
    return objectProps;
  } else if (schema.isScalar(type)) {
    return transformGraphQLScalarType(schema.getTypeString(type), state);
  } else if (schema.isEnum(type)) {
    return transformGraphQLEnumType(schema, schema.assertEnumType(type), state);
  } else {
    throw new Error(`Could not convert from GraphQL type ${String(type)}`);
  }
}

function transformGraphQLScalarType(typeName: string, state: State) {
  const customType = state.customScalars[typeName];
  if (typeof customType === 'function') {
    return customType(t);
  }
  switch (customType ?? typeName) {
    case 'ID':
    case 'String':
      return t.stringTypeAnnotation();
    case 'Float':
    case 'Int':
      return t.numberTypeAnnotation();
    case 'Boolean':
      return t.booleanTypeAnnotation();
    default:
      return customType == null
        ? t.anyTypeAnnotation()
        : t.genericTypeAnnotation(t.identifier(customType));
  }
}

function transformGraphQLEnumType(
  schema: Schema,
  type: EnumTypeID,
  state: State,
): BabelNode_DEPRECATED {
  state.usedEnums[schema.getTypeString(type)] = type;
  return t.genericTypeAnnotation(t.identifier(schema.getTypeString(type)));
}

function transformInputType(
  schema: Schema,
  type: TypeID,
  state: State,
): BabelNode_DEPRECATED {
  if (schema.isNonNull(type)) {
    return transformNonNullableInputType(
      schema,
      schema.getNullableType(type),
      state,
    );
  } else {
    return t.nullableTypeAnnotation(
      transformNonNullableInputType(schema, type, state),
    );
  }
}

function transformNonNullableInputType(
  schema: Schema,
  type: TypeID,
  state: State,
): BabelNode_DEPRECATED {
  if (schema.isList(type)) {
    return readOnlyArrayOfType(
      transformInputType(schema, schema.getListItemType(type), state),
    );
  } else if (schema.isScalar(type)) {
    return transformGraphQLScalarType(schema.getTypeString(type), state);
  } else if (schema.isEnum(type)) {
    return transformGraphQLEnumType(schema, schema.assertEnumType(type), state);
  } else if (schema.isInputObject(type)) {
    const typeIdentifier = getInputObjectTypeIdentifier(schema, type);
    if (state.generatedInputObjectTypes[typeIdentifier]) {
      return t.genericTypeAnnotation(t.identifier(typeIdentifier));
    }
    state.generatedInputObjectTypes[typeIdentifier] = 'pending';
    const fields = schema.getFields(schema.assertInputObjectType(type));
    const props = fields.map(fieldID => {
      const fieldType = schema.getFieldType(fieldID);
      const fieldName = schema.getFieldName(fieldID);
      const property = t.objectTypeProperty(
        t.identifier(fieldName),
        transformInputType(schema, fieldType, state),
      );
      if (
        state.optionalInputFields.indexOf(fieldName) >= 0 ||
        !schema.isNonNull(fieldType)
      ) {
        property.optional = true;
      }
      return property;
    });

    state.generatedInputObjectTypes[typeIdentifier] = exactObjectTypeAnnotation(
      props,
    );
    return t.genericTypeAnnotation(t.identifier(typeIdentifier));
  } else {
    throw new Error(
      `Could not convert from GraphQL type ${schema.getTypeString(type)}`,
    );
  }
}

module.exports = {
  transformInputType,
  transformScalarType,
};
