'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.KnownFragmentNamesRule = KnownFragmentNamesRule;

var _GraphQLError = require('../../error/GraphQLError.js');

/**
 * Known fragment names
 *
 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
 * to fragments defined in the same document.
 *
 * See https://spec.graphql.org/draft/#sec-Fragment-spread-target-defined
 */
function KnownFragmentNamesRule(context) {
  return {
    FragmentSpread(node) {
      const fragmentName = node.name.value;
      const fragment = context.getFragment(fragmentName);

      if (!fragment) {
        context.reportError(
          new _GraphQLError.GraphQLError(
            `Unknown fragment "${fragmentName}".`,
            {
              nodes: node.name,
            },
          ),
        );
      }
    },
  };
}
