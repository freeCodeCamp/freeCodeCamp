"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxAstUtils = require("jsx-ast-utils");
/**
 * Returns true if all items in baseAttributes are found in attributes. Always
 * returns true if baseAttributes is empty.
 */
function attributesComparator() {
  var baseAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return baseAttributes.every(function (baseAttr) {
    return attributes.some(function (attribute) {
      // Guard against non-JSXAttribute nodes like JSXSpreadAttribute
      if (attribute.type !== 'JSXAttribute') {
        return false;
      }
      // Attribute matches.
      if (baseAttr.name !== (0, _jsxAstUtils.propName)(attribute)) {
        return false;
      }
      // Value exists and does not match.
      if (baseAttr.value && baseAttr.value !== (0, _jsxAstUtils.getLiteralPropValue)(attribute)) {
        return false;
      }
      return true;
    });
  });
}
var _default = exports["default"] = attributesComparator;
module.exports = exports.default;