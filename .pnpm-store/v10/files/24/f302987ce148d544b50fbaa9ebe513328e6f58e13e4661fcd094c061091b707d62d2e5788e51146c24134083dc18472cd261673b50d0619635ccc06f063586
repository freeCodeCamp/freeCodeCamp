import { createExtendedExponentialRampToValueAutomationEvent } from '../functions/create-extended-exponential-ramp-to-value-automation-event';
import { createExtendedLinearRampToValueAutomationEvent } from '../functions/create-extended-linear-ramp-to-value-automation-event';
import { createSetValueAutomationEvent } from '../functions/create-set-value-automation-event';
import { createSetValueCurveAutomationEvent } from '../functions/create-set-value-curve-automation-event';
import { getEndTimeAndValueOfPreviousAutomationEvent } from '../functions/get-end-time-and-value-of-previous-automation-event';
import { getEventTime } from '../functions/get-event-time';
import { getExponentialRampValueAtTime } from '../functions/get-exponential-ramp-value-at-time';
import { getLinearRampValueAtTime } from '../functions/get-linear-ramp-value-at-time';
import { getTargetValueAtTime } from '../functions/get-target-value-at-time';
import { getValueCurveValueAtTime } from '../functions/get-value-curve-value-at-time';
import { getValueOfAutomationEventAtIndexAtTime } from '../functions/get-value-of-automation-event-at-index-at-time';
import { truncateValueCurve } from '../functions/truncate-value-curve';
import { isAnyRampToValueAutomationEvent } from '../guards/any-ramp-to-value-automation-event';
import { isCancelAndHoldAutomationEvent } from '../guards/cancel-and-hold-automation-event';
import { isCancelScheduledValuesAutomationEvent } from '../guards/cancel-scheduled-values-automation-event';
import { isExponentialRampToValueAutomationEvent } from '../guards/exponential-ramp-to-value-automation-event';
import { isLinearRampToValueAutomationEvent } from '../guards/linear-ramp-to-value-automation-event';
import { isSetTargetAutomationEvent } from '../guards/set-target-automation-event';
import { isSetValueAutomationEvent } from '../guards/set-value-automation-event';
import { isSetValueCurveAutomationEvent } from '../guards/set-value-curve-automation-event';
export class AutomationEventList {
    constructor(defaultValue) {
        this._automationEvents = [];
        this._currenTime = 0;
        this._defaultValue = defaultValue;
    }
    [Symbol.iterator]() {
        return this._automationEvents[Symbol.iterator]();
    }
    add(automationEvent) {
        const eventTime = getEventTime(automationEvent);
        if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
            const index = this._automationEvents.findIndex((currentAutomationEvent) => {
                if (isCancelScheduledValuesAutomationEvent(automationEvent) && isSetValueCurveAutomationEvent(currentAutomationEvent)) {
                    return currentAutomationEvent.startTime + currentAutomationEvent.duration >= eventTime;
                }
                return getEventTime(currentAutomationEvent) >= eventTime;
            });
            const removedAutomationEvent = this._automationEvents[index];
            if (index !== -1) {
                this._automationEvents = this._automationEvents.slice(0, index);
            }
            if (isCancelAndHoldAutomationEvent(automationEvent)) {
                const lastAutomationEvent = this._automationEvents[this._automationEvents.length - 1];
                if (removedAutomationEvent !== undefined && isAnyRampToValueAutomationEvent(removedAutomationEvent)) {
                    if (lastAutomationEvent !== undefined && isSetTargetAutomationEvent(lastAutomationEvent)) {
                        throw new Error('The internal list is malformed.');
                    }
                    const startTime = lastAutomationEvent === undefined
                        ? removedAutomationEvent.insertTime
                        : isSetValueCurveAutomationEvent(lastAutomationEvent)
                            ? lastAutomationEvent.startTime + lastAutomationEvent.duration
                            : getEventTime(lastAutomationEvent);
                    const startValue = lastAutomationEvent === undefined
                        ? this._defaultValue
                        : isSetValueCurveAutomationEvent(lastAutomationEvent)
                            ? lastAutomationEvent.values[lastAutomationEvent.values.length - 1]
                            : lastAutomationEvent.value;
                    const value = isExponentialRampToValueAutomationEvent(removedAutomationEvent)
                        ? getExponentialRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent)
                        : getLinearRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent);
                    const truncatedAutomationEvent = isExponentialRampToValueAutomationEvent(removedAutomationEvent)
                        ? createExtendedExponentialRampToValueAutomationEvent(value, eventTime, this._currenTime)
                        : createExtendedLinearRampToValueAutomationEvent(value, eventTime, this._currenTime);
                    this._automationEvents.push(truncatedAutomationEvent);
                }
                if (lastAutomationEvent !== undefined && isSetTargetAutomationEvent(lastAutomationEvent)) {
                    this._automationEvents.push(createSetValueAutomationEvent(this.getValue(eventTime), eventTime));
                }
                if (lastAutomationEvent !== undefined &&
                    isSetValueCurveAutomationEvent(lastAutomationEvent) &&
                    lastAutomationEvent.startTime + lastAutomationEvent.duration > eventTime) {
                    const duration = eventTime - lastAutomationEvent.startTime;
                    this._automationEvents[this._automationEvents.length - 1] = createSetValueCurveAutomationEvent(truncateValueCurve(lastAutomationEvent.values, lastAutomationEvent.duration, duration), lastAutomationEvent.startTime, duration);
                }
            }
        }
        else {
            const index = this._automationEvents.findIndex((currentAutomationEvent) => getEventTime(currentAutomationEvent) > eventTime);
            const previousAutomationEvent = index === -1 ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[index - 1];
            if (previousAutomationEvent !== undefined &&
                isSetValueCurveAutomationEvent(previousAutomationEvent) &&
                getEventTime(previousAutomationEvent) + previousAutomationEvent.duration > eventTime) {
                return false;
            }
            const persistentAutomationEvent = isExponentialRampToValueAutomationEvent(automationEvent)
                ? createExtendedExponentialRampToValueAutomationEvent(automationEvent.value, automationEvent.endTime, this._currenTime)
                : isLinearRampToValueAutomationEvent(automationEvent)
                    ? createExtendedLinearRampToValueAutomationEvent(automationEvent.value, eventTime, this._currenTime)
                    : automationEvent;
            if (index === -1) {
                this._automationEvents.push(persistentAutomationEvent);
            }
            else {
                if (isSetValueCurveAutomationEvent(automationEvent) &&
                    eventTime + automationEvent.duration > getEventTime(this._automationEvents[index])) {
                    return false;
                }
                this._automationEvents.splice(index, 0, persistentAutomationEvent);
            }
        }
        return true;
    }
    flush(time) {
        const index = this._automationEvents.findIndex((currentAutomationEvent) => getEventTime(currentAutomationEvent) > time);
        if (index > 1) {
            const remainingAutomationEvents = this._automationEvents.slice(index - 1);
            const firstRemainingAutomationEvent = remainingAutomationEvents[0];
            if (isSetTargetAutomationEvent(firstRemainingAutomationEvent)) {
                remainingAutomationEvents.unshift(createSetValueAutomationEvent(getValueOfAutomationEventAtIndexAtTime(this._automationEvents, index - 2, firstRemainingAutomationEvent.startTime, this._defaultValue), firstRemainingAutomationEvent.startTime));
            }
            this._automationEvents = remainingAutomationEvents;
        }
    }
    getValue(time) {
        if (this._automationEvents.length === 0) {
            return this._defaultValue;
        }
        const indexOfNextEvent = this._automationEvents.findIndex((automationEvent) => getEventTime(automationEvent) > time);
        const nextAutomationEvent = this._automationEvents[indexOfNextEvent];
        const indexOfCurrentEvent = (indexOfNextEvent === -1 ? this._automationEvents.length : indexOfNextEvent) - 1;
        const currentAutomationEvent = this._automationEvents[indexOfCurrentEvent];
        if (currentAutomationEvent !== undefined &&
            isSetTargetAutomationEvent(currentAutomationEvent) &&
            (nextAutomationEvent === undefined ||
                !isAnyRampToValueAutomationEvent(nextAutomationEvent) ||
                nextAutomationEvent.insertTime > time)) {
            return getTargetValueAtTime(time, getValueOfAutomationEventAtIndexAtTime(this._automationEvents, indexOfCurrentEvent - 1, currentAutomationEvent.startTime, this._defaultValue), currentAutomationEvent);
        }
        if (currentAutomationEvent !== undefined &&
            isSetValueAutomationEvent(currentAutomationEvent) &&
            (nextAutomationEvent === undefined || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
            return currentAutomationEvent.value;
        }
        if (currentAutomationEvent !== undefined &&
            isSetValueCurveAutomationEvent(currentAutomationEvent) &&
            (nextAutomationEvent === undefined ||
                !isAnyRampToValueAutomationEvent(nextAutomationEvent) ||
                currentAutomationEvent.startTime + currentAutomationEvent.duration > time)) {
            if (time < currentAutomationEvent.startTime + currentAutomationEvent.duration) {
                return getValueCurveValueAtTime(time, currentAutomationEvent);
            }
            return currentAutomationEvent.values[currentAutomationEvent.values.length - 1];
        }
        if (currentAutomationEvent !== undefined &&
            isAnyRampToValueAutomationEvent(currentAutomationEvent) &&
            (nextAutomationEvent === undefined || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
            return currentAutomationEvent.value;
        }
        if (nextAutomationEvent !== undefined && isExponentialRampToValueAutomationEvent(nextAutomationEvent)) {
            const [startTime, value] = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue);
            return getExponentialRampValueAtTime(time, startTime, value, nextAutomationEvent);
        }
        if (nextAutomationEvent !== undefined && isLinearRampToValueAutomationEvent(nextAutomationEvent)) {
            const [startTime, value] = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue);
            return getLinearRampValueAtTime(time, startTime, value, nextAutomationEvent);
        }
        return this._defaultValue;
    }
}
//# sourceMappingURL=automation-event-list.js.map