"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inherits;
var _index = require("../constants/index.js");
var _inheritsComments = require("../comments/inheritsComments.js");
function inherits(child, parent) {
  if (!child || !parent) return child;
  for (const key of _index.INHERIT_KEYS.optional) {
    if (child[key] == null) {
      child[key] = parent[key];
    }
  }
  for (const key of Object.keys(parent)) {
    if (key.startsWith("_") && key !== "__clone") {
      child[key] = parent[key];
    }
  }
  for (const key of _index.INHERIT_KEYS.force) {
    child[key] = parent[key];
  }
  (0, _inheritsComments.default)(child, parent);
  return child;
}

//# sourceMappingURL=inherits.js.map
