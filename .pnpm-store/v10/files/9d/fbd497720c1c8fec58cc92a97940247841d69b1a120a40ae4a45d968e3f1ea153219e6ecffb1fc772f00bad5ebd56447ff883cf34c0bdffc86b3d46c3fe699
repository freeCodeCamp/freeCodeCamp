"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._guessExecutionStatusRelativeTo = _guessExecutionStatusRelativeTo;
exports._resolve = _resolve;
exports.canHaveVariableDeclarationOrExpression = canHaveVariableDeclarationOrExpression;
exports.canSwapBetweenExpressionAndStatement = canSwapBetweenExpressionAndStatement;
exports.getSource = getSource;
exports.isCompletionRecord = isCompletionRecord;
exports.isConstantExpression = isConstantExpression;
exports.isInStrictMode = isInStrictMode;
exports.isNodeType = isNodeType;
exports.isStatementOrBlock = isStatementOrBlock;
exports.isStatic = isStatic;
exports.matchesPattern = matchesPattern;
exports.referencesImport = referencesImport;
exports.resolve = resolve;
exports.willIMaybeExecuteBefore = willIMaybeExecuteBefore;
var _t = require("@babel/types");
const {
  STATEMENT_OR_BLOCK_KEYS,
  VISITOR_KEYS,
  isBlockStatement,
  isExpression,
  isIdentifier,
  isLiteral,
  isStringLiteral,
  isType,
  matchesPattern: _matchesPattern
} = _t;
function matchesPattern(pattern, allowPartial) {
  return _matchesPattern(this.node, pattern, allowPartial);
}
exports.has = function has(key) {
  var _this$node;
  const val = (_this$node = this.node) == null ? void 0 : _this$node[key];
  if (val && Array.isArray(val)) {
    return !!val.length;
  } else {
    return !!val;
  }
};
function isStatic() {
  return this.scope.isStatic(this.node);
}
exports.is = exports.has;
exports.isnt = function isnt(key) {
  return !this.has(key);
};
exports.equals = function equals(key, value) {
  return this.node[key] === value;
};
function isNodeType(type) {
  return isType(this.type, type);
}
function canHaveVariableDeclarationOrExpression() {
  return (this.key === "init" || this.key === "left") && this.parentPath.isFor();
}
function canSwapBetweenExpressionAndStatement(replacement) {
  if (this.key !== "body" || !this.parentPath.isArrowFunctionExpression()) {
    return false;
  }
  if (this.isExpression()) {
    return isBlockStatement(replacement);
  } else if (this.isBlockStatement()) {
    return isExpression(replacement);
  }
  return false;
}
function isCompletionRecord(allowInsideFunction) {
  let path = this;
  let first = true;
  do {
    const {
      type,
      container
    } = path;
    if (!first && (path.isFunction() || type === "StaticBlock")) {
      return !!allowInsideFunction;
    }
    first = false;
    if (Array.isArray(container) && path.key !== container.length - 1) {
      return false;
    }
  } while ((path = path.parentPath) && !path.isProgram() && !path.isDoExpression());
  return true;
}
function isStatementOrBlock() {
  if (this.parentPath.isLabeledStatement() || isBlockStatement(this.container)) {
    return false;
  } else {
    return STATEMENT_OR_BLOCK_KEYS.includes(this.key);
  }
}
function referencesImport(moduleSource, importName) {
  if (!this.isReferencedIdentifier()) {
    if (this.isJSXMemberExpression() && this.node.property.name === importName || (this.isMemberExpression() || this.isOptionalMemberExpression()) && (this.node.computed ? isStringLiteral(this.node.property, {
      value: importName
    }) : this.node.property.name === importName)) {
      const object = this.get("object");
      return object.isReferencedIdentifier() && object.referencesImport(moduleSource, "*");
    }
    return false;
  }
  const binding = this.scope.getBinding(this.node.name);
  if ((binding == null ? void 0 : binding.kind) !== "module") return false;
  const path = binding.path;
  const parent = path.parentPath;
  if (!parent.isImportDeclaration()) return false;
  if (parent.node.source.value === moduleSource) {
    if (!importName) return true;
  } else {
    return false;
  }
  if (path.isImportDefaultSpecifier() && importName === "default") {
    return true;
  }
  if (path.isImportNamespaceSpecifier() && importName === "*") {
    return true;
  }
  if (path.isImportSpecifier() && isIdentifier(path.node.imported, {
    name: importName
  })) {
    return true;
  }
  return false;
}
function getSource() {
  const node = this.node;
  if (node.end) {
    const code = this.hub.getCode();
    if (code) return code.slice(node.start, node.end);
  }
  return "";
}
function willIMaybeExecuteBefore(target) {
  return this._guessExecutionStatusRelativeTo(target) !== "after";
}
function getOuterFunction(path) {
  return path.isProgram() ? path : (path.parentPath.scope.getFunctionParent() || path.parentPath.scope.getProgramParent()).path;
}
function isExecutionUncertain(type, key) {
  switch (type) {
    case "LogicalExpression":
      return key === "right";
    case "ConditionalExpression":
    case "IfStatement":
      return key === "consequent" || key === "alternate";
    case "WhileStatement":
    case "DoWhileStatement":
    case "ForInStatement":
    case "ForOfStatement":
      return key === "body";
    case "ForStatement":
      return key === "body" || key === "update";
    case "SwitchStatement":
      return key === "cases";
    case "TryStatement":
      return key === "handler";
    case "AssignmentPattern":
      return key === "right";
    case "OptionalMemberExpression":
      return key === "property";
    case "OptionalCallExpression":
      return key === "arguments";
    default:
      return false;
  }
}
function isExecutionUncertainInList(paths, maxIndex) {
  for (let i = 0; i < maxIndex; i++) {
    const path = paths[i];
    if (isExecutionUncertain(path.parent.type, path.parentKey)) {
      return true;
    }
  }
  return false;
}
const SYMBOL_CHECKING = Symbol();
function _guessExecutionStatusRelativeTo(target) {
  return _guessExecutionStatusRelativeToCached(this, target, new Map());
}
function _guessExecutionStatusRelativeToCached(base, target, cache) {
  const funcParent = {
    this: getOuterFunction(base),
    target: getOuterFunction(target)
  };
  if (funcParent.target.node !== funcParent.this.node) {
    return _guessExecutionStatusRelativeToDifferentFunctionsCached(base, funcParent.target, cache);
  }
  const paths = {
    target: target.getAncestry(),
    this: base.getAncestry()
  };
  if (paths.target.includes(base)) return "after";
  if (paths.this.includes(target)) return "before";
  let commonPath;
  const commonIndex = {
    target: 0,
    this: 0
  };
  while (!commonPath && commonIndex.this < paths.this.length) {
    const path = paths.this[commonIndex.this];
    commonIndex.target = paths.target.indexOf(path);
    if (commonIndex.target >= 0) {
      commonPath = path;
    } else {
      commonIndex.this++;
    }
  }
  if (!commonPath) {
    throw new Error("Internal Babel error - The two compared nodes" + " don't appear to belong to the same program.");
  }
  if (isExecutionUncertainInList(paths.this, commonIndex.this - 1) || isExecutionUncertainInList(paths.target, commonIndex.target - 1)) {
    return "unknown";
  }
  const divergence = {
    this: paths.this[commonIndex.this - 1],
    target: paths.target[commonIndex.target - 1]
  };
  if (divergence.target.listKey && divergence.this.listKey && divergence.target.container === divergence.this.container) {
    return divergence.target.key > divergence.this.key ? "before" : "after";
  }
  const keys = VISITOR_KEYS[commonPath.type];
  const keyPosition = {
    this: keys.indexOf(divergence.this.parentKey),
    target: keys.indexOf(divergence.target.parentKey)
  };
  return keyPosition.target > keyPosition.this ? "before" : "after";
}
function _guessExecutionStatusRelativeToDifferentFunctionsInternal(base, target, cache) {
  if (!target.isFunctionDeclaration()) {
    if (_guessExecutionStatusRelativeToCached(base, target, cache) === "before") {
      return "before";
    }
    return "unknown";
  } else if (target.parentPath.isExportDeclaration()) {
    return "unknown";
  }
  const binding = target.scope.getBinding(target.node.id.name);
  if (!binding.references) return "before";
  const referencePaths = binding.referencePaths;
  let allStatus;
  for (const path of referencePaths) {
    const childOfFunction = !!path.find(path => path.node === target.node);
    if (childOfFunction) continue;
    if (path.key !== "callee" || !path.parentPath.isCallExpression()) {
      return "unknown";
    }
    const status = _guessExecutionStatusRelativeToCached(base, path, cache);
    if (allStatus && allStatus !== status) {
      return "unknown";
    } else {
      allStatus = status;
    }
  }
  return allStatus;
}
function _guessExecutionStatusRelativeToDifferentFunctionsCached(base, target, cache) {
  let nodeMap = cache.get(base.node);
  let cached;
  if (!nodeMap) {
    cache.set(base.node, nodeMap = new Map());
  } else if (cached = nodeMap.get(target.node)) {
    if (cached === SYMBOL_CHECKING) {
      return "unknown";
    }
    return cached;
  }
  nodeMap.set(target.node, SYMBOL_CHECKING);
  const result = _guessExecutionStatusRelativeToDifferentFunctionsInternal(base, target, cache);
  nodeMap.set(target.node, result);
  return result;
}
function resolve(dangerous, resolved) {
  return _resolve.call(this, dangerous, resolved) || this;
}
function _resolve(dangerous, resolved) {
  var _resolved;
  if ((_resolved = resolved) != null && _resolved.includes(this)) return;
  resolved = resolved || [];
  resolved.push(this);
  if (this.isVariableDeclarator()) {
    if (this.get("id").isIdentifier()) {
      return this.get("init").resolve(dangerous, resolved);
    } else {}
  } else if (this.isReferencedIdentifier()) {
    const binding = this.scope.getBinding(this.node.name);
    if (!binding) return;
    if (!binding.constant) return;
    if (binding.kind === "module") return;
    if (binding.path !== this) {
      const ret = binding.path.resolve(dangerous, resolved);
      if (this.find(parent => parent.node === ret.node)) return;
      return ret;
    }
  } else if (this.isTypeCastExpression()) {
    return this.get("expression").resolve(dangerous, resolved);
  } else if (dangerous && this.isMemberExpression()) {
    const targetKey = this.toComputedKey();
    if (!isLiteral(targetKey)) return;
    const targetName = targetKey.value;
    const target = this.get("object").resolve(dangerous, resolved);
    if (target.isObjectExpression()) {
      const props = target.get("properties");
      for (const prop of props) {
        if (!prop.isProperty()) continue;
        const key = prop.get("key");
        let match = prop.isnt("computed") && key.isIdentifier({
          name: targetName
        });
        match = match || key.isLiteral({
          value: targetName
        });
        if (match) return prop.get("value").resolve(dangerous, resolved);
      }
    } else if (target.isArrayExpression() && !isNaN(+targetName)) {
      const elems = target.get("elements");
      const elem = elems[targetName];
      if (elem) return elem.resolve(dangerous, resolved);
    }
  }
}
function isConstantExpression() {
  if (this.isIdentifier()) {
    const binding = this.scope.getBinding(this.node.name);
    if (!binding) return false;
    return binding.constant;
  }
  if (this.isLiteral()) {
    if (this.isRegExpLiteral()) {
      return false;
    }
    if (this.isTemplateLiteral()) {
      return this.get("expressions").every(expression => expression.isConstantExpression());
    }
    return true;
  }
  if (this.isUnaryExpression()) {
    if (this.node.operator !== "void") {
      return false;
    }
    return this.get("argument").isConstantExpression();
  }
  if (this.isBinaryExpression()) {
    const {
      operator
    } = this.node;
    return operator !== "in" && operator !== "instanceof" && this.get("left").isConstantExpression() && this.get("right").isConstantExpression();
  }
  if (this.isMemberExpression()) {
    return !this.node.computed && this.get("object").isIdentifier({
      name: "Symbol"
    }) && !this.scope.hasBinding("Symbol", {
      noGlobals: true
    });
  }
  if (this.isCallExpression()) {
    return this.node.arguments.length === 1 && this.get("callee").matchesPattern("Symbol.for") && !this.scope.hasBinding("Symbol", {
      noGlobals: true
    }) && this.get("arguments")[0].isStringLiteral();
  }
  return false;
}
function isInStrictMode() {
  const start = this.isProgram() ? this : this.parentPath;
  const strictParent = start.find(path => {
    if (path.isProgram({
      sourceType: "module"
    })) return true;
    if (path.isClass()) return true;
    if (path.isArrowFunctionExpression() && !path.get("body").isBlockStatement()) {
      return false;
    }
    let body;
    if (path.isFunction()) {
      body = path.node.body;
    } else if (path.isProgram()) {
      body = path.node;
    } else {
      return false;
    }
    for (const directive of body.directives) {
      if (directive.value.value === "use strict") {
        return true;
      }
    }
    return false;
  });
  return !!strictParent;
}

//# sourceMappingURL=introspection.js.map
