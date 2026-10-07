"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var t = require("@babel/types");
var _t = t;
var _traverseNode = require("../../traverse-node.js");
var _visitors = require("../../visitors.js");
var _context = require("../../path/context.js");
const {
  getAssignmentIdentifiers
} = _t;
const renameVisitor = {
  ReferencedIdentifier({
    node
  }, state) {
    if (node.name === state.oldName) {
      node.name = state.newName;
    }
  },
  Scope(path, state) {
    if (!path.scope.bindingIdentifierEquals(state.oldName, state.binding.identifier)) {
      path.skip();
      if (path.isMethod()) {
        if (!path.requeueComputedKeyAndDecorators) {
          _context.requeueComputedKeyAndDecorators.call(path);
        } else {
          path.requeueComputedKeyAndDecorators();
        }
      }
      if (path.isSwitchStatement()) {
        path.context.maybeQueue(path.get("discriminant"));
      }
    }
  },
  ObjectProperty({
    node,
    scope
  }, state) {
    const {
      name
    } = node.key;
    if (node.shorthand && (name === state.oldName || name === state.newName) && scope.getBindingIdentifier(name) === state.binding.identifier) {
      var _node$extra;
      node.shorthand = false;
      if ((_node$extra = node.extra) != null && _node$extra.shorthand) node.extra.shorthand = false;
    }
  },
  "AssignmentExpression|Declaration|VariableDeclarator"(path, state) {
    if (path.isVariableDeclaration()) return;
    const ids = path.isAssignmentExpression() ? getAssignmentIdentifiers(path.node) : path.getOuterBindingIdentifiers();
    for (const name in ids) {
      if (name === state.oldName) ids[name].name = state.newName;
    }
  }
};
class Renamer {
  constructor(binding, oldName, newName) {
    this.newName = newName;
    this.oldName = oldName;
    this.binding = binding;
  }
  maybeConvertFromExportDeclaration(parentDeclar) {
    const maybeExportDeclar = parentDeclar.parentPath;
    if (!maybeExportDeclar.isExportDeclaration()) {
      return;
    }
    if (maybeExportDeclar.isExportDefaultDeclaration()) {
      const {
        declaration
      } = maybeExportDeclar.node;
      if (t.isDeclaration(declaration) && !declaration.id) {
        return;
      }
    }
    if (maybeExportDeclar.isExportAllDeclaration()) {
      return;
    }
    maybeExportDeclar.splitExportDeclaration();
  }
  maybeConvertFromClassFunctionDeclaration(path) {
    return path;
  }
  maybeConvertFromClassFunctionExpression(path) {
    return path;
  }
  rename() {
    const {
      binding,
      oldName,
      newName
    } = this;
    const {
      scope,
      path
    } = binding;
    const parentDeclar = path.find(path => path.isDeclaration() || path.isFunctionExpression() || path.isClassExpression());
    if (parentDeclar) {
      const bindingIds = parentDeclar.getOuterBindingIdentifiers();
      if (bindingIds[oldName] === binding.identifier) {
        this.maybeConvertFromExportDeclaration(parentDeclar);
      }
    }
    const blockToTraverse = arguments[0] || scope.block;
    const skipKeys = {
      discriminant: true
    };
    if (t.isMethod(blockToTraverse)) {
      if (blockToTraverse.computed) {
        skipKeys.key = true;
      }
      if (!t.isObjectMethod(blockToTraverse)) {
        skipKeys.decorators = true;
      }
    }
    (0, _traverseNode.traverseNode)(blockToTraverse, (0, _visitors.explode)(renameVisitor), scope, this, scope.path, skipKeys);
    if (!arguments[0]) {
      scope.removeOwnBinding(oldName);
      scope.bindings[newName] = binding;
      this.binding.identifier.name = newName;
    }
    if (parentDeclar) {
      this.maybeConvertFromClassFunctionDeclaration(path);
      this.maybeConvertFromClassFunctionExpression(path);
    }
  }
}
exports.default = Renamer;

//# sourceMappingURL=renamer.js.map
