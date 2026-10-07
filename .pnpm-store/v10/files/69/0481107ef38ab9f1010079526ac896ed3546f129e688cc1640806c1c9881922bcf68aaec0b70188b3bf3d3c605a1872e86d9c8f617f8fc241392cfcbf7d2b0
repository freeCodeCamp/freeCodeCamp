"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = offsetParent;

var _css = _interopRequireDefault(require("./css"));

var _ownerDocument = _interopRequireDefault(require("./ownerDocument"));

var isHTMLElement = function isHTMLElement(e) {
  return !!e && 'offsetParent' in e;
};

function offsetParent(node) {
  var doc = (0, _ownerDocument.default)(node);
  var parent = node && node.offsetParent;

  while (isHTMLElement(parent) && parent.nodeName !== 'HTML' && (0, _css.default)(parent, 'position') === 'static') {
    parent = parent.offsetParent;
  }

  return parent || doc.documentElement;
}

module.exports = exports["default"];