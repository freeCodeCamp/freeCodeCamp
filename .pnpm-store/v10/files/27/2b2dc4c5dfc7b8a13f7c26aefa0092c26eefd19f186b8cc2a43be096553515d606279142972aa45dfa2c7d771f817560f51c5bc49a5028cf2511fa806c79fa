import { TCreateNativeOfflineAudioContextFactory } from '../types';

export const createCreateNativeOfflineAudioContext: TCreateNativeOfflineAudioContextFactory = (
    createNotSupportedError,
    nativeOfflineAudioContextConstructor
) => {
    return (numberOfChannels, length, sampleRate) => {
        if (nativeOfflineAudioContextConstructor === null) {
            throw new Error('Missing the native OfflineAudioContext constructor.');
        }

        try {
            return new nativeOfflineAudioContextConstructor(numberOfChannels, length, sampleRate);
        } catch (err) {
            // Bug #143, #144 & #146: Safari throws a SyntaxError when numberOfChannels, length or sampleRate are invalid.
            if (err.name === 'SyntaxError') {
                throw createNotSupportedError();
            }

            throw err;
        }
    };
};
