"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _helperModuleTransforms = require("@babel/helper-module-transforms");
var _core = require("@babel/core");
const buildWrapper = _core.template.statement(`
  define(MODULE_NAME, AMD_ARGUMENTS, function(IMPORT_NAMES) {
  })
`);
const buildAnonymousWrapper = _core.template.statement(`
  define(["require"], function(REQUIRE) {
  })
`);
function injectWrapper(path, wrapper) {
  const {
    body,
    directives
  } = path.node;
  path.node.directives = [];
  path.node.body = [];
  const amdFactoryCall = path.pushContainer("body", wrapper)[0].get("expression");
  const amdFactoryCallArgs = amdFactoryCall.get("arguments");
  const amdFactory = amdFactoryCallArgs[amdFactoryCallArgs.length - 1].get("body");
  amdFactory.pushContainer("directives", directives);
  amdFactory.pushContainer("body", body);
}
var _default = exports.default = (0, _helperPluginUtils.declare)((api, options) => {
  var _api$assumption, _api$assumption2;
  api.assertVersion(7);
  const {
    allowTopLevelThis,
    strict,
    strictMode,
    importInterop,
    noInterop
  } = options;
  const constantReexports = (_api$assumption = api.assumption("constantReexports")) != null ? _api$assumption : options.loose;
  const enumerableModuleMeta = (_api$assumption2 = api.assumption("enumerableModuleMeta")) != null ? _api$assumption2 : options.loose;
  return {
    name: "transform-modules-amd",
    pre() {
      this.file.set("@babel/plugin-transform-modules-*", "amd");
    },
    visitor: {
      ["CallExpression" + (api.types.importExpression ? "|ImportExpression" : "")](path, state) {
        if (!this.file.has("@babel/plugin-proposal-dynamic-import")) return;
        if (path.isCallExpression() && !path.get("callee").isImport()) return;
        let {
          requireId,
          resolveId,
          rejectId
        } = state;
        if (!requireId) {
          requireId = path.scope.generateUidIdentifier("require");
          state.requireId = requireId;
        }
        if (!resolveId || !rejectId) {
          resolveId = path.scope.generateUidIdentifier("resolve");
          rejectId = path.scope.generateUidIdentifier("reject");
          state.resolveId = resolveId;
          state.rejectId = rejectId;
        }
        let result = _core.types.identifier("imported");
        if (!noInterop) {
          result = (0, _helperModuleTransforms.wrapInterop)(this.file.path, result, "namespace");
        }
        path.replaceWith((0, _helperModuleTransforms.buildDynamicImport)(path.node, false, false, specifier => _core.template.expression.ast`
              new Promise((${resolveId}, ${rejectId}) =>
                ${requireId}(
                  [${specifier}],
                  imported => ${_core.types.cloneNode(resolveId)}(${result}),
                  ${_core.types.cloneNode(rejectId)}
                )
              )
            `));
      },
      Program: {
        exit(path, {
          requireId
        }) {
          if (!(0, _helperModuleTransforms.isModule)(path)) {
            if (requireId) {
              injectWrapper(path, buildAnonymousWrapper({
                REQUIRE: _core.types.cloneNode(requireId)
              }));
            }
            return;
          }
          const amdArgs = [];
          const importNames = [];
          if (requireId) {
            amdArgs.push(_core.types.stringLiteral("require"));
            importNames.push(_core.types.cloneNode(requireId));
          }
          let moduleName = (0, _helperModuleTransforms.getModuleName)(this.file.opts, options);
          if (moduleName) moduleName = _core.types.stringLiteral(moduleName);
          const {
            meta,
            headers
          } = (0, _helperModuleTransforms.rewriteModuleStatementsAndPrepareHeader)(path, {
            enumerableModuleMeta,
            constantReexports,
            strict,
            strictMode,
            allowTopLevelThis,
            importInterop,
            noInterop,
            filename: this.file.opts.filename
          });
          if ((0, _helperModuleTransforms.hasExports)(meta)) {
            amdArgs.push(_core.types.stringLiteral("exports"));
            importNames.push(_core.types.identifier(meta.exportName));
          }
          for (const [source, metadata] of meta.source) {
            amdArgs.push(_core.types.stringLiteral(source));
            importNames.push(_core.types.identifier(metadata.name));
            if (!(0, _helperModuleTransforms.isSideEffectImport)(metadata)) {
              const interop = (0, _helperModuleTransforms.wrapInterop)(path, _core.types.identifier(metadata.name), metadata.interop);
              if (interop) {
                const header = _core.types.expressionStatement(_core.types.assignmentExpression("=", _core.types.identifier(metadata.name), interop));
                header.loc = metadata.loc;
                headers.push(header);
              }
            }
            headers.push(...(0, _helperModuleTransforms.buildNamespaceInitStatements)(meta, metadata, constantReexports));
          }
          (0, _helperModuleTransforms.ensureStatementsHoisted)(headers);
          path.unshiftContainer("body", headers);
          injectWrapper(path, buildWrapper({
            MODULE_NAME: moduleName,
            AMD_ARGUMENTS: _core.types.arrayExpression(amdArgs),
            IMPORT_NAMES: importNames
          }));
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
