"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLatLong;
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _merge = _interopRequireDefault(require("./util/merge"));
var _includesString = _interopRequireDefault(require("./util/includesString"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
var latDMS = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i;
var longDMS = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i;
var defaultLatLongOptions = {
  checkDMS: false
};
function isLatLong(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, defaultLatLongOptions);
  if (!(0, _includesString.default)(str, ',')) return false;
  var pair = str.split(',');
  if (pair[0].startsWith('(') && !pair[1].endsWith(')') || pair[1].endsWith(')') && !pair[0].startsWith('(')) return false;
  if (options.checkDMS) {
    return latDMS.test(pair[0]) && longDMS.test(pair[1]);
  }
  return lat.test(pair[0]) && long.test(pair[1]);
}
module.exports = exports.default;
module.exports.default = exports.default;