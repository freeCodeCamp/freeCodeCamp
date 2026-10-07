"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setUTCISOWeek;
var _index = _interopRequireDefault(require("../toInteger/index.js"));
var _index2 = _interopRequireDefault(require("../../toDate/index.js"));
var _index3 = _interopRequireDefault(require("../getUTCISOWeek/index.js"));
var _index4 = _interopRequireDefault(require("../requiredArgs/index.js"));
function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  (0, _index4.default)(2, arguments);
  var date = (0, _index2.default)(dirtyDate);
  var isoWeek = (0, _index.default)(dirtyISOWeek);
  var diff = (0, _index3.default)(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}
module.exports = exports.default;