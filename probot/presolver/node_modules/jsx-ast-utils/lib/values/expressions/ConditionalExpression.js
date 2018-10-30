'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromConditionalExpression;

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extractor function for a ConditionalExpression type value node.
 *
 * @param - value - AST Value object with type `ConditionalExpression`
 * @returns - The extracted value converted to correct type.
 */
function extractValueFromConditionalExpression(value) {
  var test = value.test,
      alternate = value.alternate,
      consequent = value.consequent;


  return (0, _index2.default)(test) ? (0, _index2.default)(consequent) : (0, _index2.default)(alternate);
}