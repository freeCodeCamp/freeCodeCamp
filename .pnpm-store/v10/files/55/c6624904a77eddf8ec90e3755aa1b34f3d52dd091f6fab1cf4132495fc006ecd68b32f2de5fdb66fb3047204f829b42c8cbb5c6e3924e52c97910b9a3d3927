"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _core = require("@babel/core");
var _loop = require("./loop.js");
var _validation = require("./validation.js");
var _annexB_3_ = require("./annex-B_3_3.js");
var _default = exports.default = (0, _helperPluginUtils.declare)((api, opts) => {
  api.assertVersion(7);
  const {
    throwIfClosureRequired = false,
    tdz: tdzEnabled = false
  } = opts;
  if (typeof throwIfClosureRequired !== "boolean") {
    throw new Error(`.throwIfClosureRequired must be a boolean, or undefined`);
  }
  if (typeof tdzEnabled !== "boolean") {
    throw new Error(`.tdz must be a boolean, or undefined`);
  }
  return {
    name: "transform-block-scoping",
    visitor: _core.traverse.visitors.merge([_annexB_3_.annexB33FunctionsVisitor, {
      Loop(path, state) {
        const isForStatement = path.isForStatement();
        const headPath = isForStatement ? path.get("init") : path.isForXStatement() ? path.get("left") : null;
        let needsBodyWrap = false;
        const markNeedsBodyWrap = () => {
          if (throwIfClosureRequired) {
            throw path.buildCodeFrameError("Compiling let/const in this block would add a closure " + "(throwIfClosureRequired).");
          }
          needsBodyWrap = true;
        };
        const body = path.get("body");
        let bodyScope;
        if (body.isBlockStatement()) {
          bodyScope = body.scope;
          const bindings = (0, _loop.getLoopBodyBindings)(path);
          for (const binding of bindings) {
            const {
              capturedInClosure
            } = (0, _loop.getUsageInBody)(binding, path);
            if (capturedInClosure) markNeedsBodyWrap();
          }
        }
        const captured = [];
        const updatedBindingsUsages = new Map();
        if (headPath && isBlockScoped(headPath.node)) {
          const names = Object.keys(headPath.getBindingIdentifiers());
          const headScope = headPath.scope;
          for (let name of names) {
            var _bodyScope;
            if ((_bodyScope = bodyScope) != null && _bodyScope.hasOwnBinding(name)) continue;
            let binding = headScope.getOwnBinding(name);
            if (!binding) {
              headScope.crawl();
              binding = headScope.getOwnBinding(name);
            }
            const {
              usages,
              capturedInClosure,
              hasConstantViolations
            } = (0, _loop.getUsageInBody)(binding, path);
            if (headScope.parent.hasBinding(name) || headScope.parent.hasGlobal(name)) {
              const newName = headScope.generateUid(name);
              headScope.rename(name, newName);
              name = newName;
            }
            if (capturedInClosure) {
              markNeedsBodyWrap();
              captured.push(name);
            }
            if (isForStatement && hasConstantViolations) {
              updatedBindingsUsages.set(name, usages);
            }
          }
        }
        if (needsBodyWrap) {
          const varPath = (0, _loop.wrapLoopBody)(path, captured, updatedBindingsUsages);
          if (headPath != null && headPath.isVariableDeclaration()) {
            transformBlockScopedVariable(headPath, state, tdzEnabled);
          }
          varPath.get("declarations.0.init").unwrapFunctionEnvironment();
        }
      },
      VariableDeclaration(path, state) {
        transformBlockScopedVariable(path, state, tdzEnabled);
      },
      ClassDeclaration(path) {
        const {
          id
        } = path.node;
        if (!id) return;
        const {
          scope
        } = path.parentPath;
        if (!(0, _annexB_3_.isVarScope)(scope) && scope.parent.hasBinding(id.name, {
          noUids: true
        })) {
          path.scope.rename(id.name);
        }
      }
    }])
  };
});
const conflictingFunctionsVisitor = {
  Scope(path, {
    names
  }) {
    for (const name of names) {
      const binding = path.scope.getOwnBinding(name);
      if (binding && binding.kind === "hoisted") {
        path.scope.rename(name);
      }
    }
  },
  "Expression|Declaration"(path) {
    path.skip();
  }
};
function transformBlockScopedVariable(path, state, tdzEnabled) {
  if (!isBlockScoped(path.node)) return;
  const dynamicTDZNames = (0, _validation.validateUsage)(path, state, tdzEnabled);
  path.node.kind = "var";
  const bindingNames = Object.keys(path.getBindingIdentifiers());
  for (const name of bindingNames) {
    const binding = path.scope.getOwnBinding(name);
    if (!binding) continue;
    binding.kind = "var";
  }
  if (isInLoop(path) && !(0, _loop.isVarInLoopHead)(path) || dynamicTDZNames.length > 0) {
    for (const decl of path.node.declarations) {
      var _decl$init;
      (_decl$init = decl.init) != null ? _decl$init : decl.init = path.scope.buildUndefinedNode();
    }
  }
  const blockScope = path.scope;
  const varScope = blockScope.getFunctionParent() || blockScope.getProgramParent();
  if (varScope !== blockScope) {
    for (const name of bindingNames) {
      let newName = name;
      if (blockScope.parent.hasBinding(name, {
        noUids: true
      }) || blockScope.parent.hasGlobal(name)) {
        newName = blockScope.generateUid(name);
        blockScope.rename(name, newName);
      }
      blockScope.moveBindingTo(newName, varScope);
    }
  }
  blockScope.path.traverse(conflictingFunctionsVisitor, {
    names: bindingNames
  });
  for (const name of dynamicTDZNames) {
    path.scope.push({
      id: _core.types.identifier(name),
      init: state.addHelper("temporalUndefined")
    });
  }
}
function isLetOrConst(kind) {
  return kind === "let" || kind === "const";
}
function isInLoop(path) {
  if (!path.parentPath) return false;
  if (path.parentPath.isLoop()) return true;
  if (path.parentPath.isFunctionParent()) return false;
  return isInLoop(path.parentPath);
}
function isBlockScoped(node) {
  if (!_core.types.isVariableDeclaration(node)) return false;
  if (node[_core.types.BLOCK_SCOPED_SYMBOL]) {
    return true;
  }
  if (!isLetOrConst(node.kind) && node.kind !== "using") {
    return false;
  }
  return true;
}

//# sourceMappingURL=index.js.map
