"use strict";

exports.__esModule = true;
exports.listPlugins = listPlugins;
function listPlugins({
  root
}) {
  var _require;
  const parsedPlugins = (_require = require(`${root}/gatsby-config`)) === null || _require === void 0 ? void 0 : _require.plugins;
  if (!parsedPlugins) {
    return [];
  }
  const plugins = parsedPlugins.map(plugin => {
    if (typeof plugin === `string`) {
      return plugin;
    } else if (plugin.resolve) {
      return plugin.resolve;
    } else {
      return `Plugin could not be recognized`;
    }
  });
  return plugins;
}