import { IExponentialRampToValueAutomationEvent } from '../interfaces';

export const getExponentialRampValueAtTime = (
    time: number,
    startTime: number,
    valueAtStartTime: number,
    { endTime, value }: IExponentialRampToValueAutomationEvent
) => {
    if (valueAtStartTime === value) {
        return value;
    }

    if ((0 < valueAtStartTime && 0 < value) || (valueAtStartTime < 0 && value < 0)) {
        return valueAtStartTime * (value / valueAtStartTime) ** ((time - startTime) / (endTime - startTime));
    }

    return time < endTime ? valueAtStartTime : value;
};
