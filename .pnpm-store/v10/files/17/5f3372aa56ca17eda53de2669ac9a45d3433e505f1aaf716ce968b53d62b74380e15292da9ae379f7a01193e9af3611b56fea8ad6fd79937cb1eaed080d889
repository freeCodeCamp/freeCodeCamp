'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.UniqueFragmentNamesRule = UniqueFragmentNamesRule;

var _GraphQLError = require('../../error/GraphQLError.js');

/**
 * Unique fragment names
 *
 * A GraphQL document is only valid if all defined fragments have unique names.
 *
 * See https://spec.graphql.org/draft/#sec-Fragment-Name-Uniqueness
 */
function UniqueFragmentNamesRule(context) {
  const knownFragmentNames = Object.create(null);
  return {
    OperationDefinition: () => false,

    FragmentDefinition(node) {
      const fragmentName = node.name.value;

      if (knownFragmentNames[fragmentName]) {
        context.reportError(
          new _GraphQLError.GraphQLError(
            `There can be only one fragment named "${fragmentName}".`,
            {
              nodes: [knownFragmentNames[fragmentName], node.name],
            },
          ),
        );
      } else {
        knownFragmentNames[fragmentName] = node.name;
      }

      return false;
    },
  };
}
