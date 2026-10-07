import { TAudioParamRendererFactory, TNativeAudioParam } from '../types';

export const createAudioParamRenderer: TAudioParamRendererFactory = (automationEventList) => {
    return {
        replay(audioParam: TNativeAudioParam): void {
            for (const automationEvent of automationEventList) {
                if (automationEvent.type === 'exponentialRampToValue') {
                    const { endTime, value } = automationEvent;

                    audioParam.exponentialRampToValueAtTime(value, endTime);
                } else if (automationEvent.type === 'linearRampToValue') {
                    const { endTime, value } = automationEvent;

                    audioParam.linearRampToValueAtTime(value, endTime);
                } else if (automationEvent.type === 'setTarget') {
                    const { startTime, target, timeConstant } = automationEvent;

                    audioParam.setTargetAtTime(target, startTime, timeConstant);
                } else if (automationEvent.type === 'setValue') {
                    const { startTime, value } = automationEvent;

                    audioParam.setValueAtTime(value, startTime);
                } else if (automationEvent.type === 'setValueCurve') {
                    const { duration, startTime, values } = automationEvent;

                    audioParam.setValueCurveAtTime(values, startTime, duration);
                } else {
                    throw new Error("Can't apply an unknown automation.");
                }
            }
        }
    };
};
