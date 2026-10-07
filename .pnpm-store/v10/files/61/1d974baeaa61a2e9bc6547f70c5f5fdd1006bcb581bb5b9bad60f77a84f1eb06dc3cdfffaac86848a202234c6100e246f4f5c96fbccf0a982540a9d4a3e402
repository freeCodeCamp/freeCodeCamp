import { getTargetValueAtTime } from '../functions/get-target-value-at-time';
import { isAnyRampToValueAutomationEvent } from '../guards/any-ramp-to-value-automation-event';
import { isSetValueAutomationEvent } from '../guards/set-value-automation-event';
import { isSetValueCurveAutomationEvent } from '../guards/set-value-curve-automation-event';
export const getValueOfAutomationEventAtIndexAtTime = (automationEvents, index, time, defaultValue) => {
    const automationEvent = automationEvents[index];
    return automationEvent === undefined
        ? defaultValue
        : isAnyRampToValueAutomationEvent(automationEvent) || isSetValueAutomationEvent(automationEvent)
            ? automationEvent.value
            : isSetValueCurveAutomationEvent(automationEvent)
                ? automationEvent.values[automationEvent.values.length - 1]
                : getTargetValueAtTime(time, getValueOfAutomationEventAtIndexAtTime(automationEvents, index - 1, automationEvent.startTime, defaultValue), automationEvent);
};
//# sourceMappingURL=get-value-of-automation-event-at-index-at-time.js.map