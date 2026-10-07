"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = typeOf;
/**
 * Better way to handle type checking
 * null, {}, array and date are objects, which confuses
 */
function typeOf(input) {
  var rawObject = Object.prototype.toString.call(input).toLowerCase();
  var typeOfRegex = /\[object (.*)]/g;
  var type = typeOfRegex.exec(rawObject)[1];
  return type;
}
module.exports = exports.default;
module.exports.default = exports.default;