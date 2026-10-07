// Chrome up to version v80, Edge up to version v80 and Opera up to version v67 did not allow to set the channelCount property of a ConvolverNode to 1. They also did not allow to set the channelCountMode to 'explicit'.
export const createTestConvolverNodeChannelCountSupport = (nativeOfflineAudioContextConstructor) => {
    return () => {
        if (nativeOfflineAudioContextConstructor === null) {
            return false;
        }
        const offlineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
        const nativeConvolverNode = offlineAudioContext.createConvolver();
        try {
            nativeConvolverNode.channelCount = 1;
        }
        catch {
            return false;
        }
        return true;
    };
};
//# sourceMappingURL=test-convolver-node-channel-count-support.js.map