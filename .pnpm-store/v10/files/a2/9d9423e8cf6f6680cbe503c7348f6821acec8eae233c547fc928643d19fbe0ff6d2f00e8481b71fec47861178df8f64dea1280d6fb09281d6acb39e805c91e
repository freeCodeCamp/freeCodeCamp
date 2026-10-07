"use strict";

exports.__esModule = true;
exports.default = prepend;

/**
 * Insert a given element as the first child of a parent element.
 * 
 * @param node the element to prepend
 * @param parent the parent element
 */
function prepend(node, parent) {
  if (node && parent) {
    if (parent.firstElementChild) {
      parent.insertBefore(node, parent.firstElementChild);
    } else {
      parent.appendChild(node);
    }

    return node;
  }

  return null;
}

module.exports = exports["default"];