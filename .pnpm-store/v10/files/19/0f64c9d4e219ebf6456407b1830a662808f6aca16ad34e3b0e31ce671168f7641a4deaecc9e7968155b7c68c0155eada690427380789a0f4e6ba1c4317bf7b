"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractComputedKeys = extractComputedKeys;
exports.injectInitialization = injectInitialization;
exports.memoiseComputedKey = memoiseComputedKey;
var _core = require("@babel/core");
var _traverse = require("@babel/traverse");
const findBareSupers = _traverse.visitors.environmentVisitor({
  Super(path) {
    const {
      node,
      parentPath
    } = path;
    if (parentPath.isCallExpression({
      callee: node
    })) {
      this.push(parentPath);
    }
  }
});
const referenceVisitor = {
  "TSTypeAnnotation|TypeAnnotation"(path) {
    path.skip();
  },
  ReferencedIdentifier(path, {
    scope
  }) {
    if (scope.hasOwnBinding(path.node.name)) {
      scope.rename(path.node.name);
      path.skip();
    }
  }
};
function handleClassTDZ(path, state) {
  if (state.classBinding && state.classBinding === path.scope.getBinding(path.node.name)) {
    const classNameTDZError = state.file.addHelper("classNameTDZError");
    const throwNode = _core.types.callExpression(classNameTDZError, [_core.types.stringLiteral(path.node.name)]);
    path.replaceWith(_core.types.sequenceExpression([throwNode, path.node]));
    path.skip();
  }
}
const classFieldDefinitionEvaluationTDZVisitor = {
  ReferencedIdentifier: handleClassTDZ,
  "TSTypeAnnotation|TypeAnnotation"(path) {
    path.skip();
  }
};
function injectInitialization(path, constructor, nodes, renamer, lastReturnsThis) {
  if (!nodes.length) return;
  const isDerived = !!path.node.superClass;
  if (!constructor) {
    const newConstructor = _core.types.classMethod("constructor", _core.types.identifier("constructor"), [], _core.types.blockStatement([]));
    if (isDerived) {
      newConstructor.params = [_core.types.restElement(_core.types.identifier("args"))];
      newConstructor.body.body.push(_core.template.statement.ast`super(...args)`);
    }
    [constructor] = path.get("body").unshiftContainer("body", newConstructor);
  }
  if (renamer) {
    renamer(referenceVisitor, {
      scope: constructor.scope
    });
  }
  if (isDerived) {
    const bareSupers = [];
    constructor.traverse(findBareSupers, bareSupers);
    let isFirst = true;
    for (const bareSuper of bareSupers) {
      if (isFirst) {
        isFirst = false;
      } else {
        nodes = nodes.map(n => _core.types.cloneNode(n));
      }
      if (!bareSuper.parentPath.isExpressionStatement()) {
        const allNodes = [bareSuper.node, ...nodes.map(n => _core.types.toExpression(n))];
        if (!lastReturnsThis) allNodes.push(_core.types.thisExpression());
        bareSuper.replaceWith(_core.types.sequenceExpression(allNodes));
      } else {
        bareSuper.insertAfter(nodes);
      }
    }
  } else {
    constructor.get("body").unshiftContainer("body", nodes);
  }
}
function memoiseComputedKey(keyNode, scope, hint) {
  const isUidReference = _core.types.isIdentifier(keyNode) && scope.hasUid(keyNode.name);
  if (isUidReference) {
    return;
  }
  const isMemoiseAssignment = _core.types.isAssignmentExpression(keyNode, {
    operator: "="
  }) && _core.types.isIdentifier(keyNode.left) && scope.hasUid(keyNode.left.name);
  if (isMemoiseAssignment) {
    return _core.types.cloneNode(keyNode);
  } else {
    const ident = _core.types.identifier(hint);
    scope.push({
      id: ident,
      kind: "let"
    });
    return _core.types.assignmentExpression("=", _core.types.cloneNode(ident), keyNode);
  }
}
function extractComputedKeys(path, computedPaths, file) {
  const {
    scope
  } = path;
  const declarations = [];
  const state = {
    classBinding: path.node.id && scope.getBinding(path.node.id.name),
    file
  };
  for (const computedPath of computedPaths) {
    const computedKey = computedPath.get("key");
    if (computedKey.isReferencedIdentifier()) {
      handleClassTDZ(computedKey, state);
    } else {
      computedKey.traverse(classFieldDefinitionEvaluationTDZVisitor, state);
    }
    const computedNode = computedPath.node;
    if (!computedKey.isConstantExpression()) {
      const assignment = memoiseComputedKey(computedKey.node, scope, scope.generateUidBasedOnNode(computedKey.node));
      if (assignment) {
        declarations.push(_core.types.expressionStatement(assignment));
        computedNode.key = _core.types.cloneNode(assignment.left);
      }
    }
  }
  return declarations;
}

//# sourceMappingURL=misc.js.map
