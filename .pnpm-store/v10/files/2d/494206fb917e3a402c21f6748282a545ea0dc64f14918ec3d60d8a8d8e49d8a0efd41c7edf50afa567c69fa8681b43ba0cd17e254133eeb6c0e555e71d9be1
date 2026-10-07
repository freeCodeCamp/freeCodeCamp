import { assignNativeAudioNodeAudioParamValue } from '../helpers/assign-native-audio-node-audio-param-value';
import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
import { TNativeGainNodeFactory } from '../types';

export const createNativeGainNode: TNativeGainNodeFactory = (nativeContext, options) => {
    const nativeGainNode = nativeContext.createGain();

    assignNativeAudioNodeOptions(nativeGainNode, options);

    assignNativeAudioNodeAudioParamValue(nativeGainNode, options, 'gain');

    return nativeGainNode;
};
