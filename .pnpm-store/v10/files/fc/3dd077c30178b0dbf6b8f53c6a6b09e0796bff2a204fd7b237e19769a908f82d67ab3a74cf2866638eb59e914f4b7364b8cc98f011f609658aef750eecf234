"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transpileNamespace;
var _core = require("@babel/core");
var _globalTypes = require("./global-types.js");
function transpileNamespace(path, allowNamespaces) {
  if (path.node.declare || path.node.id.type === "StringLiteral") {
    path.remove();
    return;
  }
  if (!allowNamespaces) {
    throw path.get("id").buildCodeFrameError("Namespace not marked type-only declare." + " Non-declarative namespaces are only supported experimentally in Babel." + " To enable and review caveats see:" + " https://babeljs.io/docs/en/babel-plugin-transform-typescript");
  }
  const name = path.node.id.name;
  const value = handleNested(path, _core.types.cloneNode(path.node, true));
  if (value === null) {
    const program = path.findParent(p => p.isProgram());
    (0, _globalTypes.registerGlobalType)(program.scope, name);
    path.remove();
  } else if (path.scope.hasOwnBinding(name)) {
    path.replaceWith(value);
  } else {
    path.scope.registerDeclaration(path.replaceWithMultiple([getDeclaration(name), value])[0]);
  }
}
function getDeclaration(name) {
  return _core.types.variableDeclaration("let", [_core.types.variableDeclarator(_core.types.identifier(name))]);
}
function getMemberExpression(name, itemName) {
  return _core.types.memberExpression(_core.types.identifier(name), _core.types.identifier(itemName));
}
function handleVariableDeclaration(node, name, hub) {
  if (node.kind !== "const") {
    throw hub.file.buildCodeFrameError(node, "Namespaces exporting non-const are not supported by Babel." + " Change to const or see:" + " https://babeljs.io/docs/en/babel-plugin-transform-typescript");
  }
  const {
    declarations
  } = node;
  if (declarations.every(declarator => _core.types.isIdentifier(declarator.id))) {
    for (const declarator of declarations) {
      declarator.init = _core.types.assignmentExpression("=", getMemberExpression(name, declarator.id.name), declarator.init);
    }
    return [node];
  }
  const bindingIdentifiers = _core.types.getBindingIdentifiers(node);
  const assignments = [];
  for (const idName in bindingIdentifiers) {
    assignments.push(_core.types.assignmentExpression("=", getMemberExpression(name, idName), _core.types.cloneNode(bindingIdentifiers[idName])));
  }
  return [node, _core.types.expressionStatement(_core.types.sequenceExpression(assignments))];
}
function buildNestedAmbientModuleError(path, node) {
  return path.hub.buildError(node, "Ambient modules cannot be nested in other modules or namespaces.", Error);
}
function handleNested(path, node, parentExport) {
  const names = new Set();
  const realName = node.id;
  _core.types.assertIdentifier(realName);
  const name = path.scope.generateUid(realName.name);
  const namespaceTopLevel = _core.types.isTSModuleBlock(node.body) ? node.body.body : [_core.types.exportNamedDeclaration(node.body)];
  let isEmpty = true;
  for (let i = 0; i < namespaceTopLevel.length; i++) {
    const subNode = namespaceTopLevel[i];
    switch (subNode.type) {
      case "TSModuleDeclaration":
        {
          if (!_core.types.isIdentifier(subNode.id)) {
            throw buildNestedAmbientModuleError(path, subNode);
          }
          const transformed = handleNested(path, subNode);
          if (transformed !== null) {
            isEmpty = false;
            const moduleName = subNode.id.name;
            if (names.has(moduleName)) {
              namespaceTopLevel[i] = transformed;
            } else {
              names.add(moduleName);
              namespaceTopLevel.splice(i++, 1, getDeclaration(moduleName), transformed);
            }
          }
          continue;
        }
      case "TSEnumDeclaration":
      case "FunctionDeclaration":
      case "ClassDeclaration":
        isEmpty = false;
        names.add(subNode.id.name);
        continue;
      case "VariableDeclaration":
        {
          isEmpty = false;
          for (const name in _core.types.getBindingIdentifiers(subNode)) {
            names.add(name);
          }
          continue;
        }
      default:
        isEmpty && (isEmpty = _core.types.isTypeScript(subNode));
        continue;
      case "ExportNamedDeclaration":
    }
    if ("declare" in subNode.declaration && subNode.declaration.declare) {
      continue;
    }
    switch (subNode.declaration.type) {
      case "TSEnumDeclaration":
      case "FunctionDeclaration":
      case "ClassDeclaration":
        {
          isEmpty = false;
          const itemName = subNode.declaration.id.name;
          names.add(itemName);
          namespaceTopLevel.splice(i++, 1, subNode.declaration, _core.types.expressionStatement(_core.types.assignmentExpression("=", getMemberExpression(name, itemName), _core.types.identifier(itemName))));
          break;
        }
      case "VariableDeclaration":
        {
          isEmpty = false;
          const nodes = handleVariableDeclaration(subNode.declaration, name, path.hub);
          namespaceTopLevel.splice(i, nodes.length, ...nodes);
          i += nodes.length - 1;
          break;
        }
      case "TSModuleDeclaration":
        {
          if (!_core.types.isIdentifier(subNode.declaration.id)) {
            throw buildNestedAmbientModuleError(path, subNode.declaration);
          }
          const transformed = handleNested(path, subNode.declaration, _core.types.identifier(name));
          if (transformed !== null) {
            isEmpty = false;
            const moduleName = subNode.declaration.id.name;
            if (names.has(moduleName)) {
              namespaceTopLevel[i] = transformed;
            } else {
              names.add(moduleName);
              namespaceTopLevel.splice(i++, 1, getDeclaration(moduleName), transformed);
            }
          } else {
            namespaceTopLevel.splice(i, 1);
            i--;
          }
        }
    }
  }
  if (isEmpty) return null;
  let fallthroughValue = _core.types.objectExpression([]);
  if (parentExport) {
    const memberExpr = _core.types.memberExpression(parentExport, realName);
    fallthroughValue = _core.template.expression.ast`
      ${_core.types.cloneNode(memberExpr)} ||
        (${_core.types.cloneNode(memberExpr)} = ${fallthroughValue})
    `;
  }
  return _core.template.statement.ast`
    (function (${_core.types.identifier(name)}) {
      ${namespaceTopLevel}
    })(${realName} || (${_core.types.cloneNode(realName)} = ${fallthroughValue}));
  `;
}

//# sourceMappingURL=namespace.js.map
