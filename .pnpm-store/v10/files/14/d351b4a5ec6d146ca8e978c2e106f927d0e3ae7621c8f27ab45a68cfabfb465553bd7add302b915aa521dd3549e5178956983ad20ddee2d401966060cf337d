"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBlock;
var _index = require("../validators/generated/index.js");
var _index2 = require("../builders/generated/index.js");
function toBlock(node, parent) {
  if ((0, _index.isBlockStatement)(node)) {
    return node;
  }
  let blockNodes = [];
  if ((0, _index.isEmptyStatement)(node)) {
    blockNodes = [];
  } else {
    if (!(0, _index.isStatement)(node)) {
      if ((0, _index.isFunction)(parent)) {
        node = (0, _index2.returnStatement)(node);
      } else {
        node = (0, _index2.expressionStatement)(node);
      }
    }
    blockNodes = [node];
  }
  return (0, _index2.blockStatement)(blockNodes);
}

//# sourceMappingURL=toBlock.js.map
