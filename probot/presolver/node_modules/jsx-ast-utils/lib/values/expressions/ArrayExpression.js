'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromArrayExpression;

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extractor function for an ArrayExpression type value node.
 * An array expression is an expression with [] syntax.
 *
 * @returns - An array of the extracted elements.
 */
function extractValueFromArrayExpression(value) {
  return value.elements.map(function (element) {
    return (0, _index2.default)(element);
  });
}