import { IExponentialRampToValueAutomationEvent, ILinearRampToValueAutomationEvent } from '../interfaces';
import { TAutomationEvent } from '../types';
import { isExponentialRampToValueAutomationEvent } from './exponential-ramp-to-value-automation-event';
import { isLinearRampToValueAutomationEvent } from './linear-ramp-to-value-automation-event';

export const isAnyRampToValueAutomationEvent = (
    automationEvent: TAutomationEvent
): automationEvent is IExponentialRampToValueAutomationEvent | ILinearRampToValueAutomationEvent => {
    return isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent);
};
