"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadPlugin;

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _semver() {
  const data = _interopRequireDefault(require("semver"));

  _semver = function () {
    return data;
  };

  return data;
}

function _logger() {
  const data = _interopRequireDefault(require("@parcel/logger"));

  _logger = function () {
    return data;
  };

  return data;
}

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

var _projectPath = require("./projectPath");

var _package = require("../package.json");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NODE_MODULES = `${_path().default.sep}node_modules${_path().default.sep}`;
const CONFIG = Symbol.for('parcel-plugin-config');

async function loadPlugin(pluginName, configPath, keyPath, options) {
  let resolveFrom = configPath;
  let range;

  if (resolveFrom.includes(NODE_MODULES)) {
    var _configPkg$config$dep;

    let configPkg = await (0, _utils().loadConfig)(options.inputFS, resolveFrom, ['package.json'], options.projectRoot);

    if (configPkg != null && ((_configPkg$config$dep = configPkg.config.dependencies) === null || _configPkg$config$dep === void 0 ? void 0 : _configPkg$config$dep[pluginName]) == null) {
      var _configPkg$config$par;

      // If not in the config's dependencies, the plugin will be auto installed with
      // the version declared in "parcelDependencies".
      range = (_configPkg$config$par = configPkg.config.parcelDependencies) === null || _configPkg$config$par === void 0 ? void 0 : _configPkg$config$par[pluginName];

      if (range == null) {
        let contents = await options.inputFS.readFile(configPkg.files[0].filePath, 'utf8');
        throw new (_diagnostic().default)({
          diagnostic: {
            message: (0, _diagnostic().md)`Could not determine version of ${pluginName} in ${_path().default.relative(process.cwd(), resolveFrom)}. Either include it in "dependencies" or "parcelDependencies".`,
            origin: '@parcel/core',
            codeFrames: configPkg.config.dependencies || configPkg.config.parcelDependencies ? [{
              filePath: configPkg.files[0].filePath,
              language: 'json5',
              code: contents,
              codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(contents, [{
                key: configPkg.config.parcelDependencies ? '/parcelDependencies' : '/dependencies',
                type: 'key'
              }])
            }] : undefined
          }
        });
      } // Resolve from project root if not in the config's dependencies.


      resolveFrom = _path().default.join(options.projectRoot, 'index');
    }
  }

  let resolved, pkg;

  try {
    ({
      resolved,
      pkg
    } = await options.packageManager.resolve(pluginName, resolveFrom, {
      shouldAutoInstall: options.shouldAutoInstall,
      range
    }));
  } catch (err) {
    if (err.code !== 'MODULE_NOT_FOUND') {
      throw err;
    }

    let configContents = await options.inputFS.readFile(configPath, 'utf8');
    let alternatives = await (0, _utils().findAlternativeNodeModules)(options.inputFS, pluginName, _path().default.dirname(resolveFrom));
    throw new (_diagnostic().default)({
      diagnostic: {
        message: (0, _diagnostic().md)`Cannot find Parcel plugin "${pluginName}"`,
        origin: '@parcel/core',
        codeFrames: keyPath ? [{
          filePath: configPath,
          language: 'json5',
          code: configContents,
          codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(configContents, [{
            key: keyPath,
            type: 'value',
            message: (0, _diagnostic().md)`Cannot find module "${pluginName}"${alternatives[0] ? `, did you mean "${alternatives[0]}"?` : ''}`
          }])
        }] : undefined
      }
    });
  } // Validate the engines.parcel field in the plugin's package.json


  let parcelVersionRange = pkg && pkg.engines && pkg.engines.parcel;

  if (!parcelVersionRange) {
    _logger().default.warn({
      origin: '@parcel/core',
      message: `The plugin "${pluginName}" needs to specify a \`package.json#engines.parcel\` field with the supported Parcel version range.`
    });
  }

  if (parcelVersionRange && !_semver().default.satisfies(_package.version, parcelVersionRange)) {
    let pkgFile = (0, _nullthrows().default)(await (0, _utils().resolveConfig)(options.inputFS, resolved, ['package.json'], options.projectRoot));
    let pkgContents = await options.inputFS.readFile(pkgFile, 'utf8');
    throw new (_diagnostic().default)({
      diagnostic: {
        message: (0, _diagnostic().md)`The plugin "${pluginName}" is not compatible with the current version of Parcel. Requires "${parcelVersionRange}" but the current version is "${_package.version}".`,
        origin: '@parcel/core',
        codeFrames: [{
          filePath: pkgFile,
          language: 'json5',
          code: pkgContents,
          codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(pkgContents, [{
            key: '/engines/parcel'
          }])
        }]
      }
    });
  }

  let plugin = await options.packageManager.require(pluginName, resolveFrom, {
    shouldAutoInstall: options.shouldAutoInstall
  });
  plugin = plugin.default ? plugin.default : plugin;

  if (!plugin) {
    throw new Error(`Plugin ${pluginName} has no exports.`);
  }

  plugin = plugin[CONFIG];

  if (!plugin) {
    throw new Error(`Plugin ${pluginName} is not a valid Parcel plugin, should export an instance of a Parcel plugin ex. "export default new Reporter({ ... })".`);
  }

  return {
    plugin,
    version: (0, _nullthrows().default)(pkg).version,
    resolveFrom: (0, _projectPath.toProjectPath)(options.projectRoot, resolveFrom),
    range
  };
}