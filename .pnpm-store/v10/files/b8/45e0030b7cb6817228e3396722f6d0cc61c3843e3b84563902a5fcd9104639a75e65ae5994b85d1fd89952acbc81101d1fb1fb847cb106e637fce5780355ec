"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../validators/generated/index.js");
var _index2 = require("../builders/generated/index.js");
var _default = exports.default = toStatement;
function toStatement(node, ignore) {
  if ((0, _index.isStatement)(node)) {
    return node;
  }
  let mustHaveId = false;
  let newType;
  if ((0, _index.isClass)(node)) {
    mustHaveId = true;
    newType = "ClassDeclaration";
  } else if ((0, _index.isFunction)(node)) {
    mustHaveId = true;
    newType = "FunctionDeclaration";
  } else if ((0, _index.isAssignmentExpression)(node)) {
    return (0, _index2.expressionStatement)(node);
  }
  if (mustHaveId && !node.id) {
    newType = false;
  }
  if (!newType) {
    if (ignore) {
      return false;
    } else {
      throw new Error(`cannot turn ${node.type} to a statement`);
    }
  }
  node.type = newType;
  return node;
}

//# sourceMappingURL=toStatement.js.map
