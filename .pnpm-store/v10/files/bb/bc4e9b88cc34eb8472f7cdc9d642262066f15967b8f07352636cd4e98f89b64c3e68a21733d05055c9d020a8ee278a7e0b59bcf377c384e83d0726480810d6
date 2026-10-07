import { MOST_NEGATIVE_SINGLE_FLOAT, MOST_POSITIVE_SINGLE_FLOAT } from '../constants';
import { computeBufferSize } from '../helpers/compute-buffer-size';
import { copyFromChannel } from '../helpers/copy-from-channel';
import { copyToChannel } from '../helpers/copy-to-channel';
import { createAudioWorkletProcessor } from '../helpers/create-audio-worklet-processor';
import { createNestedArrays } from '../helpers/create-nested-arrays';
import { ReadOnlyMap } from '../read-only-map';
export const createNativeAudioWorkletNodeFakerFactory = (connectMultipleOutputs, createIndexSizeError, createInvalidStateError, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, createNativeScriptProcessorNode, createNotSupportedError, disconnectMultipleOutputs, exposeCurrentFrameAndCurrentTime, getActiveAudioWorkletNodeInputs, monitorConnections) => {
    return (nativeContext, baseLatency, processorConstructor, options) => {
        if (options.numberOfInputs === 0 && options.numberOfOutputs === 0) {
            throw createNotSupportedError();
        }
        const outputChannelCount = Array.isArray(options.outputChannelCount)
            ? options.outputChannelCount
            : Array.from(options.outputChannelCount);
        // @todo Check if any of the channelCount values is greater than the implementation's maximum number of channels.
        if (outputChannelCount.some((channelCount) => channelCount < 1)) {
            throw createNotSupportedError();
        }
        if (outputChannelCount.length !== options.numberOfOutputs) {
            throw createIndexSizeError();
        }
        // Bug #61: This is not part of the standard but required for the faker to work.
        if (options.channelCountMode !== 'explicit') {
            throw createNotSupportedError();
        }
        const numberOfInputChannels = options.channelCount * options.numberOfInputs;
        const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
        const numberOfParameters = processorConstructor.parameterDescriptors === undefined ? 0 : processorConstructor.parameterDescriptors.length;
        // Bug #61: This is not part of the standard but required for the faker to work.
        if (numberOfInputChannels + numberOfParameters > 6 || numberOfOutputChannels > 6) {
            throw createNotSupportedError();
        }
        const messageChannel = new MessageChannel();
        const gainNodes = [];
        const inputChannelSplitterNodes = [];
        for (let i = 0; i < options.numberOfInputs; i += 1) {
            gainNodes.push(createNativeGainNode(nativeContext, {
                channelCount: options.channelCount,
                channelCountMode: options.channelCountMode,
                channelInterpretation: options.channelInterpretation,
                gain: 1
            }));
            inputChannelSplitterNodes.push(createNativeChannelSplitterNode(nativeContext, {
                channelCount: options.channelCount,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                numberOfOutputs: options.channelCount
            }));
        }
        const constantSourceNodes = [];
        if (processorConstructor.parameterDescriptors !== undefined) {
            for (const { defaultValue, maxValue, minValue, name } of processorConstructor.parameterDescriptors) {
                const constantSourceNode = createNativeConstantSourceNode(nativeContext, {
                    channelCount: 1,
                    channelCountMode: 'explicit',
                    channelInterpretation: 'discrete',
                    offset: options.parameterData[name] !== undefined
                        ? options.parameterData[name]
                        : defaultValue === undefined
                            ? 0
                            : defaultValue
                });
                Object.defineProperties(constantSourceNode.offset, {
                    defaultValue: {
                        get: () => (defaultValue === undefined ? 0 : defaultValue)
                    },
                    maxValue: {
                        get: () => (maxValue === undefined ? MOST_POSITIVE_SINGLE_FLOAT : maxValue)
                    },
                    minValue: {
                        get: () => (minValue === undefined ? MOST_NEGATIVE_SINGLE_FLOAT : minValue)
                    }
                });
                constantSourceNodes.push(constantSourceNode);
            }
        }
        const inputChannelMergerNode = createNativeChannelMergerNode(nativeContext, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            numberOfInputs: Math.max(1, numberOfInputChannels + numberOfParameters)
        });
        const bufferSize = computeBufferSize(baseLatency, nativeContext.sampleRate);
        const scriptProcessorNode = createNativeScriptProcessorNode(nativeContext, bufferSize, numberOfInputChannels + numberOfParameters, 
        // Bug #87: Only Firefox will fire an AudioProcessingEvent if there is no connected output.
        Math.max(1, numberOfOutputChannels));
        const outputChannelSplitterNode = createNativeChannelSplitterNode(nativeContext, {
            channelCount: Math.max(1, numberOfOutputChannels),
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            numberOfOutputs: Math.max(1, numberOfOutputChannels)
        });
        const outputChannelMergerNodes = [];
        for (let i = 0; i < options.numberOfOutputs; i += 1) {
            outputChannelMergerNodes.push(createNativeChannelMergerNode(nativeContext, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'speakers',
                numberOfInputs: outputChannelCount[i]
            }));
        }
        for (let i = 0; i < options.numberOfInputs; i += 1) {
            gainNodes[i].connect(inputChannelSplitterNodes[i]);
            for (let j = 0; j < options.channelCount; j += 1) {
                inputChannelSplitterNodes[i].connect(inputChannelMergerNode, j, i * options.channelCount + j);
            }
        }
        const parameterMap = new ReadOnlyMap(processorConstructor.parameterDescriptors === undefined
            ? []
            : processorConstructor.parameterDescriptors.map(({ name }, index) => {
                const constantSourceNode = constantSourceNodes[index];
                constantSourceNode.connect(inputChannelMergerNode, 0, numberOfInputChannels + index);
                constantSourceNode.start(0);
                return [name, constantSourceNode.offset];
            }));
        inputChannelMergerNode.connect(scriptProcessorNode);
        let channelInterpretation = options.channelInterpretation;
        let onprocessorerror = null;
        // Bug #87: Expose at least one output to make this node connectable.
        const outputAudioNodes = options.numberOfOutputs === 0 ? [scriptProcessorNode] : outputChannelMergerNodes;
        const nativeAudioWorkletNodeFaker = {
            get bufferSize() {
                return bufferSize;
            },
            get channelCount() {
                return options.channelCount;
            },
            set channelCount(_) {
                // Bug #61: This is not part of the standard but required for the faker to work.
                throw createInvalidStateError();
            },
            get channelCountMode() {
                return options.channelCountMode;
            },
            set channelCountMode(_) {
                // Bug #61: This is not part of the standard but required for the faker to work.
                throw createInvalidStateError();
            },
            get channelInterpretation() {
                return channelInterpretation;
            },
            set channelInterpretation(value) {
                for (const gainNode of gainNodes) {
                    gainNode.channelInterpretation = value;
                }
                channelInterpretation = value;
            },
            get context() {
                return scriptProcessorNode.context;
            },
            get inputs() {
                return gainNodes;
            },
            get numberOfInputs() {
                return options.numberOfInputs;
            },
            get numberOfOutputs() {
                return options.numberOfOutputs;
            },
            get onprocessorerror() {
                return onprocessorerror;
            },
            set onprocessorerror(value) {
                if (typeof onprocessorerror === 'function') {
                    nativeAudioWorkletNodeFaker.removeEventListener('processorerror', onprocessorerror);
                }
                onprocessorerror = typeof value === 'function' ? value : null;
                if (typeof onprocessorerror === 'function') {
                    nativeAudioWorkletNodeFaker.addEventListener('processorerror', onprocessorerror);
                }
            },
            get parameters() {
                return parameterMap;
            },
            get port() {
                return messageChannel.port2;
            },
            addEventListener(...args) {
                return scriptProcessorNode.addEventListener(args[0], args[1], args[2]);
            },
            connect: connectMultipleOutputs.bind(null, outputAudioNodes),
            disconnect: disconnectMultipleOutputs.bind(null, outputAudioNodes),
            dispatchEvent(...args) {
                return scriptProcessorNode.dispatchEvent(args[0]);
            },
            removeEventListener(...args) {
                return scriptProcessorNode.removeEventListener(args[0], args[1], args[2]);
            }
        };
        const patchedEventListeners = new Map();
        messageChannel.port1.addEventListener = ((addEventListener) => {
            return (...args) => {
                if (args[0] === 'message') {
                    const unpatchedEventListener = typeof args[1] === 'function'
                        ? args[1]
                        : typeof args[1] === 'object' && args[1] !== null && typeof args[1].handleEvent === 'function'
                            ? args[1].handleEvent
                            : null;
                    if (unpatchedEventListener !== null) {
                        const patchedEventListener = patchedEventListeners.get(args[1]);
                        if (patchedEventListener !== undefined) {
                            args[1] = patchedEventListener;
                        }
                        else {
                            args[1] = (event) => {
                                exposeCurrentFrameAndCurrentTime(nativeContext.currentTime, nativeContext.sampleRate, () => unpatchedEventListener(event));
                            };
                            patchedEventListeners.set(unpatchedEventListener, args[1]);
                        }
                    }
                }
                return addEventListener.call(messageChannel.port1, args[0], args[1], args[2]);
            };
        })(messageChannel.port1.addEventListener);
        messageChannel.port1.removeEventListener = ((removeEventListener) => {
            return (...args) => {
                if (args[0] === 'message') {
                    const patchedEventListener = patchedEventListeners.get(args[1]);
                    if (patchedEventListener !== undefined) {
                        patchedEventListeners.delete(args[1]);
                        args[1] = patchedEventListener;
                    }
                }
                return removeEventListener.call(messageChannel.port1, args[0], args[1], args[2]);
            };
        })(messageChannel.port1.removeEventListener);
        let onmessage = null;
        Object.defineProperty(messageChannel.port1, 'onmessage', {
            get: () => onmessage,
            set: (value) => {
                if (typeof onmessage === 'function') {
                    messageChannel.port1.removeEventListener('message', onmessage);
                }
                onmessage = typeof value === 'function' ? value : null;
                if (typeof onmessage === 'function') {
                    messageChannel.port1.addEventListener('message', onmessage);
                    messageChannel.port1.start();
                }
            }
        });
        processorConstructor.prototype.port = messageChannel.port1;
        let audioWorkletProcessor = null;
        const audioWorkletProcessorPromise = createAudioWorkletProcessor(nativeContext, nativeAudioWorkletNodeFaker, processorConstructor, options);
        audioWorkletProcessorPromise.then((dWrkltPrcssr) => (audioWorkletProcessor = dWrkltPrcssr));
        const inputs = createNestedArrays(options.numberOfInputs, options.channelCount);
        const outputs = createNestedArrays(options.numberOfOutputs, outputChannelCount);
        const parameters = processorConstructor.parameterDescriptors === undefined
            ? []
            : processorConstructor.parameterDescriptors.reduce((prmtrs, { name }) => ({ ...prmtrs, [name]: new Float32Array(128) }), {});
        let isActive = true;
        const disconnectOutputsGraph = () => {
            if (options.numberOfOutputs > 0) {
                scriptProcessorNode.disconnect(outputChannelSplitterNode);
            }
            for (let i = 0, outputChannelSplitterNodeOutput = 0; i < options.numberOfOutputs; i += 1) {
                const outputChannelMergerNode = outputChannelMergerNodes[i];
                for (let j = 0; j < outputChannelCount[i]; j += 1) {
                    outputChannelSplitterNode.disconnect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
                }
                outputChannelSplitterNodeOutput += outputChannelCount[i];
            }
        };
        const activeInputIndexes = new Map();
        // tslint:disable-next-line:deprecation
        scriptProcessorNode.onaudioprocess = ({ inputBuffer, outputBuffer }) => {
            if (audioWorkletProcessor !== null) {
                const activeInputs = getActiveAudioWorkletNodeInputs(nativeAudioWorkletNodeFaker);
                for (let i = 0; i < bufferSize; i += 128) {
                    for (let j = 0; j < options.numberOfInputs; j += 1) {
                        for (let k = 0; k < options.channelCount; k += 1) {
                            copyFromChannel(inputBuffer, inputs[j], k, k, i);
                        }
                    }
                    if (processorConstructor.parameterDescriptors !== undefined) {
                        processorConstructor.parameterDescriptors.forEach(({ name }, index) => {
                            copyFromChannel(inputBuffer, parameters, name, numberOfInputChannels + index, i);
                        });
                    }
                    for (let j = 0; j < options.numberOfInputs; j += 1) {
                        for (let k = 0; k < outputChannelCount[j]; k += 1) {
                            // The byteLength will be 0 when the ArrayBuffer was transferred.
                            if (outputs[j][k].byteLength === 0) {
                                outputs[j][k] = new Float32Array(128);
                            }
                        }
                    }
                    try {
                        const potentiallyEmptyInputs = inputs.map((input, index) => {
                            const activeInput = activeInputs[index];
                            if (activeInput.size > 0) {
                                activeInputIndexes.set(index, bufferSize / 128);
                                return input;
                            }
                            const count = activeInputIndexes.get(index);
                            if (count === undefined) {
                                return [];
                            }
                            if (input.every((channelData) => channelData.every((sample) => sample === 0))) {
                                if (count === 1) {
                                    activeInputIndexes.delete(index);
                                }
                                else {
                                    activeInputIndexes.set(index, count - 1);
                                }
                            }
                            return input;
                        });
                        const activeSourceFlag = exposeCurrentFrameAndCurrentTime(nativeContext.currentTime + i / nativeContext.sampleRate, nativeContext.sampleRate, () => audioWorkletProcessor.process(potentiallyEmptyInputs, outputs, parameters));
                        isActive = activeSourceFlag;
                        for (let j = 0, outputChannelSplitterNodeOutput = 0; j < options.numberOfOutputs; j += 1) {
                            for (let k = 0; k < outputChannelCount[j]; k += 1) {
                                copyToChannel(outputBuffer, outputs[j], k, outputChannelSplitterNodeOutput + k, i);
                            }
                            outputChannelSplitterNodeOutput += outputChannelCount[j];
                        }
                    }
                    catch (error) {
                        isActive = false;
                        nativeAudioWorkletNodeFaker.dispatchEvent(new ErrorEvent('processorerror', {
                            colno: error.colno,
                            filename: error.filename,
                            lineno: error.lineno,
                            message: error.message
                        }));
                    }
                    if (!isActive) {
                        for (let j = 0; j < options.numberOfInputs; j += 1) {
                            gainNodes[j].disconnect(inputChannelSplitterNodes[j]);
                            for (let k = 0; k < options.channelCount; k += 1) {
                                inputChannelSplitterNodes[i].disconnect(inputChannelMergerNode, k, j * options.channelCount + k);
                            }
                        }
                        if (processorConstructor.parameterDescriptors !== undefined) {
                            const length = processorConstructor.parameterDescriptors.length;
                            for (let j = 0; j < length; j += 1) {
                                const constantSourceNode = constantSourceNodes[j];
                                constantSourceNode.disconnect(inputChannelMergerNode, 0, numberOfInputChannels + j);
                                constantSourceNode.stop();
                            }
                        }
                        inputChannelMergerNode.disconnect(scriptProcessorNode);
                        scriptProcessorNode.onaudioprocess = null; // tslint:disable-line:deprecation
                        if (isConnected) {
                            disconnectOutputsGraph();
                        }
                        else {
                            disconnectFakeGraph();
                        }
                        break;
                    }
                }
            }
        };
        let isConnected = false;
        // Bug #87: Only Firefox will fire an AudioProcessingEvent if there is no connected output.
        const nativeGainNode = createNativeGainNode(nativeContext, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: 0
        });
        const connectFakeGraph = () => scriptProcessorNode.connect(nativeGainNode).connect(nativeContext.destination);
        const disconnectFakeGraph = () => {
            scriptProcessorNode.disconnect(nativeGainNode);
            nativeGainNode.disconnect();
        };
        const whenConnected = () => {
            if (isActive) {
                disconnectFakeGraph();
                if (options.numberOfOutputs > 0) {
                    scriptProcessorNode.connect(outputChannelSplitterNode);
                }
                for (let i = 0, outputChannelSplitterNodeOutput = 0; i < options.numberOfOutputs; i += 1) {
                    const outputChannelMergerNode = outputChannelMergerNodes[i];
                    for (let j = 0; j < outputChannelCount[i]; j += 1) {
                        outputChannelSplitterNode.connect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
                    }
                    outputChannelSplitterNodeOutput += outputChannelCount[i];
                }
            }
            isConnected = true;
        };
        const whenDisconnected = () => {
            if (isActive) {
                connectFakeGraph();
                disconnectOutputsGraph();
            }
            isConnected = false;
        };
        connectFakeGraph();
        return monitorConnections(nativeAudioWorkletNodeFaker, whenConnected, whenDisconnected);
    };
};
//# sourceMappingURL=native-audio-worklet-node-faker-factory.js.map