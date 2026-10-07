"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getImplicitRoleForImg;
var _jsxAstUtils = require("jsx-ast-utils");
/**
 * Returns the implicit role for an img tag.
 */
function getImplicitRoleForImg(attributes) {
  var _getLiteralPropValue;
  var alt = (0, _jsxAstUtils.getProp)(attributes, 'alt');
  if (alt && (0, _jsxAstUtils.getLiteralPropValue)(alt) === '') {
    return '';
  }

  /**
   * If the src attribute can be determined to be an svg, allow the role to be set to 'img'
   * so that VoiceOver on Safari can be better supported.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#identifying_svg_as_an_image
   * @see https://bugs.webkit.org/show_bug.cgi?id=216364
   */
  var src = (0, _jsxAstUtils.getProp)(attributes, 'src');
  if (src && (_getLiteralPropValue = (0, _jsxAstUtils.getLiteralPropValue)(src)) !== null && _getLiteralPropValue !== void 0 && _getLiteralPropValue.includes('.svg')) {
    return '';
  }
  return 'img';
}
module.exports = exports.default;