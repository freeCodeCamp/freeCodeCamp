"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toIdentifier;
var _isValidIdentifier = require("../validators/isValidIdentifier.js");
var _helperValidatorIdentifier = require("@babel/helper-validator-identifier");
function toIdentifier(input) {
  input = input + "";
  let name = "";
  for (const c of input) {
    name += (0, _helperValidatorIdentifier.isIdentifierChar)(c.codePointAt(0)) ? c : "-";
  }
  name = name.replace(/^[-0-9]+/, "");
  name = name.replace(/[-\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : "";
  });
  if (!(0, _isValidIdentifier.default)(name)) {
    name = `_${name}`;
  }
  return name || "_";
}

//# sourceMappingURL=toIdentifier.js.map
