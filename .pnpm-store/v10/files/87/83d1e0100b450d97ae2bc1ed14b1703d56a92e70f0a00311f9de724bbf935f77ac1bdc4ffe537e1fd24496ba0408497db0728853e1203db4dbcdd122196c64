"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getConfigStore = void 0;
var _configstore = _interopRequireDefault(require("configstore"));
let config;
/**
 * Gets the configstore instance related to gatsby
 * @return the ConfigStore instance for gatsby
 */

const getConfigStore = () => {
  if (!config) {
    config = new _configstore.default(`gatsby`, {}, {
      globalConfigPath: true
    });
  }
  return config;
};
exports.getConfigStore = getConfigStore;