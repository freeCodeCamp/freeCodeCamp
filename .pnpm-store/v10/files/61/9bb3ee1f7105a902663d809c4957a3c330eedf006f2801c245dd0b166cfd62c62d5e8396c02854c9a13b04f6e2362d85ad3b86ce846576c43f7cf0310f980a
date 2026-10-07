"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNodeText = getNodeText;
var _helpers = require("./helpers");
function getNodeText(node) {
  if (node.matches('input[type=submit], input[type=button], input[type=reset]')) {
    return node.value;
  }
  return Array.from(node.childNodes).filter(child => child.nodeType === _helpers.TEXT_NODE && Boolean(child.textContent)).map(c => c.textContent).join('');
}