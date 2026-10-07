"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPlaceholderType;
var _index = require("../definitions/index.js");
function isPlaceholderType(placeholderType, targetType) {
  if (placeholderType === targetType) return true;
  const aliases = _index.PLACEHOLDERS_ALIAS[placeholderType];
  if (aliases != null && aliases.includes(targetType)) return true;
  return false;
}

//# sourceMappingURL=isPlaceholderType.js.map
