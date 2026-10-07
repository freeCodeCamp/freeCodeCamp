"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isScope;
var _index = require("./generated/index.js");
function isScope(node, parent) {
  if ((0, _index.isBlockStatement)(node) && ((0, _index.isFunction)(parent) || (0, _index.isCatchClause)(parent))) {
    return false;
  }
  if ((0, _index.isPattern)(node) && ((0, _index.isFunction)(parent) || (0, _index.isCatchClause)(parent))) {
    return true;
  }
  return (0, _index.isScopable)(node);
}

//# sourceMappingURL=isScope.js.map
