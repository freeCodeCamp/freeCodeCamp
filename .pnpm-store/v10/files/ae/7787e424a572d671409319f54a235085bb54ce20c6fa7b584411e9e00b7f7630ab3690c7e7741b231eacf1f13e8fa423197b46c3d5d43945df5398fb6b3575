"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromIdentifier;
var JS_RESERVED = {
  Array: Array,
  Date: Date,
  Infinity: Infinity,
  Math: Math,
  Number: Number,
  Object: Object,
  String: String,
  undefined: undefined
};

/**
 * Extractor function for a Identifier type value node.
 * An Identifier is usually a reference to a variable.
 * Just return variable name to determine its existence.
 *
 * @param - value - AST Value object with type `Identifier`
 * @returns - The extracted value converted to correct type.
 */
function extractValueFromIdentifier(value) {
  var name = value.name;


  if (Object.hasOwnProperty.call(JS_RESERVED, name)) {
    return JS_RESERVED[name];
  }

  return name;
}