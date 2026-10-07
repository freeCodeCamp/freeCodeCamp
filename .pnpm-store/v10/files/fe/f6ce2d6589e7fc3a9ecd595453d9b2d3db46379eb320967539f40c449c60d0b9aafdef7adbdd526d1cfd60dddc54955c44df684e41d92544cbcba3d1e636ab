"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = getComputedStyle;

var _ownerWindow = _interopRequireDefault(require("./ownerWindow"));

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */
function getComputedStyle(node, psuedoElement) {
  return (0, _ownerWindow.default)(node).getComputedStyle(node, psuedoElement);
}

module.exports = exports["default"];