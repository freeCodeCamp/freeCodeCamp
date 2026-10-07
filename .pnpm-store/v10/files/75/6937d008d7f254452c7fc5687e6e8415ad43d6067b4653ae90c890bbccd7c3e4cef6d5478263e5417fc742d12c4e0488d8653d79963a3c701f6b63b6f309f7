"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getTabIndex;
var _jsxAstUtils = require("jsx-ast-utils");
/**
 * Returns the tabIndex value.
 */
function getTabIndex(tabIndex) {
  var literalValue = (0, _jsxAstUtils.getLiteralPropValue)(tabIndex);

  // String and number values.
  if (['string', 'number'].indexOf(typeof literalValue) > -1) {
    // Empty string will convert to zero, so check for it explicity.
    if (typeof literalValue === 'string' && literalValue.length === 0) {
      return undefined;
    }
    var value = Number(literalValue);
    if (Number.isNaN(value)) {
      return undefined;
    }
    return Number.isInteger(value) ? value : undefined;
  }

  // Booleans are not valid values, return undefined.
  if (literalValue === true || literalValue === false) {
    return undefined;
  }
  return (0, _jsxAstUtils.getPropValue)(tabIndex);
}
module.exports = exports.default;