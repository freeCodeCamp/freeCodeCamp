"use strict";

exports.__esModule = true;
exports.AwaitExpression = exports.FunctionTypeAnnotation = undefined;
exports.NullableTypeAnnotation = NullableTypeAnnotation;
exports.UpdateExpression = UpdateExpression;
exports.ObjectExpression = ObjectExpression;
exports.DoExpression = DoExpression;
exports.Binary = Binary;
exports.BinaryExpression = BinaryExpression;
exports.SequenceExpression = SequenceExpression;
exports.YieldExpression = YieldExpression;
exports.ClassExpression = ClassExpression;
exports.UnaryLike = UnaryLike;
exports.FunctionExpression = FunctionExpression;
exports.ArrowFunctionExpression = ArrowFunctionExpression;
exports.ConditionalExpression = ConditionalExpression;
exports.AssignmentExpression = AssignmentExpression;

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var PRECEDENCE = {
  "||": 0,
  "&&": 1,
  "|": 2,
  "^": 3,
  "&": 4,
  "==": 5,
  "===": 5,
  "!=": 5,
  "!==": 5,
  "<": 6,
  ">": 6,
  "<=": 6,
  ">=": 6,
  in: 6,
  instanceof: 6,
  ">>": 7,
  "<<": 7,
  ">>>": 7,
  "+": 8,
  "-": 8,
  "*": 9,
  "/": 9,
  "%": 9,
  "**": 10
};

function NullableTypeAnnotation(node, parent) {
  return t.isArrayTypeAnnotation(parent);
}

exports.FunctionTypeAnnotation = NullableTypeAnnotation;
function UpdateExpression(node, parent) {
  return t.isMemberExpression(parent) && parent.object === node;
}

function ObjectExpression(node, parent, printStack) {
  return isFirstInStatement(printStack, { considerArrow: true });
}

function DoExpression(node, parent, printStack) {
  return isFirstInStatement(printStack);
}

function Binary(node, parent) {
  if ((t.isCallExpression(parent) || t.isNewExpression(parent)) && parent.callee === node || t.isUnaryLike(parent) || t.isMemberExpression(parent) && parent.object === node || t.isAwaitExpression(parent)) {
    return true;
  }

  if (t.isBinary(parent)) {
    var parentOp = parent.operator;
    var parentPos = PRECEDENCE[parentOp];

    var nodeOp = node.operator;
    var nodePos = PRECEDENCE[nodeOp];

    if (parentPos === nodePos && parent.right === node && !t.isLogicalExpression(parent) || parentPos > nodePos) {
      return true;
    }
  }

  return false;
}

function BinaryExpression(node, parent) {
  return node.operator === "in" && (t.isVariableDeclarator(parent) || t.isFor(parent));
}

function SequenceExpression(node, parent) {

  if (t.isForStatement(parent) || t.isThrowStatement(parent) || t.isReturnStatement(parent) || t.isIfStatement(parent) && parent.test === node || t.isWhileStatement(parent) && parent.test === node || t.isForInStatement(parent) && parent.right === node || t.isSwitchStatement(parent) && parent.discriminant === node || t.isExpressionStatement(parent) && parent.expression === node) {
    return false;
  }

  return true;
}

function YieldExpression(node, parent) {
  return t.isBinary(parent) || t.isUnaryLike(parent) || t.isCallExpression(parent) || t.isMemberExpression(parent) || t.isNewExpression(parent) || t.isConditionalExpression(parent) && node === parent.test;
}

exports.AwaitExpression = YieldExpression;
function ClassExpression(node, parent, printStack) {
  return isFirstInStatement(printStack, { considerDefaultExports: true });
}

function UnaryLike(node, parent) {
  return t.isMemberExpression(parent, { object: node }) || t.isCallExpression(parent, { callee: node }) || t.isNewExpression(parent, { callee: node });
}

function FunctionExpression(node, parent, printStack) {
  return isFirstInStatement(printStack, { considerDefaultExports: true });
}

function ArrowFunctionExpression(node, parent) {
  if (t.isExportDeclaration(parent) || t.isBinaryExpression(parent) || t.isLogicalExpression(parent) || t.isUnaryExpression(parent) || t.isTaggedTemplateExpression(parent)) {
    return true;
  }

  return UnaryLike(node, parent);
}

function ConditionalExpression(node, parent) {
  if (t.isUnaryLike(parent) || t.isBinary(parent) || t.isConditionalExpression(parent, { test: node }) || t.isAwaitExpression(parent)) {
    return true;
  }

  return UnaryLike(node, parent);
}

function AssignmentExpression(node) {
  if (t.isObjectPattern(node.left)) {
    return true;
  } else {
    return ConditionalExpression.apply(undefined, arguments);
  }
}

function isFirstInStatement(printStack) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$considerArrow = _ref.considerArrow,
      considerArrow = _ref$considerArrow === undefined ? false : _ref$considerArrow,
      _ref$considerDefaultE = _ref.considerDefaultExports,
      considerDefaultExports = _ref$considerDefaultE === undefined ? false : _ref$considerDefaultE;

  var i = printStack.length - 1;
  var node = printStack[i];
  i--;
  var parent = printStack[i];
  while (i > 0) {
    if (t.isExpressionStatement(parent, { expression: node }) || t.isTaggedTemplateExpression(parent) || considerDefaultExports && t.isExportDefaultDeclaration(parent, { declaration: node }) || considerArrow && t.isArrowFunctionExpression(parent, { body: node })) {
      return true;
    }

    if (t.isCallExpression(parent, { callee: node }) || t.isSequenceExpression(parent) && parent.expressions[0] === node || t.isMemberExpression(parent, { object: node }) || t.isConditional(parent, { test: node }) || t.isBinary(parent, { left: node }) || t.isAssignmentExpression(parent, { left: node })) {
      node = parent;
      i--;
      parent = printStack[i];
    } else {
      return false;
    }
  }

  return false;
}