"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHighestUnreleased = getHighestUnreleased;
exports.getLowestImplementedVersion = getLowestImplementedVersion;
exports.getLowestUnreleased = getLowestUnreleased;
exports.isUnreleasedVersion = isUnreleasedVersion;
exports.semverMin = semverMin;
exports.semverify = semverify;
var _semver = require("semver");
var _helperValidatorOption = require("@babel/helper-validator-option");
var _targets = require("./targets.js");
const versionRegExp = /^(?:\d+|\d(?:\d?[^\d\n\r\u2028\u2029]\d+|\d{2,}(?:[^\d\n\r\u2028\u2029]\d+)?))$/;
const v = new _helperValidatorOption.OptionValidator("@babel/helper-compilation-targets");
function semverMin(first, second) {
  return first && _semver.lt(first, second) ? first : second;
}
function semverify(version) {
  if (typeof version === "string" && _semver.valid(version)) {
    return version;
  }
  v.invariant(typeof version === "number" || typeof version === "string" && versionRegExp.test(version), `'${version}' is not a valid version`);
  version = version.toString();
  let pos = 0;
  let num = 0;
  while ((pos = version.indexOf(".", pos + 1)) > 0) {
    num++;
  }
  return version + ".0".repeat(2 - num);
}
function isUnreleasedVersion(version, env) {
  const unreleasedLabel = _targets.unreleasedLabels[env];
  return !!unreleasedLabel && unreleasedLabel === version.toString().toLowerCase();
}
function getLowestUnreleased(a, b, env) {
  const unreleasedLabel = _targets.unreleasedLabels[env];
  if (a === unreleasedLabel) {
    return b;
  }
  if (b === unreleasedLabel) {
    return a;
  }
  return semverMin(a, b);
}
function getHighestUnreleased(a, b, env) {
  return getLowestUnreleased(a, b, env) === a ? b : a;
}
function getLowestImplementedVersion(plugin, environment) {
  const result = plugin[environment];
  if (!result && environment === "android") {
    return plugin.chrome;
  }
  return result;
}

//# sourceMappingURL=utils.js.map
