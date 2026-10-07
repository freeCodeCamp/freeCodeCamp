"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Types considered simple:
 *
 *  - primitive types
 *  - literal types
 *  - mixed and any types
 *  - generic types (such as Date, Promise<string>, $Keys<T>, etc.)
 *  - array type written in shorthand notation
 *
 * Types not considered simple:
 *
 *  - maybe type
 *  - function type
 *  - object type
 *  - tuple type
 *  - union and intersection types
 *
 * Reminder: if you change these semantics, don't forget to modify documentation of `array-style-...` rules
 */
const simpleTypePatterns = [/^(?:Any|Array|Boolean|Generic|Mixed|Number|String|Void)TypeAnnotation$/, /.+LiteralTypeAnnotation$/];

var _default = node => {
  return simpleTypePatterns.some(pattern => {
    return pattern.test(node.type);
  });
};

exports.default = _default;
module.exports = exports.default;