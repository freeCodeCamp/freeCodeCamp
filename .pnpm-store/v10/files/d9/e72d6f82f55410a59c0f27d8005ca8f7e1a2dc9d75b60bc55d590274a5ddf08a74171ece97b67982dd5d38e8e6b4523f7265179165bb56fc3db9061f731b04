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

var t = require('@babel/types');

var _require = require('./RelayFlowBabelFactories'),
    exactObjectTypeAnnotation = _require.exactObjectTypeAnnotation,
    readOnlyArrayOfType = _require.readOnlyArrayOfType;

function getInputObjectTypeIdentifier(schema, typeID) {
  return schema.getTypeString(typeID);
}

function transformScalarType(schema, type, state, objectProps) {
  if (schema.isNonNull(type)) {
    return transformNonNullableScalarType(schema, schema.getNullableType(type), state, objectProps);
  } else {
    return t.nullableTypeAnnotation(transformNonNullableScalarType(schema, type, state, objectProps));
  }
}

function transformNonNullableScalarType(schema, type, state, objectProps) {
  if (schema.isList(type)) {
    return readOnlyArrayOfType(transformScalarType(schema, schema.getListItemType(type), state, objectProps));
  } else if (schema.isObject(type) || schema.isUnion(type) || schema.isInterface(type)) {
    return objectProps;
  } else if (schema.isScalar(type)) {
    return transformGraphQLScalarType(schema.getTypeString(type), state);
  } else if (schema.isEnum(type)) {
    return transformGraphQLEnumType(schema, schema.assertEnumType(type), state);
  } else {
    throw new Error("Could not convert from GraphQL type ".concat(String(type)));
  }
}

function transformGraphQLScalarType(typeName, state) {
  var customType = state.customScalars[typeName];

  if (typeof customType === 'function') {
    return customType(t);
  }

  switch (customType !== null && customType !== void 0 ? customType : typeName) {
    case 'ID':
    case 'String':
      return t.stringTypeAnnotation();

    case 'Float':
    case 'Int':
      return t.numberTypeAnnotation();

    case 'Boolean':
      return t.booleanTypeAnnotation();

    default:
      return customType == null ? t.anyTypeAnnotation() : t.genericTypeAnnotation(t.identifier(customType));
  }
}

function transformGraphQLEnumType(schema, type, state) {
  state.usedEnums[schema.getTypeString(type)] = type;
  return t.genericTypeAnnotation(t.identifier(schema.getTypeString(type)));
}

function transformInputType(schema, type, state) {
  if (schema.isNonNull(type)) {
    return transformNonNullableInputType(schema, schema.getNullableType(type), state);
  } else {
    return t.nullableTypeAnnotation(transformNonNullableInputType(schema, type, state));
  }
}

function transformNonNullableInputType(schema, type, state) {
  if (schema.isList(type)) {
    return readOnlyArrayOfType(transformInputType(schema, schema.getListItemType(type), state));
  } else if (schema.isScalar(type)) {
    return transformGraphQLScalarType(schema.getTypeString(type), state);
  } else if (schema.isEnum(type)) {
    return transformGraphQLEnumType(schema, schema.assertEnumType(type), state);
  } else if (schema.isInputObject(type)) {
    var typeIdentifier = getInputObjectTypeIdentifier(schema, type);

    if (state.generatedInputObjectTypes[typeIdentifier]) {
      return t.genericTypeAnnotation(t.identifier(typeIdentifier));
    }

    state.generatedInputObjectTypes[typeIdentifier] = 'pending';
    var fields = schema.getFields(schema.assertInputObjectType(type));
    var props = fields.map(function (fieldID) {
      var fieldType = schema.getFieldType(fieldID);
      var fieldName = schema.getFieldName(fieldID);
      var property = t.objectTypeProperty(t.identifier(fieldName), transformInputType(schema, fieldType, state));

      if (state.optionalInputFields.indexOf(fieldName) >= 0 || !schema.isNonNull(fieldType)) {
        property.optional = true;
      }

      return property;
    });
    state.generatedInputObjectTypes[typeIdentifier] = exactObjectTypeAnnotation(props);
    return t.genericTypeAnnotation(t.identifier(typeIdentifier));
  } else {
    throw new Error("Could not convert from GraphQL type ".concat(schema.getTypeString(type)));
  }
}

module.exports = {
  transformInputType: transformInputType,
  transformScalarType: transformScalarType
};