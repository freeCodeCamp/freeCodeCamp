import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
import { interceptConnections } from '../helpers/intercept-connections';
import { TNativeAudioNode, TNativePannerNode, TNativePannerNodeFakerFactoryFactory } from '../types';

export const createNativePannerNodeFakerFactory: TNativePannerNodeFakerFactoryFactory = (
    connectNativeAudioNodeToNativeAudioNode,
    createInvalidStateError,
    createNativeChannelMergerNode,
    createNativeGainNode,
    createNativeScriptProcessorNode,
    createNativeWaveShaperNode,
    createNotSupportedError,
    disconnectNativeAudioNodeFromNativeAudioNode,
    getFirstSample,
    monitorConnections
) => {
    return (
        nativeContext,
        {
            coneInnerAngle,
            coneOuterAngle,
            coneOuterGain,
            distanceModel,
            maxDistance,
            orientationX,
            orientationY,
            orientationZ,
            panningModel,
            positionX,
            positionY,
            positionZ,
            refDistance,
            rolloffFactor,
            ...audioNodeOptions
        }
    ) => {
        const pannerNode = nativeContext.createPanner();

        // Bug #125: Safari does not throw an error yet.
        if (audioNodeOptions.channelCount > 2) {
            throw createNotSupportedError();
        }

        // Bug #126: Safari does not throw an error yet.
        if (audioNodeOptions.channelCountMode === 'max') {
            throw createNotSupportedError();
        }

        assignNativeAudioNodeOptions(pannerNode, audioNodeOptions);

        const SINGLE_CHANNEL_OPTIONS = {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete'
        } as const;

        const channelMergerNode = createNativeChannelMergerNode(nativeContext, {
            ...SINGLE_CHANNEL_OPTIONS,
            channelInterpretation: 'speakers',
            numberOfInputs: 6
        });
        const inputGainNode = createNativeGainNode(nativeContext, { ...audioNodeOptions, gain: 1 });
        const orientationXGainNode = createNativeGainNode(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 1 });
        const orientationYGainNode = createNativeGainNode(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
        const orientationZGainNode = createNativeGainNode(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
        const positionXGainNode = createNativeGainNode(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
        const positionYGainNode = createNativeGainNode(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
        const positionZGainNode = createNativeGainNode(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
        const scriptProcessorNode = createNativeScriptProcessorNode(nativeContext, 256, 6, 1);
        const waveShaperNode = createNativeWaveShaperNode(nativeContext, {
            ...SINGLE_CHANNEL_OPTIONS,
            curve: new Float32Array([1, 1]),
            oversample: 'none'
        });

        let lastOrientation: [number, number, number] = [orientationX, orientationY, orientationZ];
        let lastPosition: [number, number, number] = [positionX, positionY, positionZ];

        const buffer = new Float32Array(1);

        // tslint:disable-next-line:deprecation
        scriptProcessorNode.onaudioprocess = ({ inputBuffer }) => {
            const orientation: [number, number, number] = [
                getFirstSample(inputBuffer, buffer, 0),
                getFirstSample(inputBuffer, buffer, 1),
                getFirstSample(inputBuffer, buffer, 2)
            ];

            if (orientation.some((value, index) => value !== lastOrientation[index])) {
                pannerNode.setOrientation(...orientation); // tslint:disable-line:deprecation

                lastOrientation = orientation;
            }

            const positon: [number, number, number] = [
                getFirstSample(inputBuffer, buffer, 3),
                getFirstSample(inputBuffer, buffer, 4),
                getFirstSample(inputBuffer, buffer, 5)
            ];

            if (positon.some((value, index) => value !== lastPosition[index])) {
                pannerNode.setPosition(...positon); // tslint:disable-line:deprecation

                lastPosition = positon;
            }
        };

        Object.defineProperty(orientationYGainNode.gain, 'defaultValue', { get: () => 0 });
        Object.defineProperty(orientationZGainNode.gain, 'defaultValue', { get: () => 0 });
        Object.defineProperty(positionXGainNode.gain, 'defaultValue', { get: () => 0 });
        Object.defineProperty(positionYGainNode.gain, 'defaultValue', { get: () => 0 });
        Object.defineProperty(positionZGainNode.gain, 'defaultValue', { get: () => 0 });

        const nativePannerNodeFaker = {
            get bufferSize(): undefined {
                return undefined;
            },
            get channelCount(): number {
                return pannerNode.channelCount;
            },
            set channelCount(value) {
                // Bug #125: Safari does not throw an error yet.
                if (value > 2) {
                    throw createNotSupportedError();
                }

                inputGainNode.channelCount = value;
                pannerNode.channelCount = value;
            },
            get channelCountMode(): TNativePannerNode['channelCountMode'] {
                return pannerNode.channelCountMode;
            },
            set channelCountMode(value) {
                // Bug #126: Safari does not throw an error yet.
                if (value === 'max') {
                    throw createNotSupportedError();
                }

                inputGainNode.channelCountMode = value;
                pannerNode.channelCountMode = value;
            },
            get channelInterpretation(): TNativePannerNode['channelInterpretation'] {
                return pannerNode.channelInterpretation;
            },
            set channelInterpretation(value) {
                inputGainNode.channelInterpretation = value;
                pannerNode.channelInterpretation = value;
            },
            get coneInnerAngle(): TNativePannerNode['coneInnerAngle'] {
                return pannerNode.coneInnerAngle;
            },
            set coneInnerAngle(value) {
                pannerNode.coneInnerAngle = value;
            },
            get coneOuterAngle(): TNativePannerNode['coneOuterAngle'] {
                return pannerNode.coneOuterAngle;
            },
            set coneOuterAngle(value) {
                pannerNode.coneOuterAngle = value;
            },
            get coneOuterGain(): TNativePannerNode['coneOuterGain'] {
                return pannerNode.coneOuterGain;
            },
            set coneOuterGain(value) {
                // Bug #127: Safari does not throw an InvalidStateError yet.
                if (value < 0 || value > 1) {
                    throw createInvalidStateError();
                }

                pannerNode.coneOuterGain = value;
            },
            get context(): TNativePannerNode['context'] {
                return pannerNode.context;
            },
            get distanceModel(): TNativePannerNode['distanceModel'] {
                return pannerNode.distanceModel;
            },
            set distanceModel(value) {
                pannerNode.distanceModel = value;
            },
            get inputs(): TNativeAudioNode[] {
                return [inputGainNode];
            },
            get maxDistance(): TNativePannerNode['maxDistance'] {
                return pannerNode.maxDistance;
            },
            set maxDistance(value) {
                // Bug #128: Safari does not throw an error yet.
                if (value < 0) {
                    throw new RangeError();
                }

                pannerNode.maxDistance = value;
            },
            get numberOfInputs(): number {
                return pannerNode.numberOfInputs;
            },
            get numberOfOutputs(): number {
                return pannerNode.numberOfOutputs;
            },
            get orientationX(): TNativePannerNode['orientationX'] {
                return orientationXGainNode.gain;
            },
            get orientationY(): TNativePannerNode['orientationY'] {
                return orientationYGainNode.gain;
            },
            get orientationZ(): TNativePannerNode['orientationZ'] {
                return orientationZGainNode.gain;
            },
            get panningModel(): TNativePannerNode['panningModel'] {
                return pannerNode.panningModel;
            },
            set panningModel(value) {
                pannerNode.panningModel = value;
            },
            get positionX(): TNativePannerNode['positionX'] {
                return positionXGainNode.gain;
            },
            get positionY(): TNativePannerNode['positionY'] {
                return positionYGainNode.gain;
            },
            get positionZ(): TNativePannerNode['positionZ'] {
                return positionZGainNode.gain;
            },
            get refDistance(): TNativePannerNode['refDistance'] {
                return pannerNode.refDistance;
            },
            set refDistance(value) {
                // Bug #129: Safari does not throw an error yet.
                if (value < 0) {
                    throw new RangeError();
                }

                pannerNode.refDistance = value;
            },
            get rolloffFactor(): TNativePannerNode['rolloffFactor'] {
                return pannerNode.rolloffFactor;
            },
            set rolloffFactor(value) {
                // Bug #130: Safari does not throw an error yet.
                if (value < 0) {
                    throw new RangeError();
                }

                pannerNode.rolloffFactor = value;
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

        if (coneInnerAngle !== nativePannerNodeFaker.coneInnerAngle) {
            nativePannerNodeFaker.coneInnerAngle = coneInnerAngle;
        }

        if (coneOuterAngle !== nativePannerNodeFaker.coneOuterAngle) {
            nativePannerNodeFaker.coneOuterAngle = coneOuterAngle;
        }

        if (coneOuterGain !== nativePannerNodeFaker.coneOuterGain) {
            nativePannerNodeFaker.coneOuterGain = coneOuterGain;
        }

        if (distanceModel !== nativePannerNodeFaker.distanceModel) {
            nativePannerNodeFaker.distanceModel = distanceModel;
        }

        if (maxDistance !== nativePannerNodeFaker.maxDistance) {
            nativePannerNodeFaker.maxDistance = maxDistance;
        }

        if (orientationX !== nativePannerNodeFaker.orientationX.value) {
            nativePannerNodeFaker.orientationX.value = orientationX;
        }

        if (orientationY !== nativePannerNodeFaker.orientationY.value) {
            nativePannerNodeFaker.orientationY.value = orientationY;
        }

        if (orientationZ !== nativePannerNodeFaker.orientationZ.value) {
            nativePannerNodeFaker.orientationZ.value = orientationZ;
        }

        if (panningModel !== nativePannerNodeFaker.panningModel) {
            nativePannerNodeFaker.panningModel = panningModel;
        }

        if (positionX !== nativePannerNodeFaker.positionX.value) {
            nativePannerNodeFaker.positionX.value = positionX;
        }

        if (positionY !== nativePannerNodeFaker.positionY.value) {
            nativePannerNodeFaker.positionY.value = positionY;
        }

        if (positionZ !== nativePannerNodeFaker.positionZ.value) {
            nativePannerNodeFaker.positionZ.value = positionZ;
        }

        if (refDistance !== nativePannerNodeFaker.refDistance) {
            nativePannerNodeFaker.refDistance = refDistance;
        }

        if (rolloffFactor !== nativePannerNodeFaker.rolloffFactor) {
            nativePannerNodeFaker.rolloffFactor = rolloffFactor;
        }

        if (lastOrientation[0] !== 1 || lastOrientation[1] !== 0 || lastOrientation[2] !== 0) {
            pannerNode.setOrientation(...lastOrientation); // tslint:disable-line:deprecation
        }

        if (lastPosition[0] !== 0 || lastPosition[1] !== 0 || lastPosition[2] !== 0) {
            pannerNode.setPosition(...lastPosition); // tslint:disable-line:deprecation
        }

        const whenConnected = () => {
            inputGainNode.connect(pannerNode);

            // Bug #119: Safari does not fully support the WaveShaperNode.
            connectNativeAudioNodeToNativeAudioNode(inputGainNode, waveShaperNode, 0, 0);

            waveShaperNode.connect(orientationXGainNode).connect(channelMergerNode, 0, 0);
            waveShaperNode.connect(orientationYGainNode).connect(channelMergerNode, 0, 1);
            waveShaperNode.connect(orientationZGainNode).connect(channelMergerNode, 0, 2);
            waveShaperNode.connect(positionXGainNode).connect(channelMergerNode, 0, 3);
            waveShaperNode.connect(positionYGainNode).connect(channelMergerNode, 0, 4);
            waveShaperNode.connect(positionZGainNode).connect(channelMergerNode, 0, 5);

            channelMergerNode.connect(scriptProcessorNode).connect(nativeContext.destination);
        };
        const whenDisconnected = () => {
            inputGainNode.disconnect(pannerNode);

            // Bug #119: Safari does not fully support the WaveShaperNode.
            disconnectNativeAudioNodeFromNativeAudioNode(inputGainNode, waveShaperNode, 0, 0);

            waveShaperNode.disconnect(orientationXGainNode);
            orientationXGainNode.disconnect(channelMergerNode);
            waveShaperNode.disconnect(orientationYGainNode);
            orientationYGainNode.disconnect(channelMergerNode);
            waveShaperNode.disconnect(orientationZGainNode);
            orientationZGainNode.disconnect(channelMergerNode);
            waveShaperNode.disconnect(positionXGainNode);
            positionXGainNode.disconnect(channelMergerNode);
            waveShaperNode.disconnect(positionYGainNode);
            positionYGainNode.disconnect(channelMergerNode);
            waveShaperNode.disconnect(positionZGainNode);
            positionZGainNode.disconnect(channelMergerNode);

            channelMergerNode.disconnect(scriptProcessorNode);
            scriptProcessorNode.disconnect(nativeContext.destination);
        };

        return monitorConnections(interceptConnections(nativePannerNodeFaker, pannerNode), whenConnected, whenDisconnected);
    };
};
