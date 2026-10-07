import { GraphQLError } from '../../../error/GraphQLError.mjs';
import { getNamedType } from '../../../type/definition.mjs';
import { isIntrospectionType } from '../../../type/introspection.mjs';

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
export function NoSchemaIntrospectionCustomRule(context) {
  return {
    Field(node) {
      const type = getNamedType(context.getType());

      if (type && isIntrospectionType(type)) {
        context.reportError(
          new GraphQLError(
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
