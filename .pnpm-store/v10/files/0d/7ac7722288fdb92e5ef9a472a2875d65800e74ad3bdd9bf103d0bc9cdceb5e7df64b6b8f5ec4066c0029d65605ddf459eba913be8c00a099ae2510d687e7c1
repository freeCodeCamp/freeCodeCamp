"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFunctionName;
var _index = require("../validators/generated/index.js");
function getNameFromLiteralId(id) {
  if ((0, _index.isNullLiteral)(id)) {
    return "null";
  }
  if ((0, _index.isRegExpLiteral)(id)) {
    return `/${id.pattern}/${id.flags}`;
  }
  if ((0, _index.isTemplateLiteral)(id)) {
    return id.quasis.map(quasi => quasi.value.raw).join("");
  }
  if (id.value !== undefined) {
    return String(id.value);
  }
  return null;
}
function getObjectMemberKey(node) {
  if (!node.computed || (0, _index.isLiteral)(node.key)) {
    return node.key;
  }
}
function getFunctionName(node, parent) {
  if ("id" in node && node.id) {
    return {
      name: node.id.name,
      originalNode: node.id
    };
  }
  let prefix = "";
  let id;
  if ((0, _index.isObjectProperty)(parent, {
    value: node
  })) {
    id = getObjectMemberKey(parent);
  } else if ((0, _index.isObjectMethod)(node) || (0, _index.isClassMethod)(node)) {
    id = getObjectMemberKey(node);
    if (node.kind === "get") prefix = "get ";else if (node.kind === "set") prefix = "set ";
  } else if ((0, _index.isVariableDeclarator)(parent, {
    init: node
  })) {
    id = parent.id;
  } else if ((0, _index.isAssignmentExpression)(parent, {
    operator: "=",
    right: node
  })) {
    id = parent.left;
  }
  if (!id) return null;
  const name = (0, _index.isLiteral)(id) ? getNameFromLiteralId(id) : (0, _index.isIdentifier)(id) ? id.name : (0, _index.isPrivateName)(id) ? id.id.name : null;
  if (name == null) return null;
  return {
    name: prefix + name,
    originalNode: id
  };
}

//# sourceMappingURL=getFunctionName.js.map
