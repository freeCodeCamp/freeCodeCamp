"use strict";

exports.__esModule = true;
exports.default = text;
var regExpNbspEntity = /&nbsp;/gi;
var regExpNbspHex = /\xA0/g;
var regExpSpaces = /\s+([^\s])/gm;
/**
 * Collects the text content of a given element.
 * 
 * @param node the element
 * @param trim whether to remove trailing whitespace chars
 * @param singleSpaces whether to convert multiple whitespace chars into a single space character
 */

function text(node, trim, singleSpaces) {
  if (trim === void 0) {
    trim = true;
  }

  if (singleSpaces === void 0) {
    singleSpaces = true;
  }

  var elementText = '';

  if (node) {
    elementText = (node.textContent || '').replace(regExpNbspEntity, ' ').replace(regExpNbspHex, ' ');

    if (trim) {
      elementText = elementText.trim();
    }

    if (singleSpaces) {
      elementText = elementText.replace(regExpSpaces, ' $1');
    }
  }

  return elementText;
}

module.exports = exports["default"];