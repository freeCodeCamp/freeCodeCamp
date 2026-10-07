'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getOperationRootType = getOperationRootType;

var _GraphQLError = require('../error/GraphQLError.js');

/**
 * Extracts the root type of the operation from the schema.
 *
 * @deprecated Please use `GraphQLSchema.getRootType` instead. Will be removed in v17
 */
function getOperationRootType(schema, operation) {
  if (operation.operation === 'query') {
    const queryType = schema.getQueryType();

    if (!queryType) {
      throw new _GraphQLError.GraphQLError(
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
      throw new _GraphQLError.GraphQLError(
        'Schema is not configured for mutations.',
        {
          nodes: operation,
        },
      );
    }

    return mutationType;
  }

  if (operation.operation === 'subscription') {
    const subscriptionType = schema.getSubscriptionType();

    if (!subscriptionType) {
      throw new _GraphQLError.GraphQLError(
        'Schema is not configured for subscriptions.',
        {
          nodes: operation,
        },
      );
    }

    return subscriptionType;
  }

  throw new _GraphQLError.GraphQLError(
    'Can only have query, mutation and subscription operations.',
    {
      nodes: operation,
    },
  );
}
