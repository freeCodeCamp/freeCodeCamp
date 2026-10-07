"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exec = exec;
exports.findPackageJSONDir = findPackageJSONDir;
exports.getPostcssImplementation = getPostcssImplementation;
exports.getPostcssOptions = getPostcssOptions;
exports.loadConfig = loadConfig;
exports.normalizeSourceMap = normalizeSourceMap;
exports.normalizeSourceMapAfterPostcss = normalizeSourceMapAfterPostcss;
exports.reportError = reportError;
exports.warningFactory = warningFactory;
var _path = _interopRequireDefault(require("path"));
var _url = _interopRequireDefault(require("url"));
var _module = _interopRequireDefault(require("module"));
var _cosmiconfig = require("cosmiconfig");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const parentModule = module;
const stat = (inputFileSystem, filePath) => new Promise((resolve, reject) => {
  inputFileSystem.stat(filePath, (err, stats) => {
    if (err) {
      reject(err);
    }
    resolve(stats);
  });
});
function exec(code, loaderContext) {
  const {
    resource,
    context
  } = loaderContext;
  const module = new _module.default(resource, parentModule);

  // eslint-disable-next-line no-underscore-dangle
  module.paths = _module.default._nodeModulePaths(context);
  module.filename = resource;

  // eslint-disable-next-line no-underscore-dangle
  module._compile(code, resource);
  return module.exports;
}
let tsLoader;
async function loadConfig(loaderContext, config, postcssOptions) {
  const searchPath = typeof config === "string" ? _path.default.resolve(config) : _path.default.dirname(loaderContext.resourcePath);
  let stats;
  try {
    stats = await stat(loaderContext.fs, searchPath);
  } catch (errorIgnore) {
    throw new Error(`No PostCSS config found in: ${searchPath}`);
  }
  const moduleName = "postcss";
  const searchPlaces = [
  // Prefer popular format
  "package.json", `${moduleName}.config.js`, `${moduleName}.config.mjs`, `${moduleName}.config.cjs`, `${moduleName}.config.ts`, `${moduleName}.config.mts`, `${moduleName}.config.cts`, `.${moduleName}rc`, `.${moduleName}rc.json`, `.${moduleName}rc.js`, `.${moduleName}rc.mjs`, `.${moduleName}rc.cjs`, `.${moduleName}rc.ts`, `.${moduleName}rc.mts`, `.${moduleName}rc.cts`, `.${moduleName}rc.yaml`, `.${moduleName}rc.yml`, `.config/${moduleName}rc`, `.config/${moduleName}rc.json`, `.config/${moduleName}rc.yaml`, `.config/${moduleName}rc.yml`, `.config/${moduleName}rc.js`, `.config/${moduleName}rc.mjs`, `.config/${moduleName}rc.cjs`, `.config/${moduleName}rc.ts`, `.config/${moduleName}rc.mts`, `.config/${moduleName}rc.cts`];
  const loaders = {
    ".js": async (...args) => {
      let result;
      try {
        result = _cosmiconfig.defaultLoadersSync[".js"](...args);
      } catch (error) {
        let importESM;
        try {
          // eslint-disable-next-line no-new-func
          importESM = new Function("id", "return import(id);");
        } catch (e) {
          importESM = null;
        }
        if (error.code === "ERR_REQUIRE_ESM" && _url.default.pathToFileURL && importESM) {
          const urlForConfig = _url.default.pathToFileURL(args[0]);
          result = await importESM(urlForConfig);
        } else {
          throw error;
        }
      }
      return result;
    },
    ".cjs": _cosmiconfig.defaultLoadersSync[".cjs"],
    ".mjs": async (...args) => {
      let result;
      let importESM;
      try {
        // eslint-disable-next-line no-new-func
        importESM = new Function("id", "return import(id);");
      } catch (e) {
        importESM = null;
      }
      if (_url.default.pathToFileURL && importESM) {
        const urlForConfig = _url.default.pathToFileURL(args[0]);
        result = await importESM(urlForConfig);
      } else {
        throw new Error("ESM is not supported");
      }
      return result;
    }
  };
  if (!tsLoader) {
    const opts = {
      interopDefault: true
    };
    // eslint-disable-next-line global-require, import/no-extraneous-dependencies
    const jiti = require("jiti")(__filename, opts);
    tsLoader = filepath => jiti(filepath);
  }
  loaders[".cts"] = tsLoader;
  loaders[".mts"] = tsLoader;
  loaders[".ts"] = tsLoader;
  const explorer = (0, _cosmiconfig.cosmiconfig)(moduleName, {
    searchPlaces,
    loaders
  });
  let result;
  try {
    if (stats.isFile()) {
      result = await explorer.load(searchPath);
    } else {
      result = await explorer.search(searchPath);
    }
  } catch (error) {
    throw error;
  }
  if (!result) {
    return {};
  }
  loaderContext.addBuildDependency(result.filepath);
  loaderContext.addDependency(result.filepath);
  if (result.isEmpty) {
    return result;
  }
  if (typeof result.config === "function") {
    const api = {
      mode: loaderContext.mode,
      file: loaderContext.resourcePath,
      // For complex use
      webpackLoaderContext: loaderContext,
      // Partial compatibility with `postcss-cli`
      env: loaderContext.mode,
      options: postcssOptions || {}
    };
    return {
      ...result,
      config: result.config(api)
    };
  }
  return result;
}
function loadPlugin(plugin, options, file) {
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    let loadedPlugin = require(plugin);
    if (loadedPlugin.default) {
      loadedPlugin = loadedPlugin.default;
    }
    if (!options || Object.keys(options).length === 0) {
      return loadedPlugin;
    }
    return loadedPlugin(options);
  } catch (error) {
    throw new Error(`Loading PostCSS "${plugin}" plugin failed: ${error.message}\n\n(@${file})`);
  }
}
function pluginFactory() {
  const listOfPlugins = new Map();
  return plugins => {
    if (typeof plugins === "undefined") {
      return listOfPlugins;
    }
    if (Array.isArray(plugins)) {
      for (const plugin of plugins) {
        if (Array.isArray(plugin)) {
          const [name, options] = plugin;
          listOfPlugins.set(name, options);
        } else if (plugin && typeof plugin === "function") {
          listOfPlugins.set(plugin);
        } else if (plugin && Object.keys(plugin).length === 1 && (typeof plugin[Object.keys(plugin)[0]] === "object" || typeof plugin[Object.keys(plugin)[0]] === "boolean") && plugin[Object.keys(plugin)[0]] !== null) {
          const [name] = Object.keys(plugin);
          const options = plugin[name];
          if (options === false) {
            listOfPlugins.delete(name);
          } else {
            listOfPlugins.set(name, options);
          }
        } else if (plugin) {
          listOfPlugins.set(plugin);
        }
      }
    } else {
      const objectPlugins = Object.entries(plugins);
      for (const [name, options] of objectPlugins) {
        if (options === false) {
          listOfPlugins.delete(name);
        } else {
          listOfPlugins.set(name, options);
        }
      }
    }
    return listOfPlugins;
  };
}
async function tryRequireThenImport(module) {
  let exports;
  try {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    exports = require(module);
    return exports;
  } catch (requireError) {
    let importESM;
    try {
      // eslint-disable-next-line no-new-func
      importESM = new Function("id", "return import(id);");
    } catch (e) {
      importESM = null;
    }
    if (requireError.code === "ERR_REQUIRE_ESM" && importESM) {
      exports = await importESM(module);
      return exports.default;
    }
    throw requireError;
  }
}
async function getPostcssOptions(loaderContext, loadedConfig = {}, postcssOptions = {}) {
  const file = loaderContext.resourcePath;
  let normalizedPostcssOptions = postcssOptions;
  if (typeof normalizedPostcssOptions === "function") {
    normalizedPostcssOptions = normalizedPostcssOptions(loaderContext);
  }
  let plugins = [];
  try {
    const factory = pluginFactory();
    if (loadedConfig.config && loadedConfig.config.plugins) {
      factory(loadedConfig.config.plugins);
    }
    factory(normalizedPostcssOptions.plugins);
    plugins = [...factory()].map(item => {
      const [plugin, options] = item;
      if (typeof plugin === "string") {
        return loadPlugin(plugin, options, file);
      }
      return plugin;
    });
  } catch (error) {
    loaderContext.emitError(error);
  }
  const processOptionsFromConfig = {
    ...loadedConfig.config
  } || {};
  if (processOptionsFromConfig.from) {
    processOptionsFromConfig.from = _path.default.resolve(_path.default.dirname(loadedConfig.filepath), processOptionsFromConfig.from);
  }
  if (processOptionsFromConfig.to) {
    processOptionsFromConfig.to = _path.default.resolve(_path.default.dirname(loadedConfig.filepath), processOptionsFromConfig.to);
  }
  const processOptionsFromOptions = {
    ...normalizedPostcssOptions
  };
  if (processOptionsFromOptions.from) {
    processOptionsFromOptions.from = _path.default.resolve(loaderContext.rootContext, processOptionsFromOptions.from);
  }
  if (processOptionsFromOptions.to) {
    processOptionsFromOptions.to = _path.default.resolve(loaderContext.rootContext, processOptionsFromOptions.to);
  }

  // No need `plugins` and `config` for processOptions
  const {
    plugins: __plugins,
    ...optionsFromConfig
  } = processOptionsFromConfig;
  const {
    config: _config,
    plugins: _plugins,
    ...optionsFromOptions
  } = processOptionsFromOptions;
  const processOptions = {
    from: file,
    to: file,
    map: false,
    ...optionsFromConfig,
    ...optionsFromOptions
  };
  if (typeof processOptions.parser === "string") {
    try {
      processOptions.parser = await tryRequireThenImport(processOptions.parser);
    } catch (error) {
      loaderContext.emitError(new Error(`Loading PostCSS "${processOptions.parser}" parser failed: ${error.message}\n\n(@${file})`));
    }
  }
  if (typeof processOptions.stringifier === "string") {
    try {
      processOptions.stringifier = await tryRequireThenImport(processOptions.stringifier);
    } catch (error) {
      loaderContext.emitError(new Error(`Loading PostCSS "${processOptions.stringifier}" stringifier failed: ${error.message}\n\n(@${file})`));
    }
  }
  if (typeof processOptions.syntax === "string") {
    try {
      processOptions.syntax = await tryRequireThenImport(processOptions.syntax);
    } catch (error) {
      loaderContext.emitError(new Error(`Loading PostCSS "${processOptions.syntax}" syntax failed: ${error.message}\n\n(@${file})`));
    }
  }
  if (processOptions.map === true) {
    // https://github.com/postcss/postcss/blob/master/docs/source-maps.md
    processOptions.map = {
      inline: true
    };
  }
  return {
    plugins,
    processOptions
  };
}
const IS_NATIVE_WIN32_PATH = /^[a-z]:[/\\]|^\\\\/i;
const ABSOLUTE_SCHEME = /^[a-z0-9+\-.]+:/i;
function getURLType(source) {
  if (source[0] === "/") {
    if (source[1] === "/") {
      return "scheme-relative";
    }
    return "path-absolute";
  }
  if (IS_NATIVE_WIN32_PATH.test(source)) {
    return "path-absolute";
  }
  return ABSOLUTE_SCHEME.test(source) ? "absolute" : "path-relative";
}
function normalizeSourceMap(map, resourceContext) {
  let newMap = map;

  // Some loader emit source map as string
  // Strip any JSON XSSI avoidance prefix from the string (as documented in the source maps specification), and then parse the string as JSON.
  if (typeof newMap === "string") {
    newMap = JSON.parse(newMap);
  }
  delete newMap.file;
  const {
    sourceRoot
  } = newMap;
  delete newMap.sourceRoot;
  if (newMap.sources) {
    newMap.sources = newMap.sources.map(source => {
      const sourceType = getURLType(source);

      // Do no touch `scheme-relative` and `absolute` URLs
      if (sourceType === "path-relative" || sourceType === "path-absolute") {
        const absoluteSource = sourceType === "path-relative" && sourceRoot ? _path.default.resolve(sourceRoot, _path.default.normalize(source)) : _path.default.normalize(source);
        return _path.default.relative(resourceContext, absoluteSource);
      }
      return source;
    });
  }
  return newMap;
}
function normalizeSourceMapAfterPostcss(map, resourceContext) {
  const newMap = map;

  // result.map.file is an optional property that provides the output filename.
  // Since we don't know the final filename in the webpack build chain yet, it makes no sense to have it.
  // eslint-disable-next-line no-param-reassign
  delete newMap.file;

  // eslint-disable-next-line no-param-reassign
  newMap.sourceRoot = "";

  // eslint-disable-next-line no-param-reassign
  newMap.sources = newMap.sources.map(source => {
    if (source.indexOf("<") === 0) {
      return source;
    }
    const sourceType = getURLType(source);

    // Do no touch `scheme-relative`, `path-absolute` and `absolute` types
    if (sourceType === "path-relative") {
      return _path.default.resolve(resourceContext, source);
    }
    return source;
  });
  return newMap;
}
function findPackageJSONDir(cwd, statSync) {
  let dir = cwd;
  for (;;) {
    try {
      if (statSync(_path.default.join(dir, "package.json")).isFile()) {
        break;
      }
    } catch (error) {
      // Nothing
    }
    const parent = _path.default.dirname(dir);
    if (dir === parent) {
      dir = null;
      break;
    }
    dir = parent;
  }
  return dir;
}
function getPostcssImplementation(loaderContext, implementation) {
  let resolvedImplementation = implementation;
  if (!implementation || typeof implementation === "string") {
    const postcssImplPkg = implementation || "postcss";

    // eslint-disable-next-line import/no-dynamic-require, global-require
    resolvedImplementation = require(postcssImplPkg);
  }

  // eslint-disable-next-line consistent-return
  return resolvedImplementation;
}
function reportError(loaderContext, callback, error) {
  if (error.file) {
    loaderContext.addDependency(error.file);
  }
  if (error.name === "CssSyntaxError") {
    callback(syntaxErrorFactory(error));
  } else {
    callback(error);
  }
}
function warningFactory(warning) {
  let message = "";
  if (typeof warning.line !== "undefined") {
    message += `(${warning.line}:${warning.column}) `;
  }
  if (typeof warning.plugin !== "undefined") {
    message += `from "${warning.plugin}" plugin: `;
  }
  message += warning.text;
  if (warning.node) {
    message += `\n\nCode:\n  ${warning.node.toString()}\n`;
  }
  const obj = new Error(message, {
    cause: warning
  });
  obj.stack = null;
  return obj;
}
function syntaxErrorFactory(error) {
  let message = "\nSyntaxError\n\n";
  if (typeof error.line !== "undefined") {
    message += `(${error.line}:${error.column}) `;
  }
  if (typeof error.plugin !== "undefined") {
    message += `from "${error.plugin}" plugin: `;
  }
  message += error.file ? `${error.file} ` : "<css input> ";
  message += `${error.reason}`;
  const code = error.showSourceCode();
  if (code) {
    message += `\n\n${code}\n`;
  }
  const obj = new Error(message, {
    cause: error
  });
  obj.stack = null;
  return obj;
}