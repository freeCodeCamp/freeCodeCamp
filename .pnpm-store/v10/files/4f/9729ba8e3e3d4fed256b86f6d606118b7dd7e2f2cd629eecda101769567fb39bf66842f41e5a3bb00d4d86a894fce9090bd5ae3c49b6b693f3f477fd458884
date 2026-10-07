'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helperPluginUtils = require('@babel/helper-plugin-utils');
var core = require('@babel/core');

function isPureVoid(node) {
  return core.types.isUnaryExpression(node) && node.operator === "void" && core.types.isPureish(node.argument);
}
function unshiftForXStatementBody(statementPath, newStatements) {
  statementPath.ensureBlock();
  const {
    scope,
    node
  } = statementPath;
  const bodyScopeBindings = statementPath.get("body").scope.bindings;
  const hasShadowedBlockScopedBindings = Object.keys(bodyScopeBindings).some(name => scope.hasBinding(name));
  if (hasShadowedBlockScopedBindings) {
    node.body = core.types.blockStatement([...newStatements, node.body]);
  } else {
    node.body.body.unshift(...newStatements);
  }
}
function hasArrayRest(pattern) {
  return pattern.elements.some(elem => core.types.isRestElement(elem));
}
function hasObjectRest(pattern) {
  return pattern.properties.some(prop => core.types.isRestElement(prop));
}
const STOP_TRAVERSAL = {};
const arrayUnpackVisitor = (node, ancestors, state) => {
  if (!ancestors.length) {
    return;
  }
  if (core.types.isIdentifier(node) && core.types.isReferenced(node, ancestors[ancestors.length - 1].node) && state.bindings[node.name]) {
    state.deopt = true;
    throw STOP_TRAVERSAL;
  }
};
class DestructuringTransformer {
  constructor(opts) {
    this.blockHoist = void 0;
    this.operator = void 0;
    this.arrayRefSet = void 0;
    this.nodes = void 0;
    this.scope = void 0;
    this.kind = void 0;
    this.iterableIsArray = void 0;
    this.arrayLikeIsIterable = void 0;
    this.objectRestNoSymbols = void 0;
    this.useBuiltIns = void 0;
    this.addHelper = void 0;
    this.blockHoist = opts.blockHoist;
    this.operator = opts.operator;
    this.arrayRefSet = new Set();
    this.nodes = opts.nodes || [];
    this.scope = opts.scope;
    this.kind = opts.kind;
    this.iterableIsArray = opts.iterableIsArray;
    this.arrayLikeIsIterable = opts.arrayLikeIsIterable;
    this.objectRestNoSymbols = opts.objectRestNoSymbols;
    this.useBuiltIns = opts.useBuiltIns;
    this.addHelper = opts.addHelper;
  }
  getExtendsHelper() {
    return this.useBuiltIns ? core.types.memberExpression(core.types.identifier("Object"), core.types.identifier("assign")) : this.addHelper("extends");
  }
  buildVariableAssignment(id, init) {
    let op = this.operator;
    if (core.types.isMemberExpression(id) || core.types.isOptionalMemberExpression(id)) op = "=";
    let node;
    if (op) {
      node = core.types.expressionStatement(core.types.assignmentExpression(op, id, core.types.cloneNode(init) || this.scope.buildUndefinedNode()));
    } else {
      let nodeInit;
      if ((this.kind === "const" || this.kind === "using") && init === null) {
        nodeInit = this.scope.buildUndefinedNode();
      } else {
        nodeInit = core.types.cloneNode(init);
      }
      node = core.types.variableDeclaration(this.kind, [core.types.variableDeclarator(id, nodeInit)]);
    }
    node._blockHoist = this.blockHoist;
    return node;
  }
  buildVariableDeclaration(id, init) {
    const declar = core.types.variableDeclaration("var", [core.types.variableDeclarator(core.types.cloneNode(id), core.types.cloneNode(init))]);
    declar._blockHoist = this.blockHoist;
    return declar;
  }
  push(id, _init) {
    const init = core.types.cloneNode(_init);
    if (core.types.isObjectPattern(id)) {
      this.pushObjectPattern(id, init);
    } else if (core.types.isArrayPattern(id)) {
      this.pushArrayPattern(id, init);
    } else if (core.types.isAssignmentPattern(id)) {
      this.pushAssignmentPattern(id, init);
    } else {
      this.nodes.push(this.buildVariableAssignment(id, init));
    }
  }
  toArray(node, count) {
    if (this.iterableIsArray || core.types.isIdentifier(node) && this.arrayRefSet.has(node.name)) {
      return node;
    } else {
      return this.scope.toArray(node, count, this.arrayLikeIsIterable);
    }
  }
  pushAssignmentPattern({
    left,
    right
  }, valueRef) {
    if (isPureVoid(valueRef)) {
      this.push(left, right);
      return;
    }
    const tempId = this.scope.generateUidIdentifierBasedOnNode(valueRef);
    this.nodes.push(this.buildVariableDeclaration(tempId, valueRef));
    const tempConditional = core.types.conditionalExpression(core.types.binaryExpression("===", core.types.cloneNode(tempId), this.scope.buildUndefinedNode()), right, core.types.cloneNode(tempId));
    if (core.types.isPattern(left)) {
      let patternId;
      let node;
      if (this.kind === "const" || this.kind === "let" || this.kind === "using") {
        patternId = this.scope.generateUidIdentifier(tempId.name);
        node = this.buildVariableDeclaration(patternId, tempConditional);
      } else {
        patternId = tempId;
        node = core.types.expressionStatement(core.types.assignmentExpression("=", core.types.cloneNode(tempId), tempConditional));
      }
      this.nodes.push(node);
      this.push(left, patternId);
    } else {
      this.nodes.push(this.buildVariableAssignment(left, tempConditional));
    }
  }
  pushObjectRest(pattern, objRef, spreadProp, spreadPropIndex) {
    const value = buildObjectExcludingKeys(pattern.properties.slice(0, spreadPropIndex), objRef, this.scope, name => this.addHelper(name), this.objectRestNoSymbols, this.useBuiltIns);
    this.nodes.push(this.buildVariableAssignment(spreadProp.argument, value));
  }
  pushObjectProperty(prop, propRef) {
    if (core.types.isLiteral(prop.key)) prop.computed = true;
    const pattern = prop.value;
    const objRef = core.types.memberExpression(core.types.cloneNode(propRef), prop.key, prop.computed);
    if (core.types.isPattern(pattern)) {
      this.push(pattern, objRef);
    } else {
      this.nodes.push(this.buildVariableAssignment(pattern, objRef));
    }
  }
  pushObjectPattern(pattern, objRef) {
    if (!pattern.properties.length) {
      this.nodes.push(core.types.expressionStatement(core.types.callExpression(this.addHelper("objectDestructuringEmpty"), isPureVoid(objRef) ? [] : [objRef])));
      return;
    }
    if (pattern.properties.length > 1 && !this.scope.isStatic(objRef)) {
      const temp = this.scope.generateUidIdentifierBasedOnNode(objRef);
      this.nodes.push(this.buildVariableDeclaration(temp, objRef));
      objRef = temp;
    }
    if (hasObjectRest(pattern)) {
      let copiedPattern;
      for (let i = 0; i < pattern.properties.length; i++) {
        const prop = pattern.properties[i];
        if (core.types.isRestElement(prop)) {
          break;
        }
        const key = prop.key;
        if (prop.computed && !this.scope.isPure(key)) {
          const name = this.scope.generateUidIdentifierBasedOnNode(key);
          this.nodes.push(this.buildVariableDeclaration(name, key));
          if (!copiedPattern) {
            copiedPattern = pattern = Object.assign({}, pattern, {
              properties: pattern.properties.slice()
            });
          }
          copiedPattern.properties[i] = Object.assign({}, prop, {
            key: name
          });
        }
      }
    }
    for (let i = 0; i < pattern.properties.length; i++) {
      const prop = pattern.properties[i];
      if (core.types.isRestElement(prop)) {
        this.pushObjectRest(pattern, objRef, prop, i);
      } else {
        this.pushObjectProperty(prop, objRef);
      }
    }
  }
  canUnpackArrayPattern(pattern, arr) {
    if (!core.types.isArrayExpression(arr)) return false;
    if (pattern.elements.length > arr.elements.length) return;
    if (pattern.elements.length < arr.elements.length && !hasArrayRest(pattern)) {
      return false;
    }
    for (const elem of pattern.elements) {
      if (!elem) return false;
      if (core.types.isMemberExpression(elem)) return false;
    }
    for (const elem of arr.elements) {
      if (core.types.isSpreadElement(elem)) return false;
      if (core.types.isCallExpression(elem)) return false;
      if (core.types.isMemberExpression(elem)) return false;
    }
    const bindings = core.types.getBindingIdentifiers(pattern);
    const state = {
      deopt: false,
      bindings
    };
    try {
      core.types.traverse(arr, arrayUnpackVisitor, state);
    } catch (e) {
      if (e !== STOP_TRAVERSAL) throw e;
    }
    return !state.deopt;
  }
  pushUnpackedArrayPattern(pattern, arr) {
    const holeToUndefined = el => el != null ? el : this.scope.buildUndefinedNode();
    for (let i = 0; i < pattern.elements.length; i++) {
      const elem = pattern.elements[i];
      if (core.types.isRestElement(elem)) {
        this.push(elem.argument, core.types.arrayExpression(arr.elements.slice(i).map(holeToUndefined)));
      } else {
        this.push(elem, holeToUndefined(arr.elements[i]));
      }
    }
  }
  pushArrayPattern(pattern, arrayRef) {
    if (arrayRef === null) {
      this.nodes.push(core.types.expressionStatement(core.types.callExpression(this.addHelper("objectDestructuringEmpty"), [])));
      return;
    }
    if (!pattern.elements) return;
    if (this.canUnpackArrayPattern(pattern, arrayRef)) {
      this.pushUnpackedArrayPattern(pattern, arrayRef);
      return;
    }
    const count = !hasArrayRest(pattern) && pattern.elements.length;
    const toArray = this.toArray(arrayRef, count);
    if (core.types.isIdentifier(toArray)) {
      arrayRef = toArray;
    } else {
      arrayRef = this.scope.generateUidIdentifierBasedOnNode(arrayRef);
      this.arrayRefSet.add(arrayRef.name);
      this.nodes.push(this.buildVariableDeclaration(arrayRef, toArray));
    }
    for (let i = 0; i < pattern.elements.length; i++) {
      const elem = pattern.elements[i];
      if (!elem) continue;
      let elemRef;
      if (core.types.isRestElement(elem)) {
        elemRef = this.toArray(arrayRef);
        elemRef = core.types.callExpression(core.types.memberExpression(elemRef, core.types.identifier("slice")), [core.types.numericLiteral(i)]);
        this.push(elem.argument, elemRef);
      } else {
        elemRef = core.types.memberExpression(arrayRef, core.types.numericLiteral(i), true);
        this.push(elem, elemRef);
      }
    }
  }
  init(pattern, ref) {
    if (!core.types.isArrayExpression(ref) && !core.types.isMemberExpression(ref)) {
      const memo = this.scope.maybeGenerateMemoised(ref, true);
      if (memo) {
        this.nodes.push(this.buildVariableDeclaration(memo, core.types.cloneNode(ref)));
        ref = memo;
      }
    }
    this.push(pattern, ref);
    return this.nodes;
  }
}
function buildObjectExcludingKeys(excludedKeys, objRef, scope, addHelper, objectRestNoSymbols, useBuiltIns) {
  const keys = [];
  let allLiteral = true;
  let hasTemplateLiteral = false;
  for (let i = 0; i < excludedKeys.length; i++) {
    const prop = excludedKeys[i];
    const key = prop.key;
    if (core.types.isIdentifier(key) && !prop.computed) {
      keys.push(core.types.stringLiteral(key.name));
    } else if (core.types.isTemplateLiteral(key)) {
      keys.push(core.types.cloneNode(key));
      hasTemplateLiteral = true;
    } else if (core.types.isLiteral(key)) {
      keys.push(core.types.stringLiteral(String(key.value)));
    } else if (core.types.isPrivateName(key)) ; else {
      keys.push(core.types.cloneNode(key));
      allLiteral = false;
    }
  }
  let value;
  if (keys.length === 0) {
    const extendsHelper = useBuiltIns ? core.types.memberExpression(core.types.identifier("Object"), core.types.identifier("assign")) : addHelper("extends");
    value = core.types.callExpression(extendsHelper, [core.types.objectExpression([]), core.types.sequenceExpression([core.types.callExpression(addHelper("objectDestructuringEmpty"), [core.types.cloneNode(objRef)]), core.types.cloneNode(objRef)])]);
  } else {
    let keyExpression = core.types.arrayExpression(keys);
    if (!allLiteral) {
      keyExpression = core.types.callExpression(core.types.memberExpression(keyExpression, core.types.identifier("map")), [addHelper("toPropertyKey")]);
    } else if (!hasTemplateLiteral && !core.types.isProgram(scope.block)) {
      const programScope = scope.getProgramParent();
      const id = programScope.generateUidIdentifier("excluded");
      programScope.push({
        id,
        init: keyExpression,
        kind: "const"
      });
      keyExpression = core.types.cloneNode(id);
    }
    value = core.types.callExpression(addHelper(`objectWithoutProperties${objectRestNoSymbols ? "Loose" : ""}`), [core.types.cloneNode(objRef), keyExpression]);
  }
  return value;
}
function convertVariableDeclaration(path, addHelper, arrayLikeIsIterable, iterableIsArray, objectRestNoSymbols, useBuiltIns) {
  const {
    node,
    scope
  } = path;
  const nodeKind = node.kind;
  const nodeLoc = node.loc;
  const nodes = [];
  for (let i = 0; i < node.declarations.length; i++) {
    const declar = node.declarations[i];
    const patternId = declar.init;
    const pattern = declar.id;
    const destructuring = new DestructuringTransformer({
      blockHoist: node._blockHoist,
      nodes: nodes,
      scope: scope,
      kind: node.kind,
      iterableIsArray,
      arrayLikeIsIterable,
      useBuiltIns,
      objectRestNoSymbols,
      addHelper
    });
    if (core.types.isPattern(pattern)) {
      destructuring.init(pattern, patternId);
      if (+i !== node.declarations.length - 1) {
        core.types.inherits(nodes[nodes.length - 1], declar);
      }
    } else {
      nodes.push(core.types.inherits(destructuring.buildVariableAssignment(pattern, patternId), declar));
    }
  }
  let tail = null;
  let nodesOut = [];
  for (const node of nodes) {
    if (core.types.isVariableDeclaration(node)) {
      if (tail !== null) {
        tail.declarations.push(...node.declarations);
        continue;
      } else {
        node.kind = nodeKind;
        tail = node;
      }
    } else {
      tail = null;
    }
    if (!node.loc) {
      node.loc = nodeLoc;
    }
    nodesOut.push(node);
  }
  if (nodesOut.length === 2 && core.types.isVariableDeclaration(nodesOut[0]) && core.types.isExpressionStatement(nodesOut[1]) && core.types.isCallExpression(nodesOut[1].expression) && nodesOut[0].declarations.length === 1) {
    const expr = nodesOut[1].expression;
    expr.arguments = [nodesOut[0].declarations[0].init];
    nodesOut = [expr];
  } else {
    if (core.types.isForStatement(path.parent, {
      init: node
    }) && !nodesOut.some(v => core.types.isVariableDeclaration(v))) {
      for (let i = 0; i < nodesOut.length; i++) {
        const node = nodesOut[i];
        if (core.types.isExpressionStatement(node)) {
          nodesOut[i] = node.expression;
        }
      }
    }
  }
  if (nodesOut.length === 1) {
    path.replaceWith(nodesOut[0]);
  } else {
    path.replaceWithMultiple(nodesOut);
  }
  scope.crawl();
}
function convertAssignmentExpression(path, addHelper, arrayLikeIsIterable, iterableIsArray, objectRestNoSymbols, useBuiltIns) {
  const {
    node,
    scope,
    parentPath
  } = path;
  const nodes = [];
  const destructuring = new DestructuringTransformer({
    operator: node.operator,
    scope: scope,
    nodes: nodes,
    arrayLikeIsIterable,
    iterableIsArray,
    objectRestNoSymbols,
    useBuiltIns,
    addHelper
  });
  let ref;
  if (!parentPath.isExpressionStatement() && !parentPath.isSequenceExpression() || path.isCompletionRecord()) {
    ref = scope.generateUidIdentifierBasedOnNode(node.right, "ref");
    nodes.push(core.types.variableDeclaration("var", [core.types.variableDeclarator(ref, node.right)]));
    if (core.types.isArrayExpression(node.right)) {
      destructuring.arrayRefSet.add(ref.name);
    }
  }
  destructuring.init(node.left, ref || node.right);
  if (ref) {
    if (parentPath.isArrowFunctionExpression()) {
      path.replaceWith(core.types.blockStatement([]));
      nodes.push(core.types.returnStatement(core.types.cloneNode(ref)));
    } else {
      nodes.push(core.types.expressionStatement(core.types.cloneNode(ref)));
    }
  }
  path.replaceWithMultiple(nodes);
  scope.crawl();
}

function variableDeclarationHasPattern(node) {
  for (const declar of node.declarations) {
    if (core.types.isPattern(declar.id)) {
      return true;
    }
  }
  return false;
}
var index = helperPluginUtils.declare((api, options) => {
  var _ref, _api$assumption, _ref2, _options$allowArrayLi, _ref3, _api$assumption2;
  api.assertVersion(7);
  const {
    useBuiltIns = false
  } = options;
  const iterableIsArray = (_ref = (_api$assumption = api.assumption("iterableIsArray")) != null ? _api$assumption : options.loose) != null ? _ref : false;
  const arrayLikeIsIterable = (_ref2 = (_options$allowArrayLi = options.allowArrayLike) != null ? _options$allowArrayLi : api.assumption("arrayLikeIsIterable")) != null ? _ref2 : false;
  const objectRestNoSymbols = (_ref3 = (_api$assumption2 = api.assumption("objectRestNoSymbols")) != null ? _api$assumption2 : options.loose) != null ? _ref3 : false;
  return {
    name: "transform-destructuring",
    visitor: {
      ExportNamedDeclaration(path) {
        const declaration = path.get("declaration");
        if (!declaration.isVariableDeclaration()) return;
        if (!variableDeclarationHasPattern(declaration.node)) return;
        const specifiers = [];
        for (const name of Object.keys(path.getOuterBindingIdentifiers())) {
          specifiers.push(core.types.exportSpecifier(core.types.identifier(name), core.types.identifier(name)));
        }
        path.replaceWith(declaration.node);
        path.insertAfter(core.types.exportNamedDeclaration(null, specifiers));
        path.scope.crawl();
      },
      ForXStatement(path) {
        const {
          node,
          scope
        } = path;
        const left = node.left;
        if (core.types.isPattern(left)) {
          const temp = scope.generateUidIdentifier("ref");
          node.left = core.types.variableDeclaration("var", [core.types.variableDeclarator(temp)]);
          path.ensureBlock();
          const statementBody = path.node.body.body;
          const nodes = [];
          if (statementBody.length === 0 && path.isCompletionRecord()) {
            nodes.unshift(core.types.expressionStatement(scope.buildUndefinedNode()));
          }
          nodes.unshift(core.types.expressionStatement(core.types.assignmentExpression("=", left, core.types.cloneNode(temp))));
          unshiftForXStatementBody(path, nodes);
          scope.crawl();
          return;
        }
        if (!core.types.isVariableDeclaration(left)) return;
        const pattern = left.declarations[0].id;
        if (!core.types.isPattern(pattern)) return;
        const key = scope.generateUidIdentifier("ref");
        node.left = core.types.variableDeclaration(left.kind, [core.types.variableDeclarator(key, null)]);
        const nodes = [];
        const destructuring = new DestructuringTransformer({
          kind: left.kind,
          scope: scope,
          nodes: nodes,
          arrayLikeIsIterable,
          iterableIsArray,
          objectRestNoSymbols,
          useBuiltIns,
          addHelper: name => this.addHelper(name)
        });
        destructuring.init(pattern, key);
        unshiftForXStatementBody(path, nodes);
        scope.crawl();
      },
      CatchClause({
        node,
        scope
      }) {
        const pattern = node.param;
        if (!core.types.isPattern(pattern)) return;
        const ref = scope.generateUidIdentifier("ref");
        node.param = ref;
        const nodes = [];
        const destructuring = new DestructuringTransformer({
          kind: "let",
          scope: scope,
          nodes: nodes,
          arrayLikeIsIterable,
          iterableIsArray,
          objectRestNoSymbols,
          useBuiltIns,
          addHelper: name => this.addHelper(name)
        });
        destructuring.init(pattern, ref);
        node.body.body = [...nodes, ...node.body.body];
        scope.crawl();
      },
      AssignmentExpression(path, state) {
        if (!core.types.isPattern(path.node.left)) return;
        convertAssignmentExpression(path, name => state.addHelper(name), arrayLikeIsIterable, iterableIsArray, objectRestNoSymbols, useBuiltIns);
      },
      VariableDeclaration(path, state) {
        const {
          node,
          parent
        } = path;
        if (core.types.isForXStatement(parent)) return;
        if (!parent || !path.container) return;
        if (!variableDeclarationHasPattern(node)) return;
        convertVariableDeclaration(path, name => state.addHelper(name), arrayLikeIsIterable, iterableIsArray, objectRestNoSymbols, useBuiltIns);
      }
    }
  };
});

exports.buildObjectExcludingKeys = buildObjectExcludingKeys;
exports.default = index;
exports.unshiftForXStatementBody = unshiftForXStatementBody;
//# sourceMappingURL=index.js.map
