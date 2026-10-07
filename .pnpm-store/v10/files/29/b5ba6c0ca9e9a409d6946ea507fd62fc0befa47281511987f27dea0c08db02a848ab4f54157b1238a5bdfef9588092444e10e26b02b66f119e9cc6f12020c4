import { TTestAudioContextCloseMethodSupportFactory } from '../types';

export const createTestAudioContextCloseMethodSupport: TTestAudioContextCloseMethodSupportFactory = (nativeAudioContextConstructor) => {
    return () => {
        if (nativeAudioContextConstructor === null) {
            return false;
        }

        // Try to check the prototype before constructing the AudioContext.
        if (nativeAudioContextConstructor.prototype !== undefined && nativeAudioContextConstructor.prototype.close !== undefined) {
            return true;
        }

        const audioContext = new nativeAudioContextConstructor();

        const isAudioContextClosable = audioContext.close !== undefined;

        try {
            audioContext.close();
        } catch {
            // Ignore errors.
        }

        return isAudioContextClosable;
    };
};
