"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _iterableToArrayLimit;
function _iterableToArrayLimit(arr, i) {
  var iterator = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (iterator == null) return;
  var _arr = [];
  var iteratorNormalCompletion = true;
  var didIteratorError = false;
  var step, iteratorError, next, _return;
  try {
    next = (iterator = iterator.call(arr)).next;
    if (i === 0) {
      if (Object(iterator) !== iterator) return;
      iteratorNormalCompletion = false;
    } else {
      for (; !(iteratorNormalCompletion = (step = next.call(iterator)).done); iteratorNormalCompletion = true) {
        _arr.push(step.value);
        if (_arr.length === i) break;
      }
    }
  } catch (err) {
    didIteratorError = true;
    iteratorError = err;
  } finally {
    try {
      if (!iteratorNormalCompletion && iterator["return"] != null) {
        _return = iterator["return"]();
        if (Object(_return) !== _return) return;
      }
    } finally {
      if (didIteratorError) throw iteratorError;
    }
  }
  return _arr;
}

//# sourceMappingURL=iterableToArrayLimit.js.map
