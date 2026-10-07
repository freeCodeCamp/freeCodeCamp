"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROOT_CONFIG_FILENAMES = void 0;
exports.findConfigUpwards = findConfigUpwards;
exports.findRelativeConfig = findRelativeConfig;
exports.findRootConfig = findRootConfig;
exports.loadConfig = loadConfig;
exports.resolveShowConfigPath = resolveShowConfigPath;
function _debug() {
  const data = require("debug");
  _debug = function () {
    return data;
  };
  return data;
}
function _fs() {
  const data = require("fs");
  _fs = function () {
    return data;
  };
  return data;
}
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
function _json() {
  const data = require("json5");
  _json = function () {
    return data;
  };
  return data;
}
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _caching = require("../caching.js");
var _configApi = require("../helpers/config-api.js");
var _utils = require("./utils.js");
var _moduleTypes = require("./module-types.js");
var _patternToRegex = require("../pattern-to-regex.js");
var _configError = require("../../errors/config-error.js");
var fs = require("../../gensync-utils/fs.js");
require("module");
var _rewriteStackTrace = require("../../errors/rewrite-stack-trace.js");
var _async = require("../../gensync-utils/async.js");
const debug = _debug()("babel:config:loading:files:configuration");
const ROOT_CONFIG_FILENAMES = exports.ROOT_CONFIG_FILENAMES = ["babel.config.js", "babel.config.cjs", "babel.config.mjs", "babel.config.json", "babel.config.cts", "babel.config.ts", "babel.config.mts"];
const RELATIVE_CONFIG_FILENAMES = [".babelrc", ".babelrc.js", ".babelrc.cjs", ".babelrc.mjs", ".babelrc.json", ".babelrc.cts"];
const BABELIGNORE_FILENAME = ".babelignore";
const runConfig = (0, _caching.makeWeakCache)(function* runConfig(options, cache) {
  yield* [];
  return {
    options: (0, _rewriteStackTrace.endHiddenCallStack)(options)((0, _configApi.makeConfigAPI)(cache)),
    cacheNeedsConfiguration: !cache.configured()
  };
});
function* readConfigCode(filepath, data) {
  if (!_fs().existsSync(filepath)) return null;
  let options = yield* (0, _moduleTypes.default)(filepath, (yield* (0, _async.isAsync)()) ? "auto" : "require", "You appear to be using a native ECMAScript module configuration " + "file, which is only supported when running Babel asynchronously " + "or when using the Node.js `--experimental-require-module` flag.", "You appear to be using a configuration file that contains top-level " + "await, which is only supported when running Babel asynchronously.");
  let cacheNeedsConfiguration = false;
  if (typeof options === "function") {
    ({
      options,
      cacheNeedsConfiguration
    } = yield* runConfig(options, data));
  }
  if (!options || typeof options !== "object" || Array.isArray(options)) {
    throw new _configError.default(`Configuration should be an exported JavaScript object.`, filepath);
  }
  if (typeof options.then === "function") {
    options.catch == null || options.catch(() => {});
    throw new _configError.default(`You appear to be using an async configuration, ` + `which your current version of Babel does not support. ` + `We may add support for this in the future, ` + `but if you're on the most recent version of @babel/core and still ` + `seeing this error, then you'll need to synchronously return your config.`, filepath);
  }
  if (cacheNeedsConfiguration) throwConfigError(filepath);
  return buildConfigFileObject(options, filepath);
}
const cfboaf = new WeakMap();
function buildConfigFileObject(options, filepath) {
  let configFilesByFilepath = cfboaf.get(options);
  if (!configFilesByFilepath) {
    cfboaf.set(options, configFilesByFilepath = new Map());
  }
  let configFile = configFilesByFilepath.get(filepath);
  if (!configFile) {
    configFile = {
      filepath,
      dirname: _path().dirname(filepath),
      options
    };
    configFilesByFilepath.set(filepath, configFile);
  }
  return configFile;
}
const packageToBabelConfig = (0, _caching.makeWeakCacheSync)(file => {
  const babel = file.options.babel;
  if (babel === undefined) return null;
  if (typeof babel !== "object" || Array.isArray(babel) || babel === null) {
    throw new _configError.default(`.babel property must be an object`, file.filepath);
  }
  return {
    filepath: file.filepath,
    dirname: file.dirname,
    options: babel
  };
});
const readConfigJSON5 = (0, _utils.makeStaticFileCache)((filepath, content) => {
  let options;
  try {
    options = _json().parse(content);
  } catch (err) {
    throw new _configError.default(`Error while parsing config - ${err.message}`, filepath);
  }
  if (!options) throw new _configError.default(`No config detected`, filepath);
  if (typeof options !== "object") {
    throw new _configError.default(`Config returned typeof ${typeof options}`, filepath);
  }
  if (Array.isArray(options)) {
    throw new _configError.default(`Expected config object but found array`, filepath);
  }
  delete options.$schema;
  return {
    filepath,
    dirname: _path().dirname(filepath),
    options
  };
});
const readIgnoreConfig = (0, _utils.makeStaticFileCache)((filepath, content) => {
  const ignoreDir = _path().dirname(filepath);
  const ignorePatterns = content.split("\n").map(line => line.replace(/#.*$/, "").trim()).filter(Boolean);
  for (const pattern of ignorePatterns) {
    if (pattern[0] === "!") {
      throw new _configError.default(`Negation of file paths is not supported.`, filepath);
    }
  }
  return {
    filepath,
    dirname: _path().dirname(filepath),
    ignore: ignorePatterns.map(pattern => (0, _patternToRegex.default)(pattern, ignoreDir))
  };
});
function findConfigUpwards(rootDir) {
  let dirname = rootDir;
  for (;;) {
    for (const filename of ROOT_CONFIG_FILENAMES) {
      if (_fs().existsSync(_path().join(dirname, filename))) {
        return dirname;
      }
    }
    const nextDir = _path().dirname(dirname);
    if (dirname === nextDir) break;
    dirname = nextDir;
  }
  return null;
}
function* findRelativeConfig(packageData, envName, caller) {
  let config = null;
  let ignore = null;
  const dirname = _path().dirname(packageData.filepath);
  for (const loc of packageData.directories) {
    if (!config) {
      var _packageData$pkg;
      config = yield* loadOneConfig(RELATIVE_CONFIG_FILENAMES, loc, envName, caller, ((_packageData$pkg = packageData.pkg) == null ? void 0 : _packageData$pkg.dirname) === loc ? packageToBabelConfig(packageData.pkg) : null);
    }
    if (!ignore) {
      const ignoreLoc = _path().join(loc, BABELIGNORE_FILENAME);
      ignore = yield* readIgnoreConfig(ignoreLoc);
      if (ignore) {
        debug("Found ignore %o from %o.", ignore.filepath, dirname);
      }
    }
  }
  return {
    config,
    ignore
  };
}
function findRootConfig(dirname, envName, caller) {
  return loadOneConfig(ROOT_CONFIG_FILENAMES, dirname, envName, caller);
}
function* loadOneConfig(names, dirname, envName, caller, previousConfig = null) {
  const configs = yield* _gensync().all(names.map(filename => readConfig(_path().join(dirname, filename), envName, caller)));
  const config = configs.reduce((previousConfig, config) => {
    if (config && previousConfig) {
      throw new _configError.default(`Multiple configuration files found. Please remove one:\n` + ` - ${_path().basename(previousConfig.filepath)}\n` + ` - ${config.filepath}\n` + `from ${dirname}`);
    }
    return config || previousConfig;
  }, previousConfig);
  if (config) {
    debug("Found configuration %o from %o.", config.filepath, dirname);
  }
  return config;
}
function* loadConfig(name, dirname, envName, caller) {
  const filepath = (((v, w) => (v = v.split("."), w = w.split("."), +v[0] > +w[0] || v[0] == w[0] && +v[1] >= +w[1]))(process.versions.node, "8.9") ? require.resolve : (r, {
    paths: [b]
  }, M = require("module")) => {
    let f = M._findPath(r, M._nodeModulePaths(b).concat(b));
    if (f) return f;
    f = new Error(`Cannot resolve module '${r}'`);
    f.code = "MODULE_NOT_FOUND";
    throw f;
  })(name, {
    paths: [dirname]
  });
  const conf = yield* readConfig(filepath, envName, caller);
  if (!conf) {
    throw new _configError.default(`Config file contains no configuration data`, filepath);
  }
  debug("Loaded config %o from %o.", name, dirname);
  return conf;
}
function readConfig(filepath, envName, caller) {
  const ext = _path().extname(filepath);
  switch (ext) {
    case ".js":
    case ".cjs":
    case ".mjs":
    case ".ts":
    case ".cts":
    case ".mts":
      return readConfigCode(filepath, {
        envName,
        caller
      });
    default:
      return readConfigJSON5(filepath);
  }
}
function* resolveShowConfigPath(dirname) {
  const targetPath = process.env.BABEL_SHOW_CONFIG_FOR;
  if (targetPath != null) {
    const absolutePath = _path().resolve(dirname, targetPath);
    const stats = yield* fs.stat(absolutePath);
    if (!stats.isFile()) {
      throw new Error(`${absolutePath}: BABEL_SHOW_CONFIG_FOR must refer to a regular file, directories are not supported.`);
    }
    return absolutePath;
  }
  return null;
}
function throwConfigError(filepath) {
  throw new _configError.default(`\
Caching was left unconfigured. Babel's plugins, presets, and .babelrc.js files can be configured
for various types of caching, using the first param of their handler functions:

module.exports = function(api) {
  // The API exposes the following:

  // Cache the returned value forever and don't call this function again.
  api.cache(true);

  // Don't cache at all. Not recommended because it will be very slow.
  api.cache(false);

  // Cached based on the value of some function. If this function returns a value different from
  // a previously-encountered value, the plugins will re-evaluate.
  var env = api.cache(() => process.env.NODE_ENV);

  // If testing for a specific env, we recommend specifics to avoid instantiating a plugin for
  // any possible NODE_ENV value that might come up during plugin execution.
  var isProd = api.cache(() => process.env.NODE_ENV === "production");

  // .cache(fn) will perform a linear search though instances to find the matching plugin based
  // based on previous instantiated plugins. If you want to recreate the plugin and discard the
  // previous instance whenever something changes, you may use:
  var isProd = api.cache.invalidate(() => process.env.NODE_ENV === "production");

  // Note, we also expose the following more-verbose versions of the above examples:
  api.cache.forever(); // api.cache(true)
  api.cache.never();   // api.cache(false)
  api.cache.using(fn); // api.cache(fn)

  // Return the value that will be cached.
  return { };
};`, filepath);
}
0 && 0;

//# sourceMappingURL=configuration.js.map
