'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.introspectionFromSchema = introspectionFromSchema;

var _invariant = require('../jsutils/invariant.js');

var _parser = require('../language/parser.js');

var _execute = require('../execution/execute.js');

var _getIntrospectionQuery = require('./getIntrospectionQuery.js');

/**
 * Build an IntrospectionQuery from a GraphQLSchema
 *
 * IntrospectionQuery is useful for utilities that care about type and field
 * relationships, but do not need to traverse through those relationships.
 *
 * This is the inverse of buildClientSchema. The primary use case is outside
 * of the server context, for instance when doing schema comparisons.
 */
function introspectionFromSchema(schema, options) {
  const optionsWithDefaults = {
    specifiedByUrl: true,
    directiveIsRepeatable: true,
    schemaDescription: true,
    inputValueDeprecation: true,
    oneOf: true,
    ...options,
  };
  const document = (0, _parser.parse)(
    (0, _getIntrospectionQuery.getIntrospectionQuery)(optionsWithDefaults),
  );
  const result = (0, _execute.executeSync)({
    schema,
    document,
  });
  (!result.errors && result.data) || (0, _invariant.invariant)(false);
  return result.data;
}
