'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.locatedError = locatedError;

var _toError = require('../jsutils/toError.js');

var _GraphQLError = require('./GraphQLError.js');

/**
 * Given an arbitrary value, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
function locatedError(rawOriginalError, nodes, path) {
  var _nodes;

  const originalError = (0, _toError.toError)(rawOriginalError); // Note: this uses a brand-check to support GraphQL errors originating from other contexts.

  if (isLocatedGraphQLError(originalError)) {
    return originalError;
  }

  return new _GraphQLError.GraphQLError(originalError.message, {
    nodes:
      (_nodes = originalError.nodes) !== null && _nodes !== void 0
        ? _nodes
        : nodes,
    source: originalError.source,
    positions: originalError.positions,
    path,
    originalError,
  });
}

function isLocatedGraphQLError(error) {
  return Array.isArray(error.path);
}
