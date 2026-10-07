"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.annexB33FunctionsVisitor = void 0;
exports.isVarScope = isVarScope;
var _core = require("@babel/core");
const annexB33FunctionsVisitor = exports.annexB33FunctionsVisitor = {
  VariableDeclaration(path) {
    if (isStrict(path)) return;
    if (path.node.kind !== "var") return;
    const varScope = path.scope.getFunctionParent() || path.scope.getProgramParent();
    varScope.path.traverse(functionsToVarVisitor, {
      names: Object.keys(path.getBindingIdentifiers())
    });
  },
  BlockStatement(path) {
    if (isStrict(path)) return;
    if (_core.types.isFunction(path.parent, {
      body: path.node
    })) return;
    transformStatementList(path.get("body"));
  },
  SwitchCase(path) {
    if (isStrict(path)) return;
    transformStatementList(path.get("consequent"));
  }
};
function transformStatementList(paths) {
  outer: for (const path of paths) {
    if (!path.isFunctionDeclaration()) continue;
    if (path.node.async || path.node.generator) return;
    const {
      scope
    } = path.parentPath;
    if (isVarScope(scope)) return;
    const {
      name
    } = path.node.id;
    let currScope = scope;
    do {
      if (currScope.parent.hasOwnBinding(name)) continue outer;
      currScope = currScope.parent;
    } while (!isVarScope(currScope));
    maybeTransformBlockScopedFunction(path);
  }
}
function maybeTransformBlockScopedFunction(path) {
  const {
    node,
    parentPath: {
      scope
    }
  } = path;
  const {
    id
  } = node;
  scope.removeOwnBinding(id.name);
  node.id = null;
  const varNode = _core.types.variableDeclaration("var", [_core.types.variableDeclarator(id, _core.types.toExpression(node))]);
  varNode._blockHoist = 2;
  const [varPath] = path.replaceWith(varNode);
  scope.registerDeclaration(varPath);
}
const functionsToVarVisitor = {
  Scope(path, {
    names
  }) {
    for (const name of names) {
      const binding = path.scope.getOwnBinding(name);
      if (binding && binding.kind === "hoisted") {
        maybeTransformBlockScopedFunction(binding.path);
      }
    }
  },
  "Expression|Declaration"(path) {
    path.skip();
  }
};
function isVarScope(scope) {
  return scope.path.isFunctionParent() || scope.path.isProgram();
}
function isStrict(path) {
  return !!path.find(({
    node
  }) => {
    var _node$directives;
    if (_core.types.isProgram(node)) {
      if (node.sourceType === "module") return true;
    } else if (_core.types.isClass(node)) {
      return true;
    } else if (!_core.types.isBlockStatement(node)) {
      return false;
    }
    return (_node$directives = node.directives) == null ? void 0 : _node$directives.some(directive => directive.value.value === "use strict");
  });
}

//# sourceMappingURL=annex-B_3_3.js.map
