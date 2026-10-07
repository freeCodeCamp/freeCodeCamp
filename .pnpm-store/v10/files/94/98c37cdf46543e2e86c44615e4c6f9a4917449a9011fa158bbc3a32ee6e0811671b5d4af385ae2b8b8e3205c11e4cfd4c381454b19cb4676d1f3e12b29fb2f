"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
function deepClone(value, cache) {
  if (value !== null) {
    if (cache.has(value)) return cache.get(value);
    let cloned;
    if (Array.isArray(value)) {
      cloned = new Array(value.length);
      cache.set(value, cloned);
      for (let i = 0; i < value.length; i++) {
        cloned[i] = typeof value[i] !== "object" ? value[i] : deepClone(value[i], cache);
      }
    } else {
      cloned = {};
      cache.set(value, cloned);
      const keys = Object.keys(value);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        cloned[key] = typeof value[key] !== "object" ? value[key] : deepClone(value[key], cache);
      }
    }
    return cloned;
  }
  return value;
}
function _default(value) {
  if (typeof value !== "object") return value;
  return deepClone(value, new Map());
}
0 && 0;

//# sourceMappingURL=clone-deep.js.map
