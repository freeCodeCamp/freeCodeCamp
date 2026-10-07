"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isPluginRequired = isPluginRequired;
exports.transformIncludesAndExcludes = void 0;
var _semver = require("semver");
var _debug = require("./debug.js");
var _filterItems = require("./filter-items.js");
var _moduleTransformations = require("./module-transformations.js");
var _normalizeOptions = require("./normalize-options.js");
var _shippedProposals = require("./shipped-proposals.js");
var _pluginsCompatData = require("./plugins-compat-data.js");
var _babelPluginPolyfillCorejs = require("babel-plugin-polyfill-corejs3");
var _babel7Plugins = require("./polyfills/babel-7-plugins.cjs");
var _helperCompilationTargets = require("@babel/helper-compilation-targets");
var _availablePlugins = require("./available-plugins.js");
var _helperPluginUtils = require("@babel/helper-plugin-utils");
const pluginCoreJS3 = _babelPluginPolyfillCorejs.default || _babelPluginPolyfillCorejs;
function isPluginRequired(targets, support) {
  return (0, _helperCompilationTargets.isRequired)("fake-name", targets, {
    compatData: {
      "fake-name": support
    }
  });
}
function filterStageFromList(list, stageList) {
  return Object.keys(list).reduce((result, item) => {
    if (!stageList.has(item)) {
      result[item] = list[item];
    }
    return result;
  }, {});
}
const pluginLists = {
  withProposals: {
    withoutBugfixes: _pluginsCompatData.plugins,
    withBugfixes: Object.assign({}, _pluginsCompatData.plugins, _pluginsCompatData.pluginsBugfixes)
  },
  withoutProposals: {
    withoutBugfixes: filterStageFromList(_pluginsCompatData.plugins, _shippedProposals.proposalPlugins),
    withBugfixes: filterStageFromList(Object.assign({}, _pluginsCompatData.plugins, _pluginsCompatData.pluginsBugfixes), _shippedProposals.proposalPlugins)
  }
};
function getPluginList(proposals, bugfixes) {
  if (proposals) {
    if (bugfixes) return pluginLists.withProposals.withBugfixes;else return pluginLists.withProposals.withoutBugfixes;
  } else {
    if (bugfixes) return pluginLists.withoutProposals.withBugfixes;else return pluginLists.withoutProposals.withoutBugfixes;
  }
}
const getPlugin = pluginName => {
  const plugin = _availablePlugins.default[pluginName]();
  if (!plugin) {
    throw new Error(`Could not find plugin "${pluginName}". Ensure there is an entry in ./available-plugins.js for it.`);
  }
  return plugin;
};
const transformIncludesAndExcludes = opts => {
  return opts.reduce((result, opt) => {
    const target = opt.match(/^(es|es6|es7|esnext|web)\./) ? "builtIns" : "plugins";
    result[target].add(opt);
    return result;
  }, {
    all: opts,
    plugins: new Set(),
    builtIns: new Set()
  });
};
exports.transformIncludesAndExcludes = transformIncludesAndExcludes;
function getSpecialModulesPluginNames(modules, shouldTransformDynamicImport) {
  const modulesPluginNames = [];
  if (modules) {
    modulesPluginNames.push(_moduleTransformations.default[modules]);
  }
  if (shouldTransformDynamicImport) {
    if (modules && modules !== "umd") {
      modulesPluginNames.push("transform-dynamic-import");
    } else {
      console.warn("Dynamic import can only be transformed when transforming ES" + " modules to AMD, CommonJS or SystemJS.");
    }
  }
  {
    if (!shouldTransformDynamicImport) {
      modulesPluginNames.push("syntax-dynamic-import");
    }
    modulesPluginNames.push("syntax-top-level-await");
    modulesPluginNames.push("syntax-import-meta");
  }
  return modulesPluginNames;
}
const getCoreJSOptions = ({
  useBuiltIns,
  corejs,
  polyfillTargets,
  include,
  exclude,
  proposals,
  shippedProposals,
  debug
}) => ({
  method: `${useBuiltIns}-global`,
  version: corejs ? corejs.toString() : undefined,
  targets: polyfillTargets,
  include,
  exclude,
  proposals,
  shippedProposals,
  debug,
  "#__secret_key__@babel/preset-env__compatibility": {
    noRuntimeName: true
  }
});
{
  var getPolyfillPlugins = ({
    useBuiltIns,
    corejs,
    polyfillTargets,
    include,
    exclude,
    proposals,
    shippedProposals,
    regenerator,
    debug
  }) => {
    const polyfillPlugins = [];
    if (useBuiltIns === "usage" || useBuiltIns === "entry") {
      const pluginOptions = getCoreJSOptions({
        useBuiltIns,
        corejs,
        polyfillTargets,
        include,
        exclude,
        proposals,
        shippedProposals,
        debug
      });
      if (corejs) {
        {
          if (useBuiltIns === "usage") {
            if (corejs.major === 2) {
              polyfillPlugins.push([_babel7Plugins.pluginCoreJS2, pluginOptions], [_babel7Plugins.legacyBabelPolyfillPlugin, {
                usage: true
              }]);
            } else {
              polyfillPlugins.push([pluginCoreJS3, pluginOptions], [_babel7Plugins.legacyBabelPolyfillPlugin, {
                usage: true,
                deprecated: true
              }]);
            }
            if (regenerator) {
              polyfillPlugins.push([_babel7Plugins.pluginRegenerator, {
                method: "usage-global",
                debug
              }]);
            }
          } else {
            if (corejs.major === 2) {
              polyfillPlugins.push([_babel7Plugins.legacyBabelPolyfillPlugin, {
                regenerator
              }], [_babel7Plugins.pluginCoreJS2, pluginOptions]);
            } else {
              polyfillPlugins.push([pluginCoreJS3, pluginOptions], [_babel7Plugins.legacyBabelPolyfillPlugin, {
                deprecated: true
              }]);
              if (!regenerator) {
                polyfillPlugins.push([_babel7Plugins.removeRegeneratorEntryPlugin, pluginOptions]);
              }
            }
          }
        }
      }
    }
    return polyfillPlugins;
  };
  {
    exports.getPolyfillPlugins = getPolyfillPlugins;
  }
}
function getLocalTargets(optionsTargets, ignoreBrowserslistConfig, configPath, browserslistEnv) {
  if (optionsTargets != null && optionsTargets.esmodules && optionsTargets.browsers) {
    console.warn(`
@babel/preset-env: esmodules and browsers targets have been specified together.
\`browsers\` target, \`${optionsTargets.browsers.toString()}\` will be ignored.
`);
  }
  return (0, _helperCompilationTargets.default)(optionsTargets, {
    ignoreBrowserslistConfig,
    configPath,
    browserslistEnv
  });
}
function supportsStaticESM(caller) {
  return !!(caller != null && caller.supportsStaticESM);
}
function supportsDynamicImport(caller) {
  return !!(caller != null && caller.supportsDynamicImport);
}
function supportsExportNamespaceFrom(caller) {
  return !!(caller != null && caller.supportsExportNamespaceFrom);
}
var _default = exports.default = (0, _helperPluginUtils.declarePreset)((api, opts) => {
  api.assertVersion(7);
  const babelTargets = api.targets();
  ;
  const {
    bugfixes,
    configPath,
    debug,
    exclude: optionsExclude,
    forceAllTransforms,
    ignoreBrowserslistConfig,
    include: optionsInclude,
    modules: optionsModules,
    shippedProposals,
    targets: optionsTargets,
    useBuiltIns,
    corejs: {
      version: corejs,
      proposals
    },
    browserslistEnv
  } = (0, _normalizeOptions.default)(opts);
  {
    var {
      loose,
      spec = false
    } = opts;
  }
  let targets = babelTargets;
  if (_semver.lt(api.version, "7.13.0") || opts.targets || opts.configPath || opts.browserslistEnv || opts.ignoreBrowserslistConfig) {
    {
      var hasUglifyTarget = false;
      if (optionsTargets != null && optionsTargets.uglify) {
        hasUglifyTarget = true;
        delete optionsTargets.uglify;
        console.warn(`
The uglify target has been deprecated. Set the top level
option \`forceAllTransforms: true\` instead.
`);
      }
    }
    targets = getLocalTargets(optionsTargets, ignoreBrowserslistConfig, configPath, browserslistEnv);
  }
  const transformTargets = forceAllTransforms || hasUglifyTarget ? {} : targets;
  const include = transformIncludesAndExcludes(optionsInclude);
  const exclude = transformIncludesAndExcludes(optionsExclude);
  const compatData = getPluginList(shippedProposals, bugfixes);
  const modules = optionsModules === "auto" ? api.caller(supportsStaticESM) ? false : "commonjs" : optionsModules;
  const shouldTransformDynamicImport = optionsModules === "auto" ? !api.caller(supportsDynamicImport) : !!modules;
  if (optionsModules === "auto" && !api.caller(supportsExportNamespaceFrom) && !exclude.plugins.has("transform-export-namespace-from")) {
    include.plugins.add("transform-export-namespace-from");
  }
  const pluginNames = (0, _helperCompilationTargets.filterItems)(compatData, include.plugins, exclude.plugins, transformTargets, getSpecialModulesPluginNames(modules, shouldTransformDynamicImport), !loose ? undefined : ["transform-typeof-symbol"], _shippedProposals.pluginSyntaxMap);
  if (shippedProposals) {
    (0, _filterItems.addProposalSyntaxPlugins)(pluginNames, _shippedProposals.proposalSyntaxPlugins);
  }
  (0, _filterItems.removeUnsupportedItems)(pluginNames, api.version);
  (0, _filterItems.removeUnnecessaryItems)(pluginNames, _pluginsCompatData.overlappingPlugins);
  const polyfillPlugins = getPolyfillPlugins({
    useBuiltIns,
    corejs,
    polyfillTargets: targets,
    include: include.builtIns,
    exclude: exclude.builtIns,
    proposals,
    shippedProposals,
    regenerator: pluginNames.has("transform-regenerator"),
    debug
  });
  const pluginUseBuiltIns = useBuiltIns !== false;
  const plugins = Array.from(pluginNames).map(pluginName => {
    if (pluginName === "transform-class-properties" || pluginName === "transform-private-methods" || pluginName === "transform-private-property-in-object") {
      return [getPlugin(pluginName), {
        loose: loose ? "#__internal__@babel/preset-env__prefer-true-but-false-is-ok-if-it-prevents-an-error" : "#__internal__@babel/preset-env__prefer-false-but-true-is-ok-if-it-prevents-an-error"
      }];
    }
    if (pluginName === "syntax-import-attributes") {
      return [getPlugin(pluginName), {
        deprecatedAssertSyntax: true
      }];
    }
    return [getPlugin(pluginName), {
      spec,
      loose,
      useBuiltIns: pluginUseBuiltIns
    }];
  }).concat(polyfillPlugins);
  if (debug) {
    console.log("@babel/preset-env: `DEBUG` option");
    console.log("\nUsing targets:");
    console.log(JSON.stringify((0, _helperCompilationTargets.prettifyTargets)(targets), null, 2));
    console.log(`\nUsing modules transform: ${optionsModules.toString()}`);
    console.log("\nUsing plugins:");
    pluginNames.forEach(pluginName => {
      (0, _debug.logPlugin)(pluginName, targets, compatData);
    });
    if (!useBuiltIns) {
      console.log("\nUsing polyfills: No polyfills were added, since the `useBuiltIns` option was not set.");
    }
  }
  return {
    plugins
  };
});
{
  exports.getModulesPluginNames = ({
    modules,
    transformations,
    shouldTransformESM,
    shouldTransformDynamicImport,
    shouldTransformExportNamespaceFrom
  }) => {
    const modulesPluginNames = [];
    if (modules !== false && transformations[modules]) {
      if (shouldTransformESM) {
        modulesPluginNames.push(transformations[modules]);
      }
      if (shouldTransformDynamicImport) {
        if (shouldTransformESM && modules !== "umd") {
          modulesPluginNames.push("transform-dynamic-import");
        } else {
          console.warn("Dynamic import can only be transformed when transforming ES" + " modules to AMD, CommonJS or SystemJS.");
        }
      }
    }
    if (shouldTransformExportNamespaceFrom) {
      modulesPluginNames.push("transform-export-namespace-from");
    }
    if (!shouldTransformDynamicImport) {
      modulesPluginNames.push("syntax-dynamic-import");
    }
    if (!shouldTransformExportNamespaceFrom) {
      modulesPluginNames.push("syntax-export-namespace-from");
    }
    modulesPluginNames.push("syntax-top-level-await");
    modulesPluginNames.push("syntax-import-meta");
    return modulesPluginNames;
  };
}

//# sourceMappingURL=index.js.map
