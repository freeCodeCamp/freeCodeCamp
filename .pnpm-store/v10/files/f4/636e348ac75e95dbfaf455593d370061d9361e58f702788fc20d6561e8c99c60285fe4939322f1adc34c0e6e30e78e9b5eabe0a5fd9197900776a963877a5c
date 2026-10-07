"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _t = require("@babel/types");
var _t2 = _t;
const {
  react
} = _t;
const {
  cloneNode,
  jsxExpressionContainer,
  variableDeclaration,
  variableDeclarator
} = _t2;
const referenceVisitor = {
  ReferencedIdentifier(path, state) {
    if (path.isJSXIdentifier() && react.isCompatTag(path.node.name) && !path.parentPath.isJSXMemberExpression()) {
      return;
    }
    if (path.node.name === "this") {
      let scope = path.scope;
      do {
        if (scope.path.isFunction() && !scope.path.isArrowFunctionExpression()) {
          break;
        }
      } while (scope = scope.parent);
      if (scope) state.breakOnScopePaths.push(scope.path);
    }
    const binding = path.scope.getBinding(path.node.name);
    if (!binding) return;
    for (const violation of binding.constantViolations) {
      if (violation.scope !== binding.path.scope) {
        state.mutableBinding = true;
        path.stop();
        return;
      }
    }
    if (binding !== state.scope.getBinding(path.node.name)) return;
    state.bindings[path.node.name] = binding;
  }
};
class PathHoister {
  constructor(path, scope) {
    this.breakOnScopePaths = void 0;
    this.bindings = void 0;
    this.mutableBinding = void 0;
    this.scopes = void 0;
    this.scope = void 0;
    this.path = void 0;
    this.attachAfter = void 0;
    this.breakOnScopePaths = [];
    this.bindings = {};
    this.mutableBinding = false;
    this.scopes = [];
    this.scope = scope;
    this.path = path;
    this.attachAfter = false;
  }
  isCompatibleScope(scope) {
    for (const key of Object.keys(this.bindings)) {
      const binding = this.bindings[key];
      if (!scope.bindingIdentifierEquals(key, binding.identifier)) {
        return false;
      }
    }
    return true;
  }
  getCompatibleScopes() {
    let scope = this.path.scope;
    do {
      if (this.isCompatibleScope(scope)) {
        this.scopes.push(scope);
      } else {
        break;
      }
      if (this.breakOnScopePaths.includes(scope.path)) {
        break;
      }
    } while (scope = scope.parent);
  }
  getAttachmentPath() {
    let path = this._getAttachmentPath();
    if (!path) return;
    let targetScope = path.scope;
    if (targetScope.path === path) {
      targetScope = path.scope.parent;
    }
    if (targetScope.path.isProgram() || targetScope.path.isFunction()) {
      for (const name of Object.keys(this.bindings)) {
        if (!targetScope.hasOwnBinding(name)) continue;
        const binding = this.bindings[name];
        if (binding.kind === "param" || binding.path.parentKey === "params") {
          continue;
        }
        const bindingParentPath = this.getAttachmentParentForPath(binding.path);
        if (bindingParentPath.key >= path.key) {
          this.attachAfter = true;
          path = binding.path;
          for (const violationPath of binding.constantViolations) {
            if (this.getAttachmentParentForPath(violationPath).key > path.key) {
              path = violationPath;
            }
          }
        }
      }
    }
    return path;
  }
  _getAttachmentPath() {
    const scopes = this.scopes;
    const scope = scopes.pop();
    if (!scope) return;
    if (scope.path.isFunction()) {
      if (this.hasOwnParamBindings(scope)) {
        if (this.scope === scope) return;
        const bodies = scope.path.get("body").get("body");
        for (let i = 0; i < bodies.length; i++) {
          if (bodies[i].node._blockHoist) continue;
          return bodies[i];
        }
      } else {
        return this.getNextScopeAttachmentParent();
      }
    } else if (scope.path.isProgram()) {
      return this.getNextScopeAttachmentParent();
    }
  }
  getNextScopeAttachmentParent() {
    const scope = this.scopes.pop();
    if (scope) return this.getAttachmentParentForPath(scope.path);
  }
  getAttachmentParentForPath(path) {
    do {
      if (!path.parentPath || Array.isArray(path.container) && path.isStatement()) {
        return path;
      }
    } while (path = path.parentPath);
    return path;
  }
  hasOwnParamBindings(scope) {
    for (const name of Object.keys(this.bindings)) {
      if (!scope.hasOwnBinding(name)) continue;
      const binding = this.bindings[name];
      if (binding.kind === "param" && binding.constant) return true;
    }
    return false;
  }
  run() {
    this.path.traverse(referenceVisitor, this);
    if (this.mutableBinding) return;
    this.getCompatibleScopes();
    const attachTo = this.getAttachmentPath();
    if (!attachTo) return;
    if (attachTo.getFunctionParent() === this.path.getFunctionParent()) return;
    let uid = attachTo.scope.generateUidIdentifier("ref");
    const declarator = variableDeclarator(uid, this.path.node);
    const insertFn = this.attachAfter ? "insertAfter" : "insertBefore";
    const [attached] = attachTo[insertFn]([attachTo.isVariableDeclarator() ? declarator : variableDeclaration("var", [declarator])]);
    const parent = this.path.parentPath;
    if (parent.isJSXElement() && this.path.container === parent.node.children) {
      uid = jsxExpressionContainer(uid);
    }
    this.path.replaceWith(cloneNode(uid));
    return attached.isVariableDeclarator() ? attached.get("init") : attached.get("declarations.0.init");
  }
}
exports.default = PathHoister;

//# sourceMappingURL=hoister.js.map
