"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLet;
var _index = require("./generated/index.js");
var BLOCK_SCOPED_SYMBOL = Symbol.for("var used to be block scoped");
function isLet(node) {
  return (0, _index.isVariableDeclaration)(node) && (node.kind !== "var" || node[BLOCK_SCOPED_SYMBOL]);
}

//# sourceMappingURL=isLet.js.map
