"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = traverse;
var _index = require("../definitions/index.js");
function traverse(node, handlers, state) {
  if (typeof handlers === "function") {
    handlers = {
      enter: handlers
    };
  }
  const {
    enter,
    exit
  } = handlers;
  traverseSimpleImpl(node, enter, exit, state, []);
}
function traverseSimpleImpl(node, enter, exit, state, ancestors) {
  const keys = _index.VISITOR_KEYS[node.type];
  if (!keys) return;
  if (enter) enter(node, ancestors, state);
  for (const key of keys) {
    const subNode = node[key];
    if (Array.isArray(subNode)) {
      for (let i = 0; i < subNode.length; i++) {
        const child = subNode[i];
        if (!child) continue;
        ancestors.push({
          node,
          key,
          index: i
        });
        traverseSimpleImpl(child, enter, exit, state, ancestors);
        ancestors.pop();
      }
    } else if (subNode) {
      ancestors.push({
        node,
        key
      });
      traverseSimpleImpl(subNode, enter, exit, state, ancestors);
      ancestors.pop();
    }
  }
  if (exit) exit(node, ancestors, state);
}

//# sourceMappingURL=traverse.js.map
