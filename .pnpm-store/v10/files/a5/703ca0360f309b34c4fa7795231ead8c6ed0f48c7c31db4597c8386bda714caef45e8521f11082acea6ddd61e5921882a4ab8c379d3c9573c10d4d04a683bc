"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renamer = require("./lib/renamer.js");
var _index = require("../index.js");
var _traverseForScope = require("./traverseForScope.js");
var _binding = require("./binding.js");
var _t = require("@babel/types");
var t = _t;
var _cache = require("../cache.js");
const globalsBuiltinLower = require("@babel/helper-globals/data/builtin-lower.json"),
  globalsBuiltinUpper = require("@babel/helper-globals/data/builtin-upper.json");
const {
  assignmentExpression,
  callExpression,
  cloneNode,
  getBindingIdentifiers,
  identifier,
  isArrayExpression,
  isBinary,
  isCallExpression,
  isClass,
  isClassBody,
  isClassDeclaration,
  isExportAllDeclaration,
  isExportDefaultDeclaration,
  isExportNamedDeclaration,
  isFunctionDeclaration,
  isIdentifier,
  isImportDeclaration,
  isLiteral,
  isMemberExpression,
  isMethod,
  isModuleSpecifier,
  isNullLiteral,
  isObjectExpression,
  isProperty,
  isPureish,
  isRegExpLiteral,
  isSuper,
  isTaggedTemplateExpression,
  isTemplateLiteral,
  isThisExpression,
  isUnaryExpression,
  isVariableDeclaration,
  expressionStatement,
  matchesPattern,
  memberExpression,
  numericLiteral,
  toIdentifier,
  variableDeclaration,
  variableDeclarator,
  isObjectProperty,
  isTopicReference,
  isMetaProperty,
  isPrivateName,
  isExportDeclaration,
  buildUndefinedNode,
  sequenceExpression
} = _t;
function gatherNodeParts(node, parts) {
  switch (node == null ? void 0 : node.type) {
    default:
      if (isImportDeclaration(node) || isExportDeclaration(node)) {
        var _node$specifiers;
        if ((isExportAllDeclaration(node) || isExportNamedDeclaration(node) || isImportDeclaration(node)) && node.source) {
          gatherNodeParts(node.source, parts);
        } else if ((isExportNamedDeclaration(node) || isImportDeclaration(node)) && (_node$specifiers = node.specifiers) != null && _node$specifiers.length) {
          for (const e of node.specifiers) gatherNodeParts(e, parts);
        } else if ((isExportDefaultDeclaration(node) || isExportNamedDeclaration(node)) && node.declaration) {
          gatherNodeParts(node.declaration, parts);
        }
      } else if (isModuleSpecifier(node)) {
        gatherNodeParts(node.local, parts);
      } else if (isLiteral(node) && !isNullLiteral(node) && !isRegExpLiteral(node) && !isTemplateLiteral(node)) {
        parts.push(node.value);
      }
      break;
    case "MemberExpression":
    case "OptionalMemberExpression":
    case "JSXMemberExpression":
      gatherNodeParts(node.object, parts);
      gatherNodeParts(node.property, parts);
      break;
    case "Identifier":
    case "JSXIdentifier":
      parts.push(node.name);
      break;
    case "CallExpression":
    case "OptionalCallExpression":
    case "NewExpression":
      gatherNodeParts(node.callee, parts);
      break;
    case "ObjectExpression":
    case "ObjectPattern":
      for (const e of node.properties) {
        gatherNodeParts(e, parts);
      }
      break;
    case "SpreadElement":
    case "RestElement":
      gatherNodeParts(node.argument, parts);
      break;
    case "ObjectProperty":
    case "ObjectMethod":
    case "ClassProperty":
    case "ClassMethod":
    case "ClassPrivateProperty":
    case "ClassPrivateMethod":
      gatherNodeParts(node.key, parts);
      break;
    case "ThisExpression":
      parts.push("this");
      break;
    case "Super":
      parts.push("super");
      break;
    case "Import":
    case "ImportExpression":
      parts.push("import");
      break;
    case "DoExpression":
      parts.push("do");
      break;
    case "YieldExpression":
      parts.push("yield");
      gatherNodeParts(node.argument, parts);
      break;
    case "AwaitExpression":
      parts.push("await");
      gatherNodeParts(node.argument, parts);
      break;
    case "AssignmentExpression":
      gatherNodeParts(node.left, parts);
      break;
    case "VariableDeclarator":
      gatherNodeParts(node.id, parts);
      break;
    case "FunctionExpression":
    case "FunctionDeclaration":
    case "ClassExpression":
    case "ClassDeclaration":
      gatherNodeParts(node.id, parts);
      break;
    case "PrivateName":
      gatherNodeParts(node.id, parts);
      break;
    case "ParenthesizedExpression":
      gatherNodeParts(node.expression, parts);
      break;
    case "UnaryExpression":
    case "UpdateExpression":
      gatherNodeParts(node.argument, parts);
      break;
    case "MetaProperty":
      gatherNodeParts(node.meta, parts);
      gatherNodeParts(node.property, parts);
      break;
    case "JSXElement":
      gatherNodeParts(node.openingElement, parts);
      break;
    case "JSXOpeningElement":
      gatherNodeParts(node.name, parts);
      break;
    case "JSXFragment":
      gatherNodeParts(node.openingFragment, parts);
      break;
    case "JSXOpeningFragment":
      parts.push("Fragment");
      break;
    case "JSXNamespacedName":
      gatherNodeParts(node.namespace, parts);
      gatherNodeParts(node.name, parts);
      break;
  }
}
function resetScope(scope) {
  scope.references = Object.create(null);
  scope.uids = Object.create(null);
  scope.bindings = Object.create(null);
  scope.globals = Object.create(null);
}
function isAnonymousFunctionExpression(path) {
  return path.isFunctionExpression() && !path.node.id || path.isArrowFunctionExpression();
}
var NOT_LOCAL_BINDING = Symbol.for("should not be considered a local binding");
const collectorVisitor = {
  ForStatement(path) {
    const declar = path.get("init");
    if (declar.isVar()) {
      const {
        scope
      } = path;
      const parentScope = scope.getFunctionParent() || scope.getProgramParent();
      parentScope.registerBinding("var", declar);
    }
  },
  Declaration(path) {
    if (path.isBlockScoped()) return;
    if (path.isImportDeclaration()) return;
    if (path.isExportDeclaration()) return;
    const parent = path.scope.getFunctionParent() || path.scope.getProgramParent();
    parent.registerDeclaration(path);
  },
  ImportDeclaration(path) {
    const parent = path.scope.getBlockParent();
    parent.registerDeclaration(path);
  },
  TSImportEqualsDeclaration(path) {
    const parent = path.scope.getBlockParent();
    parent.registerDeclaration(path);
  },
  ReferencedIdentifier(path, state) {
    if (t.isTSQualifiedName(path.parent) && path.parent.right === path.node) {
      return;
    }
    if (path.parentPath.isTSImportEqualsDeclaration()) return;
    state.references.push(path);
  },
  ForXStatement(path, state) {
    const left = path.get("left");
    if (left.isPattern() || left.isIdentifier()) {
      state.constantViolations.push(path);
    } else if (left.isVar()) {
      const {
        scope
      } = path;
      const parentScope = scope.getFunctionParent() || scope.getProgramParent();
      parentScope.registerBinding("var", left);
    }
  },
  ExportDeclaration: {
    exit(path) {
      const {
        node,
        scope
      } = path;
      if (isExportAllDeclaration(node)) return;
      const declar = node.declaration;
      if (isClassDeclaration(declar) || isFunctionDeclaration(declar)) {
        const id = declar.id;
        if (!id) return;
        const binding = scope.getBinding(id.name);
        binding == null || binding.reference(path);
      } else if (isVariableDeclaration(declar)) {
        for (const decl of declar.declarations) {
          for (const name of Object.keys(getBindingIdentifiers(decl))) {
            const binding = scope.getBinding(name);
            binding == null || binding.reference(path);
          }
        }
      }
    }
  },
  LabeledStatement(path) {
    path.scope.getBlockParent().registerDeclaration(path);
  },
  AssignmentExpression(path, state) {
    state.assignments.push(path);
  },
  UpdateExpression(path, state) {
    state.constantViolations.push(path);
  },
  UnaryExpression(path, state) {
    if (path.node.operator === "delete") {
      state.constantViolations.push(path);
    }
  },
  BlockScoped(path) {
    let scope = path.scope;
    if (scope.path === path) scope = scope.parent;
    const parent = scope.getBlockParent();
    parent.registerDeclaration(path);
    if (path.isClassDeclaration() && path.node.id) {
      const id = path.node.id;
      const name = id.name;
      path.scope.bindings[name] = path.scope.parent.getBinding(name);
    }
  },
  CatchClause(path) {
    path.scope.registerBinding("let", path);
  },
  Function(path) {
    const params = path.get("params");
    for (const param of params) {
      path.scope.registerBinding("param", param);
    }
    if (path.isFunctionExpression() && path.node.id && !path.node.id[NOT_LOCAL_BINDING]) {
      path.scope.registerBinding("local", path.get("id"), path);
    }
  },
  ClassExpression(path) {
    if (path.node.id && !path.node.id[NOT_LOCAL_BINDING]) {
      path.scope.registerBinding("local", path.get("id"), path);
    }
  },
  TSTypeAnnotation(path) {
    path.skip();
  }
};
let scopeVisitor;
let uid = 0;
class Scope {
  constructor(path) {
    this.uid = void 0;
    this.path = void 0;
    this.block = void 0;
    this.inited = void 0;
    this.labels = void 0;
    this.bindings = void 0;
    this.referencesSet = void 0;
    this.globals = void 0;
    this.uidsSet = void 0;
    this.data = void 0;
    this.crawling = void 0;
    const {
      node
    } = path;
    const cached = _cache.scope.get(node);
    if ((cached == null ? void 0 : cached.path) === path) {
      return cached;
    }
    _cache.scope.set(node, this);
    this.uid = uid++;
    this.block = node;
    this.path = path;
    this.labels = new Map();
    this.inited = false;
    Object.defineProperties(this, {
      references: {
        enumerable: true,
        configurable: true,
        writable: true,
        value: Object.create(null)
      },
      uids: {
        enumerable: true,
        configurable: true,
        writable: true,
        value: Object.create(null)
      }
    });
  }
  get parent() {
    var _parent;
    let parent,
      path = this.path;
    do {
      var _path;
      const shouldSkip = path.key === "key" || path.listKey === "decorators";
      path = path.parentPath;
      if (shouldSkip && path.isMethod()) path = path.parentPath;
      if ((_path = path) != null && _path.isScope()) parent = path;
    } while (path && !parent);
    return (_parent = parent) == null ? void 0 : _parent.scope;
  }
  get references() {
    throw new Error("Scope#references is not available in Babel 8. Use Scope#referencesSet instead.");
  }
  get uids() {
    throw new Error("Scope#uids is not available in Babel 8. Use Scope#uidsSet instead.");
  }
  generateDeclaredUidIdentifier(name) {
    const id = this.generateUidIdentifier(name);
    this.push({
      id
    });
    return cloneNode(id);
  }
  generateUidIdentifier(name) {
    return identifier(this.generateUid(name));
  }
  generateUid(name = "temp") {
    name = toIdentifier(name).replace(/^_+/, "").replace(/\d+$/g, "");
    let uid;
    let i = 0;
    do {
      uid = `_${name}`;
      if (i >= 11) uid += i - 1;else if (i >= 9) uid += i - 9;else if (i >= 1) uid += i + 1;
      i++;
    } while (this.hasLabel(uid) || this.hasBinding(uid) || this.hasGlobal(uid) || this.hasReference(uid));
    const program = this.getProgramParent();
    program.references[uid] = true;
    program.uids[uid] = true;
    return uid;
  }
  generateUidBasedOnNode(node, defaultName) {
    const parts = [];
    gatherNodeParts(node, parts);
    let id = parts.join("$");
    id = id.replace(/^_/, "") || defaultName || "ref";
    return this.generateUid(id.slice(0, 20));
  }
  generateUidIdentifierBasedOnNode(node, defaultName) {
    return identifier(this.generateUidBasedOnNode(node, defaultName));
  }
  isStatic(node) {
    if (isThisExpression(node) || isSuper(node) || isTopicReference(node)) {
      return true;
    }
    if (isIdentifier(node)) {
      const binding = this.getBinding(node.name);
      if (binding) {
        return binding.constant;
      } else {
        return this.hasBinding(node.name);
      }
    }
    return false;
  }
  maybeGenerateMemoised(node, dontPush) {
    if (this.isStatic(node)) {
      return null;
    } else {
      const id = this.generateUidIdentifierBasedOnNode(node);
      if (!dontPush) {
        this.push({
          id
        });
        return cloneNode(id);
      }
      return id;
    }
  }
  checkBlockScopedCollisions(local, kind, name, id) {
    if (kind === "param") return;
    if (local.kind === "local") return;
    const duplicate = kind === "let" || local.kind === "let" || local.kind === "const" || local.kind === "module" || local.kind === "param" && kind === "const";
    if (duplicate) {
      throw this.path.hub.buildError(id, `Duplicate declaration "${name}"`, TypeError);
    }
  }
  rename(oldName, newName) {
    const binding = this.getBinding(oldName);
    if (binding) {
      newName || (newName = this.generateUidIdentifier(oldName).name);
      const renamer = new _renamer.default(binding, oldName, newName);
      renamer.rename(arguments[2]);
    }
  }
  dump() {
    const sep = "-".repeat(60);
    console.log(sep);
    let scope = this;
    do {
      console.log("#", scope.block.type);
      for (const name of Object.keys(scope.bindings)) {
        const binding = scope.bindings[name];
        console.log(" -", name, {
          constant: binding.constant,
          references: binding.references,
          violations: binding.constantViolations.length,
          kind: binding.kind
        });
      }
    } while (scope = scope.parent);
    console.log(sep);
  }
  hasLabel(name) {
    return !!this.getLabel(name);
  }
  getLabel(name) {
    return this.labels.get(name);
  }
  registerLabel(path) {
    this.labels.set(path.node.label.name, path);
  }
  registerDeclaration(path) {
    if (path.isLabeledStatement()) {
      this.registerLabel(path);
    } else if (path.isFunctionDeclaration()) {
      this.registerBinding("hoisted", path.get("id"), path);
    } else if (path.isVariableDeclaration()) {
      const declarations = path.get("declarations");
      const {
        kind
      } = path.node;
      for (const declar of declarations) {
        this.registerBinding(kind === "using" || kind === "await using" ? "const" : kind, declar);
      }
    } else if (path.isClassDeclaration()) {
      if (path.node.declare) return;
      this.registerBinding("let", path);
    } else if (path.isImportDeclaration()) {
      const isTypeDeclaration = path.node.importKind === "type" || path.node.importKind === "typeof";
      const specifiers = path.get("specifiers");
      for (const specifier of specifiers) {
        const isTypeSpecifier = isTypeDeclaration || specifier.isImportSpecifier() && (specifier.node.importKind === "type" || specifier.node.importKind === "typeof");
        this.registerBinding(isTypeSpecifier ? "unknown" : "module", specifier);
      }
    } else if (path.isExportDeclaration()) {
      const declar = path.get("declaration");
      if (declar.isClassDeclaration() || declar.isFunctionDeclaration() || declar.isVariableDeclaration()) {
        this.registerDeclaration(declar);
      }
    } else {
      this.registerBinding("unknown", path);
    }
  }
  buildUndefinedNode() {
    return buildUndefinedNode();
  }
  registerConstantViolation(path) {
    const ids = path.getAssignmentIdentifiers();
    for (const name of Object.keys(ids)) {
      var _this$getBinding;
      (_this$getBinding = this.getBinding(name)) == null || _this$getBinding.reassign(path);
    }
  }
  registerBinding(kind, path, bindingPath = path) {
    if (!kind) throw new ReferenceError("no `kind`");
    if (path.isVariableDeclaration()) {
      const declarators = path.get("declarations");
      for (const declar of declarators) {
        this.registerBinding(kind, declar);
      }
      return;
    }
    const parent = this.getProgramParent();
    const ids = path.getOuterBindingIdentifiers(true);
    for (const name of Object.keys(ids)) {
      parent.references[name] = true;
      for (const id of ids[name]) {
        const local = this.getOwnBinding(name);
        if (local) {
          if (local.identifier === id) continue;
          this.checkBlockScopedCollisions(local, kind, name, id);
        }
        if (local) {
          local.reassign(bindingPath);
        } else {
          this.bindings[name] = new _binding.default({
            identifier: id,
            scope: this,
            path: bindingPath,
            kind: kind
          });
        }
      }
    }
  }
  addGlobal(node) {
    this.globals[node.name] = node;
  }
  hasUid(name) {
    let scope = this;
    do {
      if (scope.uids[name]) return true;
    } while (scope = scope.parent);
    return false;
  }
  hasGlobal(name) {
    let scope = this;
    do {
      if (scope.globals[name]) return true;
    } while (scope = scope.parent);
    return false;
  }
  hasReference(name) {
    return !!this.getProgramParent().references[name];
  }
  isPure(node, constantsOnly) {
    if (isIdentifier(node)) {
      const binding = this.getBinding(node.name);
      if (!binding) return false;
      if (constantsOnly) return binding.constant;
      return true;
    } else if (isThisExpression(node) || isMetaProperty(node) || isTopicReference(node) || isPrivateName(node)) {
      return true;
    } else if (isClass(node)) {
      var _node$decorators;
      if (node.superClass && !this.isPure(node.superClass, constantsOnly)) {
        return false;
      }
      if (((_node$decorators = node.decorators) == null ? void 0 : _node$decorators.length) > 0) {
        return false;
      }
      return this.isPure(node.body, constantsOnly);
    } else if (isClassBody(node)) {
      for (const method of node.body) {
        if (!this.isPure(method, constantsOnly)) return false;
      }
      return true;
    } else if (isBinary(node)) {
      return this.isPure(node.left, constantsOnly) && this.isPure(node.right, constantsOnly);
    } else if (isArrayExpression(node) || (node == null ? void 0 : node.type) === "TupleExpression") {
      for (const elem of node.elements) {
        if (elem !== null && !this.isPure(elem, constantsOnly)) return false;
      }
      return true;
    } else if (isObjectExpression(node) || (node == null ? void 0 : node.type) === "RecordExpression") {
      for (const prop of node.properties) {
        if (!this.isPure(prop, constantsOnly)) return false;
      }
      return true;
    } else if (isMethod(node)) {
      var _node$decorators2;
      if (node.computed && !this.isPure(node.key, constantsOnly)) return false;
      if (((_node$decorators2 = node.decorators) == null ? void 0 : _node$decorators2.length) > 0) {
        return false;
      }
      return true;
    } else if (isProperty(node)) {
      var _node$decorators3;
      if (node.computed && !this.isPure(node.key, constantsOnly)) return false;
      if (((_node$decorators3 = node.decorators) == null ? void 0 : _node$decorators3.length) > 0) {
        return false;
      }
      if (isObjectProperty(node) || node.static) {
        if (node.value !== null && !this.isPure(node.value, constantsOnly)) {
          return false;
        }
      }
      return true;
    } else if (isUnaryExpression(node)) {
      return this.isPure(node.argument, constantsOnly);
    } else if (isTemplateLiteral(node)) {
      for (const expression of node.expressions) {
        if (!this.isPure(expression, constantsOnly)) return false;
      }
      return true;
    } else if (isTaggedTemplateExpression(node)) {
      return matchesPattern(node.tag, "String.raw") && !this.hasBinding("String", {
        noGlobals: true
      }) && this.isPure(node.quasi, constantsOnly);
    } else if (isMemberExpression(node)) {
      return !node.computed && isIdentifier(node.object) && node.object.name === "Symbol" && isIdentifier(node.property) && node.property.name !== "for" && !this.hasBinding("Symbol", {
        noGlobals: true
      });
    } else if (isCallExpression(node)) {
      return matchesPattern(node.callee, "Symbol.for") && !this.hasBinding("Symbol", {
        noGlobals: true
      }) && node.arguments.length === 1 && t.isStringLiteral(node.arguments[0]);
    } else {
      return isPureish(node);
    }
  }
  setData(key, val) {
    return this.data[key] = val;
  }
  getData(key) {
    let scope = this;
    do {
      const data = scope.data[key];
      if (data != null) return data;
    } while (scope = scope.parent);
  }
  removeData(key) {
    let scope = this;
    do {
      const data = scope.data[key];
      if (data != null) scope.data[key] = null;
    } while (scope = scope.parent);
  }
  init() {
    if (!this.inited) {
      this.inited = true;
      this.crawl();
    }
  }
  crawl() {
    const path = this.path;
    resetScope(this);
    this.data = Object.create(null);
    let scope = this;
    do {
      if (scope.crawling) return;
      if (scope.path.isProgram()) {
        break;
      }
    } while (scope = scope.parent);
    const programParent = scope;
    const state = {
      references: [],
      constantViolations: [],
      assignments: []
    };
    this.crawling = true;
    scopeVisitor || (scopeVisitor = _index.default.visitors.merge([{
      Scope(path) {
        resetScope(path.scope);
      }
    }, collectorVisitor]));
    if (path.type !== "Program") {
      const typeVisitors = scopeVisitor[path.type];
      if (typeVisitors) {
        for (const visit of typeVisitors.enter) {
          visit.call(state, path, state);
        }
      }
    }
    path.traverse(scopeVisitor, state);
    this.crawling = false;
    for (const path of state.assignments) {
      const ids = path.getAssignmentIdentifiers();
      for (const name of Object.keys(ids)) {
        if (path.scope.getBinding(name)) continue;
        programParent.addGlobal(ids[name]);
      }
      path.scope.registerConstantViolation(path);
    }
    for (const ref of state.references) {
      const binding = ref.scope.getBinding(ref.node.name);
      if (binding) {
        binding.reference(ref);
      } else {
        programParent.addGlobal(ref.node);
      }
    }
    for (const path of state.constantViolations) {
      path.scope.registerConstantViolation(path);
    }
  }
  push(opts) {
    let path = this.path;
    if (path.isPattern()) {
      path = this.getPatternParent().path;
    } else if (!path.isBlockStatement() && !path.isProgram()) {
      path = this.getBlockParent().path;
    }
    if (path.isSwitchStatement()) {
      path = (this.getFunctionParent() || this.getProgramParent()).path;
    }
    const {
      init,
      unique,
      kind = "var",
      id
    } = opts;
    if (!init && !unique && (kind === "var" || kind === "let") && isAnonymousFunctionExpression(path) && isCallExpression(path.parent, {
      callee: path.node
    }) && path.parent.arguments.length <= path.node.params.length && isIdentifier(id)) {
      path.pushContainer("params", id);
      path.scope.registerBinding("param", path.get("params")[path.node.params.length - 1]);
      return;
    }
    if (path.isLoop() || path.isCatchClause() || path.isFunction()) {
      path.ensureBlock();
      path = path.get("body");
    }
    const blockHoist = opts._blockHoist == null ? 2 : opts._blockHoist;
    const dataKey = `declaration:${kind}:${blockHoist}`;
    let declarPath = !unique && path.getData(dataKey);
    if (!declarPath) {
      const declar = variableDeclaration(kind, []);
      declar._blockHoist = blockHoist;
      [declarPath] = path.unshiftContainer("body", [declar]);
      if (!unique) path.setData(dataKey, declarPath);
    }
    const declarator = variableDeclarator(id, init);
    const len = declarPath.node.declarations.push(declarator);
    path.scope.registerBinding(kind, declarPath.get("declarations")[len - 1]);
  }
  getProgramParent() {
    let scope = this;
    do {
      if (scope.path.isProgram()) {
        return scope;
      }
    } while (scope = scope.parent);
    throw new Error("Couldn't find a Program");
  }
  getFunctionParent() {
    let scope = this;
    do {
      if (scope.path.isFunctionParent()) {
        return scope;
      }
    } while (scope = scope.parent);
    return null;
  }
  getBlockParent() {
    let scope = this;
    do {
      if (scope.path.isBlockParent()) {
        return scope;
      }
    } while (scope = scope.parent);
    throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...");
  }
  getPatternParent() {
    let scope = this;
    do {
      if (!scope.path.isPattern()) {
        return scope.getBlockParent();
      }
    } while (scope = scope.parent.parent);
    throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...");
  }
  getAllBindings() {
    const ids = Object.create(null);
    let scope = this;
    do {
      for (const key of Object.keys(scope.bindings)) {
        if (key in ids === false) {
          ids[key] = scope.bindings[key];
        }
      }
      scope = scope.parent;
    } while (scope);
    return ids;
  }
  bindingIdentifierEquals(name, node) {
    return this.getBindingIdentifier(name) === node;
  }
  getBinding(name) {
    let scope = this;
    let previousPath;
    do {
      const binding = scope.getOwnBinding(name);
      if (binding) {
        var _previousPath;
        if ((_previousPath = previousPath) != null && _previousPath.isPattern() && binding.kind !== "param" && binding.kind !== "local") {} else {
          return binding;
        }
      } else if (!binding && name === "arguments" && scope.path.isFunction() && !scope.path.isArrowFunctionExpression()) {
        break;
      }
      previousPath = scope.path;
    } while (scope = scope.parent);
  }
  getOwnBinding(name) {
    return this.bindings[name];
  }
  getBindingIdentifier(name) {
    var _this$getBinding2;
    return (_this$getBinding2 = this.getBinding(name)) == null ? void 0 : _this$getBinding2.identifier;
  }
  getOwnBindingIdentifier(name) {
    const binding = this.bindings[name];
    return binding == null ? void 0 : binding.identifier;
  }
  hasOwnBinding(name) {
    return !!this.getOwnBinding(name);
  }
  hasBinding(name, opts) {
    if (!name) return false;
    let noGlobals;
    let noUids;
    let upToScope;
    if (typeof opts === "object") {
      noGlobals = opts.noGlobals;
      noUids = opts.noUids;
      upToScope = opts.upToScope;
    } else if (typeof opts === "boolean") {
      noGlobals = opts;
    }
    let scope = this;
    do {
      if (upToScope === scope) {
        break;
      }
      if (scope.hasOwnBinding(name)) {
        return true;
      }
    } while (scope = scope.parent);
    if (!noUids && this.hasUid(name)) return true;
    if (!noGlobals && Scope.globals.includes(name)) return true;
    if (!noGlobals && Scope.contextVariables.includes(name)) return true;
    return false;
  }
  parentHasBinding(name, opts) {
    var _this$parent;
    return (_this$parent = this.parent) == null ? void 0 : _this$parent.hasBinding(name, opts);
  }
  moveBindingTo(name, scope) {
    const info = this.getBinding(name);
    if (info) {
      info.scope.removeOwnBinding(name);
      info.scope = scope;
      scope.bindings[name] = info;
    }
  }
  removeOwnBinding(name) {
    delete this.bindings[name];
  }
  removeBinding(name) {
    var _this$getBinding3;
    (_this$getBinding3 = this.getBinding(name)) == null || _this$getBinding3.scope.removeOwnBinding(name);
    let scope = this;
    do {
      if (scope.uids[name]) {
        scope.uids[name] = false;
      }
    } while (scope = scope.parent);
  }
  hoistVariables(emit = id => this.push({
    id
  })) {
    this.crawl();
    const seen = new Set();
    for (const name of Object.keys(this.bindings)) {
      const binding = this.bindings[name];
      if (!binding) continue;
      const {
        path
      } = binding;
      if (!path.isVariableDeclarator()) continue;
      const {
        parent,
        parentPath
      } = path;
      if (parent.kind !== "var" || seen.has(parent)) continue;
      seen.add(path.parent);
      let firstId;
      const init = [];
      for (const decl of parent.declarations) {
        firstId != null ? firstId : firstId = decl.id;
        if (decl.init) {
          init.push(assignmentExpression("=", decl.id, decl.init));
        }
        const ids = Object.keys(getBindingIdentifiers(decl, false, true, true));
        for (const name of ids) {
          emit(identifier(name), decl.init != null);
        }
      }
      if (parentPath.parentPath.isForXStatement({
        left: parent
      })) {
        parentPath.replaceWith(firstId);
      } else if (init.length === 0) {
        parentPath.remove();
      } else {
        const expr = init.length === 1 ? init[0] : sequenceExpression(init);
        if (parentPath.parentPath.isForStatement({
          init: parent
        })) {
          parentPath.replaceWith(expr);
        } else {
          parentPath.replaceWith(expressionStatement(expr));
        }
      }
    }
  }
}
exports.default = Scope;
Scope.globals = [...globalsBuiltinLower, ...globalsBuiltinUpper];
Scope.contextVariables = ["arguments", "undefined", "Infinity", "NaN"];
Scope.prototype._renameFromMap = function _renameFromMap(map, oldName, newName, value) {
  if (map[oldName]) {
    map[newName] = value;
    map[oldName] = null;
  }
};
Scope.prototype.traverse = function (node, opts, state) {
  (0, _index.default)(node, opts, this, state, this.path);
};
Scope.prototype._generateUid = function _generateUid(name, i) {
  let id = name;
  if (i > 1) id += i;
  return `_${id}`;
};
Scope.prototype.toArray = function toArray(node, i, arrayLikeIsIterable) {
  if (isIdentifier(node)) {
    const binding = this.getBinding(node.name);
    if (binding != null && binding.constant && binding.path.isGenericType("Array")) {
      return node;
    }
  }
  if (isArrayExpression(node)) {
    return node;
  }
  if (isIdentifier(node, {
    name: "arguments"
  })) {
    return callExpression(memberExpression(memberExpression(memberExpression(identifier("Array"), identifier("prototype")), identifier("slice")), identifier("call")), [node]);
  }
  let helperName;
  const args = [node];
  if (i === true) {
    helperName = "toConsumableArray";
  } else if (typeof i === "number") {
    args.push(numericLiteral(i));
    helperName = "slicedToArray";
  } else {
    helperName = "toArray";
  }
  if (arrayLikeIsIterable) {
    args.unshift(this.path.hub.addHelper(helperName));
    helperName = "maybeArrayLike";
  }
  return callExpression(this.path.hub.addHelper(helperName), args);
};
Scope.prototype.getAllBindingsOfKind = function getAllBindingsOfKind(...kinds) {
  const ids = Object.create(null);
  for (const kind of kinds) {
    let scope = this;
    do {
      for (const name of Object.keys(scope.bindings)) {
        const binding = scope.bindings[name];
        if (binding.kind === kind) ids[name] = binding;
      }
      scope = scope.parent;
    } while (scope);
  }
  return ids;
};
Object.defineProperties(Scope.prototype, {
  parentBlock: {
    configurable: true,
    enumerable: true,
    get() {
      return this.path.parent;
    }
  },
  hub: {
    configurable: true,
    enumerable: true,
    get() {
      return this.path.hub;
    }
  }
});

//# sourceMappingURL=index.js.map
