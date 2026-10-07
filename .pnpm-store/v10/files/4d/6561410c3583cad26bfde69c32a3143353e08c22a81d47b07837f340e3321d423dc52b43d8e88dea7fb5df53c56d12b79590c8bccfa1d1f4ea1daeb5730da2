import { TIsNativeAudioNodeFactory, TNativeAudioNode } from '../types';

export const createIsNativeAudioNode: TIsNativeAudioNodeFactory = (window) => {
    return (anything): anything is TNativeAudioNode => {
        return window !== null && typeof window.AudioNode === 'function' && anything instanceof window.AudioNode;
    };
};
