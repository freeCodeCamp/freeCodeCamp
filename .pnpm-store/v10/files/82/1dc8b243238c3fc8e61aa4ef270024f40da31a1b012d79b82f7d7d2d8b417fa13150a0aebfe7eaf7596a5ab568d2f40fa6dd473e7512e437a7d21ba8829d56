'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.NoUndefinedVariablesRule = NoUndefinedVariablesRule;

var _GraphQLError = require('../../error/GraphQLError.js');

/**
 * No undefined variables
 *
 * A GraphQL operation is only valid if all variables encountered, both directly
 * and via fragment spreads, are defined by that operation.
 *
 * See https://spec.graphql.org/draft/#sec-All-Variable-Uses-Defined
 */
function NoUndefinedVariablesRule(context) {
  let variableNameDefined = Object.create(null);
  return {
    OperationDefinition: {
      enter() {
        variableNameDefined = Object.create(null);
      },

      leave(operation) {
        const usages = context.getRecursiveVariableUsages(operation);

        for (const { node } of usages) {
          const varName = node.name.value;

          if (variableNameDefined[varName] !== true) {
            context.reportError(
              new _GraphQLError.GraphQLError(
                operation.name
                  ? `Variable "$${varName}" is not defined by operation "${operation.name.value}".`
                  : `Variable "$${varName}" is not defined.`,
                {
                  nodes: [node, operation],
                },
              ),
            );
          }
        }
      },
    },

    VariableDefinition(node) {
      variableNameDefined[node.variable.name.value] = true;
    },
  };
}
