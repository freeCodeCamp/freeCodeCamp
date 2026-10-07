(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime/helpers/slicedToArray'), require('@babel/runtime/helpers/classCallCheck'), require('@babel/runtime/helpers/createClass')) :
    typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime/helpers/slicedToArray', '@babel/runtime/helpers/classCallCheck', '@babel/runtime/helpers/createClass'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.automationEvents = {}, global._slicedToArray, global._classCallCheck, global._createClass));
})(this, (function (exports, _slicedToArray, _classCallCheck, _createClass) { 'use strict';

    var createExtendedExponentialRampToValueAutomationEvent = function createExtendedExponentialRampToValueAutomationEvent(value, endTime, insertTime) {
      return {
        endTime: endTime,
        insertTime: insertTime,
        type: 'exponentialRampToValue',
        value: value
      };
    };

    var createExtendedLinearRampToValueAutomationEvent = function createExtendedLinearRampToValueAutomationEvent(value, endTime, insertTime) {
      return {
        endTime: endTime,
        insertTime: insertTime,
        type: 'linearRampToValue',
        value: value
      };
    };

    var createSetValueAutomationEvent = function createSetValueAutomationEvent(value, startTime) {
      return {
        startTime: startTime,
        type: 'setValue',
        value: value
      };
    };

    var createSetValueCurveAutomationEvent = function createSetValueCurveAutomationEvent(values, startTime, duration) {
      return {
        duration: duration,
        startTime: startTime,
        type: 'setValueCurve',
        values: values
      };
    };

    var getTargetValueAtTime = function getTargetValueAtTime(time, valueAtStartTime, _ref) {
      var startTime = _ref.startTime,
        target = _ref.target,
        timeConstant = _ref.timeConstant;
      return target + (valueAtStartTime - target) * Math.exp((startTime - time) / timeConstant);
    };

    var isExponentialRampToValueAutomationEvent = function isExponentialRampToValueAutomationEvent(automationEvent) {
      return automationEvent.type === 'exponentialRampToValue';
    };

    var isLinearRampToValueAutomationEvent = function isLinearRampToValueAutomationEvent(automationEvent) {
      return automationEvent.type === 'linearRampToValue';
    };

    var isAnyRampToValueAutomationEvent = function isAnyRampToValueAutomationEvent(automationEvent) {
      return isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent);
    };

    var isSetValueAutomationEvent = function isSetValueAutomationEvent(automationEvent) {
      return automationEvent.type === 'setValue';
    };

    var isSetValueCurveAutomationEvent = function isSetValueCurveAutomationEvent(automationEvent) {
      return automationEvent.type === 'setValueCurve';
    };

    var _getValueOfAutomationEventAtIndexAtTime = function getValueOfAutomationEventAtIndexAtTime(automationEvents, index, time, defaultValue) {
      var automationEvent = automationEvents[index];
      return automationEvent === undefined ? defaultValue : isAnyRampToValueAutomationEvent(automationEvent) || isSetValueAutomationEvent(automationEvent) ? automationEvent.value : isSetValueCurveAutomationEvent(automationEvent) ? automationEvent.values[automationEvent.values.length - 1] : getTargetValueAtTime(time, _getValueOfAutomationEventAtIndexAtTime(automationEvents, index - 1, automationEvent.startTime, defaultValue), automationEvent);
    };

    var getEndTimeAndValueOfPreviousAutomationEvent = function getEndTimeAndValueOfPreviousAutomationEvent(automationEvents, index, currentAutomationEvent, nextAutomationEvent, defaultValue) {
      return currentAutomationEvent === undefined ? [nextAutomationEvent.insertTime, defaultValue] : isAnyRampToValueAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.endTime, currentAutomationEvent.value] : isSetValueAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.startTime, currentAutomationEvent.value] : isSetValueCurveAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.startTime + currentAutomationEvent.duration, currentAutomationEvent.values[currentAutomationEvent.values.length - 1]] : [currentAutomationEvent.startTime, _getValueOfAutomationEventAtIndexAtTime(automationEvents, index - 1, currentAutomationEvent.startTime, defaultValue)];
    };

    var isCancelAndHoldAutomationEvent = function isCancelAndHoldAutomationEvent(automationEvent) {
      return automationEvent.type === 'cancelAndHold';
    };

    var isCancelScheduledValuesAutomationEvent = function isCancelScheduledValuesAutomationEvent(automationEvent) {
      return automationEvent.type === 'cancelScheduledValues';
    };

    var getEventTime = function getEventTime(automationEvent) {
      if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
        return automationEvent.cancelTime;
      }
      if (isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent)) {
        return automationEvent.endTime;
      }
      return automationEvent.startTime;
    };

    var getExponentialRampValueAtTime = function getExponentialRampValueAtTime(time, startTime, valueAtStartTime, _ref) {
      var endTime = _ref.endTime,
        value = _ref.value;
      if (valueAtStartTime === value) {
        return value;
      }
      if (0 < valueAtStartTime && 0 < value || valueAtStartTime < 0 && value < 0) {
        return valueAtStartTime * Math.pow(value / valueAtStartTime, (time - startTime) / (endTime - startTime));
      }
      return time < endTime ? valueAtStartTime : value;
    };

    var getLinearRampValueAtTime = function getLinearRampValueAtTime(time, startTime, valueAtStartTime, _ref) {
      var endTime = _ref.endTime,
        value = _ref.value;
      return valueAtStartTime + (time - startTime) / (endTime - startTime) * (value - valueAtStartTime);
    };

    var interpolateValue = function interpolateValue(values, theoreticIndex) {
      var lowerIndex = Math.floor(theoreticIndex);
      if (lowerIndex === theoreticIndex) {
        return values[lowerIndex];
      }
      var upperIndex = Math.ceil(theoreticIndex);
      return (1 - (theoreticIndex - lowerIndex)) * values[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * values[upperIndex];
    };

    var getValueCurveValueAtTime = function getValueCurveValueAtTime(time, _ref) {
      var duration = _ref.duration,
        startTime = _ref.startTime,
        values = _ref.values;
      var theoreticIndex = (time - startTime) / duration * (values.length - 1);
      return interpolateValue(values, theoreticIndex);
    };

    var truncateValueCurve = function truncateValueCurve(values, originalDuration, targetDuration) {
      var length = values.length;
      var truncatedLength = Math.max(1, Math.floor(targetDuration / originalDuration * length)) + 1;
      var truncatedValues = values instanceof Float32Array ? new Float32Array(truncatedLength) : values.slice(0, truncatedLength);
      for (var i = 0; i < truncatedLength; i += 1) {
        var time = i / (truncatedLength - 1) * targetDuration;
        var theoreticIndex = time / originalDuration * (length - 1);
        truncatedValues[i] = interpolateValue(values, theoreticIndex);
      }
      return truncatedValues;
    };

    var isSetTargetAutomationEvent = function isSetTargetAutomationEvent(automationEvent) {
      return automationEvent.type === 'setTarget';
    };

    var AutomationEventList = /*#__PURE__*/function () {
      function AutomationEventList(defaultValue) {
        _classCallCheck(this, AutomationEventList);
        this._automationEvents = [];
        this._currenTime = 0;
        this._defaultValue = defaultValue;
      }
      return _createClass(AutomationEventList, [{
        key: Symbol.iterator,
        value: function value() {
          return this._automationEvents[Symbol.iterator]();
        }
      }, {
        key: "add",
        value: function add(automationEvent) {
          var eventTime = getEventTime(automationEvent);
          if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
            var index = this._automationEvents.findIndex(function (currentAutomationEvent) {
              if (isCancelScheduledValuesAutomationEvent(automationEvent) && isSetValueCurveAutomationEvent(currentAutomationEvent)) {
                return currentAutomationEvent.startTime + currentAutomationEvent.duration >= eventTime;
              }
              return getEventTime(currentAutomationEvent) >= eventTime;
            });
            var removedAutomationEvent = this._automationEvents[index];
            if (index !== -1) {
              this._automationEvents = this._automationEvents.slice(0, index);
            }
            if (isCancelAndHoldAutomationEvent(automationEvent)) {
              var lastAutomationEvent = this._automationEvents[this._automationEvents.length - 1];
              if (removedAutomationEvent !== undefined && isAnyRampToValueAutomationEvent(removedAutomationEvent)) {
                if (lastAutomationEvent !== undefined && isSetTargetAutomationEvent(lastAutomationEvent)) {
                  throw new Error('The internal list is malformed.');
                }
                var startTime = lastAutomationEvent === undefined ? removedAutomationEvent.insertTime : isSetValueCurveAutomationEvent(lastAutomationEvent) ? lastAutomationEvent.startTime + lastAutomationEvent.duration : getEventTime(lastAutomationEvent);
                var startValue = lastAutomationEvent === undefined ? this._defaultValue : isSetValueCurveAutomationEvent(lastAutomationEvent) ? lastAutomationEvent.values[lastAutomationEvent.values.length - 1] : lastAutomationEvent.value;
                var value = isExponentialRampToValueAutomationEvent(removedAutomationEvent) ? getExponentialRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent) : getLinearRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent);
                var truncatedAutomationEvent = isExponentialRampToValueAutomationEvent(removedAutomationEvent) ? createExtendedExponentialRampToValueAutomationEvent(value, eventTime, this._currenTime) : createExtendedLinearRampToValueAutomationEvent(value, eventTime, this._currenTime);
                this._automationEvents.push(truncatedAutomationEvent);
              }
              if (lastAutomationEvent !== undefined && isSetTargetAutomationEvent(lastAutomationEvent)) {
                this._automationEvents.push(createSetValueAutomationEvent(this.getValue(eventTime), eventTime));
              }
              if (lastAutomationEvent !== undefined && isSetValueCurveAutomationEvent(lastAutomationEvent) && lastAutomationEvent.startTime + lastAutomationEvent.duration > eventTime) {
                var duration = eventTime - lastAutomationEvent.startTime;
                this._automationEvents[this._automationEvents.length - 1] = createSetValueCurveAutomationEvent(truncateValueCurve(lastAutomationEvent.values, lastAutomationEvent.duration, duration), lastAutomationEvent.startTime, duration);
              }
            }
          } else {
            var _index = this._automationEvents.findIndex(function (currentAutomationEvent) {
              return getEventTime(currentAutomationEvent) > eventTime;
            });
            var previousAutomationEvent = _index === -1 ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[_index - 1];
            if (previousAutomationEvent !== undefined && isSetValueCurveAutomationEvent(previousAutomationEvent) && getEventTime(previousAutomationEvent) + previousAutomationEvent.duration > eventTime) {
              return false;
            }
            var persistentAutomationEvent = isExponentialRampToValueAutomationEvent(automationEvent) ? createExtendedExponentialRampToValueAutomationEvent(automationEvent.value, automationEvent.endTime, this._currenTime) : isLinearRampToValueAutomationEvent(automationEvent) ? createExtendedLinearRampToValueAutomationEvent(automationEvent.value, eventTime, this._currenTime) : automationEvent;
            if (_index === -1) {
              this._automationEvents.push(persistentAutomationEvent);
            } else {
              if (isSetValueCurveAutomationEvent(automationEvent) && eventTime + automationEvent.duration > getEventTime(this._automationEvents[_index])) {
                return false;
              }
              this._automationEvents.splice(_index, 0, persistentAutomationEvent);
            }
          }
          return true;
        }
      }, {
        key: "flush",
        value: function flush(time) {
          var index = this._automationEvents.findIndex(function (currentAutomationEvent) {
            return getEventTime(currentAutomationEvent) > time;
          });
          if (index > 1) {
            var remainingAutomationEvents = this._automationEvents.slice(index - 1);
            var firstRemainingAutomationEvent = remainingAutomationEvents[0];
            if (isSetTargetAutomationEvent(firstRemainingAutomationEvent)) {
              remainingAutomationEvents.unshift(createSetValueAutomationEvent(_getValueOfAutomationEventAtIndexAtTime(this._automationEvents, index - 2, firstRemainingAutomationEvent.startTime, this._defaultValue), firstRemainingAutomationEvent.startTime));
            }
            this._automationEvents = remainingAutomationEvents;
          }
        }
      }, {
        key: "getValue",
        value: function getValue(time) {
          if (this._automationEvents.length === 0) {
            return this._defaultValue;
          }
          var indexOfNextEvent = this._automationEvents.findIndex(function (automationEvent) {
            return getEventTime(automationEvent) > time;
          });
          var nextAutomationEvent = this._automationEvents[indexOfNextEvent];
          var indexOfCurrentEvent = (indexOfNextEvent === -1 ? this._automationEvents.length : indexOfNextEvent) - 1;
          var currentAutomationEvent = this._automationEvents[indexOfCurrentEvent];
          if (currentAutomationEvent !== undefined && isSetTargetAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === undefined || !isAnyRampToValueAutomationEvent(nextAutomationEvent) || nextAutomationEvent.insertTime > time)) {
            return getTargetValueAtTime(time, _getValueOfAutomationEventAtIndexAtTime(this._automationEvents, indexOfCurrentEvent - 1, currentAutomationEvent.startTime, this._defaultValue), currentAutomationEvent);
          }
          if (currentAutomationEvent !== undefined && isSetValueAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === undefined || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
            return currentAutomationEvent.value;
          }
          if (currentAutomationEvent !== undefined && isSetValueCurveAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === undefined || !isAnyRampToValueAutomationEvent(nextAutomationEvent) || currentAutomationEvent.startTime + currentAutomationEvent.duration > time)) {
            if (time < currentAutomationEvent.startTime + currentAutomationEvent.duration) {
              return getValueCurveValueAtTime(time, currentAutomationEvent);
            }
            return currentAutomationEvent.values[currentAutomationEvent.values.length - 1];
          }
          if (currentAutomationEvent !== undefined && isAnyRampToValueAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === undefined || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
            return currentAutomationEvent.value;
          }
          if (nextAutomationEvent !== undefined && isExponentialRampToValueAutomationEvent(nextAutomationEvent)) {
            var _getEndTimeAndValueOf = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue),
              _getEndTimeAndValueOf2 = _slicedToArray(_getEndTimeAndValueOf, 2),
              startTime = _getEndTimeAndValueOf2[0],
              value = _getEndTimeAndValueOf2[1];
            return getExponentialRampValueAtTime(time, startTime, value, nextAutomationEvent);
          }
          if (nextAutomationEvent !== undefined && isLinearRampToValueAutomationEvent(nextAutomationEvent)) {
            var _getEndTimeAndValueOf3 = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue),
              _getEndTimeAndValueOf4 = _slicedToArray(_getEndTimeAndValueOf3, 2),
              _startTime = _getEndTimeAndValueOf4[0],
              _value = _getEndTimeAndValueOf4[1];
            return getLinearRampValueAtTime(time, _startTime, _value, nextAutomationEvent);
          }
          return this._defaultValue;
        }
      }]);
    }();

    var createCancelAndHoldAutomationEvent = function createCancelAndHoldAutomationEvent(cancelTime) {
      return {
        cancelTime: cancelTime,
        type: 'cancelAndHold'
      };
    };

    var createCancelScheduledValuesAutomationEvent = function createCancelScheduledValuesAutomationEvent(cancelTime) {
      return {
        cancelTime: cancelTime,
        type: 'cancelScheduledValues'
      };
    };

    var createExponentialRampToValueAutomationEvent = function createExponentialRampToValueAutomationEvent(value, endTime) {
      return {
        endTime: endTime,
        type: 'exponentialRampToValue',
        value: value
      };
    };

    var createLinearRampToValueAutomationEvent = function createLinearRampToValueAutomationEvent(value, endTime) {
      return {
        endTime: endTime,
        type: 'linearRampToValue',
        value: value
      };
    };

    var createSetTargetAutomationEvent = function createSetTargetAutomationEvent(target, startTime, timeConstant) {
      return {
        startTime: startTime,
        target: target,
        timeConstant: timeConstant,
        type: 'setTarget'
      };
    };

    exports.AutomationEventList = AutomationEventList;
    exports.createCancelAndHoldAutomationEvent = createCancelAndHoldAutomationEvent;
    exports.createCancelScheduledValuesAutomationEvent = createCancelScheduledValuesAutomationEvent;
    exports.createExponentialRampToValueAutomationEvent = createExponentialRampToValueAutomationEvent;
    exports.createLinearRampToValueAutomationEvent = createLinearRampToValueAutomationEvent;
    exports.createSetTargetAutomationEvent = createSetTargetAutomationEvent;
    exports.createSetValueAutomationEvent = createSetValueAutomationEvent;
    exports.createSetValueCurveAutomationEvent = createSetValueCurveAutomationEvent;

}));
