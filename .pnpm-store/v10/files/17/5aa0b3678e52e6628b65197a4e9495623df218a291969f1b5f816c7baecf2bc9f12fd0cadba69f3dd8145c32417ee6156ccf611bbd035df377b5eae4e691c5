"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = isWindow;

var _isDocument = _interopRequireDefault(require("./isDocument"));

function isWindow(node) {
  if ('window' in node && node.window === node) return node;
  if ((0, _isDocument.default)(node)) return node.defaultView || false;
  return false;
}

module.exports = exports["default"];