import { ISetValueAutomationEvent } from '../interfaces';
import { TAutomationEvent } from '../types';

export const isSetValueAutomationEvent = (automationEvent: TAutomationEvent): automationEvent is ISetValueAutomationEvent => {
    return automationEvent.type === 'setValue';
};
