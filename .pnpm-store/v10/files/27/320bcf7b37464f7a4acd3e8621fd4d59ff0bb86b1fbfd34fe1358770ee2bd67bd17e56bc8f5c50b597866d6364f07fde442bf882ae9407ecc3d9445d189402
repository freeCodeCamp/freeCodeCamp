"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getMargin;
var toNumber = function toNumber(n) {
  return parseInt(n) || 0;
};

function getMargin(style) {
  return {
    top: style ? toNumber(style.marginTop) : 0,
    right: style ? toNumber(style.marginRight) : 0,
    bottom: style ? toNumber(style.marginBottom) : 0,
    left: style ? toNumber(style.marginLeft) : 0
  };
}

module.exports = exports["default"];