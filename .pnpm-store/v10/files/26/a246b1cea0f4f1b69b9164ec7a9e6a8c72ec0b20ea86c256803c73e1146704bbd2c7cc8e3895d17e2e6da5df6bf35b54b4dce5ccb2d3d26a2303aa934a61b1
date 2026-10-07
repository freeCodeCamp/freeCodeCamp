import { GraphQLError } from '../../error/GraphQLError.mjs';
import { Kind } from '../../language/kinds.mjs';
import { isExecutableDefinitionNode } from '../../language/predicates.mjs';

/**
 * Executable definitions
 *
 * A GraphQL document is only valid for execution if all definitions are either
 * operation or fragment definitions.
 *
 * See https://spec.graphql.org/draft/#sec-Executable-Definitions
 */
export function ExecutableDefinitionsRule(context) {
  return {
    Document(node) {
      for (const definition of node.definitions) {
        if (!isExecutableDefinitionNode(definition)) {
          const defName =
            definition.kind === Kind.SCHEMA_DEFINITION ||
            definition.kind === Kind.SCHEMA_EXTENSION
              ? 'schema'
              : '"' + definition.name.value + '"';
          context.reportError(
            new GraphQLError(`The ${defName} definition is not executable.`, {
              nodes: definition,
            }),
          );
        }
      }

      return false;
    },
  };
}
