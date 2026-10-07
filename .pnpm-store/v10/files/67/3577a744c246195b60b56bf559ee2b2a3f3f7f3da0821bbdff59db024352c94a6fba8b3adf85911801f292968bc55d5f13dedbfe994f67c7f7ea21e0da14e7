"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTargetValueAtTime = void 0;
const getTargetValueAtTime = (time, valueAtStartTime, {
  startTime,
  target,
  timeConstant
}) => {
  return target + (valueAtStartTime - target) * Math.exp((startTime - time) / timeConstant);
};
exports.getTargetValueAtTime = getTargetValueAtTime;