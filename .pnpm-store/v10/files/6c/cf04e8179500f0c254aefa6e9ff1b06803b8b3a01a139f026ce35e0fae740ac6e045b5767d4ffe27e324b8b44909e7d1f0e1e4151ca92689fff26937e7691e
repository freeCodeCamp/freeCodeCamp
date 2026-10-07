"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assert = require("assert");
var _t = require("@babel/types");
var _importBuilder = require("./import-builder.js");
var _isModule = require("./is-module.js");
const {
  identifier,
  importSpecifier,
  numericLiteral,
  sequenceExpression,
  isImportDeclaration
} = _t;
class ImportInjector {
  constructor(path, importedSource, opts) {
    this._defaultOpts = {
      importedSource: null,
      importedType: "commonjs",
      importedInterop: "babel",
      importingInterop: "babel",
      ensureLiveReference: false,
      ensureNoContext: false,
      importPosition: "before"
    };
    const programPath = path.find(p => p.isProgram());
    this._programPath = programPath;
    this._programScope = programPath.scope;
    this._hub = programPath.hub;
    this._defaultOpts = this._applyDefaults(importedSource, opts, true);
  }
  addDefault(importedSourceIn, opts) {
    return this.addNamed("default", importedSourceIn, opts);
  }
  addNamed(importName, importedSourceIn, opts) {
    _assert(typeof importName === "string");
    return this._generateImport(this._applyDefaults(importedSourceIn, opts), importName);
  }
  addNamespace(importedSourceIn, opts) {
    return this._generateImport(this._applyDefaults(importedSourceIn, opts), null);
  }
  addSideEffect(importedSourceIn, opts) {
    return this._generateImport(this._applyDefaults(importedSourceIn, opts), void 0);
  }
  _applyDefaults(importedSource, opts, isInit = false) {
    let newOpts;
    if (typeof importedSource === "string") {
      newOpts = Object.assign({}, this._defaultOpts, {
        importedSource
      }, opts);
    } else {
      _assert(!opts, "Unexpected secondary arguments.");
      newOpts = Object.assign({}, this._defaultOpts, importedSource);
    }
    if (!isInit && opts) {
      if (opts.nameHint !== undefined) newOpts.nameHint = opts.nameHint;
      if (opts.blockHoist !== undefined) newOpts.blockHoist = opts.blockHoist;
    }
    return newOpts;
  }
  _generateImport(opts, importName) {
    const isDefault = importName === "default";
    const isNamed = !!importName && !isDefault;
    const isNamespace = importName === null;
    const {
      importedSource,
      importedType,
      importedInterop,
      importingInterop,
      ensureLiveReference,
      ensureNoContext,
      nameHint,
      importPosition,
      blockHoist
    } = opts;
    let name = nameHint || importName;
    const isMod = (0, _isModule.default)(this._programPath);
    const isModuleForNode = isMod && importingInterop === "node";
    const isModuleForBabel = isMod && importingInterop === "babel";
    if (importPosition === "after" && !isMod) {
      throw new Error(`"importPosition": "after" is only supported in modules`);
    }
    const builder = new _importBuilder.default(importedSource, this._programScope, this._hub);
    if (importedType === "es6") {
      if (!isModuleForNode && !isModuleForBabel) {
        throw new Error("Cannot import an ES6 module from CommonJS");
      }
      builder.import();
      if (isNamespace) {
        builder.namespace(nameHint || importedSource);
      } else if (isDefault || isNamed) {
        builder.named(name, importName);
      }
    } else if (importedType !== "commonjs") {
      throw new Error(`Unexpected interopType "${importedType}"`);
    } else if (importedInterop === "babel") {
      if (isModuleForNode) {
        name = name !== "default" ? name : importedSource;
        const es6Default = `${importedSource}$es6Default`;
        builder.import();
        if (isNamespace) {
          builder.default(es6Default).var(name || importedSource).wildcardInterop();
        } else if (isDefault) {
          if (ensureLiveReference) {
            builder.default(es6Default).var(name || importedSource).defaultInterop().read("default");
          } else {
            builder.default(es6Default).var(name).defaultInterop().prop(importName);
          }
        } else if (isNamed) {
          builder.default(es6Default).read(importName);
        }
      } else if (isModuleForBabel) {
        builder.import();
        if (isNamespace) {
          builder.namespace(name || importedSource);
        } else if (isDefault || isNamed) {
          builder.named(name, importName);
        }
      } else {
        builder.require();
        if (isNamespace) {
          builder.var(name || importedSource).wildcardInterop();
        } else if ((isDefault || isNamed) && ensureLiveReference) {
          if (isDefault) {
            name = name !== "default" ? name : importedSource;
            builder.var(name).read(importName);
            builder.defaultInterop();
          } else {
            builder.var(importedSource).read(importName);
          }
        } else if (isDefault) {
          builder.var(name).defaultInterop().prop(importName);
        } else if (isNamed) {
          builder.var(name).prop(importName);
        }
      }
    } else if (importedInterop === "compiled") {
      if (isModuleForNode) {
        builder.import();
        if (isNamespace) {
          builder.default(name || importedSource);
        } else if (isDefault || isNamed) {
          builder.default(importedSource).read(name);
        }
      } else if (isModuleForBabel) {
        builder.import();
        if (isNamespace) {
          builder.namespace(name || importedSource);
        } else if (isDefault || isNamed) {
          builder.named(name, importName);
        }
      } else {
        builder.require();
        if (isNamespace) {
          builder.var(name || importedSource);
        } else if (isDefault || isNamed) {
          if (ensureLiveReference) {
            builder.var(importedSource).read(name);
          } else {
            builder.prop(importName).var(name);
          }
        }
      }
    } else if (importedInterop === "uncompiled") {
      if (isDefault && ensureLiveReference) {
        throw new Error("No live reference for commonjs default");
      }
      if (isModuleForNode) {
        builder.import();
        if (isNamespace) {
          builder.default(name || importedSource);
        } else if (isDefault) {
          builder.default(name);
        } else if (isNamed) {
          builder.default(importedSource).read(name);
        }
      } else if (isModuleForBabel) {
        builder.import();
        if (isNamespace) {
          builder.default(name || importedSource);
        } else if (isDefault) {
          builder.default(name);
        } else if (isNamed) {
          builder.named(name, importName);
        }
      } else {
        builder.require();
        if (isNamespace) {
          builder.var(name || importedSource);
        } else if (isDefault) {
          builder.var(name);
        } else if (isNamed) {
          if (ensureLiveReference) {
            builder.var(importedSource).read(name);
          } else {
            builder.var(name).prop(importName);
          }
        }
      }
    } else {
      throw new Error(`Unknown importedInterop "${importedInterop}".`);
    }
    const {
      statements,
      resultName
    } = builder.done();
    this._insertStatements(statements, importPosition, blockHoist);
    if ((isDefault || isNamed) && ensureNoContext && resultName.type !== "Identifier") {
      return sequenceExpression([numericLiteral(0), resultName]);
    }
    return resultName;
  }
  _insertStatements(statements, importPosition = "before", blockHoist = 3) {
    if (importPosition === "after") {
      if (this._insertStatementsAfter(statements)) return;
    } else {
      if (this._insertStatementsBefore(statements, blockHoist)) return;
    }
    this._programPath.unshiftContainer("body", statements);
  }
  _insertStatementsBefore(statements, blockHoist) {
    if (statements.length === 1 && isImportDeclaration(statements[0]) && isValueImport(statements[0])) {
      const firstImportDecl = this._programPath.get("body").find(p => {
        return p.isImportDeclaration() && isValueImport(p.node);
      });
      if ((firstImportDecl == null ? void 0 : firstImportDecl.node.source.value) === statements[0].source.value && maybeAppendImportSpecifiers(firstImportDecl.node, statements[0])) {
        return true;
      }
    }
    statements.forEach(node => {
      node._blockHoist = blockHoist;
    });
    const targetPath = this._programPath.get("body").find(p => {
      const val = p.node._blockHoist;
      return Number.isFinite(val) && val < 4;
    });
    if (targetPath) {
      targetPath.insertBefore(statements);
      return true;
    }
    return false;
  }
  _insertStatementsAfter(statements) {
    const statementsSet = new Set(statements);
    const importDeclarations = new Map();
    for (const statement of statements) {
      if (isImportDeclaration(statement) && isValueImport(statement)) {
        const source = statement.source.value;
        if (!importDeclarations.has(source)) importDeclarations.set(source, []);
        importDeclarations.get(source).push(statement);
      }
    }
    let lastImportPath = null;
    for (const bodyStmt of this._programPath.get("body")) {
      if (bodyStmt.isImportDeclaration() && isValueImport(bodyStmt.node)) {
        lastImportPath = bodyStmt;
        const source = bodyStmt.node.source.value;
        const newImports = importDeclarations.get(source);
        if (!newImports) continue;
        for (const decl of newImports) {
          if (!statementsSet.has(decl)) continue;
          if (maybeAppendImportSpecifiers(bodyStmt.node, decl)) {
            statementsSet.delete(decl);
          }
        }
      }
    }
    if (statementsSet.size === 0) return true;
    if (lastImportPath) lastImportPath.insertAfter(Array.from(statementsSet));
    return !!lastImportPath;
  }
}
exports.default = ImportInjector;
function isValueImport(node) {
  return node.importKind !== "type" && node.importKind !== "typeof";
}
function hasNamespaceImport(node) {
  return node.specifiers.length === 1 && node.specifiers[0].type === "ImportNamespaceSpecifier" || node.specifiers.length === 2 && node.specifiers[1].type === "ImportNamespaceSpecifier";
}
function hasDefaultImport(node) {
  return node.specifiers.length > 0 && node.specifiers[0].type === "ImportDefaultSpecifier";
}
function maybeAppendImportSpecifiers(target, source) {
  if (!target.specifiers.length) {
    target.specifiers = source.specifiers;
    return true;
  }
  if (!source.specifiers.length) return true;
  if (hasNamespaceImport(target) || hasNamespaceImport(source)) return false;
  if (hasDefaultImport(source)) {
    if (hasDefaultImport(target)) {
      source.specifiers[0] = importSpecifier(source.specifiers[0].local, identifier("default"));
    } else {
      target.specifiers.unshift(source.specifiers.shift());
    }
  }
  target.specifiers.push(...source.specifiers);
  return true;
}

//# sourceMappingURL=import-injector.js.map
