"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dynamic = dynamic;
exports.throwError = throwError;
Object.defineProperty(exports, "composeProviders", {
  enumerable: true,
  get: function () {
    return _helpers.composeProviders;
  }
});

var _helpers = require("./helpers");

function dynamic(fn) {
  return {
    fn,
    [_helpers.DYNAMIC_PROVIDER]: true
  };
}

function throwError(error) {
  return dynamic(() => {
    throw error;
  });
}