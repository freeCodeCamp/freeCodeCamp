import { GraphQLError } from '../../error/GraphQLError.mjs';

/**
 * Unique operation names
 *
 * A GraphQL document is only valid if all defined operations have unique names.
 *
 * See https://spec.graphql.org/draft/#sec-Operation-Name-Uniqueness
 */
export function UniqueOperationNamesRule(context) {
  const knownOperationNames = Object.create(null);
  return {
    OperationDefinition(node) {
      const operationName = node.name;

      if (operationName) {
        if (knownOperationNames[operationName.value]) {
          context.reportError(
            new GraphQLError(
              `There can be only one operation named "${operationName.value}".`,
              {
                nodes: [
                  knownOperationNames[operationName.value],
                  operationName,
                ],
              },
            ),
          );
        } else {
          knownOperationNames[operationName.value] = operationName;
        }
      }

      return false;
    },

    FragmentDefinition: () => false,
  };
}
