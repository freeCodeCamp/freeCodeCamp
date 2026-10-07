"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = filterEvents;

var _contains = _interopRequireDefault(require("./contains"));

var _querySelectorAll = _interopRequireDefault(require("./querySelectorAll"));

function filterEvents(selector, handler) {
  return function filterHandler(e) {
    var top = e.currentTarget;
    var target = e.target;
    var matches = (0, _querySelectorAll.default)(top, selector);
    if (matches.some(function (match) {
      return (0, _contains.default)(match, target);
    })) handler.call(this, e);
  };
}

module.exports = exports["default"];