"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SHOULD_STOP = exports.SHOULD_SKIP = exports.REMOVED = void 0;
var virtualTypes = require("./lib/virtual-types.js");
var _debug = require("debug");
var _index = require("../index.js");
var _index2 = require("../scope/index.js");
var _t = require("@babel/types");
var t = _t;
var cache = require("../cache.js");
var _generator = require("@babel/generator");
var NodePath_ancestry = require("./ancestry.js");
var NodePath_inference = require("./inference/index.js");
var NodePath_replacement = require("./replacement.js");
var NodePath_evaluation = require("./evaluation.js");
var NodePath_conversion = require("./conversion.js");
var NodePath_introspection = require("./introspection.js");
var _context = require("./context.js");
var NodePath_context = _context;
var NodePath_removal = require("./removal.js");
var NodePath_modification = require("./modification.js");
var NodePath_family = require("./family.js");
var NodePath_comments = require("./comments.js");
var NodePath_virtual_types_validator = require("./lib/virtual-types-validator.js");
const {
  validate
} = _t;
const debug = _debug("babel");
const REMOVED = exports.REMOVED = 1 << 0;
const SHOULD_STOP = exports.SHOULD_STOP = 1 << 1;
const SHOULD_SKIP = exports.SHOULD_SKIP = 1 << 2;
const NodePath_Final = exports.default = class NodePath {
  constructor(hub, parent) {
    this.contexts = [];
    this.state = null;
    this._traverseFlags = 0;
    this.skipKeys = null;
    this.parentPath = null;
    this.container = null;
    this.listKey = null;
    this.key = null;
    this.node = null;
    this.type = null;
    this._store = null;
    this.parent = parent;
    this.hub = hub;
    this.data = null;
    this.context = null;
    this.scope = null;
  }
  get removed() {
    return (this._traverseFlags & 1) > 0;
  }
  set removed(v) {
    if (v) this._traverseFlags |= 1;else this._traverseFlags &= -2;
  }
  get shouldStop() {
    return (this._traverseFlags & 2) > 0;
  }
  set shouldStop(v) {
    if (v) this._traverseFlags |= 2;else this._traverseFlags &= -3;
  }
  get shouldSkip() {
    return (this._traverseFlags & 4) > 0;
  }
  set shouldSkip(v) {
    if (v) this._traverseFlags |= 4;else this._traverseFlags &= -5;
  }
  static get({
    hub,
    parentPath,
    parent,
    container,
    listKey,
    key
  }) {
    if (!hub && parentPath) {
      hub = parentPath.hub;
    }
    if (!parent) {
      throw new Error("To get a node path the parent needs to exist");
    }
    const targetNode = container[key];
    const paths = cache.getOrCreateCachedPaths(parent, parentPath);
    let path = paths.get(targetNode);
    if (!path) {
      path = new NodePath(hub, parent);
      if (targetNode) paths.set(targetNode, path);
    }
    _context.setup.call(path, parentPath, container, listKey, key);
    return path;
  }
  getScope(scope) {
    return this.isScope() ? new _index2.default(this) : scope;
  }
  setData(key, val) {
    if (this.data == null) {
      this.data = Object.create(null);
    }
    return this.data[key] = val;
  }
  getData(key, def) {
    if (this.data == null) {
      this.data = Object.create(null);
    }
    let val = this.data[key];
    if (val === undefined && def !== undefined) val = this.data[key] = def;
    return val;
  }
  hasNode() {
    return this.node != null;
  }
  buildCodeFrameError(msg, Error = SyntaxError) {
    return this.hub.buildError(this.node, msg, Error);
  }
  traverse(visitor, state) {
    (0, _index.default)(this.node, visitor, this.scope, state, this);
  }
  set(key, node) {
    validate(this.node, key, node);
    this.node[key] = node;
  }
  getPathLocation() {
    const parts = [];
    let path = this;
    do {
      let key = path.key;
      if (path.inList) key = `${path.listKey}[${key}]`;
      parts.unshift(key);
    } while (path = path.parentPath);
    return parts.join(".");
  }
  debug(message) {
    if (!debug.enabled) return;
    debug(`${this.getPathLocation()} ${this.type}: ${message}`);
  }
  toString() {
    return (0, _generator.default)(this.node).code;
  }
  get inList() {
    return !!this.listKey;
  }
  set inList(inList) {
    if (!inList) {
      this.listKey = null;
    }
  }
  get parentKey() {
    return this.listKey || this.key;
  }
};
const methods = {
  findParent: NodePath_ancestry.findParent,
  find: NodePath_ancestry.find,
  getFunctionParent: NodePath_ancestry.getFunctionParent,
  getStatementParent: NodePath_ancestry.getStatementParent,
  getEarliestCommonAncestorFrom: NodePath_ancestry.getEarliestCommonAncestorFrom,
  getDeepestCommonAncestorFrom: NodePath_ancestry.getDeepestCommonAncestorFrom,
  getAncestry: NodePath_ancestry.getAncestry,
  isAncestor: NodePath_ancestry.isAncestor,
  isDescendant: NodePath_ancestry.isDescendant,
  inType: NodePath_ancestry.inType,
  getTypeAnnotation: NodePath_inference.getTypeAnnotation,
  isBaseType: NodePath_inference.isBaseType,
  couldBeBaseType: NodePath_inference.couldBeBaseType,
  baseTypeStrictlyMatches: NodePath_inference.baseTypeStrictlyMatches,
  isGenericType: NodePath_inference.isGenericType,
  replaceWithMultiple: NodePath_replacement.replaceWithMultiple,
  replaceWithSourceString: NodePath_replacement.replaceWithSourceString,
  replaceWith: NodePath_replacement.replaceWith,
  replaceExpressionWithStatements: NodePath_replacement.replaceExpressionWithStatements,
  replaceInline: NodePath_replacement.replaceInline,
  evaluateTruthy: NodePath_evaluation.evaluateTruthy,
  evaluate: NodePath_evaluation.evaluate,
  toComputedKey: NodePath_conversion.toComputedKey,
  ensureBlock: NodePath_conversion.ensureBlock,
  unwrapFunctionEnvironment: NodePath_conversion.unwrapFunctionEnvironment,
  arrowFunctionToExpression: NodePath_conversion.arrowFunctionToExpression,
  splitExportDeclaration: NodePath_conversion.splitExportDeclaration,
  ensureFunctionName: NodePath_conversion.ensureFunctionName,
  matchesPattern: NodePath_introspection.matchesPattern,
  isStatic: NodePath_introspection.isStatic,
  isNodeType: NodePath_introspection.isNodeType,
  canHaveVariableDeclarationOrExpression: NodePath_introspection.canHaveVariableDeclarationOrExpression,
  canSwapBetweenExpressionAndStatement: NodePath_introspection.canSwapBetweenExpressionAndStatement,
  isCompletionRecord: NodePath_introspection.isCompletionRecord,
  isStatementOrBlock: NodePath_introspection.isStatementOrBlock,
  referencesImport: NodePath_introspection.referencesImport,
  getSource: NodePath_introspection.getSource,
  willIMaybeExecuteBefore: NodePath_introspection.willIMaybeExecuteBefore,
  _guessExecutionStatusRelativeTo: NodePath_introspection._guessExecutionStatusRelativeTo,
  resolve: NodePath_introspection.resolve,
  isConstantExpression: NodePath_introspection.isConstantExpression,
  isInStrictMode: NodePath_introspection.isInStrictMode,
  isDenylisted: NodePath_context.isDenylisted,
  visit: NodePath_context.visit,
  skip: NodePath_context.skip,
  skipKey: NodePath_context.skipKey,
  stop: NodePath_context.stop,
  setContext: NodePath_context.setContext,
  requeue: NodePath_context.requeue,
  requeueComputedKeyAndDecorators: NodePath_context.requeueComputedKeyAndDecorators,
  remove: NodePath_removal.remove,
  insertBefore: NodePath_modification.insertBefore,
  insertAfter: NodePath_modification.insertAfter,
  unshiftContainer: NodePath_modification.unshiftContainer,
  pushContainer: NodePath_modification.pushContainer,
  getOpposite: NodePath_family.getOpposite,
  getCompletionRecords: NodePath_family.getCompletionRecords,
  getSibling: NodePath_family.getSibling,
  getPrevSibling: NodePath_family.getPrevSibling,
  getNextSibling: NodePath_family.getNextSibling,
  getAllNextSiblings: NodePath_family.getAllNextSiblings,
  getAllPrevSiblings: NodePath_family.getAllPrevSiblings,
  get: NodePath_family.get,
  getAssignmentIdentifiers: NodePath_family.getAssignmentIdentifiers,
  getBindingIdentifiers: NodePath_family.getBindingIdentifiers,
  getOuterBindingIdentifiers: NodePath_family.getOuterBindingIdentifiers,
  getBindingIdentifierPaths: NodePath_family.getBindingIdentifierPaths,
  getOuterBindingIdentifierPaths: NodePath_family.getOuterBindingIdentifierPaths,
  shareCommentsWithSiblings: NodePath_comments.shareCommentsWithSiblings,
  addComment: NodePath_comments.addComment,
  addComments: NodePath_comments.addComments
};
Object.assign(NodePath_Final.prototype, methods);
NodePath_Final.prototype.arrowFunctionToShadowed = NodePath_conversion[String("arrowFunctionToShadowed")];
Object.assign(NodePath_Final.prototype, {
  has: NodePath_introspection[String("has")],
  is: NodePath_introspection[String("is")],
  isnt: NodePath_introspection[String("isnt")],
  equals: NodePath_introspection[String("equals")],
  hoist: NodePath_modification[String("hoist")],
  updateSiblingKeys: NodePath_modification.updateSiblingKeys,
  call: NodePath_context.call,
  isBlacklisted: NodePath_context[String("isBlacklisted")],
  setScope: NodePath_context.setScope,
  resync: NodePath_context.resync,
  popContext: NodePath_context.popContext,
  pushContext: NodePath_context.pushContext,
  setup: NodePath_context.setup,
  setKey: NodePath_context.setKey
});
NodePath_Final.prototype._guessExecutionStatusRelativeToDifferentFunctions = NodePath_introspection._guessExecutionStatusRelativeTo;
NodePath_Final.prototype._guessExecutionStatusRelativeToDifferentFunctions = NodePath_introspection._guessExecutionStatusRelativeTo;
Object.assign(NodePath_Final.prototype, {
  _getTypeAnnotation: NodePath_inference._getTypeAnnotation,
  _replaceWith: NodePath_replacement._replaceWith,
  _resolve: NodePath_introspection._resolve,
  _call: NodePath_context._call,
  _resyncParent: NodePath_context._resyncParent,
  _resyncKey: NodePath_context._resyncKey,
  _resyncList: NodePath_context._resyncList,
  _resyncRemoved: NodePath_context._resyncRemoved,
  _getQueueContexts: NodePath_context._getQueueContexts,
  _removeFromScope: NodePath_removal._removeFromScope,
  _callRemovalHooks: NodePath_removal._callRemovalHooks,
  _remove: NodePath_removal._remove,
  _markRemoved: NodePath_removal._markRemoved,
  _assertUnremoved: NodePath_removal._assertUnremoved,
  _containerInsert: NodePath_modification._containerInsert,
  _containerInsertBefore: NodePath_modification._containerInsertBefore,
  _containerInsertAfter: NodePath_modification._containerInsertAfter,
  _verifyNodeList: NodePath_modification._verifyNodeList,
  _getKey: NodePath_family._getKey,
  _getPattern: NodePath_family._getPattern
});
for (const type of t.TYPES) {
  const typeKey = `is${type}`;
  const fn = t[typeKey];
  NodePath_Final.prototype[typeKey] = function (opts) {
    return fn(this.node, opts);
  };
  NodePath_Final.prototype[`assert${type}`] = function (opts) {
    if (!fn(this.node, opts)) {
      throw new TypeError(`Expected node path of type ${type}`);
    }
  };
}
Object.assign(NodePath_Final.prototype, NodePath_virtual_types_validator);
for (const type of Object.keys(virtualTypes)) {
  if (type.startsWith("_")) continue;
  if (!t.TYPES.includes(type)) t.TYPES.push(type);
}

//# sourceMappingURL=index.js.map
