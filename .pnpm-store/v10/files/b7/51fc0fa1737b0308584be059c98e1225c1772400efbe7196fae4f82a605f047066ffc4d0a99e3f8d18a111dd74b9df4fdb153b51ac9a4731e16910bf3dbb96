"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.logout = logout;
var _reporter = _interopRequireDefault(require("./reporter"));
var _manageToken = require("./util/manage-token");
/**
 * Main function that logs out of Gatsby Cloud by removing the token from the config store.
 */
async function logout() {
  await (0, _manageToken.setToken)(null, ``);
  _reporter.default.info(`You have been logged out of Gatsby Cloud from this device.`);
}