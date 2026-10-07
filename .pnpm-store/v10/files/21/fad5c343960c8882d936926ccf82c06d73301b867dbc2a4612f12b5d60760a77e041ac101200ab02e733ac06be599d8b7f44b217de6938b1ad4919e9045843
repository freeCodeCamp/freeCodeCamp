import { ISetValueCurveAutomationEvent } from '../interfaces';

export const createSetValueCurveAutomationEvent = (
    values: number[] | Float32Array,
    startTime: number,
    duration: number
): ISetValueCurveAutomationEvent => {
    return { duration, startTime, type: 'setValueCurve', values };
};
