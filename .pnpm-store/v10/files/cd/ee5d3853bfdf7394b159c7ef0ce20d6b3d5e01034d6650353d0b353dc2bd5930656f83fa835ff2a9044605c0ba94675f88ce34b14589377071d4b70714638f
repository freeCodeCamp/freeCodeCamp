import { interceptConnections } from '../helpers/intercept-connections';
export const createNativeStereoPannerNodeFakerFactory = (createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeGainNode, createNativeWaveShaperNode, createNotSupportedError, monitorConnections) => {
    // The curve has a size of 14bit plus 1 value to have an exact representation for zero. This value has been determined experimentally.
    const CURVE_SIZE = 16385;
    const DC_CURVE = new Float32Array([1, 1]);
    const HALF_PI = Math.PI / 2;
    const SINGLE_CHANNEL_OPTIONS = { channelCount: 1, channelCountMode: 'explicit', channelInterpretation: 'discrete' };
    const SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS = { ...SINGLE_CHANNEL_OPTIONS, oversample: 'none' };
    const buildInternalGraphForMono = (nativeContext, inputGainNode, panGainNode, channelMergerNode) => {
        const leftWaveShaperCurve = new Float32Array(CURVE_SIZE);
        const rightWaveShaperCurve = new Float32Array(CURVE_SIZE);
        for (let i = 0; i < CURVE_SIZE; i += 1) {
            const x = (i / (CURVE_SIZE - 1)) * HALF_PI;
            leftWaveShaperCurve[i] = Math.cos(x);
            rightWaveShaperCurve[i] = Math.sin(x);
        }
        const leftGainNode = createNativeGainNode(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
        // Bug #119: Safari does not fully support the WaveShaperNode.
        const leftWaveShaperNode = (createNativeWaveShaperNode(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: leftWaveShaperCurve }));
        // Bug #119: Safari does not fully support the WaveShaperNode.
        const panWaveShaperNode = (createNativeWaveShaperNode(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: DC_CURVE }));
        const rightGainNode = createNativeGainNode(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
        // Bug #119: Safari does not fully support the WaveShaperNode.
        const rightWaveShaperNode = (createNativeWaveShaperNode(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: rightWaveShaperCurve }));
        return {
            connectGraph() {
                inputGainNode.connect(leftGainNode);
                inputGainNode.connect(panWaveShaperNode.inputs === undefined ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
                inputGainNode.connect(rightGainNode);
                panWaveShaperNode.connect(panGainNode);
                panGainNode.connect(leftWaveShaperNode.inputs === undefined ? leftWaveShaperNode : leftWaveShaperNode.inputs[0]);
                panGainNode.connect(rightWaveShaperNode.inputs === undefined ? rightWaveShaperNode : rightWaveShaperNode.inputs[0]);
                leftWaveShaperNode.connect(leftGainNode.gain);
                rightWaveShaperNode.connect(rightGainNode.gain);
                leftGainNode.connect(channelMergerNode, 0, 0);
                rightGainNode.connect(channelMergerNode, 0, 1);
            },
            disconnectGraph() {
                inputGainNode.disconnect(leftGainNode);
                inputGainNode.disconnect(panWaveShaperNode.inputs === undefined ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
                inputGainNode.disconnect(rightGainNode);
                panWaveShaperNode.disconnect(panGainNode);
                panGainNode.disconnect(leftWaveShaperNode.inputs === undefined ? leftWaveShaperNode : leftWaveShaperNode.inputs[0]);
                panGainNode.disconnect(rightWaveShaperNode.inputs === undefined ? rightWaveShaperNode : rightWaveShaperNode.inputs[0]);
                leftWaveShaperNode.disconnect(leftGainNode.gain);
                rightWaveShaperNode.disconnect(rightGainNode.gain);
                leftGainNode.disconnect(channelMergerNode, 0, 0);
                rightGainNode.disconnect(channelMergerNode, 0, 1);
            }
        };
    };
    const buildInternalGraphForStereo = (nativeContext, inputGainNode, panGainNode, channelMergerNode) => {
        const leftInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
        const leftInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
        const rightInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
        const rightInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
        const centerIndex = Math.floor(CURVE_SIZE / 2);
        for (let i = 0; i < CURVE_SIZE; i += 1) {
            if (i > centerIndex) {
                const x = ((i - centerIndex) / (CURVE_SIZE - 1 - centerIndex)) * HALF_PI;
                leftInputForLeftOutputWaveShaperCurve[i] = Math.cos(x);
                leftInputForRightOutputWaveShaperCurve[i] = Math.sin(x);
                rightInputForLeftOutputWaveShaperCurve[i] = 0;
                rightInputForRightOutputWaveShaperCurve[i] = 1;
            }
            else {
                const x = (i / (CURVE_SIZE - 1 - centerIndex)) * HALF_PI;
                leftInputForLeftOutputWaveShaperCurve[i] = 1;
                leftInputForRightOutputWaveShaperCurve[i] = 0;
                rightInputForLeftOutputWaveShaperCurve[i] = Math.cos(x);
                rightInputForRightOutputWaveShaperCurve[i] = Math.sin(x);
            }
        }
        const channelSplitterNode = createNativeChannelSplitterNode(nativeContext, {
            channelCount: 2,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            numberOfOutputs: 2
        });
        const leftInputForLeftOutputGainNode = createNativeGainNode(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
        // Bug #119: Safari does not fully support the WaveShaperNode.
        const leftInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, {
            ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
            curve: leftInputForLeftOutputWaveShaperCurve
        });
        const leftInputForRightOutputGainNode = createNativeGainNode(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
        // Bug #119: Safari does not fully support the WaveShaperNode.
        const leftInputForRightOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, {
            ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
            curve: leftInputForRightOutputWaveShaperCurve
        });
        // Bug #119: Safari does not fully support the WaveShaperNode.
        const panWaveShaperNode = (createNativeWaveShaperNode(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: DC_CURVE }));
        const rightInputForLeftOutputGainNode = createNativeGainNode(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
        // Bug #119: Safari does not fully support the WaveShaperNode.
        const rightInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, {
            ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
            curve: rightInputForLeftOutputWaveShaperCurve
        });
        const rightInputForRightOutputGainNode = createNativeGainNode(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
        // Bug #119: Safari does not fully support the WaveShaperNode.
        const rightInputForRightOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, {
            ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
            curve: rightInputForRightOutputWaveShaperCurve
        });
        return {
            connectGraph() {
                inputGainNode.connect(channelSplitterNode);
                inputGainNode.connect(panWaveShaperNode.inputs === undefined ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
                channelSplitterNode.connect(leftInputForLeftOutputGainNode, 0);
                channelSplitterNode.connect(leftInputForRightOutputGainNode, 0);
                channelSplitterNode.connect(rightInputForLeftOutputGainNode, 1);
                channelSplitterNode.connect(rightInputForRightOutputGainNode, 1);
                panWaveShaperNode.connect(panGainNode);
                panGainNode.connect(leftInputForLeftOutputWaveShaperNode.inputs === undefined
                    ? leftInputForLeftOutputWaveShaperNode
                    : leftInputForLeftOutputWaveShaperNode.inputs[0]);
                panGainNode.connect(leftInputForRightOutputWaveShaperNode.inputs === undefined
                    ? leftInputForRightOutputWaveShaperNode
                    : leftInputForRightOutputWaveShaperNode.inputs[0]);
                panGainNode.connect(rightInputForLeftOutputWaveShaperNode.inputs === undefined
                    ? rightInputForLeftOutputWaveShaperNode
                    : rightInputForLeftOutputWaveShaperNode.inputs[0]);
                panGainNode.connect(rightInputForRightOutputWaveShaperNode.inputs === undefined
                    ? rightInputForRightOutputWaveShaperNode
                    : rightInputForRightOutputWaveShaperNode.inputs[0]);
                leftInputForLeftOutputWaveShaperNode.connect(leftInputForLeftOutputGainNode.gain);
                leftInputForRightOutputWaveShaperNode.connect(leftInputForRightOutputGainNode.gain);
                rightInputForLeftOutputWaveShaperNode.connect(rightInputForLeftOutputGainNode.gain);
                rightInputForRightOutputWaveShaperNode.connect(rightInputForRightOutputGainNode.gain);
                leftInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
                rightInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
                leftInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
                rightInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
            },
            disconnectGraph() {
                inputGainNode.disconnect(channelSplitterNode);
                inputGainNode.disconnect(panWaveShaperNode.inputs === undefined ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
                channelSplitterNode.disconnect(leftInputForLeftOutputGainNode, 0);
                channelSplitterNode.disconnect(leftInputForRightOutputGainNode, 0);
                channelSplitterNode.disconnect(rightInputForLeftOutputGainNode, 1);
                channelSplitterNode.disconnect(rightInputForRightOutputGainNode, 1);
                panWaveShaperNode.disconnect(panGainNode);
                panGainNode.disconnect(leftInputForLeftOutputWaveShaperNode.inputs === undefined
                    ? leftInputForLeftOutputWaveShaperNode
                    : leftInputForLeftOutputWaveShaperNode.inputs[0]);
                panGainNode.disconnect(leftInputForRightOutputWaveShaperNode.inputs === undefined
                    ? leftInputForRightOutputWaveShaperNode
                    : leftInputForRightOutputWaveShaperNode.inputs[0]);
                panGainNode.disconnect(rightInputForLeftOutputWaveShaperNode.inputs === undefined
                    ? rightInputForLeftOutputWaveShaperNode
                    : rightInputForLeftOutputWaveShaperNode.inputs[0]);
                panGainNode.disconnect(rightInputForRightOutputWaveShaperNode.inputs === undefined
                    ? rightInputForRightOutputWaveShaperNode
                    : rightInputForRightOutputWaveShaperNode.inputs[0]);
                leftInputForLeftOutputWaveShaperNode.disconnect(leftInputForLeftOutputGainNode.gain);
                leftInputForRightOutputWaveShaperNode.disconnect(leftInputForRightOutputGainNode.gain);
                rightInputForLeftOutputWaveShaperNode.disconnect(rightInputForLeftOutputGainNode.gain);
                rightInputForRightOutputWaveShaperNode.disconnect(rightInputForRightOutputGainNode.gain);
                leftInputForLeftOutputGainNode.disconnect(channelMergerNode, 0, 0);
                rightInputForLeftOutputGainNode.disconnect(channelMergerNode, 0, 0);
                leftInputForRightOutputGainNode.disconnect(channelMergerNode, 0, 1);
                rightInputForRightOutputGainNode.disconnect(channelMergerNode, 0, 1);
            }
        };
    };
    const buildInternalGraph = (nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode) => {
        if (channelCount === 1) {
            return buildInternalGraphForMono(nativeContext, inputGainNode, panGainNode, channelMergerNode);
        }
        if (channelCount === 2) {
            return buildInternalGraphForStereo(nativeContext, inputGainNode, panGainNode, channelMergerNode);
        }
        throw createNotSupportedError();
    };
    return (nativeContext, { channelCount, channelCountMode, pan, ...audioNodeOptions }) => {
        if (channelCountMode === 'max') {
            throw createNotSupportedError();
        }
        const channelMergerNode = createNativeChannelMergerNode(nativeContext, {
            ...audioNodeOptions,
            channelCount: 1,
            channelCountMode,
            numberOfInputs: 2
        });
        const inputGainNode = createNativeGainNode(nativeContext, { ...audioNodeOptions, channelCount, channelCountMode, gain: 1 });
        const panGainNode = createNativeGainNode(nativeContext, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: pan
        });
        let { connectGraph, disconnectGraph } = buildInternalGraph(nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode);
        Object.defineProperty(panGainNode.gain, 'defaultValue', { get: () => 0 });
        Object.defineProperty(panGainNode.gain, 'maxValue', { get: () => 1 });
        Object.defineProperty(panGainNode.gain, 'minValue', { get: () => -1 });
        const nativeStereoPannerNodeFakerFactory = {
            get bufferSize() {
                return undefined;
            },
            get channelCount() {
                return inputGainNode.channelCount;
            },
            set channelCount(value) {
                if (inputGainNode.channelCount !== value) {
                    if (isConnected) {
                        disconnectGraph();
                    }
                    ({ connectGraph, disconnectGraph } = buildInternalGraph(nativeContext, value, inputGainNode, panGainNode, channelMergerNode));
                    if (isConnected) {
                        connectGraph();
                    }
                }
                inputGainNode.channelCount = value;
            },
            get channelCountMode() {
                return inputGainNode.channelCountMode;
            },
            set channelCountMode(value) {
                if (value === 'clamped-max' || value === 'max') {
                    throw createNotSupportedError();
                }
                inputGainNode.channelCountMode = value;
            },
            get channelInterpretation() {
                return inputGainNode.channelInterpretation;
            },
            set channelInterpretation(value) {
                inputGainNode.channelInterpretation = value;
            },
            get context() {
                return inputGainNode.context;
            },
            get inputs() {
                return [inputGainNode];
            },
            get numberOfInputs() {
                return inputGainNode.numberOfInputs;
            },
            get numberOfOutputs() {
                return inputGainNode.numberOfOutputs;
            },
            get pan() {
                return panGainNode.gain;
            },
            addEventListener(...args) {
                return inputGainNode.addEventListener(args[0], args[1], args[2]);
            },
            dispatchEvent(...args) {
                return inputGainNode.dispatchEvent(args[0]);
            },
            removeEventListener(...args) {
                return inputGainNode.removeEventListener(args[0], args[1], args[2]);
            }
        };
        let isConnected = false;
        const whenConnected = () => {
            connectGraph();
            isConnected = true;
        };
        const whenDisconnected = () => {
            disconnectGraph();
            isConnected = false;
        };
        return monitorConnections(interceptConnections(nativeStereoPannerNodeFakerFactory, channelMergerNode), whenConnected, whenDisconnected);
    };
};
//# sourceMappingURL=native-stereo-panner-node-faker-factory.js.map