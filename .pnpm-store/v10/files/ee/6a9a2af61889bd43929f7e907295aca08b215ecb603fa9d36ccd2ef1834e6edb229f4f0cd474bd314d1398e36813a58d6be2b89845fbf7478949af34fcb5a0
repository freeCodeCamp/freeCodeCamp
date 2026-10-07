"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBinding;
var _getBindingIdentifiers = require("../retrievers/getBindingIdentifiers.js");
function isBinding(node, parent, grandparent) {
  if (grandparent && node.type === "Identifier" && parent.type === "ObjectProperty" && grandparent.type === "ObjectExpression") {
    return false;
  }
  const keys = _getBindingIdentifiers.default.keys[parent.type];
  if (keys) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const val = parent[key];
      if (Array.isArray(val)) {
        if (val.includes(node)) return true;
      } else {
        if (val === node) return true;
      }
    }
  }
  return false;
}

//# sourceMappingURL=isBinding.js.map
