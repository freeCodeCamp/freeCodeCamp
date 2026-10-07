"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValueCurveValueAtTime = void 0;
var _interpolateValue = require("./interpolate-value");
const getValueCurveValueAtTime = (time, {
  duration,
  startTime,
  values
}) => {
  const theoreticIndex = (time - startTime) / duration * (values.length - 1);
  return (0, _interpolateValue.interpolateValue)(values, theoreticIndex);
};
exports.getValueCurveValueAtTime = getValueCurveValueAtTime;