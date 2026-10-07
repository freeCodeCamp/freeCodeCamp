import { GraphQLError } from '../../error/GraphQLError.mjs';

/**
 * Unique directive names
 *
 * A GraphQL document is only valid if all defined directives have unique names.
 */
export function UniqueDirectiveNamesRule(context) {
  const knownDirectiveNames = Object.create(null);
  const schema = context.getSchema();
  return {
    DirectiveDefinition(node) {
      const directiveName = node.name.value;

      if (
        schema !== null &&
        schema !== void 0 &&
        schema.getDirective(directiveName)
      ) {
        context.reportError(
          new GraphQLError(
            `Directive "@${directiveName}" already exists in the schema. It cannot be redefined.`,
            {
              nodes: node.name,
            },
          ),
        );
        return;
      }

      if (knownDirectiveNames[directiveName]) {
        context.reportError(
          new GraphQLError(
            `There can be only one directive named "@${directiveName}".`,
            {
              nodes: [knownDirectiveNames[directiveName], node.name],
            },
          ),
        );
      } else {
        knownDirectiveNames[directiveName] = node.name;
      }

      return false;
    },
  };
}
