import { isCancelAndHoldAutomationEvent } from '../guards/cancel-and-hold-automation-event';
import { isCancelScheduledValuesAutomationEvent } from '../guards/cancel-scheduled-values-automation-event';
import { isExponentialRampToValueAutomationEvent } from '../guards/exponential-ramp-to-value-automation-event';
import { isLinearRampToValueAutomationEvent } from '../guards/linear-ramp-to-value-automation-event';
import { TAutomationEvent } from '../types';

export const getEventTime = (automationEvent: TAutomationEvent): number => {
    if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
        return automationEvent.cancelTime;
    }

    if (isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent)) {
        return automationEvent.endTime;
    }

    return automationEvent.startTime;
};
