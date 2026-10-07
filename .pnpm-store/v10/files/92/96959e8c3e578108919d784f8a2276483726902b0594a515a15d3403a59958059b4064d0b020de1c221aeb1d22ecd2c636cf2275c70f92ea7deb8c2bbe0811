"use strict";

exports.__esModule = true;
exports.default = definePolyfillProvider;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _helperCompilationTargets = _interopRequireWildcard(require("@babel/helper-compilation-targets"));
var _utils = require("./utils");
var _importsInjector = _interopRequireDefault(require("./imports-injector"));
var _debugUtils = require("./debug-utils");
var _normalizeOptions = require("./normalize-options");
var v = _interopRequireWildcard(require("./visitors"));
var deps = _interopRequireWildcard(require("./node/dependencies"));
var _metaResolver = _interopRequireDefault(require("./meta-resolver"));
const _excluded = ["method", "targets", "ignoreBrowserslistConfig", "configPath", "debug", "shouldInjectPolyfill", "absoluteImports"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const getTargets = _helperCompilationTargets.default.default || _helperCompilationTargets.default;
function resolveOptions(options, babelApi) {
  const {
      method,
      targets: targetsOption,
      ignoreBrowserslistConfig,
      configPath,
      debug,
      shouldInjectPolyfill,
      absoluteImports
    } = options,
    providerOptions = _objectWithoutPropertiesLoose(options, _excluded);
  if (isEmpty(options)) {
    throw new Error(`\
This plugin requires options, for example:
    {
      "plugins": [
        ["<plugin name>", { method: "usage-pure" }]
      ]
    }

See more options at https://github.com/babel/babel-polyfills/blob/main/docs/usage.md`);
  }
  let methodName;
  if (method === "usage-global") methodName = "usageGlobal";else if (method === "entry-global") methodName = "entryGlobal";else if (method === "usage-pure") methodName = "usagePure";else if (typeof method !== "string") {
    throw new Error(".method must be a string");
  } else {
    throw new Error(`.method must be one of "entry-global", "usage-global"` + ` or "usage-pure" (received ${JSON.stringify(method)})`);
  }
  if (typeof shouldInjectPolyfill === "function") {
    if (options.include || options.exclude) {
      throw new Error(`.include and .exclude are not supported when using the` + ` .shouldInjectPolyfill function.`);
    }
  } else if (shouldInjectPolyfill != null) {
    throw new Error(`.shouldInjectPolyfill must be a function, or undefined` + ` (received ${JSON.stringify(shouldInjectPolyfill)})`);
  }
  if (absoluteImports != null && typeof absoluteImports !== "boolean" && typeof absoluteImports !== "string") {
    throw new Error(`.absoluteImports must be a boolean, a string, or undefined` + ` (received ${JSON.stringify(absoluteImports)})`);
  }
  let targets;
  if (
  // If any browserslist-related option is specified, fallback to the old
  // behavior of not using the targets specified in the top-level options.
  targetsOption || configPath || ignoreBrowserslistConfig) {
    const targetsObj = typeof targetsOption === "string" || Array.isArray(targetsOption) ? {
      browsers: targetsOption
    } : targetsOption;
    targets = getTargets(targetsObj, {
      ignoreBrowserslistConfig,
      configPath
    });
  } else {
    targets = babelApi.targets();
  }
  return {
    method,
    methodName,
    targets,
    absoluteImports: absoluteImports != null ? absoluteImports : false,
    shouldInjectPolyfill,
    debug: !!debug,
    providerOptions: providerOptions
  };
}
function instantiateProvider(factory, options, missingDependencies, dirname, debugLog, babelApi) {
  const {
    method,
    methodName,
    targets,
    debug,
    shouldInjectPolyfill,
    providerOptions,
    absoluteImports
  } = resolveOptions(options, babelApi);

  // eslint-disable-next-line prefer-const
  let include, exclude;
  let polyfillsSupport;
  let polyfillsNames;
  let filterPolyfills;
  const getUtils = (0, _utils.createUtilsGetter)(new _importsInjector.default(moduleName => deps.resolve(dirname, moduleName, absoluteImports), name => {
    var _polyfillsNames$get, _polyfillsNames;
    return (_polyfillsNames$get = (_polyfillsNames = polyfillsNames) == null ? void 0 : _polyfillsNames.get(name)) != null ? _polyfillsNames$get : Infinity;
  }));
  const depsCache = new Map();
  const api = {
    babel: babelApi,
    getUtils,
    method: options.method,
    targets,
    createMetaResolver: _metaResolver.default,
    shouldInjectPolyfill(name) {
      if (polyfillsNames === undefined) {
        throw new Error(`Internal error in the ${factory.name} provider: ` + `shouldInjectPolyfill() can't be called during initialization.`);
      }
      if (!polyfillsNames.has(name)) {
        console.warn(`Internal error in the ${providerName} provider: ` + `unknown polyfill "${name}".`);
      }
      if (filterPolyfills && !filterPolyfills(name)) return false;
      let shouldInject = (0, _helperCompilationTargets.isRequired)(name, targets, {
        compatData: polyfillsSupport,
        includes: include,
        excludes: exclude
      });
      if (shouldInjectPolyfill) {
        shouldInject = shouldInjectPolyfill(name, shouldInject);
        if (typeof shouldInject !== "boolean") {
          throw new Error(`.shouldInjectPolyfill must return a boolean.`);
        }
      }
      return shouldInject;
    },
    debug(name) {
      var _debugLog, _debugLog$polyfillsSu;
      debugLog().found = true;
      if (!debug || !name) return;
      if (debugLog().polyfills.has(providerName)) return;
      debugLog().polyfills.add(name);
      (_debugLog$polyfillsSu = (_debugLog = debugLog()).polyfillsSupport) != null ? _debugLog$polyfillsSu : _debugLog.polyfillsSupport = polyfillsSupport;
    },
    assertDependency(name, version = "*") {
      if (missingDependencies === false) return;
      if (absoluteImports) {
        // If absoluteImports is not false, we will try resolving
        // the dependency and throw if it's not possible. We can
        // skip the check here.
        return;
      }
      const dep = version === "*" ? name : `${name}@^${version}`;
      const found = missingDependencies.all ? false : mapGetOr(depsCache, `${name} :: ${dirname}`, () => deps.has(dirname, name));
      if (!found) {
        debugLog().missingDeps.add(dep);
      }
    }
  };
  const provider = factory(api, providerOptions, dirname);
  const providerName = provider.name || factory.name;
  if (typeof provider[methodName] !== "function") {
    throw new Error(`The "${providerName}" provider doesn't support the "${method}" polyfilling method.`);
  }
  if (Array.isArray(provider.polyfills)) {
    polyfillsNames = new Map(provider.polyfills.map((name, index) => [name, index]));
    filterPolyfills = provider.filterPolyfills;
  } else if (provider.polyfills) {
    polyfillsNames = new Map(Object.keys(provider.polyfills).map((name, index) => [name, index]));
    polyfillsSupport = provider.polyfills;
    filterPolyfills = provider.filterPolyfills;
  } else {
    polyfillsNames = new Map();
  }
  ({
    include,
    exclude
  } = (0, _normalizeOptions.validateIncludeExclude)(providerName, polyfillsNames, providerOptions.include || [], providerOptions.exclude || []));
  return {
    debug,
    method,
    targets,
    provider,
    providerName,
    callProvider(payload, path) {
      const utils = getUtils(path);
      provider[methodName](payload, utils, path);
    }
  };
}
function definePolyfillProvider(factory) {
  return (0, _helperPluginUtils.declare)((babelApi, options, dirname) => {
    babelApi.assertVersion("^7.0.0 || ^8.0.0-alpha.0");
    const {
      traverse
    } = babelApi;
    let debugLog;
    const missingDependencies = (0, _normalizeOptions.applyMissingDependenciesDefaults)(options, babelApi);
    const {
      debug,
      method,
      targets,
      provider,
      providerName,
      callProvider
    } = instantiateProvider(factory, options, missingDependencies, dirname, () => debugLog, babelApi);
    const createVisitor = method === "entry-global" ? v.entry : v.usage;
    const visitor = provider.visitor ? traverse.visitors.merge([createVisitor(callProvider), provider.visitor]) : createVisitor(callProvider);
    if (debug && debug !== _debugUtils.presetEnvSilentDebugHeader) {
      console.log(`${providerName}: \`DEBUG\` option`);
      console.log(`\nUsing targets: ${(0, _debugUtils.stringifyTargetsMultiline)(targets)}`);
      console.log(`\nUsing polyfills with \`${method}\` method:`);
    }
    const {
      runtimeName
    } = provider;
    return {
      name: "inject-polyfills",
      visitor,
      pre(file) {
        var _provider$pre;
        if (runtimeName) {
          if (file.get("runtimeHelpersModuleName") && file.get("runtimeHelpersModuleName") !== runtimeName) {
            console.warn(`Two different polyfill providers` + ` (${file.get("runtimeHelpersModuleProvider")}` + ` and ${providerName}) are trying to define two` + ` conflicting @babel/runtime alternatives:` + ` ${file.get("runtimeHelpersModuleName")} and ${runtimeName}.` + ` The second one will be ignored.`);
          } else {
            file.set("runtimeHelpersModuleName", runtimeName);
            file.set("runtimeHelpersModuleProvider", providerName);
          }
        }
        debugLog = {
          polyfills: new Set(),
          polyfillsSupport: undefined,
          found: false,
          providers: new Set(),
          missingDeps: new Set()
        };
        (_provider$pre = provider.pre) == null ? void 0 : _provider$pre.apply(this, arguments);
      },
      post() {
        var _provider$post;
        (_provider$post = provider.post) == null ? void 0 : _provider$post.apply(this, arguments);
        if (missingDependencies !== false) {
          if (missingDependencies.log === "per-file") {
            deps.logMissing(debugLog.missingDeps);
          } else {
            deps.laterLogMissing(debugLog.missingDeps);
          }
        }
        if (!debug) return;
        if (this.filename) console.log(`\n[${this.filename}]`);
        if (debugLog.polyfills.size === 0) {
          console.log(method === "entry-global" ? debugLog.found ? `Based on your targets, the ${providerName} polyfill did not add any polyfill.` : `The entry point for the ${providerName} polyfill has not been found.` : `Based on your code and targets, the ${providerName} polyfill did not add any polyfill.`);
          return;
        }
        if (method === "entry-global") {
          console.log(`The ${providerName} polyfill entry has been replaced with ` + `the following polyfills:`);
        } else {
          console.log(`The ${providerName} polyfill added the following polyfills:`);
        }
        for (const name of debugLog.polyfills) {
          var _debugLog$polyfillsSu2;
          if ((_debugLog$polyfillsSu2 = debugLog.polyfillsSupport) != null && _debugLog$polyfillsSu2[name]) {
            const filteredTargets = (0, _helperCompilationTargets.getInclusionReasons)(name, targets, debugLog.polyfillsSupport);
            const formattedTargets = JSON.stringify(filteredTargets).replace(/,/g, ", ").replace(/^\{"/, '{ "').replace(/"\}$/, '" }');
            console.log(`  ${name} ${formattedTargets}`);
          } else {
            console.log(`  ${name}`);
          }
        }
      }
    };
  });
}
function mapGetOr(map, key, getDefault) {
  let val = map.get(key);
  if (val === undefined) {
    val = getDefault();
    map.set(key, val);
  }
  return val;
}
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}