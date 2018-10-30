"use strict";

exports.__esModule = true;
exports.default = resolvePlugin;

var _resolveFromPossibleNames = require("./resolve-from-possible-names");

var _resolveFromPossibleNames2 = _interopRequireDefault(_resolveFromPossibleNames);

var _getPossiblePluginNames = require("./get-possible-plugin-names");

var _getPossiblePluginNames2 = _interopRequireDefault(_getPossiblePluginNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolvePlugin(pluginName) {
  var dirname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : process.cwd();

  return (0, _resolveFromPossibleNames2.default)((0, _getPossiblePluginNames2.default)(pluginName), dirname);
}
module.exports = exports["default"];