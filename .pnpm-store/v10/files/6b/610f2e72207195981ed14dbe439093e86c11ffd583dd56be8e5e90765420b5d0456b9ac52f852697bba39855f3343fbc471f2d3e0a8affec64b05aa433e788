"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = appendToMemberExpression;
var _index = require("../builders/generated/index.js");
function appendToMemberExpression(member, append, computed = false) {
  member.object = (0, _index.memberExpression)(member.object, member.property, member.computed);
  member.property = append;
  member.computed = !!computed;
  return member;
}

//# sourceMappingURL=appendToMemberExpression.js.map
