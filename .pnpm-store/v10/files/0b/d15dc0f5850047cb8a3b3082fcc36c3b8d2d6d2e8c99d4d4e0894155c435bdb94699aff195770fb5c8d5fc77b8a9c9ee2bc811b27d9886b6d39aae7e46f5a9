"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function dictionaryFrom(array) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return array.reduce(function (memo, element) {
    memo[element] = value || {
      value: element
    };
    return memo;
  }, {});
}

var _default = dictionaryFrom;
exports.default = _default;