"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._replaceWith = _replaceWith;
exports.replaceExpressionWithStatements = replaceExpressionWithStatements;
exports.replaceInline = replaceInline;
exports.replaceWith = replaceWith;
exports.replaceWithMultiple = replaceWithMultiple;
exports.replaceWithSourceString = replaceWithSourceString;
var _codeFrame = require("@babel/code-frame");
var _index = require("../index.js");
var _index2 = require("./index.js");
var _cache = require("../cache.js");
var _modification = require("./modification.js");
var _parser = require("@babel/parser");
var _t = require("@babel/types");
var _context = require("./context.js");
const {
  FUNCTION_TYPES,
  arrowFunctionExpression,
  assignmentExpression,
  awaitExpression,
  blockStatement,
  buildUndefinedNode,
  callExpression,
  cloneNode,
  conditionalExpression,
  expressionStatement,
  getBindingIdentifiers,
  identifier,
  inheritLeadingComments,
  inheritTrailingComments,
  inheritsComments,
  isBlockStatement,
  isEmptyStatement,
  isExpression,
  isExpressionStatement,
  isIfStatement,
  isProgram,
  isStatement,
  isVariableDeclaration,
  removeComments,
  returnStatement,
  sequenceExpression,
  validate,
  yieldExpression
} = _t;
function replaceWithMultiple(nodes) {
  var _getCachedPaths;
  _context.resync.call(this);
  const verifiedNodes = _modification._verifyNodeList.call(this, nodes);
  inheritLeadingComments(verifiedNodes[0], this.node);
  inheritTrailingComments(verifiedNodes[verifiedNodes.length - 1], this.node);
  (_getCachedPaths = (0, _cache.getCachedPaths)(this)) == null || _getCachedPaths.delete(this.node);
  this.node = this.container[this.key] = null;
  const paths = this.insertAfter(nodes);
  if (this.node) {
    this.requeue();
  } else {
    this.remove();
  }
  return paths;
}
function replaceWithSourceString(replacement) {
  _context.resync.call(this);
  let ast;
  try {
    replacement = `(${replacement})`;
    ast = (0, _parser.parse)(replacement);
  } catch (err) {
    const loc = err.loc;
    if (loc) {
      err.message += " - make sure this is an expression.\n" + (0, _codeFrame.codeFrameColumns)(replacement, {
        start: {
          line: loc.line,
          column: loc.column + 1
        }
      });
      err.code = "BABEL_REPLACE_SOURCE_ERROR";
    }
    throw err;
  }
  const expressionAST = ast.program.body[0].expression;
  _index.default.removeProperties(expressionAST);
  return this.replaceWith(expressionAST);
}
function replaceWith(replacementPath) {
  _context.resync.call(this);
  if (this.removed) {
    throw new Error("You can't replace this node, we've already removed it");
  }
  let replacement = replacementPath instanceof _index2.default ? replacementPath.node : replacementPath;
  if (!replacement) {
    throw new Error("You passed `path.replaceWith()` a falsy node, use `path.remove()` instead");
  }
  if (this.node === replacement) {
    return [this];
  }
  if (this.isProgram() && !isProgram(replacement)) {
    throw new Error("You can only replace a Program root node with another Program node");
  }
  if (Array.isArray(replacement)) {
    throw new Error("Don't use `path.replaceWith()` with an array of nodes, use `path.replaceWithMultiple()`");
  }
  if (typeof replacement === "string") {
    throw new Error("Don't use `path.replaceWith()` with a source string, use `path.replaceWithSourceString()`");
  }
  let nodePath = "";
  if (this.isNodeType("Statement") && isExpression(replacement)) {
    if (!this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(replacement) && !this.parentPath.isExportDefaultDeclaration()) {
      replacement = expressionStatement(replacement);
      nodePath = "expression";
    }
  }
  if (this.isNodeType("Expression") && isStatement(replacement)) {
    if (!this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(replacement)) {
      return this.replaceExpressionWithStatements([replacement]);
    }
  }
  const oldNode = this.node;
  if (oldNode) {
    inheritsComments(replacement, oldNode);
    removeComments(oldNode);
  }
  _replaceWith.call(this, replacement);
  this.type = replacement.type;
  _context.setScope.call(this);
  this.requeue();
  return [nodePath ? this.get(nodePath) : this];
}
function _replaceWith(node) {
  var _getCachedPaths2;
  if (!this.container) {
    throw new ReferenceError("Container is falsy");
  }
  if (this.inList) {
    validate(this.parent, this.key, [node]);
  } else {
    validate(this.parent, this.key, node);
  }
  this.debug(`Replace with ${node == null ? void 0 : node.type}`);
  (_getCachedPaths2 = (0, _cache.getCachedPaths)(this)) == null || _getCachedPaths2.set(node, this).delete(this.node);
  this.node = node;
  this.container[this.key] = node;
}
function replaceExpressionWithStatements(nodes) {
  _context.resync.call(this);
  const declars = [];
  const nodesAsSingleExpression = gatherSequenceExpressions(nodes, declars);
  if (nodesAsSingleExpression) {
    for (const id of declars) this.scope.push({
      id
    });
    return this.replaceWith(nodesAsSingleExpression)[0].get("expressions");
  }
  const functionParent = this.getFunctionParent();
  const isParentAsync = functionParent == null ? void 0 : functionParent.node.async;
  const isParentGenerator = functionParent == null ? void 0 : functionParent.node.generator;
  const container = arrowFunctionExpression([], blockStatement(nodes));
  this.replaceWith(callExpression(container, []));
  const callee = this.get("callee");
  callee.get("body").scope.hoistVariables(id => this.scope.push({
    id
  }));
  const completionRecords = callee.getCompletionRecords();
  for (const path of completionRecords) {
    if (!path.isExpressionStatement()) continue;
    const loop = path.findParent(path => path.isLoop());
    if (loop) {
      let uid = loop.getData("expressionReplacementReturnUid");
      if (!uid) {
        uid = callee.scope.generateDeclaredUidIdentifier("ret");
        callee.get("body").pushContainer("body", returnStatement(cloneNode(uid)));
        loop.setData("expressionReplacementReturnUid", uid);
      } else {
        uid = identifier(uid.name);
      }
      path.get("expression").replaceWith(assignmentExpression("=", cloneNode(uid), path.node.expression));
    } else {
      path.replaceWith(returnStatement(path.node.expression));
    }
  }
  callee.arrowFunctionToExpression();
  const newCallee = callee;
  const needToAwaitFunction = isParentAsync && _index.default.hasType(newCallee.node.body, "AwaitExpression", FUNCTION_TYPES);
  const needToYieldFunction = isParentGenerator && _index.default.hasType(newCallee.node.body, "YieldExpression", FUNCTION_TYPES);
  if (needToAwaitFunction) {
    newCallee.set("async", true);
    if (!needToYieldFunction) {
      this.replaceWith(awaitExpression(this.node));
    }
  }
  if (needToYieldFunction) {
    newCallee.set("generator", true);
    this.replaceWith(yieldExpression(this.node, true));
  }
  return newCallee.get("body.body");
}
function gatherSequenceExpressions(nodes, declars) {
  const exprs = [];
  let ensureLastUndefined = true;
  for (const node of nodes) {
    if (!isEmptyStatement(node)) {
      ensureLastUndefined = false;
    }
    if (isExpression(node)) {
      exprs.push(node);
    } else if (isExpressionStatement(node)) {
      exprs.push(node.expression);
    } else if (isVariableDeclaration(node)) {
      if (node.kind !== "var") return;
      for (const declar of node.declarations) {
        const bindings = getBindingIdentifiers(declar);
        for (const key of Object.keys(bindings)) {
          declars.push(cloneNode(bindings[key]));
        }
        if (declar.init) {
          exprs.push(assignmentExpression("=", declar.id, declar.init));
        }
      }
      ensureLastUndefined = true;
    } else if (isIfStatement(node)) {
      const consequent = node.consequent ? gatherSequenceExpressions([node.consequent], declars) : buildUndefinedNode();
      const alternate = node.alternate ? gatherSequenceExpressions([node.alternate], declars) : buildUndefinedNode();
      if (!consequent || !alternate) return;
      exprs.push(conditionalExpression(node.test, consequent, alternate));
    } else if (isBlockStatement(node)) {
      const body = gatherSequenceExpressions(node.body, declars);
      if (!body) return;
      exprs.push(body);
    } else if (isEmptyStatement(node)) {
      if (nodes.indexOf(node) === 0) {
        ensureLastUndefined = true;
      }
    } else {
      return;
    }
  }
  if (ensureLastUndefined) exprs.push(buildUndefinedNode());
  if (exprs.length === 1) {
    return exprs[0];
  } else {
    return sequenceExpression(exprs);
  }
}
function replaceInline(nodes) {
  _context.resync.call(this);
  if (Array.isArray(nodes)) {
    if (Array.isArray(this.container)) {
      nodes = _modification._verifyNodeList.call(this, nodes);
      const paths = _modification._containerInsertAfter.call(this, nodes);
      this.remove();
      return paths;
    } else {
      return this.replaceWithMultiple(nodes);
    }
  } else {
    return this.replaceWith(nodes);
  }
}

//# sourceMappingURL=replacement.js.map
