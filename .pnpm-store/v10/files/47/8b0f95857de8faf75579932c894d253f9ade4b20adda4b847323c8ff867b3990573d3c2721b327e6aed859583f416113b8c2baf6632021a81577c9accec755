'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.syntaxError = syntaxError;

var _GraphQLError = require('./GraphQLError.js');

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */
function syntaxError(source, position, description) {
  return new _GraphQLError.GraphQLError(`Syntax Error: ${description}`, {
    source,
    positions: [position],
  });
}
