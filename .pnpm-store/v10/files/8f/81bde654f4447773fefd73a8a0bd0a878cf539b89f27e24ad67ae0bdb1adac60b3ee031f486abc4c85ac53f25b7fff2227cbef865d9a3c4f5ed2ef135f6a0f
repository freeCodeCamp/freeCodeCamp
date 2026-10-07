"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _pluginSyntaxTypescript = require("@babel/plugin-syntax-typescript");
var _helperCreateClassFeaturesPlugin = require("@babel/helper-create-class-features-plugin");
var _constEnum = require("./const-enum.js");
var _enum = require("./enum.js");
var _globalTypes = require("./global-types.js");
var _namespace = require("./namespace.js");
function isInType(path) {
  switch (path.parent.type) {
    case "TSTypeReference":
    case "TSExpressionWithTypeArguments":
    case "TSTypeQuery":
      return true;
    case "TSQualifiedName":
      return path.parentPath.findParent(path => path.type !== "TSQualifiedName").type !== "TSImportEqualsDeclaration";
    case "ExportSpecifier":
      return path.parent.exportKind === "type" || path.parentPath.parent.exportKind === "type";
    default:
      return false;
  }
}
const NEEDS_EXPLICIT_ESM = new WeakMap();
const PARSED_PARAMS = new WeakSet();
function safeRemove(path) {
  const ids = path.getBindingIdentifiers();
  for (const name of Object.keys(ids)) {
    const binding = path.scope.getBinding(name);
    if (binding && binding.identifier === ids[name]) {
      binding.scope.removeBinding(name);
    }
  }
  path.opts.noScope = true;
  path.remove();
  path.opts.noScope = false;
}
function assertCjsTransformEnabled(path, pass, wrong, suggestion, extra = "") {
  if (pass.file.get("@babel/plugin-transform-modules-*") !== "commonjs") {
    throw path.buildCodeFrameError(`\`${wrong}\` is only supported when compiling modules to CommonJS.\n` + `Please consider using \`${suggestion}\`${extra}, or add ` + `@babel/plugin-transform-modules-commonjs to your Babel config.`);
  }
}
var _default = exports.default = (0, _helperPluginUtils.declare)((api, opts) => {
  const {
    types: t,
    template
  } = api;
  api.assertVersion(7);
  const JSX_PRAGMA_REGEX = /\*?\s*@jsx((?:Frag)?)\s+([^\s]+)/;
  const {
    allowNamespaces = true,
    jsxPragma = "React.createElement",
    jsxPragmaFrag = "React.Fragment",
    onlyRemoveTypeImports = false,
    optimizeConstEnums = false
  } = opts;
  {
    var {
      allowDeclareFields = false
    } = opts;
  }
  const classMemberVisitors = {
    field(path) {
      const {
        node
      } = path;
      {
        if (!allowDeclareFields && node.declare) {
          throw path.buildCodeFrameError(`The 'declare' modifier is only allowed when the 'allowDeclareFields' option of ` + `@babel/plugin-transform-typescript or @babel/preset-typescript is enabled.`);
        }
      }
      if (node.declare) {
        if (node.value) {
          throw path.buildCodeFrameError(`Fields with the 'declare' modifier cannot be initialized here, but only in the constructor`);
        }
        if (!node.decorators) {
          path.remove();
        }
      } else if (node.definite) {
        if (node.value) {
          throw path.buildCodeFrameError(`Definitely assigned fields cannot be initialized here, but only in the constructor`);
        }
        {
          if (!allowDeclareFields && !node.decorators && !t.isClassPrivateProperty(node)) {
            path.remove();
          }
        }
      } else if (node.abstract) {
        path.remove();
      } else {
        if (!allowDeclareFields && !node.value && !node.decorators && !t.isClassPrivateProperty(node)) {
          path.remove();
        }
      }
      if (node.accessibility) node.accessibility = null;
      if (node.abstract) node.abstract = null;
      if (node.readonly) node.readonly = null;
      if (node.optional) node.optional = null;
      if (node.typeAnnotation) node.typeAnnotation = null;
      if (node.definite) node.definite = null;
      if (node.declare) node.declare = null;
      if (node.override) node.override = null;
    },
    method({
      node
    }) {
      if (node.accessibility) node.accessibility = null;
      if (node.abstract) node.abstract = null;
      if (node.optional) node.optional = null;
      if (node.override) node.override = null;
    },
    constructor(path, classPath) {
      if (path.node.accessibility) path.node.accessibility = null;
      const assigns = [];
      const {
        scope
      } = path;
      for (const paramPath of path.get("params")) {
        const param = paramPath.node;
        if (param.type === "TSParameterProperty") {
          const parameter = param.parameter;
          if (PARSED_PARAMS.has(parameter)) continue;
          PARSED_PARAMS.add(parameter);
          let id;
          if (t.isIdentifier(parameter)) {
            id = parameter;
          } else if (t.isAssignmentPattern(parameter) && t.isIdentifier(parameter.left)) {
            id = parameter.left;
          } else {
            throw paramPath.buildCodeFrameError("Parameter properties can not be destructuring patterns.");
          }
          assigns.push(template.statement.ast`
          this.${t.cloneNode(id)} = ${t.cloneNode(id)}`);
          paramPath.replaceWith(paramPath.get("parameter"));
          scope.registerBinding("param", paramPath);
        }
      }
      (0, _helperCreateClassFeaturesPlugin.injectInitialization)(classPath, path, assigns);
    }
  };
  return {
    name: "transform-typescript",
    inherits: _pluginSyntaxTypescript.default,
    visitor: {
      Pattern: visitPattern,
      Identifier: visitPattern,
      RestElement: visitPattern,
      Program: {
        enter(path, state) {
          const {
            file
          } = state;
          let fileJsxPragma = null;
          let fileJsxPragmaFrag = null;
          const programScope = path.scope;
          if (!_globalTypes.GLOBAL_TYPES.has(programScope)) {
            _globalTypes.GLOBAL_TYPES.set(programScope, new Set());
          }
          if (file.ast.comments) {
            for (const comment of file.ast.comments) {
              const jsxMatches = JSX_PRAGMA_REGEX.exec(comment.value);
              if (jsxMatches) {
                if (jsxMatches[1]) {
                  fileJsxPragmaFrag = jsxMatches[2];
                } else {
                  fileJsxPragma = jsxMatches[2];
                }
              }
            }
          }
          let pragmaImportName = fileJsxPragma || jsxPragma;
          if (pragmaImportName) {
            [pragmaImportName] = pragmaImportName.split(".");
          }
          let pragmaFragImportName = fileJsxPragmaFrag || jsxPragmaFrag;
          if (pragmaFragImportName) {
            [pragmaFragImportName] = pragmaFragImportName.split(".");
          }
          for (let stmt of path.get("body")) {
            if (stmt.isImportDeclaration()) {
              if (!NEEDS_EXPLICIT_ESM.has(state.file.ast.program)) {
                NEEDS_EXPLICIT_ESM.set(state.file.ast.program, true);
              }
              if (stmt.node.importKind === "type") {
                for (const specifier of stmt.node.specifiers) {
                  (0, _globalTypes.registerGlobalType)(programScope, specifier.local.name);
                }
                stmt.remove();
                continue;
              }
              const importsToRemove = new Set();
              const specifiersLength = stmt.node.specifiers.length;
              const isAllSpecifiersElided = () => specifiersLength > 0 && specifiersLength === importsToRemove.size;
              for (const specifier of stmt.node.specifiers) {
                if (specifier.type === "ImportSpecifier" && specifier.importKind === "type") {
                  (0, _globalTypes.registerGlobalType)(programScope, specifier.local.name);
                  const binding = stmt.scope.getBinding(specifier.local.name);
                  if (binding) {
                    importsToRemove.add(binding.path);
                  }
                }
              }
              if (onlyRemoveTypeImports) {
                NEEDS_EXPLICIT_ESM.set(path.node, false);
              } else {
                if (stmt.node.specifiers.length === 0) {
                  NEEDS_EXPLICIT_ESM.set(path.node, false);
                  continue;
                }
                for (const specifier of stmt.node.specifiers) {
                  const binding = stmt.scope.getBinding(specifier.local.name);
                  if (binding && !importsToRemove.has(binding.path)) {
                    if (isImportTypeOnly({
                      binding,
                      programPath: path,
                      pragmaImportName,
                      pragmaFragImportName
                    })) {
                      importsToRemove.add(binding.path);
                    } else {
                      NEEDS_EXPLICIT_ESM.set(path.node, false);
                    }
                  }
                }
              }
              if (isAllSpecifiersElided() && !onlyRemoveTypeImports) {
                stmt.remove();
              } else {
                for (const importPath of importsToRemove) {
                  importPath.remove();
                }
              }
              continue;
            }
            if (stmt.isExportDeclaration()) {
              stmt = stmt.get("declaration");
            }
            if (stmt.isVariableDeclaration({
              declare: true
            })) {
              for (const name of Object.keys(stmt.getBindingIdentifiers())) {
                (0, _globalTypes.registerGlobalType)(programScope, name);
              }
            } else if (stmt.isTSTypeAliasDeclaration() || stmt.isTSDeclareFunction() && stmt.get("id").isIdentifier() || stmt.isTSInterfaceDeclaration() || stmt.isClassDeclaration({
              declare: true
            }) || stmt.isTSEnumDeclaration({
              declare: true
            }) || stmt.isTSModuleDeclaration({
              declare: true
            }) && stmt.get("id").isIdentifier()) {
              (0, _globalTypes.registerGlobalType)(programScope, stmt.node.id.name);
            }
          }
        },
        exit(path) {
          if (path.node.sourceType === "module" && NEEDS_EXPLICIT_ESM.get(path.node)) {
            path.pushContainer("body", t.exportNamedDeclaration());
          }
        }
      },
      ExportNamedDeclaration(path, state) {
        if (!NEEDS_EXPLICIT_ESM.has(state.file.ast.program)) {
          NEEDS_EXPLICIT_ESM.set(state.file.ast.program, true);
        }
        if (path.node.exportKind === "type") {
          path.remove();
          return;
        }
        if (path.node.source && path.node.specifiers.length > 0 && path.node.specifiers.every(specifier => specifier.type === "ExportSpecifier" && specifier.exportKind === "type")) {
          path.remove();
          return;
        }
        if (!path.node.source && path.node.specifiers.length > 0 && path.node.specifiers.every(specifier => t.isExportSpecifier(specifier) && (0, _globalTypes.isGlobalType)(path, specifier.local.name))) {
          path.remove();
          return;
        }
        if (t.isTSModuleDeclaration(path.node.declaration)) {
          const namespace = path.node.declaration;
          const {
            id
          } = namespace;
          if (t.isIdentifier(id)) {
            if (path.scope.hasOwnBinding(id.name)) {
              path.replaceWith(namespace);
            } else {
              const [newExport] = path.replaceWithMultiple([t.exportNamedDeclaration(t.variableDeclaration("let", [t.variableDeclarator(t.cloneNode(id))])), namespace]);
              path.scope.registerDeclaration(newExport);
            }
          }
        }
        NEEDS_EXPLICIT_ESM.set(state.file.ast.program, false);
      },
      ExportAllDeclaration(path) {
        if (path.node.exportKind === "type") path.remove();
      },
      ExportSpecifier(path) {
        const parent = path.parent;
        if (!parent.source && (0, _globalTypes.isGlobalType)(path, path.node.local.name) || path.node.exportKind === "type") {
          path.remove();
        }
      },
      ExportDefaultDeclaration(path, state) {
        if (!NEEDS_EXPLICIT_ESM.has(state.file.ast.program)) {
          NEEDS_EXPLICIT_ESM.set(state.file.ast.program, true);
        }
        if (t.isIdentifier(path.node.declaration) && (0, _globalTypes.isGlobalType)(path, path.node.declaration.name)) {
          path.remove();
          return;
        }
        NEEDS_EXPLICIT_ESM.set(state.file.ast.program, false);
      },
      TSDeclareFunction(path) {
        safeRemove(path);
      },
      TSDeclareMethod(path) {
        safeRemove(path);
      },
      VariableDeclaration(path) {
        if (path.node.declare) {
          safeRemove(path);
        }
      },
      VariableDeclarator({
        node
      }) {
        if (node.definite) node.definite = null;
      },
      TSIndexSignature(path) {
        path.remove();
      },
      ClassDeclaration(path) {
        const {
          node
        } = path;
        if (node.declare) {
          safeRemove(path);
        }
      },
      Class(path) {
        const {
          node
        } = path;
        if (node.typeParameters) node.typeParameters = null;
        if (node.superTypeParameters) node.superTypeParameters = null;
        if (node.implements) node.implements = null;
        if (node.abstract) node.abstract = null;
        path.get("body.body").forEach(child => {
          if (child.isClassMethod() || child.isClassPrivateMethod()) {
            if (child.node.kind === "constructor") {
              classMemberVisitors.constructor(child, path);
            } else {
              classMemberVisitors.method(child);
            }
          } else if (child.isClassProperty() || child.isClassPrivateProperty() || child.isClassAccessorProperty()) {
            classMemberVisitors.field(child);
          }
        });
      },
      Function(path) {
        const {
          node
        } = path;
        if (node.typeParameters) node.typeParameters = null;
        if (node.returnType) node.returnType = null;
        const params = node.params;
        if (params.length > 0 && t.isIdentifier(params[0], {
          name: "this"
        })) {
          params.shift();
        }
      },
      TSModuleDeclaration(path) {
        (0, _namespace.default)(path, allowNamespaces);
      },
      TSInterfaceDeclaration(path) {
        path.remove();
      },
      TSTypeAliasDeclaration(path) {
        path.remove();
      },
      TSEnumDeclaration(path) {
        if (optimizeConstEnums && path.node.const) {
          (0, _constEnum.default)(path, t);
        } else {
          (0, _enum.default)(path, t);
        }
      },
      TSImportEqualsDeclaration(path, pass) {
        const {
          id,
          moduleReference
        } = path.node;
        let init;
        let varKind;
        if (t.isTSExternalModuleReference(moduleReference)) {
          assertCjsTransformEnabled(path, pass, `import ${id.name} = require(...);`, `import ${id.name} from '...';`, " alongside Typescript's --allowSyntheticDefaultImports option");
          init = t.callExpression(t.identifier("require"), [moduleReference.expression]);
          varKind = "const";
        } else {
          init = entityNameToExpr(moduleReference);
          varKind = "var";
        }
        path.replaceWith(t.variableDeclaration(varKind, [t.variableDeclarator(id, init)]));
        path.scope.registerDeclaration(path);
      },
      TSExportAssignment(path, pass) {
        assertCjsTransformEnabled(path, pass, `export = <value>;`, `export default <value>;`);
        path.replaceWith(template.statement.ast`module.exports = ${path.node.expression}`);
      },
      TSTypeAssertion(path) {
        path.replaceWith(path.node.expression);
      },
      [`TSAsExpression${t.tsSatisfiesExpression ? "|TSSatisfiesExpression" : ""}`](path) {
        let {
          node
        } = path;
        do {
          node = node.expression;
        } while (t.isTSAsExpression(node) || t.isTSSatisfiesExpression != null && t.isTSSatisfiesExpression(node));
        path.replaceWith(node);
      },
      [api.types.tsInstantiationExpression ? "TSNonNullExpression|TSInstantiationExpression" : "TSNonNullExpression"](path) {
        path.replaceWith(path.node.expression);
      },
      CallExpression(path) {
        path.node.typeParameters = null;
      },
      OptionalCallExpression(path) {
        path.node.typeParameters = null;
      },
      NewExpression(path) {
        path.node.typeParameters = null;
      },
      JSXOpeningElement(path) {
        path.node.typeParameters = null;
      },
      TaggedTemplateExpression(path) {
        path.node.typeParameters = null;
      }
    }
  };
  function entityNameToExpr(node) {
    if (t.isTSQualifiedName(node)) {
      return t.memberExpression(entityNameToExpr(node.left), node.right);
    }
    return node;
  }
  function visitPattern({
    node
  }) {
    if (node.typeAnnotation) node.typeAnnotation = null;
    if (t.isIdentifier(node) && node.optional) node.optional = null;
  }
  function isImportTypeOnly({
    binding,
    programPath,
    pragmaImportName,
    pragmaFragImportName
  }) {
    for (const path of binding.referencePaths) {
      if (!isInType(path)) {
        return false;
      }
    }
    if (binding.identifier.name !== pragmaImportName && binding.identifier.name !== pragmaFragImportName) {
      return true;
    }
    let sourceFileHasJsx = false;
    programPath.traverse({
      "JSXElement|JSXFragment"(path) {
        sourceFileHasJsx = true;
        path.stop();
      }
    });
    return !sourceFileHasJsx;
  }
});

//# sourceMappingURL=index.js.map
