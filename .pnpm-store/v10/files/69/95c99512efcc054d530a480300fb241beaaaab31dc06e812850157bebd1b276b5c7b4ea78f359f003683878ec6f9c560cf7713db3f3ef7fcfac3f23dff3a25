"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TargetNames", {
  enumerable: true,
  get: function () {
    return _options.TargetNames;
  }
});
exports.default = getTargets;
Object.defineProperty(exports, "filterItems", {
  enumerable: true,
  get: function () {
    return _filterItems.default;
  }
});
Object.defineProperty(exports, "getInclusionReasons", {
  enumerable: true,
  get: function () {
    return _debug.getInclusionReasons;
  }
});
exports.isBrowsersQueryValid = isBrowsersQueryValid;
Object.defineProperty(exports, "isRequired", {
  enumerable: true,
  get: function () {
    return _filterItems.isRequired;
  }
});
Object.defineProperty(exports, "prettifyTargets", {
  enumerable: true,
  get: function () {
    return _pretty.prettifyTargets;
  }
});
Object.defineProperty(exports, "unreleasedLabels", {
  enumerable: true,
  get: function () {
    return _targets.unreleasedLabels;
  }
});
var _browserslist = require("browserslist");
var _helperValidatorOption = require("@babel/helper-validator-option");
var _lruCache = require("lru-cache");
var _utils = require("./utils.js");
var _targets = require("./targets.js");
var _options = require("./options.js");
var _pretty = require("./pretty.js");
var _debug = require("./debug.js");
var _filterItems = require("./filter-items.js");
const browserModulesData = require("@babel/compat-data/native-modules");
const ESM_SUPPORT = browserModulesData["es6.module"];
const v = new _helperValidatorOption.OptionValidator("@babel/helper-compilation-targets");
function validateTargetNames(targets) {
  const validTargets = Object.keys(_options.TargetNames);
  for (const target of Object.keys(targets)) {
    if (!(target in _options.TargetNames)) {
      throw new Error(v.formatMessage(`'${target}' is not a valid target
- Did you mean '${(0, _helperValidatorOption.findSuggestion)(target, validTargets)}'?`));
    }
  }
  return targets;
}
function isBrowsersQueryValid(browsers) {
  return typeof browsers === "string" || Array.isArray(browsers) && browsers.every(b => typeof b === "string");
}
function validateBrowsers(browsers) {
  v.invariant(browsers === undefined || isBrowsersQueryValid(browsers), `'${String(browsers)}' is not a valid browserslist query`);
  return browsers;
}
function getLowestVersions(browsers) {
  return browsers.reduce((all, browser) => {
    const [browserName, browserVersion] = browser.split(" ");
    const target = _targets.browserNameMap[browserName];
    if (!target) {
      return all;
    }
    try {
      const splitVersion = browserVersion.split("-")[0].toLowerCase();
      const isSplitUnreleased = (0, _utils.isUnreleasedVersion)(splitVersion, target);
      if (!all[target]) {
        all[target] = isSplitUnreleased ? splitVersion : (0, _utils.semverify)(splitVersion);
        return all;
      }
      const version = all[target];
      const isUnreleased = (0, _utils.isUnreleasedVersion)(version, target);
      if (isUnreleased && isSplitUnreleased) {
        all[target] = (0, _utils.getLowestUnreleased)(version, splitVersion, target);
      } else if (isUnreleased) {
        all[target] = (0, _utils.semverify)(splitVersion);
      } else if (!isUnreleased && !isSplitUnreleased) {
        const parsedBrowserVersion = (0, _utils.semverify)(splitVersion);
        all[target] = (0, _utils.semverMin)(version, parsedBrowserVersion);
      }
    } catch (_) {}
    return all;
  }, {});
}
function outputDecimalWarning(decimalTargets) {
  if (!decimalTargets.length) {
    return;
  }
  console.warn("Warning, the following targets are using a decimal version:\n");
  decimalTargets.forEach(({
    target,
    value
  }) => console.warn(`  ${target}: ${value}`));
  console.warn(`
We recommend using a string for minor/patch versions to avoid numbers like 6.10
getting parsed as 6.1, which can lead to unexpected behavior.
`);
}
function semverifyTarget(target, value) {
  try {
    return (0, _utils.semverify)(value);
  } catch (_) {
    throw new Error(v.formatMessage(`'${value}' is not a valid value for 'targets.${target}'.`));
  }
}
function nodeTargetParser(value) {
  const parsed = value === true || value === "current" ? process.versions.node.split("-")[0] : semverifyTarget("node", value);
  return ["node", parsed];
}
function defaultTargetParser(target, value) {
  const version = (0, _utils.isUnreleasedVersion)(value, target) ? value.toLowerCase() : semverifyTarget(target, value);
  return [target, version];
}
function generateTargets(inputTargets) {
  const input = Object.assign({}, inputTargets);
  delete input.esmodules;
  delete input.browsers;
  return input;
}
function resolveTargets(queries, env) {
  const resolved = _browserslist(queries, {
    mobileToDesktop: true,
    env
  });
  return getLowestVersions(resolved);
}
const targetsCache = new _lruCache({
  max: 64
});
function resolveTargetsCached(queries, env) {
  const cacheKey = typeof queries === "string" ? queries : queries.join() + env;
  let cached = targetsCache.get(cacheKey);
  if (!cached) {
    cached = resolveTargets(queries, env);
    targetsCache.set(cacheKey, cached);
  }
  return Object.assign({}, cached);
}
function getTargets(inputTargets = {}, options = {}) {
  var _browsers, _browsers2;
  let {
    browsers,
    esmodules
  } = inputTargets;
  const {
    configPath = ".",
    onBrowserslistConfigFound
  } = options;
  validateBrowsers(browsers);
  const input = generateTargets(inputTargets);
  let targets = validateTargetNames(input);
  const shouldParseBrowsers = !!browsers;
  const hasTargets = shouldParseBrowsers || Object.keys(targets).length > 0;
  const shouldSearchForConfig = !options.ignoreBrowserslistConfig && !hasTargets;
  if (!browsers && shouldSearchForConfig) {
    browsers = process.env.BROWSERSLIST;
    if (!browsers) {
      const configFile = options.configFile || process.env.BROWSERSLIST_CONFIG || _browserslist.findConfigFile(configPath);
      if (configFile != null) {
        onBrowserslistConfigFound == null || onBrowserslistConfigFound(configFile);
        browsers = _browserslist.loadConfig({
          config: configFile,
          env: options.browserslistEnv
        });
      }
    }
    if (browsers == null) {
      browsers = [];
    }
  }
  if (esmodules && (esmodules !== "intersect" || !((_browsers = browsers) != null && _browsers.length))) {
    browsers = Object.keys(ESM_SUPPORT).map(browser => `${browser} >= ${ESM_SUPPORT[browser]}`).join(", ");
    esmodules = false;
  }
  if ((_browsers2 = browsers) != null && _browsers2.length) {
    const queryBrowsers = resolveTargetsCached(browsers, options.browserslistEnv);
    if (esmodules === "intersect") {
      for (const browser of Object.keys(queryBrowsers)) {
        if (browser !== "deno" && browser !== "ie") {
          const esmSupportVersion = ESM_SUPPORT[browser === "opera_mobile" ? "op_mob" : browser];
          if (esmSupportVersion) {
            const version = queryBrowsers[browser];
            queryBrowsers[browser] = (0, _utils.getHighestUnreleased)(version, (0, _utils.semverify)(esmSupportVersion), browser);
          } else {
            delete queryBrowsers[browser];
          }
        } else {
          delete queryBrowsers[browser];
        }
      }
    }
    targets = Object.assign(queryBrowsers, targets);
  }
  const result = {};
  const decimalWarnings = [];
  for (const target of Object.keys(targets).sort()) {
    const value = targets[target];
    if (typeof value === "number" && value % 1 !== 0) {
      decimalWarnings.push({
        target,
        value
      });
    }
    const [parsedTarget, parsedValue] = target === "node" ? nodeTargetParser(value) : defaultTargetParser(target, value);
    if (parsedValue) {
      result[parsedTarget] = parsedValue;
    }
  }
  outputDecimalWarning(decimalWarnings);
  return result;
}

//# sourceMappingURL=index.js.map
