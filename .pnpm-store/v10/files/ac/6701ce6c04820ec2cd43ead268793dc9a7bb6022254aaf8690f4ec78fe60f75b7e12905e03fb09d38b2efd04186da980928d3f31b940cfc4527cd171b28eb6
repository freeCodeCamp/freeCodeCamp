"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutomationEventList = void 0;
var _createExtendedExponentialRampToValueAutomationEvent = require("../functions/create-extended-exponential-ramp-to-value-automation-event");
var _createExtendedLinearRampToValueAutomationEvent = require("../functions/create-extended-linear-ramp-to-value-automation-event");
var _createSetValueAutomationEvent = require("../functions/create-set-value-automation-event");
var _createSetValueCurveAutomationEvent = require("../functions/create-set-value-curve-automation-event");
var _getEndTimeAndValueOfPreviousAutomationEvent = require("../functions/get-end-time-and-value-of-previous-automation-event");
var _getEventTime = require("../functions/get-event-time");
var _getExponentialRampValueAtTime = require("../functions/get-exponential-ramp-value-at-time");
var _getLinearRampValueAtTime = require("../functions/get-linear-ramp-value-at-time");
var _getTargetValueAtTime = require("../functions/get-target-value-at-time");
var _getValueCurveValueAtTime = require("../functions/get-value-curve-value-at-time");
var _getValueOfAutomationEventAtIndexAtTime = require("../functions/get-value-of-automation-event-at-index-at-time");
var _truncateValueCurve = require("../functions/truncate-value-curve");
var _anyRampToValueAutomationEvent = require("../guards/any-ramp-to-value-automation-event");
var _cancelAndHoldAutomationEvent = require("../guards/cancel-and-hold-automation-event");
var _cancelScheduledValuesAutomationEvent = require("../guards/cancel-scheduled-values-automation-event");
var _exponentialRampToValueAutomationEvent = require("../guards/exponential-ramp-to-value-automation-event");
var _linearRampToValueAutomationEvent = require("../guards/linear-ramp-to-value-automation-event");
var _setTargetAutomationEvent = require("../guards/set-target-automation-event");
var _setValueAutomationEvent = require("../guards/set-value-automation-event");
var _setValueCurveAutomationEvent = require("../guards/set-value-curve-automation-event");
class AutomationEventList {
  constructor(defaultValue) {
    this._automationEvents = [];
    this._currenTime = 0;
    this._defaultValue = defaultValue;
  }
  [Symbol.iterator]() {
    return this._automationEvents[Symbol.iterator]();
  }
  add(automationEvent) {
    const eventTime = (0, _getEventTime.getEventTime)(automationEvent);
    if ((0, _cancelAndHoldAutomationEvent.isCancelAndHoldAutomationEvent)(automationEvent) || (0, _cancelScheduledValuesAutomationEvent.isCancelScheduledValuesAutomationEvent)(automationEvent)) {
      const index = this._automationEvents.findIndex(currentAutomationEvent => {
        if ((0, _cancelScheduledValuesAutomationEvent.isCancelScheduledValuesAutomationEvent)(automationEvent) && (0, _setValueCurveAutomationEvent.isSetValueCurveAutomationEvent)(currentAutomationEvent)) {
          return currentAutomationEvent.startTime + currentAutomationEvent.duration >= eventTime;
        }
        return (0, _getEventTime.getEventTime)(currentAutomationEvent) >= eventTime;
      });
      const removedAutomationEvent = this._automationEvents[index];
      if (index !== -1) {
        this._automationEvents = this._automationEvents.slice(0, index);
      }
      if ((0, _cancelAndHoldAutomationEvent.isCancelAndHoldAutomationEvent)(automationEvent)) {
        const lastAutomationEvent = this._automationEvents[this._automationEvents.length - 1];
        if (removedAutomationEvent !== undefined && (0, _anyRampToValueAutomationEvent.isAnyRampToValueAutomationEvent)(removedAutomationEvent)) {
          if (lastAutomationEvent !== undefined && (0, _setTargetAutomationEvent.isSetTargetAutomationEvent)(lastAutomationEvent)) {
            throw new Error('The internal list is malformed.');
          }
          const startTime = lastAutomationEvent === undefined ? removedAutomationEvent.insertTime : (0, _setValueCurveAutomationEvent.isSetValueCurveAutomationEvent)(lastAutomationEvent) ? lastAutomationEvent.startTime + lastAutomationEvent.duration : (0, _getEventTime.getEventTime)(lastAutomationEvent);
          const startValue = lastAutomationEvent === undefined ? this._defaultValue : (0, _setValueCurveAutomationEvent.isSetValueCurveAutomationEvent)(lastAutomationEvent) ? lastAutomationEvent.values[lastAutomationEvent.values.length - 1] : lastAutomationEvent.value;
          const value = (0, _exponentialRampToValueAutomationEvent.isExponentialRampToValueAutomationEvent)(removedAutomationEvent) ? (0, _getExponentialRampValueAtTime.getExponentialRampValueAtTime)(eventTime, startTime, startValue, removedAutomationEvent) : (0, _getLinearRampValueAtTime.getLinearRampValueAtTime)(eventTime, startTime, startValue, removedAutomationEvent);
          const truncatedAutomationEvent = (0, _exponentialRampToValueAutomationEvent.isExponentialRampToValueAutomationEvent)(removedAutomationEvent) ? (0, _createExtendedExponentialRampToValueAutomationEvent.createExtendedExponentialRampToValueAutomationEvent)(value, eventTime, this._currenTime) : (0, _createExtendedLinearRampToValueAutomationEvent.createExtendedLinearRampToValueAutomationEvent)(value, eventTime, this._currenTime);
          this._automationEvents.push(truncatedAutomationEvent);
        }
        if (lastAutomationEvent !== undefined && (0, _setTargetAutomationEvent.isSetTargetAutomationEvent)(lastAutomationEvent)) {
          this._automationEvents.push((0, _createSetValueAutomationEvent.createSetValueAutomationEvent)(this.getValue(eventTime), eventTime));
        }
        if (lastAutomationEvent !== undefined && (0, _setValueCurveAutomationEvent.isSetValueCurveAutomationEvent)(lastAutomationEvent) && lastAutomationEvent.startTime + lastAutomationEvent.duration > eventTime) {
          const duration = eventTime - lastAutomationEvent.startTime;
          this._automationEvents[this._automationEvents.length - 1] = (0, _createSetValueCurveAutomationEvent.createSetValueCurveAutomationEvent)((0, _truncateValueCurve.truncateValueCurve)(lastAutomationEvent.values, lastAutomationEvent.duration, duration), lastAutomationEvent.startTime, duration);
        }
      }
    } else {
      const index = this._automationEvents.findIndex(currentAutomationEvent => (0, _getEventTime.getEventTime)(currentAutomationEvent) > eventTime);
      const previousAutomationEvent = index === -1 ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[index - 1];
      if (previousAutomationEvent !== undefined && (0, _setValueCurveAutomationEvent.isSetValueCurveAutomationEvent)(previousAutomationEvent) && (0, _getEventTime.getEventTime)(previousAutomationEvent) + previousAutomationEvent.duration > eventTime) {
        return false;
      }
      const persistentAutomationEvent = (0, _exponentialRampToValueAutomationEvent.isExponentialRampToValueAutomationEvent)(automationEvent) ? (0, _createExtendedExponentialRampToValueAutomationEvent.createExtendedExponentialRampToValueAutomationEvent)(automationEvent.value, automationEvent.endTime, this._currenTime) : (0, _linearRampToValueAutomationEvent.isLinearRampToValueAutomationEvent)(automationEvent) ? (0, _createExtendedLinearRampToValueAutomationEvent.createExtendedLinearRampToValueAutomationEvent)(automationEvent.value, eventTime, this._currenTime) : automationEvent;
      if (index === -1) {
        this._automationEvents.push(persistentAutomationEvent);
      } else {
        if ((0, _setValueCurveAutomationEvent.isSetValueCurveAutomationEvent)(automationEvent) && eventTime + automationEvent.duration > (0, _getEventTime.getEventTime)(this._automationEvents[index])) {
          return false;
        }
        this._automationEvents.splice(index, 0, persistentAutomationEvent);
      }
    }
    return true;
  }
  flush(time) {
    const index = this._automationEvents.findIndex(currentAutomationEvent => (0, _getEventTime.getEventTime)(currentAutomationEvent) > time);
    if (index > 1) {
      const remainingAutomationEvents = this._automationEvents.slice(index - 1);
      const firstRemainingAutomationEvent = remainingAutomationEvents[0];
      if ((0, _setTargetAutomationEvent.isSetTargetAutomationEvent)(firstRemainingAutomationEvent)) {
        remainingAutomationEvents.unshift((0, _createSetValueAutomationEvent.createSetValueAutomationEvent)((0, _getValueOfAutomationEventAtIndexAtTime.getValueOfAutomationEventAtIndexAtTime)(this._automationEvents, index - 2, firstRemainingAutomationEvent.startTime, this._defaultValue), firstRemainingAutomationEvent.startTime));
      }
      this._automationEvents = remainingAutomationEvents;
    }
  }
  getValue(time) {
    if (this._automationEvents.length === 0) {
      return this._defaultValue;
    }
    const indexOfNextEvent = this._automationEvents.findIndex(automationEvent => (0, _getEventTime.getEventTime)(automationEvent) > time);
    const nextAutomationEvent = this._automationEvents[indexOfNextEvent];
    const indexOfCurrentEvent = (indexOfNextEvent === -1 ? this._automationEvents.length : indexOfNextEvent) - 1;
    const currentAutomationEvent = this._automationEvents[indexOfCurrentEvent];
    if (currentAutomationEvent !== undefined && (0, _setTargetAutomationEvent.isSetTargetAutomationEvent)(currentAutomationEvent) && (nextAutomationEvent === undefined || !(0, _anyRampToValueAutomationEvent.isAnyRampToValueAutomationEvent)(nextAutomationEvent) || nextAutomationEvent.insertTime > time)) {
      return (0, _getTargetValueAtTime.getTargetValueAtTime)(time, (0, _getValueOfAutomationEventAtIndexAtTime.getValueOfAutomationEventAtIndexAtTime)(this._automationEvents, indexOfCurrentEvent - 1, currentAutomationEvent.startTime, this._defaultValue), currentAutomationEvent);
    }
    if (currentAutomationEvent !== undefined && (0, _setValueAutomationEvent.isSetValueAutomationEvent)(currentAutomationEvent) && (nextAutomationEvent === undefined || !(0, _anyRampToValueAutomationEvent.isAnyRampToValueAutomationEvent)(nextAutomationEvent))) {
      return currentAutomationEvent.value;
    }
    if (currentAutomationEvent !== undefined && (0, _setValueCurveAutomationEvent.isSetValueCurveAutomationEvent)(currentAutomationEvent) && (nextAutomationEvent === undefined || !(0, _anyRampToValueAutomationEvent.isAnyRampToValueAutomationEvent)(nextAutomationEvent) || currentAutomationEvent.startTime + currentAutomationEvent.duration > time)) {
      if (time < currentAutomationEvent.startTime + currentAutomationEvent.duration) {
        return (0, _getValueCurveValueAtTime.getValueCurveValueAtTime)(time, currentAutomationEvent);
      }
      return currentAutomationEvent.values[currentAutomationEvent.values.length - 1];
    }
    if (currentAutomationEvent !== undefined && (0, _anyRampToValueAutomationEvent.isAnyRampToValueAutomationEvent)(currentAutomationEvent) && (nextAutomationEvent === undefined || !(0, _anyRampToValueAutomationEvent.isAnyRampToValueAutomationEvent)(nextAutomationEvent))) {
      return currentAutomationEvent.value;
    }
    if (nextAutomationEvent !== undefined && (0, _exponentialRampToValueAutomationEvent.isExponentialRampToValueAutomationEvent)(nextAutomationEvent)) {
      const [startTime, value] = (0, _getEndTimeAndValueOfPreviousAutomationEvent.getEndTimeAndValueOfPreviousAutomationEvent)(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue);
      return (0, _getExponentialRampValueAtTime.getExponentialRampValueAtTime)(time, startTime, value, nextAutomationEvent);
    }
    if (nextAutomationEvent !== undefined && (0, _linearRampToValueAutomationEvent.isLinearRampToValueAutomationEvent)(nextAutomationEvent)) {
      const [startTime, value] = (0, _getEndTimeAndValueOfPreviousAutomationEvent.getEndTimeAndValueOfPreviousAutomationEvent)(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue);
      return (0, _getLinearRampValueAtTime.getLinearRampValueAtTime)(time, startTime, value, nextAutomationEvent);
    }
    return this._defaultValue;
  }
}
exports.AutomationEventList = AutomationEventList;