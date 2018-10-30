"use strict";

exports.__esModule = true;
exports.default = resolvePreset;

var _resolveFromPossibleNames = require("./resolve-from-possible-names");

var _resolveFromPossibleNames2 = _interopRequireDefault(_resolveFromPossibleNames);

var _getPossiblePresetNames = require("./get-possible-preset-names");

var _getPossiblePresetNames2 = _interopRequireDefault(_getPossiblePresetNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolvePreset(presetName) {
  var dirname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : process.cwd();

  return (0, _resolveFromPossibleNames2.default)((0, _getPossiblePresetNames2.default)(presetName), dirname);
}
module.exports = exports["default"];