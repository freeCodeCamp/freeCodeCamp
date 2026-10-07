"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = closest;

var _matches = _interopRequireDefault(require("./matches"));

/**
 * Returns the closest parent element that matches a given selector.
 * 
 * @param node the reference element
 * @param selector the selector to match
 * @param stopAt stop traversing when this element is found
 */
function closest(node, selector, stopAt) {
  if (node.closest && !stopAt) node.closest(selector);
  var nextNode = node;

  do {
    if ((0, _matches.default)(nextNode, selector)) return nextNode;
    nextNode = nextNode.parentElement;
  } while (nextNode && nextNode !== stopAt && nextNode.nodeType === document.ELEMENT_NODE);

  return null;
}

module.exports = exports["default"];