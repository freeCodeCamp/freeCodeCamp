import { TNativeAudioBuffer } from '../types';

export const testAudioBufferCopyChannelMethodsOutOfBoundsSupport = (nativeAudioBuffer: TNativeAudioBuffer): boolean => {
    try {
        nativeAudioBuffer.copyToChannel(new Float32Array(1), 0, -1);
    } catch {
        return false;
    }

    return true;
};
