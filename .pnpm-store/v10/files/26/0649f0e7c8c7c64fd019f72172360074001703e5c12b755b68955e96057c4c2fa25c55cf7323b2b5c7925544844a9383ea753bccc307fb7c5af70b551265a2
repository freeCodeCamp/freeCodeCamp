import { IExponentialRampToValueAutomationEvent } from '../interfaces';
import { TAutomationEvent } from '../types';

export const isExponentialRampToValueAutomationEvent = (
    automationEvent: TAutomationEvent
): automationEvent is IExponentialRampToValueAutomationEvent => {
    return automationEvent.type === 'exponentialRampToValue';
};
