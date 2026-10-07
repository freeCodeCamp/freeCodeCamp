"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeModuleAndLoadMetadata;
exports.hasExports = hasExports;
exports.isSideEffectImport = isSideEffectImport;
exports.validateImportInteropOption = validateImportInteropOption;
var _path = require("path");
var _helperValidatorIdentifier = require("@babel/helper-validator-identifier");
function hasExports(metadata) {
  return metadata.hasExports;
}
function isSideEffectImport(source) {
  return source.imports.size === 0 && source.importsNamespace.size === 0 && source.reexports.size === 0 && source.reexportNamespace.size === 0 && !source.reexportAll;
}
function validateImportInteropOption(importInterop) {
  if (typeof importInterop !== "function" && importInterop !== "none" && importInterop !== "babel" && importInterop !== "node") {
    throw new Error(`.importInterop must be one of "none", "babel", "node", or a function returning one of those values (received ${importInterop}).`);
  }
  return importInterop;
}
function resolveImportInterop(importInterop, source, filename) {
  if (typeof importInterop === "function") {
    return validateImportInteropOption(importInterop(source, filename));
  }
  return importInterop;
}
function normalizeModuleAndLoadMetadata(programPath, exportName, {
  importInterop,
  initializeReexports = false,
  getWrapperPayload,
  esNamespaceOnly = false,
  filename
}) {
  if (!exportName) {
    exportName = programPath.scope.generateUidIdentifier("exports").name;
  }
  const stringSpecifiers = new Set();
  nameAnonymousExports(programPath);
  const {
    local,
    sources,
    hasExports
  } = getModuleMetadata(programPath, {
    initializeReexports,
    getWrapperPayload
  }, stringSpecifiers);
  removeImportExportDeclarations(programPath);
  for (const [source, metadata] of sources) {
    const {
      importsNamespace,
      imports
    } = metadata;
    if (importsNamespace.size > 0 && imports.size === 0) {
      const [nameOfnamespace] = importsNamespace;
      metadata.name = nameOfnamespace;
    }
    const resolvedInterop = resolveImportInterop(importInterop, source, filename);
    if (resolvedInterop === "none") {
      metadata.interop = "none";
    } else if (resolvedInterop === "node" && metadata.interop === "namespace") {
      metadata.interop = "node-namespace";
    } else if (resolvedInterop === "node" && metadata.interop === "default") {
      metadata.interop = "node-default";
    } else if (esNamespaceOnly && metadata.interop === "namespace") {
      metadata.interop = "default";
    }
  }
  return {
    exportName,
    exportNameListName: null,
    hasExports,
    local,
    source: sources,
    stringSpecifiers
  };
}
function getExportSpecifierName(path, stringSpecifiers) {
  if (path.isIdentifier()) {
    return path.node.name;
  } else if (path.isStringLiteral()) {
    const stringValue = path.node.value;
    if (!(0, _helperValidatorIdentifier.isIdentifierName)(stringValue)) {
      stringSpecifiers.add(stringValue);
    }
    return stringValue;
  } else {
    throw new Error(`Expected export specifier to be either Identifier or StringLiteral, got ${path.node.type}`);
  }
}
function assertExportSpecifier(path) {
  if (path.isExportSpecifier()) {
    return;
  } else if (path.isExportNamespaceSpecifier()) {
    throw path.buildCodeFrameError("Export namespace should be first transformed by `@babel/plugin-transform-export-namespace-from`.");
  } else {
    throw path.buildCodeFrameError("Unexpected export specifier type");
  }
}
function getModuleMetadata(programPath, {
  getWrapperPayload,
  initializeReexports
}, stringSpecifiers) {
  const localData = getLocalExportMetadata(programPath, initializeReexports, stringSpecifiers);
  const importNodes = new Map();
  const sourceData = new Map();
  const getData = (sourceNode, node) => {
    const source = sourceNode.value;
    let data = sourceData.get(source);
    if (!data) {
      data = {
        name: programPath.scope.generateUidIdentifier((0, _path.basename)(source, (0, _path.extname)(source))).name,
        interop: "none",
        loc: null,
        imports: new Map(),
        importsNamespace: new Set(),
        reexports: new Map(),
        reexportNamespace: new Set(),
        reexportAll: null,
        wrap: null,
        get lazy() {
          return this.wrap === "lazy";
        },
        referenced: false
      };
      sourceData.set(source, data);
      importNodes.set(source, [node]);
    } else {
      importNodes.get(source).push(node);
    }
    return data;
  };
  let hasExports = false;
  programPath.get("body").forEach(child => {
    if (child.isImportDeclaration()) {
      const data = getData(child.node.source, child.node);
      if (!data.loc) data.loc = child.node.loc;
      child.get("specifiers").forEach(spec => {
        if (spec.isImportDefaultSpecifier()) {
          const localName = spec.get("local").node.name;
          data.imports.set(localName, "default");
          const reexport = localData.get(localName);
          if (reexport) {
            localData.delete(localName);
            reexport.names.forEach(name => {
              data.reexports.set(name, "default");
            });
            data.referenced = true;
          }
        } else if (spec.isImportNamespaceSpecifier()) {
          const localName = spec.get("local").node.name;
          data.importsNamespace.add(localName);
          const reexport = localData.get(localName);
          if (reexport) {
            localData.delete(localName);
            reexport.names.forEach(name => {
              data.reexportNamespace.add(name);
            });
            data.referenced = true;
          }
        } else if (spec.isImportSpecifier()) {
          const importName = getExportSpecifierName(spec.get("imported"), stringSpecifiers);
          const localName = spec.get("local").node.name;
          data.imports.set(localName, importName);
          const reexport = localData.get(localName);
          if (reexport) {
            localData.delete(localName);
            reexport.names.forEach(name => {
              data.reexports.set(name, importName);
            });
            data.referenced = true;
          }
        }
      });
    } else if (child.isExportAllDeclaration()) {
      hasExports = true;
      const data = getData(child.node.source, child.node);
      if (!data.loc) data.loc = child.node.loc;
      data.reexportAll = {
        loc: child.node.loc
      };
      data.referenced = true;
    } else if (child.isExportNamedDeclaration() && child.node.source) {
      hasExports = true;
      const data = getData(child.node.source, child.node);
      if (!data.loc) data.loc = child.node.loc;
      child.get("specifiers").forEach(spec => {
        assertExportSpecifier(spec);
        const importName = getExportSpecifierName(spec.get("local"), stringSpecifiers);
        const exportName = getExportSpecifierName(spec.get("exported"), stringSpecifiers);
        data.reexports.set(exportName, importName);
        data.referenced = true;
        if (exportName === "__esModule") {
          throw spec.get("exported").buildCodeFrameError('Illegal export "__esModule".');
        }
      });
    } else if (child.isExportNamedDeclaration() || child.isExportDefaultDeclaration()) {
      hasExports = true;
    }
  });
  for (const metadata of sourceData.values()) {
    let needsDefault = false;
    let needsNamed = false;
    if (metadata.importsNamespace.size > 0) {
      needsDefault = true;
      needsNamed = true;
    }
    if (metadata.reexportAll) {
      needsNamed = true;
    }
    for (const importName of metadata.imports.values()) {
      if (importName === "default") needsDefault = true;else needsNamed = true;
    }
    for (const importName of metadata.reexports.values()) {
      if (importName === "default") needsDefault = true;else needsNamed = true;
    }
    if (needsDefault && needsNamed) {
      metadata.interop = "namespace";
    } else if (needsDefault) {
      metadata.interop = "default";
    }
  }
  if (getWrapperPayload) {
    for (const [source, metadata] of sourceData) {
      metadata.wrap = getWrapperPayload(source, metadata, importNodes.get(source));
    }
  }
  return {
    hasExports,
    local: localData,
    sources: sourceData
  };
}
function getLocalExportMetadata(programPath, initializeReexports, stringSpecifiers) {
  const bindingKindLookup = new Map();
  const programScope = programPath.scope;
  const programChildren = programPath.get("body");
  programChildren.forEach(child => {
    let kind;
    if (child.isImportDeclaration()) {
      kind = "import";
    } else {
      if (child.isExportDefaultDeclaration()) {
        child = child.get("declaration");
      }
      if (child.isExportNamedDeclaration()) {
        if (child.node.declaration) {
          child = child.get("declaration");
        } else if (initializeReexports && child.node.source && child.get("source").isStringLiteral()) {
          child.get("specifiers").forEach(spec => {
            assertExportSpecifier(spec);
            bindingKindLookup.set(spec.get("local").node.name, "block");
          });
          return;
        }
      }
      if (child.isFunctionDeclaration()) {
        kind = "hoisted";
      } else if (child.isClassDeclaration()) {
        kind = "block";
      } else if (child.isVariableDeclaration({
        kind: "var"
      })) {
        kind = "var";
      } else if (child.isVariableDeclaration()) {
        kind = "block";
      } else {
        return;
      }
    }
    Object.keys(child.getOuterBindingIdentifiers()).forEach(name => {
      bindingKindLookup.set(name, kind);
    });
  });
  const localMetadata = new Map();
  const getLocalMetadata = idPath => {
    const localName = idPath.node.name;
    let metadata = localMetadata.get(localName);
    if (!metadata) {
      var _bindingKindLookup$ge, _programScope$getBind;
      const kind = (_bindingKindLookup$ge = bindingKindLookup.get(localName)) != null ? _bindingKindLookup$ge : (_programScope$getBind = programScope.getBinding(localName)) == null ? void 0 : _programScope$getBind.kind;
      if (kind === undefined) {
        throw idPath.buildCodeFrameError(`Exporting local "${localName}", which is not declared.`);
      }
      metadata = {
        names: [],
        kind
      };
      localMetadata.set(localName, metadata);
    }
    return metadata;
  };
  programChildren.forEach(child => {
    if (child.isExportNamedDeclaration() && (initializeReexports || !child.node.source)) {
      if (child.node.declaration) {
        const declaration = child.get("declaration");
        const ids = declaration.getOuterBindingIdentifierPaths();
        Object.keys(ids).forEach(name => {
          if (name === "__esModule") {
            throw declaration.buildCodeFrameError('Illegal export "__esModule".');
          }
          getLocalMetadata(ids[name]).names.push(name);
        });
      } else {
        child.get("specifiers").forEach(spec => {
          const local = spec.get("local");
          const exported = spec.get("exported");
          const localMetadata = getLocalMetadata(local);
          const exportName = getExportSpecifierName(exported, stringSpecifiers);
          if (exportName === "__esModule") {
            throw exported.buildCodeFrameError('Illegal export "__esModule".');
          }
          localMetadata.names.push(exportName);
        });
      }
    } else if (child.isExportDefaultDeclaration()) {
      const declaration = child.get("declaration");
      if (declaration.isFunctionDeclaration() || declaration.isClassDeclaration()) {
        getLocalMetadata(declaration.get("id")).names.push("default");
      } else {
        throw declaration.buildCodeFrameError("Unexpected default expression export.");
      }
    }
  });
  return localMetadata;
}
function nameAnonymousExports(programPath) {
  programPath.get("body").forEach(child => {
    var _child$splitExportDec;
    if (!child.isExportDefaultDeclaration()) return;
    (_child$splitExportDec = child.splitExportDeclaration) != null ? _child$splitExportDec : child.splitExportDeclaration = require("@babel/traverse").NodePath.prototype.splitExportDeclaration;
    child.splitExportDeclaration();
  });
}
function removeImportExportDeclarations(programPath) {
  programPath.get("body").forEach(child => {
    if (child.isImportDeclaration()) {
      child.remove();
    } else if (child.isExportNamedDeclaration()) {
      if (child.node.declaration) {
        child.node.declaration._blockHoist = child.node._blockHoist;
        child.replaceWith(child.node.declaration);
      } else {
        child.remove();
      }
    } else if (child.isExportDefaultDeclaration()) {
      const declaration = child.get("declaration");
      if (declaration.isFunctionDeclaration() || declaration.isClassDeclaration()) {
        declaration._blockHoist = child.node._blockHoist;
        child.replaceWith(declaration);
      } else {
        throw declaration.buildCodeFrameError("Unexpected default expression export.");
      }
    } else if (child.isExportAllDeclaration()) {
      child.remove();
    }
  });
}

//# sourceMappingURL=normalize-and-load-metadata.js.map
