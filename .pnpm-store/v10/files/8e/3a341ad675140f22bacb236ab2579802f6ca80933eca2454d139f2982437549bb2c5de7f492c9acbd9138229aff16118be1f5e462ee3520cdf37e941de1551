export const createTestOfflineAudioContextCurrentTimeSupport = (createNativeGainNode, nativeOfflineAudioContextConstructor) => {
    return () => {
        if (nativeOfflineAudioContextConstructor === null) {
            return Promise.resolve(false);
        }
        const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
        // Bug #48: Safari does not render an OfflineAudioContext without any connected node.
        const gainNode = createNativeGainNode(nativeOfflineAudioContext, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: 0
        });
        // Bug #21: Safari does not support promises yet.
        return new Promise((resolve) => {
            nativeOfflineAudioContext.oncomplete = () => {
                gainNode.disconnect();
                resolve(nativeOfflineAudioContext.currentTime !== 0);
            };
            nativeOfflineAudioContext.startRendering();
        });
    };
};
//# sourceMappingURL=test-offline-audio-context-current-time-support.js.map