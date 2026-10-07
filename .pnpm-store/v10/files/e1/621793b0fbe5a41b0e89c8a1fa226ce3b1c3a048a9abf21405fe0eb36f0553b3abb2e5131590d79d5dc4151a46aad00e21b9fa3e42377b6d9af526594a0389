"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matchesPattern;
var _index = require("./generated/index.js");
function isMemberExpressionLike(node) {
  return (0, _index.isMemberExpression)(node) || (0, _index.isMetaProperty)(node);
}
function matchesPattern(member, match, allowPartial) {
  if (!isMemberExpressionLike(member)) return false;
  const parts = Array.isArray(match) ? match : match.split(".");
  const nodes = [];
  let node;
  for (node = member; isMemberExpressionLike(node); node = (_object = node.object) != null ? _object : node.meta) {
    var _object;
    nodes.push(node.property);
  }
  nodes.push(node);
  if (nodes.length < parts.length) return false;
  if (!allowPartial && nodes.length > parts.length) return false;
  for (let i = 0, j = nodes.length - 1; i < parts.length; i++, j--) {
    const node = nodes[j];
    let value;
    if ((0, _index.isIdentifier)(node)) {
      value = node.name;
    } else if ((0, _index.isStringLiteral)(node)) {
      value = node.value;
    } else if ((0, _index.isThisExpression)(node)) {
      value = "this";
    } else if ((0, _index.isSuper)(node)) {
      value = "super";
    } else if ((0, _index.isPrivateName)(node)) {
      value = "#" + node.id.name;
    } else {
      return false;
    }
    if (parts[i] !== value) return false;
  }
  return true;
}

//# sourceMappingURL=matchesPattern.js.map
