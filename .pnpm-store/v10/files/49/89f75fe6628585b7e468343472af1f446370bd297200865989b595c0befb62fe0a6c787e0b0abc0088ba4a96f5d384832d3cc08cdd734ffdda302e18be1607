"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _createForOfIteratorHelperLoose;
var _unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = (0, _unsupportedIterableToArray.default)(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) {
        return {
          done: true
        };
      }
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

//# sourceMappingURL=createForOfIteratorHelperLoose.js.map
