"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUsage = validateUsage;
var _core = require("@babel/core");
function validateUsage(path, state, tdzEnabled) {
  const dynamicTDZNames = [];
  for (const name of Object.keys(path.getBindingIdentifiers())) {
    const binding = path.scope.getBinding(name);
    if (!binding) continue;
    if (tdzEnabled) {
      if (injectTDZChecks(binding, state)) dynamicTDZNames.push(name);
    }
    if (path.node.kind === "const") {
      disallowConstantViolations(name, binding, state);
    }
  }
  return dynamicTDZNames;
}
function disallowConstantViolations(name, binding, state) {
  for (const violation of binding.constantViolations) {
    const readOnlyError = state.addHelper("readOnlyError");
    const throwNode = _core.types.callExpression(readOnlyError, [_core.types.stringLiteral(name)]);
    if (violation.isAssignmentExpression()) {
      const {
        operator,
        left,
        right
      } = violation.node;
      if (operator === "=") {
        const exprs = [right];
        exprs.push(throwNode);
        violation.replaceWith(_core.types.sequenceExpression(exprs));
      } else if (["&&=", "||=", "??="].includes(operator)) {
        violation.replaceWith(_core.types.logicalExpression(operator.slice(0, -1), left, _core.types.sequenceExpression([right, throwNode])));
      } else {
        violation.replaceWith(_core.types.sequenceExpression([_core.types.binaryExpression(operator.slice(0, -1), left, right), throwNode]));
      }
    } else if (violation.isUpdateExpression()) {
      violation.replaceWith(_core.types.sequenceExpression([_core.types.unaryExpression("+", violation.get("argument").node), throwNode]));
    } else if (violation.isForXStatement()) {
      violation.ensureBlock();
      violation.get("left").replaceWith(_core.types.variableDeclaration("var", [_core.types.variableDeclarator(violation.scope.generateUidIdentifier(name))]));
      violation.node.body.body.unshift(_core.types.expressionStatement(throwNode));
    }
  }
}
function getTDZStatus(refPath, bindingPath) {
  const executionStatus = bindingPath._guessExecutionStatusRelativeTo(refPath);
  if (executionStatus === "before") {
    return "outside";
  } else if (executionStatus === "after") {
    return "inside";
  } else {
    return "maybe";
  }
}
const skipTDZChecks = new WeakSet();
function buildTDZAssert(status, node, state) {
  if (status === "maybe") {
    const clone = _core.types.cloneNode(node);
    skipTDZChecks.add(clone);
    return _core.types.callExpression(state.addHelper("temporalRef"), [clone, _core.types.stringLiteral(node.name)]);
  } else {
    return _core.types.callExpression(state.addHelper("tdz"), [_core.types.stringLiteral(node.name)]);
  }
}
function getTDZReplacement(path, state, id = path.node) {
  var _path$scope$getBindin;
  if (skipTDZChecks.has(id)) return;
  skipTDZChecks.add(id);
  const bindingPath = (_path$scope$getBindin = path.scope.getBinding(id.name)) == null ? void 0 : _path$scope$getBindin.path;
  if (!bindingPath || bindingPath.isFunctionDeclaration()) return;
  const status = getTDZStatus(path, bindingPath);
  if (status === "outside") return;
  if (status === "maybe") {
    bindingPath.parent._tdzThis = true;
  }
  return {
    status,
    node: buildTDZAssert(status, id, state)
  };
}
function injectTDZChecks(binding, state) {
  const allUsages = new Set(binding.referencePaths);
  binding.constantViolations.forEach(allUsages.add, allUsages);
  let dynamicTdz = false;
  for (const path of binding.constantViolations) {
    const {
      node
    } = path;
    if (skipTDZChecks.has(node)) continue;
    skipTDZChecks.add(node);
    if (path.isUpdateExpression()) {
      const arg = path.get("argument");
      const replacement = getTDZReplacement(path, state, arg.node);
      if (!replacement) continue;
      if (replacement.status === "maybe") {
        dynamicTdz = true;
        path.insertBefore(replacement.node);
      } else {
        path.replaceWith(replacement.node);
      }
    } else if (path.isAssignmentExpression()) {
      const nodes = [];
      const ids = path.getBindingIdentifiers();
      for (const name of Object.keys(ids)) {
        const replacement = getTDZReplacement(path, state, ids[name]);
        if (replacement) {
          nodes.push(_core.types.expressionStatement(replacement.node));
          if (replacement.status === "inside") break;
          if (replacement.status === "maybe") dynamicTdz = true;
        }
      }
      if (nodes.length > 0) path.insertBefore(nodes);
    }
  }
  for (const path of binding.referencePaths) {
    if (path.parentPath.isUpdateExpression()) continue;
    if (path.parentPath.isFor({
      left: path.node
    })) continue;
    const replacement = getTDZReplacement(path, state);
    if (!replacement) continue;
    if (replacement.status === "maybe") dynamicTdz = true;
    path.replaceWith(replacement.node);
  }
  return dynamicTdz;
}

//# sourceMappingURL=validation.js.map
