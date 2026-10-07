"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _t = require("@babel/types");
var _util = require("./util.js");
const {
  BOOLEAN_NUMBER_BINARY_OPERATORS,
  createTypeAnnotationBasedOnTypeof,
  numberTypeAnnotation,
  voidTypeAnnotation
} = _t;
function _default(node) {
  if (!this.isReferenced()) return;
  const binding = this.scope.getBinding(node.name);
  if (binding) {
    if (binding.identifier.typeAnnotation) {
      return binding.identifier.typeAnnotation;
    } else {
      return getTypeAnnotationBindingConstantViolations(binding, this, node.name);
    }
  }
  if (node.name === "undefined") {
    return voidTypeAnnotation();
  } else if (node.name === "NaN" || node.name === "Infinity") {
    return numberTypeAnnotation();
  } else if (node.name === "arguments") {}
}
function getTypeAnnotationBindingConstantViolations(binding, path, name) {
  const types = [];
  const functionConstantViolations = [];
  let constantViolations = getConstantViolationsBefore(binding, path, functionConstantViolations);
  const testType = getConditionalAnnotation(binding, path, name);
  if (testType) {
    const testConstantViolations = getConstantViolationsBefore(binding, testType.ifStatement);
    constantViolations = constantViolations.filter(path => !testConstantViolations.includes(path));
    types.push(testType.typeAnnotation);
  }
  if (constantViolations.length) {
    constantViolations.push(...functionConstantViolations);
    for (const violation of constantViolations) {
      types.push(violation.getTypeAnnotation());
    }
  }
  if (!types.length) {
    return;
  }
  return (0, _util.createUnionType)(types);
}
function getConstantViolationsBefore(binding, path, functions) {
  const violations = binding.constantViolations.slice();
  violations.unshift(binding.path);
  return violations.filter(violation => {
    violation = violation.resolve();
    const status = violation._guessExecutionStatusRelativeTo(path);
    if (functions && status === "unknown") functions.push(violation);
    return status === "before";
  });
}
function inferAnnotationFromBinaryExpression(name, path) {
  const operator = path.node.operator;
  const right = path.get("right").resolve();
  const left = path.get("left").resolve();
  let target;
  if (left.isIdentifier({
    name
  })) {
    target = right;
  } else if (right.isIdentifier({
    name
  })) {
    target = left;
  }
  if (target) {
    if (operator === "===") {
      return target.getTypeAnnotation();
    }
    if (BOOLEAN_NUMBER_BINARY_OPERATORS.includes(operator)) {
      return numberTypeAnnotation();
    }
    return;
  }
  if (operator !== "===" && operator !== "==") return;
  let typeofPath;
  let typePath;
  if (left.isUnaryExpression({
    operator: "typeof"
  })) {
    typeofPath = left;
    typePath = right;
  } else if (right.isUnaryExpression({
    operator: "typeof"
  })) {
    typeofPath = right;
    typePath = left;
  }
  if (!typeofPath) return;
  if (!typeofPath.get("argument").isIdentifier({
    name
  })) return;
  typePath = typePath.resolve();
  if (!typePath.isLiteral()) return;
  const typeValue = typePath.node.value;
  if (typeof typeValue !== "string") return;
  return createTypeAnnotationBasedOnTypeof(typeValue);
}
function getParentConditionalPath(binding, path, name) {
  let parentPath;
  while (parentPath = path.parentPath) {
    if (parentPath.isIfStatement() || parentPath.isConditionalExpression()) {
      if (path.key === "test") {
        return;
      }
      return parentPath;
    }
    if (parentPath.isFunction()) {
      if (name == null || parentPath.parentPath.scope.getBinding(name) !== binding) return;
    }
    path = parentPath;
  }
}
function getConditionalAnnotation(binding, path, name) {
  const ifStatement = getParentConditionalPath(binding, path, name);
  if (!ifStatement) return;
  const test = ifStatement.get("test");
  const paths = [test];
  const types = [];
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    if (path.isLogicalExpression()) {
      if (path.node.operator === "&&") {
        paths.push(path.get("left"));
        paths.push(path.get("right"));
      }
    } else if (path.isBinaryExpression()) {
      const type = inferAnnotationFromBinaryExpression(name, path);
      if (type) types.push(type);
    }
  }
  if (types.length) {
    return {
      typeAnnotation: (0, _util.createUnionType)(types),
      ifStatement
    };
  }
  return getConditionalAnnotation(binding, ifStatement, name);
}

//# sourceMappingURL=inferer-reference.js.map
