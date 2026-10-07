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

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _require = require('./CompilerError'),
    createCompilerError = _require.createCompilerError;

var _require2 = require('graphql'),
    SchemaMetaFieldDef = _require2.SchemaMetaFieldDef,
    TypeMetaFieldDef = _require2.TypeMetaFieldDef;

/**
 * Find the definition of a field of the specified type using strict
 * resolution rules per the GraphQL spec.
 */
function getFieldDefinitionStrict(schema, parentType, fieldName) {
  var type = schema.getRawType(parentType);
  var queryType = schema.getQueryType();
  var isQueryType = queryType != null && schema.areEqualTypes(type, queryType);
  var hasTypeName = schema.isAbstractType(type) || schema.isObject(type);
  var schemaFieldDef;

  if (isQueryType && fieldName === SchemaMetaFieldDef.name) {
    schemaFieldDef = queryType != null ? schema.getFieldByName(queryType, '__schema') : null;
  } else if (isQueryType && fieldName === TypeMetaFieldDef.name) {
    schemaFieldDef = queryType != null ? schema.getFieldByName(queryType, '__type') : null;
  } else if (hasTypeName && fieldName === '__typename') {
    schemaFieldDef = schema.getFieldByName(schema.assertCompositeType(type), '__typename');
  } else if (hasTypeName && fieldName === '__id') {
    schemaFieldDef = schema.getFieldByName(schema.assertCompositeType(type), '__id');
  } else if (schema.isInterface(type) || schema.isObject(type)) {
    var compositeType = schema.assertCompositeType(type);

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


function getFieldDefinitionLegacy(schema, parentType, fieldName, fieldAST) {
  var _schemaFieldDef;

  var schemaFieldDef = getFieldDefinitionStrict(schema, parentType, fieldName);

  if (!schemaFieldDef) {
    schemaFieldDef = getFieldDefinitionLegacyImpl(schema, parentType, fieldName, fieldAST);
  }

  return (_schemaFieldDef = schemaFieldDef) !== null && _schemaFieldDef !== void 0 ? _schemaFieldDef : null;
}
/**
 * @private
 */


function getFieldDefinitionLegacyImpl(schema, type, fieldName, fieldAST) {
  var rawType = schema.getRawType(type);

  if (schema.isAbstractType(rawType) && fieldAST && fieldAST.directives && fieldAST.directives.some(function (directive) {
    return getName(directive) === 'fixme_fat_interface';
  })) {
    var possibleTypes = schema.getPossibleTypes(schema.assertAbstractType(rawType));
    var schemaFieldDef;

    var _iterator = (0, _createForOfIteratorHelper2["default"])(possibleTypes),
        _step;

    try {
      var _loop = function _loop() {
        var possibleType = _step.value;
        var possibleField = schema.getFieldByName(possibleType, fieldName);

        if (possibleField) {
          // Fat interface fields can have differing arguments. Try to return
          // a field with matching arguments, but still return a field if the
          // arguments do not match.
          schemaFieldDef = possibleField;

          if (fieldAST && fieldAST.arguments) {
            var argumentsAllExist = fieldAST.arguments.every(function (argument) {
              return schema.getFieldArgByName(possibleField, getName(argument)) != null;
            });

            if (argumentsAllExist) {
              return "break";
            }
          }
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _ret = _loop();

        if (_ret === "break") break;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return schemaFieldDef;
  }
}
/**
 * @private
 */


function getName(ast) {
  var name = ast.name ? ast.name.value : null;

  if (typeof name !== 'string') {
    throw createCompilerError("Expected ast node to have a 'name'.", null, [ast]);
  }

  return name;
}

module.exports = {
  getFieldDefinitionLegacy: getFieldDefinitionLegacy,
  getFieldDefinitionStrict: getFieldDefinitionStrict
};