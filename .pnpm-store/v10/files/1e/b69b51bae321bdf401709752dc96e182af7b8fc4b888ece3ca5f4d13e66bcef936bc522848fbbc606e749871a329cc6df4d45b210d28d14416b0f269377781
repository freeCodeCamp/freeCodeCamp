"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setUTCWeek;
var _index = _interopRequireDefault(require("../toInteger/index.js"));
var _index2 = _interopRequireDefault(require("../../toDate/index.js"));
var _index3 = _interopRequireDefault(require("../getUTCWeek/index.js"));
var _index4 = _interopRequireDefault(require("../requiredArgs/index.js"));
function setUTCWeek(dirtyDate, dirtyWeek, options) {
  (0, _index4.default)(2, arguments);
  var date = (0, _index2.default)(dirtyDate);
  var week = (0, _index.default)(dirtyWeek);
  var diff = (0, _index3.default)(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}
module.exports = exports.default;