"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._containerInsert = _containerInsert;
exports._containerInsertAfter = _containerInsertAfter;
exports._containerInsertBefore = _containerInsertBefore;
exports._verifyNodeList = _verifyNodeList;
exports.insertAfter = insertAfter;
exports.insertBefore = insertBefore;
exports.pushContainer = pushContainer;
exports.unshiftContainer = unshiftContainer;
exports.updateSiblingKeys = updateSiblingKeys;
var _cache = require("../cache.js");
var _index = require("./index.js");
var _context = require("./context.js");
var _removal = require("./removal.js");
var _t = require("@babel/types");
var _hoister = require("./lib/hoister.js");
const {
  arrowFunctionExpression,
  assertExpression,
  assignmentExpression,
  blockStatement,
  callExpression,
  cloneNode,
  expressionStatement,
  isAssignmentExpression,
  isCallExpression,
  isExportNamedDeclaration,
  isExpression,
  isIdentifier,
  isSequenceExpression,
  isSuper,
  thisExpression
} = _t;
function insertBefore(nodes_) {
  _removal._assertUnremoved.call(this);
  const nodes = _verifyNodeList.call(this, nodes_);
  const {
    parentPath,
    parent
  } = this;
  if (parentPath.isExpressionStatement() || parentPath.isLabeledStatement() || isExportNamedDeclaration(parent) || parentPath.isExportDefaultDeclaration() && this.isDeclaration()) {
    return parentPath.insertBefore(nodes);
  } else if (this.isNodeType("Expression") && !this.isJSXElement() || parentPath.isForStatement() && this.key === "init") {
    if (this.node) nodes.push(this.node);
    return this.replaceExpressionWithStatements(nodes);
  } else if (Array.isArray(this.container)) {
    return _containerInsertBefore.call(this, nodes);
  } else if (this.isStatementOrBlock()) {
    const node = this.node;
    const shouldInsertCurrentNode = node && (!this.isExpressionStatement() || node.expression != null);
    const [blockPath] = this.replaceWith(blockStatement(shouldInsertCurrentNode ? [node] : []));
    return blockPath.unshiftContainer("body", nodes);
  } else {
    throw new Error("We don't know what to do with this node type. " + "We were previously a Statement but we can't fit in here?");
  }
}
function _containerInsert(from, nodes) {
  updateSiblingKeys.call(this, from, nodes.length);
  const paths = [];
  this.container.splice(from, 0, ...nodes);
  for (let i = 0; i < nodes.length; i++) {
    var _this$context;
    const to = from + i;
    const path = this.getSibling(to);
    paths.push(path);
    if ((_this$context = this.context) != null && _this$context.queue) {
      _context.pushContext.call(path, this.context);
    }
  }
  const contexts = _context._getQueueContexts.call(this);
  for (const path of paths) {
    _context.setScope.call(path);
    path.debug("Inserted.");
    for (const context of contexts) {
      context.maybeQueue(path, true);
    }
  }
  return paths;
}
function _containerInsertBefore(nodes) {
  return _containerInsert.call(this, this.key, nodes);
}
function _containerInsertAfter(nodes) {
  return _containerInsert.call(this, this.key + 1, nodes);
}
const last = arr => arr[arr.length - 1];
function isHiddenInSequenceExpression(path) {
  return isSequenceExpression(path.parent) && (last(path.parent.expressions) !== path.node || isHiddenInSequenceExpression(path.parentPath));
}
function isAlmostConstantAssignment(node, scope) {
  if (!isAssignmentExpression(node) || !isIdentifier(node.left)) {
    return false;
  }
  const blockScope = scope.getBlockParent();
  return blockScope.hasOwnBinding(node.left.name) && blockScope.getOwnBinding(node.left.name).constantViolations.length <= 1;
}
function insertAfter(nodes_) {
  _removal._assertUnremoved.call(this);
  if (this.isSequenceExpression()) {
    return last(this.get("expressions")).insertAfter(nodes_);
  }
  const nodes = _verifyNodeList.call(this, nodes_);
  const {
    parentPath,
    parent
  } = this;
  if (parentPath.isExpressionStatement() || parentPath.isLabeledStatement() || isExportNamedDeclaration(parent) || parentPath.isExportDefaultDeclaration() && this.isDeclaration()) {
    return parentPath.insertAfter(nodes.map(node => {
      return isExpression(node) ? expressionStatement(node) : node;
    }));
  } else if (this.isNodeType("Expression") && !this.isJSXElement() && !parentPath.isJSXElement() || parentPath.isForStatement() && this.key === "init") {
    const self = this;
    if (self.node) {
      const node = self.node;
      let {
        scope
      } = this;
      if (scope.path.isPattern()) {
        assertExpression(node);
        self.replaceWith(callExpression(arrowFunctionExpression([], node), []));
        self.get("callee.body").insertAfter(nodes);
        return [self];
      }
      if (isHiddenInSequenceExpression(self)) {
        nodes.unshift(node);
      } else if (isCallExpression(node) && isSuper(node.callee)) {
        nodes.unshift(node);
        nodes.push(thisExpression());
      } else if (isAlmostConstantAssignment(node, scope)) {
        nodes.unshift(node);
        nodes.push(cloneNode(node.left));
      } else if (scope.isPure(node, true)) {
        nodes.push(node);
      } else {
        if (parentPath.isMethod({
          computed: true,
          key: node
        })) {
          scope = scope.parent;
        }
        const temp = scope.generateDeclaredUidIdentifier();
        nodes.unshift(expressionStatement(assignmentExpression("=", cloneNode(temp), node)));
        nodes.push(expressionStatement(cloneNode(temp)));
      }
    }
    return this.replaceExpressionWithStatements(nodes);
  } else if (Array.isArray(this.container)) {
    return _containerInsertAfter.call(this, nodes);
  } else if (this.isStatementOrBlock()) {
    const node = this.node;
    const shouldInsertCurrentNode = node && (!this.isExpressionStatement() || node.expression != null);
    const [blockPath] = this.replaceWith(blockStatement(shouldInsertCurrentNode ? [node] : []));
    return blockPath.pushContainer("body", nodes);
  } else {
    throw new Error("We don't know what to do with this node type. " + "We were previously a Statement but we can't fit in here?");
  }
}
function updateSiblingKeys(fromIndex, incrementBy) {
  if (!this.parent) return;
  const paths = (0, _cache.getCachedPaths)(this);
  if (!paths) return;
  for (const [, path] of paths) {
    if (typeof path.key === "number" && path.container === this.container && path.key >= fromIndex) {
      path.key += incrementBy;
    }
  }
}
function _verifyNodeList(nodes) {
  if (!nodes) {
    return [];
  }
  if (!Array.isArray(nodes)) {
    nodes = [nodes];
  }
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    let msg;
    if (!node) {
      msg = "has falsy node";
    } else if (typeof node !== "object") {
      msg = "contains a non-object node";
    } else if (!node.type) {
      msg = "without a type";
    } else if (node instanceof _index.default) {
      msg = "has a NodePath when it expected a raw object";
    }
    if (msg) {
      const type = Array.isArray(node) ? "array" : typeof node;
      throw new Error(`Node list ${msg} with the index of ${i} and type of ${type}`);
    }
  }
  return nodes;
}
function unshiftContainer(listKey, nodes) {
  _removal._assertUnremoved.call(this);
  const verifiedNodes = _verifyNodeList.call(this, nodes);
  const container = this.node[listKey];
  const path = _index.default.get({
    parentPath: this,
    parent: this.node,
    container,
    listKey,
    key: 0
  }).setContext(this.context);
  return _containerInsertBefore.call(path, verifiedNodes);
}
function pushContainer(listKey, nodes) {
  _removal._assertUnremoved.call(this);
  const verifiedNodes = _verifyNodeList.call(this, nodes);
  const container = this.node[listKey];
  const path = _index.default.get({
    parentPath: this,
    parent: this.node,
    container,
    listKey,
    key: container.length
  }).setContext(this.context);
  return path.replaceWithMultiple(verifiedNodes);
}
exports.hoist = function hoist(scope = this.scope) {
  const hoister = new _hoister.default(this, scope);
  return hoister.run();
};

//# sourceMappingURL=modification.js.map
