"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildNamedEvaluationVisitor = buildNamedEvaluationVisitor;
exports.default = _default;
exports.hasDecorators = hasDecorators;
exports.hasOwnDecorators = hasOwnDecorators;
var _core = require("@babel/core");
var _helperReplaceSupers = require("@babel/helper-replace-supers");
var _helperSkipTransparentExpressionWrappers = require("@babel/helper-skip-transparent-expression-wrappers");
var _fields = require("./fields.js");
var _misc = require("./misc.js");
function hasOwnDecorators(node) {
  var _node$decorators;
  return !!((_node$decorators = node.decorators) != null && _node$decorators.length);
}
function hasDecorators(node) {
  return hasOwnDecorators(node) || node.body.body.some(hasOwnDecorators);
}
function incrementId(id, idx = id.length - 1) {
  if (idx === -1) {
    id.unshift(65);
    return;
  }
  const current = id[idx];
  if (current === 90) {
    id[idx] = 97;
  } else if (current === 122) {
    id[idx] = 65;
    incrementId(id, idx - 1);
  } else {
    id[idx] = current + 1;
  }
}
function createPrivateUidGeneratorForClass(classPath) {
  const currentPrivateId = [];
  const privateNames = new Set();
  _core.types.traverseFast(classPath.node, node => {
    if (_core.types.isPrivateName(node)) {
      privateNames.add(node.id.name);
    }
  });
  return () => {
    let reifiedId;
    do {
      incrementId(currentPrivateId);
      reifiedId = String.fromCharCode(...currentPrivateId);
    } while (privateNames.has(reifiedId));
    return _core.types.privateName(_core.types.identifier(reifiedId));
  };
}
function createLazyPrivateUidGeneratorForClass(classPath) {
  let generator;
  return () => {
    if (!generator) {
      generator = createPrivateUidGeneratorForClass(classPath);
    }
    return generator();
  };
}
function replaceClassWithVar(path, className) {
  const id = path.node.id;
  const scope = path.scope;
  if (path.type === "ClassDeclaration") {
    const className = id.name;
    const varId = scope.generateUidIdentifierBasedOnNode(id);
    const classId = _core.types.identifier(className);
    scope.rename(className, varId.name);
    path.get("id").replaceWith(classId);
    return {
      id: _core.types.cloneNode(varId),
      path
    };
  } else {
    let varId;
    if (id) {
      className = id.name;
      varId = generateLetUidIdentifier(scope.parent, className);
      scope.rename(className, varId.name);
    } else {
      varId = generateLetUidIdentifier(scope.parent, typeof className === "string" ? className : "decorated_class");
    }
    const newClassExpr = _core.types.classExpression(typeof className === "string" ? _core.types.identifier(className) : null, path.node.superClass, path.node.body);
    const [newPath] = path.replaceWith(_core.types.sequenceExpression([newClassExpr, varId]));
    return {
      id: _core.types.cloneNode(varId),
      path: newPath.get("expressions.0")
    };
  }
}
function generateClassProperty(key, value, isStatic) {
  if (key.type === "PrivateName") {
    return _core.types.classPrivateProperty(key, value, undefined, isStatic);
  } else {
    return _core.types.classProperty(key, value, undefined, undefined, isStatic);
  }
}
function assignIdForAnonymousClass(path, className) {
  if (!path.node.id) {
    path.node.id = typeof className === "string" ? _core.types.identifier(className) : path.scope.generateUidIdentifier("Class");
  }
}
function addProxyAccessorsFor(className, element, getterKey, setterKey, targetKey, isComputed, isStatic, version) {
  const thisArg = (version === "2023-11" || version === "2023-05") && isStatic ? className : _core.types.thisExpression();
  const getterBody = _core.types.blockStatement([_core.types.returnStatement(_core.types.memberExpression(_core.types.cloneNode(thisArg), _core.types.cloneNode(targetKey)))]);
  const setterBody = _core.types.blockStatement([_core.types.expressionStatement(_core.types.assignmentExpression("=", _core.types.memberExpression(_core.types.cloneNode(thisArg), _core.types.cloneNode(targetKey)), _core.types.identifier("v")))]);
  let getter, setter;
  if (getterKey.type === "PrivateName") {
    getter = _core.types.classPrivateMethod("get", getterKey, [], getterBody, isStatic);
    setter = _core.types.classPrivateMethod("set", setterKey, [_core.types.identifier("v")], setterBody, isStatic);
  } else {
    getter = _core.types.classMethod("get", getterKey, [], getterBody, isComputed, isStatic);
    setter = _core.types.classMethod("set", setterKey, [_core.types.identifier("v")], setterBody, isComputed, isStatic);
  }
  element.insertAfter(setter);
  element.insertAfter(getter);
}
function extractProxyAccessorsFor(targetKey, version) {
  if (version !== "2023-11" && version !== "2023-05" && version !== "2023-01") {
    return [_core.template.expression.ast`
        function () {
          return this.${_core.types.cloneNode(targetKey)};
        }
      `, _core.template.expression.ast`
        function (value) {
          this.${_core.types.cloneNode(targetKey)} = value;
        }
      `];
  }
  return [_core.template.expression.ast`
      o => o.${_core.types.cloneNode(targetKey)}
    `, _core.template.expression.ast`
      (o, v) => o.${_core.types.cloneNode(targetKey)} = v
    `];
}
function getComputedKeyLastElement(path) {
  path = (0, _helperSkipTransparentExpressionWrappers.skipTransparentExprWrappers)(path);
  if (path.isSequenceExpression()) {
    const expressions = path.get("expressions");
    return getComputedKeyLastElement(expressions[expressions.length - 1]);
  }
  return path;
}
function getComputedKeyMemoiser(path) {
  const element = getComputedKeyLastElement(path);
  if (element.isConstantExpression()) {
    return _core.types.cloneNode(path.node);
  } else if (element.isIdentifier() && path.scope.hasUid(element.node.name)) {
    return _core.types.cloneNode(path.node);
  } else if (element.isAssignmentExpression() && element.get("left").isIdentifier()) {
    return _core.types.cloneNode(element.node.left);
  } else {
    throw new Error(`Internal Error: the computed key ${path.toString()} has not yet been memoised.`);
  }
}
function prependExpressionsToComputedKey(expressions, fieldPath) {
  const key = fieldPath.get("key");
  if (key.isSequenceExpression()) {
    expressions.push(...key.node.expressions);
  } else {
    expressions.push(key.node);
  }
  key.replaceWith(maybeSequenceExpression(expressions));
}
function appendExpressionsToComputedKey(expressions, fieldPath) {
  const key = fieldPath.get("key");
  const completion = getComputedKeyLastElement(key);
  if (completion.isConstantExpression()) {
    prependExpressionsToComputedKey(expressions, fieldPath);
  } else {
    const scopeParent = key.scope.parent;
    const maybeAssignment = (0, _misc.memoiseComputedKey)(completion.node, scopeParent, scopeParent.generateUid("computedKey"));
    if (!maybeAssignment) {
      prependExpressionsToComputedKey(expressions, fieldPath);
    } else {
      const expressionSequence = [...expressions, _core.types.cloneNode(maybeAssignment.left)];
      const completionParent = completion.parentPath;
      if (completionParent.isSequenceExpression()) {
        completionParent.pushContainer("expressions", expressionSequence);
      } else {
        completion.replaceWith(maybeSequenceExpression([_core.types.cloneNode(maybeAssignment), ...expressionSequence]));
      }
    }
  }
}
function prependExpressionsToFieldInitializer(expressions, fieldPath) {
  const initializer = fieldPath.get("value");
  if (initializer.node) {
    expressions.push(initializer.node);
  } else if (expressions.length > 0) {
    expressions[expressions.length - 1] = _core.types.unaryExpression("void", expressions[expressions.length - 1]);
  }
  initializer.replaceWith(maybeSequenceExpression(expressions));
}
function prependExpressionsToStaticBlock(expressions, blockPath) {
  blockPath.unshiftContainer("body", _core.types.expressionStatement(maybeSequenceExpression(expressions)));
}
function prependExpressionsToConstructor(expressions, constructorPath) {
  constructorPath.node.body.body.unshift(_core.types.expressionStatement(maybeSequenceExpression(expressions)));
}
function isProtoInitCallExpression(expression, protoInitCall) {
  return _core.types.isCallExpression(expression) && _core.types.isIdentifier(expression.callee, {
    name: protoInitCall.name
  });
}
function optimizeSuperCallAndExpressions(expressions, protoInitLocal) {
  if (protoInitLocal) {
    if (expressions.length >= 2 && isProtoInitCallExpression(expressions[1], protoInitLocal)) {
      const mergedSuperCall = _core.types.callExpression(_core.types.cloneNode(protoInitLocal), [expressions[0]]);
      expressions.splice(0, 2, mergedSuperCall);
    }
    if (expressions.length >= 2 && _core.types.isThisExpression(expressions[expressions.length - 1]) && isProtoInitCallExpression(expressions[expressions.length - 2], protoInitLocal)) {
      expressions.splice(expressions.length - 1, 1);
    }
  }
  return maybeSequenceExpression(expressions);
}
function insertExpressionsAfterSuperCallAndOptimize(expressions, constructorPath, protoInitLocal) {
  constructorPath.traverse({
    CallExpression: {
      exit(path) {
        if (!path.get("callee").isSuper()) return;
        const newNodes = [path.node, ...expressions.map(expr => _core.types.cloneNode(expr))];
        if (path.isCompletionRecord()) {
          newNodes.push(_core.types.thisExpression());
        }
        path.replaceWith(optimizeSuperCallAndExpressions(newNodes, protoInitLocal));
        path.skip();
      }
    },
    ClassMethod(path) {
      if (path.node.kind === "constructor") {
        path.skip();
      }
    }
  });
}
function createConstructorFromExpressions(expressions, isDerivedClass) {
  const body = [_core.types.expressionStatement(maybeSequenceExpression(expressions))];
  if (isDerivedClass) {
    body.unshift(_core.types.expressionStatement(_core.types.callExpression(_core.types.super(), [_core.types.spreadElement(_core.types.identifier("args"))])));
  }
  return _core.types.classMethod("constructor", _core.types.identifier("constructor"), isDerivedClass ? [_core.types.restElement(_core.types.identifier("args"))] : [], _core.types.blockStatement(body));
}
function createStaticBlockFromExpressions(expressions) {
  return _core.types.staticBlock([_core.types.expressionStatement(maybeSequenceExpression(expressions))]);
}
const FIELD = 0;
const ACCESSOR = 1;
const METHOD = 2;
const GETTER = 3;
const SETTER = 4;
const STATIC_OLD_VERSION = 5;
const STATIC = 8;
const DECORATORS_HAVE_THIS = 16;
function getElementKind(element) {
  switch (element.node.type) {
    case "ClassProperty":
    case "ClassPrivateProperty":
      return FIELD;
    case "ClassAccessorProperty":
      return ACCESSOR;
    case "ClassMethod":
    case "ClassPrivateMethod":
      if (element.node.kind === "get") {
        return GETTER;
      } else if (element.node.kind === "set") {
        return SETTER;
      } else {
        return METHOD;
      }
  }
}
function toSortedDecoratorInfo(info) {
  return [...info.filter(el => el.isStatic && el.kind >= ACCESSOR && el.kind <= SETTER), ...info.filter(el => !el.isStatic && el.kind >= ACCESSOR && el.kind <= SETTER), ...info.filter(el => el.isStatic && el.kind === FIELD), ...info.filter(el => !el.isStatic && el.kind === FIELD)];
}
function generateDecorationList(decorators, decoratorsThis, version) {
  const decsCount = decorators.length;
  const haveOneThis = decoratorsThis.some(Boolean);
  const decs = [];
  for (let i = 0; i < decsCount; i++) {
    if ((version === "2023-11" || version === "2023-05") && haveOneThis) {
      decs.push(decoratorsThis[i] || _core.types.unaryExpression("void", _core.types.numericLiteral(0)));
    }
    decs.push(decorators[i].expression);
  }
  return {
    haveThis: haveOneThis,
    decs
  };
}
function generateDecorationExprs(decorationInfo, version) {
  return _core.types.arrayExpression(decorationInfo.map(el => {
    let flag = el.kind;
    if (el.isStatic) {
      flag += version === "2023-11" || version === "2023-05" ? STATIC : STATIC_OLD_VERSION;
    }
    if (el.decoratorsHaveThis) flag += DECORATORS_HAVE_THIS;
    return _core.types.arrayExpression([el.decoratorsArray, _core.types.numericLiteral(flag), el.name, ...(el.privateMethods || [])]);
  }));
}
function extractElementLocalAssignments(decorationInfo) {
  const localIds = [];
  for (const el of decorationInfo) {
    const {
      locals
    } = el;
    if (Array.isArray(locals)) {
      localIds.push(...locals);
    } else if (locals !== undefined) {
      localIds.push(locals);
    }
  }
  return localIds;
}
function addCallAccessorsFor(version, element, key, getId, setId, isStatic) {
  element.insertAfter(_core.types.classPrivateMethod("get", _core.types.cloneNode(key), [], _core.types.blockStatement([_core.types.returnStatement(_core.types.callExpression(_core.types.cloneNode(getId), version === "2023-11" && isStatic ? [] : [_core.types.thisExpression()]))]), isStatic));
  element.insertAfter(_core.types.classPrivateMethod("set", _core.types.cloneNode(key), [_core.types.identifier("v")], _core.types.blockStatement([_core.types.expressionStatement(_core.types.callExpression(_core.types.cloneNode(setId), version === "2023-11" && isStatic ? [_core.types.identifier("v")] : [_core.types.thisExpression(), _core.types.identifier("v")]))]), isStatic));
}
function movePrivateAccessor(element, key, methodLocalVar, isStatic) {
  let params;
  let block;
  if (element.node.kind === "set") {
    params = [_core.types.identifier("v")];
    block = [_core.types.expressionStatement(_core.types.callExpression(methodLocalVar, [_core.types.thisExpression(), _core.types.identifier("v")]))];
  } else {
    params = [];
    block = [_core.types.returnStatement(_core.types.callExpression(methodLocalVar, [_core.types.thisExpression()]))];
  }
  element.replaceWith(_core.types.classPrivateMethod(element.node.kind, _core.types.cloneNode(key), params, _core.types.blockStatement(block), isStatic));
}
function isClassDecoratableElementPath(path) {
  const {
    type
  } = path;
  return type !== "TSDeclareMethod" && type !== "TSIndexSignature" && type !== "StaticBlock";
}
function staticBlockToIIFE(block) {
  return _core.types.callExpression(_core.types.arrowFunctionExpression([], _core.types.blockStatement(block.body)), []);
}
function staticBlockToFunctionClosure(block) {
  return _core.types.functionExpression(null, [], _core.types.blockStatement(block.body));
}
function fieldInitializerToClosure(value) {
  return _core.types.functionExpression(null, [], _core.types.blockStatement([_core.types.returnStatement(value)]));
}
function maybeSequenceExpression(exprs) {
  if (exprs.length === 0) return _core.types.unaryExpression("void", _core.types.numericLiteral(0));
  if (exprs.length === 1) return exprs[0];
  return _core.types.sequenceExpression(exprs);
}
function createFunctionExpressionFromPrivateMethod(node) {
  const {
    params,
    body,
    generator: isGenerator,
    async: isAsync
  } = node;
  return _core.types.functionExpression(undefined, params, body, isGenerator, isAsync);
}
function createSetFunctionNameCall(state, className) {
  return _core.types.callExpression(state.addHelper("setFunctionName"), [_core.types.thisExpression(), className]);
}
function createToPropertyKeyCall(state, propertyKey) {
  return _core.types.callExpression(state.addHelper("toPropertyKey"), [propertyKey]);
}
function createPrivateBrandCheckClosure(brandName) {
  return _core.types.arrowFunctionExpression([_core.types.identifier("_")], _core.types.binaryExpression("in", _core.types.cloneNode(brandName), _core.types.identifier("_")));
}
function usesPrivateField(expression) {
  try {
    _core.types.traverseFast(expression, node => {
      if (_core.types.isPrivateName(node)) {
        throw null;
      }
    });
    return false;
  } catch (_unused) {
    return true;
  }
}
function convertToComputedKey(path) {
  const {
    node
  } = path;
  node.computed = true;
  if (_core.types.isIdentifier(node.key)) {
    node.key = _core.types.stringLiteral(node.key.name);
  }
}
function hasInstancePrivateAccess(path, privateNames) {
  let containsInstancePrivateAccess = false;
  if (privateNames.length > 0) {
    const privateNameVisitor = (0, _fields.privateNameVisitorFactory)({
      PrivateName(path, state) {
        if (state.privateNamesMap.has(path.node.id.name)) {
          containsInstancePrivateAccess = true;
          path.stop();
        }
      }
    });
    const privateNamesMap = new Map();
    for (const name of privateNames) {
      privateNamesMap.set(name, null);
    }
    path.traverse(privateNameVisitor, {
      privateNamesMap: privateNamesMap
    });
  }
  return containsInstancePrivateAccess;
}
function checkPrivateMethodUpdateError(path, decoratedPrivateMethods) {
  const privateNameVisitor = (0, _fields.privateNameVisitorFactory)({
    PrivateName(path, state) {
      if (!state.privateNamesMap.has(path.node.id.name)) return;
      const parentPath = path.parentPath;
      const parentParentPath = parentPath.parentPath;
      if (parentParentPath.node.type === "AssignmentExpression" && parentParentPath.node.left === parentPath.node || parentParentPath.node.type === "UpdateExpression" || parentParentPath.node.type === "RestElement" || parentParentPath.node.type === "ArrayPattern" || parentParentPath.node.type === "ObjectProperty" && parentParentPath.node.value === parentPath.node && parentParentPath.parentPath.type === "ObjectPattern" || parentParentPath.node.type === "ForOfStatement" && parentParentPath.node.left === parentPath.node) {
        throw path.buildCodeFrameError(`Decorated private methods are read-only, but "#${path.node.id.name}" is updated via this expression.`);
      }
    }
  });
  const privateNamesMap = new Map();
  for (const name of decoratedPrivateMethods) {
    privateNamesMap.set(name, null);
  }
  path.traverse(privateNameVisitor, {
    privateNamesMap: privateNamesMap
  });
}
function transformClass(path, state, constantSuper, ignoreFunctionLength, className, propertyVisitor, version) {
  var _path$node$id;
  const body = path.get("body.body");
  const classDecorators = path.node.decorators;
  let hasElementDecorators = false;
  let hasComputedKeysSideEffects = false;
  let elemDecsUseFnContext = false;
  const generateClassPrivateUid = createLazyPrivateUidGeneratorForClass(path);
  const classAssignments = [];
  const scopeParent = path.scope.parent;
  const memoiseExpression = (expression, hint, assignments) => {
    const localEvaluatedId = generateLetUidIdentifier(scopeParent, hint);
    assignments.push(_core.types.assignmentExpression("=", localEvaluatedId, expression));
    return _core.types.cloneNode(localEvaluatedId);
  };
  let protoInitLocal;
  let staticInitLocal;
  const classIdName = (_path$node$id = path.node.id) == null ? void 0 : _path$node$id.name;
  const setClassName = typeof className === "object" ? className : undefined;
  const usesFunctionContextOrYieldAwait = decorator => {
    try {
      _core.types.traverseFast(decorator, node => {
        if (_core.types.isThisExpression(node) || _core.types.isSuper(node) || _core.types.isYieldExpression(node) || _core.types.isAwaitExpression(node) || _core.types.isIdentifier(node, {
          name: "arguments"
        }) || classIdName && _core.types.isIdentifier(node, {
          name: classIdName
        }) || _core.types.isMetaProperty(node) && node.meta.name !== "import") {
          throw null;
        }
      });
      return false;
    } catch (_unused2) {
      return true;
    }
  };
  const instancePrivateNames = [];
  for (const element of body) {
    if (!isClassDecoratableElementPath(element)) {
      continue;
    }
    const elementNode = element.node;
    if (!elementNode.static && _core.types.isPrivateName(elementNode.key)) {
      instancePrivateNames.push(elementNode.key.id.name);
    }
    if (isDecorated(elementNode)) {
      switch (elementNode.type) {
        case "ClassProperty":
          propertyVisitor.ClassProperty(element, state);
          break;
        case "ClassPrivateProperty":
          propertyVisitor.ClassPrivateProperty(element, state);
          break;
        case "ClassAccessorProperty":
          propertyVisitor.ClassAccessorProperty(element, state);
          if (version === "2023-11") {
            break;
          }
        default:
          if (elementNode.static) {
            staticInitLocal != null ? staticInitLocal : staticInitLocal = generateLetUidIdentifier(scopeParent, "initStatic");
          } else {
            protoInitLocal != null ? protoInitLocal : protoInitLocal = generateLetUidIdentifier(scopeParent, "initProto");
          }
          break;
      }
      hasElementDecorators = true;
      elemDecsUseFnContext || (elemDecsUseFnContext = elementNode.decorators.some(usesFunctionContextOrYieldAwait));
    } else if (elementNode.type === "ClassAccessorProperty") {
      propertyVisitor.ClassAccessorProperty(element, state);
      const {
        key,
        value,
        static: isStatic,
        computed
      } = elementNode;
      const newId = generateClassPrivateUid();
      const newField = generateClassProperty(newId, value, isStatic);
      const keyPath = element.get("key");
      const [newPath] = element.replaceWith(newField);
      let getterKey, setterKey;
      if (computed && !keyPath.isConstantExpression()) {
        getterKey = (0, _misc.memoiseComputedKey)(createToPropertyKeyCall(state, key), scopeParent, scopeParent.generateUid("computedKey"));
        setterKey = _core.types.cloneNode(getterKey.left);
      } else {
        getterKey = _core.types.cloneNode(key);
        setterKey = _core.types.cloneNode(key);
      }
      assignIdForAnonymousClass(path, className);
      addProxyAccessorsFor(path.node.id, newPath, getterKey, setterKey, newId, computed, isStatic, version);
    }
    if ("computed" in element.node && element.node.computed) {
      hasComputedKeysSideEffects || (hasComputedKeysSideEffects = !scopeParent.isStatic(element.node.key));
    }
  }
  if (!classDecorators && !hasElementDecorators) {
    if (!path.node.id && typeof className === "string") {
      path.node.id = _core.types.identifier(className);
    }
    if (setClassName) {
      path.node.body.body.unshift(createStaticBlockFromExpressions([createSetFunctionNameCall(state, setClassName)]));
    }
    return;
  }
  const elementDecoratorInfo = [];
  let constructorPath;
  const decoratedPrivateMethods = new Set();
  let classInitLocal, classIdLocal;
  let decoratorReceiverId = null;
  function handleDecorators(decorators) {
    let hasSideEffects = false;
    let usesFnContext = false;
    const decoratorsThis = [];
    for (const decorator of decorators) {
      const {
        expression
      } = decorator;
      let object;
      if ((version === "2023-11" || version === "2023-05") && _core.types.isMemberExpression(expression)) {
        if (_core.types.isSuper(expression.object)) {
          object = _core.types.thisExpression();
        } else if (scopeParent.isStatic(expression.object)) {
          object = _core.types.cloneNode(expression.object);
        } else {
          decoratorReceiverId != null ? decoratorReceiverId : decoratorReceiverId = generateLetUidIdentifier(scopeParent, "obj");
          object = _core.types.assignmentExpression("=", _core.types.cloneNode(decoratorReceiverId), expression.object);
          expression.object = _core.types.cloneNode(decoratorReceiverId);
        }
      }
      decoratorsThis.push(object);
      hasSideEffects || (hasSideEffects = !scopeParent.isStatic(expression));
      usesFnContext || (usesFnContext = usesFunctionContextOrYieldAwait(decorator));
    }
    return {
      hasSideEffects,
      usesFnContext,
      decoratorsThis
    };
  }
  const willExtractSomeElemDecs = hasComputedKeysSideEffects || elemDecsUseFnContext || version !== "2023-11";
  let needsDeclarationForClassBinding = false;
  let classDecorationsFlag = 0;
  let classDecorations = [];
  let classDecorationsId;
  let computedKeyAssignments = [];
  if (classDecorators) {
    classInitLocal = generateLetUidIdentifier(scopeParent, "initClass");
    needsDeclarationForClassBinding = path.isClassDeclaration();
    ({
      id: classIdLocal,
      path
    } = replaceClassWithVar(path, className));
    path.node.decorators = null;
    const classDecsUsePrivateName = classDecorators.some(usesPrivateField);
    const {
      hasSideEffects,
      usesFnContext,
      decoratorsThis
    } = handleDecorators(classDecorators);
    const {
      haveThis,
      decs
    } = generateDecorationList(classDecorators, decoratorsThis, version);
    classDecorationsFlag = haveThis ? 1 : 0;
    classDecorations = decs;
    if (usesFnContext || hasSideEffects && willExtractSomeElemDecs || classDecsUsePrivateName) {
      classDecorationsId = memoiseExpression(_core.types.arrayExpression(classDecorations), "classDecs", classAssignments);
    }
    if (!hasElementDecorators) {
      for (const element of path.get("body.body")) {
        const {
          node
        } = element;
        const isComputed = "computed" in node && node.computed;
        if (isComputed) {
          if (element.isClassProperty({
            static: true
          })) {
            if (!element.get("key").isConstantExpression()) {
              const key = node.key;
              const maybeAssignment = (0, _misc.memoiseComputedKey)(key, scopeParent, scopeParent.generateUid("computedKey"));
              if (maybeAssignment != null) {
                node.key = _core.types.cloneNode(maybeAssignment.left);
                computedKeyAssignments.push(maybeAssignment);
              }
            }
          } else if (computedKeyAssignments.length > 0) {
            prependExpressionsToComputedKey(computedKeyAssignments, element);
            computedKeyAssignments = [];
          }
        }
      }
    }
  } else {
    assignIdForAnonymousClass(path, className);
    classIdLocal = _core.types.cloneNode(path.node.id);
  }
  let lastInstancePrivateName;
  let needsInstancePrivateBrandCheck = false;
  let fieldInitializerExpressions = [];
  let staticFieldInitializerExpressions = [];
  if (hasElementDecorators) {
    if (protoInitLocal) {
      const protoInitCall = _core.types.callExpression(_core.types.cloneNode(protoInitLocal), [_core.types.thisExpression()]);
      fieldInitializerExpressions.push(protoInitCall);
    }
    for (const element of body) {
      if (!isClassDecoratableElementPath(element)) {
        if (staticFieldInitializerExpressions.length > 0 && element.isStaticBlock()) {
          prependExpressionsToStaticBlock(staticFieldInitializerExpressions, element);
          staticFieldInitializerExpressions = [];
        }
        continue;
      }
      const {
        node
      } = element;
      const decorators = node.decorators;
      const hasDecorators = !!(decorators != null && decorators.length);
      const isComputed = "computed" in node && node.computed;
      let name = "computedKey";
      if (node.key.type === "PrivateName") {
        name = node.key.id.name;
      } else if (!isComputed && node.key.type === "Identifier") {
        name = node.key.name;
      }
      let decoratorsArray;
      let decoratorsHaveThis;
      if (hasDecorators) {
        const {
          hasSideEffects,
          usesFnContext,
          decoratorsThis
        } = handleDecorators(decorators);
        const {
          decs,
          haveThis
        } = generateDecorationList(decorators, decoratorsThis, version);
        decoratorsHaveThis = haveThis;
        decoratorsArray = decs.length === 1 ? decs[0] : _core.types.arrayExpression(decs);
        if (usesFnContext || hasSideEffects && willExtractSomeElemDecs) {
          decoratorsArray = memoiseExpression(decoratorsArray, name + "Decs", computedKeyAssignments);
        }
      }
      if (isComputed) {
        if (!element.get("key").isConstantExpression()) {
          const key = node.key;
          const maybeAssignment = (0, _misc.memoiseComputedKey)(hasDecorators ? createToPropertyKeyCall(state, key) : key, scopeParent, scopeParent.generateUid("computedKey"));
          if (maybeAssignment != null) {
            if (classDecorators && element.isClassProperty({
              static: true
            })) {
              node.key = _core.types.cloneNode(maybeAssignment.left);
              computedKeyAssignments.push(maybeAssignment);
            } else {
              node.key = maybeAssignment;
            }
          }
        }
      }
      const {
        key,
        static: isStatic
      } = node;
      const isPrivate = key.type === "PrivateName";
      const kind = getElementKind(element);
      if (isPrivate && !isStatic) {
        if (hasDecorators) {
          needsInstancePrivateBrandCheck = true;
        }
        if (_core.types.isClassPrivateProperty(node) || !lastInstancePrivateName) {
          lastInstancePrivateName = key;
        }
      }
      if (element.isClassMethod({
        kind: "constructor"
      })) {
        constructorPath = element;
      }
      let locals;
      if (hasDecorators) {
        let privateMethods;
        let nameExpr;
        if (isComputed) {
          nameExpr = getComputedKeyMemoiser(element.get("key"));
        } else if (key.type === "PrivateName") {
          nameExpr = _core.types.stringLiteral(key.id.name);
        } else if (key.type === "Identifier") {
          nameExpr = _core.types.stringLiteral(key.name);
        } else {
          nameExpr = _core.types.cloneNode(key);
        }
        if (kind === ACCESSOR) {
          const {
            value
          } = element.node;
          const params = version === "2023-11" && isStatic ? [] : [_core.types.thisExpression()];
          if (value) {
            params.push(_core.types.cloneNode(value));
          }
          const newId = generateClassPrivateUid();
          const newFieldInitId = generateLetUidIdentifier(scopeParent, `init_${name}`);
          const newValue = _core.types.callExpression(_core.types.cloneNode(newFieldInitId), params);
          const newField = generateClassProperty(newId, newValue, isStatic);
          const [newPath] = element.replaceWith(newField);
          if (isPrivate) {
            privateMethods = extractProxyAccessorsFor(newId, version);
            const getId = generateLetUidIdentifier(scopeParent, `get_${name}`);
            const setId = generateLetUidIdentifier(scopeParent, `set_${name}`);
            addCallAccessorsFor(version, newPath, key, getId, setId, isStatic);
            locals = [newFieldInitId, getId, setId];
          } else {
            assignIdForAnonymousClass(path, className);
            addProxyAccessorsFor(path.node.id, newPath, _core.types.cloneNode(key), _core.types.isAssignmentExpression(key) ? _core.types.cloneNode(key.left) : _core.types.cloneNode(key), newId, isComputed, isStatic, version);
            locals = [newFieldInitId];
          }
        } else if (kind === FIELD) {
          const initId = generateLetUidIdentifier(scopeParent, `init_${name}`);
          const valuePath = element.get("value");
          const args = version === "2023-11" && isStatic ? [] : [_core.types.thisExpression()];
          if (valuePath.node) args.push(valuePath.node);
          valuePath.replaceWith(_core.types.callExpression(_core.types.cloneNode(initId), args));
          locals = [initId];
          if (isPrivate) {
            privateMethods = extractProxyAccessorsFor(key, version);
          }
        } else if (isPrivate) {
          const callId = generateLetUidIdentifier(scopeParent, `call_${name}`);
          locals = [callId];
          const replaceSupers = new _helperReplaceSupers.default({
            constantSuper,
            methodPath: element,
            objectRef: classIdLocal,
            superRef: path.node.superClass,
            file: state.file,
            refToPreserve: classIdLocal
          });
          replaceSupers.replace();
          privateMethods = [createFunctionExpressionFromPrivateMethod(element.node)];
          if (kind === GETTER || kind === SETTER) {
            movePrivateAccessor(element, _core.types.cloneNode(key), _core.types.cloneNode(callId), isStatic);
          } else {
            const node = element.node;
            path.node.body.body.unshift(_core.types.classPrivateProperty(key, _core.types.cloneNode(callId), [], node.static));
            decoratedPrivateMethods.add(key.id.name);
            element.remove();
          }
        }
        elementDecoratorInfo.push({
          kind,
          decoratorsArray,
          decoratorsHaveThis,
          name: nameExpr,
          isStatic,
          privateMethods,
          locals
        });
        if (element.node) {
          element.node.decorators = null;
        }
      }
      if (isComputed && computedKeyAssignments.length > 0) {
        if (classDecorators && element.isClassProperty({
          static: true
        })) {} else {
          prependExpressionsToComputedKey(computedKeyAssignments, kind === ACCESSOR ? element.getNextSibling() : element);
          computedKeyAssignments = [];
        }
      }
      if (fieldInitializerExpressions.length > 0 && !isStatic && (kind === FIELD || kind === ACCESSOR)) {
        prependExpressionsToFieldInitializer(fieldInitializerExpressions, element);
        fieldInitializerExpressions = [];
      }
      if (staticFieldInitializerExpressions.length > 0 && isStatic && (kind === FIELD || kind === ACCESSOR)) {
        prependExpressionsToFieldInitializer(staticFieldInitializerExpressions, element);
        staticFieldInitializerExpressions = [];
      }
      if (hasDecorators && version === "2023-11") {
        if (kind === FIELD || kind === ACCESSOR) {
          const initExtraId = generateLetUidIdentifier(scopeParent, `init_extra_${name}`);
          locals.push(initExtraId);
          const initExtraCall = _core.types.callExpression(_core.types.cloneNode(initExtraId), isStatic ? [] : [_core.types.thisExpression()]);
          if (!isStatic) {
            fieldInitializerExpressions.push(initExtraCall);
          } else {
            staticFieldInitializerExpressions.push(initExtraCall);
          }
        }
      }
    }
  }
  if (computedKeyAssignments.length > 0) {
    const elements = path.get("body.body");
    let lastComputedElement;
    for (let i = elements.length - 1; i >= 0; i--) {
      const path = elements[i];
      const node = path.node;
      if (node.computed) {
        if (classDecorators && _core.types.isClassProperty(node, {
          static: true
        })) {
          continue;
        }
        lastComputedElement = path;
        break;
      }
    }
    if (lastComputedElement != null) {
      appendExpressionsToComputedKey(computedKeyAssignments, lastComputedElement);
      computedKeyAssignments = [];
    } else {}
  }
  if (fieldInitializerExpressions.length > 0) {
    const isDerivedClass = !!path.node.superClass;
    if (constructorPath) {
      if (isDerivedClass) {
        insertExpressionsAfterSuperCallAndOptimize(fieldInitializerExpressions, constructorPath, protoInitLocal);
      } else {
        prependExpressionsToConstructor(fieldInitializerExpressions, constructorPath);
      }
    } else {
      path.node.body.body.unshift(createConstructorFromExpressions(fieldInitializerExpressions, isDerivedClass));
    }
    fieldInitializerExpressions = [];
  }
  if (staticFieldInitializerExpressions.length > 0) {
    path.node.body.body.push(createStaticBlockFromExpressions(staticFieldInitializerExpressions));
    staticFieldInitializerExpressions = [];
  }
  const sortedElementDecoratorInfo = toSortedDecoratorInfo(elementDecoratorInfo);
  const elementDecorations = generateDecorationExprs(version === "2023-11" ? elementDecoratorInfo : sortedElementDecoratorInfo, version);
  const elementLocals = extractElementLocalAssignments(sortedElementDecoratorInfo);
  if (protoInitLocal) {
    elementLocals.push(protoInitLocal);
  }
  if (staticInitLocal) {
    elementLocals.push(staticInitLocal);
  }
  const classLocals = [];
  let classInitInjected = false;
  const classInitCall = classInitLocal && _core.types.callExpression(_core.types.cloneNode(classInitLocal), []);
  let originalClassPath = path;
  const originalClass = path.node;
  const staticClosures = [];
  if (classDecorators) {
    classLocals.push(classIdLocal, classInitLocal);
    const statics = [];
    path.get("body.body").forEach(element => {
      if (element.isStaticBlock()) {
        if (hasInstancePrivateAccess(element, instancePrivateNames)) {
          const staticBlockClosureId = memoiseExpression(staticBlockToFunctionClosure(element.node), "staticBlock", staticClosures);
          staticFieldInitializerExpressions.push(_core.types.callExpression(_core.types.memberExpression(staticBlockClosureId, _core.types.identifier("call")), [_core.types.thisExpression()]));
        } else {
          staticFieldInitializerExpressions.push(staticBlockToIIFE(element.node));
        }
        element.remove();
        return;
      }
      if ((element.isClassProperty() || element.isClassPrivateProperty()) && element.node.static) {
        const valuePath = element.get("value");
        if (hasInstancePrivateAccess(valuePath, instancePrivateNames)) {
          const fieldValueClosureId = memoiseExpression(fieldInitializerToClosure(valuePath.node), "fieldValue", staticClosures);
          valuePath.replaceWith(_core.types.callExpression(_core.types.memberExpression(fieldValueClosureId, _core.types.identifier("call")), [_core.types.thisExpression()]));
        }
        if (staticFieldInitializerExpressions.length > 0) {
          prependExpressionsToFieldInitializer(staticFieldInitializerExpressions, element);
          staticFieldInitializerExpressions = [];
        }
        element.node.static = false;
        statics.push(element.node);
        element.remove();
      } else if (element.isClassPrivateMethod({
        static: true
      })) {
        if (hasInstancePrivateAccess(element, instancePrivateNames)) {
          const replaceSupers = new _helperReplaceSupers.default({
            constantSuper,
            methodPath: element,
            objectRef: classIdLocal,
            superRef: path.node.superClass,
            file: state.file,
            refToPreserve: classIdLocal
          });
          replaceSupers.replace();
          const privateMethodDelegateId = memoiseExpression(createFunctionExpressionFromPrivateMethod(element.node), element.get("key.id").node.name, staticClosures);
          if (ignoreFunctionLength) {
            element.node.params = [_core.types.restElement(_core.types.identifier("arg"))];
            element.node.body = _core.types.blockStatement([_core.types.returnStatement(_core.types.callExpression(_core.types.memberExpression(privateMethodDelegateId, _core.types.identifier("apply")), [_core.types.thisExpression(), _core.types.identifier("arg")]))]);
          } else {
            element.node.params = element.node.params.map((p, i) => {
              if (_core.types.isRestElement(p)) {
                return _core.types.restElement(_core.types.identifier("arg"));
              } else {
                return _core.types.identifier("_" + i);
              }
            });
            element.node.body = _core.types.blockStatement([_core.types.returnStatement(_core.types.callExpression(_core.types.memberExpression(privateMethodDelegateId, _core.types.identifier("apply")), [_core.types.thisExpression(), _core.types.identifier("arguments")]))]);
          }
        }
        element.node.static = false;
        statics.push(element.node);
        element.remove();
      }
    });
    if (statics.length > 0 || staticFieldInitializerExpressions.length > 0) {
      const staticsClass = _core.template.expression.ast`
        class extends ${state.addHelper("identity")} {}
      `;
      staticsClass.body.body = [_core.types.classProperty(_core.types.toExpression(originalClass), undefined, undefined, undefined, true, true), ...statics];
      const constructorBody = [];
      const newExpr = _core.types.newExpression(staticsClass, []);
      if (staticFieldInitializerExpressions.length > 0) {
        constructorBody.push(...staticFieldInitializerExpressions);
      }
      if (classInitCall) {
        classInitInjected = true;
        constructorBody.push(classInitCall);
      }
      if (constructorBody.length > 0) {
        constructorBody.unshift(_core.types.callExpression(_core.types.super(), [_core.types.cloneNode(classIdLocal)]));
        staticsClass.body.body.push(createConstructorFromExpressions(constructorBody, false));
      } else {
        newExpr.arguments.push(_core.types.cloneNode(classIdLocal));
      }
      const [newPath] = path.replaceWith(newExpr);
      originalClassPath = newPath.get("callee").get("body").get("body.0.key");
    }
  }
  if (!classInitInjected && classInitCall) {
    path.node.body.body.push(_core.types.staticBlock([_core.types.expressionStatement(classInitCall)]));
  }
  let {
    superClass
  } = originalClass;
  if (superClass && (version === "2023-11" || version === "2023-05")) {
    const id = path.scope.maybeGenerateMemoised(superClass);
    if (id) {
      originalClass.superClass = _core.types.assignmentExpression("=", id, superClass);
      superClass = id;
    }
  }
  const applyDecoratorWrapper = _core.types.staticBlock([]);
  originalClass.body.body.unshift(applyDecoratorWrapper);
  const applyDecsBody = applyDecoratorWrapper.body;
  if (computedKeyAssignments.length > 0) {
    const elements = originalClassPath.get("body.body");
    let firstPublicElement;
    for (const path of elements) {
      if ((path.isClassProperty() || path.isClassMethod()) && path.node.kind !== "constructor") {
        firstPublicElement = path;
        break;
      }
    }
    if (firstPublicElement != null) {
      convertToComputedKey(firstPublicElement);
      prependExpressionsToComputedKey(computedKeyAssignments, firstPublicElement);
    } else {
      originalClass.body.body.unshift(_core.types.classProperty(_core.types.sequenceExpression([...computedKeyAssignments, _core.types.stringLiteral("_")]), undefined, undefined, undefined, true, true));
      applyDecsBody.push(_core.types.expressionStatement(_core.types.unaryExpression("delete", _core.types.memberExpression(_core.types.thisExpression(), _core.types.identifier("_")))));
    }
    computedKeyAssignments = [];
  }
  applyDecsBody.push(_core.types.expressionStatement(createLocalsAssignment(elementLocals, classLocals, elementDecorations, classDecorationsId != null ? classDecorationsId : _core.types.arrayExpression(classDecorations), _core.types.numericLiteral(classDecorationsFlag), needsInstancePrivateBrandCheck ? lastInstancePrivateName : null, setClassName, _core.types.cloneNode(superClass), state, version)));
  if (staticInitLocal) {
    applyDecsBody.push(_core.types.expressionStatement(_core.types.callExpression(_core.types.cloneNode(staticInitLocal), [_core.types.thisExpression()])));
  }
  if (staticClosures.length > 0) {
    applyDecsBody.push(...staticClosures.map(expr => _core.types.expressionStatement(expr)));
  }
  path.insertBefore(classAssignments.map(expr => _core.types.expressionStatement(expr)));
  if (needsDeclarationForClassBinding) {
    const classBindingInfo = scopeParent.getBinding(classIdLocal.name);
    if (!classBindingInfo.constantViolations.length) {
      path.insertBefore(_core.types.variableDeclaration("let", [_core.types.variableDeclarator(_core.types.cloneNode(classIdLocal))]));
    } else {
      const classOuterBindingDelegateLocal = scopeParent.generateUidIdentifier("t" + classIdLocal.name);
      const classOuterBindingLocal = classIdLocal;
      path.replaceWithMultiple([_core.types.variableDeclaration("let", [_core.types.variableDeclarator(_core.types.cloneNode(classOuterBindingLocal)), _core.types.variableDeclarator(classOuterBindingDelegateLocal)]), _core.types.blockStatement([_core.types.variableDeclaration("let", [_core.types.variableDeclarator(_core.types.cloneNode(classIdLocal))]), path.node, _core.types.expressionStatement(_core.types.assignmentExpression("=", _core.types.cloneNode(classOuterBindingDelegateLocal), _core.types.cloneNode(classIdLocal)))]), _core.types.expressionStatement(_core.types.assignmentExpression("=", _core.types.cloneNode(classOuterBindingLocal), _core.types.cloneNode(classOuterBindingDelegateLocal)))]);
    }
  }
  if (decoratedPrivateMethods.size > 0) {
    checkPrivateMethodUpdateError(path, decoratedPrivateMethods);
  }
  path.scope.crawl();
  return path;
}
function createLocalsAssignment(elementLocals, classLocals, elementDecorations, classDecorations, classDecorationsFlag, maybePrivateBrandName, setClassName, superClass, state, version) {
  let lhs, rhs;
  const args = [setClassName ? createSetFunctionNameCall(state, setClassName) : _core.types.thisExpression(), classDecorations, elementDecorations];
  if (version !== "2023-11") {
    args.splice(1, 2, elementDecorations, classDecorations);
  }
  if (version === "2021-12" || version === "2022-03" && !state.availableHelper("applyDecs2203R")) {
    lhs = _core.types.arrayPattern([...elementLocals, ...classLocals]);
    rhs = _core.types.callExpression(state.addHelper(version === "2021-12" ? "applyDecs" : "applyDecs2203"), args);
    return _core.types.assignmentExpression("=", lhs, rhs);
  } else if (version === "2022-03") {
    rhs = _core.types.callExpression(state.addHelper("applyDecs2203R"), args);
  } else if (version === "2023-01") {
    if (maybePrivateBrandName) {
      args.push(createPrivateBrandCheckClosure(maybePrivateBrandName));
    }
    rhs = _core.types.callExpression(state.addHelper("applyDecs2301"), args);
  } else if (version === "2023-05") {
    if (maybePrivateBrandName || superClass || classDecorationsFlag.value !== 0) {
      args.push(classDecorationsFlag);
    }
    if (maybePrivateBrandName) {
      args.push(createPrivateBrandCheckClosure(maybePrivateBrandName));
    } else if (superClass) {
      args.push(_core.types.unaryExpression("void", _core.types.numericLiteral(0)));
    }
    if (superClass) args.push(superClass);
    rhs = _core.types.callExpression(state.addHelper("applyDecs2305"), args);
  }
  if (version === "2023-11") {
    if (maybePrivateBrandName || superClass || classDecorationsFlag.value !== 0) {
      args.push(classDecorationsFlag);
    }
    if (maybePrivateBrandName) {
      args.push(createPrivateBrandCheckClosure(maybePrivateBrandName));
    } else if (superClass) {
      args.push(_core.types.unaryExpression("void", _core.types.numericLiteral(0)));
    }
    if (superClass) args.push(superClass);
    rhs = _core.types.callExpression(state.addHelper("applyDecs2311"), args);
  }
  if (elementLocals.length > 0) {
    if (classLocals.length > 0) {
      lhs = _core.types.objectPattern([_core.types.objectProperty(_core.types.identifier("e"), _core.types.arrayPattern(elementLocals)), _core.types.objectProperty(_core.types.identifier("c"), _core.types.arrayPattern(classLocals))]);
    } else {
      lhs = _core.types.arrayPattern(elementLocals);
      rhs = _core.types.memberExpression(rhs, _core.types.identifier("e"), false, false);
    }
  } else {
    lhs = _core.types.arrayPattern(classLocals);
    rhs = _core.types.memberExpression(rhs, _core.types.identifier("c"), false, false);
  }
  return _core.types.assignmentExpression("=", lhs, rhs);
}
function isProtoKey(node) {
  return node.type === "Identifier" ? node.name === "__proto__" : node.value === "__proto__";
}
function isDecorated(node) {
  return node.decorators && node.decorators.length > 0;
}
function shouldTransformElement(node) {
  switch (node.type) {
    case "ClassAccessorProperty":
      return true;
    case "ClassMethod":
    case "ClassProperty":
    case "ClassPrivateMethod":
    case "ClassPrivateProperty":
      return isDecorated(node);
    default:
      return false;
  }
}
function shouldTransformClass(node) {
  return isDecorated(node) || node.body.body.some(shouldTransformElement);
}
function buildNamedEvaluationVisitor(needsName, visitor) {
  function handleComputedProperty(propertyPath, key, state) {
    switch (key.type) {
      case "StringLiteral":
        return _core.types.stringLiteral(key.value);
      case "NumericLiteral":
      case "BigIntLiteral":
        {
          const keyValue = key.value + "";
          propertyPath.get("key").replaceWith(_core.types.stringLiteral(keyValue));
          return _core.types.stringLiteral(keyValue);
        }
      default:
        {
          const ref = propertyPath.scope.maybeGenerateMemoised(key);
          propertyPath.get("key").replaceWith(_core.types.assignmentExpression("=", ref, createToPropertyKeyCall(state, key)));
          return _core.types.cloneNode(ref);
        }
    }
  }
  return {
    VariableDeclarator(path, state) {
      const id = path.node.id;
      if (id.type === "Identifier") {
        const initializer = (0, _helperSkipTransparentExpressionWrappers.skipTransparentExprWrappers)(path.get("init"));
        if (needsName(initializer)) {
          const name = id.name;
          visitor(initializer, state, name);
        }
      }
    },
    AssignmentExpression(path, state) {
      const id = path.node.left;
      if (id.type === "Identifier") {
        const initializer = (0, _helperSkipTransparentExpressionWrappers.skipTransparentExprWrappers)(path.get("right"));
        if (needsName(initializer)) {
          switch (path.node.operator) {
            case "=":
            case "&&=":
            case "||=":
            case "??=":
              visitor(initializer, state, id.name);
          }
        }
      }
    },
    AssignmentPattern(path, state) {
      const id = path.node.left;
      if (id.type === "Identifier") {
        const initializer = (0, _helperSkipTransparentExpressionWrappers.skipTransparentExprWrappers)(path.get("right"));
        if (needsName(initializer)) {
          const name = id.name;
          visitor(initializer, state, name);
        }
      }
    },
    ObjectExpression(path, state) {
      for (const propertyPath of path.get("properties")) {
        if (!propertyPath.isObjectProperty()) continue;
        const {
          node
        } = propertyPath;
        const id = node.key;
        const initializer = (0, _helperSkipTransparentExpressionWrappers.skipTransparentExprWrappers)(propertyPath.get("value"));
        if (needsName(initializer)) {
          if (!node.computed) {
            if (!isProtoKey(id)) {
              if (id.type === "Identifier") {
                visitor(initializer, state, id.name);
              } else {
                const className = _core.types.stringLiteral(id.value + "");
                visitor(initializer, state, className);
              }
            }
          } else {
            const ref = handleComputedProperty(propertyPath, id, state);
            visitor(initializer, state, ref);
          }
        }
      }
    },
    ClassPrivateProperty(path, state) {
      const {
        node
      } = path;
      const initializer = (0, _helperSkipTransparentExpressionWrappers.skipTransparentExprWrappers)(path.get("value"));
      if (needsName(initializer)) {
        const className = _core.types.stringLiteral("#" + node.key.id.name);
        visitor(initializer, state, className);
      }
    },
    ClassAccessorProperty(path, state) {
      const {
        node
      } = path;
      const id = node.key;
      const initializer = (0, _helperSkipTransparentExpressionWrappers.skipTransparentExprWrappers)(path.get("value"));
      if (needsName(initializer)) {
        if (!node.computed) {
          if (id.type === "Identifier") {
            visitor(initializer, state, id.name);
          } else if (id.type === "PrivateName") {
            const className = _core.types.stringLiteral("#" + id.id.name);
            visitor(initializer, state, className);
          } else {
            const className = _core.types.stringLiteral(id.value + "");
            visitor(initializer, state, className);
          }
        } else {
          const ref = handleComputedProperty(path, id, state);
          visitor(initializer, state, ref);
        }
      }
    },
    ClassProperty(path, state) {
      const {
        node
      } = path;
      const id = node.key;
      const initializer = (0, _helperSkipTransparentExpressionWrappers.skipTransparentExprWrappers)(path.get("value"));
      if (needsName(initializer)) {
        if (!node.computed) {
          if (id.type === "Identifier") {
            visitor(initializer, state, id.name);
          } else {
            const className = _core.types.stringLiteral(id.value + "");
            visitor(initializer, state, className);
          }
        } else {
          const ref = handleComputedProperty(path, id, state);
          visitor(initializer, state, ref);
        }
      }
    }
  };
}
function isDecoratedAnonymousClassExpression(path) {
  return path.isClassExpression({
    id: null
  }) && shouldTransformClass(path.node);
}
function generateLetUidIdentifier(scope, name) {
  const id = scope.generateUidIdentifier(name);
  scope.push({
    id,
    kind: "let"
  });
  return _core.types.cloneNode(id);
}
function _default({
  assertVersion,
  assumption
}, {
  loose
}, version, inherits) {
  var _assumption, _assumption2;
  if (version === "2023-11" || version === "2023-05" || version === "2023-01") {
    assertVersion("^7.21.0");
  } else if (version === "2021-12") {
    assertVersion("^7.16.0");
  } else {
    assertVersion("^7.19.0");
  }
  const VISITED = new WeakSet();
  const constantSuper = (_assumption = assumption("constantSuper")) != null ? _assumption : loose;
  const ignoreFunctionLength = (_assumption2 = assumption("ignoreFunctionLength")) != null ? _assumption2 : loose;
  const namedEvaluationVisitor = buildNamedEvaluationVisitor(isDecoratedAnonymousClassExpression, visitClass);
  function visitClass(path, state, className) {
    var _node$id;
    if (VISITED.has(path)) return;
    const {
      node
    } = path;
    className != null ? className : className = (_node$id = node.id) == null ? void 0 : _node$id.name;
    const newPath = transformClass(path, state, constantSuper, ignoreFunctionLength, className, namedEvaluationVisitor, version);
    if (newPath) {
      VISITED.add(newPath);
      return;
    }
    VISITED.add(path);
  }
  return {
    name: "proposal-decorators",
    inherits: inherits,
    visitor: Object.assign({
      ExportDefaultDeclaration(path, state) {
        const {
          declaration
        } = path.node;
        if ((declaration == null ? void 0 : declaration.type) === "ClassDeclaration" && isDecorated(declaration)) {
          var _path$splitExportDecl;
          const isAnonymous = !declaration.id;
          (_path$splitExportDecl = path.splitExportDeclaration) != null ? _path$splitExportDecl : path.splitExportDeclaration = require("@babel/traverse").NodePath.prototype.splitExportDeclaration;
          const updatedVarDeclarationPath = path.splitExportDeclaration();
          if (isAnonymous) {
            visitClass(updatedVarDeclarationPath, state, _core.types.stringLiteral("default"));
          }
        }
      },
      ExportNamedDeclaration(path) {
        const {
          declaration
        } = path.node;
        if ((declaration == null ? void 0 : declaration.type) === "ClassDeclaration" && isDecorated(declaration)) {
          var _path$splitExportDecl2;
          (_path$splitExportDecl2 = path.splitExportDeclaration) != null ? _path$splitExportDecl2 : path.splitExportDeclaration = require("@babel/traverse").NodePath.prototype.splitExportDeclaration;
          path.splitExportDeclaration();
        }
      },
      Class(path, state) {
        visitClass(path, state, undefined);
      }
    }, namedEvaluationVisitor)
  };
}

//# sourceMappingURL=decorators.js.map
