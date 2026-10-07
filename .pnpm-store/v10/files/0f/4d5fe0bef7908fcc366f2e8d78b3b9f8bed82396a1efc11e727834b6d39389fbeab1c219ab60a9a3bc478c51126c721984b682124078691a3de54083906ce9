export const createCreateNativeOfflineAudioContext = (createNotSupportedError, nativeOfflineAudioContextConstructor) => {
    return (numberOfChannels, length, sampleRate) => {
        if (nativeOfflineAudioContextConstructor === null) {
            throw new Error('Missing the native OfflineAudioContext constructor.');
        }
        try {
            return new nativeOfflineAudioContextConstructor(numberOfChannels, length, sampleRate);
        }
        catch (err) {
            // Bug #143, #144 & #146: Safari throws a SyntaxError when numberOfChannels, length or sampleRate are invalid.
            if (err.name === 'SyntaxError') {
                throw createNotSupportedError();
            }
            throw err;
        }
    };
};
//# sourceMappingURL=create-native-offline-audio-context.js.map