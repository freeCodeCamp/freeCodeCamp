'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromSequenceExpression;
/**
 * Extractor function for a SequenceExpression type value node.
 * A Sequence expression is an object with an attribute named
 * expressions which contains an array of different types
 *  of expression objects.
 *
 * @returns - An array of the extracted elements.
 */
function extractValueFromSequenceExpression(value) {
  // eslint-disable-next-line global-require
  var getValue = require('.').default;
  return value.expressions.map(function (element) {
    return getValue(element);
  });
}