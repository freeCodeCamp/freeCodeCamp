export const testAudioBufferSourceNodeStartMethodOffsetClampingSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    const nativeAudioBuffer = nativeContext.createBuffer(1, 1, 44100);
    nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
    try {
        nativeAudioBufferSourceNode.start(0, 1);
    }
    catch {
        return false;
    }
    return true;
};
//# sourceMappingURL=test-audio-buffer-source-node-start-method-offset-clamping-support.js.map