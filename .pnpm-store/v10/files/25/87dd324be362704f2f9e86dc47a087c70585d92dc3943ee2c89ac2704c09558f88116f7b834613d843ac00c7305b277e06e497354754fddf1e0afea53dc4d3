"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterItems;
exports.isRequired = isRequired;
exports.targetsSupported = targetsSupported;
var _semver = require("semver");
var _utils = require("./utils.js");
const pluginsCompatData = require("@babel/compat-data/plugins");
function targetsSupported(target, support) {
  const targetEnvironments = Object.keys(target);
  if (targetEnvironments.length === 0) {
    return false;
  }
  const unsupportedEnvironments = targetEnvironments.filter(environment => {
    const lowestImplementedVersion = (0, _utils.getLowestImplementedVersion)(support, environment);
    if (!lowestImplementedVersion) {
      return true;
    }
    const lowestTargetedVersion = target[environment];
    if ((0, _utils.isUnreleasedVersion)(lowestTargetedVersion, environment)) {
      return false;
    }
    if ((0, _utils.isUnreleasedVersion)(lowestImplementedVersion, environment)) {
      return true;
    }
    if (!_semver.valid(lowestTargetedVersion.toString())) {
      throw new Error(`Invalid version passed for target "${environment}": "${lowestTargetedVersion}". ` + "Versions must be in semver format (major.minor.patch)");
    }
    return _semver.gt((0, _utils.semverify)(lowestImplementedVersion), lowestTargetedVersion.toString());
  });
  return unsupportedEnvironments.length === 0;
}
function isRequired(name, targets, {
  compatData = pluginsCompatData,
  includes,
  excludes
} = {}) {
  if (excludes != null && excludes.has(name)) return false;
  if (includes != null && includes.has(name)) return true;
  return !targetsSupported(targets, compatData[name]);
}
function filterItems(list, includes, excludes, targets, defaultIncludes, defaultExcludes, pluginSyntaxMap) {
  const result = new Set();
  const options = {
    compatData: list,
    includes,
    excludes
  };
  for (const item in list) {
    if (isRequired(item, targets, options)) {
      result.add(item);
    } else if (pluginSyntaxMap) {
      const shippedProposalsSyntax = pluginSyntaxMap.get(item);
      if (shippedProposalsSyntax) {
        result.add(shippedProposalsSyntax);
      }
    }
  }
  defaultIncludes == null || defaultIncludes.forEach(item => !excludes.has(item) && result.add(item));
  defaultExcludes == null || defaultExcludes.forEach(item => !includes.has(item) && result.delete(item));
  return result;
}

//# sourceMappingURL=filter-items.js.map
