'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromUnaryExpression;

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extractor function for a UnaryExpression type value node.
 * A unary expression is an expression with a unary operator.
 * For example, !"foobar" will evaluate to false, so this will return false.
 *
 * @param - value - AST Value object with type `UnaryExpression`
 * @returns - The extracted value converted to correct type.
 */
function extractValueFromUnaryExpression(value) {
  var operator = value.operator,
      argument = value.argument;


  switch (operator) {
    case '-':
      return -(0, _index2.default)(argument);
    case '+':
      return +(0, _index2.default)(argument); // eslint-disable-line no-implicit-coercion
    case '!':
      return !(0, _index2.default)(argument);
    case '~':
      return ~(0, _index2.default)(argument); // eslint-disable-line no-bitwise
    case 'delete':
      // I believe delete statements evaluate to true.
      return true;
    case 'typeof':
    case 'void':
    default:
      return undefined;
  }
}