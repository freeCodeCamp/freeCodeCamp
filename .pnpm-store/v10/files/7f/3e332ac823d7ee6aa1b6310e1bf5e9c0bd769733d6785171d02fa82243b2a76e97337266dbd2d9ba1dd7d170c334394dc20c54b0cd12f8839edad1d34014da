"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class Binding {
  constructor({
    identifier,
    scope,
    path,
    kind
  }) {
    this.identifier = void 0;
    this.scope = void 0;
    this.path = void 0;
    this.kind = void 0;
    this.constantViolations = [];
    this.constant = true;
    this.referencePaths = [];
    this.referenced = false;
    this.references = 0;
    this.identifier = identifier;
    this.scope = scope;
    this.path = path;
    this.kind = kind;
    if ((kind === "var" || kind === "hoisted") && isInitInLoop(path)) {
      this.reassign(path);
    }
    this.clearValue();
  }
  deoptValue() {
    this.clearValue();
    this.hasDeoptedValue = true;
  }
  setValue(value) {
    if (this.hasDeoptedValue) return;
    this.hasValue = true;
    this.value = value;
  }
  clearValue() {
    this.hasDeoptedValue = false;
    this.hasValue = false;
    this.value = null;
  }
  reassign(path) {
    this.constant = false;
    if (this.constantViolations.includes(path)) {
      return;
    }
    this.constantViolations.push(path);
  }
  reference(path) {
    if (this.referencePaths.includes(path)) {
      return;
    }
    this.referenced = true;
    this.references++;
    this.referencePaths.push(path);
  }
  dereference() {
    this.references--;
    this.referenced = !!this.references;
  }
}
exports.default = Binding;
function isInitInLoop(path) {
  const isFunctionDeclarationOrHasInit = !path.isVariableDeclarator() || path.node.init;
  for (let {
    parentPath,
    key
  } = path; parentPath; {
    parentPath,
    key
  } = parentPath) {
    if (parentPath.isFunctionParent()) return false;
    if (key === "left" && parentPath.isForXStatement() || isFunctionDeclarationOrHasInit && key === "body" && parentPath.isLoop()) {
      return true;
    }
  }
  return false;
}

//# sourceMappingURL=binding.js.map
