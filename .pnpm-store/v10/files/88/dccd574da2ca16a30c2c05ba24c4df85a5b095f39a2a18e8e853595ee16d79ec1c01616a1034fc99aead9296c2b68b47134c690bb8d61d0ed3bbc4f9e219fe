"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prependToMemberExpression;
var _index = require("../builders/generated/index.js");
var _index2 = require("../index.js");
function prependToMemberExpression(member, prepend) {
  if ((0, _index2.isSuper)(member.object)) {
    throw new Error("Cannot prepend node to super property access (`super.foo`).");
  }
  member.object = (0, _index.memberExpression)(prepend, member.object);
  return member;
}

//# sourceMappingURL=prependToMemberExpression.js.map
