import { IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TIsAnyOfflineAudioContextFactory, TNativeOfflineAudioContext } from '../types';

export const createIsAnyOfflineAudioContext: TIsAnyOfflineAudioContextFactory = (contextStore, isNativeOfflineAudioContext) => {
    return (anything): anything is IMinimalOfflineAudioContext | IOfflineAudioContext | TNativeOfflineAudioContext => {
        const nativeContext = contextStore.get(<any>anything);

        return isNativeOfflineAudioContext(nativeContext) || isNativeOfflineAudioContext(anything);
    };
};
