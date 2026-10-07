"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.calcElapsedTime = calcElapsedTime;
var _convertHrtime = _interopRequireDefault(require("convert-hrtime"));
function calcElapsedTime(startTime) {
  const elapsed = process.hrtime(startTime);
  return (0, _convertHrtime.default)(elapsed)[`seconds`].toFixed(3);
}