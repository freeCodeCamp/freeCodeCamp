"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _addEventListener = _interopRequireDefault(require("./addEventListener"));

var _removeEventListener = _interopRequireDefault(require("./removeEventListener"));

function listen(node, eventName, handler, options) {
  (0, _addEventListener.default)(node, eventName, handler, options);
  return function () {
    (0, _removeEventListener.default)(node, eventName, handler, options);
  };
}

var _default = listen;
exports.default = _default;
module.exports = exports["default"];