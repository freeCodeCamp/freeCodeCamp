'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromMemberExpression;

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extractor function for a MemberExpression type value node.
 * A member expression is accessing a property on an object `obj.property`.
 *
 * @param - value - AST Value object with type `MemberExpression`
 * @returns - The extracted value converted to correct type
 *  and maintaing `obj.property` convention.
 */
function extractValueFromMemberExpression(value) {
  return (0, _index2.default)(value.object) + '.' + (0, _index2.default)(value.property);
}