import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
import { interceptConnections } from '../helpers/intercept-connections';
import { TNativeAudioNode, TNativeWaveShaperNode, TNativeWaveShaperNodeFakerFactoryFactory } from '../types';

export const createNativeWaveShaperNodeFakerFactory: TNativeWaveShaperNodeFakerFactoryFactory = (
    createConnectedNativeAudioBufferSourceNode,
    createInvalidStateError,
    createNativeGainNode,
    isDCCurve,
    monitorConnections
) => {
    return (nativeContext, { curve, oversample, ...audioNodeOptions }) => {
        const negativeWaveShaperNode = nativeContext.createWaveShaper();
        const positiveWaveShaperNode = nativeContext.createWaveShaper();

        assignNativeAudioNodeOptions(negativeWaveShaperNode, audioNodeOptions);
        assignNativeAudioNodeOptions(positiveWaveShaperNode, audioNodeOptions);

        const inputGainNode = createNativeGainNode(nativeContext, { ...audioNodeOptions, gain: 1 });
        const invertGainNode = createNativeGainNode(nativeContext, { ...audioNodeOptions, gain: -1 });
        const outputGainNode = createNativeGainNode(nativeContext, { ...audioNodeOptions, gain: 1 });
        const revertGainNode = createNativeGainNode(nativeContext, { ...audioNodeOptions, gain: -1 });

        let disconnectNativeAudioBufferSourceNode: null | (() => void) = null;
        let isConnected = false;
        let unmodifiedCurve: null | TNativeWaveShaperNode['curve'] = null;

        const nativeWaveShaperNodeFaker = {
            get bufferSize(): undefined {
                return undefined;
            },
            get channelCount(): number {
                return negativeWaveShaperNode.channelCount;
            },
            set channelCount(value) {
                inputGainNode.channelCount = value;
                invertGainNode.channelCount = value;
                negativeWaveShaperNode.channelCount = value;
                outputGainNode.channelCount = value;
                positiveWaveShaperNode.channelCount = value;
                revertGainNode.channelCount = value;
            },
            get channelCountMode(): TNativeWaveShaperNode['channelCountMode'] {
                return negativeWaveShaperNode.channelCountMode;
            },
            set channelCountMode(value) {
                inputGainNode.channelCountMode = value;
                invertGainNode.channelCountMode = value;
                negativeWaveShaperNode.channelCountMode = value;
                outputGainNode.channelCountMode = value;
                positiveWaveShaperNode.channelCountMode = value;
                revertGainNode.channelCountMode = value;
            },
            get channelInterpretation(): TNativeWaveShaperNode['channelInterpretation'] {
                return negativeWaveShaperNode.channelInterpretation;
            },
            set channelInterpretation(value) {
                inputGainNode.channelInterpretation = value;
                invertGainNode.channelInterpretation = value;
                negativeWaveShaperNode.channelInterpretation = value;
                outputGainNode.channelInterpretation = value;
                positiveWaveShaperNode.channelInterpretation = value;
                revertGainNode.channelInterpretation = value;
            },
            get context(): TNativeWaveShaperNode['context'] {
                return negativeWaveShaperNode.context;
            },
            get curve(): TNativeWaveShaperNode['curve'] {
                return unmodifiedCurve;
            },
            set curve(value) {
                // Bug #102: Safari does not throw an InvalidStateError when the curve has less than two samples.
                if (value !== null && value.length < 2) {
                    throw createInvalidStateError();
                }

                if (value === null) {
                    negativeWaveShaperNode.curve = value;
                    positiveWaveShaperNode.curve = value;
                } else {
                    const curveLength = value.length;

                    const negativeCurve = new Float32Array(curveLength + 2 - (curveLength % 2));
                    const positiveCurve = new Float32Array(curveLength + 2 - (curveLength % 2));

                    negativeCurve[0] = value[0];
                    positiveCurve[0] = -value[curveLength - 1];

                    const length = Math.ceil((curveLength + 1) / 2);
                    const centerIndex = (curveLength + 1) / 2 - 1;

                    for (let i = 1; i < length; i += 1) {
                        const theoreticIndex = (i / length) * centerIndex;

                        const lowerIndex = Math.floor(theoreticIndex);
                        const upperIndex = Math.ceil(theoreticIndex);

                        negativeCurve[i] =
                            lowerIndex === upperIndex
                                ? value[lowerIndex]
                                : (1 - (theoreticIndex - lowerIndex)) * value[lowerIndex] +
                                  (1 - (upperIndex - theoreticIndex)) * value[upperIndex];
                        positiveCurve[i] =
                            lowerIndex === upperIndex
                                ? -value[curveLength - 1 - lowerIndex]
                                : -((1 - (theoreticIndex - lowerIndex)) * value[curveLength - 1 - lowerIndex]) -
                                  (1 - (upperIndex - theoreticIndex)) * value[curveLength - 1 - upperIndex];
                    }

                    negativeCurve[length] = curveLength % 2 === 1 ? value[length - 1] : (value[length - 2] + value[length - 1]) / 2;

                    negativeWaveShaperNode.curve = negativeCurve;
                    positiveWaveShaperNode.curve = positiveCurve;
                }

                unmodifiedCurve = value;

                if (isConnected) {
                    if (isDCCurve(unmodifiedCurve) && disconnectNativeAudioBufferSourceNode === null) {
                        disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode(nativeContext, inputGainNode);
                    } else if (disconnectNativeAudioBufferSourceNode !== null) {
                        disconnectNativeAudioBufferSourceNode();
                        disconnectNativeAudioBufferSourceNode = null;
                    }
                }
            },
            get inputs(): TNativeAudioNode[] {
                return [inputGainNode];
            },
            get numberOfInputs(): number {
                return negativeWaveShaperNode.numberOfInputs;
            },
            get numberOfOutputs(): number {
                return negativeWaveShaperNode.numberOfOutputs;
            },
            get oversample(): TNativeWaveShaperNode['oversample'] {
                return negativeWaveShaperNode.oversample;
            },
            set oversample(value) {
                negativeWaveShaperNode.oversample = value;
                positiveWaveShaperNode.oversample = value;
            },
            addEventListener(...args: any[]): void {
                return inputGainNode.addEventListener(args[0], args[1], args[2]);
            },
            dispatchEvent(...args: any[]): boolean {
                return inputGainNode.dispatchEvent(args[0]);
            },
            removeEventListener(...args: any[]): void {
                return inputGainNode.removeEventListener(args[0], args[1], args[2]);
            }
        };

        if (curve !== null) {
            // Only values of type Float32Array can be assigned to the curve property.
            nativeWaveShaperNodeFaker.curve = curve instanceof Float32Array ? curve : new Float32Array(curve);
        }

        if (oversample !== nativeWaveShaperNodeFaker.oversample) {
            nativeWaveShaperNodeFaker.oversample = oversample;
        }

        const whenConnected = () => {
            inputGainNode.connect(negativeWaveShaperNode).connect(outputGainNode);

            inputGainNode.connect(invertGainNode).connect(positiveWaveShaperNode).connect(revertGainNode).connect(outputGainNode);

            isConnected = true;

            if (isDCCurve(unmodifiedCurve)) {
                disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode(nativeContext, inputGainNode);
            }
        };
        const whenDisconnected = () => {
            inputGainNode.disconnect(negativeWaveShaperNode);
            negativeWaveShaperNode.disconnect(outputGainNode);

            inputGainNode.disconnect(invertGainNode);
            invertGainNode.disconnect(positiveWaveShaperNode);
            positiveWaveShaperNode.disconnect(revertGainNode);
            revertGainNode.disconnect(outputGainNode);

            isConnected = false;

            if (disconnectNativeAudioBufferSourceNode !== null) {
                disconnectNativeAudioBufferSourceNode();
                disconnectNativeAudioBufferSourceNode = null;
            }
        };

        return monitorConnections(interceptConnections(nativeWaveShaperNodeFaker, outputGainNode), whenConnected, whenDisconnected);
    };
};
