import { TTestAudioBufferCopyChannelMethodsSubarraySupportFactory } from '../types';

/*
 * Firefox up to version 67 didn't fully support the copyFromChannel() and copyToChannel() methods. Therefore testing one of those methods
 * is enough to know if the other one is supported as well.
 */
export const createTestAudioBufferCopyChannelMethodsSubarraySupport: TTestAudioBufferCopyChannelMethodsSubarraySupportFactory = (
    nativeOfflineAudioContextConstructor
) => {
    return () => {
        if (nativeOfflineAudioContextConstructor === null) {
            return false;
        }

        const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
        const nativeAudioBuffer = nativeOfflineAudioContext.createBuffer(1, 1, 44100);

        // Bug #5: Safari does not support copyFromChannel() and copyToChannel().
        if (nativeAudioBuffer.copyToChannel === undefined) {
            return true;
        }

        const source = new Float32Array(2);

        try {
            nativeAudioBuffer.copyFromChannel(source, 0, 0);
        } catch {
            return false;
        }

        return true;
    };
};
