'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.NoSchemaIntrospectionCustomRule = NoSchemaIntrospectionCustomRule;

var _GraphQLError = require('../../../error/GraphQLError.js');

var _definition = require('../../../type/definition.js');

var _introspection = require('../../../type/introspection.js');

/**
 * Prohibit introspection queries
 *
 * A GraphQL document is only valid if all fields selected are not fields that
 * return an introspection type.
 *
 * Note: This rule is optional and is not part of the Validation section of the
 * GraphQL Specification. This rule effectively disables introspection, which
 * does not reflect best practices and should only be done if absolutely necessary.
 */
function NoSchemaIntrospectionCustomRule(context) {
  return {
    Field(node) {
      const type = (0, _definition.getNamedType)(context.getType());

      if (type && (0, _introspection.isIntrospectionType)(type)) {
        context.reportError(
          new _GraphQLError.GraphQLError(
            `GraphQL introspection has been disabled, but the requested query contained the field "${node.name.value}".`,
            {
              nodes: node,
            },
          ),
        );
      }
    },
  };
}
