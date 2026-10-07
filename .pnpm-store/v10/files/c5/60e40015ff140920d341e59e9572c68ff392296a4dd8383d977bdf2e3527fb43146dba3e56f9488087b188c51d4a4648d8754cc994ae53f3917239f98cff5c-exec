"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = serializeTakePattern;

var _getFunctionName = _interopRequireDefault(require("./getFunctionName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function serializeTakePattern(pattern) {
  if (Array.isArray(pattern)) {
    return `[${pattern.join(', ')}]`;
  }

  if (typeof pattern === 'function') {
    return `[Function: ${(0, _getFunctionName.default)(pattern)}]`;
  }

  return pattern;
}