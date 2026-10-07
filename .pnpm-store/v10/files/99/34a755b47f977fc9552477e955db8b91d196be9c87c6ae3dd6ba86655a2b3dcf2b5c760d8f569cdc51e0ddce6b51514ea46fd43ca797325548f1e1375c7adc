"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.setPackageManager = exports.getPackageManager = void 0;
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _reporter = _interopRequireDefault(require("../reporter"));
const packageMangerConfigKey = `cli.packageManager`;
const getPackageManager = () => (0, _gatsbyCoreUtils.getConfigStore)().get(packageMangerConfigKey);
exports.getPackageManager = getPackageManager;
const setPackageManager = packageManager => {
  (0, _gatsbyCoreUtils.getConfigStore)().set(packageMangerConfigKey, packageManager);
  _reporter.default.info(`Preferred package manager set to "${packageManager}"`);
};
exports.setPackageManager = setPackageManager;