"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExponentialRampValueAtTime = void 0;
const getExponentialRampValueAtTime = (time, startTime, valueAtStartTime, {
  endTime,
  value
}) => {
  if (valueAtStartTime === value) {
    return value;
  }
  if (0 < valueAtStartTime && 0 < value || valueAtStartTime < 0 && value < 0) {
    return valueAtStartTime * (value / valueAtStartTime) ** ((time - startTime) / (endTime - startTime));
  }
  return time < endTime ? valueAtStartTime : value;
};
exports.getExponentialRampValueAtTime = getExponentialRampValueAtTime;