import { getValueOfAutomationEventAtIndexAtTime } from '../functions/get-value-of-automation-event-at-index-at-time';
import { isAnyRampToValueAutomationEvent } from '../guards/any-ramp-to-value-automation-event';
import { isSetValueAutomationEvent } from '../guards/set-value-automation-event';
import { isSetValueCurveAutomationEvent } from '../guards/set-value-curve-automation-event';
import { IExtendedExponentialRampToValueAutomationEvent, IExtendedLinearRampToValueAutomationEvent } from '../interfaces';
import { TPersistentAutomationEvent } from '../types';

export const getEndTimeAndValueOfPreviousAutomationEvent = (
    automationEvents: TPersistentAutomationEvent[],
    index: number,
    currentAutomationEvent: TPersistentAutomationEvent,
    nextAutomationEvent: IExtendedExponentialRampToValueAutomationEvent | IExtendedLinearRampToValueAutomationEvent,
    defaultValue: number
): [number, number] => {
    return currentAutomationEvent === undefined
        ? [nextAutomationEvent.insertTime, defaultValue]
        : isAnyRampToValueAutomationEvent(currentAutomationEvent)
        ? [currentAutomationEvent.endTime, currentAutomationEvent.value]
        : isSetValueAutomationEvent(currentAutomationEvent)
        ? [currentAutomationEvent.startTime, currentAutomationEvent.value]
        : isSetValueCurveAutomationEvent(currentAutomationEvent)
        ? [
              currentAutomationEvent.startTime + currentAutomationEvent.duration,
              currentAutomationEvent.values[currentAutomationEvent.values.length - 1]
          ]
        : [
              currentAutomationEvent.startTime,
              getValueOfAutomationEventAtIndexAtTime(automationEvents, index - 1, currentAutomationEvent.startTime, defaultValue)
          ];
};
