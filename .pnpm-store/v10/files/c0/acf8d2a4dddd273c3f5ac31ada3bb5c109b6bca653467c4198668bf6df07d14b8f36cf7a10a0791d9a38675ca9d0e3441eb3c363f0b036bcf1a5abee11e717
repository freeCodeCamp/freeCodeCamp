import { GraphQLError } from '../error/GraphQLError.mjs';

/**
 * Extracts the root type of the operation from the schema.
 *
 * @deprecated Please use `GraphQLSchema.getRootType` instead. Will be removed in v17
 */
export function getOperationRootType(schema, operation) {
  if (operation.operation === 'query') {
    const queryType = schema.getQueryType();

    if (!queryType) {
      throw new GraphQLError(
        'Schema does not define the required query root type.',
        {
          nodes: operation,
        },
      );
    }

    return queryType;
  }

  if (operation.operation === 'mutation') {
    const mutationType = schema.getMutationType();

    if (!mutationType) {
      throw new GraphQLError('Schema is not configured for mutations.', {
        nodes: operation,
      });
    }

    return mutationType;
  }

  if (operation.operation === 'subscription') {
    const subscriptionType = schema.getSubscriptionType();

    if (!subscriptionType) {
      throw new GraphQLError('Schema is not configured for subscriptions.', {
        nodes: operation,
      });
    }

    return subscriptionType;
  }

  throw new GraphQLError(
    'Can only have query, mutation and subscription operations.',
    {
      nodes: operation,
    },
  );
}
