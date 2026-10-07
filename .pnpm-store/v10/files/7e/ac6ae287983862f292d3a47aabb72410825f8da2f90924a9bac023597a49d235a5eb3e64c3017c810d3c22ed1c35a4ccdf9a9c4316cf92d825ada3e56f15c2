export const testAudioBufferCopyChannelMethodsOutOfBoundsSupport = (nativeAudioBuffer) => {
    try {
        nativeAudioBuffer.copyToChannel(new Float32Array(1), 0, -1);
    }
    catch {
        return false;
    }
    return true;
};
//# sourceMappingURL=test-audio-buffer-copy-channel-methods-out-of-bounds-support.js.map