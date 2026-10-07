"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = exports.BabelConfigItemsCacheInvalidatorPlugin = void 0;
var _babelLoader = _interopRequireDefault(require("babel-loader"));
var _babelLoaderHelpers = require("./babel-loader-helpers");
var _browserslist = require("./browserslist");
const customOptionsCache = new Map();
const configCache = new Map();
const babelrcFileToCacheKey = new Map();
const customBabelLoader = _babelLoader.default.custom(babel => {
  return {
    // Passed the loader options.
    customOptions({
      stage = `test`,
      reactRuntime = `classic`,
      reactImportSource,
      isPageTemplate,
      resourceQuery,
      rootDir = process.cwd(),
      ...options
    }) {
      const customOptionsCacheKey = `${stage}-${isPageTemplate}-${resourceQuery}`;
      if (customOptionsCache.has(customOptionsCacheKey)) {
        return customOptionsCache.get(customOptionsCacheKey);
      }
      const toReturn = {
        custom: {
          stage,
          reactRuntime,
          reactImportSource,
          isPageTemplate,
          resourceQuery
        },
        loader: {
          cacheIdentifier: JSON.stringify({
            browsersList: (0, _browserslist.getBrowsersList)(rootDir),
            babel: babel.version,
            gatsbyPreset: require(`babel-preset-gatsby/package.json`).version,
            env: babel.getEnv()
          }),
          sourceType: `unambiguous`,
          ...(0, _babelLoaderHelpers.getCustomOptions)(stage),
          ...options
        }
      };
      customOptionsCache.set(customOptionsCacheKey, toReturn);
      return toReturn;
    },
    // Passed Babel's 'PartialConfig' object.
    config(partialConfig, {
      customOptions
    }) {
      const {
        stage,
        isPageTemplate,
        resourceQuery
      } = customOptions;
      let configCacheKey = `${stage}-${isPageTemplate}-${resourceQuery}`;
      if (partialConfig.hasFilesystemConfig()) {
        // partialConfig.files is a Set that accumulates used config files (absolute paths)
        partialConfig.files.forEach(configFilePath => {
          configCacheKey += `_${configFilePath}`;
        });

        // after generating configCacheKey add link between babelrc files and cache keys that rely on it
        // so we can invalidate memoized configs when used babelrc file changes
        partialConfig.files.forEach(configFilePath => {
          let cacheKeysToInvalidate = babelrcFileToCacheKey.get(configFilePath);
          if (!cacheKeysToInvalidate) {
            cacheKeysToInvalidate = new Set();
            babelrcFileToCacheKey.set(configFilePath, cacheKeysToInvalidate);
          }
          cacheKeysToInvalidate.add(configCacheKey);
        });
      }
      let {
        options
      } = partialConfig;
      if (configCache.has(configCacheKey)) {
        return {
          ...options,
          ...configCache.get(configCacheKey)
        };
      }
      const [reduxPresets, reduxPlugins, requiredPresets, requiredPlugins, fallbackPresets] = (0, _babelLoaderHelpers.prepareOptions)(babel, customOptions);

      // If there is no filesystem babel config present, add our fallback
      // presets/plugins.
      if (!partialConfig.hasFilesystemConfig()) {
        options = {
          ...options,
          plugins: requiredPlugins,
          presets: [...fallbackPresets, ...requiredPresets]
        };
      } else {
        // With a babelrc present, only add our required plugins/presets
        options = {
          ...options,
          plugins: [...options.plugins, ...requiredPlugins],
          presets: [...options.presets, ...requiredPresets]
        };
        // User-defined preset likely contains `babel-preset-gatsby`
        // Make sure to pass required dynamic options (e.g. `stage` to it):
        (0, _babelLoaderHelpers.addRequiredPresetOptions)(babel, options.presets, customOptions);
      }

      // Merge in presets/plugins added from gatsby plugins.
      reduxPresets.forEach(preset => {
        options.presets = (0, _babelLoaderHelpers.mergeConfigItemOptions)({
          items: options.presets,
          itemToMerge: preset,
          type: `preset`,
          babel
        });
      });
      reduxPlugins.forEach(plugin => {
        options.plugins = (0, _babelLoaderHelpers.mergeConfigItemOptions)({
          items: options.plugins,
          itemToMerge: plugin,
          type: `plugin`,
          babel
        });
      });

      // cache just plugins and presets, because config also includes things like
      // filenames - this is mostly to not call `mergeConfigItemOptions` for each file
      // as that function call `babel.createConfigItem` and is quite expensive but also
      // skips quite a few nested loops on top of that
      configCache.set(configCacheKey, {
        plugins: options.plugins,
        presets: options.presets
      });
      return options;
    }
  };
});
var _default = customBabelLoader;
exports.default = _default;
class BabelConfigItemsCacheInvalidatorPlugin {
  constructor() {
    this.name = `BabelConfigItemsCacheInvalidatorPlugin`;
  }
  apply(compiler) {
    compiler.hooks.invalid.tap(this.name, function (file) {
      const cacheKeysToInvalidate = babelrcFileToCacheKey.get(file);
      if (cacheKeysToInvalidate) {
        for (const cacheKey of cacheKeysToInvalidate) {
          configCache.delete(cacheKey);
        }
        babelrcFileToCacheKey.delete(file);
      }
    });
  }
}
exports.BabelConfigItemsCacheInvalidatorPlugin = BabelConfigItemsCacheInvalidatorPlugin;
//# sourceMappingURL=babel-loader.js.map