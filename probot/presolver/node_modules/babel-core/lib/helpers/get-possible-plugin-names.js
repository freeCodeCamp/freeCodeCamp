"use strict";

exports.__esModule = true;
exports.default = getPossiblePluginNames;
function getPossiblePluginNames(pluginName) {
  return ["babel-plugin-" + pluginName, pluginName];
}
module.exports = exports["default"];