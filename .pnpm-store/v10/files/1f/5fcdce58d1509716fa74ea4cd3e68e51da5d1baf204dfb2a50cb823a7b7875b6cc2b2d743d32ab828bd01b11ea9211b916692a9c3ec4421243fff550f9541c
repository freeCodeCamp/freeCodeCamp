"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidES3Identifier;
var _isValidIdentifier = require("./isValidIdentifier.js");
const RESERVED_WORDS_ES3_ONLY = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);
function isValidES3Identifier(name) {
  return (0, _isValidIdentifier.default)(name) && !RESERVED_WORDS_ES3_ONLY.has(name);
}

//# sourceMappingURL=isValidES3Identifier.js.map
