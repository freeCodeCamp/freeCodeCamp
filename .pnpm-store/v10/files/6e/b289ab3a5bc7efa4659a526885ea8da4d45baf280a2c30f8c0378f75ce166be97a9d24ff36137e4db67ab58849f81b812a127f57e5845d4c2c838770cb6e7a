"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
let babel;
try {
  babel = require("@babel/core");
} catch (err) {
  if (err.code === "MODULE_NOT_FOUND") {
    err.message += "\n babel-loader@8 requires Babel 7.x (the package '@babel/core'). " + "If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.";
  }
  throw err;
}

// Since we've got the reverse bridge package at @babel/core@6.x, give
// people useful feedback if they try to use it alongside babel-loader.
if (/^6\./.test(babel.version)) {
  throw new Error("\n babel-loader@8 will not work with the '@babel/core@6' bridge package. " + "If you want to use Babel 6.x, install 'babel-loader@7'.");
}
const {
  version
} = require("../package.json");
const cache = require("./cache");
const transform = require("./transform");
const injectCaller = require("./injectCaller");
const schema = require("./schema");
const {
  isAbsolute
} = require("path");
const loaderUtils = require("loader-utils");
const validateOptions = require("schema-utils");
function subscribe(subscriber, metadata, context) {
  if (context[subscriber]) {
    context[subscriber](metadata);
  }
}
module.exports = makeLoader();
module.exports.custom = makeLoader;
function makeLoader(callback) {
  const overrides = callback ? callback(babel) : undefined;
  return function (source, inputSourceMap) {
    // Make the loader async
    const callback = this.async();
    loader.call(this, source, inputSourceMap, overrides).then(args => callback(null, ...args), err => callback(err));
  };
}
function loader(_x, _x2, _x3) {
  return _loader.apply(this, arguments);
}
function _loader() {
  _loader = _asyncToGenerator(function* (source, inputSourceMap, overrides) {
    const filename = this.resourcePath;
    const logger = typeof this.getLogger === "function" ? this.getLogger("babel-loader") : {
      debug: () => {}
    };
    let loaderOptions = loaderUtils.getOptions(this);
    validateOptions(schema, loaderOptions, {
      name: "Babel loader"
    });
    if (loaderOptions.customize != null) {
      if (typeof loaderOptions.customize !== "string") {
        throw new Error("Customized loaders must be implemented as standalone modules.");
      }
      if (!isAbsolute(loaderOptions.customize)) {
        throw new Error("Customized loaders must be passed as absolute paths, since " + "babel-loader has no way to know what they would be relative to.");
      }
      if (overrides) {
        throw new Error("babel-loader's 'customize' option is not available when already " + "using a customized babel-loader wrapper.");
      }
      logger.debug(`loading customize override: '${loaderOptions.customize}'`);
      let override = require(loaderOptions.customize);
      if (override.__esModule) override = override.default;
      if (typeof override !== "function") {
        throw new Error("Custom overrides must be functions.");
      }
      logger.debug("applying customize override to @babel/core");
      overrides = override(babel);
    }
    let customOptions;
    if (overrides && overrides.customOptions) {
      logger.debug("applying overrides customOptions() to loader options");
      const result = yield overrides.customOptions.call(this, loaderOptions, {
        source,
        map: inputSourceMap
      });
      customOptions = result.custom;
      loaderOptions = result.loader;
    }

    // Deprecation handling
    if ("forceEnv" in loaderOptions) {
      console.warn("The option `forceEnv` has been removed in favor of `envName` in Babel 7.");
    }
    if (typeof loaderOptions.babelrc === "string") {
      console.warn("The option `babelrc` should not be set to a string anymore in the babel-loader config. " + "Please update your configuration and set `babelrc` to true or false.\n" + "If you want to specify a specific babel config file to inherit config from " + "please use the `extends` option.\nFor more information about this options see " + "https://babeljs.io/docs/core-packages/#options");
    }
    logger.debug("normalizing loader options");
    // Standardize on 'sourceMaps' as the key passed through to Webpack, so that
    // users may safely use either one alongside our default use of
    // 'this.sourceMap' below without getting error about conflicting aliases.
    if (Object.prototype.hasOwnProperty.call(loaderOptions, "sourceMap") && !Object.prototype.hasOwnProperty.call(loaderOptions, "sourceMaps")) {
      loaderOptions = Object.assign({}, loaderOptions, {
        sourceMaps: loaderOptions.sourceMap
      });
      delete loaderOptions.sourceMap;
    }
    const programmaticOptions = Object.assign({}, loaderOptions, {
      filename,
      inputSourceMap: inputSourceMap || loaderOptions.inputSourceMap,
      // Set the default sourcemap behavior based on Webpack's mapping flag,
      // but allow users to override if they want.
      sourceMaps: loaderOptions.sourceMaps === undefined ? this.sourceMap : loaderOptions.sourceMaps,
      // Ensure that Webpack will get a full absolute path in the sourcemap
      // so that it can properly map the module back to its internal cached
      // modules.
      sourceFileName: filename
    });
    // Remove loader related options
    delete programmaticOptions.customize;
    delete programmaticOptions.cacheDirectory;
    delete programmaticOptions.cacheIdentifier;
    delete programmaticOptions.cacheCompression;
    delete programmaticOptions.metadataSubscribers;
    if (!babel.loadPartialConfig) {
      throw new Error(`babel-loader ^8.0.0-beta.3 requires @babel/core@7.0.0-beta.41, but ` + `you appear to be using "${babel.version}". Either update your ` + `@babel/core version, or pin you babel-loader version to 8.0.0-beta.2`);
    }

    // babel.loadPartialConfigAsync is available in v7.8.0+
    const {
      loadPartialConfigAsync = babel.loadPartialConfig
    } = babel;
    logger.debug("resolving Babel configs");
    const config = yield loadPartialConfigAsync(injectCaller(programmaticOptions, this.target));
    if (config) {
      let options = config.options;
      if (overrides && overrides.config) {
        logger.debug("applying overrides config() to Babel config");
        options = yield overrides.config.call(this, config, {
          source,
          map: inputSourceMap,
          customOptions
        });
      }
      if (options.sourceMaps === "inline") {
        // Babel has this weird behavior where if you set "inline", we
        // inline the sourcemap, and set 'result.map = null'. This results
        // in bad behavior from Babel since the maps get put into the code,
        // which Webpack does not expect, and because the map we return to
        // Webpack is null, which is also bad. To avoid that, we override the
        // behavior here so "inline" just behaves like 'true'.
        options.sourceMaps = true;
      }
      const {
        cacheDirectory = null,
        cacheIdentifier = JSON.stringify({
          options,
          "@babel/core": transform.version,
          "@babel/loader": version
        }),
        cacheCompression = true,
        metadataSubscribers = []
      } = loaderOptions;
      let result;
      if (cacheDirectory) {
        logger.debug("cache is enabled");
        result = yield cache({
          source,
          options,
          transform,
          cacheDirectory,
          cacheIdentifier,
          cacheCompression,
          logger
        });
      } else {
        logger.debug("cache is disabled, applying Babel transform");
        result = yield transform(source, options);
      }

      // Availabe since Babel 7.12
      // https://github.com/babel/babel/pull/11907
      if (config.files) {
        config.files.forEach(configFile => {
          this.addDependency(configFile);
          logger.debug(`added '${configFile}' to webpack dependencies`);
        });
      } else {
        // .babelrc.json
        if (typeof config.babelrc === "string") {
          this.addDependency(config.babelrc);
          logger.debug(`added '${config.babelrc}' to webpack dependencies`);
        }
        // babel.config.js
        if (config.config) {
          this.addDependency(config.config);
          logger.debug(`added '${config.config}' to webpack dependencies`);
        }
      }
      if (result) {
        if (overrides && overrides.result) {
          logger.debug("applying overrides result() to Babel transform results");
          result = yield overrides.result.call(this, result, {
            source,
            map: inputSourceMap,
            customOptions,
            config,
            options
          });
        }
        const {
          code,
          map,
          metadata,
          externalDependencies
        } = result;
        externalDependencies == null ? void 0 : externalDependencies.forEach(dep => {
          this.addDependency(dep);
          logger.debug(`added '${dep}' to webpack dependencies`);
        });
        metadataSubscribers.forEach(subscriber => {
          subscribe(subscriber, metadata, this);
          logger.debug(`invoked metadata subscriber '${String(subscriber)}'`);
        });
        return [code, map];
      }
    }

    // If the file was ignored, pass through the original content.
    return [source, inputSourceMap];
  });
  return _loader.apply(this, arguments);
}