'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromOptionalCallExpression;
/**
 * Extractor function for a OptionalCallExpression type value node.
 * A member expression is accessing a property on an object `obj.property` and invoking it.
 *
 * @param - value - AST Value object with type `OptionalCallExpression`
 * @returns - The extracted value converted to correct type
 *  and maintaing `obj.property?.()` convention.
 */
function extractValueFromOptionalCallExpression(value) {
  // eslint-disable-next-line global-require
  var getValue = require('.').default;
  return getValue(value.callee) + '?.(' + value.arguments.map(function (x) {
    return getValue(x);
  }).join(', ') + ')';
}