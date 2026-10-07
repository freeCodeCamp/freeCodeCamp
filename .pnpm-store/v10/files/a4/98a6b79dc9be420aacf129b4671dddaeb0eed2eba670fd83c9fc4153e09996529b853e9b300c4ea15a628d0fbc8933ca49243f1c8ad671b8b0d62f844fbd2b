"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenContext = void 0;
exports.isLastChild = isLastChild;
exports.parentNeedsParens = parentNeedsParens;
var parens = require("./parentheses.js");
var _t = require("@babel/types");
var _nodes = require("../nodes.js");
const {
  VISITOR_KEYS
} = _t;
const TokenContext = exports.TokenContext = {
  normal: 0,
  expressionStatement: 1,
  arrowBody: 2,
  exportDefault: 4,
  arrowFlowReturnType: 8,
  forInitHead: 16,
  forInHead: 32,
  forOfHead: 64,
  forInOrInitHeadAccumulate: 128,
  forInOrInitHeadAccumulatePassThroughMask: 128
};
for (const type of Object.keys(parens)) {
  const func = parens[type];
  if (_nodes.generatorInfosMap.has(type)) {
    _nodes.generatorInfosMap.get(type)[2] = func;
  }
}
function isOrHasCallExpression(node) {
  switch (node.type) {
    case "CallExpression":
      return true;
    case "MemberExpression":
      return isOrHasCallExpression(node.object);
  }
  return false;
}
function parentNeedsParens(node, parent, parentId) {
  switch (parentId) {
    case 112:
      if (parent.callee === node) {
        if (isOrHasCallExpression(node)) return true;
      }
      break;
    case 42:
      return !isDecoratorMemberExpression(node) && !(node.type === "CallExpression" && isDecoratorMemberExpression(node.callee)) && node.type !== "ParenthesizedExpression";
  }
  return false;
}
function isDecoratorMemberExpression(node) {
  switch (node.type) {
    case "Identifier":
      return true;
    case "MemberExpression":
      return !node.computed && node.property.type === "Identifier" && isDecoratorMemberExpression(node.object);
    default:
      return false;
  }
}
function isLastChild(parent, child) {
  const visitorKeys = VISITOR_KEYS[parent.type];
  for (let i = visitorKeys.length - 1; i >= 0; i--) {
    const val = parent[visitorKeys[i]];
    if (val === child) {
      return true;
    } else if (Array.isArray(val)) {
      let j = val.length - 1;
      while (j >= 0 && val[j] === null) j--;
      return j >= 0 && val[j] === child;
    } else if (val) {
      return false;
    }
  }
  return false;
}

//# sourceMappingURL=index.js.map
