import { assignNativeAudioNodeAudioParamValue } from '../helpers/assign-native-audio-node-audio-param-value';
import { assignNativeAudioNodeOption } from '../helpers/assign-native-audio-node-option';
import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
export const createNativeBiquadFilterNode = (nativeContext, options) => {
    const nativeBiquadFilterNode = nativeContext.createBiquadFilter();
    assignNativeAudioNodeOptions(nativeBiquadFilterNode, options);
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, 'Q');
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, 'detune');
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, 'frequency');
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, 'gain');
    assignNativeAudioNodeOption(nativeBiquadFilterNode, options, 'type');
    return nativeBiquadFilterNode;
};
//# sourceMappingURL=native-biquad-filter-node.js.map