"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIterableIterator = isIterableIterator;
exports.mergeOptions = mergeOptions;
function mergeOptions(target, source) {
  for (const k of Object.keys(source)) {
    if ((k === "parserOpts" || k === "generatorOpts" || k === "assumptions") && source[k]) {
      const parserOpts = source[k];
      const targetObj = target[k] || (target[k] = {});
      mergeDefaultFields(targetObj, parserOpts);
    } else {
      const val = source[k];
      if (val !== undefined) target[k] = val;
    }
  }
}
function mergeDefaultFields(target, source) {
  for (const k of Object.keys(source)) {
    const val = source[k];
    if (val !== undefined) target[k] = val;
  }
}
function isIterableIterator(value) {
  return !!value && typeof value.next === "function" && typeof value[Symbol.iterator] === "function";
}
0 && 0;

//# sourceMappingURL=util.js.map
