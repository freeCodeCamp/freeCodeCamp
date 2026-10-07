"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.clearPath = clearPath;
exports.clearScope = clearScope;
exports.getCachedPaths = getCachedPaths;
exports.getOrCreateCachedPaths = getOrCreateCachedPaths;
exports.scope = exports.path = void 0;
let pathsCache = exports.path = new WeakMap();
let scope = exports.scope = new WeakMap();
function clear() {
  clearPath();
  clearScope();
}
function clearPath() {
  exports.path = pathsCache = new WeakMap();
}
function clearScope() {
  exports.scope = scope = new WeakMap();
}
function getCachedPaths(path) {
  const {
    parent,
    parentPath
  } = path;
  return pathsCache.get(parent);
}
function getOrCreateCachedPaths(node, parentPath) {
  let paths = pathsCache.get(node);
  if (!paths) pathsCache.set(node, paths = new Map());
  return paths;
}

//# sourceMappingURL=cache.js.map
