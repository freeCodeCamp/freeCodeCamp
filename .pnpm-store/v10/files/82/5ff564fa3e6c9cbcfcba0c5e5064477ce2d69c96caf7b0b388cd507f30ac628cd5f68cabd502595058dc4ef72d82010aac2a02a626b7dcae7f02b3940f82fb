'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromUpdateExpression;
/**
 * Extractor function for an UpdateExpression type value node.
 * An update expression is an expression with an update operator.
 * For example, foo++ will evaluate to foo + 1.
 *
 * @param - value - AST Value object with type `UpdateExpression`
 * @returns - The extracted value converted to correct type.
 */
function extractValueFromUpdateExpression(value) {
  // eslint-disable-next-line global-require
  var getValue = require('.').default;
  var operator = value.operator,
      argument = value.argument,
      prefix = value.prefix;


  var val = getValue(argument);

  switch (operator) {
    case '++':
      return prefix ? ++val : val++; // eslint-disable-line no-plusplus
    case '--':
      return prefix ? --val : val--; // eslint-disable-line no-plusplus
    default:
      return undefined;
  }
}