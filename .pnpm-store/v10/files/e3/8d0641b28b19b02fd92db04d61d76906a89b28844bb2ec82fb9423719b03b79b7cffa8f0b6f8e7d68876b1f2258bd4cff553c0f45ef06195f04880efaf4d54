'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.LoneAnonymousOperationRule = LoneAnonymousOperationRule;

var _GraphQLError = require('../../error/GraphQLError.js');

var _kinds = require('../../language/kinds.js');

/**
 * Lone anonymous operation
 *
 * A GraphQL document is only valid if when it contains an anonymous operation
 * (the query short-hand) that it contains only that one operation definition.
 *
 * See https://spec.graphql.org/draft/#sec-Lone-Anonymous-Operation
 */
function LoneAnonymousOperationRule(context) {
  let operationCount = 0;
  return {
    Document(node) {
      operationCount = node.definitions.filter(
        (definition) => definition.kind === _kinds.Kind.OPERATION_DEFINITION,
      ).length;
    },

    OperationDefinition(node) {
      if (!node.name && operationCount > 1) {
        context.reportError(
          new _GraphQLError.GraphQLError(
            'This anonymous operation must be the only defined operation.',
            {
              nodes: node,
            },
          ),
        );
      }
    },
  };
}
