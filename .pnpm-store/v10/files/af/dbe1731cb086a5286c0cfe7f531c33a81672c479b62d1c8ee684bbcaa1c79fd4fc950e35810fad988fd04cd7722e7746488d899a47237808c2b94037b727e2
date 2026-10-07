import { assignNativeAudioNodeAudioParamValue } from '../helpers/assign-native-audio-node-audio-param-value';
import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
export const createNativeDelayNode = (nativeContext, options) => {
    const nativeDelayNode = nativeContext.createDelay(options.maxDelayTime);
    assignNativeAudioNodeOptions(nativeDelayNode, options);
    assignNativeAudioNodeAudioParamValue(nativeDelayNode, options, 'delayTime');
    return nativeDelayNode;
};
//# sourceMappingURL=native-delay-node.js.map