"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLoopBodyBindings = getLoopBodyBindings;
exports.getUsageInBody = getUsageInBody;
exports.isVarInLoopHead = isVarInLoopHead;
exports.wrapLoopBody = wrapLoopBody;
var _core = require("@babel/core");
const collectLoopBodyBindingsVisitor = {
  "Expression|Declaration|Loop"(path) {
    path.skip();
  },
  Scope(path, state) {
    if (path.isFunctionParent()) path.skip();
    const {
      bindings
    } = path.scope;
    for (const name of Object.keys(bindings)) {
      const binding = bindings[name];
      if (binding.kind === "let" || binding.kind === "const" || binding.kind === "hoisted") {
        state.blockScoped.push(binding);
      }
    }
  }
};
function getLoopBodyBindings(loopPath) {
  const state = {
    blockScoped: []
  };
  loopPath.traverse(collectLoopBodyBindingsVisitor, state);
  return state.blockScoped;
}
function getUsageInBody(binding, loopPath) {
  const seen = new WeakSet();
  let capturedInClosure = false;
  const constantViolations = filterMap(binding.constantViolations, path => {
    const {
      inBody,
      inClosure
    } = relativeLoopLocation(path, loopPath);
    if (!inBody) return null;
    capturedInClosure || (capturedInClosure = inClosure);
    const id = path.isUpdateExpression() ? path.get("argument") : path.isAssignmentExpression() ? path.get("left") : null;
    if (id) seen.add(id.node);
    return id;
  });
  const references = filterMap(binding.referencePaths, path => {
    if (seen.has(path.node)) return null;
    const {
      inBody,
      inClosure
    } = relativeLoopLocation(path, loopPath);
    if (!inBody) return null;
    capturedInClosure || (capturedInClosure = inClosure);
    return path;
  });
  return {
    capturedInClosure,
    hasConstantViolations: constantViolations.length > 0,
    usages: references.concat(constantViolations)
  };
}
function relativeLoopLocation(path, loopPath) {
  const bodyPath = loopPath.get("body");
  let inClosure = false;
  for (let currPath = path; currPath; currPath = currPath.parentPath) {
    if (currPath.isFunction() || currPath.isClass() || currPath.isMethod()) {
      inClosure = true;
    }
    if (currPath === bodyPath) {
      return {
        inBody: true,
        inClosure
      };
    } else if (currPath === loopPath) {
      return {
        inBody: false,
        inClosure
      };
    }
  }
  throw new Error("Internal Babel error: path is not in loop. Please report this as a bug.");
}
const collectCompletionsAndVarsVisitor = {
  Function(path) {
    path.skip();
  },
  LabeledStatement: {
    enter({
      node
    }, state) {
      state.labelsStack.push(node.label.name);
    },
    exit({
      node
    }, state) {
      const popped = state.labelsStack.pop();
      if (popped !== node.label.name) {
        throw new Error("Assertion failure. Please report this bug to Babel.");
      }
    }
  },
  Loop: {
    enter(_, state) {
      state.labellessContinueTargets++;
      state.labellessBreakTargets++;
    },
    exit(_, state) {
      state.labellessContinueTargets--;
      state.labellessBreakTargets--;
    }
  },
  SwitchStatement: {
    enter(_, state) {
      state.labellessBreakTargets++;
    },
    exit(_, state) {
      state.labellessBreakTargets--;
    }
  },
  "BreakStatement|ContinueStatement"(path, state) {
    const {
      label
    } = path.node;
    if (label) {
      if (state.labelsStack.includes(label.name)) return;
    } else if (path.isBreakStatement() ? state.labellessBreakTargets > 0 : state.labellessContinueTargets > 0) {
      return;
    }
    state.breaksContinues.push(path);
  },
  ReturnStatement(path, state) {
    state.returns.push(path);
  },
  VariableDeclaration(path, state) {
    if (path.parent === state.loopNode && isVarInLoopHead(path)) return;
    if (path.node.kind === "var") state.vars.push(path);
  }
};
function wrapLoopBody(loopPath, captured, updatedBindingsUsages) {
  const loopNode = loopPath.node;
  const state = {
    breaksContinues: [],
    returns: [],
    labelsStack: [],
    labellessBreakTargets: 0,
    labellessContinueTargets: 0,
    vars: [],
    loopNode
  };
  loopPath.traverse(collectCompletionsAndVarsVisitor, state);
  const callArgs = [];
  const closureParams = [];
  const updater = [];
  for (const [name, updatedUsage] of updatedBindingsUsages) {
    callArgs.push(_core.types.identifier(name));
    const innerName = loopPath.scope.generateUid(name);
    closureParams.push(_core.types.identifier(innerName));
    updater.push(_core.types.assignmentExpression("=", _core.types.identifier(name), _core.types.identifier(innerName)));
    for (const path of updatedUsage) path.replaceWith(_core.types.identifier(innerName));
  }
  for (const name of captured) {
    if (updatedBindingsUsages.has(name)) continue;
    callArgs.push(_core.types.identifier(name));
    closureParams.push(_core.types.identifier(name));
  }
  const id = loopPath.scope.generateUid("loop");
  const fn = _core.types.functionExpression(null, closureParams, _core.types.toBlock(loopNode.body));
  let call = _core.types.callExpression(_core.types.identifier(id), callArgs);
  const fnParent = loopPath.findParent(p => p.isFunction());
  if (fnParent) {
    const {
      async,
      generator
    } = fnParent.node;
    fn.async = async;
    fn.generator = generator;
    if (generator) call = _core.types.yieldExpression(call, true);else if (async) call = _core.types.awaitExpression(call);
  }
  const updaterNode = updater.length > 0 ? _core.types.expressionStatement(_core.types.sequenceExpression(updater)) : null;
  if (updaterNode) fn.body.body.push(updaterNode);
  const [varPath] = loopPath.insertBefore(_core.types.variableDeclaration("var", [_core.types.variableDeclarator(_core.types.identifier(id), fn)]));
  const bodyStmts = [];
  const varNames = [];
  for (const varPath of state.vars) {
    const assign = [];
    for (const decl of varPath.node.declarations) {
      varNames.push(...Object.keys(_core.types.getBindingIdentifiers(decl.id)));
      if (decl.init) {
        assign.push(_core.types.assignmentExpression("=", decl.id, decl.init));
      }
    }
    if (assign.length > 0) {
      let replacement = assign.length === 1 ? assign[0] : _core.types.sequenceExpression(assign);
      if (!_core.types.isForStatement(varPath.parent, {
        init: varPath.node
      }) && !_core.types.isForXStatement(varPath.parent, {
        left: varPath.node
      })) {
        replacement = _core.types.expressionStatement(replacement);
      }
      varPath.replaceWith(replacement);
    } else {
      varPath.remove();
    }
  }
  if (varNames.length) {
    varPath.pushContainer("declarations", varNames.map(name => _core.types.variableDeclarator(_core.types.identifier(name))));
  }
  const labelNum = state.breaksContinues.length;
  const returnNum = state.returns.length;
  if (labelNum + returnNum === 0) {
    bodyStmts.push(_core.types.expressionStatement(call));
  } else if (labelNum === 1 && returnNum === 0) {
    for (const path of state.breaksContinues) {
      const {
        node
      } = path;
      const {
        type,
        label
      } = node;
      let name = type === "BreakStatement" ? "break" : "continue";
      if (label) name += " " + label.name;
      path.replaceWith(_core.types.addComment(_core.types.returnStatement(_core.types.numericLiteral(1)), "trailing", " " + name, true));
      if (updaterNode) path.insertBefore(_core.types.cloneNode(updaterNode));
      bodyStmts.push(_core.template.statement.ast`
        if (${call}) ${node}
      `);
    }
  } else {
    const completionId = loopPath.scope.generateUid("ret");
    if (varPath.isVariableDeclaration()) {
      varPath.pushContainer("declarations", [_core.types.variableDeclarator(_core.types.identifier(completionId))]);
      bodyStmts.push(_core.types.expressionStatement(_core.types.assignmentExpression("=", _core.types.identifier(completionId), call)));
    } else {
      bodyStmts.push(_core.types.variableDeclaration("var", [_core.types.variableDeclarator(_core.types.identifier(completionId), call)]));
    }
    const injected = [];
    for (const path of state.breaksContinues) {
      const {
        node
      } = path;
      const {
        type,
        label
      } = node;
      let name = type === "BreakStatement" ? "break" : "continue";
      if (label) name += " " + label.name;
      let i = injected.indexOf(name);
      const hasInjected = i !== -1;
      if (!hasInjected) {
        injected.push(name);
        i = injected.length - 1;
      }
      path.replaceWith(_core.types.addComment(_core.types.returnStatement(_core.types.numericLiteral(i)), "trailing", " " + name, true));
      if (updaterNode) path.insertBefore(_core.types.cloneNode(updaterNode));
      if (hasInjected) continue;
      bodyStmts.push(_core.template.statement.ast`
        if (${_core.types.identifier(completionId)} === ${_core.types.numericLiteral(i)}) ${node}
      `);
    }
    if (returnNum) {
      for (const path of state.returns) {
        const arg = path.node.argument || path.scope.buildUndefinedNode();
        path.replaceWith(_core.template.statement.ast`
          return { v: ${arg} };
        `);
      }
      bodyStmts.push(_core.template.statement.ast`
          if (${_core.types.identifier(completionId)}) return ${_core.types.identifier(completionId)}.v;
        `);
    }
  }
  loopNode.body = _core.types.blockStatement(bodyStmts);
  return varPath;
}
function isVarInLoopHead(path) {
  if (_core.types.isForStatement(path.parent)) return path.key === "init";
  if (_core.types.isForXStatement(path.parent)) return path.key === "left";
  return false;
}
function filterMap(list, fn) {
  const result = [];
  for (const item of list) {
    const mapped = fn(item);
    if (mapped) result.push(mapped);
  }
  return result;
}

//# sourceMappingURL=loop.js.map
