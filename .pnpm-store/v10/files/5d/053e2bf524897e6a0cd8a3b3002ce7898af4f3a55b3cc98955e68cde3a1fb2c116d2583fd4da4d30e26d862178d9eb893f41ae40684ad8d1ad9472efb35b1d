'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.graphql = graphql;
exports.graphqlSync = graphqlSync;

var _devAssert = require('./jsutils/devAssert.js');

var _isPromise = require('./jsutils/isPromise.js');

var _parser = require('./language/parser.js');

var _validate = require('./type/validate.js');

var _validate2 = require('./validation/validate.js');

var _execute = require('./execution/execute.js');

function graphql(args) {
  // Always return a Promise for a consistent API.
  return new Promise((resolve) => resolve(graphqlImpl(args)));
}
/**
 * The graphqlSync function also fulfills GraphQL operations by parsing,
 * validating, and executing a GraphQL document along side a GraphQL schema.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */

function graphqlSync(args) {
  const result = graphqlImpl(args); // Assert that the execution was synchronous.

  if ((0, _isPromise.isPromise)(result)) {
    throw new Error('GraphQL execution failed to complete synchronously.');
  }

  return result;
}

function graphqlImpl(args) {
  // Temporary for v15 to v16 migration. Remove in v17
  arguments.length < 2 ||
    (0, _devAssert.devAssert)(
      false,
      'graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.',
    );
  const {
    schema,
    source,
    rootValue,
    contextValue,
    variableValues,
    operationName,
    fieldResolver,
    typeResolver,
  } = args; // Validate Schema

  const schemaValidationErrors = (0, _validate.validateSchema)(schema);

  if (schemaValidationErrors.length > 0) {
    return {
      errors: schemaValidationErrors,
    };
  } // Parse

  let document;

  try {
    document = (0, _parser.parse)(source);
  } catch (syntaxError) {
    return {
      errors: [syntaxError],
    };
  } // Validate

  const validationErrors = (0, _validate2.validate)(schema, document);

  if (validationErrors.length > 0) {
    return {
      errors: validationErrors,
    };
  } // Execute

  return (0, _execute.execute)({
    schema,
    document,
    rootValue,
    contextValue,
    variableValues,
    operationName,
    fieldResolver,
    typeResolver,
  });
}
