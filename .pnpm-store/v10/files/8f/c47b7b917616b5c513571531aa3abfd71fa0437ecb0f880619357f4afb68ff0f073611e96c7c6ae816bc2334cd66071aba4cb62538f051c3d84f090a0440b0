'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.UniqueVariableNamesRule = UniqueVariableNamesRule;

var _groupBy = require('../../jsutils/groupBy.js');

var _GraphQLError = require('../../error/GraphQLError.js');

/**
 * Unique variable names
 *
 * A GraphQL operation is only valid if all its variables are uniquely named.
 */
function UniqueVariableNamesRule(context) {
  return {
    OperationDefinition(operationNode) {
      var _operationNode$variab;

      // See: https://github.com/graphql/graphql-js/issues/2203

      /* c8 ignore next */
      const variableDefinitions =
        (_operationNode$variab = operationNode.variableDefinitions) !== null &&
        _operationNode$variab !== void 0
          ? _operationNode$variab
          : [];
      const seenVariableDefinitions = (0, _groupBy.groupBy)(
        variableDefinitions,
        (node) => node.variable.name.value,
      );

      for (const [variableName, variableNodes] of seenVariableDefinitions) {
        if (variableNodes.length > 1) {
          context.reportError(
            new _GraphQLError.GraphQLError(
              `There can be only one variable named "$${variableName}".`,
              {
                nodes: variableNodes.map((node) => node.variable.name),
              },
            ),
          );
        }
      }
    },
  };
}
