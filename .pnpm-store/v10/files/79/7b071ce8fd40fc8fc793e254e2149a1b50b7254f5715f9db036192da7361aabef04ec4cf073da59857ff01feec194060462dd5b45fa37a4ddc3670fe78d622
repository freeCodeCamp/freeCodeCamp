"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = traverseFast;
var _index = require("../definitions/index.js");
const _skip = Symbol();
const _stop = Symbol();
function traverseFast(node, enter, opts) {
  if (!node) return false;
  const keys = _index.VISITOR_KEYS[node.type];
  if (!keys) return false;
  opts = opts || {};
  const ret = enter(node, opts);
  if (ret !== undefined) {
    switch (ret) {
      case _skip:
        return false;
      case _stop:
        return true;
    }
  }
  for (const key of keys) {
    const subNode = node[key];
    if (!subNode) continue;
    if (Array.isArray(subNode)) {
      for (const node of subNode) {
        if (traverseFast(node, enter, opts)) return true;
      }
    } else {
      if (traverseFast(subNode, enter, opts)) return true;
    }
  }
  return false;
}
traverseFast.skip = _skip;
traverseFast.stop = _stop;

//# sourceMappingURL=traverseFast.js.map
