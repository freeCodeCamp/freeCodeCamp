import { NODE_TO_PROCESSOR_MAPS } from '../globals';
import { getNativeAudioNode } from './get-native-audio-node';
import { getValueForKey } from './get-value-for-key';
export const getAudioWorkletProcessor = (nativeOfflineAudioContext, proxy) => {
    const nodeToProcessorMap = getValueForKey(NODE_TO_PROCESSOR_MAPS, nativeOfflineAudioContext);
    const nativeAudioWorkletNode = getNativeAudioNode(proxy);
    return getValueForKey(nodeToProcessorMap, nativeAudioWorkletNode);
};
//# sourceMappingURL=get-audio-worklet-processor.js.map