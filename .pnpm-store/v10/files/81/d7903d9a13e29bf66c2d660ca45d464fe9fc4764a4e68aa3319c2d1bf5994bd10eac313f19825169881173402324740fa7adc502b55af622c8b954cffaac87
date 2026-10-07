"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = position;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _css = _interopRequireDefault(require("./css"));

var _offset = _interopRequireDefault(require("./offset"));

var _offsetParent = _interopRequireDefault(require("./offsetParent"));

var _scrollLeft = _interopRequireDefault(require("./scrollLeft"));

var _scrollTop = _interopRequireDefault(require("./scrollTop"));

var nodeName = function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
};
/**
 * Returns the relative position of a given element.
 * 
 * @param node the element
 * @param offsetParent the offset parent
 */


function position(node, offsetParent) {
  var parentOffset = {
    top: 0,
    left: 0
  };
  var offset; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent

  if ((0, _css.default)(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    var parent = offsetParent || (0, _offsetParent.default)(node);
    offset = (0, _offset.default)(node);
    if (nodeName(parent) !== 'html') parentOffset = (0, _offset.default)(parent);
    var borderTop = String((0, _css.default)(parent, 'borderTopWidth') || 0);
    parentOffset.top += parseInt(borderTop, 10) - (0, _scrollTop.default)(parent) || 0;
    var borderLeft = String((0, _css.default)(parent, 'borderLeftWidth') || 0);
    parentOffset.left += parseInt(borderLeft, 10) - (0, _scrollLeft.default)(parent) || 0;
  }

  var marginTop = String((0, _css.default)(node, 'marginTop') || 0);
  var marginLeft = String((0, _css.default)(node, 'marginLeft') || 0); // Subtract parent offsets and node margins

  return (0, _extends2.default)({}, offset, {
    top: offset.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
    left: offset.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
  });
}

module.exports = exports["default"];