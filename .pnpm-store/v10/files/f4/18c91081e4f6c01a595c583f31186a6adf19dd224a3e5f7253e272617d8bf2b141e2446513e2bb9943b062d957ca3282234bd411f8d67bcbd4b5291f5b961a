"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventTime = void 0;
var _cancelAndHoldAutomationEvent = require("../guards/cancel-and-hold-automation-event");
var _cancelScheduledValuesAutomationEvent = require("../guards/cancel-scheduled-values-automation-event");
var _exponentialRampToValueAutomationEvent = require("../guards/exponential-ramp-to-value-automation-event");
var _linearRampToValueAutomationEvent = require("../guards/linear-ramp-to-value-automation-event");
const getEventTime = automationEvent => {
  if ((0, _cancelAndHoldAutomationEvent.isCancelAndHoldAutomationEvent)(automationEvent) || (0, _cancelScheduledValuesAutomationEvent.isCancelScheduledValuesAutomationEvent)(automationEvent)) {
    return automationEvent.cancelTime;
  }
  if ((0, _exponentialRampToValueAutomationEvent.isExponentialRampToValueAutomationEvent)(automationEvent) || (0, _linearRampToValueAutomationEvent.isLinearRampToValueAutomationEvent)(automationEvent)) {
    return automationEvent.endTime;
  }
  return automationEvent.startTime;
};
exports.getEventTime = getEventTime;