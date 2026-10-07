import { TIsNativeAudioParamFactory, TNativeAudioParam } from '../types';

export const createIsNativeAudioParam: TIsNativeAudioParamFactory = (window) => {
    return (anything): anything is TNativeAudioParam => {
        return window !== null && typeof window.AudioParam === 'function' && anything instanceof window.AudioParam;
    };
};
