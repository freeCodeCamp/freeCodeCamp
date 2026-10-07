import { IAudioContext, IMinimalAudioContext } from '../interfaces';
import { TIsAnyAudioContextFactory, TNativeAudioContext } from '../types';

export const createIsAnyAudioContext: TIsAnyAudioContextFactory = (contextStore, isNativeAudioContext) => {
    return (anything): anything is IAudioContext | IMinimalAudioContext | TNativeAudioContext => {
        const nativeContext = contextStore.get(<any>anything);

        return isNativeAudioContext(nativeContext) || isNativeAudioContext(anything);
    };
};
