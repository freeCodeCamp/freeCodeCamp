"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _core = require("@babel/core");
const buildClassDecorator = _core.template.statement(`
  DECORATOR(CLASS_REF = INNER) || CLASS_REF;
`);
const buildClassPrototype = (0, _core.template)(`
  CLASS_REF.prototype;
`);
const buildGetDescriptor = (0, _core.template)(`
    Object.getOwnPropertyDescriptor(TARGET, PROPERTY);
`);
const buildGetObjectInitializer = (0, _core.template)(`
    (TEMP = Object.getOwnPropertyDescriptor(TARGET, PROPERTY), (TEMP = TEMP ? TEMP.value : undefined), {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function(){
            return TEMP;
        }
    })
`);
const WARNING_CALLS = new WeakSet();
function applyEnsureOrdering(path) {
  const decorators = (path.isClass() ? [path, ...path.get("body.body")] : path.get("properties")).reduce((acc, prop) => acc.concat(prop.node.decorators || []), []);
  const identDecorators = decorators.filter(decorator => !_core.types.isIdentifier(decorator.expression));
  if (identDecorators.length === 0) return;
  return _core.types.sequenceExpression(identDecorators.map(decorator => {
    const expression = decorator.expression;
    const id = decorator.expression = path.scope.generateDeclaredUidIdentifier("dec");
    return _core.types.assignmentExpression("=", id, expression);
  }).concat([path.node]));
}
function applyClassDecorators(classPath) {
  if (!hasClassDecorators(classPath.node)) return;
  const decorators = classPath.node.decorators || [];
  classPath.node.decorators = null;
  const name = classPath.scope.generateDeclaredUidIdentifier("class");
  return decorators.map(dec => dec.expression).reverse().reduce(function (acc, decorator) {
    return buildClassDecorator({
      CLASS_REF: _core.types.cloneNode(name),
      DECORATOR: _core.types.cloneNode(decorator),
      INNER: acc
    }).expression;
  }, classPath.node);
}
function hasClassDecorators(classNode) {
  var _classNode$decorators;
  return !!((_classNode$decorators = classNode.decorators) != null && _classNode$decorators.length);
}
function applyMethodDecorators(path, state) {
  if (!hasMethodDecorators(path.node.body.body)) return;
  return applyTargetDecorators(path, state, path.node.body.body);
}
function hasMethodDecorators(body) {
  return body.some(node => {
    var _node$decorators;
    return ((_node$decorators = node.decorators) == null ? void 0 : _node$decorators.length
    );
  });
}
function applyObjectDecorators(path, state) {
  if (!hasMethodDecorators(path.node.properties)) return;
  return applyTargetDecorators(path, state, path.node.properties.filter(prop => prop.type !== "SpreadElement"));
}
function applyTargetDecorators(path, state, decoratedProps) {
  const name = path.scope.generateDeclaredUidIdentifier(path.isClass() ? "class" : "obj");
  const exprs = decoratedProps.reduce(function (acc, node) {
    let decorators = [];
    if (node.decorators != null) {
      decorators = node.decorators;
      node.decorators = null;
    }
    if (decorators.length === 0) return acc;
    if (node.computed) {
      throw path.buildCodeFrameError("Computed method/property decorators are not yet supported.");
    }
    const property = _core.types.isLiteral(node.key) ? node.key : _core.types.stringLiteral(node.key.name);
    const target = path.isClass() && !node.static ? buildClassPrototype({
      CLASS_REF: name
    }).expression : name;
    if (_core.types.isClassProperty(node, {
      static: false
    })) {
      const descriptor = path.scope.generateDeclaredUidIdentifier("descriptor");
      const initializer = node.value ? _core.types.functionExpression(null, [], _core.types.blockStatement([_core.types.returnStatement(node.value)])) : _core.types.nullLiteral();
      node.value = _core.types.callExpression(state.addHelper("initializerWarningHelper"), [descriptor, _core.types.thisExpression()]);
      WARNING_CALLS.add(node.value);
      acc.push(_core.types.assignmentExpression("=", _core.types.cloneNode(descriptor), _core.types.callExpression(state.addHelper("applyDecoratedDescriptor"), [_core.types.cloneNode(target), _core.types.cloneNode(property), _core.types.arrayExpression(decorators.map(dec => _core.types.cloneNode(dec.expression))), _core.types.objectExpression([_core.types.objectProperty(_core.types.identifier("configurable"), _core.types.booleanLiteral(true)), _core.types.objectProperty(_core.types.identifier("enumerable"), _core.types.booleanLiteral(true)), _core.types.objectProperty(_core.types.identifier("writable"), _core.types.booleanLiteral(true)), _core.types.objectProperty(_core.types.identifier("initializer"), initializer)])])));
    } else {
      acc.push(_core.types.callExpression(state.addHelper("applyDecoratedDescriptor"), [_core.types.cloneNode(target), _core.types.cloneNode(property), _core.types.arrayExpression(decorators.map(dec => _core.types.cloneNode(dec.expression))), _core.types.isObjectProperty(node) || _core.types.isClassProperty(node, {
        static: true
      }) ? buildGetObjectInitializer({
        TEMP: path.scope.generateDeclaredUidIdentifier("init"),
        TARGET: _core.types.cloneNode(target),
        PROPERTY: _core.types.cloneNode(property)
      }).expression : buildGetDescriptor({
        TARGET: _core.types.cloneNode(target),
        PROPERTY: _core.types.cloneNode(property)
      }).expression, _core.types.cloneNode(target)]));
    }
    return acc;
  }, []);
  return _core.types.sequenceExpression([_core.types.assignmentExpression("=", _core.types.cloneNode(name), path.node), _core.types.sequenceExpression(exprs), _core.types.cloneNode(name)]);
}
function decoratedClassToExpression({
  node,
  scope
}) {
  if (!hasClassDecorators(node) && !hasMethodDecorators(node.body.body)) {
    return;
  }
  const ref = node.id ? _core.types.cloneNode(node.id) : scope.generateUidIdentifier("class");
  return _core.types.variableDeclaration("let", [_core.types.variableDeclarator(ref, _core.types.toExpression(node))]);
}
const visitor = {
  ExportDefaultDeclaration(path) {
    const decl = path.get("declaration");
    if (!decl.isClassDeclaration()) return;
    const replacement = decoratedClassToExpression(decl);
    if (replacement) {
      const [varDeclPath] = path.replaceWithMultiple([replacement, _core.types.exportNamedDeclaration(null, [_core.types.exportSpecifier(_core.types.cloneNode(replacement.declarations[0].id), _core.types.identifier("default"))])]);
      if (!decl.node.id) {
        path.scope.registerDeclaration(varDeclPath);
      }
    }
  },
  ClassDeclaration(path) {
    const replacement = decoratedClassToExpression(path);
    if (replacement) {
      const [newPath] = path.replaceWith(replacement);
      const decl = newPath.get("declarations.0");
      const id = decl.node.id;
      const binding = path.scope.getOwnBinding(id.name);
      binding.identifier = id;
      binding.path = decl;
    }
  },
  ClassExpression(path, state) {
    const decoratedClass = applyEnsureOrdering(path) || applyClassDecorators(path) || applyMethodDecorators(path, state);
    if (decoratedClass) path.replaceWith(decoratedClass);
  },
  ObjectExpression(path, state) {
    const decoratedObject = applyEnsureOrdering(path) || applyObjectDecorators(path, state);
    if (decoratedObject) path.replaceWith(decoratedObject);
  },
  AssignmentExpression(path, state) {
    if (!WARNING_CALLS.has(path.node.right)) return;
    path.replaceWith(_core.types.callExpression(state.addHelper("initializerDefineProperty"), [_core.types.cloneNode(path.get("left.object").node), _core.types.stringLiteral(path.get("left.property").node.name || path.get("left.property").node.value), _core.types.cloneNode(path.get("right.arguments")[0].node), _core.types.cloneNode(path.get("right.arguments")[1].node)]));
  },
  CallExpression(path, state) {
    if (path.node.arguments.length !== 3) return;
    if (!WARNING_CALLS.has(path.node.arguments[2])) return;
    if (path.node.callee.name !== state.addHelper("defineProperty").name) {
      return;
    }
    path.replaceWith(_core.types.callExpression(state.addHelper("initializerDefineProperty"), [_core.types.cloneNode(path.get("arguments")[0].node), _core.types.cloneNode(path.get("arguments")[1].node), _core.types.cloneNode(path.get("arguments.2.arguments")[0].node), _core.types.cloneNode(path.get("arguments.2.arguments")[1].node)]));
  }
};
var _default = exports.default = visitor;

//# sourceMappingURL=transformer-legacy.js.map
