"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prettifyTargets = prettifyTargets;
exports.prettifyVersion = prettifyVersion;
var _semver = require("semver");
var _targets = require("./targets.js");
function prettifyVersion(version) {
  if (typeof version !== "string") {
    return version;
  }
  const {
    major,
    minor,
    patch
  } = _semver.parse(version);
  const parts = [major];
  if (minor || patch) {
    parts.push(minor);
  }
  if (patch) {
    parts.push(patch);
  }
  return parts.join(".");
}
function prettifyTargets(targets) {
  return Object.keys(targets).reduce((results, target) => {
    let value = targets[target];
    const unreleasedLabel = _targets.unreleasedLabels[target];
    if (typeof value === "string" && unreleasedLabel !== value) {
      value = prettifyVersion(value);
    }
    results[target] = value;
    return results;
  }, {});
}

//# sourceMappingURL=pretty.js.map
