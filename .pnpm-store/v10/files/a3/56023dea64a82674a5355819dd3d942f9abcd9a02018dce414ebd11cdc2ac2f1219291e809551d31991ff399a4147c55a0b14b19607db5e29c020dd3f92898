"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.checkLocalPlugin = checkLocalPlugin;
var _fsExistsCached = require("fs-exists-cached");
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _path = _interopRequireDefault(require("path"));
/**
 * Checks if a plugin is a valid local plugin and returns the resolved path if it is.
 */
function checkLocalPlugin(plugin, rootDir) {
  const pluginName = typeof plugin === `string` ? plugin : plugin.resolve;

  // Make sure the plugin exists relatively
  if ((0, _fsExistsCached.sync)(pluginName) || !rootDir) {
    return {
      validLocalPlugin: false
    };
  }
  const resolvedPath = (0, _gatsbyCoreUtils.slash)(_path.default.join(rootDir, `plugins/${pluginName}`));
  if (!(0, _fsExistsCached.sync)(resolvedPath)) {
    return {
      validLocalPlugin: false
    };
  }
  const resolvedPackageJson = (0, _fsExistsCached.sync)(`${resolvedPath}/package.json`);

  // package.json is a requirement for local plugins
  if (!resolvedPackageJson) {
    throw new Error(`Local plugin ${pluginName} requires a package.json file`);
  }
  return {
    validLocalPlugin: true,
    localPluginPath: resolvedPath
  };
}
//# sourceMappingURL=check-local-plugin.js.map