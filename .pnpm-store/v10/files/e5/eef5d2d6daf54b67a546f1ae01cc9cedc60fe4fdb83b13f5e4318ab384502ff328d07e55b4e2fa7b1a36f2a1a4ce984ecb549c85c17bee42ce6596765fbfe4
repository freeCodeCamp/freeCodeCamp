"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = traverseForScope;
var _t = require("@babel/types");
var _index = require("../index.js");
var _visitors = require("../visitors.js");
var _context = require("../path/context.js");
const {
  VISITOR_KEYS
} = _t;
function traverseForScope(path, visitors, state) {
  const exploded = (0, _visitors.explode)(visitors);
  if (exploded.enter || exploded.exit) {
    throw new Error("Should not be used with enter/exit visitors.");
  }
  _traverse(path.parentPath, path.parent, path.node, path.container, path.key, path.listKey, path.hub, path);
  function _traverse(parentPath, parent, node, container, key, listKey, hub, inPath) {
    if (!node) {
      return;
    }
    const path = inPath || _index.NodePath.get({
      hub,
      parentPath,
      parent,
      container,
      listKey,
      key
    });
    _context._forceSetScope.call(path);
    const visitor = exploded[node.type];
    if (visitor != null && visitor.enter) {
      for (const visit of visitor.enter) {
        visit.call(state, path, state);
      }
    }
    if (path.shouldSkip) {
      return;
    }
    const keys = VISITOR_KEYS[node.type];
    if (!(keys != null && keys.length)) {
      return;
    }
    for (const key of keys) {
      const prop = node[key];
      if (!prop) continue;
      if (Array.isArray(prop)) {
        for (let i = 0; i < prop.length; i++) {
          const value = prop[i];
          _traverse(path, node, value, prop, i, key);
        }
      } else {
        _traverse(path, node, prop, node, key, null);
      }
    }
    if (visitor != null && visitor.exit) {
      for (const visit of visitor.exit) {
        visit.call(state, path, state);
      }
    }
  }
}

//# sourceMappingURL=traverseForScope.js.map
