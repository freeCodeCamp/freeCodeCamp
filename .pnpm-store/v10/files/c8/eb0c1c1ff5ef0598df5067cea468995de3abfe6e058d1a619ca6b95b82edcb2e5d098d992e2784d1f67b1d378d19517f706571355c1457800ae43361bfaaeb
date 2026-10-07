"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValueOfAutomationEventAtIndexAtTime = void 0;
var _getTargetValueAtTime = require("../functions/get-target-value-at-time");
var _anyRampToValueAutomationEvent = require("../guards/any-ramp-to-value-automation-event");
var _setValueAutomationEvent = require("../guards/set-value-automation-event");
var _setValueCurveAutomationEvent = require("../guards/set-value-curve-automation-event");
const getValueOfAutomationEventAtIndexAtTime = (automationEvents, index, time, defaultValue) => {
  const automationEvent = automationEvents[index];
  return automationEvent === undefined ? defaultValue : (0, _anyRampToValueAutomationEvent.isAnyRampToValueAutomationEvent)(automationEvent) || (0, _setValueAutomationEvent.isSetValueAutomationEvent)(automationEvent) ? automationEvent.value : (0, _setValueCurveAutomationEvent.isSetValueCurveAutomationEvent)(automationEvent) ? automationEvent.values[automationEvent.values.length - 1] : (0, _getTargetValueAtTime.getTargetValueAtTime)(time, getValueOfAutomationEventAtIndexAtTime(automationEvents, index - 1, automationEvent.startTime, defaultValue), automationEvent);
};
exports.getValueOfAutomationEventAtIndexAtTime = getValueOfAutomationEventAtIndexAtTime;