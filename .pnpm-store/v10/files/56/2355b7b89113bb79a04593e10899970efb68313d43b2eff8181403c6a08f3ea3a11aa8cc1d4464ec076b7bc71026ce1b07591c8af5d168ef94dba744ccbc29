import { NODE_TO_PROCESSOR_MAPS } from '../globals';
import { createAudioWorkletProcessorPromise } from './create-audio-worklet-processor-promise';
export const createAudioWorkletProcessor = (nativeContext, nativeAudioWorkletNode, processorConstructor, audioWorkletNodeOptions) => {
    let nodeToProcessorMap = NODE_TO_PROCESSOR_MAPS.get(nativeContext);
    if (nodeToProcessorMap === undefined) {
        nodeToProcessorMap = new WeakMap();
        NODE_TO_PROCESSOR_MAPS.set(nativeContext, nodeToProcessorMap);
    }
    const audioWorkletProcessorPromise = createAudioWorkletProcessorPromise(processorConstructor, audioWorkletNodeOptions);
    nodeToProcessorMap.set(nativeAudioWorkletNode, audioWorkletProcessorPromise);
    return audioWorkletProcessorPromise;
};
//# sourceMappingURL=create-audio-worklet-processor.js.map