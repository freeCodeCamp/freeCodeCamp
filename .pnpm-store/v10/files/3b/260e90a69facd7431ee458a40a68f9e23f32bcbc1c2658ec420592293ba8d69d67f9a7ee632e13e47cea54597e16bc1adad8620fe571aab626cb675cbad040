export const testAudioScheduledSourceNodeStartMethodNegativeParametersSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createOscillator();
    try {
        nativeAudioBufferSourceNode.start(-1);
    }
    catch (err) {
        return err instanceof RangeError;
    }
    return false;
};
//# sourceMappingURL=test-audio-scheduled-source-node-start-method-negative-parameters-support.js.map