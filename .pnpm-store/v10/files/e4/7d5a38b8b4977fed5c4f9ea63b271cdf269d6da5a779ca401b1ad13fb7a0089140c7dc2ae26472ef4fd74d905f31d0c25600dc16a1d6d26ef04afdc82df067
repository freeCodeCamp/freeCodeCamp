"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildDecoratedClass = buildDecoratedClass;
var _core = require("@babel/core");
var _helperReplaceSupers = require("@babel/helper-replace-supers");
function prop(key, value) {
  if (!value) return null;
  return _core.types.objectProperty(_core.types.identifier(key), value);
}
function method(key, body) {
  return _core.types.objectMethod("method", _core.types.identifier(key), [], _core.types.blockStatement(body));
}
function takeDecorators(node) {
  let result;
  if (node.decorators && node.decorators.length > 0) {
    result = _core.types.arrayExpression(node.decorators.map(decorator => decorator.expression));
  }
  node.decorators = undefined;
  return result;
}
function getKey(node) {
  if (node.computed) {
    return node.key;
  } else if (_core.types.isIdentifier(node.key)) {
    return _core.types.stringLiteral(node.key.name);
  } else {
    return _core.types.stringLiteral(String(node.key.value));
  }
}
function extractElementDescriptor(file, classRef, superRef, path) {
  const isMethod = path.isClassMethod();
  if (path.isPrivate()) {
    throw path.buildCodeFrameError(`Private ${isMethod ? "methods" : "fields"} in decorated classes are not supported yet.`);
  }
  if (path.node.type === "ClassAccessorProperty") {
    throw path.buildCodeFrameError(`Accessor properties are not supported in 2018-09 decorator transform, please specify { "version": "2021-12" } instead.`);
  }
  if (path.node.type === "StaticBlock") {
    throw path.buildCodeFrameError(`Static blocks are not supported in 2018-09 decorator transform, please specify { "version": "2021-12" } instead.`);
  }
  const {
    node,
    scope
  } = path;
  if (!path.isTSDeclareMethod()) {
    new _helperReplaceSupers.default({
      methodPath: path,
      objectRef: classRef,
      superRef,
      file,
      refToPreserve: classRef
    }).replace();
  }
  const properties = [prop("kind", _core.types.stringLiteral(_core.types.isClassMethod(node) ? node.kind : "field")), prop("decorators", takeDecorators(node)), prop("static", node.static && _core.types.booleanLiteral(true)), prop("key", getKey(node))].filter(Boolean);
  if (isMethod) {
    var _path$ensureFunctionN;
    (_path$ensureFunctionN = path.ensureFunctionName) != null ? _path$ensureFunctionN : path.ensureFunctionName = require("@babel/traverse").NodePath.prototype.ensureFunctionName;
    path.ensureFunctionName(false);
    properties.push(prop("value", _core.types.toExpression(path.node)));
  } else if (_core.types.isClassProperty(node) && node.value) {
    properties.push(method("value", _core.template.statements.ast`return ${node.value}`));
  } else {
    properties.push(prop("value", scope.buildUndefinedNode()));
  }
  path.remove();
  return _core.types.objectExpression(properties);
}
function addDecorateHelper(file) {
  return file.addHelper("decorate");
}
function buildDecoratedClass(ref, path, elements, file) {
  const {
    node,
    scope
  } = path;
  const initializeId = scope.generateUidIdentifier("initialize");
  const isDeclaration = node.id && path.isDeclaration();
  const isStrict = path.isInStrictMode();
  const {
    superClass
  } = node;
  node.type = "ClassDeclaration";
  if (!node.id) node.id = _core.types.cloneNode(ref);
  let superId;
  if (superClass) {
    superId = scope.generateUidIdentifierBasedOnNode(node.superClass, "super");
    node.superClass = superId;
  }
  const classDecorators = takeDecorators(node);
  const definitions = _core.types.arrayExpression(elements.filter(element => !element.node.abstract && element.node.type !== "TSIndexSignature").map(path => extractElementDescriptor(file, node.id, superId, path)));
  const wrapperCall = _core.template.expression.ast`
    ${addDecorateHelper(file)}(
      ${classDecorators || _core.types.nullLiteral()},
      function (${initializeId}, ${superClass ? _core.types.cloneNode(superId) : null}) {
        ${node}
        return { F: ${_core.types.cloneNode(node.id)}, d: ${definitions} };
      },
      ${superClass}
    )
  `;
  if (!isStrict) {
    wrapperCall.arguments[1].body.directives.push(_core.types.directive(_core.types.directiveLiteral("use strict")));
  }
  let replacement = wrapperCall;
  let classPathDesc = "arguments.1.body.body.0";
  if (isDeclaration) {
    replacement = _core.template.statement.ast`let ${ref} = ${wrapperCall}`;
    classPathDesc = "declarations.0.init." + classPathDesc;
  }
  return {
    instanceNodes: [_core.template.statement.ast`
        ${_core.types.cloneNode(initializeId)}(this)
      `],
    wrapClass(path) {
      path.replaceWith(replacement);
      return path.get(classPathDesc);
    }
  };
}

//# sourceMappingURL=decorators-2018-09.js.map
