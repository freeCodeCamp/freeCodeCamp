import { TIsNativeOfflineAudioContextFactory, TNativeOfflineAudioContext } from '../types';

export const createIsNativeOfflineAudioContext: TIsNativeOfflineAudioContextFactory = (nativeOfflineAudioContextConstructor) => {
    return (anything): anything is TNativeOfflineAudioContext => {
        return nativeOfflineAudioContextConstructor !== null && anything instanceof nativeOfflineAudioContextConstructor;
    };
};
