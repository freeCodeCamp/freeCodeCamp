"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.evaluate = evaluate;
exports.evaluateTruthy = evaluateTruthy;
const VALID_OBJECT_CALLEES = ["Number", "String", "Math"];
const VALID_IDENTIFIER_CALLEES = ["isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", null, null];
const INVALID_METHODS = ["random"];
function isValidObjectCallee(val) {
  return VALID_OBJECT_CALLEES.includes(val);
}
function isValidIdentifierCallee(val) {
  return VALID_IDENTIFIER_CALLEES.includes(val);
}
function isInvalidMethod(val) {
  return INVALID_METHODS.includes(val);
}
function evaluateTruthy() {
  const res = this.evaluate();
  if (res.confident) return !!res.value;
}
function deopt(path, state) {
  if (!state.confident) return;
  state.deoptPath = path;
  state.confident = false;
}
const Globals = new Map([["undefined", undefined], ["Infinity", Infinity], ["NaN", NaN]]);
function evaluateCached(path, state) {
  const {
    node
  } = path;
  const {
    seen
  } = state;
  if (seen.has(node)) {
    const existing = seen.get(node);
    if (existing.resolved) {
      return existing.value;
    } else {
      deopt(path, state);
      return;
    }
  } else {
    const item = {
      resolved: false
    };
    seen.set(node, item);
    const val = _evaluate(path, state);
    if (state.confident) {
      item.resolved = true;
      item.value = val;
    }
    return val;
  }
}
function _evaluate(path, state) {
  if (!state.confident) return;
  if (path.isSequenceExpression()) {
    const exprs = path.get("expressions");
    return evaluateCached(exprs[exprs.length - 1], state);
  }
  if (path.isStringLiteral() || path.isNumericLiteral() || path.isBooleanLiteral()) {
    return path.node.value;
  }
  if (path.isNullLiteral()) {
    return null;
  }
  if (path.isTemplateLiteral()) {
    return evaluateQuasis(path, path.node.quasis, state);
  }
  if (path.isTaggedTemplateExpression() && path.get("tag").isMemberExpression()) {
    const object = path.get("tag.object");
    const {
      node: {
        name
      }
    } = object;
    const property = path.get("tag.property");
    if (object.isIdentifier() && name === "String" && !path.scope.getBinding(name) && property.isIdentifier() && property.node.name === "raw") {
      return evaluateQuasis(path, path.node.quasi.quasis, state, true);
    }
  }
  if (path.isConditionalExpression()) {
    const testResult = evaluateCached(path.get("test"), state);
    if (!state.confident) return;
    if (testResult) {
      return evaluateCached(path.get("consequent"), state);
    } else {
      return evaluateCached(path.get("alternate"), state);
    }
  }
  if (path.isExpressionWrapper()) {
    return evaluateCached(path.get("expression"), state);
  }
  if (path.isMemberExpression() && !path.parentPath.isCallExpression({
    callee: path.node
  })) {
    const property = path.get("property");
    const object = path.get("object");
    if (object.isLiteral()) {
      const value = object.node.value;
      const type = typeof value;
      let key = null;
      if (path.node.computed) {
        key = evaluateCached(property, state);
        if (!state.confident) return;
      } else if (property.isIdentifier()) {
        key = property.node.name;
      }
      if ((type === "number" || type === "string") && key != null && (typeof key === "number" || typeof key === "string")) {
        return value[key];
      }
    }
  }
  if (path.isReferencedIdentifier()) {
    const binding = path.scope.getBinding(path.node.name);
    if (binding) {
      if (binding.constantViolations.length > 0 || path.node.start < binding.path.node.end) {
        deopt(binding.path, state);
        return;
      }
      const bindingPathScope = binding.path.scope;
      if (binding.kind === "var" && bindingPathScope !== binding.scope) {
        let hasUnsafeBlock = !bindingPathScope.path.parentPath.isBlockStatement();
        for (let scope = bindingPathScope.parent; scope; scope = scope.parent) {
          var _scope$path$parentPat;
          if (scope === path.scope) {
            if (hasUnsafeBlock) {
              deopt(binding.path, state);
              return;
            }
            break;
          }
          if ((_scope$path$parentPat = scope.path.parentPath) != null && _scope$path$parentPat.isBlockStatement()) {
            hasUnsafeBlock = true;
          }
        }
      }
      if (binding.hasValue) {
        return binding.value;
      }
    }
    const name = path.node.name;
    if (Globals.has(name)) {
      if (!binding) {
        return Globals.get(name);
      }
      deopt(binding.path, state);
      return;
    }
    if (!binding) {
      deopt(path, state);
      return;
    }
    const bindingPath = binding.path;
    if (!bindingPath.isVariableDeclarator()) {
      deopt(bindingPath, state);
      return;
    }
    const initPath = bindingPath.get("init");
    const value = evaluateCached(initPath, state);
    if (typeof value === "object" && value !== null && binding.references > 1) {
      deopt(initPath, state);
      return;
    }
    return value;
  }
  if (path.isUnaryExpression({
    prefix: true
  })) {
    if (path.node.operator === "void") {
      return undefined;
    }
    const argument = path.get("argument");
    if (path.node.operator === "typeof" && (argument.isFunction() || argument.isClass())) {
      return "function";
    }
    const arg = evaluateCached(argument, state);
    if (!state.confident) return;
    switch (path.node.operator) {
      case "!":
        return !arg;
      case "+":
        return +arg;
      case "-":
        return -arg;
      case "~":
        return ~arg;
      case "typeof":
        return typeof arg;
    }
  }
  if (path.isArrayExpression()) {
    const arr = [];
    const elems = path.get("elements");
    for (const elem of elems) {
      const elemValue = elem.evaluate();
      if (elemValue.confident) {
        arr.push(elemValue.value);
      } else {
        deopt(elemValue.deopt, state);
        return;
      }
    }
    return arr;
  }
  if (path.isObjectExpression()) {
    const obj = {};
    const props = path.get("properties");
    for (const prop of props) {
      if (prop.isObjectMethod() || prop.isSpreadElement()) {
        deopt(prop, state);
        return;
      }
      const keyPath = prop.get("key");
      let key;
      if (prop.node.computed) {
        key = keyPath.evaluate();
        if (!key.confident) {
          deopt(key.deopt, state);
          return;
        }
        key = key.value;
      } else if (keyPath.isIdentifier()) {
        key = keyPath.node.name;
      } else {
        key = keyPath.node.value;
      }
      const valuePath = prop.get("value");
      let value = valuePath.evaluate();
      if (!value.confident) {
        deopt(value.deopt, state);
        return;
      }
      value = value.value;
      obj[key] = value;
    }
    return obj;
  }
  if (path.isLogicalExpression()) {
    const wasConfident = state.confident;
    const left = evaluateCached(path.get("left"), state);
    const leftConfident = state.confident;
    state.confident = wasConfident;
    const right = evaluateCached(path.get("right"), state);
    const rightConfident = state.confident;
    switch (path.node.operator) {
      case "||":
        state.confident = leftConfident && (!!left || rightConfident);
        if (!state.confident) return;
        return left || right;
      case "&&":
        state.confident = leftConfident && (!left || rightConfident);
        if (!state.confident) return;
        return left && right;
      case "??":
        state.confident = leftConfident && (left != null || rightConfident);
        if (!state.confident) return;
        return left != null ? left : right;
    }
  }
  if (path.isBinaryExpression()) {
    const left = evaluateCached(path.get("left"), state);
    if (!state.confident) return;
    const right = evaluateCached(path.get("right"), state);
    if (!state.confident) return;
    switch (path.node.operator) {
      case "-":
        return left - right;
      case "+":
        return left + right;
      case "/":
        return left / right;
      case "*":
        return left * right;
      case "%":
        return left % right;
      case "**":
        return Math.pow(left, right);
      case "<":
        return left < right;
      case ">":
        return left > right;
      case "<=":
        return left <= right;
      case ">=":
        return left >= right;
      case "==":
        return left == right;
      case "!=":
        return left != right;
      case "===":
        return left === right;
      case "!==":
        return left !== right;
      case "|":
        return left | right;
      case "&":
        return left & right;
      case "^":
        return left ^ right;
      case "<<":
        return left << right;
      case ">>":
        return left >> right;
      case ">>>":
        return left >>> right;
    }
  }
  if (path.isCallExpression()) {
    const callee = path.get("callee");
    let context;
    let func;
    if (callee.isIdentifier() && !path.scope.getBinding(callee.node.name) && (isValidObjectCallee(callee.node.name) || isValidIdentifierCallee(callee.node.name))) {
      func = global[callee.node.name];
    }
    if (callee.isMemberExpression()) {
      const object = callee.get("object");
      const property = callee.get("property");
      if (object.isIdentifier() && property.isIdentifier() && isValidObjectCallee(object.node.name) && !isInvalidMethod(property.node.name)) {
        context = global[object.node.name];
        const key = property.node.name;
        if (hasOwnProperty.call(context, key)) {
          func = context[key];
        }
      }
      if (object.isLiteral() && property.isIdentifier()) {
        const type = typeof object.node.value;
        if (type === "string" || type === "number") {
          context = object.node.value;
          func = context[property.node.name];
        }
      }
    }
    if (func) {
      const args = path.get("arguments").map(arg => evaluateCached(arg, state));
      if (!state.confident) return;
      return func.apply(context, args);
    }
  }
  deopt(path, state);
}
function evaluateQuasis(path, quasis, state, raw = false) {
  let str = "";
  let i = 0;
  const exprs = path.isTemplateLiteral() ? path.get("expressions") : path.get("quasi.expressions");
  for (const elem of quasis) {
    if (!state.confident) break;
    str += raw ? elem.value.raw : elem.value.cooked;
    const expr = exprs[i++];
    if (expr) str += String(evaluateCached(expr, state));
  }
  if (!state.confident) return;
  return str;
}
function evaluate() {
  const state = {
    confident: true,
    deoptPath: null,
    seen: new Map()
  };
  let value = evaluateCached(this, state);
  if (!state.confident) value = undefined;
  return {
    confident: state.confident,
    deopt: state.deoptPath,
    value: value
  };
}

//# sourceMappingURL=evaluation.js.map
