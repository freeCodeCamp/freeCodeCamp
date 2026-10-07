"use strict";

exports.__esModule = true;
exports.applyMissingDependenciesDefaults = applyMissingDependenciesDefaults;
exports.validateIncludeExclude = validateIncludeExclude;
var _utils = require("./utils");
function patternToRegExp(pattern) {
  if (pattern instanceof RegExp) return pattern;
  try {
    return new RegExp(`^${pattern}$`);
  } catch (_unused) {
    return null;
  }
}
function buildUnusedError(label, unused) {
  if (!unused.length) return "";
  return `  - The following "${label}" patterns didn't match any polyfill:\n` + unused.map(original => `    ${String(original)}\n`).join("");
}
function buldDuplicatesError(duplicates) {
  if (!duplicates.size) return "";
  return `  - The following polyfills were matched both by "include" and "exclude" patterns:\n` + Array.from(duplicates, name => `    ${name}\n`).join("");
}
function validateIncludeExclude(provider, polyfills, includePatterns, excludePatterns) {
  let current;
  const filter = pattern => {
    const regexp = patternToRegExp(pattern);
    if (!regexp) return false;
    let matched = false;
    for (const polyfill of polyfills.keys()) {
      if (regexp.test(polyfill)) {
        matched = true;
        current.add(polyfill);
      }
    }
    return !matched;
  };

  // prettier-ignore
  const include = current = new Set();
  const unusedInclude = Array.from(includePatterns).filter(filter);

  // prettier-ignore
  const exclude = current = new Set();
  const unusedExclude = Array.from(excludePatterns).filter(filter);
  const duplicates = (0, _utils.intersection)(include, exclude);
  if (duplicates.size > 0 || unusedInclude.length > 0 || unusedExclude.length > 0) {
    throw new Error(`Error while validating the "${provider}" provider options:\n` + buildUnusedError("include", unusedInclude) + buildUnusedError("exclude", unusedExclude) + buldDuplicatesError(duplicates));
  }
  return {
    include,
    exclude
  };
}
function applyMissingDependenciesDefaults(options, babelApi) {
  const {
    missingDependencies = {}
  } = options;
  if (missingDependencies === false) return false;
  const caller = babelApi.caller(caller => caller == null ? void 0 : caller.name);
  const {
    log = "deferred",
    inject = caller === "rollup-plugin-babel" ? "throw" : "import",
    all = false
  } = missingDependencies;
  return {
    log,
    inject,
    all
  };
}