import { ISetTargetAutomationEvent } from '../interfaces';

export const getTargetValueAtTime = (
    time: number,
    valueAtStartTime: number,
    { startTime, target, timeConstant }: ISetTargetAutomationEvent
): number => {
    return target + (valueAtStartTime - target) * Math.exp((startTime - time) / timeConstant);
};
