"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidIdentifier;
var _helperValidatorIdentifier = require("@babel/helper-validator-identifier");
function isValidIdentifier(name, reserved = true) {
  if (typeof name !== "string") return false;
  if (reserved) {
    if ((0, _helperValidatorIdentifier.isKeyword)(name) || (0, _helperValidatorIdentifier.isStrictReservedWord)(name, true)) {
      return false;
    }
  }
  return (0, _helperValidatorIdentifier.isIdentifierName)(name);
}

//# sourceMappingURL=isValidIdentifier.js.map
