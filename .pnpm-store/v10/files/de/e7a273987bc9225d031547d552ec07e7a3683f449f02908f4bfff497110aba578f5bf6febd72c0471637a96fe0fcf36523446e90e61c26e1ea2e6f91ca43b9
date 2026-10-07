import { NODE_TO_PROCESSOR_MAPS } from '../globals';
import { IAudioWorkletNodeOptions, IAudioWorkletProcessor, IAudioWorkletProcessorConstructor } from '../interfaces';
import { TNativeAudioWorkletNode, TNativeContext } from '../types';
import { createAudioWorkletProcessorPromise } from './create-audio-worklet-processor-promise';

export const createAudioWorkletProcessor = (
    nativeContext: TNativeContext,
    nativeAudioWorkletNode: TNativeAudioWorkletNode,
    processorConstructor: IAudioWorkletProcessorConstructor,
    audioWorkletNodeOptions: IAudioWorkletNodeOptions
): Promise<IAudioWorkletProcessor> => {
    let nodeToProcessorMap = NODE_TO_PROCESSOR_MAPS.get(nativeContext);

    if (nodeToProcessorMap === undefined) {
        nodeToProcessorMap = new WeakMap();

        NODE_TO_PROCESSOR_MAPS.set(nativeContext, nodeToProcessorMap);
    }

    const audioWorkletProcessorPromise = createAudioWorkletProcessorPromise(processorConstructor, audioWorkletNodeOptions);

    nodeToProcessorMap.set(nativeAudioWorkletNode, audioWorkletProcessorPromise);

    return audioWorkletProcessorPromise;
};
