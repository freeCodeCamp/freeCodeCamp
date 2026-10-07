'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromConditionalExpression;
/**
 * Extractor function for a ConditionalExpression type value node.
 *
 * @param - value - AST Value object with type `ConditionalExpression`
 * @returns - The extracted value converted to correct type.
 */
function extractValueFromConditionalExpression(value) {
  // eslint-disable-next-line global-require
  var getValue = require('.').default;
  var test = value.test,
      alternate = value.alternate,
      consequent = value.consequent;


  return getValue(test) ? getValue(consequent) : getValue(alternate);
}