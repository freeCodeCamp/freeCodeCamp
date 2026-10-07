"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _helperModuleImports = require("@babel/helper-module-imports");
var _core = require("@babel/core");
var _helpers = require("./helpers.js");
var _index = require("./get-runtime-path/index.js");
var _coreJs = require("./core-js.js");
var _index2 = require("./babel-7/index.cjs");
var _default = exports.default = (0, _helperPluginUtils.declare)((api, options, dirname) => {
  var _options$corejs;
  api.assertVersion(7);
  const {
    helpers: useRuntimeHelpers = true,
    version: runtimeVersion = "7.0.0-beta.0",
    absoluteRuntime = false
  } = options;
  if (typeof useRuntimeHelpers !== "boolean") {
    throw new Error("The 'helpers' option must be undefined, or a boolean.");
  }
  if (typeof absoluteRuntime !== "boolean" && typeof absoluteRuntime !== "string") {
    throw new Error("The 'absoluteRuntime' option must be undefined, a boolean, or a string.");
  }
  if (typeof runtimeVersion !== "string") {
    throw new Error(`The 'version' option must be a version string.`);
  }
  {
    const DUAL_MODE_RUNTIME = "7.13.0";
    var supportsCJSDefault = (0, _helpers.hasMinVersion)(DUAL_MODE_RUNTIME, runtimeVersion);
  }
  function has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  if (has(options, "useBuiltIns")) {
    if (options["useBuiltIns"]) {
      throw new Error("The 'useBuiltIns' option has been removed. The @babel/runtime " + "module now uses builtins by default.");
    } else {
      throw new Error("The 'useBuiltIns' option has been removed. Use the 'corejs'" + "option to polyfill with `core-js` via @babel/runtime.");
    }
  }
  if (has(options, "polyfill")) {
    if (options["polyfill"] === false) {
      throw new Error("The 'polyfill' option has been removed. The @babel/runtime " + "module now skips polyfilling by default.");
    } else {
      throw new Error("The 'polyfill' option has been removed. Use the 'corejs'" + "option to polyfill with `core-js` via @babel/runtime.");
    }
  }
  if (has(options, "moduleName")) {
    throw new Error("The 'moduleName' option has been removed. @babel/transform-runtime " + "no longer supports arbitrary runtimes. If you were using this to " + "set an absolute path for Babel's standard runtimes, please use the " + "'absoluteRuntime' option.");
  }
  ;
  {
    const {
      useESModules = false
    } = options;
    if (typeof useESModules !== "boolean" && useESModules !== "auto") {
      throw new Error("The 'useESModules' option must be undefined, or a boolean, or 'auto'.");
    }
    var esModules = useESModules === "auto" ? api.caller(caller => !!(caller != null && caller.supportsStaticESM)) : useESModules;
  }
  const HEADER_HELPERS = ["interopRequireWildcard", "interopRequireDefault"];
  return {
    name: "transform-runtime",
    inherits: _index2.createPolyfillPlugins(options, runtimeVersion, absoluteRuntime, options.corejs === 3 || ((_options$corejs = options.corejs) == null ? void 0 : _options$corejs.version) === 3 ? (0, _coreJs.createCorejs3Plugin)(options.corejs, absoluteRuntime) : null),
    pre(file) {
      if (!useRuntimeHelpers) return;
      let modulePath;
      file.set("helperGenerator", name => {
        var _modulePath, _file$get;
        (_modulePath = modulePath) != null ? _modulePath : modulePath = (0, _index.default)((_file$get = file.get("runtimeHelpersModuleName")) != null ? _file$get : "@babel/runtime", dirname, absoluteRuntime);
        {
          if (!(file.availableHelper != null && file.availableHelper(name, runtimeVersion))) {
            if (name === "regeneratorRuntime") {
              return _core.types.arrowFunctionExpression([], _core.types.identifier("regeneratorRuntime"));
            }
            return;
          }
        }
        const isInteropHelper = HEADER_HELPERS.indexOf(name) !== -1;
        const blockHoist = isInteropHelper && !(0, _helperModuleImports.isModule)(file.path) ? 4 : undefined;
        let helperPath = `${modulePath}/helpers/${esModules && file.path.node.sourceType === "module" ? "esm/" + name : name}`;
        if (absoluteRuntime) helperPath = (0, _index.resolveFSPath)(helperPath);
        return addDefaultImport(helperPath, name, blockHoist, true);
      });
      const cache = new Map();
      function addDefaultImport(source, nameHint, blockHoist, isHelper = false) {
        const cacheKey = (0, _helperModuleImports.isModule)(file.path);
        const key = `${source}:${nameHint}:${cacheKey || ""}`;
        let cached = cache.get(key);
        if (cached) {
          cached = _core.types.cloneNode(cached);
        } else {
          cached = (0, _helperModuleImports.addDefault)(file.path, source, {
            importedInterop: isHelper && supportsCJSDefault ? "compiled" : "uncompiled",
            nameHint,
            blockHoist
          });
          cache.set(key, cached);
        }
        return cached;
      }
    }
  };
});

//# sourceMappingURL=index.js.map
