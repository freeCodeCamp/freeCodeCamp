import { AutomationEventList } from 'automation-events';
import { IAudioNode, IAudioParam, IAudioParamRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TAudioParamFactoryFactory, TContext, TNativeAudioParam } from '../types';

export const createAudioParamFactory: TAudioParamFactoryFactory = (
    addAudioParamConnections,
    audioParamAudioNodeStore,
    audioParamStore,
    createAudioParamRenderer,
    createCancelAndHoldAutomationEvent,
    createCancelScheduledValuesAutomationEvent,
    createExponentialRampToValueAutomationEvent,
    createLinearRampToValueAutomationEvent,
    createSetTargetAutomationEvent,
    createSetValueAutomationEvent,
    createSetValueCurveAutomationEvent,
    nativeAudioContextConstructor,
    setValueAtTimeUntilPossible
) => {
    return <T extends TContext>(
        audioNode: IAudioNode<T>,
        isAudioParamOfOfflineAudioContext: boolean,
        nativeAudioParam: TNativeAudioParam,
        maxValue: null | number = null,
        minValue: null | number = null
    ): IAudioParam => {
        // Bug #196 Only Safari sets the defaultValue to the initial value.
        const defaultValue = nativeAudioParam.value;
        const automationEventList = new AutomationEventList(defaultValue);
        const audioParamRenderer = isAudioParamOfOfflineAudioContext ? createAudioParamRenderer(automationEventList) : null;
        const audioParam = {
            get defaultValue(): number {
                return defaultValue;
            },
            get maxValue(): number {
                return maxValue === null ? nativeAudioParam.maxValue : maxValue;
            },
            get minValue(): number {
                return minValue === null ? nativeAudioParam.minValue : minValue;
            },
            get value(): number {
                return nativeAudioParam.value;
            },
            set value(value) {
                nativeAudioParam.value = value;

                // Bug #98: Firefox & Safari do not yet treat the value setter like a call to setValueAtTime().
                audioParam.setValueAtTime(value, audioNode.context.currentTime);
            },
            cancelAndHoldAtTime(cancelTime: number): IAudioParam {
                // Bug #28: Firefox & Safari do not yet implement cancelAndHoldAtTime().
                if (typeof nativeAudioParam.cancelAndHoldAtTime === 'function') {
                    if (audioParamRenderer === null) {
                        automationEventList.flush(audioNode.context.currentTime);
                    }

                    automationEventList.add(createCancelAndHoldAutomationEvent(cancelTime));
                    nativeAudioParam.cancelAndHoldAtTime(cancelTime);
                } else {
                    const previousLastEvent = Array.from(automationEventList).pop();

                    if (audioParamRenderer === null) {
                        automationEventList.flush(audioNode.context.currentTime);
                    }

                    automationEventList.add(createCancelAndHoldAutomationEvent(cancelTime));

                    const currentLastEvent = Array.from(automationEventList).pop();

                    nativeAudioParam.cancelScheduledValues(cancelTime);

                    if (previousLastEvent !== currentLastEvent && currentLastEvent !== undefined) {
                        if (currentLastEvent.type === 'exponentialRampToValue') {
                            nativeAudioParam.exponentialRampToValueAtTime(currentLastEvent.value, currentLastEvent.endTime);
                        } else if (currentLastEvent.type === 'linearRampToValue') {
                            nativeAudioParam.linearRampToValueAtTime(currentLastEvent.value, currentLastEvent.endTime);
                        } else if (currentLastEvent.type === 'setValue') {
                            nativeAudioParam.setValueAtTime(currentLastEvent.value, currentLastEvent.startTime);
                        } else if (currentLastEvent.type === 'setValueCurve') {
                            nativeAudioParam.setValueCurveAtTime(
                                currentLastEvent.values,
                                currentLastEvent.startTime,
                                currentLastEvent.duration
                            );
                        }
                    }
                }

                return audioParam;
            },
            cancelScheduledValues(cancelTime: number): IAudioParam {
                if (audioParamRenderer === null) {
                    automationEventList.flush(audioNode.context.currentTime);
                }

                automationEventList.add(createCancelScheduledValuesAutomationEvent(cancelTime));
                nativeAudioParam.cancelScheduledValues(cancelTime);

                return audioParam;
            },
            exponentialRampToValueAtTime(value: number, endTime: number): IAudioParam {
                // Bug #45: Safari does not throw an error yet.
                if (value === 0) {
                    throw new RangeError();
                }

                // Bug #187: Safari does not throw an error yet.
                if (!Number.isFinite(endTime) || endTime < 0) {
                    throw new RangeError();
                }

                const currentTime = audioNode.context.currentTime;

                if (audioParamRenderer === null) {
                    automationEventList.flush(currentTime);
                }

                // Bug #194: Firefox does not implicitly call setValueAtTime() if there is no previous event.
                if (Array.from(automationEventList).length === 0) {
                    automationEventList.add(createSetValueAutomationEvent(defaultValue, currentTime));
                    nativeAudioParam.setValueAtTime(defaultValue, currentTime);
                }

                automationEventList.add(createExponentialRampToValueAutomationEvent(value, endTime));
                nativeAudioParam.exponentialRampToValueAtTime(value, endTime);

                return audioParam;
            },
            linearRampToValueAtTime(value: number, endTime: number): IAudioParam {
                const currentTime = audioNode.context.currentTime;

                if (audioParamRenderer === null) {
                    automationEventList.flush(currentTime);
                }

                // Bug #195: Firefox does not implicitly call setValueAtTime() if there is no previous event.
                if (Array.from(automationEventList).length === 0) {
                    automationEventList.add(createSetValueAutomationEvent(defaultValue, currentTime));
                    nativeAudioParam.setValueAtTime(defaultValue, currentTime);
                }

                automationEventList.add(createLinearRampToValueAutomationEvent(value, endTime));
                nativeAudioParam.linearRampToValueAtTime(value, endTime);

                return audioParam;
            },
            setTargetAtTime(target: number, startTime: number, timeConstant: number): IAudioParam {
                if (audioParamRenderer === null) {
                    automationEventList.flush(audioNode.context.currentTime);
                }

                automationEventList.add(createSetTargetAutomationEvent(target, startTime, timeConstant));
                nativeAudioParam.setTargetAtTime(target, startTime, timeConstant);

                return audioParam;
            },
            setValueAtTime(value: number, startTime: number): IAudioParam {
                if (audioParamRenderer === null) {
                    automationEventList.flush(audioNode.context.currentTime);
                }

                automationEventList.add(createSetValueAutomationEvent(value, startTime));
                nativeAudioParam.setValueAtTime(value, startTime);

                return audioParam;
            },
            setValueCurveAtTime(values: Iterable<number>, startTime: number, duration: number): IAudioParam {
                // Bug 183: Safari only accepts a Float32Array.
                const convertedValues = values instanceof Float32Array ? values : new Float32Array(values);
                /*
                 * Bug #152: Safari does not correctly interpolate the values of the curve.
                 * @todo Unfortunately there is no way to test for this behavior in a synchronous fashion which is why testing for the
                 * existence of the webkitAudioContext is used as a workaround here.
                 */
                if (nativeAudioContextConstructor !== null && nativeAudioContextConstructor.name === 'webkitAudioContext') {
                    const endTime = startTime + duration;
                    const sampleRate = audioNode.context.sampleRate;
                    const firstSample = Math.ceil(startTime * sampleRate);
                    const lastSample = Math.floor(endTime * sampleRate);
                    const numberOfInterpolatedValues = lastSample - firstSample;
                    const interpolatedValues = new Float32Array(numberOfInterpolatedValues);

                    for (let i = 0; i < numberOfInterpolatedValues; i += 1) {
                        const theoreticIndex = ((convertedValues.length - 1) / duration) * ((firstSample + i) / sampleRate - startTime);
                        const lowerIndex = Math.floor(theoreticIndex);
                        const upperIndex = Math.ceil(theoreticIndex);

                        interpolatedValues[i] =
                            lowerIndex === upperIndex
                                ? convertedValues[lowerIndex]
                                : (1 - (theoreticIndex - lowerIndex)) * convertedValues[lowerIndex] +
                                  (1 - (upperIndex - theoreticIndex)) * convertedValues[upperIndex];
                    }

                    if (audioParamRenderer === null) {
                        automationEventList.flush(audioNode.context.currentTime);
                    }

                    automationEventList.add(createSetValueCurveAutomationEvent(interpolatedValues, startTime, duration));
                    nativeAudioParam.setValueCurveAtTime(interpolatedValues, startTime, duration);

                    const timeOfLastSample = lastSample / sampleRate;

                    if (timeOfLastSample < endTime) {
                        setValueAtTimeUntilPossible(audioParam, interpolatedValues[interpolatedValues.length - 1], timeOfLastSample);
                    }

                    setValueAtTimeUntilPossible(audioParam, convertedValues[convertedValues.length - 1], endTime);
                } else {
                    if (audioParamRenderer === null) {
                        automationEventList.flush(audioNode.context.currentTime);
                    }

                    automationEventList.add(createSetValueCurveAutomationEvent(convertedValues, startTime, duration));
                    nativeAudioParam.setValueCurveAtTime(convertedValues, startTime, duration);
                }

                return audioParam;
            }
        };

        audioParamStore.set(audioParam, nativeAudioParam);
        audioParamAudioNodeStore.set(audioParam, audioNode);

        addAudioParamConnections(
            audioParam,
            <T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioParamRenderer : null>audioParamRenderer
        );

        return audioParam;
    };
};
