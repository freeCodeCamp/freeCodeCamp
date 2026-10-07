import { TIsNativeAudioContextFactory, TNativeAudioContext } from '../types';

export const createIsNativeAudioContext: TIsNativeAudioContextFactory = (nativeAudioContextConstructor) => {
    return (anything): anything is TNativeAudioContext => {
        return nativeAudioContextConstructor !== null && anything instanceof nativeAudioContextConstructor;
    };
};
