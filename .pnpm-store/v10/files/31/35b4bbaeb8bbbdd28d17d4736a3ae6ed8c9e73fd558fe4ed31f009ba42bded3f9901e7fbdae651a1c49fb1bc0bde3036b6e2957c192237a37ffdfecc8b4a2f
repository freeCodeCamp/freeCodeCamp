"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isImmutable;
var _isType = require("./isType.js");
var _index = require("./generated/index.js");
function isImmutable(node) {
  if ((0, _isType.default)(node.type, "Immutable")) return true;
  if ((0, _index.isIdentifier)(node)) {
    if (node.name === "undefined") {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

//# sourceMappingURL=isImmutable.js.map
