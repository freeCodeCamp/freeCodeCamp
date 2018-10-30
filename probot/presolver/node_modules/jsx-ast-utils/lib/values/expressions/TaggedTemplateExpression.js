'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromTaggedTemplateExpression;

var _TemplateLiteral = require('./TemplateLiteral');

var _TemplateLiteral2 = _interopRequireDefault(_TemplateLiteral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the string value of a tagged template literal object.
 * Redirects the bulk of the work to `TemplateLiteral`.
 */
function extractValueFromTaggedTemplateExpression(value) {
  return (0, _TemplateLiteral2.default)(value.quasi);
}