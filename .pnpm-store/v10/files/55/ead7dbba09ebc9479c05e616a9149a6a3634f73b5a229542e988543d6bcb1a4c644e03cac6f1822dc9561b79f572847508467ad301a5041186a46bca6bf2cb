import { TTestStereoPannerNodeDefaultValueSupportFactory } from '../types';

/**
 * Firefox up to version 62 did not kick off the processing of the StereoPannerNode if the value of pan was zero.
 */
export const createTestStereoPannerNodeDefaultValueSupport: TTestStereoPannerNodeDefaultValueSupportFactory = (
    nativeOfflineAudioContextConstructor
) => {
    return () => {
        if (nativeOfflineAudioContextConstructor === null) {
            return Promise.resolve(false);
        }

        const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);

        /*
         * Bug #105: Safari does not support the StereoPannerNode. Therefore the returned value should normally be false but the faker does
         * support the tested behaviour.
         */
        if (nativeOfflineAudioContext.createStereoPanner === undefined) {
            return Promise.resolve(true);
        }

        // Bug #62: Safari does not support ConstantSourceNodes.
        if (nativeOfflineAudioContext.createConstantSource === undefined) {
            return Promise.resolve(true);
        }

        const constantSourceNode = nativeOfflineAudioContext.createConstantSource();
        const stereoPanner = nativeOfflineAudioContext.createStereoPanner();

        constantSourceNode.channelCount = 1;
        constantSourceNode.offset.value = 1;

        stereoPanner.channelCount = 1;

        constantSourceNode.start();

        constantSourceNode.connect(stereoPanner).connect(nativeOfflineAudioContext.destination);

        return nativeOfflineAudioContext.startRendering().then((buffer) => buffer.getChannelData(0)[0] !== 1);
    };
};
