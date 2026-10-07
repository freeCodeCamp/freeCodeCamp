"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getExportSpecifierName = getExportSpecifierName;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _helperHoistVariables = require("@babel/helper-hoist-variables");
var _core = require("@babel/core");
var _helperModuleTransforms = require("@babel/helper-module-transforms");
var _helperValidatorIdentifier = require("@babel/helper-validator-identifier");
const buildTemplate = _core.template.statement(`
  SYSTEM_REGISTER(MODULE_NAME, SOURCES, function (EXPORT_IDENTIFIER, CONTEXT_IDENTIFIER) {
    "use strict";
    BEFORE_BODY;
    return {
      setters: SETTERS,
      execute: EXECUTE,
    };
  });
`);
const buildExportAll = _core.template.statement(`
  for (var KEY in TARGET) {
    if (KEY !== "default" && KEY !== "__esModule") EXPORT_OBJ[KEY] = TARGET[KEY];
  }
`);
const MISSING_PLUGIN_WARNING = `\
WARNING: Dynamic import() transformation must be enabled using the
         @babel/plugin-transform-dynamic-import plugin. Babel 8 will
         no longer transform import() without using that plugin.
`;
const MISSING_PLUGIN_ERROR = `\
ERROR: Dynamic import() transformation must be enabled using the
       @babel/plugin-transform-dynamic-import plugin. Babel 8
       no longer transforms import() without using that plugin.
`;
function getExportSpecifierName(node, stringSpecifiers) {
  if (node.type === "Identifier") {
    return node.name;
  } else if (node.type === "StringLiteral") {
    const stringValue = node.value;
    if (!(0, _helperValidatorIdentifier.isIdentifierName)(stringValue)) {
      stringSpecifiers.add(stringValue);
    }
    return stringValue;
  } else {
    throw new Error(`Expected export specifier to be either Identifier or StringLiteral, got ${node.type}`);
  }
}
function constructExportCall(path, exportIdent, exportNames, exportValues, exportStarTarget, stringSpecifiers) {
  const statements = [];
  if (!exportStarTarget) {
    if (exportNames.length === 1) {
      statements.push(_core.types.expressionStatement(_core.types.callExpression(exportIdent, [_core.types.stringLiteral(exportNames[0]), exportValues[0]])));
    } else {
      const objectProperties = [];
      for (let i = 0; i < exportNames.length; i++) {
        const exportName = exportNames[i];
        const exportValue = exportValues[i];
        objectProperties.push(_core.types.objectProperty(stringSpecifiers.has(exportName) ? _core.types.stringLiteral(exportName) : _core.types.identifier(exportName), exportValue));
      }
      statements.push(_core.types.expressionStatement(_core.types.callExpression(exportIdent, [_core.types.objectExpression(objectProperties)])));
    }
  } else {
    const exportObj = path.scope.generateUid("exportObj");
    statements.push(_core.types.variableDeclaration("var", [_core.types.variableDeclarator(_core.types.identifier(exportObj), _core.types.objectExpression([]))]));
    statements.push(buildExportAll({
      KEY: path.scope.generateUidIdentifier("key"),
      EXPORT_OBJ: _core.types.identifier(exportObj),
      TARGET: exportStarTarget
    }));
    for (let i = 0; i < exportNames.length; i++) {
      const exportName = exportNames[i];
      const exportValue = exportValues[i];
      statements.push(_core.types.expressionStatement(_core.types.assignmentExpression("=", _core.types.memberExpression(_core.types.identifier(exportObj), _core.types.identifier(exportName)), exportValue)));
    }
    statements.push(_core.types.expressionStatement(_core.types.callExpression(exportIdent, [_core.types.identifier(exportObj)])));
  }
  return statements;
}
var _default = exports.default = (0, _helperPluginUtils.declare)((api, options) => {
  api.assertVersion(7);
  const {
    systemGlobal = "System",
    allowTopLevelThis = false
  } = options;
  const reassignmentVisited = new WeakSet();
  const reassignmentVisitor = {
    "AssignmentExpression|UpdateExpression"(path) {
      if (reassignmentVisited.has(path.node)) return;
      reassignmentVisited.add(path.node);
      const arg = path.isAssignmentExpression() ? path.get("left") : path.get("argument");
      if (arg.isObjectPattern() || arg.isArrayPattern()) {
        const exprs = [path.node];
        for (const name of Object.keys(arg.getBindingIdentifiers())) {
          if (this.scope.getBinding(name) !== path.scope.getBinding(name)) {
            return;
          }
          const exportedNames = this.exports[name];
          if (!exportedNames) continue;
          for (const exportedName of exportedNames) {
            exprs.push(this.buildCall(exportedName, _core.types.identifier(name)).expression);
          }
        }
        path.replaceWith(_core.types.sequenceExpression(exprs));
        return;
      }
      if (!arg.isIdentifier()) return;
      const name = arg.node.name;
      if (this.scope.getBinding(name) !== path.scope.getBinding(name)) return;
      const exportedNames = this.exports[name];
      if (!exportedNames) return;
      let node = path.node;
      const isPostUpdateExpression = _core.types.isUpdateExpression(node, {
        prefix: false
      });
      if (isPostUpdateExpression) {
        node = _core.types.binaryExpression(node.operator[0], _core.types.unaryExpression("+", _core.types.cloneNode(node.argument)), _core.types.numericLiteral(1));
      }
      for (const exportedName of exportedNames) {
        node = this.buildCall(exportedName, node).expression;
      }
      if (isPostUpdateExpression) {
        node = _core.types.sequenceExpression([node, path.node]);
      }
      path.replaceWith(node);
    }
  };
  return {
    name: "transform-modules-systemjs",
    pre() {
      this.file.set("@babel/plugin-transform-modules-*", "systemjs");
    },
    visitor: {
      ["CallExpression" + (api.types.importExpression ? "|ImportExpression" : "")](path, state) {
        if (path.isCallExpression() && !_core.types.isImport(path.node.callee)) return;
        if (path.isCallExpression()) {
          if (!this.file.has("@babel/plugin-proposal-dynamic-import")) {
            {
              console.warn(MISSING_PLUGIN_WARNING);
            }
          }
        } else {
          if (!this.file.has("@babel/plugin-proposal-dynamic-import")) {
            throw new Error(MISSING_PLUGIN_ERROR);
          }
        }
        path.replaceWith((0, _helperModuleTransforms.buildDynamicImport)(path.node, false, true, specifier => _core.types.callExpression(_core.types.memberExpression(_core.types.identifier(state.contextIdent), _core.types.identifier("import")), [specifier])));
      },
      MetaProperty(path, state) {
        if (path.node.meta.name === "import" && path.node.property.name === "meta") {
          path.replaceWith(_core.types.memberExpression(_core.types.identifier(state.contextIdent), _core.types.identifier("meta")));
        }
      },
      ReferencedIdentifier(path, state) {
        if (path.node.name === "__moduleName" && !path.scope.hasBinding("__moduleName")) {
          path.replaceWith(_core.types.memberExpression(_core.types.identifier(state.contextIdent), _core.types.identifier("id")));
        }
      },
      Program: {
        enter(path, state) {
          state.contextIdent = path.scope.generateUid("context");
          state.stringSpecifiers = new Set();
          if (!allowTopLevelThis) {
            (0, _helperModuleTransforms.rewriteThis)(path);
          }
        },
        exit(path, state) {
          const scope = path.scope;
          const exportIdent = scope.generateUid("export");
          const {
            contextIdent,
            stringSpecifiers
          } = state;
          const exportMap = Object.create(null);
          const modules = [];
          const beforeBody = [];
          const setters = [];
          const sources = [];
          const variableIds = [];
          const removedPaths = [];
          function addExportName(key, val) {
            exportMap[key] = exportMap[key] || [];
            exportMap[key].push(val);
          }
          function pushModule(source, key, specifiers) {
            let module;
            modules.forEach(function (m) {
              if (m.key === source) {
                module = m;
              }
            });
            if (!module) {
              modules.push(module = {
                key: source,
                imports: [],
                exports: []
              });
            }
            module[key] = module[key].concat(specifiers);
          }
          function buildExportCall(name, val) {
            return _core.types.expressionStatement(_core.types.callExpression(_core.types.identifier(exportIdent), [_core.types.stringLiteral(name), val]));
          }
          const exportNames = [];
          const exportValues = [];
          const body = path.get("body");
          for (const path of body) {
            if (path.isFunctionDeclaration()) {
              beforeBody.push(path.node);
              removedPaths.push(path);
            } else if (path.isClassDeclaration()) {
              variableIds.push(_core.types.cloneNode(path.node.id));
              path.replaceWith(_core.types.expressionStatement(_core.types.assignmentExpression("=", _core.types.cloneNode(path.node.id), _core.types.toExpression(path.node))));
            } else if (path.isVariableDeclaration()) {
              path.node.kind = "var";
            } else if (path.isImportDeclaration()) {
              const source = path.node.source.value;
              pushModule(source, "imports", path.node.specifiers);
              for (const name of Object.keys(path.getBindingIdentifiers())) {
                scope.removeBinding(name);
                variableIds.push(_core.types.identifier(name));
              }
              path.remove();
            } else if (path.isExportAllDeclaration()) {
              pushModule(path.node.source.value, "exports", path.node);
              path.remove();
            } else if (path.isExportDefaultDeclaration()) {
              const declar = path.node.declaration;
              if (_core.types.isClassDeclaration(declar)) {
                const id = declar.id;
                if (id) {
                  exportNames.push("default");
                  exportValues.push(scope.buildUndefinedNode());
                  variableIds.push(_core.types.cloneNode(id));
                  addExportName(id.name, "default");
                  path.replaceWith(_core.types.expressionStatement(_core.types.assignmentExpression("=", _core.types.cloneNode(id), _core.types.toExpression(declar))));
                } else {
                  exportNames.push("default");
                  exportValues.push(_core.types.toExpression(declar));
                  removedPaths.push(path);
                }
              } else if (_core.types.isFunctionDeclaration(declar)) {
                const id = declar.id;
                if (id) {
                  beforeBody.push(declar);
                  exportNames.push("default");
                  exportValues.push(_core.types.cloneNode(id));
                  addExportName(id.name, "default");
                } else {
                  exportNames.push("default");
                  exportValues.push(_core.types.toExpression(declar));
                }
                removedPaths.push(path);
              } else {
                path.replaceWith(buildExportCall("default", declar));
              }
            } else if (path.isExportNamedDeclaration()) {
              const declar = path.node.declaration;
              if (declar) {
                path.replaceWith(declar);
                if (_core.types.isFunction(declar)) {
                  const name = declar.id.name;
                  addExportName(name, name);
                  beforeBody.push(declar);
                  exportNames.push(name);
                  exportValues.push(_core.types.cloneNode(declar.id));
                  removedPaths.push(path);
                } else if (_core.types.isClass(declar)) {
                  const name = declar.id.name;
                  exportNames.push(name);
                  exportValues.push(scope.buildUndefinedNode());
                  variableIds.push(_core.types.cloneNode(declar.id));
                  path.replaceWith(_core.types.expressionStatement(_core.types.assignmentExpression("=", _core.types.cloneNode(declar.id), _core.types.toExpression(declar))));
                  addExportName(name, name);
                } else {
                  if (_core.types.isVariableDeclaration(declar)) {
                    declar.kind = "var";
                  }
                  for (const name of Object.keys(_core.types.getBindingIdentifiers(declar))) {
                    addExportName(name, name);
                  }
                }
              } else {
                const specifiers = path.node.specifiers;
                if (specifiers != null && specifiers.length) {
                  if (path.node.source) {
                    pushModule(path.node.source.value, "exports", specifiers);
                    path.remove();
                  } else {
                    const nodes = [];
                    for (const specifier of specifiers) {
                      const {
                        local,
                        exported
                      } = specifier;
                      const binding = scope.getBinding(local.name);
                      const exportedName = getExportSpecifierName(exported, stringSpecifiers);
                      if (binding && _core.types.isFunctionDeclaration(binding.path.node)) {
                        exportNames.push(exportedName);
                        exportValues.push(_core.types.cloneNode(local));
                      } else if (!binding) {
                        nodes.push(buildExportCall(exportedName, local));
                      }
                      addExportName(local.name, exportedName);
                    }
                    path.replaceWithMultiple(nodes);
                  }
                } else {
                  path.remove();
                }
              }
            }
          }
          modules.forEach(function (specifiers) {
            const setterBody = [];
            const target = scope.generateUid(specifiers.key);
            for (let specifier of specifiers.imports) {
              if (_core.types.isImportNamespaceSpecifier(specifier)) {
                setterBody.push(_core.types.expressionStatement(_core.types.assignmentExpression("=", specifier.local, _core.types.identifier(target))));
              } else if (_core.types.isImportDefaultSpecifier(specifier)) {
                specifier = _core.types.importSpecifier(specifier.local, _core.types.identifier("default"));
              }
              if (_core.types.isImportSpecifier(specifier)) {
                const {
                  imported
                } = specifier;
                setterBody.push(_core.types.expressionStatement(_core.types.assignmentExpression("=", specifier.local, _core.types.memberExpression(_core.types.identifier(target), specifier.imported, imported.type === "StringLiteral"))));
              }
            }
            if (specifiers.exports.length) {
              const exportNames = [];
              const exportValues = [];
              let hasExportStar = false;
              for (const node of specifiers.exports) {
                if (_core.types.isExportAllDeclaration(node)) {
                  hasExportStar = true;
                } else if (_core.types.isExportSpecifier(node)) {
                  const exportedName = getExportSpecifierName(node.exported, stringSpecifiers);
                  exportNames.push(exportedName);
                  exportValues.push(_core.types.memberExpression(_core.types.identifier(target), node.local, _core.types.isStringLiteral(node.local)));
                } else {}
              }
              setterBody.push(...constructExportCall(path, _core.types.identifier(exportIdent), exportNames, exportValues, hasExportStar ? _core.types.identifier(target) : null, stringSpecifiers));
            }
            sources.push(_core.types.stringLiteral(specifiers.key));
            setters.push(_core.types.functionExpression(null, [_core.types.identifier(target)], _core.types.blockStatement(setterBody)));
          });
          let moduleName = (0, _helperModuleTransforms.getModuleName)(this.file.opts, options);
          if (moduleName) moduleName = _core.types.stringLiteral(moduleName);
          (0, _helperHoistVariables.default)(path, (id, name, hasInit) => {
            variableIds.push(id);
            if (!hasInit && name in exportMap) {
              for (const exported of exportMap[name]) {
                exportNames.push(exported);
                exportValues.push(scope.buildUndefinedNode());
              }
            }
          });
          if (variableIds.length) {
            beforeBody.unshift(_core.types.variableDeclaration("var", variableIds.map(id => _core.types.variableDeclarator(id))));
          }
          if (exportNames.length) {
            beforeBody.push(...constructExportCall(path, _core.types.identifier(exportIdent), exportNames, exportValues, null, stringSpecifiers));
          }
          path.traverse(reassignmentVisitor, {
            exports: exportMap,
            buildCall: buildExportCall,
            scope
          });
          for (const path of removedPaths) {
            path.remove();
          }
          let hasTLA = false;
          path.traverse({
            AwaitExpression(path) {
              hasTLA = true;
              path.stop();
            },
            Function(path) {
              path.skip();
            },
            noScope: true
          });
          path.node.body = [buildTemplate({
            SYSTEM_REGISTER: _core.types.memberExpression(_core.types.identifier(systemGlobal), _core.types.identifier("register")),
            BEFORE_BODY: beforeBody,
            MODULE_NAME: moduleName,
            SETTERS: _core.types.arrayExpression(setters),
            EXECUTE: _core.types.functionExpression(null, [], _core.types.blockStatement(path.node.body), false, hasTLA),
            SOURCES: _core.types.arrayExpression(sources),
            EXPORT_IDENTIFIER: _core.types.identifier(exportIdent),
            CONTEXT_IDENTIFIER: _core.types.identifier(contextIdent)
          })];
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
