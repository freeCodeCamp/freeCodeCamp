"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderHorizontal = exports.currentPositionY = undefined;

var _reactDom = require("react-dom");

var currentPositionY = exports.currentPositionY = function currentPositionY() {
  var supportPageOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
  return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
};

var renderHorizontal = exports.renderHorizontal = function renderHorizontal(component, node, callback) {
  document.body.setAttribute('style', 'display: inline-block;');
  return (0, _reactDom.render)(component, node, callback);
};