import { TTestAudioContextOptionsSupportFactory } from '../types';

export const createTestAudioContextOptionsSupport: TTestAudioContextOptionsSupportFactory = (nativeAudioContextConstructor) => {
    return () => {
        if (nativeAudioContextConstructor === null) {
            return false;
        }

        let audioContext;

        try {
            audioContext = new nativeAudioContextConstructor({ latencyHint: 'balanced' });
        } catch {
            return false;
        }

        audioContext.close();

        return true;
    };
};
