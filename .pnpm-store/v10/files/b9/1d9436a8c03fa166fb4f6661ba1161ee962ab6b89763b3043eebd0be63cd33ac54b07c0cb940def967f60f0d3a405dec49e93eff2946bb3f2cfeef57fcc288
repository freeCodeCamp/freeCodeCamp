"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle"));

var _hyphenateStyle = _interopRequireDefault(require("./hyphenateStyle"));

var _isTransform = _interopRequireDefault(require("./isTransform"));

function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue((0, _hyphenateStyle.default)(property)) || (0, _getComputedStyle.default)(node).getPropertyValue((0, _hyphenateStyle.default)(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty((0, _hyphenateStyle.default)(key));
    } else if ((0, _isTransform.default)(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += (0, _hyphenateStyle.default)(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

var _default = style;
exports.default = _default;
module.exports = exports["default"];