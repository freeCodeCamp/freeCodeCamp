"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromJSXElement;
/**
 * Extractor function for a JSXElement type value node.
 *
 * Returns self-closing element with correct name.
 */
function extractValueFromJSXElement(value) {
  return "<" + value.openingElement.name.name + " />";
}