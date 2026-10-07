import { CANCEL } from '@redux-saga/symbols';

var MAX_SIGNED_INT = 2147483647;
function delayP(ms, val) {
  if (val === void 0) {
    val = true;
  }
  var timeoutId;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(resolve, Math.min(MAX_SIGNED_INT, ms), val);
  });
  promise[CANCEL] = function () {
    clearTimeout(timeoutId);
  };
  return promise;
}

export { delayP as default };
