"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayExpression = ArrayExpression;
exports.AssignmentExpression = AssignmentExpression;
exports.BinaryExpression = BinaryExpression;
exports.BooleanLiteral = BooleanLiteral;
exports.CallExpression = CallExpression;
exports.ConditionalExpression = ConditionalExpression;
exports.ClassDeclaration = exports.ClassExpression = exports.FunctionDeclaration = exports.ArrowFunctionExpression = exports.FunctionExpression = Func;
Object.defineProperty(exports, "Identifier", {
  enumerable: true,
  get: function () {
    return _infererReference.default;
  }
});
exports.LogicalExpression = LogicalExpression;
exports.NewExpression = NewExpression;
exports.NullLiteral = NullLiteral;
exports.NumericLiteral = NumericLiteral;
exports.ObjectExpression = ObjectExpression;
exports.ParenthesizedExpression = ParenthesizedExpression;
exports.RegExpLiteral = RegExpLiteral;
exports.RestElement = RestElement;
exports.SequenceExpression = SequenceExpression;
exports.StringLiteral = StringLiteral;
exports.TSAsExpression = TSAsExpression;
exports.TSNonNullExpression = TSNonNullExpression;
exports.TaggedTemplateExpression = TaggedTemplateExpression;
exports.TemplateLiteral = TemplateLiteral;
exports.TypeCastExpression = TypeCastExpression;
exports.UnaryExpression = UnaryExpression;
exports.UpdateExpression = UpdateExpression;
exports.VariableDeclarator = VariableDeclarator;
var _t = require("@babel/types");
var _infererReference = require("./inferer-reference.js");
var _util = require("./util.js");
const {
  BOOLEAN_BINARY_OPERATORS,
  BOOLEAN_UNARY_OPERATORS,
  NUMBER_BINARY_OPERATORS,
  NUMBER_UNARY_OPERATORS,
  STRING_UNARY_OPERATORS,
  anyTypeAnnotation,
  arrayTypeAnnotation,
  booleanTypeAnnotation,
  buildMatchMemberExpression,
  genericTypeAnnotation,
  identifier,
  nullLiteralTypeAnnotation,
  numberTypeAnnotation,
  stringTypeAnnotation,
  tupleTypeAnnotation,
  unionTypeAnnotation,
  voidTypeAnnotation,
  isIdentifier
} = _t;
function VariableDeclarator() {
  if (!this.get("id").isIdentifier()) return;
  return this.get("init").getTypeAnnotation();
}
function TypeCastExpression(node) {
  return node.typeAnnotation;
}
TypeCastExpression.validParent = true;
function TSAsExpression(node) {
  return node.typeAnnotation;
}
TSAsExpression.validParent = true;
function TSNonNullExpression() {
  return this.get("expression").getTypeAnnotation();
}
function NewExpression(node) {
  if (node.callee.type === "Identifier") {
    return genericTypeAnnotation(node.callee);
  }
}
function TemplateLiteral() {
  return stringTypeAnnotation();
}
function UnaryExpression(node) {
  const operator = node.operator;
  if (operator === "void") {
    return voidTypeAnnotation();
  } else if (NUMBER_UNARY_OPERATORS.includes(operator)) {
    return numberTypeAnnotation();
  } else if (STRING_UNARY_OPERATORS.includes(operator)) {
    return stringTypeAnnotation();
  } else if (BOOLEAN_UNARY_OPERATORS.includes(operator)) {
    return booleanTypeAnnotation();
  }
}
function BinaryExpression(node) {
  const operator = node.operator;
  if (NUMBER_BINARY_OPERATORS.includes(operator)) {
    return numberTypeAnnotation();
  } else if (BOOLEAN_BINARY_OPERATORS.includes(operator)) {
    return booleanTypeAnnotation();
  } else if (operator === "+") {
    const right = this.get("right");
    const left = this.get("left");
    if (left.isBaseType("number") && right.isBaseType("number")) {
      return numberTypeAnnotation();
    } else if (left.isBaseType("string") || right.isBaseType("string")) {
      return stringTypeAnnotation();
    }
    return unionTypeAnnotation([stringTypeAnnotation(), numberTypeAnnotation()]);
  }
}
function LogicalExpression() {
  const argumentTypes = [this.get("left").getTypeAnnotation(), this.get("right").getTypeAnnotation()];
  return (0, _util.createUnionType)(argumentTypes);
}
function ConditionalExpression() {
  const argumentTypes = [this.get("consequent").getTypeAnnotation(), this.get("alternate").getTypeAnnotation()];
  return (0, _util.createUnionType)(argumentTypes);
}
function SequenceExpression() {
  return this.get("expressions").pop().getTypeAnnotation();
}
function ParenthesizedExpression() {
  return this.get("expression").getTypeAnnotation();
}
function AssignmentExpression() {
  return this.get("right").getTypeAnnotation();
}
function UpdateExpression(node) {
  const operator = node.operator;
  if (operator === "++" || operator === "--") {
    return numberTypeAnnotation();
  }
}
function StringLiteral() {
  return stringTypeAnnotation();
}
function NumericLiteral() {
  return numberTypeAnnotation();
}
function BooleanLiteral() {
  return booleanTypeAnnotation();
}
function NullLiteral() {
  return nullLiteralTypeAnnotation();
}
function RegExpLiteral() {
  return genericTypeAnnotation(identifier("RegExp"));
}
function ObjectExpression() {
  return genericTypeAnnotation(identifier("Object"));
}
function ArrayExpression() {
  return genericTypeAnnotation(identifier("Array"));
}
function RestElement() {
  return ArrayExpression();
}
RestElement.validParent = true;
function Func() {
  return genericTypeAnnotation(identifier("Function"));
}
const isArrayFrom = buildMatchMemberExpression("Array.from");
const isObjectKeys = buildMatchMemberExpression("Object.keys");
const isObjectValues = buildMatchMemberExpression("Object.values");
const isObjectEntries = buildMatchMemberExpression("Object.entries");
function CallExpression() {
  const {
    callee
  } = this.node;
  if (isObjectKeys(callee)) {
    return arrayTypeAnnotation(stringTypeAnnotation());
  } else if (isArrayFrom(callee) || isObjectValues(callee) || isIdentifier(callee, {
    name: "Array"
  })) {
    return arrayTypeAnnotation(anyTypeAnnotation());
  } else if (isObjectEntries(callee)) {
    return arrayTypeAnnotation(tupleTypeAnnotation([stringTypeAnnotation(), anyTypeAnnotation()]));
  }
  return resolveCall(this.get("callee"));
}
function TaggedTemplateExpression() {
  return resolveCall(this.get("tag"));
}
function resolveCall(callee) {
  callee = callee.resolve();
  if (callee.isFunction()) {
    const {
      node
    } = callee;
    if (node.async) {
      if (node.generator) {
        return genericTypeAnnotation(identifier("AsyncIterator"));
      } else {
        return genericTypeAnnotation(identifier("Promise"));
      }
    } else {
      if (node.generator) {
        return genericTypeAnnotation(identifier("Iterator"));
      } else if (callee.node.returnType) {
        return callee.node.returnType;
      } else {}
    }
  }
}

//# sourceMappingURL=inferers.js.map
