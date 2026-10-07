export const testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport = (nativeContext) => {
    const nativeAudioBuffer = nativeContext.createBuffer(1, 1, 44100);
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
    nativeAudioBufferSourceNode.start();
    nativeAudioBufferSourceNode.stop();
    try {
        nativeAudioBufferSourceNode.stop();
        return true;
    }
    catch {
        return false;
    }
};
//# sourceMappingURL=test-audio-scheduled-source-node-stop-method-consecutive-calls-support.js.map