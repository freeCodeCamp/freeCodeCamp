import { ISetValueCurveAutomationEvent } from '../interfaces';
import { interpolateValue } from './interpolate-value';

export const getValueCurveValueAtTime = (time: number, { duration, startTime, values }: ISetValueCurveAutomationEvent): number => {
    const theoreticIndex = ((time - startTime) / duration) * (values.length - 1);

    return interpolateValue(values, theoreticIndex);
};
