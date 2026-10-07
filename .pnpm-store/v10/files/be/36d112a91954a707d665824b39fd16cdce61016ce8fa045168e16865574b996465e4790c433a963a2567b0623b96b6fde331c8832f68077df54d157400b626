"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.resolvePlugin = resolvePlugin;
var _isString2 = _interopRequireDefault(require("lodash/isString"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _validate = require("./validate");
var _createId = require("./utils/create-id");
var _createHash = require("./utils/create-hash");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _checkLocalPlugin = require("./utils/check-local-plugin");
var _compileGatsbyFiles = require("../../utils/parcel/compile-gatsby-files");
/**
 * @param plugin
 * This should be a plugin spec object where possible but can also be the
 * name of a plugin.
 *
 * When it is a name, it can be a name of a local plugin, the name of a plugin
 * located in node_modules, or a Gatsby internal plugin. In the last case the
 * plugin will be an absolute path.
 * @param rootDir
 * This is the project location, from which are found the plugins
 */
function resolvePlugin(plugin, rootDir) {
  const pluginName = (0, _isString2.default)(plugin) ? plugin : plugin.resolve;

  // Handle local plugins
  const {
    validLocalPlugin,
    localPluginPath = ``
  } = (0, _checkLocalPlugin.checkLocalPlugin)(plugin, rootDir);
  if (validLocalPlugin && localPluginPath) {
    const packageJSON = JSON.parse(_fs.default.readFileSync(`${localPluginPath}/package.json`, `utf-8`));
    const name = packageJSON.name || pluginName;
    (0, _validate.warnOnIncompatiblePeerDependency)(name, packageJSON);
    return {
      resolve: localPluginPath,
      name,
      id: (0, _createId.createPluginId)(name),
      version: (packageJSON === null || packageJSON === void 0 ? void 0 : packageJSON.version) || (0, _createHash.createFileContentHash)(localPluginPath, `**`),
      ...(0, _compileGatsbyFiles.getResolvedFieldsForPlugin)(rootDir, name)
    };
  }

  /**
   * Here we have an absolute path to an internal plugin, or a name of a module
   * which should be located in node_modules.
   */
  try {
    const requireSource = rootDir !== null ? (0, _gatsbyCoreUtils.createRequireFromPath)(`${rootDir}/:internal:`) : require;

    // If the path is absolute, resolve the directory of the internal plugin,
    // otherwise resolve the directory containing the package.json
    const resolvedPath = (0, _gatsbyCoreUtils.slash)(_path.default.dirname(requireSource.resolve(_path.default.isAbsolute(pluginName) ? pluginName : `${pluginName}/package.json`)));
    const packageJSON = JSON.parse(_fs.default.readFileSync(`${resolvedPath}/package.json`, `utf-8`));
    (0, _validate.warnOnIncompatiblePeerDependency)(packageJSON.name, packageJSON);
    return {
      resolve: resolvedPath,
      id: (0, _createId.createPluginId)(packageJSON.name),
      name: packageJSON.name,
      version: packageJSON.version
    };
  } catch (err) {
    if (process.env.gatsby_log_level === `verbose`) {
      _reporter.default.panicOnBuild(`plugin "${pluginName} threw the following error:\n`, err);
    } else {
      _reporter.default.panicOnBuild(`There was a problem loading plugin "${pluginName}". Perhaps you need to install its package?\nUse --verbose to see actual error.`);
    }
    throw new Error(`unreachable`);
  }
}
//# sourceMappingURL=resolve-plugin.js.map