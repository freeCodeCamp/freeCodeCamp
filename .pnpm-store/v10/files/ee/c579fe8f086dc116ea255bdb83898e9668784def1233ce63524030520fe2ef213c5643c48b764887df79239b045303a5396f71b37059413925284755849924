import { assignNativeAudioNodeAudioParamValue } from '../helpers/assign-native-audio-node-audio-param-value';
import { assignNativeAudioNodeOption } from '../helpers/assign-native-audio-node-option';
import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
import { TNativePannerNodeFactoryFactory } from '../types';

export const createNativePannerNodeFactory: TNativePannerNodeFactoryFactory = (createNativePannerNodeFaker) => {
    return (nativeContext, options) => {
        const nativePannerNode = nativeContext.createPanner();

        // Bug #124: Safari does not support modifying the orientation and the position with AudioParams.
        if (nativePannerNode.orientationX === undefined) {
            return createNativePannerNodeFaker(nativeContext, options);
        }

        assignNativeAudioNodeOptions(nativePannerNode, options);

        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'orientationX');
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'orientationY');
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'orientationZ');
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'positionX');
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'positionY');
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'positionZ');

        assignNativeAudioNodeOption(nativePannerNode, options, 'coneInnerAngle');
        assignNativeAudioNodeOption(nativePannerNode, options, 'coneOuterAngle');
        assignNativeAudioNodeOption(nativePannerNode, options, 'coneOuterGain');
        assignNativeAudioNodeOption(nativePannerNode, options, 'distanceModel');
        assignNativeAudioNodeOption(nativePannerNode, options, 'maxDistance');
        assignNativeAudioNodeOption(nativePannerNode, options, 'panningModel');
        assignNativeAudioNodeOption(nativePannerNode, options, 'refDistance');
        assignNativeAudioNodeOption(nativePannerNode, options, 'rolloffFactor');

        return nativePannerNode;
    };
};
