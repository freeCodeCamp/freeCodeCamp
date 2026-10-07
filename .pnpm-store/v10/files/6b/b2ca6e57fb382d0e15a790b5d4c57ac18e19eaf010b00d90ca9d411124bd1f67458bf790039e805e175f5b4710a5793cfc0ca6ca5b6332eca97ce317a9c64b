"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeSourceMap;
function _remapping() {
  const data = require("@jridgewell/remapping");
  _remapping = function () {
    return data;
  };
  return data;
}
function mergeSourceMap(inputMap, map, sourceFileName) {
  const source = sourceFileName.replace(/\\/g, "/");
  let found = false;
  const result = _remapping()(rootless(map), (s, ctx) => {
    if (s === source && !found) {
      found = true;
      ctx.source = "";
      return rootless(inputMap);
    }
    return null;
  });
  if (typeof inputMap.sourceRoot === "string") {
    result.sourceRoot = inputMap.sourceRoot;
  }
  return Object.assign({}, result);
}
function rootless(map) {
  return Object.assign({}, map, {
    sourceRoot: null
  });
}
0 && 0;

//# sourceMappingURL=merge-map.js.map
