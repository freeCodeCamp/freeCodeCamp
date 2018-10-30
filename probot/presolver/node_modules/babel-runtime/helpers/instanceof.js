"use strict";

exports.__esModule = true;

var _hasInstance = require("../core-js/symbol/has-instance");

var _hasInstance2 = _interopRequireDefault(_hasInstance);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (left, right) {
  if (right != null && typeof _symbol2.default !== "undefined" && right[_hasInstance2.default]) {
    return right[_hasInstance2.default](left);
  } else {
    return left instanceof right;
  }
};