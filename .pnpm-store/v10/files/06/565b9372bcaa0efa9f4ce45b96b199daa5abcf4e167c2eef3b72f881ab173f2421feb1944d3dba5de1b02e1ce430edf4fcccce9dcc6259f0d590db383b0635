"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.addPlugins = addPlugins;
var _reporter = _interopRequireDefault(require("../reporter"));
var _pluginAddUtils = require("./plugin-add-utils");
const normalizePluginName = plugin => {
  if (plugin.startsWith(`gatsby-`)) {
    return plugin;
  }
  if (plugin.startsWith(`source-`) || plugin.startsWith(`transformer-`) || plugin.startsWith(`plugin-`)) {
    return `gatsby-${plugin}`;
  }
  return `gatsby-plugin-${plugin}`;
};
async function installPluginPackage(plugin, root) {
  const installTimer = _reporter.default.activityTimer(`Installing ${plugin}`);
  installTimer.start();
  _reporter.default.info(`Installing ${plugin}`);
  try {
    await (0, _pluginAddUtils.NPMPackageCreate)({
      root,
      name: plugin
    });
    _reporter.default.info(`Installed NPM package ${plugin}`);
  } catch (err) {
    var _JSON$parse;
    _reporter.default.error((_JSON$parse = JSON.parse(err)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.message);
    installTimer.setStatus(`FAILED`);
  }
  installTimer.end();
}
async function installPluginConfig(plugin, options, root) {
  // Plugins can optionally include a key, to allow duplicates
  const [pluginName, pluginKey] = plugin.split(`:`);
  const installTimer = _reporter.default.activityTimer(`Adding ${pluginName} ${pluginKey ? `(${pluginKey}) ` : ``}to gatsby-config`);
  installTimer.start();
  _reporter.default.info(`Adding ${pluginName}`);
  try {
    await (0, _pluginAddUtils.GatsbyPluginCreate)({
      root,
      name: pluginName,
      options,
      key: pluginKey
    });
    _reporter.default.info(`Installed ${pluginName || pluginKey} in gatsby-config`);
  } catch (err) {
    var _JSON$parse2;
    _reporter.default.error((_JSON$parse2 = JSON.parse(err)) === null || _JSON$parse2 === void 0 ? void 0 : _JSON$parse2.message);
    installTimer.setStatus(`FAILED`);
  }
  installTimer.end();
}
async function addPlugins(plugins, pluginOptions, directory, packages = []) {
  if (!(plugins !== null && plugins !== void 0 && plugins.length)) {
    _reporter.default.error(`Please specify a plugin to install`);
    return;
  }
  const pluginList = plugins.map(normalizePluginName);
  await Promise.all(packages.map(plugin => installPluginPackage(plugin, directory)));
  await Promise.all(pluginList.map(plugin => installPluginConfig(plugin, pluginOptions[plugin], directory)));
}