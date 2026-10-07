"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssignmentExpression = AssignmentExpression;
exports.BinaryExpression = BinaryExpression;
exports.ClassExpression = ClassExpression;
exports.ArrowFunctionExpression = exports.ConditionalExpression = ConditionalExpression;
exports.DoExpression = DoExpression;
exports.FunctionExpression = FunctionExpression;
exports.FunctionTypeAnnotation = FunctionTypeAnnotation;
exports.Identifier = Identifier;
exports.LogicalExpression = LogicalExpression;
exports.NullableTypeAnnotation = NullableTypeAnnotation;
exports.ObjectExpression = ObjectExpression;
exports.OptionalIndexedAccessType = OptionalIndexedAccessType;
exports.OptionalCallExpression = exports.OptionalMemberExpression = OptionalMemberExpression;
exports.SequenceExpression = SequenceExpression;
exports.TSSatisfiesExpression = exports.TSAsExpression = TSAsExpression;
exports.TSConditionalType = TSConditionalType;
exports.TSConstructorType = exports.TSFunctionType = TSFunctionType;
exports.TSInferType = TSInferType;
exports.TSInstantiationExpression = TSInstantiationExpression;
exports.TSIntersectionType = TSIntersectionType;
exports.SpreadElement = exports.UnaryExpression = exports.TSTypeAssertion = UnaryLike;
exports.TSTypeOperator = TSTypeOperator;
exports.TSUnionType = TSUnionType;
exports.IntersectionTypeAnnotation = exports.UnionTypeAnnotation = UnionTypeAnnotation;
exports.UpdateExpression = UpdateExpression;
exports.AwaitExpression = exports.YieldExpression = YieldExpression;
var _t = require("@babel/types");
var _index = require("./index.js");
const {
  isMemberExpression,
  isOptionalMemberExpression,
  isYieldExpression,
  isStatement
} = _t;
const PRECEDENCE = new Map([["||", 0], ["??", 1], ["&&", 2], ["|", 3], ["^", 4], ["&", 5], ["==", 6], ["===", 6], ["!=", 6], ["!==", 6], ["<", 7], [">", 7], ["<=", 7], [">=", 7], ["in", 7], ["instanceof", 7], [">>", 8], ["<<", 8], [">>>", 8], ["+", 9], ["-", 9], ["*", 10], ["/", 10], ["%", 10], ["**", 11]]);
function isTSTypeExpression(nodeId) {
  return nodeId === 156 || nodeId === 201 || nodeId === 209;
}
const isClassExtendsClause = (node, parent, parentId) => {
  return (parentId === 21 || parentId === 22) && parent.superClass === node;
};
const hasPostfixPart = (node, parent, parentId) => {
  switch (parentId) {
    case 108:
    case 132:
      return parent.object === node;
    case 17:
    case 130:
    case 112:
      return parent.callee === node;
    case 222:
      return parent.tag === node;
    case 191:
      return true;
  }
  return false;
};
function NullableTypeAnnotation(node, parent, parentId) {
  return parentId === 4;
}
function FunctionTypeAnnotation(node, parent, parentId, tokenContext) {
  return (parentId === 239 || parentId === 90 || parentId === 4 || (tokenContext & _index.TokenContext.arrowFlowReturnType) > 0
  );
}
function UpdateExpression(node, parent, parentId) {
  return hasPostfixPart(node, parent, parentId) || isClassExtendsClause(node, parent, parentId);
}
function needsParenBeforeExpressionBrace(tokenContext) {
  return (tokenContext & (_index.TokenContext.expressionStatement | _index.TokenContext.arrowBody)) > 0;
}
function ObjectExpression(node, parent, parentId, tokenContext) {
  return needsParenBeforeExpressionBrace(tokenContext);
}
function DoExpression(node, parent, parentId, tokenContext) {
  return (tokenContext & _index.TokenContext.expressionStatement) > 0 && !node.async;
}
function BinaryLike(node, parent, parentId, nodeType) {
  if (isClassExtendsClause(node, parent, parentId)) {
    return true;
  }
  if (hasPostfixPart(node, parent, parentId) || parentId === 238 || parentId === 145 || parentId === 8) {
    return true;
  }
  let parentPos;
  switch (parentId) {
    case 10:
    case 107:
      parentPos = PRECEDENCE.get(parent.operator);
      break;
    case 156:
    case 201:
      parentPos = 7;
  }
  if (parentPos !== undefined) {
    const nodePos = nodeType === 2 ? 7 : PRECEDENCE.get(node.operator);
    if (parentPos > nodePos) return true;
    if (parentPos === nodePos && parentId === 10 && (nodePos === 11 ? parent.left === node : parent.right === node)) {
      return true;
    }
    if (nodeType === 1 && parentId === 107 && (nodePos === 1 && parentPos !== 1 || parentPos === 1 && nodePos !== 1)) {
      return true;
    }
  }
  return false;
}
function UnionTypeAnnotation(node, parent, parentId) {
  switch (parentId) {
    case 4:
    case 115:
    case 90:
    case 239:
      return true;
  }
  return false;
}
function OptionalIndexedAccessType(node, parent, parentId) {
  return parentId === 84 && parent.objectType === node;
}
function TSAsExpression(node, parent, parentId) {
  if ((parentId === 6 || parentId === 7) && parent.left === node) {
    return true;
  }
  if (parentId === 10 && (parent.operator === "|" || parent.operator === "&") && node === parent.left) {
    return true;
  }
  return BinaryLike(node, parent, parentId, 2);
}
function TSConditionalType(node, parent, parentId) {
  switch (parentId) {
    case 155:
    case 195:
    case 211:
    case 212:
      return true;
    case 175:
      return parent.objectType === node;
    case 181:
    case 219:
      return parent.types[0] === node;
    case 161:
      return parent.checkType === node || parent.extendsType === node;
  }
  return false;
}
function TSUnionType(node, parent, parentId) {
  switch (parentId) {
    case 181:
    case 211:
    case 155:
    case 195:
      return true;
    case 175:
      return parent.objectType === node;
  }
  return false;
}
function TSIntersectionType(node, parent, parentId) {
  return parentId === 211 || TSTypeOperator(node, parent, parentId);
}
function TSInferType(node, parent, parentId) {
  if (TSTypeOperator(node, parent, parentId)) {
    return true;
  }
  if ((parentId === 181 || parentId === 219) && node.typeParameter.constraint && parent.types[0] === node) {
    return true;
  }
  return false;
}
function TSTypeOperator(node, parent, parentId) {
  switch (parentId) {
    case 155:
    case 195:
      return true;
    case 175:
      if (parent.objectType === node) {
        return true;
      }
  }
  return false;
}
function TSInstantiationExpression(node, parent, parentId) {
  switch (parentId) {
    case 17:
    case 130:
    case 112:
    case 177:
      return (parent.typeParameters
      ) != null;
  }
  return false;
}
function TSFunctionType(node, parent, parentId) {
  if (TSUnionType(node, parent, parentId)) return true;
  return parentId === 219 || parentId === 161 && (parent.checkType === node || parent.extendsType === node);
}
function BinaryExpression(node, parent, parentId, tokenContext) {
  if (BinaryLike(node, parent, parentId, 0)) return true;
  return (tokenContext & _index.TokenContext.forInOrInitHeadAccumulate) > 0 && node.operator === "in";
}
function LogicalExpression(node, parent, parentId) {
  return BinaryLike(node, parent, parentId, 1);
}
function SequenceExpression(node, parent, parentId) {
  if (parentId === 144 || parentId === 133 || parentId === 108 && parent.property === node || parentId === 132 && parent.property === node || parentId === 224) {
    return false;
  }
  if (parentId === 21) {
    return true;
  }
  if (parentId === 68) {
    return parent.right === node;
  }
  if (parentId === 60) {
    return true;
  }
  return !isStatement(parent);
}
function YieldExpression(node, parent, parentId) {
  return parentId === 10 || parentId === 107 || parentId === 238 || parentId === 145 || hasPostfixPart(node, parent, parentId) || parentId === 8 && isYieldExpression(node) || parentId === 28 && node === parent.test || isClassExtendsClause(node, parent, parentId) || isTSTypeExpression(parentId);
}
function ClassExpression(node, parent, parentId, tokenContext) {
  return (tokenContext & (_index.TokenContext.expressionStatement | _index.TokenContext.exportDefault)) > 0;
}
function UnaryLike(node, parent, parentId) {
  return hasPostfixPart(node, parent, parentId) || parentId === 10 && parent.operator === "**" && parent.left === node || isClassExtendsClause(node, parent, parentId);
}
function FunctionExpression(node, parent, parentId, tokenContext) {
  return (tokenContext & (_index.TokenContext.expressionStatement | _index.TokenContext.exportDefault)) > 0;
}
function ConditionalExpression(node, parent, parentId) {
  switch (parentId) {
    case 238:
    case 145:
    case 10:
    case 107:
    case 8:
      return true;
    case 28:
      if (parent.test === node) {
        return true;
      }
  }
  if (isTSTypeExpression(parentId)) {
    return true;
  }
  return UnaryLike(node, parent, parentId);
}
function OptionalMemberExpression(node, parent, parentId) {
  switch (parentId) {
    case 17:
      return parent.callee === node;
    case 108:
      return parent.object === node;
  }
  return false;
}
function AssignmentExpression(node, parent, parentId, tokenContext) {
  if (needsParenBeforeExpressionBrace(tokenContext) && node.left.type === "ObjectPattern") {
    return true;
  }
  return ConditionalExpression(node, parent, parentId);
}
function Identifier(node, parent, parentId, tokenContext, getRawIdentifier) {
  var _node$extra;
  if (getRawIdentifier && getRawIdentifier(node) !== node.name) {
    return false;
  }
  if (parentId === 6 && (_node$extra = node.extra) != null && _node$extra.parenthesized && parent.left === node) {
    const rightType = parent.right.type;
    if ((rightType === "FunctionExpression" || rightType === "ClassExpression") && parent.right.id == null) {
      return true;
    }
  }
  if (tokenContext & _index.TokenContext.forOfHead || (parentId === 108 || parentId === 132) && tokenContext & (_index.TokenContext.expressionStatement | _index.TokenContext.forInitHead | _index.TokenContext.forInHead)) {
    if (node.name === "let") {
      const isFollowedByBracket = isMemberExpression(parent, {
        object: node,
        computed: true
      }) || isOptionalMemberExpression(parent, {
        object: node,
        computed: true,
        optional: false
      });
      if (isFollowedByBracket && tokenContext & (_index.TokenContext.expressionStatement | _index.TokenContext.forInitHead | _index.TokenContext.forInHead)) {
        return true;
      }
      return (tokenContext & _index.TokenContext.forOfHead) > 0;
    }
  }
  return parentId === 68 && parent.left === node && node.name === "async" && !parent.await;
}

//# sourceMappingURL=parentheses.js.map
