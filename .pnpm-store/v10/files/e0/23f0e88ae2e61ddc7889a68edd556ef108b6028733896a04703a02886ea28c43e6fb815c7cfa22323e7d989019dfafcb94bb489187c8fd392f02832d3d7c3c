"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.prepareOptions = exports.mergeConfigItemOptions = exports.getCustomOptions = exports.addRequiredPresetOptions = void 0;
var _merge2 = _interopRequireDefault(require("lodash/merge"));
var _findIndex2 = _interopRequireDefault(require("lodash/findIndex"));
var _path = _interopRequireDefault(require("path"));
const loadCachedConfig = () => {
  let pluginBabelConfig = {
    stages: {
      test: {
        plugins: [],
        presets: []
      }
    }
  };
  if (process.env.NODE_ENV !== `test`) {
    pluginBabelConfig = require(_path.default.join(process.cwd(), `./.cache/babelState.json`));
  }
  return pluginBabelConfig;
};
const getCustomOptions = stage => {
  const pluginBabelConfig = loadCachedConfig();
  return pluginBabelConfig.stages[stage].options;
};

/**
 * https://babeljs.io/docs/en/babel-core#createconfigitem
 * If this function is called multiple times for a given plugin,
 * Babel will call the plugin's function itself multiple times.
 * If you have a clear set of expected plugins and presets to inject,
 * pre-constructing the config items would be recommended.
 */
exports.getCustomOptions = getCustomOptions;
const configItemsMemoCache = new Map();
const prepareOptions = (babel, customOptions, resolve = require.resolve) => {
  const {
    stage,
    reactRuntime,
    reactImportSource,
    isPageTemplate,
    resourceQuery
  } = customOptions;
  const configItemsMemoCacheKey = `${stage}-${isPageTemplate}-${resourceQuery}`;
  if (configItemsMemoCache.has(configItemsMemoCacheKey)) {
    return configItemsMemoCache.get(configItemsMemoCacheKey);
  }
  const pluginBabelConfig = loadCachedConfig();

  // Required plugins/presets
  const requiredPlugins = [babel.createConfigItem([resolve(`babel-plugin-remove-graphql-queries`),
  // packages/babel-plugin-remove-graphql-queries/src/index.ts sets a default value for staticQueryDir
  // They should be identical
  {
    stage,
    staticQueryDir: `page-data/sq/d`
  }], {
    type: `plugin`
  })];
  if ((stage === `develop` || stage === `build-javascript`) && isPageTemplate) {
    const apis = [`getServerData`, `config`];
    if (resourceQuery.includes(`?export=default`) || resourceQuery.includes(`&export=default`)) {
      apis.push(`Head`);
    }
    if (resourceQuery.includes(`?export=head`) || resourceQuery.includes(`&export=head`)) {
      apis.push(`default`);
    }
    requiredPlugins.push(babel.createConfigItem([resolve(`./babel/babel-plugin-remove-api`), {
      apis
    }], {
      type: `plugin`
    }));
  }
  if (stage === `develop` || stage === `build-html` || stage === `develop-html`) {
    requiredPlugins.push(babel.createConfigItem([resolve(`./babel/babel-plugin-add-slice-placeholder-location`)], {
      type: `plugin`
    }));
  }
  const requiredPresets = [];
  if (stage === `develop`) {
    requiredPlugins.push(babel.createConfigItem([resolve(`react-refresh/babel`)], {
      type: `plugin`
    }));
  }

  // Fallback preset
  const fallbackPresets = [];
  fallbackPresets.push(babel.createConfigItem([resolve(`babel-preset-gatsby`), {
    stage,
    reactRuntime,
    reactImportSource
  }], {
    type: `preset`
  }));

  // Go through babel state and create config items for presets/plugins from.
  const reduxPlugins = [];
  const reduxPresets = [];
  if (stage) {
    pluginBabelConfig.stages[stage].plugins.forEach(plugin => {
      reduxPlugins.push(babel.createConfigItem([resolve(plugin.name), plugin.options], {
        dirname: plugin.name,
        type: `plugin`
      }));
    });
    pluginBabelConfig.stages[stage].presets.forEach(preset => {
      reduxPresets.push(babel.createConfigItem([resolve(preset.name), preset.options], {
        dirname: preset.name,
        type: `preset`
      }));
    });
  }
  const toReturn = [reduxPresets, reduxPlugins, requiredPresets, requiredPlugins, fallbackPresets];
  configItemsMemoCache.set(configItemsMemoCacheKey, toReturn);
  return toReturn;
};
exports.prepareOptions = prepareOptions;
const addRequiredPresetOptions = (babel, presets, options = {}, resolve = require.resolve) => {
  // Always pass `stage` option to babel-preset-gatsby
  //  (even if defined in custom babelrc)
  const gatsbyPresetResolved = resolve(`babel-preset-gatsby`);
  const index = presets.findIndex(p => p.file.resolved === gatsbyPresetResolved);
  if (index !== -1) {
    presets[index] = babel.createConfigItem([gatsbyPresetResolved, {
      ...presets[index].options,
      stage: options.stage
    }], {
      type: `preset`
    });
  }
  return presets;
};
exports.addRequiredPresetOptions = addRequiredPresetOptions;
const mergeConfigItemOptions = ({
  items,
  itemToMerge,
  type,
  babel
}) => {
  const index = (0, _findIndex2.default)(items, i => {
    var _i$file, _itemToMerge$file;
    return ((_i$file = i.file) === null || _i$file === void 0 ? void 0 : _i$file.resolved) === ((_itemToMerge$file = itemToMerge.file) === null || _itemToMerge$file === void 0 ? void 0 : _itemToMerge$file.resolved);
  });

  // If this exist, merge the options, otherwise, add it to the array
  if (index !== -1) {
    var _itemToMerge$file2;
    items[index] = babel.createConfigItem([(_itemToMerge$file2 = itemToMerge.file) === null || _itemToMerge$file2 === void 0 ? void 0 : _itemToMerge$file2.resolved, (0, _merge2.default)({}, items[index].options, itemToMerge.options)], {
      type
    });
  } else {
    items.push(itemToMerge);
  }
  return items;
};
exports.mergeConfigItemOptions = mergeConfigItemOptions;
//# sourceMappingURL=babel-loader-helpers.js.map