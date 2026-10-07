import { assignNativeAudioNodeAudioParamValue } from '../helpers/assign-native-audio-node-audio-param-value';
import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
export const createNativeStereoPannerNodeFactory = (createNativeStereoPannerNodeFaker, createNotSupportedError) => {
    return (nativeContext, options) => {
        const channelCountMode = options.channelCountMode;
        /*
         * Bug #105: The channelCountMode of 'clamped-max' should be supported. However it is not possible to write a polyfill for Safari
         * which supports it and therefore it can't be supported at all.
         */
        if (channelCountMode === 'clamped-max') {
            throw createNotSupportedError();
        }
        // Bug #105: Safari does not support the StereoPannerNode.
        if (nativeContext.createStereoPanner === undefined) {
            return createNativeStereoPannerNodeFaker(nativeContext, options);
        }
        const nativeStereoPannerNode = nativeContext.createStereoPanner();
        assignNativeAudioNodeOptions(nativeStereoPannerNode, options);
        assignNativeAudioNodeAudioParamValue(nativeStereoPannerNode, options, 'pan');
        /*
         * Bug #105: The channelCountMode of 'clamped-max' should be supported. However it is not possible to write a polyfill for Safari
         * which supports it and therefore it can't be supported at all.
         */
        Object.defineProperty(nativeStereoPannerNode, 'channelCountMode', {
            get: () => channelCountMode,
            set: (value) => {
                if (value !== channelCountMode) {
                    throw createNotSupportedError();
                }
            }
        });
        return nativeStereoPannerNode;
    };
};
//# sourceMappingURL=native-stereo-panner-node-factory.js.map