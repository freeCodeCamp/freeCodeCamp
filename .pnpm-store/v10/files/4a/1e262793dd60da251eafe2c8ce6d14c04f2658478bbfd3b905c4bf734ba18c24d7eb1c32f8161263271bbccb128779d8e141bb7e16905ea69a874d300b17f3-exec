"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deprecate;

var _logging = require("./logging");

function deprecate(fn, message) {
  let printed = false;
  return (...args) => {
    if (!printed) {
      (0, _logging.warn)(message);
      printed = true;
    }

    return fn(...args);
  };
}