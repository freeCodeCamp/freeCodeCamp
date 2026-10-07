'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.VariablesInAllowedPositionRule = VariablesInAllowedPositionRule;

var _inspect = require('../../jsutils/inspect.js');

var _GraphQLError = require('../../error/GraphQLError.js');

var _kinds = require('../../language/kinds.js');

var _definition = require('../../type/definition.js');

var _typeComparators = require('../../utilities/typeComparators.js');

var _typeFromAST = require('../../utilities/typeFromAST.js');

/**
 * Variables in allowed position
 *
 * Variable usages must be compatible with the arguments they are passed to.
 *
 * See https://spec.graphql.org/draft/#sec-All-Variable-Usages-are-Allowed
 */
function VariablesInAllowedPositionRule(context) {
  let varDefMap = Object.create(null);
  return {
    OperationDefinition: {
      enter() {
        varDefMap = Object.create(null);
      },

      leave(operation) {
        const usages = context.getRecursiveVariableUsages(operation);

        for (const { node, type, defaultValue, parentType } of usages) {
          const varName = node.name.value;
          const varDef = varDefMap[varName];

          if (varDef && type) {
            // A var type is allowed if it is the same or more strict (e.g. is
            // a subtype of) than the expected type. It can be more strict if
            // the variable type is non-null when the expected type is nullable.
            // If both are list types, the variable item type can be more strict
            // than the expected item type (contravariant).
            const schema = context.getSchema();
            const varType = (0, _typeFromAST.typeFromAST)(schema, varDef.type);

            if (
              varType &&
              !allowedVariableUsage(
                schema,
                varType,
                varDef.defaultValue,
                type,
                defaultValue,
              )
            ) {
              const varTypeStr = (0, _inspect.inspect)(varType);
              const typeStr = (0, _inspect.inspect)(type);
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Variable "$${varName}" of type "${varTypeStr}" used in position expecting type "${typeStr}".`,
                  {
                    nodes: [varDef, node],
                  },
                ),
              );
            }

            if (
              (0, _definition.isInputObjectType)(parentType) &&
              parentType.isOneOf &&
              (0, _definition.isNullableType)(varType)
            ) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Variable "$${varName}" is of type "${varType}" but must be non-nullable to be used for OneOf Input Object "${parentType}".`,
                  {
                    nodes: [varDef, node],
                  },
                ),
              );
            }
          }
        }
      },
    },

    VariableDefinition(node) {
      varDefMap[node.variable.name.value] = node;
    },
  };
}
/**
 * Returns true if the variable is allowed in the location it was found,
 * which includes considering if default values exist for either the variable
 * or the location at which it is located.
 */

function allowedVariableUsage(
  schema,
  varType,
  varDefaultValue,
  locationType,
  locationDefaultValue,
) {
  if (
    (0, _definition.isNonNullType)(locationType) &&
    !(0, _definition.isNonNullType)(varType)
  ) {
    const hasNonNullVariableDefaultValue =
      varDefaultValue != null && varDefaultValue.kind !== _kinds.Kind.NULL;
    const hasLocationDefaultValue = locationDefaultValue !== undefined;

    if (!hasNonNullVariableDefaultValue && !hasLocationDefaultValue) {
      return false;
    }

    const nullableLocationType = locationType.ofType;
    return (0, _typeComparators.isTypeSubTypeOf)(
      schema,
      varType,
      nullableLocationType,
    );
  }

  return (0, _typeComparators.isTypeSubTypeOf)(schema, varType, locationType);
}
