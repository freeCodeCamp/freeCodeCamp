"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.loadConfigAndPlugins = loadConfigAndPlugins;
var _loadConfig = require("../../../bootstrap/load-config");
var _loadPlugins = require("../../../bootstrap/load-plugins");
var _redux = require("../../../redux");
var _apiRunnerNode = _interopRequireDefault(require("../../api-runner-node"));
async function loadConfigAndPlugins(...args) {
  const [{
    siteDirectory,
    program
  }] = args;
  _redux.store.dispatch({
    type: `SET_PROGRAM`,
    payload: {
      ...program,
      directory: siteDirectory
    }
  });
  const config = await (0, _loadConfig.loadConfig)(...args);
  await (0, _loadPlugins.loadPlugins)(config, siteDirectory);

  // Cache is already initialized
  await (0, _apiRunnerNode.default)(`onPluginInit`);
}
//# sourceMappingURL=load-config-and-plugins.js.map