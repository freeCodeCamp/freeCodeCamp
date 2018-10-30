"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var includes = function includes(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
};

exports.default = includes;
module.exports = exports["default"];