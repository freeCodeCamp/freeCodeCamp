"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _maybeArrayLike;
var _arrayLikeToArray = require("./arrayLikeToArray.js");
function _maybeArrayLike(orElse, arr, i) {
  if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
    var len = arr.length;
    return (0, _arrayLikeToArray.default)(arr, i !== void 0 && i < len ? i : len);
  }
  return orElse(arr, i);
}

//# sourceMappingURL=maybeArrayLike.js.map
