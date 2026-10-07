"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateNode;
var _validate = require("../validators/validate.js");
var _index = require("../index.js");
function validateNode(node) {
  if (node == null || typeof node !== "object") return;
  const fields = _index.NODE_FIELDS[node.type];
  if (!fields) return;
  const keys = _index.BUILDER_KEYS[node.type];
  for (const key of keys) {
    const field = fields[key];
    if (field != null) (0, _validate.validateInternal)(field, node, key, node[key]);
  }
  return node;
}

//# sourceMappingURL=validateNode.js.map
