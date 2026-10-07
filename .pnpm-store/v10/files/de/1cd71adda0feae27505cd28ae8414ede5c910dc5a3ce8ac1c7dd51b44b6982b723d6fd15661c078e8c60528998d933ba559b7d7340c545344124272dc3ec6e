"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAnyRampToValueAutomationEvent = void 0;
var _exponentialRampToValueAutomationEvent = require("./exponential-ramp-to-value-automation-event");
var _linearRampToValueAutomationEvent = require("./linear-ramp-to-value-automation-event");
const isAnyRampToValueAutomationEvent = automationEvent => {
  return (0, _exponentialRampToValueAutomationEvent.isExponentialRampToValueAutomationEvent)(automationEvent) || (0, _linearRampToValueAutomationEvent.isLinearRampToValueAutomationEvent)(automationEvent);
};
exports.isAnyRampToValueAutomationEvent = isAnyRampToValueAutomationEvent;