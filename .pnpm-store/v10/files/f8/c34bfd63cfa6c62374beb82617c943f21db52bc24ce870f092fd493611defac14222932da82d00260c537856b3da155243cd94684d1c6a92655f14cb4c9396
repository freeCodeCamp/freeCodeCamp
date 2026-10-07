"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = is;
var _shallowEqual = require("../utils/shallowEqual.js");
var _isType = require("./isType.js");
var _isPlaceholderType = require("./isPlaceholderType.js");
var _index = require("../definitions/index.js");
function is(type, node, opts) {
  if (!node) return false;
  const matches = (0, _isType.default)(node.type, type);
  if (!matches) {
    if (!opts && node.type === "Placeholder" && type in _index.FLIPPED_ALIAS_KEYS) {
      return (0, _isPlaceholderType.default)(node.expectedNode, type);
    }
    return false;
  }
  if (opts === undefined) {
    return true;
  } else {
    return (0, _shallowEqual.default)(node, opts);
  }
}

//# sourceMappingURL=is.js.map
