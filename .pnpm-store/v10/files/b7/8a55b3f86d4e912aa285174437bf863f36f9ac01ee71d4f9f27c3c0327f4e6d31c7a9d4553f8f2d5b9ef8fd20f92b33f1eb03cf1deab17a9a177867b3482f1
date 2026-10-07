"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = offset;

var _contains = _interopRequireDefault(require("./contains"));

var _ownerDocument = _interopRequireDefault(require("./ownerDocument"));

var _scrollLeft = _interopRequireDefault(require("./scrollLeft"));

var _scrollTop = _interopRequireDefault(require("./scrollTop"));

/**
 * Returns the offset of a given element, including top and left positions, width and height.
 * 
 * @param node the element
 */
function offset(node) {
  var doc = (0, _ownerDocument.default)(node);
  var box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  var docElem = doc && doc.documentElement; // Make sure it's not a disconnected DOM node

  if (!docElem || !(0, _contains.default)(docElem, node)) return box;
  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
  box = {
    top: box.top + (0, _scrollTop.default)(docElem) - (docElem.clientTop || 0),
    left: box.left + (0, _scrollLeft.default)(docElem) - (docElem.clientLeft || 0),
    width: box.width,
    height: box.height
  };
  return box;
}

module.exports = exports["default"];