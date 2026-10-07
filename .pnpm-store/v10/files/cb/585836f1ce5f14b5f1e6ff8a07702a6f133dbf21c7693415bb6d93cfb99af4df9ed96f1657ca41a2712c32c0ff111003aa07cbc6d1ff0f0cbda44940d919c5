import { ILinearRampToValueAutomationEvent } from '../interfaces';

export const getLinearRampValueAtTime = (
    time: number,
    startTime: number,
    valueAtStartTime: number,
    { endTime, value }: ILinearRampToValueAutomationEvent
) => {
    return valueAtStartTime + ((time - startTime) / (endTime - startTime)) * (value - valueAtStartTime);
};
