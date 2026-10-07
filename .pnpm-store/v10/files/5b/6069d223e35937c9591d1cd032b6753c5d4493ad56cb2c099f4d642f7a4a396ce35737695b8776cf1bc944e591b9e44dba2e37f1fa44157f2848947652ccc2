'use strict';

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
  // eslint-disable-next-line global-require
  var getValue = require('.').default;

  var Tag = value.openingElement.name.name;
  if (value.openingElement.selfClosing) {
    return '<' + Tag + ' />';
  }
  return '<' + Tag + '>' + [].concat(value.children).map(function (x) {
    return getValue(x);
  }).join('') + '</' + Tag + '>';
}