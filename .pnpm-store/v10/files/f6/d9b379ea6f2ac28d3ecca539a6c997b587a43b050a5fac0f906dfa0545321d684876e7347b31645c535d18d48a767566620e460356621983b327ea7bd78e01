"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEndTimeAndValueOfPreviousAutomationEvent = void 0;
var _getValueOfAutomationEventAtIndexAtTime = require("../functions/get-value-of-automation-event-at-index-at-time");
var _anyRampToValueAutomationEvent = require("../guards/any-ramp-to-value-automation-event");
var _setValueAutomationEvent = require("../guards/set-value-automation-event");
var _setValueCurveAutomationEvent = require("../guards/set-value-curve-automation-event");
const getEndTimeAndValueOfPreviousAutomationEvent = (automationEvents, index, currentAutomationEvent, nextAutomationEvent, defaultValue) => {
  return currentAutomationEvent === undefined ? [nextAutomationEvent.insertTime, defaultValue] : (0, _anyRampToValueAutomationEvent.isAnyRampToValueAutomationEvent)(currentAutomationEvent) ? [currentAutomationEvent.endTime, currentAutomationEvent.value] : (0, _setValueAutomationEvent.isSetValueAutomationEvent)(currentAutomationEvent) ? [currentAutomationEvent.startTime, currentAutomationEvent.value] : (0, _setValueCurveAutomationEvent.isSetValueCurveAutomationEvent)(currentAutomationEvent) ? [currentAutomationEvent.startTime + currentAutomationEvent.duration, currentAutomationEvent.values[currentAutomationEvent.values.length - 1]] : [currentAutomationEvent.startTime, (0, _getValueOfAutomationEventAtIndexAtTime.getValueOfAutomationEventAtIndexAtTime)(automationEvents, index - 1, currentAutomationEvent.startTime, defaultValue)];
};
exports.getEndTimeAndValueOfPreviousAutomationEvent = getEndTimeAndValueOfPreviousAutomationEvent;