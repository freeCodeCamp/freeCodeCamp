"use strict";

exports.__esModule = true;
exports.default = void 0;
var _data = _interopRequireDefault(require("../core-js-compat/data.js"));
var _shippedProposals = _interopRequireDefault(require("./shipped-proposals"));
var _getModulesListForTargetVersion = _interopRequireDefault(require("../core-js-compat/get-modules-list-for-target-version.js"));
var _builtInDefinitions = require("./built-in-definitions");
var _usageFilters = _interopRequireDefault(require("./usage-filters"));
var _babel = _interopRequireWildcard(require("@babel/core"));
var _utils = require("./utils");
var _helperDefinePolyfillProvider = _interopRequireDefault(require("@babel/helper-define-polyfill-provider"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const {
  types: t
} = _babel.default || _babel;
const presetEnvCompat = "#__secret_key__@babel/preset-env__compatibility";
const runtimeCompat = "#__secret_key__@babel/runtime__compatibility";
const uniqueObjects = ["array", "string", "iterator", "async-iterator", "dom-collections"].map(v => new RegExp(`[a-z]*\\.${v}\\..*`));
const esnextFallback = (name, cb) => {
  if (cb(name)) return true;
  if (!name.startsWith("es.")) return false;
  const fallback = `esnext.${name.slice(3)}`;
  if (!_data.default[fallback]) return false;
  return cb(fallback);
};
var _default = (0, _helperDefinePolyfillProvider.default)(function ({
  getUtils,
  method,
  shouldInjectPolyfill,
  createMetaResolver,
  debug,
  babel
}, {
  version = 3,
  proposals,
  shippedProposals,
  [presetEnvCompat]: {
    noRuntimeName = false
  } = {},
  [runtimeCompat]: {
    useBabelRuntime = false,
    ext = ".js"
  } = {}
}) {
  const isWebpack = babel.caller(caller => (caller == null ? void 0 : caller.name) === "babel-loader");
  const resolve = createMetaResolver({
    global: _builtInDefinitions.BuiltIns,
    static: _builtInDefinitions.StaticProperties,
    instance: _builtInDefinitions.InstanceProperties
  });
  const available = new Set((0, _getModulesListForTargetVersion.default)(version));
  function getCoreJSPureBase(useProposalBase) {
    return useBabelRuntime ? useProposalBase ? `${_utils.BABEL_RUNTIME}/core-js` : `${_utils.BABEL_RUNTIME}/core-js-stable` : useProposalBase ? "core-js-pure/features" : "core-js-pure/stable";
  }
  function maybeInjectGlobalImpl(name, utils) {
    if (shouldInjectPolyfill(name)) {
      debug(name);
      utils.injectGlobalImport((0, _utils.coreJSModule)(name));
      return true;
    }
    return false;
  }
  function maybeInjectGlobal(names, utils, fallback = true) {
    for (const name of names) {
      if (fallback) {
        esnextFallback(name, name => maybeInjectGlobalImpl(name, utils));
      } else {
        maybeInjectGlobalImpl(name, utils);
      }
    }
  }
  function maybeInjectPure(desc, hint, utils, object) {
    if (desc.pure && !(object && desc.exclude && desc.exclude.includes(object)) && esnextFallback(desc.name, shouldInjectPolyfill)) {
      const {
        name
      } = desc;
      let useProposalBase = false;
      if (proposals || shippedProposals && name.startsWith("esnext.")) {
        useProposalBase = true;
      } else if (name.startsWith("es.") && !available.has(name)) {
        useProposalBase = true;
      }
      const coreJSPureBase = getCoreJSPureBase(useProposalBase);
      return utils.injectDefaultImport(`${coreJSPureBase}/${desc.pure}${ext}`, hint);
    }
  }
  function isFeatureStable(name) {
    if (name.startsWith("esnext.")) {
      const esName = `es.${name.slice(7)}`;
      // If its imaginative esName is not in latest compat data, it means
      // the proposal is not stage 4
      return esName in _data.default;
    }
    return true;
  }
  return {
    name: "corejs3",
    runtimeName: noRuntimeName ? null : _utils.BABEL_RUNTIME,
    polyfills: _data.default,
    filterPolyfills(name) {
      if (!available.has(name)) return false;
      if (proposals || method === "entry-global") return true;
      if (shippedProposals && _shippedProposals.default.has(name)) {
        return true;
      }
      return isFeatureStable(name);
    },
    entryGlobal(meta, utils, path) {
      if (meta.kind !== "import") return;
      const modules = (0, _utils.isCoreJSSource)(meta.source);
      if (!modules) return;
      if (modules.length === 1 && meta.source === (0, _utils.coreJSModule)(modules[0]) && shouldInjectPolyfill(modules[0])) {
        // Avoid infinite loop: do not replace imports with a new copy of
        // themselves.
        debug(null);
        return;
      }
      const modulesSet = new Set(modules);
      const filteredModules = modules.filter(module => {
        if (!module.startsWith("esnext.")) return true;
        const stable = module.replace("esnext.", "es.");
        if (modulesSet.has(stable) && shouldInjectPolyfill(stable)) {
          return false;
        }
        return true;
      });
      maybeInjectGlobal(filteredModules, utils, false);
      path.remove();
    },
    usageGlobal(meta, utils, path) {
      const resolved = resolve(meta);
      if (!resolved) return;
      if ((0, _usageFilters.default)(resolved.desc, path)) return;
      let deps = resolved.desc.global;
      if (resolved.kind !== "global" && "object" in meta && meta.object && meta.placement === "prototype") {
        const low = meta.object.toLowerCase();
        deps = deps.filter(m => uniqueObjects.some(v => v.test(m)) ? m.includes(low) : true);
      }
      maybeInjectGlobal(deps, utils);
    },
    usagePure(meta, utils, path) {
      if (meta.kind === "in") {
        if (meta.key === "Symbol.iterator") {
          path.replaceWith(t.callExpression(utils.injectDefaultImport((0, _utils.coreJSPureHelper)("is-iterable", useBabelRuntime, ext), "isIterable"), [path.node.right] // meta.kind === "in" narrows this
          ));
        }

        return;
      }
      if (path.parentPath.isUnaryExpression({
        operator: "delete"
      })) return;
      if (meta.kind === "property") {
        // We can't compile destructuring and updateExpression.
        if (!path.isMemberExpression()) return;
        if (!path.isReferenced()) return;
        if (path.parentPath.isUpdateExpression()) return;
        if (t.isSuper(path.node.object)) {
          return;
        }
        if (meta.key === "Symbol.iterator") {
          if (!shouldInjectPolyfill("es.symbol.iterator")) return;
          const {
            parent,
            node
          } = path;
          if (t.isCallExpression(parent, {
            callee: node
          })) {
            if (parent.arguments.length === 0) {
              path.parentPath.replaceWith(t.callExpression(utils.injectDefaultImport((0, _utils.coreJSPureHelper)("get-iterator", useBabelRuntime, ext), "getIterator"), [node.object]));
              path.skip();
            } else {
              (0, _utils.callMethod)(path, utils.injectDefaultImport((0, _utils.coreJSPureHelper)("get-iterator-method", useBabelRuntime, ext), "getIteratorMethod"));
            }
          } else {
            path.replaceWith(t.callExpression(utils.injectDefaultImport((0, _utils.coreJSPureHelper)("get-iterator-method", useBabelRuntime, ext), "getIteratorMethod"), [path.node.object]));
          }
          return;
        }
      }
      let resolved = resolve(meta);
      if (!resolved) return;
      if ((0, _usageFilters.default)(resolved.desc, path)) return;
      if (useBabelRuntime && resolved.desc.pure && resolved.desc.pure.slice(-6) === "/index") {
        // Remove /index, since it doesn't exist in @babel/runtime-corejs3s
        resolved = _extends({}, resolved, {
          desc: _extends({}, resolved.desc, {
            pure: resolved.desc.pure.slice(0, -6)
          })
        });
      }
      if (resolved.kind === "global") {
        const id = maybeInjectPure(resolved.desc, resolved.name, utils);
        if (id) path.replaceWith(id);
      } else if (resolved.kind === "static") {
        const id = maybeInjectPure(resolved.desc, resolved.name, utils,
        // @ts-expect-error
        meta.object);
        if (id) path.replaceWith(id);
      } else if (resolved.kind === "instance") {
        const id = maybeInjectPure(resolved.desc, `${resolved.name}InstanceProperty`, utils,
        // @ts-expect-error
        meta.object);
        if (!id) return;
        const {
          node
        } = path;
        if (t.isCallExpression(path.parent, {
          callee: node
        })) {
          (0, _utils.callMethod)(path, id);
        } else {
          path.replaceWith(t.callExpression(id, [node.object]));
        }
      }
    },
    visitor: method === "usage-global" && {
      // import("foo")
      CallExpression(path) {
        if (path.get("callee").isImport()) {
          const utils = getUtils(path);
          if (isWebpack) {
            // Webpack uses Promise.all to handle dynamic import.
            maybeInjectGlobal(_builtInDefinitions.PromiseDependenciesWithIterators, utils);
          } else {
            maybeInjectGlobal(_builtInDefinitions.PromiseDependencies, utils);
          }
        }
      },
      // (async function () { }).finally(...)
      Function(path) {
        if (path.node.async) {
          maybeInjectGlobal(_builtInDefinitions.PromiseDependencies, getUtils(path));
        }
      },
      // for-of, [a, b] = c
      "ForOfStatement|ArrayPattern"(path) {
        maybeInjectGlobal(_builtInDefinitions.CommonIterators, getUtils(path));
      },
      // [...spread]
      SpreadElement(path) {
        if (!path.parentPath.isObjectExpression()) {
          maybeInjectGlobal(_builtInDefinitions.CommonIterators, getUtils(path));
        }
      },
      // yield*
      YieldExpression(path) {
        if (path.node.delegate) {
          maybeInjectGlobal(_builtInDefinitions.CommonIterators, getUtils(path));
        }
      },
      // Decorators metadata
      Class(path) {
        var _path$node$decorators;
        const hasDecorators = ((_path$node$decorators = path.node.decorators) == null ? void 0 : _path$node$decorators.length) || path.node.body.body.some(el => {
          var _decorators;
          return (_decorators = el.decorators) == null ? void 0 : _decorators.length;
        });
        if (hasDecorators) {
          maybeInjectGlobal(_builtInDefinitions.DecoratorMetadataDependencies, getUtils(path));
        }
      }
    }
  };
});
exports.default = _default;