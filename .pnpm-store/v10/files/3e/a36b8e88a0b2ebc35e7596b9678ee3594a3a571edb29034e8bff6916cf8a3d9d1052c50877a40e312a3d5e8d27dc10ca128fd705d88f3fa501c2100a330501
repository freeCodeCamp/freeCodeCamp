"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _regeneratorValues;
function _regeneratorValues(iterable) {
  if (iterable != null) {
    var iteratorMethod = iterable[typeof Symbol === "function" && Symbol.iterator || "@@iterator"],
      i = 0;
    if (iteratorMethod) {
      return iteratorMethod.call(iterable);
    }
    if (typeof iterable.next === "function") {
      return iterable;
    }
    if (!isNaN(iterable.length)) {
      return {
        next: function () {
          if (iterable && i >= iterable.length) iterable = undefined;
          return {
            value: iterable && iterable[i++],
            done: !iterable
          };
        }
      };
    }
  }
  throw new TypeError(typeof iterable + " is not iterable");
}

//# sourceMappingURL=regeneratorValues.js.map
