import { ILinearRampToValueAutomationEvent } from '../interfaces';
import { TAutomationEvent } from '../types';

export const isLinearRampToValueAutomationEvent = (
    automationEvent: TAutomationEvent
): automationEvent is ILinearRampToValueAutomationEvent => {
    return automationEvent.type === 'linearRampToValue';
};
