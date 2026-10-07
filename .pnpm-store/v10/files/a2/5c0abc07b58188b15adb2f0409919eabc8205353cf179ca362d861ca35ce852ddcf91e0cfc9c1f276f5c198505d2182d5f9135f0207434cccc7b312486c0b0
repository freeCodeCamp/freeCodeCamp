'use strict';

const { visit } = require('../xast.js');

/**
 * Plugins engine.
 *
 * @module plugins
 *
 * @param {Object} ast input ast
 * @param {Object} info extra information
 * @param {Array} plugins plugins object from config
 * @return {Object} output ast
 */
const invokePlugins = (ast, info, plugins, overrides, globalOverrides) => {
  for (const plugin of plugins) {
    const override = overrides == null ? null : overrides[plugin.name];
    if (override === false) {
      continue;
    }
    const params = { ...plugin.params, ...globalOverrides, ...override };

    if (plugin.type === 'perItem') {
      ast = perItem(ast, info, plugin, params);
    }
    if (plugin.type === 'perItemReverse') {
      ast = perItem(ast, info, plugin, params, true);
    }
    if (plugin.type === 'full') {
      if (plugin.active) {
        ast = plugin.fn(ast, params, info);
      }
    }
    if (plugin.type === 'visitor') {
      if (plugin.active) {
        const visitor = plugin.fn(ast, params, info);
        if (visitor != null) {
          visit(ast, visitor);
        }
      }
    }
  }
  return ast;
};
exports.invokePlugins = invokePlugins;

/**
 * Direct or reverse per-item loop.
 *
 * @param {Object} data input data
 * @param {Object} info extra information
 * @param {Array} plugins plugins list to process
 * @param {boolean} [reverse] reverse pass?
 * @return {Object} output data
 */
function perItem(data, info, plugin, params, reverse) {
  function monkeys(items) {
    items.children = items.children.filter(function (item) {
      // reverse pass
      if (reverse && item.children) {
        monkeys(item);
      }
      // main filter
      let kept = true;
      if (plugin.active) {
        kept = plugin.fn(item, params, info) !== false;
      }
      // direct pass
      if (!reverse && item.children) {
        monkeys(item);
      }
      return kept;
    });
    return items;
  }
  return monkeys(data);
}

const createPreset = ({ name, plugins }) => {
  return {
    name,
    type: 'full',
    fn: (ast, params, info) => {
      const { floatPrecision, overrides } = params;
      const globalOverrides = {};
      if (floatPrecision != null) {
        globalOverrides.floatPrecision = floatPrecision;
      }
      if (overrides) {
        for (const [pluginName, override] of Object.entries(overrides)) {
          if (override === true) {
            console.warn(
              `You are trying to enable ${pluginName} which is not part of preset.\n` +
                `Try to put it before or after preset, for example\n\n` +
                `plugins: [\n` +
                `  {\n` +
                `    name: 'preset-default',\n` +
                `  },\n` +
                `  'cleanupListOfValues'\n` +
                `]\n`
            );
          }
        }
      }
      return invokePlugins(ast, info, plugins, overrides, globalOverrides);
    },
  };
};
exports.createPreset = createPreset;
