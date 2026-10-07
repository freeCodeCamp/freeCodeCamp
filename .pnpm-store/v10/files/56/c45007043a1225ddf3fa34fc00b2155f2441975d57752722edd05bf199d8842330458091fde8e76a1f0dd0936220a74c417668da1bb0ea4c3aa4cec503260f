'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function deferred() {
  var def = {};
  def.promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  return def;
}
function arrayOfDeferred(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }
  return arr;
}

exports.arrayOfDeferred = arrayOfDeferred;
exports["default"] = deferred;
