"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMinVersion = hasMinVersion;
var _semver = require("semver");
function hasMinVersion(minVersion, runtimeVersion) {
  if (!runtimeVersion) return true;
  if (_semver.valid(runtimeVersion)) runtimeVersion = `^${runtimeVersion}`;
  return !_semver.intersects(`<${minVersion}`, runtimeVersion) && !_semver.intersects(`>=8.0.0`, runtimeVersion);
}

//# sourceMappingURL=helpers.js.map
