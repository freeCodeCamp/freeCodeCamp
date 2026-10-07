'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.assertValidName = assertValidName;
exports.isValidNameError = isValidNameError;

var _devAssert = require('../jsutils/devAssert.js');

var _GraphQLError = require('../error/GraphQLError.js');

var _assertName = require('../type/assertName.js');

/* c8 ignore start */

/**
 * Upholds the spec rules about naming.
 * @deprecated Please use `assertName` instead. Will be removed in v17
 */
function assertValidName(name) {
  const error = isValidNameError(name);

  if (error) {
    throw error;
  }

  return name;
}
/**
 * Returns an Error if a name is invalid.
 * @deprecated Please use `assertName` instead. Will be removed in v17
 */

function isValidNameError(name) {
  typeof name === 'string' ||
    (0, _devAssert.devAssert)(false, 'Expected name to be a string.');

  if (name.startsWith('__')) {
    return new _GraphQLError.GraphQLError(
      `Name "${name}" must not begin with "__", which is reserved by GraphQL introspection.`,
    );
  }

  try {
    (0, _assertName.assertName)(name);
  } catch (error) {
    return error;
  }
}
/* c8 ignore stop */
