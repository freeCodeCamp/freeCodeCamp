"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gatherSequenceExpressions;
var _getBindingIdentifiers = require("../retrievers/getBindingIdentifiers.js");
var _index = require("../validators/generated/index.js");
var _index2 = require("../builders/generated/index.js");
var _productions = require("../builders/productions.js");
var _cloneNode = require("../clone/cloneNode.js");
function gatherSequenceExpressions(nodes, declars) {
  const exprs = [];
  let ensureLastUndefined = true;
  for (const node of nodes) {
    if (!(0, _index.isEmptyStatement)(node)) {
      ensureLastUndefined = false;
    }
    if ((0, _index.isExpression)(node)) {
      exprs.push(node);
    } else if ((0, _index.isExpressionStatement)(node)) {
      exprs.push(node.expression);
    } else if ((0, _index.isVariableDeclaration)(node)) {
      if (node.kind !== "var") return;
      for (const declar of node.declarations) {
        const bindings = (0, _getBindingIdentifiers.default)(declar);
        for (const key of Object.keys(bindings)) {
          declars.push({
            kind: node.kind,
            id: (0, _cloneNode.default)(bindings[key])
          });
        }
        if (declar.init) {
          exprs.push((0, _index2.assignmentExpression)("=", declar.id, declar.init));
        }
      }
      ensureLastUndefined = true;
    } else if ((0, _index.isIfStatement)(node)) {
      const consequent = node.consequent ? gatherSequenceExpressions([node.consequent], declars) : (0, _productions.buildUndefinedNode)();
      const alternate = node.alternate ? gatherSequenceExpressions([node.alternate], declars) : (0, _productions.buildUndefinedNode)();
      if (!consequent || !alternate) return;
      exprs.push((0, _index2.conditionalExpression)(node.test, consequent, alternate));
    } else if ((0, _index.isBlockStatement)(node)) {
      const body = gatherSequenceExpressions(node.body, declars);
      if (!body) return;
      exprs.push(body);
    } else if ((0, _index.isEmptyStatement)(node)) {
      if (nodes.indexOf(node) === 0) {
        ensureLastUndefined = true;
      }
    } else {
      return;
    }
  }
  if (ensureLastUndefined) {
    exprs.push((0, _productions.buildUndefinedNode)());
  }
  if (exprs.length === 1) {
    return exprs[0];
  } else {
    return (0, _index2.sequenceExpression)(exprs);
  }
}

//# sourceMappingURL=gatherSequenceExpressions.js.map
