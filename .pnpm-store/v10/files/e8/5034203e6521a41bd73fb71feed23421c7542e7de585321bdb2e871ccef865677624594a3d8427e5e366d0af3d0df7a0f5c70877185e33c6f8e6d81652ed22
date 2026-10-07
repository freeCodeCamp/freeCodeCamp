"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "buildDynamicImport", {
  enumerable: true,
  get: function () {
    return _dynamicImport.buildDynamicImport;
  }
});
exports.buildNamespaceInitStatements = buildNamespaceInitStatements;
exports.ensureStatementsHoisted = ensureStatementsHoisted;
Object.defineProperty(exports, "getModuleName", {
  enumerable: true,
  get: function () {
    return _getModuleName.default;
  }
});
Object.defineProperty(exports, "hasExports", {
  enumerable: true,
  get: function () {
    return _normalizeAndLoadMetadata.hasExports;
  }
});
Object.defineProperty(exports, "isModule", {
  enumerable: true,
  get: function () {
    return _helperModuleImports.isModule;
  }
});
Object.defineProperty(exports, "isSideEffectImport", {
  enumerable: true,
  get: function () {
    return _normalizeAndLoadMetadata.isSideEffectImport;
  }
});
exports.rewriteModuleStatementsAndPrepareHeader = rewriteModuleStatementsAndPrepareHeader;
Object.defineProperty(exports, "rewriteThis", {
  enumerable: true,
  get: function () {
    return _rewriteThis.default;
  }
});
exports.wrapInterop = wrapInterop;
var _assert = require("assert");
var _core = require("@babel/core");
var _helperModuleImports = require("@babel/helper-module-imports");
var _rewriteThis = require("./rewrite-this.js");
var _rewriteLiveReferences = require("./rewrite-live-references.js");
var _normalizeAndLoadMetadata = require("./normalize-and-load-metadata.js");
var Lazy = require("./lazy-modules.js");
var _dynamicImport = require("./dynamic-import.js");
var _getModuleName = require("./get-module-name.js");
exports.getDynamicImportSource = require("./dynamic-import").getDynamicImportSource;
function rewriteModuleStatementsAndPrepareHeader(path, {
  exportName,
  strict,
  allowTopLevelThis,
  strictMode,
  noInterop,
  importInterop = noInterop ? "none" : "babel",
  lazy,
  getWrapperPayload = Lazy.toGetWrapperPayload(lazy != null ? lazy : false),
  wrapReference = Lazy.wrapReference,
  esNamespaceOnly,
  filename,
  constantReexports = arguments[1].loose,
  enumerableModuleMeta = arguments[1].loose,
  noIncompleteNsImportDetection
}) {
  (0, _normalizeAndLoadMetadata.validateImportInteropOption)(importInterop);
  _assert((0, _helperModuleImports.isModule)(path), "Cannot process module statements in a script");
  path.node.sourceType = "script";
  const meta = (0, _normalizeAndLoadMetadata.default)(path, exportName, {
    importInterop,
    initializeReexports: constantReexports,
    getWrapperPayload,
    esNamespaceOnly,
    filename
  });
  if (!allowTopLevelThis) {
    (0, _rewriteThis.default)(path);
  }
  (0, _rewriteLiveReferences.default)(path, meta, wrapReference);
  if (strictMode !== false) {
    const hasStrict = path.node.directives.some(directive => {
      return directive.value.value === "use strict";
    });
    if (!hasStrict) {
      path.unshiftContainer("directives", _core.types.directive(_core.types.directiveLiteral("use strict")));
    }
  }
  const headers = [];
  if ((0, _normalizeAndLoadMetadata.hasExports)(meta) && !strict) {
    headers.push(buildESModuleHeader(meta, enumerableModuleMeta));
  }
  const nameList = buildExportNameListDeclaration(path, meta);
  if (nameList) {
    meta.exportNameListName = nameList.name;
    headers.push(nameList.statement);
  }
  headers.push(...buildExportInitializationStatements(path, meta, wrapReference, constantReexports, noIncompleteNsImportDetection));
  return {
    meta,
    headers
  };
}
function ensureStatementsHoisted(statements) {
  statements.forEach(header => {
    header._blockHoist = 3;
  });
}
function wrapInterop(programPath, expr, type) {
  if (type === "none") {
    return null;
  }
  if (type === "node-namespace") {
    return _core.types.callExpression(programPath.hub.addHelper("interopRequireWildcard"), [expr, _core.types.booleanLiteral(true)]);
  } else if (type === "node-default") {
    return null;
  }
  let helper;
  if (type === "default") {
    helper = "interopRequireDefault";
  } else if (type === "namespace") {
    helper = "interopRequireWildcard";
  } else {
    throw new Error(`Unknown interop: ${type}`);
  }
  return _core.types.callExpression(programPath.hub.addHelper(helper), [expr]);
}
function buildNamespaceInitStatements(metadata, sourceMetadata, constantReexports = false, wrapReference = Lazy.wrapReference) {
  var _wrapReference;
  const statements = [];
  const srcNamespaceId = _core.types.identifier(sourceMetadata.name);
  for (const localName of sourceMetadata.importsNamespace) {
    if (localName === sourceMetadata.name) continue;
    statements.push(_core.template.statement`var NAME = SOURCE;`({
      NAME: localName,
      SOURCE: _core.types.cloneNode(srcNamespaceId)
    }));
  }
  const srcNamespace = (_wrapReference = wrapReference(srcNamespaceId, sourceMetadata.wrap)) != null ? _wrapReference : srcNamespaceId;
  if (constantReexports) {
    statements.push(...buildReexportsFromMeta(metadata, sourceMetadata, true, wrapReference));
  }
  for (const exportName of sourceMetadata.reexportNamespace) {
    statements.push((!_core.types.isIdentifier(srcNamespace) ? _core.template.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          ` : _core.template.statement`EXPORTS.NAME = NAMESPACE;`)({
      EXPORTS: metadata.exportName,
      NAME: exportName,
      NAMESPACE: _core.types.cloneNode(srcNamespace)
    }));
  }
  if (sourceMetadata.reexportAll) {
    const statement = buildNamespaceReexport(metadata, _core.types.cloneNode(srcNamespace), constantReexports);
    statement.loc = sourceMetadata.reexportAll.loc;
    statements.push(statement);
  }
  return statements;
}
const ReexportTemplate = {
  constant: ({
    exports,
    exportName,
    namespaceImport
  }) => _core.template.statement.ast`
      ${exports}.${exportName} = ${namespaceImport};
    `,
  constantComputed: ({
    exports,
    exportName,
    namespaceImport
  }) => _core.template.statement.ast`
      ${exports}["${exportName}"] = ${namespaceImport};
    `,
  spec: ({
    exports,
    exportName,
    namespaceImport
  }) => _core.template.statement.ast`
      Object.defineProperty(${exports}, "${exportName}", {
        enumerable: true,
        get: function() {
          return ${namespaceImport};
        },
      });
    `
};
function buildReexportsFromMeta(meta, metadata, constantReexports, wrapReference) {
  var _wrapReference2;
  let namespace = _core.types.identifier(metadata.name);
  namespace = (_wrapReference2 = wrapReference(namespace, metadata.wrap)) != null ? _wrapReference2 : namespace;
  const {
    stringSpecifiers
  } = meta;
  return Array.from(metadata.reexports, ([exportName, importName]) => {
    let namespaceImport = _core.types.cloneNode(namespace);
    if (importName === "default" && metadata.interop === "node-default") {} else if (stringSpecifiers.has(importName)) {
      namespaceImport = _core.types.memberExpression(namespaceImport, _core.types.stringLiteral(importName), true);
    } else {
      namespaceImport = _core.types.memberExpression(namespaceImport, _core.types.identifier(importName));
    }
    const astNodes = {
      exports: meta.exportName,
      exportName,
      namespaceImport
    };
    if (constantReexports || _core.types.isIdentifier(namespaceImport)) {
      if (stringSpecifiers.has(exportName)) {
        return ReexportTemplate.constantComputed(astNodes);
      } else {
        return ReexportTemplate.constant(astNodes);
      }
    } else {
      return ReexportTemplate.spec(astNodes);
    }
  });
}
function buildESModuleHeader(metadata, enumerableModuleMeta = false) {
  return (enumerableModuleMeta ? _core.template.statement`
        EXPORTS.__esModule = true;
      ` : _core.template.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({
    EXPORTS: metadata.exportName
  });
}
function buildNamespaceReexport(metadata, namespace, constantReexports) {
  return (constantReexports ? _core.template.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          EXPORTS[key] = NAMESPACE[key];
        });
      ` : _core.template.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({
    NAMESPACE: namespace,
    EXPORTS: metadata.exportName,
    VERIFY_NAME_LIST: metadata.exportNameListName ? (0, _core.template)`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({
      EXPORTS_LIST: metadata.exportNameListName
    }) : null
  });
}
function buildExportNameListDeclaration(programPath, metadata) {
  const exportedVars = Object.create(null);
  for (const data of metadata.local.values()) {
    for (const name of data.names) {
      exportedVars[name] = true;
    }
  }
  let hasReexport = false;
  for (const data of metadata.source.values()) {
    for (const exportName of data.reexports.keys()) {
      exportedVars[exportName] = true;
    }
    for (const exportName of data.reexportNamespace) {
      exportedVars[exportName] = true;
    }
    hasReexport = hasReexport || !!data.reexportAll;
  }
  if (!hasReexport || Object.keys(exportedVars).length === 0) return null;
  const name = programPath.scope.generateUidIdentifier("exportNames");
  delete exportedVars.default;
  return {
    name: name.name,
    statement: _core.types.variableDeclaration("var", [_core.types.variableDeclarator(name, _core.types.valueToNode(exportedVars))])
  };
}
function buildExportInitializationStatements(programPath, metadata, wrapReference, constantReexports = false, noIncompleteNsImportDetection = false) {
  const initStatements = [];
  for (const [localName, data] of metadata.local) {
    if (data.kind === "import") {} else if (data.kind === "hoisted") {
      initStatements.push([data.names[0], buildInitStatement(metadata, data.names, _core.types.identifier(localName))]);
    } else if (!noIncompleteNsImportDetection) {
      for (const exportName of data.names) {
        initStatements.push([exportName, null]);
      }
    }
  }
  for (const data of metadata.source.values()) {
    if (!constantReexports) {
      const reexportsStatements = buildReexportsFromMeta(metadata, data, false, wrapReference);
      const reexports = [...data.reexports.keys()];
      for (let i = 0; i < reexportsStatements.length; i++) {
        initStatements.push([reexports[i], reexportsStatements[i]]);
      }
    }
    if (!noIncompleteNsImportDetection) {
      for (const exportName of data.reexportNamespace) {
        initStatements.push([exportName, null]);
      }
    }
  }
  initStatements.sort(([a], [b]) => {
    if (a < b) return -1;
    if (b < a) return 1;
    return 0;
  });
  const results = [];
  if (noIncompleteNsImportDetection) {
    for (const [, initStatement] of initStatements) {
      results.push(initStatement);
    }
  } else {
    const chunkSize = 100;
    for (let i = 0; i < initStatements.length; i += chunkSize) {
      let uninitializedExportNames = [];
      for (let j = 0; j < chunkSize && i + j < initStatements.length; j++) {
        const [exportName, initStatement] = initStatements[i + j];
        if (initStatement !== null) {
          if (uninitializedExportNames.length > 0) {
            results.push(buildInitStatement(metadata, uninitializedExportNames, programPath.scope.buildUndefinedNode()));
            uninitializedExportNames = [];
          }
          results.push(initStatement);
        } else {
          uninitializedExportNames.push(exportName);
        }
      }
      if (uninitializedExportNames.length > 0) {
        results.push(buildInitStatement(metadata, uninitializedExportNames, programPath.scope.buildUndefinedNode()));
      }
    }
  }
  return results;
}
const InitTemplate = {
  computed: ({
    exports,
    name,
    value
  }) => _core.template.expression.ast`${exports}["${name}"] = ${value}`,
  default: ({
    exports,
    name,
    value
  }) => _core.template.expression.ast`${exports}.${name} = ${value}`,
  define: ({
    exports,
    name,
    value
  }) => _core.template.expression.ast`
      Object.defineProperty(${exports}, "${name}", {
        enumerable: true,
        value: void 0,
        writable: true
      })["${name}"] = ${value}`
};
function buildInitStatement(metadata, exportNames, initExpr) {
  const {
    stringSpecifiers,
    exportName: exports
  } = metadata;
  return _core.types.expressionStatement(exportNames.reduce((value, name) => {
    const params = {
      exports,
      name,
      value
    };
    if (name === "__proto__") {
      return InitTemplate.define(params);
    }
    if (stringSpecifiers.has(name)) {
      return InitTemplate.computed(params);
    }
    return InitTemplate.default(params);
  }, initExpr));
}

//# sourceMappingURL=index.js.map
