"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _path = require("path");
var _helperModuleTransforms = require("@babel/helper-module-transforms");
var _core = require("@babel/core");
const buildPrerequisiteAssignment = (0, _core.template)(`
  GLOBAL_REFERENCE = GLOBAL_REFERENCE || {}
`);
const buildWrapper = (0, _core.template)(`
  (function (global, factory) {
    if (typeof define === "function" && define.amd) {
      define(MODULE_NAME, AMD_ARGUMENTS, factory);
    } else if (typeof exports !== "undefined") {
      factory(COMMONJS_ARGUMENTS);
    } else {
      var mod = { exports: {} };
      factory(BROWSER_ARGUMENTS);

      GLOBAL_TO_ASSIGN;
    }
  })(
    typeof globalThis !== "undefined" ? globalThis
      : typeof self !== "undefined" ? self
      : this,
    function(IMPORT_NAMES) {
  })
`);
var _default = exports.default = (0, _helperPluginUtils.declare)((api, options) => {
  var _api$assumption, _api$assumption2;
  api.assertVersion(7);
  const {
    globals,
    exactGlobals,
    allowTopLevelThis,
    strict,
    strictMode,
    noInterop,
    importInterop
  } = options;
  const constantReexports = (_api$assumption = api.assumption("constantReexports")) != null ? _api$assumption : options.loose;
  const enumerableModuleMeta = (_api$assumption2 = api.assumption("enumerableModuleMeta")) != null ? _api$assumption2 : options.loose;
  function buildBrowserInit(browserGlobals, exactGlobals, filename, moduleName) {
    const moduleNameOrBasename = moduleName ? moduleName.value : (0, _path.basename)(filename, (0, _path.extname)(filename));
    let globalToAssign = _core.types.memberExpression(_core.types.identifier("global"), _core.types.identifier(_core.types.toIdentifier(moduleNameOrBasename)));
    let initAssignments = [];
    if (exactGlobals) {
      const globalName = browserGlobals[moduleNameOrBasename];
      if (globalName) {
        initAssignments = [];
        const members = globalName.split(".");
        globalToAssign = members.slice(1).reduce((accum, curr) => {
          initAssignments.push(buildPrerequisiteAssignment({
            GLOBAL_REFERENCE: _core.types.cloneNode(accum)
          }));
          return _core.types.memberExpression(accum, _core.types.identifier(curr));
        }, _core.types.memberExpression(_core.types.identifier("global"), _core.types.identifier(members[0])));
      }
    }
    initAssignments.push(_core.types.expressionStatement(_core.types.assignmentExpression("=", globalToAssign, _core.types.memberExpression(_core.types.identifier("mod"), _core.types.identifier("exports")))));
    return initAssignments;
  }
  function buildBrowserArg(browserGlobals, exactGlobals, source) {
    let memberExpression;
    if (exactGlobals) {
      const globalRef = browserGlobals[source];
      if (globalRef) {
        memberExpression = globalRef.split(".").reduce((accum, curr) => _core.types.memberExpression(accum, _core.types.identifier(curr)), _core.types.identifier("global"));
      } else {
        memberExpression = _core.types.memberExpression(_core.types.identifier("global"), _core.types.identifier(_core.types.toIdentifier(source)));
      }
    } else {
      const requireName = (0, _path.basename)(source, (0, _path.extname)(source));
      const globalName = browserGlobals[requireName] || requireName;
      memberExpression = _core.types.memberExpression(_core.types.identifier("global"), _core.types.identifier(_core.types.toIdentifier(globalName)));
    }
    return memberExpression;
  }
  return {
    name: "transform-modules-umd",
    visitor: {
      Program: {
        exit(path) {
          if (!(0, _helperModuleTransforms.isModule)(path)) return;
          const browserGlobals = globals || {};
          const moduleName = (0, _helperModuleTransforms.getModuleName)(this.file.opts, options);
          let moduleNameLiteral;
          if (moduleName) moduleNameLiteral = _core.types.stringLiteral(moduleName);
          const {
            meta,
            headers
          } = (0, _helperModuleTransforms.rewriteModuleStatementsAndPrepareHeader)(path, {
            constantReexports,
            enumerableModuleMeta,
            strict,
            strictMode,
            allowTopLevelThis,
            noInterop,
            importInterop,
            filename: this.file.opts.filename
          });
          const amdArgs = [];
          const commonjsArgs = [];
          const browserArgs = [];
          const importNames = [];
          if ((0, _helperModuleTransforms.hasExports)(meta)) {
            amdArgs.push(_core.types.stringLiteral("exports"));
            commonjsArgs.push(_core.types.identifier("exports"));
            browserArgs.push(_core.types.memberExpression(_core.types.identifier("mod"), _core.types.identifier("exports")));
            importNames.push(_core.types.identifier(meta.exportName));
          }
          for (const [source, metadata] of meta.source) {
            amdArgs.push(_core.types.stringLiteral(source));
            commonjsArgs.push(_core.types.callExpression(_core.types.identifier("require"), [_core.types.stringLiteral(source)]));
            browserArgs.push(buildBrowserArg(browserGlobals, exactGlobals, source));
            importNames.push(_core.types.identifier(metadata.name));
            if (!(0, _helperModuleTransforms.isSideEffectImport)(metadata)) {
              const interop = (0, _helperModuleTransforms.wrapInterop)(path, _core.types.identifier(metadata.name), metadata.interop);
              if (interop) {
                const header = _core.types.expressionStatement(_core.types.assignmentExpression("=", _core.types.identifier(metadata.name), interop));
                header.loc = meta.loc;
                headers.push(header);
              }
            }
            headers.push(...(0, _helperModuleTransforms.buildNamespaceInitStatements)(meta, metadata, constantReexports));
          }
          (0, _helperModuleTransforms.ensureStatementsHoisted)(headers);
          path.unshiftContainer("body", headers);
          const {
            body,
            directives
          } = path.node;
          path.node.directives = [];
          path.node.body = [];
          const umdWrapper = path.pushContainer("body", [buildWrapper({
            MODULE_NAME: moduleNameLiteral,
            AMD_ARGUMENTS: _core.types.arrayExpression(amdArgs),
            COMMONJS_ARGUMENTS: commonjsArgs,
            BROWSER_ARGUMENTS: browserArgs,
            IMPORT_NAMES: importNames,
            GLOBAL_TO_ASSIGN: buildBrowserInit(browserGlobals, exactGlobals, this.filename || "unknown", moduleNameLiteral)
          })])[0];
          const umdFactory = umdWrapper.get("expression.arguments")[1].get("body");
          umdFactory.pushContainer("directives", directives);
          umdFactory.pushContainer("body", body);
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
