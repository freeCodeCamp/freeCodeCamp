"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = scrollTo;

var _animationFrame = require("./animationFrame");

var _height = _interopRequireDefault(require("./height"));

var _isWindow = _interopRequireDefault(require("./isWindow"));

var _offset = _interopRequireDefault(require("./offset"));

var _scrollParent = _interopRequireDefault(require("./scrollParent"));

var _scrollTop = _interopRequireDefault(require("./scrollTop"));

/* eslint-disable no-nested-ternary */
function scrollTo(selected, scrollParent) {
  var offset = (0, _offset.default)(selected);
  var poff = {
    top: 0,
    left: 0
  };
  if (!selected) return undefined;
  var list = scrollParent || (0, _scrollParent.default)(selected);
  var isWin = (0, _isWindow.default)(list);
  var listScrollTop = (0, _scrollTop.default)(list);
  var listHeight = (0, _height.default)(list, true);
  if (!isWin) poff = (0, _offset.default)(list);
  offset = {
    top: offset.top - poff.top,
    left: offset.left - poff.left,
    height: offset.height,
    width: offset.width
  };
  var selectedHeight = offset.height;
  var selectedTop = offset.top + (isWin ? 0 : listScrollTop);
  var bottom = selectedTop + selectedHeight;
  listScrollTop = listScrollTop > selectedTop ? selectedTop : bottom > listScrollTop + listHeight ? bottom - listHeight : listScrollTop;
  var id = (0, _animationFrame.request)(function () {
    return (0, _scrollTop.default)(list, listScrollTop);
  });
  return function () {
    return (0, _animationFrame.cancel)(id);
  };
}

module.exports = exports["default"];