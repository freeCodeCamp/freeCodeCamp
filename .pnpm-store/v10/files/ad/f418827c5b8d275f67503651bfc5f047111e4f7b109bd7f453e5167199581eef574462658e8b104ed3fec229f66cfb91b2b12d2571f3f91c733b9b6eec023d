"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmiconfig = cosmiconfig;
exports.cosmiconfigSync = cosmiconfigSync;
exports.defaultLoaders = void 0;

var _os = _interopRequireDefault(require("os"));

var _Explorer = require("./Explorer");

var _ExplorerSync = require("./ExplorerSync");

var _loaders = require("./loaders");

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function cosmiconfig(moduleName, options = {}) {
  const normalizedOptions = normalizeOptions(moduleName, options);
  const explorer = new _Explorer.Explorer(normalizedOptions);
  return {
    search: explorer.search.bind(explorer),
    load: explorer.load.bind(explorer),
    clearLoadCache: explorer.clearLoadCache.bind(explorer),
    clearSearchCache: explorer.clearSearchCache.bind(explorer),
    clearCaches: explorer.clearCaches.bind(explorer)
  };
} // eslint-disable-next-line @typescript-eslint/explicit-function-return-type


function cosmiconfigSync(moduleName, options = {}) {
  const normalizedOptions = normalizeOptions(moduleName, options);
  const explorerSync = new _ExplorerSync.ExplorerSync(normalizedOptions);
  return {
    search: explorerSync.searchSync.bind(explorerSync),
    load: explorerSync.loadSync.bind(explorerSync),
    clearLoadCache: explorerSync.clearLoadCache.bind(explorerSync),
    clearSearchCache: explorerSync.clearSearchCache.bind(explorerSync),
    clearCaches: explorerSync.clearCaches.bind(explorerSync)
  };
} // do not allow mutation of default loaders. Make sure it is set inside options


const defaultLoaders = Object.freeze({
  '.cjs': _loaders.loaders.loadJs,
  '.js': _loaders.loaders.loadJs,
  '.json': _loaders.loaders.loadJson,
  '.yaml': _loaders.loaders.loadYaml,
  '.yml': _loaders.loaders.loadYaml,
  noExt: _loaders.loaders.loadYaml
});
exports.defaultLoaders = defaultLoaders;

const identity = function identity(x) {
  return x;
};

function normalizeOptions(moduleName, options) {
  const defaults = {
    packageProp: moduleName,
    searchPlaces: ['package.json', `.${moduleName}rc`, `.${moduleName}rc.json`, `.${moduleName}rc.yaml`, `.${moduleName}rc.yml`, `.${moduleName}rc.js`, `.${moduleName}rc.cjs`, `.config/${moduleName}rc`, `.config/${moduleName}rc.json`, `.config/${moduleName}rc.yaml`, `.config/${moduleName}rc.yml`, `.config/${moduleName}rc.js`, `.config/${moduleName}rc.cjs`, `${moduleName}.config.js`, `${moduleName}.config.cjs`],
    ignoreEmptySearchPlaces: true,
    stopDir: _os.default.homedir(),
    cache: true,
    transform: identity,
    loaders: defaultLoaders
  };
  const normalizedOptions = { ...defaults,
    ...options,
    loaders: { ...defaults.loaders,
      ...options.loaders
    }
  };
  return normalizedOptions;
}
//# sourceMappingURL=index.js.map