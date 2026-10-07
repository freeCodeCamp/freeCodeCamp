"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinearRampValueAtTime = void 0;
const getLinearRampValueAtTime = (time, startTime, valueAtStartTime, {
  endTime,
  value
}) => {
  return valueAtStartTime + (time - startTime) / (endTime - startTime) * (value - valueAtStartTime);
};
exports.getLinearRampValueAtTime = getLinearRampValueAtTime;