"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertNode;
var _isNode = require("../validators/isNode.js");
function assertNode(node) {
  if (!(0, _isNode.default)(node)) {
    var _node$type;
    const type = (_node$type = node == null ? void 0 : node.type) != null ? _node$type : JSON.stringify(node);
    throw new TypeError(`Not a valid node of type "${type}"`);
  }
}

//# sourceMappingURL=assertNode.js.map
