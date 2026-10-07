import { MOST_NEGATIVE_SINGLE_FLOAT, MOST_POSITIVE_SINGLE_FLOAT } from '../constants';
import { IAudioParam } from '../interfaces';
import { TAudioListenerFactoryFactory } from '../types';

export const createAudioListenerFactory: TAudioListenerFactoryFactory = (
    createAudioParam,
    createNativeChannelMergerNode,
    createNativeConstantSourceNode,
    createNativeScriptProcessorNode,
    createNotSupportedError,
    getFirstSample,
    isNativeOfflineAudioContext,
    overwriteAccessors
) => {
    return (context, nativeContext) => {
        const nativeListener = nativeContext.listener;

        // Bug #117: Only Chrome & Edge support the new interface already.
        const createFakeAudioParams = () => {
            const buffer = new Float32Array(1);
            const channelMergerNode = createNativeChannelMergerNode(nativeContext, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'speakers',
                numberOfInputs: 9
            });
            const isOffline = isNativeOfflineAudioContext(nativeContext);

            let isScriptProcessorNodeCreated = false;
            let lastOrientation: [number, number, number, number, number, number] = [0, 0, -1, 0, 1, 0];
            let lastPosition: [number, number, number] = [0, 0, 0];

            const createScriptProcessorNode = () => {
                if (isScriptProcessorNodeCreated) {
                    return;
                }

                isScriptProcessorNodeCreated = true;

                const scriptProcessorNode = createNativeScriptProcessorNode(nativeContext, 256, 9, 0);

                // tslint:disable-next-line:deprecation
                scriptProcessorNode.onaudioprocess = ({ inputBuffer }) => {
                    const orientation: [number, number, number, number, number, number] = [
                        getFirstSample(inputBuffer, buffer, 0),
                        getFirstSample(inputBuffer, buffer, 1),
                        getFirstSample(inputBuffer, buffer, 2),
                        getFirstSample(inputBuffer, buffer, 3),
                        getFirstSample(inputBuffer, buffer, 4),
                        getFirstSample(inputBuffer, buffer, 5)
                    ];

                    if (orientation.some((value, index) => value !== lastOrientation[index])) {
                        nativeListener.setOrientation(...orientation); // tslint:disable-line:deprecation

                        lastOrientation = orientation;
                    }

                    const positon: [number, number, number] = [
                        getFirstSample(inputBuffer, buffer, 6),
                        getFirstSample(inputBuffer, buffer, 7),
                        getFirstSample(inputBuffer, buffer, 8)
                    ];

                    if (positon.some((value, index) => value !== lastPosition[index])) {
                        nativeListener.setPosition(...positon); // tslint:disable-line:deprecation

                        lastPosition = positon;
                    }
                };

                channelMergerNode.connect(scriptProcessorNode);
            };
            const createSetOrientation = (index: number) => (value: number) => {
                if (value !== lastOrientation[index]) {
                    lastOrientation[index] = value;

                    nativeListener.setOrientation(...lastOrientation); // tslint:disable-line:deprecation
                }
            };
            const createSetPosition = (index: number) => (value: number) => {
                if (value !== lastPosition[index]) {
                    lastPosition[index] = value;

                    nativeListener.setPosition(...lastPosition); // tslint:disable-line:deprecation
                }
            };
            const createFakeAudioParam = (input: number, initialValue: number, setValue: (value: number) => void) => {
                const constantSourceNode = createNativeConstantSourceNode(nativeContext, {
                    channelCount: 1,
                    channelCountMode: 'explicit',
                    channelInterpretation: 'discrete',
                    offset: initialValue
                });

                constantSourceNode.connect(channelMergerNode, 0, input);

                // @todo This should be stopped when the context is closed.
                constantSourceNode.start();

                Object.defineProperty(constantSourceNode.offset, 'defaultValue', {
                    get(): number {
                        return initialValue;
                    }
                });

                /*
                 * Bug #62 & #74: Safari does not support ConstantSourceNodes and does not export the correct values for maxValue and
                 * minValue for GainNodes.
                 */
                const audioParam = createAudioParam(
                    <any>{ context },
                    isOffline,
                    constantSourceNode.offset,
                    MOST_POSITIVE_SINGLE_FLOAT,
                    MOST_NEGATIVE_SINGLE_FLOAT
                );

                overwriteAccessors(
                    audioParam,
                    'value',
                    (get) => () => get.call(audioParam),
                    (set) => (value) => {
                        try {
                            set.call(audioParam, value);
                        } catch (err) {
                            if (err.code !== 9) {
                                throw err;
                            }
                        }

                        createScriptProcessorNode();

                        if (isOffline) {
                            // Bug #117: Using setOrientation() and setPosition() doesn't work with an OfflineAudioContext.
                            setValue(value);
                        }
                    }
                );

                audioParam.cancelAndHoldAtTime = ((cancelAndHoldAtTime) => {
                    if (isOffline) {
                        return () => {
                            throw createNotSupportedError();
                        };
                    }

                    return (...args: Parameters<IAudioParam['cancelAndHoldAtTime']>) => {
                        const value = cancelAndHoldAtTime.apply(audioParam, args);

                        createScriptProcessorNode();

                        return value;
                    };
                })(audioParam.cancelAndHoldAtTime);
                audioParam.cancelScheduledValues = ((cancelScheduledValues) => {
                    if (isOffline) {
                        return () => {
                            throw createNotSupportedError();
                        };
                    }

                    return (...args: Parameters<IAudioParam['cancelScheduledValues']>) => {
                        const value = cancelScheduledValues.apply(audioParam, args);

                        createScriptProcessorNode();

                        return value;
                    };
                })(audioParam.cancelScheduledValues);
                audioParam.exponentialRampToValueAtTime = ((exponentialRampToValueAtTime) => {
                    if (isOffline) {
                        return () => {
                            throw createNotSupportedError();
                        };
                    }

                    return (...args: Parameters<IAudioParam['exponentialRampToValueAtTime']>) => {
                        const value = exponentialRampToValueAtTime.apply(audioParam, args);

                        createScriptProcessorNode();

                        return value;
                    };
                })(audioParam.exponentialRampToValueAtTime);
                audioParam.linearRampToValueAtTime = ((linearRampToValueAtTime) => {
                    if (isOffline) {
                        return () => {
                            throw createNotSupportedError();
                        };
                    }

                    return (...args: Parameters<IAudioParam['linearRampToValueAtTime']>) => {
                        const value = linearRampToValueAtTime.apply(audioParam, args);

                        createScriptProcessorNode();

                        return value;
                    };
                })(audioParam.linearRampToValueAtTime);
                audioParam.setTargetAtTime = ((setTargetAtTime) => {
                    if (isOffline) {
                        return () => {
                            throw createNotSupportedError();
                        };
                    }

                    return (...args: Parameters<IAudioParam['setTargetAtTime']>) => {
                        const value = setTargetAtTime.apply(audioParam, args);

                        createScriptProcessorNode();

                        return value;
                    };
                })(audioParam.setTargetAtTime);
                audioParam.setValueAtTime = ((setValueAtTime) => {
                    if (isOffline) {
                        return () => {
                            throw createNotSupportedError();
                        };
                    }

                    return (...args: Parameters<IAudioParam['setValueAtTime']>) => {
                        const value = setValueAtTime.apply(audioParam, args);

                        createScriptProcessorNode();

                        return value;
                    };
                })(audioParam.setValueAtTime);
                audioParam.setValueCurveAtTime = ((setValueCurveAtTime) => {
                    if (isOffline) {
                        return () => {
                            throw createNotSupportedError();
                        };
                    }

                    return (...args: Parameters<IAudioParam['setValueCurveAtTime']>) => {
                        const value = setValueCurveAtTime.apply(audioParam, args);

                        createScriptProcessorNode();

                        return value;
                    };
                })(audioParam.setValueCurveAtTime);

                return audioParam;
            };

            return {
                forwardX: createFakeAudioParam(0, 0, createSetOrientation(0)),
                forwardY: createFakeAudioParam(1, 0, createSetOrientation(1)),
                forwardZ: createFakeAudioParam(2, -1, createSetOrientation(2)),
                positionX: createFakeAudioParam(6, 0, createSetPosition(0)),
                positionY: createFakeAudioParam(7, 0, createSetPosition(1)),
                positionZ: createFakeAudioParam(8, 0, createSetPosition(2)),
                upX: createFakeAudioParam(3, 0, createSetOrientation(3)),
                upY: createFakeAudioParam(4, 1, createSetOrientation(4)),
                upZ: createFakeAudioParam(5, 0, createSetOrientation(5))
            };
        };

        const { forwardX, forwardY, forwardZ, positionX, positionY, positionZ, upX, upY, upZ } =
            nativeListener.forwardX === undefined ? createFakeAudioParams() : nativeListener;

        return {
            get forwardX(): IAudioParam {
                return forwardX;
            },
            get forwardY(): IAudioParam {
                return forwardY;
            },
            get forwardZ(): IAudioParam {
                return forwardZ;
            },
            get positionX(): IAudioParam {
                return positionX;
            },
            get positionY(): IAudioParam {
                return positionY;
            },
            get positionZ(): IAudioParam {
                return positionZ;
            },
            get upX(): IAudioParam {
                return upX;
            },
            get upY(): IAudioParam {
                return upY;
            },
            get upZ(): IAudioParam {
                return upZ;
            }
        };
    };
};
