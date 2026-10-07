"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = siblings;

var _collectSiblings = _interopRequireDefault(require("./collectSiblings"));

/**
 * Collects all previous and next sibling elements of a given element.
 * 
 * @param node the element
 */
function siblings(node) {
  return (0, _collectSiblings.default)(node && node.parentElement ? node.parentElement.firstElementChild : null, node);
}

module.exports = exports["default"];