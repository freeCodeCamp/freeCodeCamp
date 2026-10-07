"use strict";

exports.__esModule = true;
exports.default = void 0;
var _corejs2BuiltIns = _interopRequireDefault(require("@babel/compat-data/corejs2-built-ins"));
var _builtInDefinitions = require("./built-in-definitions");
var _addPlatformSpecificPolyfills = _interopRequireDefault(require("./add-platform-specific-polyfills"));
var _helpers = require("./helpers");
var _helperDefinePolyfillProvider = _interopRequireDefault(require("@babel/helper-define-polyfill-provider"));
var _babel = _interopRequireWildcard(require("@babel/core"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  types: t
} = _babel.default || _babel;
const BABEL_RUNTIME = "@babel/runtime-corejs2";
const presetEnvCompat = "#__secret_key__@babel/preset-env__compatibility";
const runtimeCompat = "#__secret_key__@babel/runtime__compatibility";
const has = Function.call.bind(Object.hasOwnProperty);
var _default = (0, _helperDefinePolyfillProvider.default)(function (api, {
  [presetEnvCompat]: {
    entryInjectRegenerator = false,
    noRuntimeName = false
  } = {},
  [runtimeCompat]: {
    useBabelRuntime = false,
    runtimeVersion = "",
    ext = ".js"
  } = {}
}) {
  const resolve = api.createMetaResolver({
    global: _builtInDefinitions.BuiltIns,
    static: _builtInDefinitions.StaticProperties,
    instance: _builtInDefinitions.InstanceProperties
  });
  const {
    debug,
    shouldInjectPolyfill,
    method
  } = api;
  const polyfills = (0, _addPlatformSpecificPolyfills.default)(api.targets, method, _corejs2BuiltIns.default);
  const coreJSBase = useBabelRuntime ? `${BABEL_RUNTIME}/core-js` : method === "usage-pure" ? "core-js/library/fn" : "core-js/modules";
  function inject(name, utils) {
    if (typeof name === "string") {
      // Some polyfills aren't always available, for example
      // web.dom.iterable when targeting node
      if (has(polyfills, name) && shouldInjectPolyfill(name)) {
        debug(name);
        utils.injectGlobalImport(`${coreJSBase}/${name}.js`);
      }
      return;
    }
    name.forEach(name => inject(name, utils));
  }
  function maybeInjectPure(desc, hint, utils) {
    let {
      pure,
      meta,
      name
    } = desc;
    if (!pure || !shouldInjectPolyfill(name)) return;
    if (runtimeVersion && meta && meta.minRuntimeVersion && !(0, _helpers.hasMinVersion)(meta && meta.minRuntimeVersion, runtimeVersion)) {
      return;
    }

    // Unfortunately core-js and @babel/runtime-corejs2 don't have the same
    // directory structure, so we need to special case this.
    if (useBabelRuntime && pure === "symbol/index") pure = "symbol";
    return utils.injectDefaultImport(`${coreJSBase}/${pure}${ext}`, hint);
  }
  return {
    name: "corejs2",
    runtimeName: noRuntimeName ? null : BABEL_RUNTIME,
    polyfills,
    entryGlobal(meta, utils, path) {
      if (meta.kind === "import" && meta.source === "core-js") {
        debug(null);
        inject(Object.keys(polyfills), utils);
        if (entryInjectRegenerator) {
          utils.injectGlobalImport("regenerator-runtime/runtime.js");
        }
        path.remove();
      }
    },
    usageGlobal(meta, utils) {
      const resolved = resolve(meta);
      if (!resolved) return;
      let deps = resolved.desc.global;
      if (resolved.kind !== "global" && "object" in meta && meta.object && meta.placement === "prototype") {
        const low = meta.object.toLowerCase();
        deps = deps.filter(m => m.includes(low));
      }
      inject(deps, utils);
    },
    usagePure(meta, utils, path) {
      if (meta.kind === "in") {
        if (meta.key === "Symbol.iterator") {
          path.replaceWith(t.callExpression(utils.injectDefaultImport(`${coreJSBase}/is-iterable${ext}`, "isIterable"), [path.node.right] // meta.kind === "in" narrows this
          ));
        }

        return;
      }
      if (path.parentPath.isUnaryExpression({
        operator: "delete"
      })) return;
      if (meta.kind === "property") {
        // We can't compile destructuring.
        if (!path.isMemberExpression()) return;
        if (!path.isReferenced()) return;
        if (meta.key === "Symbol.iterator" && shouldInjectPolyfill("es6.symbol") && path.parentPath.isCallExpression({
          callee: path.node
        }) && path.parentPath.node.arguments.length === 0) {
          path.parentPath.replaceWith(t.callExpression(utils.injectDefaultImport(`${coreJSBase}/get-iterator${ext}`, "getIterator"), [path.node.object]));
          path.skip();
          return;
        }
      }
      const resolved = resolve(meta);
      if (!resolved) return;
      const id = maybeInjectPure(resolved.desc, resolved.name, utils);
      if (id) path.replaceWith(id);
    },
    visitor: method === "usage-global" && {
      // yield*
      YieldExpression(path) {
        if (path.node.delegate) {
          inject("web.dom.iterable", api.getUtils(path));
        }
      },
      // for-of, [a, b] = c
      "ForOfStatement|ArrayPattern"(path) {
        _builtInDefinitions.CommonIterators.forEach(name => inject(name, api.getUtils(path)));
      }
    }
  };
});
exports.default = _default;