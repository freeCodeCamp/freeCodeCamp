import { assignNativeAudioNodeAudioParamValue } from '../helpers/assign-native-audio-node-audio-param-value';
import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
import { TNativeDelayNodeFactory } from '../types';

export const createNativeDelayNode: TNativeDelayNodeFactory = (nativeContext, options) => {
    const nativeDelayNode = nativeContext.createDelay(options.maxDelayTime);

    assignNativeAudioNodeOptions(nativeDelayNode, options);

    assignNativeAudioNodeAudioParamValue(nativeDelayNode, options, 'delayTime');

    return nativeDelayNode;
};
