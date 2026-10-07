'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromOptionalMemberExpression;
/**
 * Extractor function for a OptionalMemberExpression type value node.
 * A member expression is accessing a property on an object `obj.property`.
 *
 * @param - value - AST Value object with type `OptionalMemberExpression`
 * @returns - The extracted value converted to correct type
 *  and maintaing `obj?.property` convention.
 */
function extractValueFromOptionalMemberExpression(value) {
  // eslint-disable-next-line global-require
  var getValue = require('.').default;
  return getValue(value.object) + '?.' + getValue(value.property);
}