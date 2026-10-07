'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var symbols = require('@redux-saga/symbols');

var MAX_SIGNED_INT = 2147483647;
function delayP(ms, val) {
  if (val === void 0) {
    val = true;
  }
  var timeoutId;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(resolve, Math.min(MAX_SIGNED_INT, ms), val);
  });
  promise[symbols.CANCEL] = function () {
    clearTimeout(timeoutId);
  };
  return promise;
}

exports["default"] = delayP;
