"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.finalize = finalize;
exports.flattenToSet = flattenToSet;
function finalize(deepArr) {
  return Object.freeze(deepArr);
}
function flattenToSet(arr) {
  const result = new Set();
  const stack = [arr];
  while (stack.length > 0) {
    for (const el of stack.pop()) {
      if (Array.isArray(el)) stack.push(el);else result.add(el);
    }
  }
  return result;
}
0 && 0;

//# sourceMappingURL=deep-array.js.map
