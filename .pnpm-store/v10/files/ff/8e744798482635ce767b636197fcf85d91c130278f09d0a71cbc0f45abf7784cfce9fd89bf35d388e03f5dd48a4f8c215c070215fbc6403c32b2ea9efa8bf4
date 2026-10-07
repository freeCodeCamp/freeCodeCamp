"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkDuplicateIncludeExcludes = void 0;
exports.default = normalizeOptions;
exports.normalizeCoreJSOption = normalizeCoreJSOption;
exports.validateUseBuiltInsOption = exports.validateModulesOption = exports.normalizePluginName = void 0;
var _semver = require("semver");
var _corejs2BuiltIns = require("@babel/compat-data/corejs2-built-ins");
var _coreJsCompat = require("../data/core-js-compat.js");
var _pluginsCompatData = require("./plugins-compat-data.js");
var _moduleTransformations = require("./module-transformations.js");
var _options = require("./options.js");
var _helperValidatorOption = require("@babel/helper-validator-option");
const corejs2DefaultWebIncludes = ["web.timers", "web.immediate", "web.dom.iterable"];
const v = new _helperValidatorOption.OptionValidator("@babel/preset-env");
const allPluginsList = Object.keys(_pluginsCompatData.plugins);
const modulePlugins = ["transform-dynamic-import", ...Object.keys(_moduleTransformations.default).map(m => _moduleTransformations.default[m])];
const getValidIncludesAndExcludes = (type, corejs) => {
  const set = new Set(allPluginsList);
  if (type === "exclude") modulePlugins.map(set.add, set);
  if (corejs) {
    {
      if (corejs === 2) {
        Object.keys(_corejs2BuiltIns).map(set.add, set);
        corejs2DefaultWebIncludes.map(set.add, set);
      } else {
        Object.keys(_coreJsCompat).map(set.add, set);
      }
    }
  }
  return Array.from(set);
};
function flatMap(array, fn) {
  return Array.prototype.concat.apply([], array.map(fn));
}
const normalizePluginName = plugin => plugin.replace(/^(@babel\/|babel-)(plugin-)?/, "");
exports.normalizePluginName = normalizePluginName;
const expandIncludesAndExcludes = (filterList = [], type, corejs) => {
  if (filterList.length === 0) return [];
  const filterableItems = getValidIncludesAndExcludes(type, corejs);
  const invalidFilters = [];
  const selectedPlugins = flatMap(filterList, filter => {
    let re;
    if (typeof filter === "string") {
      try {
        re = new RegExp(`^${normalizePluginName(filter)}$`);
      } catch (e) {
        invalidFilters.push(filter);
        return [];
      }
    } else {
      re = filter;
    }
    const items = filterableItems.filter(item => {
      return re.test(item) || re.test(item.replace(/^transform-/, "proposal-"));
    });
    if (items.length === 0) invalidFilters.push(filter);
    return items;
  });
  v.invariant(invalidFilters.length === 0, `The plugins/built-ins '${invalidFilters.join(", ")}' passed to the '${type}' option are not
    valid. Please check data/[plugin-features|built-in-features].js in babel-preset-env`);
  return selectedPlugins;
};
const checkDuplicateIncludeExcludes = (include = [], exclude = []) => {
  const duplicates = include.filter(opt => exclude.indexOf(opt) >= 0);
  v.invariant(duplicates.length === 0, `The plugins/built-ins '${duplicates.join(", ")}' were found in both the "include" and
    "exclude" options.`);
};
exports.checkDuplicateIncludeExcludes = checkDuplicateIncludeExcludes;
const normalizeTargets = targets => {
  if (typeof targets === "string" || Array.isArray(targets)) {
    return {
      browsers: targets
    };
  }
  return Object.assign({}, targets);
};
const validateModulesOption = (modulesOpt = _options.ModulesOption.auto) => {
  v.invariant(_options.ModulesOption[modulesOpt.toString()] || modulesOpt === _options.ModulesOption.false, `The 'modules' option must be one of \n` + ` - 'false' to indicate no module processing\n` + ` - a specific module type: 'commonjs', 'amd', 'umd', 'systemjs'` + ` - 'auto' (default) which will automatically select 'false' if the current\n` + `   process is known to support ES module syntax, or "commonjs" otherwise\n`);
  return modulesOpt;
};
exports.validateModulesOption = validateModulesOption;
const validateUseBuiltInsOption = (builtInsOpt = false) => {
  v.invariant(_options.UseBuiltInsOption[builtInsOpt.toString()] || builtInsOpt === _options.UseBuiltInsOption.false, `The 'useBuiltIns' option must be either
    'false' (default) to indicate no polyfill,
    '"entry"' to indicate replacing the entry polyfill, or
    '"usage"' to import only used polyfills per file`);
  return builtInsOpt;
};
exports.validateUseBuiltInsOption = validateUseBuiltInsOption;
function normalizeCoreJSOption(corejs, useBuiltIns) {
  let proposals = false;
  let rawVersion;
  if (useBuiltIns && corejs === undefined) {
    {
      rawVersion = 2;
      console.warn("\nWARNING (@babel/preset-env): We noticed you're using the `useBuiltIns` option without declaring a " + `core-js version. Currently, we assume version 2.x when no version ` + "is passed. Since this default version will likely change in future " + "versions of Babel, we recommend explicitly setting the core-js version " + "you are using via the `corejs` option.\n" + "\nYou should also be sure that the version you pass to the `corejs` " + "option matches the version specified in your `package.json`'s " + "`dependencies` section. If it doesn't, you need to run one of the " + "following commands:\n\n" + "  npm install --save core-js@2    npm install --save core-js@3\n" + "  yarn add core-js@2              yarn add core-js@3\n\n" + "More info about useBuiltIns: https://babeljs.io/docs/en/babel-preset-env#usebuiltins\n" + "More info about core-js: https://babeljs.io/docs/en/babel-preset-env#corejs");
    }
  } else if (typeof corejs === "object" && corejs !== null) {
    rawVersion = corejs.version;
    proposals = Boolean(corejs.proposals);
  } else {
    rawVersion = corejs;
  }
  const version = rawVersion ? _semver.coerce(String(rawVersion)) : false;
  if (version) {
    if (useBuiltIns) {
      {
        if (version.major < 2 || version.major > 3) {
          throw new RangeError("Invalid Option: The version passed to `corejs` is invalid. Currently, " + "only core-js@2 and core-js@3 are supported.");
        }
      }
    } else {
      console.warn("\nWARNING (@babel/preset-env): The `corejs` option only has an effect when the `useBuiltIns` option is not `false`\n");
    }
  }
  return {
    version,
    proposals
  };
}
function normalizeOptions(opts) {
  v.validateTopLevelOptions(opts, _options.TopLevelOptions);
  const useBuiltIns = validateUseBuiltInsOption(opts.useBuiltIns);
  const corejs = normalizeCoreJSOption(opts.corejs, useBuiltIns);
  const include = expandIncludesAndExcludes(opts.include, _options.TopLevelOptions.include, !!corejs.version && corejs.version.major);
  const exclude = expandIncludesAndExcludes(opts.exclude, _options.TopLevelOptions.exclude, !!corejs.version && corejs.version.major);
  checkDuplicateIncludeExcludes(include, exclude);
  {
    v.validateBooleanOption("loose", opts.loose);
    v.validateBooleanOption("spec", opts.spec);
  }
  return {
    bugfixes: v.validateBooleanOption(_options.TopLevelOptions.bugfixes, opts.bugfixes, false),
    configPath: v.validateStringOption(_options.TopLevelOptions.configPath, opts.configPath, process.cwd()),
    corejs,
    debug: v.validateBooleanOption(_options.TopLevelOptions.debug, opts.debug, false),
    include,
    exclude,
    forceAllTransforms: v.validateBooleanOption(_options.TopLevelOptions.forceAllTransforms, opts.forceAllTransforms, false),
    ignoreBrowserslistConfig: v.validateBooleanOption(_options.TopLevelOptions.ignoreBrowserslistConfig, opts.ignoreBrowserslistConfig, false),
    modules: validateModulesOption(opts.modules),
    shippedProposals: v.validateBooleanOption(_options.TopLevelOptions.shippedProposals, opts.shippedProposals, false),
    targets: normalizeTargets(opts.targets),
    useBuiltIns: useBuiltIns,
    browserslistEnv: v.validateStringOption(_options.TopLevelOptions.browserslistEnv, opts.browserslistEnv)
  };
}

//# sourceMappingURL=normalize-options.js.map
