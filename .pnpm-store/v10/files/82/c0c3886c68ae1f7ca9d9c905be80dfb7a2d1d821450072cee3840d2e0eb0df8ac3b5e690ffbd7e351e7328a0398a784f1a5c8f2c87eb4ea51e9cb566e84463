'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ExecutableDefinitionsRule = ExecutableDefinitionsRule;

var _GraphQLError = require('../../error/GraphQLError.js');

var _kinds = require('../../language/kinds.js');

var _predicates = require('../../language/predicates.js');

/**
 * Executable definitions
 *
 * A GraphQL document is only valid for execution if all definitions are either
 * operation or fragment definitions.
 *
 * See https://spec.graphql.org/draft/#sec-Executable-Definitions
 */
function ExecutableDefinitionsRule(context) {
  return {
    Document(node) {
      for (const definition of node.definitions) {
        if (!(0, _predicates.isExecutableDefinitionNode)(definition)) {
          const defName =
            definition.kind === _kinds.Kind.SCHEMA_DEFINITION ||
            definition.kind === _kinds.Kind.SCHEMA_EXTENSION
              ? 'schema'
              : '"' + definition.name.value + '"';
          context.reportError(
            new _GraphQLError.GraphQLError(
              `The ${defName} definition is not executable.`,
              {
                nodes: definition,
              },
            ),
          );
        }
      }

      return false;
    },
  };
}
