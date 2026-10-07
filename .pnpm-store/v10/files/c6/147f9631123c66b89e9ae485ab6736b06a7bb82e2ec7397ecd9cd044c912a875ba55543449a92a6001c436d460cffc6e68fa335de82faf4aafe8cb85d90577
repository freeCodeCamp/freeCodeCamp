"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Hub", {
  enumerable: true,
  get: function () {
    return _hub.default;
  }
});
Object.defineProperty(exports, "NodePath", {
  enumerable: true,
  get: function () {
    return _index.default;
  }
});
Object.defineProperty(exports, "Scope", {
  enumerable: true,
  get: function () {
    return _index2.default;
  }
});
exports.visitors = exports.default = void 0;
require("./path/context.js");
var visitors = require("./visitors.js");
exports.visitors = visitors;
var _t = require("@babel/types");
var cache = require("./cache.js");
var _traverseNode = require("./traverse-node.js");
var _index = require("./path/index.js");
var _index2 = require("./scope/index.js");
var _hub = require("./hub.js");
const {
  VISITOR_KEYS,
  removeProperties,
  traverseFast
} = _t;
function traverse(parent, opts = {}, scope, state, parentPath, visitSelf) {
  if (!parent) return;
  if (!opts.noScope && !scope) {
    if (parent.type !== "Program" && parent.type !== "File") {
      throw new Error("You must pass a scope and parentPath unless traversing a Program/File. " + `Instead of that you tried to traverse a ${parent.type} node without ` + "passing scope and parentPath.");
    }
  }
  if (!parentPath && visitSelf) {
    throw new Error("visitSelf can only be used when providing a NodePath.");
  }
  if (!VISITOR_KEYS[parent.type]) {
    return;
  }
  visitors.explode(opts);
  (0, _traverseNode.traverseNode)(parent, opts, scope, state, parentPath, undefined, visitSelf);
}
var _default = exports.default = traverse;
traverse.visitors = visitors;
traverse.verify = visitors.verify;
traverse.explode = visitors.explode;
traverse.cheap = function (node, enter) {
  traverseFast(node, enter);
  return;
};
traverse.node = function (node, opts, scope, state, path, skipKeys) {
  (0, _traverseNode.traverseNode)(node, opts, scope, state, path, skipKeys);
};
traverse.clearNode = function (node, opts) {
  removeProperties(node, opts);
};
traverse.removeProperties = function (tree, opts) {
  traverseFast(tree, traverse.clearNode, opts);
  return tree;
};
traverse.hasType = function (tree, type, denylistTypes) {
  if (denylistTypes != null && denylistTypes.includes(tree.type)) return false;
  if (tree.type === type) return true;
  return traverseFast(tree, function (node) {
    if (denylistTypes != null && denylistTypes.includes(node.type)) {
      return traverseFast.skip;
    }
    if (node.type === type) {
      return traverseFast.stop;
    }
  });
};
traverse.cache = cache;

//# sourceMappingURL=index.js.map
