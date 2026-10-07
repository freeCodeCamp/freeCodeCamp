"use strict";

exports.__esModule = true;
exports.normalizeConfig = void 0;
exports.normalizePlugin = normalizePlugin;
exports.normalizePlugins = normalizePlugins;
function normalizePlugin(plugin) {
  var _plugin$options;
  if (typeof plugin === `string`) {
    return {
      resolve: plugin,
      options: {}
    };
  }
  if ((_plugin$options = plugin.options) !== null && _plugin$options !== void 0 && _plugin$options.plugins) {
    plugin.options = {
      ...plugin.options,
      plugins: normalizePlugins(plugin.options.plugins)
    };
  }
  return plugin;
}
function normalizePlugins(plugins) {
  return (plugins || []).map(normalizePlugin);
}
const normalizeConfig = (config = {}) => {
  return {
    ...config,
    plugins: (config.plugins || []).map(normalizePlugin)
  };
};
exports.normalizeConfig = normalizeConfig;
//# sourceMappingURL=normalize.js.map