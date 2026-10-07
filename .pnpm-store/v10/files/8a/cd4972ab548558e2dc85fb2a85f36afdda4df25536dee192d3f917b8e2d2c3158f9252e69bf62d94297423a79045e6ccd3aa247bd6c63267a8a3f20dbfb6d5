import { ICancelAndHoldAutomationEvent } from '../interfaces';
import { TAutomationEvent } from '../types';

export const isCancelAndHoldAutomationEvent = (automationEvent: TAutomationEvent): automationEvent is ICancelAndHoldAutomationEvent => {
    return automationEvent.type === 'cancelAndHold';
};
