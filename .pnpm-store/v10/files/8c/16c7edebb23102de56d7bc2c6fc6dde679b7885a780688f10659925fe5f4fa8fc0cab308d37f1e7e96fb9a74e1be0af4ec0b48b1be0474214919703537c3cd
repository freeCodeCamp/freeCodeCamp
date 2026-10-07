import { TIsNativeContextFactory, TNativeAudioContext } from '../types';

export const createIsNativeContext: TIsNativeContextFactory = (isNativeAudioContext, isNativeOfflineAudioContext) => {
    return (anything): anything is TNativeAudioContext => {
        return isNativeAudioContext(anything) || isNativeOfflineAudioContext(anything);
    };
};
