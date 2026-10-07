'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.UniqueEnumValueNamesRule = UniqueEnumValueNamesRule;

var _GraphQLError = require('../../error/GraphQLError.js');

var _definition = require('../../type/definition.js');

/**
 * Unique enum value names
 *
 * A GraphQL enum type is only valid if all its values are uniquely named.
 */
function UniqueEnumValueNamesRule(context) {
  const schema = context.getSchema();
  const existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
  const knownValueNames = Object.create(null);
  return {
    EnumTypeDefinition: checkValueUniqueness,
    EnumTypeExtension: checkValueUniqueness,
  };

  function checkValueUniqueness(node) {
    var _node$values;

    const typeName = node.name.value;

    if (!knownValueNames[typeName]) {
      knownValueNames[typeName] = Object.create(null);
    } // FIXME: https://github.com/graphql/graphql-js/issues/2203

    /* c8 ignore next */

    const valueNodes =
      (_node$values = node.values) !== null && _node$values !== void 0
        ? _node$values
        : [];
    const valueNames = knownValueNames[typeName];

    for (const valueDef of valueNodes) {
      const valueName = valueDef.name.value;
      const existingType = existingTypeMap[typeName];

      if (
        (0, _definition.isEnumType)(existingType) &&
        existingType.getValue(valueName)
      ) {
        context.reportError(
          new _GraphQLError.GraphQLError(
            `Enum value "${typeName}.${valueName}" already exists in the schema. It cannot also be defined in this type extension.`,
            {
              nodes: valueDef.name,
            },
          ),
        );
      } else if (valueNames[valueName]) {
        context.reportError(
          new _GraphQLError.GraphQLError(
            `Enum value "${typeName}.${valueName}" can only be defined once.`,
            {
              nodes: [valueNames[valueName], valueDef.name],
            },
          ),
        );
      } else {
        valueNames[valueName] = valueDef.name;
      }
    }

    return false;
  }
}
