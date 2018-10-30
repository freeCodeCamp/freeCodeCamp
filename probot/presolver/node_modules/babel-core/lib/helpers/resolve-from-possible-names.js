"use strict";

exports.__esModule = true;
exports.default = resolveFromPossibleNames;

var _resolve = require("./resolve");

var _resolve2 = _interopRequireDefault(_resolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolveFromPossibleNames(possibleNames, dirname) {
  return possibleNames.reduce(function (accum, curr) {
    return accum || (0, _resolve2.default)(curr, dirname);
  }, null);
}
module.exports = exports["default"];