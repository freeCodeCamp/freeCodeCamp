import { NODE_TO_PROCESSOR_MAPS } from '../globals';
import { IAudioNode, IAudioWorkletProcessor } from '../interfaces';
import { TContext, TNativeAudioWorkletNode, TNativeOfflineAudioContext } from '../types';
import { getNativeAudioNode } from './get-native-audio-node';
import { getValueForKey } from './get-value-for-key';

export const getAudioWorkletProcessor = <T extends TContext>(
    nativeOfflineAudioContext: TNativeOfflineAudioContext,
    proxy: IAudioNode<T>
): Promise<IAudioWorkletProcessor> => {
    const nodeToProcessorMap = getValueForKey(NODE_TO_PROCESSOR_MAPS, nativeOfflineAudioContext);
    const nativeAudioWorkletNode = getNativeAudioNode<T, TNativeAudioWorkletNode>(proxy);

    return getValueForKey(nodeToProcessorMap, nativeAudioWorkletNode);
};
